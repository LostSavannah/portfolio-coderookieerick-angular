import { Component, Input } from '@angular/core';

@Component({
    selector: 'shared-jumbotron',
    templateUrl: 'jumbo.component.html'
})

export class JumboComponent {
    constructor() { }
    @Input()
    public lines:string[] = [];
    @Input()
    public links:{name:string, location:string}[] = [];
}