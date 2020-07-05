import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponentComponent {
  parent() {
    console.log('parent');
  }

  child() {
    console.log('child');
  }
}
