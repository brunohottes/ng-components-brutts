import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-components-brutts';

  signup = new FormGroup({
    image: new FormControl(null, [Validators.required])
  });

  submit() {
    console.log(this.signup.value);
  }
}
