import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'playground-grid';

  cards = [
    {
      header: 'Header1',
      body: 'Body1',
      footer: 'Footer1'
    },
    {
      header: 'Header2',
      body: 'Body2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolorum.',
      footer: 'Footer2'
    },
    {
      header: 'Header3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolorum',
      body: 'Body3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolorum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolorum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolorum.',
      footer: 'Footer3'
    },
    {
      header: 'Header4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolorum',
      body: 'Body4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolorum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolorum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, dolorum.',
      footer: 'Footer4'
    },
  ]
}
