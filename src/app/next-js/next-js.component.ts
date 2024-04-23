import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-next-js',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './next-js.component.html',
    styleUrl: './next-js.component.css'
})
export class NextJsComponent {
    benefit_content: any = [
        {
            numbering: '01',
            heading: 'SEO-Friendly Architecture',
            content: 'Optimize your search engine rankings by using static site generation.'
        },
        {
            numbering: '02',
            heading: 'Improved Performance',
            content: 'Utilize server-side rendering to improve performance and speed up page loads.'
        },
        {
            numbering: '03',
            heading: ' TypeScript Support',
            content: 'Gain improved code quality and maintainability with TypeScript integration.'
        },
    ]
    benefit_content_remaining: any = [
        {
            numbering: '04',
            heading: 'Flexibility in Gathering Data',
            content: 'Provides a variety of ways to retrieve data, meeting the requirements of various projects.'
        },
        {
            numbering: '05',
            heading: 'Seamless Integration with APIs',
            content: 'Integrate with backend services and APIs with ease to enable seamless communication.'
        },
        {
            numbering: '06',
            heading: 'Integration of Vercel Deployment',
            content: 'Simple hosting and deployment combined with a smooth integration with the Vercel platform.'
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
