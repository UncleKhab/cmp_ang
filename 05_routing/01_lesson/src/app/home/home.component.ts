import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}
  onLoadServers(id: number) {
    // Complex Calculation, reach to backend etc.
    // This is a way to programatically navigate
    this.router.navigate(["/servers", 1, "edit"], {
      queryParams: { allowEdit: 1 },
      fragment: "loading",
    });
  }
  login() {
    this.authService.login();
    console.log(this.authService.loggedIn);
  }
  logout() {
    this.authService.logout();
    console.log(this.authService.loggedIn);
  }
}
