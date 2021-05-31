export declare type LintIntent = {
    firstTimeSetup: boolean;
};
export declare function getLintIntent(eslintrcFile: string | null, pkgJsonEslintConfig: string | null): Promise<LintIntent | false>;
