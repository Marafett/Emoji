import { Component, OnInit } from "@angular/core";
import { MainService } from "../main.service";
import { Emoji } from "../emoji";

@Component({
  selector: "app-all-emoji",
  templateUrl: "./all-emoji.component.html",
  styleUrls: ["./all-emoji.component.css"]
})
export class AllEmojiComponent implements OnInit {
  emojis: Emoji[];
  names: string;
  p: number;

  constructor(public mainService: MainService) {
    this.getPagEmoji();
  }

  getPagEmoji() {
    this.emojis = this.mainService.emojis;
  }

  ngOnInit() {}
}
