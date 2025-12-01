import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  states = ['Tozeur', 'Tunis', 'Nabeul'];
  content = 'Content from Parent'
  // import and inject in build angular Router module
constructor(private router: Router) { }
gotoLogin() {
this.router.navigate(['/login']);
}
gotoContact() {
this.router.navigate(['/contact']);
}
}
