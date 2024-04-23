import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-android',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './android.component.html',
    styleUrl: './android.component.css'
})
export class AndroidComponent {
    benefit_content: any = [
        {
            numbering: '01',
            heading: 'Free trial periods for new employees.',
            content: 'We give our clients the opportunity to interview candidates in advance of making a final decision, giving them peace of mind that the work will be finished on schedule and within the allocated budget.'
        },
        {
            numbering: '02',
            heading: 'Transparent monitoring of code quality',
            content: 'Engaging Senwell Group Private Limited gives you access to our unique tools, which offer crucial code quality metrics to help your project standardize and continuously maintain ideal standards for code quality.'
        },
        {
            numbering: '03',
            heading: 'Equipment rental included ',
            content: 'Using the workstations and equipment of our professionals is not subject to any additional fees. You also get access to more than 51 real devices for comprehensive app testing, ranging from tablets to smartphones.'
        },
    ]
    benefit_content_remaining: any = [
        {
            numbering: '04',
            heading: 'System management incorporated.',
            content: 'We`ll take care of all administrative and IT support duties, including helping you set up efficient communication channels and incorporate state-of-the-art project management tools, so you can relax and concentrate entirely on the success of your project.'
        },
        {
            numbering: '05',
            heading: 'Company processes when required',
            content: 'Our highly qualified staff can work quickly and easily with your team to improve development processes for maximum project productivity.'
        },
        {
            numbering: '06',
            heading: 'Unwanted resources are immediately replaced.',
            content: 'We take great care when choosing people for our clients. In the event of inconsistencies, a prompt and appropriate substitute is ensured.'
        },
    ]
    choose_us: any = [
        {
            header: 'Start with confidence',
            content: 'Our goal is to help you launch quickly and make sure you’ll want to work with us again.'
        },
        {
            header: '100% Transparency',
            content: 'Clear communication, flexible pricing, and full dedication to your success.'
        },
        {
            header: 'Excellent Code Quality',
            content: 'We check the quality of our code at every step of development to ensure best results.'
        },
        {
            header: 'Cross-domain expertise',
            content: 'Need services beyond front-end development? We will have you covered.'
        },
    ]
}
