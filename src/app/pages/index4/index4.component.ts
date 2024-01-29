import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index4',
  templateUrl: './index4.component.html',
  styleUrls: ['./index4.component.css']
})
/**
 * Index-4 component
 */
export class Index4Component implements OnInit {

  constructor() { }
  currentSection = 'home';

  ngOnInit(): void {
    document.getElementById('color-opt').setAttribute('href', 'assets/css/colors/pink.css');
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar.style.backgroundColor = '#272a33';
      navbar.style.padding = '10px';
    }
    else {
      navbar.style.backgroundColor = '';
      navbar.style.padding = '20px';
    }
  }
}
