import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: transparent;
      color: white;
      border-radius : 10px;
    }
    .dark-modal .modal-header {
      border : none
    }
    .dark-modal .close {
      color: white;
    }
  `]
})

/**
 * Index-1 component
 */
export class Index1Component implements OnInit {

  id = 'JlvxDa7Sges';

  private player;
  private ytEvent;
  constructor(private modalService: NgbModal) {
  }
  currentSection = 'home';

  ngOnInit(): void {
  }
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar.style.backgroundColor = '#272a33';
      navbar.style.padding = '15px';
      navbar.style.boxShadow = '0 0 4px 2px rgba(0,0,0,0.8)';
    }
    else {
      navbar.style.backgroundColor = '';
      navbar.style.padding = '20px';
      navbar.style.boxShadow = 'none';
    }
  }

  /**
   * Open modal
   * @param content content
   */
  openModal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg' });
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
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
}
