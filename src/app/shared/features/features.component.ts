import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.css']
})
/**
 * Features component
 */
export class FeaturesComponent implements OnInit {

    images: string[] = [
        'img-1.jpg',
        'img-2.jpg',
        'img-1.jpg',
        'img-1.jpg',
        'img-2.jpg',
        'img-1.jpg',
        'img-2.jpg',
        'img-1.jpg',
        'img-1.jpg',
        'img-2.jpg',
        'img-1.jpg',
        'img-2.jpg',
    ];

    currentIndex = 0;
    intervalId: any;

    constructor() { }

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
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }

    isActive(index: number): boolean {
        return this.currentIndex === index;
    }
}
