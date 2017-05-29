import { NgModule }      from '../lib/node_modules/@angular/core';
import { BrowserModule } from '../lib/node_modules/@angular/platform-browser';
//import { FormsModule }   from '../lib/node_modules/@angular/forms';
//import { HttpModule }    from '../lib/node_modules/@angular/http';
import { CommonModule } from '../lib/node_modules/@angular/common';

import { BootstrapModule }  from './bootstrap';

@NgModule({
    imports:      [ BrowserModule, CommonModule ],
    declarations: [ BootstrapModule ],
    //providers: [Configuration],
    //entryComponents: [AppComponent],
    bootstrap:    [ BootstrapModule ]
})
export class AppModule { }
