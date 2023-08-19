import { Component } from '@angular/core';

@Component({
  // selector: '.app-servers',
  selector: 'app-servers',
  template: `
      <app-server></app-server>
      <app-server></app-server>
      <button class="btn btn-primary" [disabled]="!allowNewServer">Add Server</button>
  `,

  styleUrls: ['./servers.component.css']

})
export class ServersComponent {

}
