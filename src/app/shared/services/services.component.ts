import { Component, OnInit } from '@angular/core';
import { TechnologyEnum } from 'src/enum/technology.enum';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
/**
 * Services component
 */
export class ServicesComponent implements OnInit {
    technology_tabs = TechnologyEnum;
    active_technology_tab = this.technology_tabs.mobility;
    constructor() { }
    changeActiveTab(tab): void {
        this.active_technology_tab = tab;
    }
    ngOnInit(): void { }
}
