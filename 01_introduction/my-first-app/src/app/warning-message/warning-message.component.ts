import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-message',
  template: `<div class="warning-container">
    <h4>This is a warning message! Be careful next time</h4>
    <div>X</div>
  </div> `,
  styles: [
    `
      .warning-container {
        background-color: orange;
        color: white;
        padding: 10px;
        position: relative;
      }
      .warning-container > div {
        font-size: 24px;
        font-weight: bold;
        position: absolute;
        top: -1px;
        right: 5px;
      }
    `,
  ],
})
export class WarningMessageComponent {}
