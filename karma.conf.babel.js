import KarmaJasmine from 'karma-jasmine';
import KarmaWebpack from 'karma-webpack';
import KarmaJasmineHtmlReporter from 'karma-jasmine-html-reporter';
import KarmaSourcemapLoader from 'karma-sourcemap-loader';
import KarmaPhantomjsLauncher from 'karma-phantomjs-launcher';
import KarmaNotifyReporter from 'karma-notify-reporter';
import webpackConfig from './webpack.config.test.babel';

export default function setConfig(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: ['src/tests.js'],
        preprocessors: {
            'src/tests.js': ['webpack', 'sourcemap']
        },
        plugins: [
            KarmaJasmine,
            KarmaWebpack,
            KarmaJasmineHtmlReporter,
            KarmaNotifyReporter,
            KarmaSourcemapLoader,
            KarmaPhantomjsLauncher,
        ],
        reporters: [
            'progress',
            'kjhtml',
            'notify',
        ],
        webpack: webpackConfig,
        notifyReporter: {
            reportEachFailure: false, // Default: false, Will notify on every failed spec
            reportSuccess: false, // Default: true, Will notify when a suite was successful
        },
    });
}
