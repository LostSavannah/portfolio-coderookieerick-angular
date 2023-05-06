import { Component, Input } from '@angular/core';

@Component({
    selector: 'shared-bio',
    template: `
    <div class="shared-bio text-center">{{content}}</div>
    `
})

export class BioComponent {
    constructor() { }
    @Input()
    public content:string = '';
}