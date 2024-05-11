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
    services: any[] = [
        {
            service_header: 'Mobile Development',
            service_content: 'We, at Scalar Techhub offer appealing and impressive applications to ensure your application reaches the target audience, and solves its purpose.',
        },
        {
            service_header: 'Web Development',
            service_content: 'Count on our talented team with exceptional web development experience to establish your brand, automatize processes, collaboration or just about anything that you can think on web. We hand-hold you at every single.',
        },
        {
            service_header: 'Cloud services',
            service_content: 'We help clients by providing them cloud based mobile application, web application services. No matter how big or small the projects, our cloud solutions help firms avoid unnecessary costs on infrastructure.',
        },
        {
            service_header: 'UI/UX development',
            service_content: 'At Scalar Techhub we offer the excellent Responsive web design services making the websites and applications smart enough to resize and adapt its content on the basis of the screen size of the device.',
        },
        {
            service_header: 'Artificial intelligence',
            service_content: 'We are on the brink of an age where AI-enabled smart machines, fueled by advances in hardware and deep neural networks will think, act and even make decisions much the way a human would — enabled by unprecedented volumes of data.',
        },
        {
            service_header: 'Analytics',
            service_content: 'Scalar Techhub can help you leverage the data that you already have as well as combine it with third-party data to create real results. Regardless of the industry sector you’re in, acquiring and analyzing new and existing data will allow you to gain additional insights into market trends.',
        },
    ]

    constructor() { }

    ngOnInit(): void { }

    changeActiveTab(tab): void {
        this.active_technology_tab = tab;
    }
}
