import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**
 * Login component
 */
export class LoginComponent implements OnInit {

  isVisible = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  setTheme(theme) {
    document.getElementById('color-opt').setAttribute('href', 'assets/css/colors/' + theme + '.css');
  }

  toggleSwitcher() {
    this.isVisible = !this.isVisible;
  }

  onChangeMode() {
    let theme = localStorage.getItem("theme");
    if (theme == "light" || theme == "") {
      document.body.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.removeAttribute("data-bs-theme");
      localStorage.setItem("theme", "light");
    }
  }


}
