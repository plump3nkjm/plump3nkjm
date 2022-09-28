const CracoAlias = require("craco-alias");
module.exports = {
    mode: process.env.REACT_APP_ENVIROMENT,
    output: {
        path: __dirname
    },
    // webpack setting
    webpack: {
        configure: (webpackConfig) => {
            if (process.env.NODE_ENV === 'production') {
                const TerserPlugin = webpackConfig.optimization.minimizer.find((i) => i.constructor.name === 'TerserPlugin');
                if (TerserPlugin) {
                    TerserPlugin.options.terserOptions.compress['drop_console'] = true;
                }
            }
            return webpackConfig;
        },
    },
    // craco plugin setting
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                baseUrl: "./src",
                tsConfigPath: "./tsconfig.paths.json"
            }
        }
    ]
};
