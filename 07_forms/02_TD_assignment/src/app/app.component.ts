import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f", { static: true }) subscriptionForm: NgForm;
  formValues = {
    email: "",
    password: "",
    subscription: "",
  };
  formSubmitted = false;
  subscriptions = ["Basic", "Advanced", "Pro"];
  defaultSubscription = "Advanced";

  onSubmit() {
    if (this.subscriptionForm.valid) {
      this.formValues = {
        email: this.subscriptionForm.value.email,
        password: this.subscriptionForm.value.password,
        subscription: this.subscriptionForm.value.subscription,
      };
      console.log(this.formValues);
      this.formSubmitted = true;
      this.subscriptionForm.reset();
    }
  }
}
