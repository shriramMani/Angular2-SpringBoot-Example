import { Component } from '../lib/node_modules/@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>`,
})
export class BootstrapModule {
    name : string = 'First Successful Load, not yet???';
}