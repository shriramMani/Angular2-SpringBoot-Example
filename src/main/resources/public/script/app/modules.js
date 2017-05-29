"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../lib/node_modules/@angular/core");
const platform_browser_1 = require("../lib/node_modules/@angular/platform-browser");
//import { FormsModule }   from '../lib/node_modules/@angular/forms';
//import { HttpModule }    from '../lib/node_modules/@angular/http';
const common_1 = require("../lib/node_modules/@angular/common");
const bootstrap_1 = require("./bootstrap");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_1.CommonModule],
        declarations: [bootstrap_1.BootstrapModule],
        //providers: [Configuration],
        //entryComponents: [AppComponent],
        bootstrap: [bootstrap_1.BootstrapModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=modules.js.map