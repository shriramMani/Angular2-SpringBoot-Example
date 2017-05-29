FILE: tsconfig.json

// to initiate typescript. Configuration for typescript.

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": [ "es2016", "dom" ],
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true,
    "typeRoots" : ["../lib/node_modules"]
  }

FILE: package.json

// package.json is used by npm to install the dependent libraries. Include all the dependencies (imports) here before running the install command
// Run this file before start coding 'npm install'. Run this script from the lib folder. This installs all the dependency library in the lib/node_modules folder
// It will create the folder (lib/node_modules) and install all dependent libraries
// Details on the package.json is available here -> https://docs.npmjs.com/files/package.json


FILE: systemjs.config.js

/**
 *
 * System configuration for Angular 2
 * This file contains info on the modules to load.
 * For anonymous modules (one module per JS file), it allows to map the name of modules to
 * JS files that actually contains the module JavaScript code.
 * Adjust as necessary for your application needs.
 *
 */

// Library (dependent) files to load onto the browser. Since the libraries needs to be loaded before starting the code, this will be the first script to be called by index (below) and all the file location for the libraries are specified here.
// Then load the main file. By this time the default extension is defined. So the js corresponding to the ts is loaded

FILE: main.ts

// The following imports are done by main and all under modules are bootstrapped
// System.import('script/app/main') this command in index.html is to call this main script to bootstrap

import { platformBrowserDynamic } from '../lib/node_modules/@angular/platform-browser-dynamic';

import { AppModule } from './modules';

platformBrowserDynamic().bootstrapModule(AppModule);


FILE: index.html

//  Scripts to include. The root javascript file is called here to boostrap the application.
// Also my-app is the node that is replaced

    <script src="script/lib/node_modules/core-js/client/shim.min.js"></script>
    <script src="script/lib/node_modules/zone.js/dist/zone.js"></script>
    <script src="script/lib/node_modules/systemjs/dist/system.src.js"></script>

    <script src="script/systemjs.config.js"></script>

    <script>
        // import the 'app' module to boostrap the application
        System.import('script/app/main')
            .catch(function(err){ console.error(err); });
    </script>

</head>

// The whole my-app is replaced with a template. You can name anything you like and the section is replaced

<body>
  <my-app>Loading...</my-app>
</body>

