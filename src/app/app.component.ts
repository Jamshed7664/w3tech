import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route:Router) {

  }
  title = 'JdAcademy';
  gotoDash(){
    alert()
this.route.navigate(['/home/home'])
  }
}
