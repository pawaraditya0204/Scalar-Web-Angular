import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-dot-net',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dot-net.component.html',
    styleUrl: './dot-net.component.css'
})
export class DotNetComponent {
    benefit_content: any = [
        {
            numbering: '01',
            heading: 'Microsoft certification',
            content: 'Senwell Group Private Limited is a Microsoft-certified partner, which means that all of the our.NET projects receive direct Microsoft technical support.'
        },
        {
            numbering: '02',
            heading: 'Transparency in business',
            content: 'From the beginning, you have unrestricted access to the outcomes of our efforts on your project.'
        },
        {
            numbering: '03',
            heading: ' Workflow that is adaptable',
            content: 'When we set up our technical cooperation, we`ll tailor our operations to your schedule and goals.'
        },
    ]
    benefit_content_remaining: any = [
        {
            numbering: '04',
            heading: 'Quality comes first',
            content: 'We test apps in circumstances that most developers do not expect to occur since we are quality-conscious.'
        },
        {
            numbering: '05',
            heading: 'Complete coverage',
            content: 'System administration, equipment, and human resource management are all taken care of for you.'
        },
        {
            numbering: '06',
            heading: 'Lifetime updates and support',
            content: 'Our job does not end with coding; we will continue to ensure that your product is current and functional'
        },
    ]
    choose_us: any = [
        {
            header: 'Quick start',
            content: 'Our collaboration typically begins within a few days as we navigate around bureaucratic procedures in our workflows.'
        },
        {
            header: 'Fair deal',
            content: 'Your level of involvement in the development is entirely up to you, and we maintain complete transparency in all of our operations.'
        },
        {
            header: 'Flawless code',
            content: 'We uphold coding and software testing to rigorous standards, driven by a shared passion for both. Your expectations for quality assurance align with our unwavering dedication.'
        },
        {
            header: 'Industry experts',
            content: 'Rest assured, as your project advances in technical complexity over time, the Senwell Group Private Limited team will adeptly adapt to meet the evolving challenges.'
        },
    ]
}
