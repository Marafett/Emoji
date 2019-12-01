import { Component, OnInit } from "@angular/core";
import { MainService } from "../main.service";
import { Emoji } from "../emoji";

@Component({
  selector: "app-delete-emoji",
  templateUrl: "./delete-emoji.component.html",
  styleUrls: ["./delete-emoji.component.css"]
})
export class DeleteEmojiComponent implements OnInit {
  emojisDel: Emoji[];
  names: string;
  p: number;

  constructor(public mainService: MainService) {}

  ngOnInit() {
    this.emojisDel = this.mainService.emojisDel;
  }
}
