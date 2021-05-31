export declare function install(useWebpack5: boolean): void;
export declare type CheckReasons = 'test-mode' | 'no-config' | 'future-flag' | 'no-future-flag' | 'no-webpack-config' | 'webpack-config';
export declare type CheckResult = {
    enabled: boolean;
    reason: CheckReasons;
};
export declare function shouldLoadWithWebpack5(phase: string, dir: string): Promise<CheckResult>;
