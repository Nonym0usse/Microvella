import { Component, OnInit } from '@angular/core';
import { LoadJSService } from '../load-js.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoadJSService]
})
export class HomeComponent implements OnInit {

  constructor(private LoadJS: LoadJSService) { }

  ngOnInit() {
    this.loadScripts();
  }

  private loadScripts() {
    this.LoadJS.load( 'theme.min.js').then(data => {
    }).catch(error => console.log(error));
  }
}
