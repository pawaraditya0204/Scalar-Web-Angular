import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
/**
 * Team component
 */
export class TeamComponent {

    @ViewChild('carousel') carousel: ElementRef;
    currentIndex = 0;
    slideWidth = 0;

    blogs = [
        {
            id: 1,
            text_muted: 'I feel confident imposing change on myself, Its a lot  more fun progressing than looking back That why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.',
            text_name: 'Ruben Reed -',
            text_designation: 'Charleston'
        },
        {
            id: 2,
            text_muted: 'Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures Integer varius lacus non magna tempor congue natuasre the whole its beauty.',
            text_name: 'Michael P. Howlett -',
            text_designation: 'Worcester'
        },
        {
            id: 3,
            text_muted: 'I`ve learned that people will forget what you said people will forget what you did, but people will never aliquam in nunc quis tincidunt forget how you vestibulum egestas them feel.',
            text_name: 'Ruben Reed -',
            text_designation: 'Charleston'
        },
        {
            id: 4,
            text_muted: 'I feel confident imposing change on myself, Its a lot  more fun progressing than looking back That why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.',
            text_name: 'Ruben Reed -',
            text_designation: 'Charleston'
        },
        {
            id: 5,
            text_muted: 'Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures Integer varius lacus non magna tempor congue natuasre the whole its beauty.',
            text_name: 'Michael P. Howlett -',
            text_designation: 'Worcester'
        },
        {
            id: 6,
            text_muted: 'I`ve learned that people will forget what you said people will forget what you did, but people will never aliquam in nunc quis tincidunt forget how you vestibulum egestas them feel.',
            text_name: 'Ruben Reed -',
            text_designation: 'Charleston'
        },

    ];

    ngAfterViewInit() {
        this.slideWidth = document.querySelector('.slide').clientWidth;
    }

    moveSlide(direction: number) {
        const numSlides = this.blogs.length;
        this.currentIndex = (this.currentIndex + direction + numSlides) % numSlides;
        const offset = -this.currentIndex * this.slideWidth;
        this.carousel.nativeElement.style.transform = `translateX(${offset}px)`;

        // Continuous looping
        if (this.currentIndex === numSlides - 1) {
            setTimeout(() => {
                this.currentIndex = 0;
                this.carousel.nativeElement.style.transition = 'none';
                this.carousel.nativeElement.style.transform = `translateX(0)`;
                setTimeout(() => {
                    this.carousel.nativeElement.style.transition = 'transform 0.5s ease';
                });
            }, 500);
        }
    }
}
