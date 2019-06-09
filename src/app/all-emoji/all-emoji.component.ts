import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Emoji } from '../emoji';



@Component({
  selector: 'app-all-emoji',
  templateUrl: './all-emoji.component.html',
  styleUrls: ['./all-emoji.component.css']
})
export class AllEmojiComponent implements OnInit {
 emojis: Emoji[];
 names: any;

  constructor(public mainService: MainService) { 
    this.emojis = mainService.emojis
  }


  Search(){
    if(this.names != ""){
      this.emojis = this.mainService.emojis;
      this.emojis = this.emojis.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.names.toLocaleLowerCase())
      });
    } else {
      this.emojis = this.mainService.emojis
    }
  }

 
  ngOnInit() {
    
  }

}
