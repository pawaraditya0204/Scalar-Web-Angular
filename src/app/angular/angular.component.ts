import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-angular',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './angular.component.html',
    styleUrl: './angular.component.css'
})
export class AngularComponent {
    benefit_content: any = [
        {
            numbering: '01',
            heading: 'Quality first',
            content: 'We always prefer code quality over deadlines and budget constraints.You`ll always get the most out of your project plan when you work with Senwell Group Private Limited.'
        },
        {
            numbering: '02',
            heading: 'Customized solutions',
            content: 'We build software from the scratch, so you don`t have to care about project planning, business analysis, UI/UX design, technical support, or anything else.'
        },
        {
            numbering: '03',
            heading: 'Honesty and Integrity',
            content: 'We encourage all of our clients to speak with us in a non-bureaucratic manner, and we set up our working process so that they may easily and immediately access the outcomes of our full-time work.'
        },
    ]
    benefit_content_remaining: any = [
        {
            numbering: '04',
            heading: 'Global reputation',
            content: 'We`ve been working on making our name a globally recognized brand for the past 15 years.It wasn`t for naught, as shown by our industry accolades and projects alongside Fortune 500 business.'
        },
        {
            numbering: '05',
            heading: 'Software development teams',
            content: 'Our Angular development operations, unlike freelance, give specialized teams that can cover all stages of software development. You won`t have to look for a designer or QA analyst since we`ll do it for you.'
        },
        {
            numbering: '06',
            heading: 'Post-production assistance',
            content: 'The development stage, while it may appear to be the end of your adventure, is far from it. In truth, post-production assistance can be stressful and costly; the good news is that we can provide it for all of our productions.'
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
