import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-java',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './java.component.html',
    styleUrl: './java.component.css'
})
export class JavaComponent {
    benefit_content: any = [
        {
            numbering: '01',
            heading: 'Reduced Time-To-Market',
            content: 'Boost the distribution and use of resources to expedite development cycles and bring your product or service to market more quickly.'
        },
        {
            numbering: '02',
            heading: 'Easy App Designing, Implementation & Deployment',
            content: 'Provide an aesthetically pleasing and intuitive user interface that makes interacting with it easier and improves the user experience in general.'
        },
        {
            numbering: '03',
            heading: ' Easy Integration with Distributed System Operation',
            content: 'Implement a microservices architecture to break down the application into smaller, independent services, enabling seamless integration with distributed systems.'
        },
    ]
    benefit_content_remaining: any = [
        {
            numbering: '04',
            heading: 'Cross Platform Operation with Platform Independence',
            content: 'Embrace the Java philosophy of WORA to ensure your application can run seamlessly across diverse platforms without modification.'
        },
        {
            numbering: '05',
            heading: 'Multithreading Benefits',
            content: 'Enhance user experience by separating time-consuming tasks from the main thread, ensuring the application remains responsive and interactive.'
        },
        {
            numbering: '06',
            heading: 'Inexpensive App Development ',
            content: 'Utilize cost-effective cloud services for hosting, storage, and computing, allowing you to pay for only the resources you use and eliminating the need for significant upfront investments.'
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
