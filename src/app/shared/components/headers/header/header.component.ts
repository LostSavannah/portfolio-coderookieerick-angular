import { Component, Input } from '@angular/core';

@Component({
    selector: 'shared-header',
    template: `
    <header class="container">
        <div class="row">
            <div *ngFor="let line of linesArray" class="col-12 text-center shared-header-line">
                {{line}}
            </div>        
        </div>
    </header>
    `
})

export class HeaderComponent{
    constructor() { }
    public linesArray:string[] = [];
    
    @Input()
    set lines(raw:string){
        this.linesArray = raw.split(',').map(l => l.trim());
    }
}