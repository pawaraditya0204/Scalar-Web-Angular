import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-node-js',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './node-js.component.html',
    styleUrl: './node-js.component.css'
})
export class NodeJsComponent {
    benefit_content: any = [
        {
            numbering: '01',
            heading: 'New Employee Trial Periods',
            content: 'Before making a final decision, we provide our clients the opportunity to practise with the prospects. We want you to have faith in our ability to complete the project on time and on budget.'
        },
        {
            numbering: '02',
            heading: 'Monitoring of Transparent Code',
            content: 'When you hire Senwell Group Private Limited, you have access to our unique tools, which give important code quality metrics to assist your project in standardising and maintaining code quality.'
        },
        {
            numbering: '03',
            heading: ' Rental of equipment is included',
            content: 'You will not be charged extra for our professionals` workstations or equipment. You also receive access to over 50 real devices to test your app, ranging from smartphones to tablets.'
        },
    ]
    benefit_content_remaining: any = [
        {
            numbering: '04',
            heading: 'Workflows and Processes That Are Flexible',
            content: 'Our highly skilled personnel can not only rapidly and effortlessly integrate with your team, but also assist improve development procedures for optimal project productivity.'
        },
        {
            numbering: '05',
            heading: 'Includes system administration',
            content: 'Don`t worry about anything but the success of your project; we`ll handle all administrative and IT assistance, including helping you set up servers, integrate project management software, and create effective communication, among other things.'
        },
        {
            numbering: '06',
            heading: 'Resource Replacement in a Hurry',
            content: 'When it comes to selecting the finest individuals for our client’s needs, we are extremely meticulous. If a discrepancy does occur, we will promptly replace it with a suitable replacement.'
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
