import { Component, OnInit } from "@angular/core";
import { MainService } from "../main.service";
import { Emoji } from "../emoji";

@Component({
  selector: "app-like-emoji",
  templateUrl: "./like-emoji.component.html",
  styleUrls: ["./like-emoji.component.css"]
})
export class LikeEmojiComponent implements OnInit {
  emojisLike: Emoji[];
  names: string;
  p: number;

  constructor(public mainService: MainService) {
    this.emojisLike = mainService.emojisLike;
  }

  ngOnInit() {}
}
