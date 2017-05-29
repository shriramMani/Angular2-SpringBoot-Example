/**
 * Created by shriram on 4/10/2017.
 *
 * System configuration for Angular 2
 * This file allows to configure SystemJS to load modules compiled using the TypeScript compiler.
 * For anonymous modules (one module per JS file), it allows to map the name of modules to
 * JS files that actually contains the module JavaScript code.
 * Adjust as necessary for your application needs.
 *
 */
(function (global) {

    var map = {
            'app': 'script/app',
            '@angular': 'script/lib/node_modules/@angular',
            'angular2-in-memory-web-api': 'script/lib/node_modules/angular2-in-memory-web-api',
            'rxjs': 'script/lib/node_modules/rxjs'
        },
        packages = {
            'app': {main: 'app/main.js', defaultExtension: 'js'},
            'angular2-in-memory-web-api': {main: './index.js', defaultExtension: 'js'},
            'rxjs': {defaultExtension: 'js'}
        },
        ngPackageNames = [
            'common',
            'compiler',
            'core',
            'http',
            'platform-browser',
            'platform-browser-dynamic',
            'router',
            'forms'
        ],

        tests = [
            'core/testing',
            'common/testing',
            'compiler/testing',
            'platform-browser/testing',
            'platform-browser-dynamic/testing',
            'http/testing',
            'router/testing',
            'forms/testing'
        ];

    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {main: '/bundles/' + pkgName + '.umd.min.js', defaultExtension: 'js'}
    }

    ngPackageNames.forEach(packUmd);

    tests.forEach(function (test) {
        return packages['@angular/' + test] = {
            main: '/bundles/' + test.replace(/\//, '-') + '.umd.min.js',
            defaultExtension: 'js'
        }
    })

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);
