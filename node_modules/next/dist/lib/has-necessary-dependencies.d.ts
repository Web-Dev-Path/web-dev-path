export declare type NecessaryDependencies = {
    resolved: string;
};
export declare function hasNecessaryDependencies(baseDir: string, checkTSDeps: boolean, checkESLintDeps: boolean, eslintrcFile?: string | null): Promise<NecessaryDependencies>;
