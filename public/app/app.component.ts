import { Component, OnInit } from '@angular/core';

import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private httpService: HttpService) {}

  // Any function calling an "awaitable" function using the ait keyword
  // (That is a function returning a promise)
  // needs to be wrapped in the 'async' decorator
  async ngOnInit() {
      await this.httpService.testAsync();
      console.log(`Done waiting...`)
  }

}
