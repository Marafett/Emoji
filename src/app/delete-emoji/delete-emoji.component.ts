import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Emoji } from '../emoji';

@Component({
  selector: 'app-delete-emoji',
  templateUrl: './delete-emoji.component.html',
  styleUrls: ['./delete-emoji.component.css']
})
export class DeleteEmojiComponent implements OnInit {
  emojisDel: Emoji[];
  names: string;
  p:number;


  constructor(public mainService: MainService) {
    this.emojisDel = mainService.emojisDel
   }

   Search(){
    if(this.names != ""){
      this.emojisDel = this.mainService.emojisDel;
      this.emojisDel = this.emojisDel.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.names.toLocaleLowerCase())
      });
    } else{
      this.emojisDel = this.mainService.emojisDel
    }
   }
    
  ngOnInit() {
  }

}
