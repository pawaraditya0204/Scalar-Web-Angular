import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-react',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './react.component.html',
    styleUrl: './react.component.css'
})
export class ReactComponent {

    benefit_content: any = [
        {
            numbering: '01',
            heading: 'Internal Educational Program',
            content: 'Thanks to our internal educational courses, our front-end developers are always at the top of their game. Their knowledge goes far beyond keeping up with the latest technological innovations.'
        },
        {
            numbering: '02',
            heading: 'Instant resource replacement',
            content: 'We carefully select the finest developers for every project, but with almost 150+ engineers at work, we`re always ready to try something different.'
        },
        {
            numbering: '03',
            heading: 'Transparent Code Monitoring ',
            content: 'We have a quality assurance system that really is quick, accessible, and transparent. You could relax knowing that every piece of code will be inspected.'
        },
    ]
    benefit_content_remaining: any = [
        {
            numbering: '04',
            heading: 'Tailoring Processes if Needed',
            content: 'Every project and organization demands a different strategy. We embrace Agile, but we`ve also collaborated with Waterfall, V-Model, Spiral, and other approaches.'
        },
        {
            numbering: '05',
            heading: 'System Administration Included',
            content: 'We deliver system administration services at no incremental cost. Your business functions will work smoothly, and your IT management expenses will be slashed.'
        },
        {
            numbering: '06',
            heading: 'Trial Periods for New Employees ',
            content: 'When you bring in new developers, you might execute a short pilot project with them just to ensure that they can match your aspirations and the project`s functional characteristics.'
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
