import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { Bio, Entry } from '../../../interfaces/portfolio.interfaces';

@Component({
    selector: 'shared-bio-list',
    templateUrl: 'bio.list.component.html'
})

export class BioListComponent implements OnInit {
    constructor(private portfolioService:PortfolioService) { }

    public entries:Entry<Bio>[] = [];

    ngOnInit() { 
        this.portfolioService.getBioEntries().subscribe(entries => {
            this.entries = entries;
        });
    }
}