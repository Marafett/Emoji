import { Component } from "@angular/core";
import { MainService } from "./main.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [MainService]
})
export class AppComponent {
  constructor(public mainService: MainService) {}
}
