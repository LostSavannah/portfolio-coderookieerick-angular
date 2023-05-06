import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BioComponent } from './components/bios/bio/bio.component';
import { BioListComponent } from './components/bios/bio.list/bio.list.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { HomePageComponent } from './pages/home/home.component';
import { JumboComponent } from './components/jumbo/jumbo/jumbo.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        HomePageComponent
    ],
    declarations: [
        BioComponent,
        BioListComponent,
        HeaderComponent,
        HomePageComponent,
        JumboComponent
    ],
    providers: [],
})
export class SharedModule { }
