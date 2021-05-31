"use strict";exports.__esModule=true;exports.default=getConfig;var _fs=require("fs");var _core=require("next/dist/compiled/babel/core");var _coreLibConfig=_interopRequireDefault(require("next/dist/compiled/babel/core-lib-config"));var _util=require("./util");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const nextDistPath=/(next[\\/]dist[\\/]next-server[\\/]lib)|(next[\\/]dist[\\/]client)|(next[\\/]dist[\\/]pages)/;/**
 * The properties defined here are the conditions with which subsets of inputs
 * can be identified that are able to share a common Babel config.  For example,
 * in dev mode, different transforms must be applied to a source file depending
 * on whether you're compiling for the client or for the server - thus `isServer`
 * is germane.
 *
 * However, these characteristics need not protect against circumstances that
 * will not be encountered in Next.js.  For example, a source file may be
 * transformed differently depending on whether we're doing a production compile
 * or for HMR in dev mode.  However, those two circumstances will never be
 * encountered within the context of a single V8 context (and, thus, shared
 * cache).  Therefore, hasReactRefresh is _not_ germane to caching.
 *
 * NOTE: This approach does not support multiple `.babelrc` files in a
 * single project.  A per-cache-key config will be generated once and,
 * if `.babelrc` is present, that config will be used for any subsequent
 * transformations.
 */const fileExtensionRegex=/\.([a-z]+)$/;function getCacheCharacteristics(loaderOptions,source,filename){var _fileExtensionRegex$e;const{isServer,pagesDir}=loaderOptions;const isPageFile=filename.startsWith(pagesDir);const isNextDist=nextDistPath.test(filename);const hasModuleExports=source.indexOf('module.exports')!==-1;const fileExt=((_fileExtensionRegex$e=fileExtensionRegex.exec(filename))==null?void 0:_fileExtensionRegex$e[1])||'unknown';return{isServer,isPageFile,isNextDist,hasModuleExports,fileExt};}/**
 * Return an array of Babel plugins, conditioned upon loader options and
 * source file characteristics.
 */function getPlugins(loaderOptions,cacheCharacteristics){const{isServer,isPageFile,isNextDist,hasModuleExports}=cacheCharacteristics;const{hasReactRefresh,development}=loaderOptions;const applyCommonJsItem=hasModuleExports?(0,_core.createConfigItem)(require('../plugins/commonjs'),{type:'plugin'}):null;const reactRefreshItem=hasReactRefresh?(0,_core.createConfigItem)([require('react-refresh/babel'),{skipEnvCheck:true}],{type:'plugin'}):null;const noAnonymousDefaultExportItem=hasReactRefresh&&!isServer?(0,_core.createConfigItem)([require('../plugins/no-anonymous-default-export'),{}],{type:'plugin'}):null;const pageConfigItem=!isServer&&isPageFile?(0,_core.createConfigItem)([require('../plugins/next-page-config')],{type:'plugin'}):null;const disallowExportAllItem=!isServer&&isPageFile?(0,_core.createConfigItem)([require('../plugins/next-page-disallow-re-export-all-exports')],{type:'plugin'}):null;const transformDefineItem=(0,_core.createConfigItem)([require.resolve('next/dist/compiled/babel/plugin-transform-define'),{'process.env.NODE_ENV':development?'development':'production','typeof window':isServer?'undefined':'object','process.browser':isServer?false:true},'next-js-transform-define-instance'],{type:'plugin'});const nextSsgItem=!isServer&&isPageFile?(0,_core.createConfigItem)([require.resolve('../plugins/next-ssg-transform')],{type:'plugin'}):null;const commonJsItem=isNextDist?(0,_core.createConfigItem)(require('next/dist/compiled/babel/plugin-transform-modules-commonjs'),{type:'plugin'}):null;return[noAnonymousDefaultExportItem,reactRefreshItem,pageConfigItem,disallowExportAllItem,applyCommonJsItem,transformDefineItem,nextSsgItem,commonJsItem].filter(Boolean);}const isJsonFile=/\.(json|babelrc)$/;const isJsFile=/\.js$/;/**
 * While this function does block execution while reading from disk, it
 * should not introduce any issues.  The function is only invoked when
 * generating a fresh config, and only a small handful of configs should
 * be generated during compilation.
 */function getCustomBabelConfig(configFilePath){if(isJsonFile.exec(configFilePath)){const babelConfigRaw=(0,_fs.readFileSync)(configFilePath,'utf8');return JSON.parse(babelConfigRaw);}else if(isJsFile.exec(configFilePath)){return require(configFilePath);}throw new Error('The Next Babel loader does not support MJS or CJS config files.');}function getCustomPresets(presets,customConfig){presets=[...presets,...(customConfig==null?void 0:customConfig.presets)];const hasNextBabelPreset=((customConfig==null?void 0:customConfig.presets)||[]).filter(preset=>{return preset==='next/babel'||Array.isArray(preset)&&preset[0]==='next/babel';}).reduce((memo,presetFound)=>memo||presetFound,false);if(!hasNextBabelPreset){presets.push('next/babel');}return presets;}/**
 * Generate a new, flat Babel config, ready to be handed to Babel-traverse.
 * This config should have no unresolved overrides, presets, etc.
 */function getFreshConfig(cacheCharacteristics,loaderOptions,target,filename,inputSourceMap){let{presets=[],isServer,pagesDir,development,hasJsxRuntime,configFile}=loaderOptions;let customPlugins=[];if(configFile){const customConfig=getCustomBabelConfig(configFile);presets=getCustomPresets(presets,customConfig);if(customConfig.plugins){customPlugins=customConfig.plugins;}}else{presets=[...presets,'next/babel'];}let options={babelrc:false,cloneInputAst:false,filename,inputSourceMap:inputSourceMap||undefined,// Set the default sourcemap behavior based on Webpack's mapping flag,
// but allow users to override if they want.
sourceMaps:loaderOptions.sourceMaps===undefined?this.sourceMap:loaderOptions.sourceMaps,// Ensure that Webpack will get a full absolute path in the sourcemap
// so that it can properly map the module back to its internal cached
// modules.
sourceFileName:filename,plugins:[...getPlugins(loaderOptions,cacheCharacteristics),...customPlugins],presets,overrides:loaderOptions.overrides,caller:{name:'next-babel-turbo-loader',supportsStaticESM:true,supportsDynamicImport:true,// Provide plugins with insight into webpack target.
// https://github.com/babel/babel-loader/issues/787
target:target,// Webpack 5 supports TLA behind a flag. We enable it by default
// for Babel, and then webpack will throw an error if the experimental
// flag isn't enabled.
supportsTopLevelAwait:true,isServer,pagesDir,isDev:development,hasJsxRuntime,...loaderOptions.caller}};Object.defineProperty(options.caller,'onWarning',{enumerable:false,writable:false,value:reason=>{if(!(reason instanceof Error)){reason=new Error(reason);}this.emitWarning(reason);}});const loadedOptions=(0,_core.loadOptions)(options);const config=(0,_util.consumeIterator)((0,_coreLibConfig.default)(loadedOptions));return config;}/**
 * Each key returned here corresponds with a Babel config that can be shared.
 * The conditions of permissible sharing between files is dependent on specific
 * file attributes and Next.js compiler states: `CharacteristicsGermaneToCaching`.
 */function getCacheKey(cacheCharacteristics){const{isServer,isPageFile,isNextDist,hasModuleExports,fileExt}=cacheCharacteristics;const flags=0|(isServer?0b0001:0)|(isPageFile?0b0010:0)|(isNextDist?0b0100:0)|(hasModuleExports?0b1000:0);return fileExt+flags;}const configCache=new Map();function getConfig({source,loaderOptions,target,filename,inputSourceMap}){const cacheCharacteristics=getCacheCharacteristics(loaderOptions,source,filename);const cacheKey=getCacheKey(cacheCharacteristics);if(configCache.has(cacheKey)){const cachedConfig=configCache.get(cacheKey);return{...cachedConfig,options:{...cachedConfig.options,cwd:loaderOptions.cwd,root:loaderOptions.cwd,filename,sourceFileName:filename}};}const freshConfig=getFreshConfig.call(this,cacheCharacteristics,loaderOptions,target,filename,inputSourceMap);configCache.set(cacheKey,freshConfig);return freshConfig;}
//# sourceMappingURL=get-config.js.map