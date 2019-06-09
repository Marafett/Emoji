import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Emoji } from '../emoji';

@Component({
  selector: 'app-like-emoji',
  templateUrl: './like-emoji.component.html',
  styleUrls: ['./like-emoji.component.css']
})
export class LikeEmojiComponent implements OnInit {
  emojisLike: Emoji[];
  names: string;

  constructor(public mainService: MainService) {
    this.emojisLike = mainService.emojisLike
   }

   Search(){
    if(this.names != ""){
      this.emojisLike = this.mainService.emojisLike;
      this.emojisLike = this.emojisLike.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.names.toLocaleLowerCase())
      });
    } else{
      this.emojisLike = this.mainService.emojisLike
    }
  }

  ngOnInit() {
  }

}
