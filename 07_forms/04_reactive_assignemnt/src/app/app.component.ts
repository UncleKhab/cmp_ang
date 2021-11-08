import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  statuses = ["Stable", "Critical", "Finished"];
  projectForm: FormGroup;
  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required],
        this.asyncNameValidator
      ),
      email: new FormControl(null, [Validators.email, Validators.required]),
      status: new FormControl("Stable"),
    });
  }
  onSubmit() {
    console.log(this.projectForm.value);
  }
  nameValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === "test") {
      return { nameIsForbidden: true };
    }
    return null;
  }
  asyncNameValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test") {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }
}
