import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})

/**
 * Blog component
 */
export class BlogComponent {
    @ViewChild('carousel') carousel: ElementRef;
    currentIndex = 0;
    slideWidth = 0;
    images: string[] = [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
    ];

    blogs = [
        {
            id: 1,
            image: 'img-1.jpg',
            blog_header: 'UI & UX Design',
            blog_title: 'Doing a cross country road trip',
            text_muted: 'She packed her seven versalia, put her initial into the belt.',
            read_btn: 'Read More',
        },
        {
            id: 2,
            image: 'img-2.jpg',
            blog_header: 'Digital Marketing',
            blog_title: 'New exhibition at our Museum',
            text_muted: 'Pityful a rethoric question ran over her cheek.',
            read_btn: 'Read More',
        },
        {
            id: 3,
            image: 'img-3.jpg',
            blog_header: 'Travelling',
            blog_title: 'Why are so many people..',
            text_muted: 'Far far away, behind the word mountains.',
            read_btn: 'Read More',
        },
        {
            id: 4,
            image: 'img-1.jpg',
            blog_header: 'UI & UX Design',
            blog_title: 'Doing a cross country road trip',
            text_muted: 'She packed her seven versalia, put her initial into the belt.',
            read_btn: 'Read More',
        },
        {
            id: 5,
            image: 'img-2.jpg',
            blog_header: 'Digital Marketing',
            blog_title: 'New exhibition at our Museum',
            text_muted: 'Pityful a rethoric question ran over her cheek.',
            read_btn: 'Read More',
        },
        {
            id: 6,
            image: 'img-3.jpg',
            blog_header: 'Travelling',
            blog_title: 'Why are so many people..',
            text_muted: 'Far far away, behind the word mountains.',
            read_btn: 'Read More',
        },
    ];

    currentIndexWork = 0;
    intervalId: any;

    constructor() { }

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

    ngOnInit(): void {
        this.startSlider();
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId); // Clear interval when component is destroyed
    }

    startSlider(): void {
        this.intervalId = setInterval(() => {
            this.showNext();
        }, 3000); // Change slide every 3 seconds
    }

    showNext(): void {
        this.currentIndexWork = (this.currentIndexWork + 1) % this.images.length;
    }

    isActive(index: number): boolean {
        return this.currentIndexWork === index;
    }
}
