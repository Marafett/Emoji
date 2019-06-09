import { Injectable } from '@angular/core';
import { Emoji } from './emoji';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  emojis: Emoji[];
  emojisDel: Emoji[]=[];
  emojisLike: Emoji[]=[];
  checkLike: number = 0;
  checkDel: number = 0;
  
 

  constructor(private httpClient: HttpClient) {
    this.getEmojis().subscribe(emojis => this.emojis = emojis);
   }

  private emojiUrl = "api/emoji";
  

  getEmojis(): Observable<Array<Emoji>>{
    return this.httpClient.get<Emoji[]>(this.emojiUrl);
  }

  getSelected(name:any): boolean{
   for(let i = 0; i < this.emojisLike.length; i++){
     for(let j in this.emojisLike[i]){
       if(this.emojisLike[i][j] == name){
         return name
       }
     }
   }
  }

  getNotEmoji(ind:number){
    for(let i = 0; i < this.emojisLike.length; i++){
        if(ind == i){
          this.emojisLike.splice(i,1)
        }
    }
    this.checkLike--
  }

  getVostEmoji(name:string, citation:string, ind:number){
    this.emojis.push(new Emoji(name, citation));
    for(let i = 0; i < this.emojisDel.length; i++){
      if(ind == i){
        this.emojisDel.splice(i,1)
      }
    }
    this.checkDel--
  }

  getDelEmoji(name:string, citation:string, ind:number){
    this.emojisDel.push(new Emoji(name, citation));
    for(let i = 0; i < this.emojis.length; i++){
      if(ind == i){
        this.emojis.splice(i,1)
      }
    }
    this.checkDel++
  }

  getPlus(name: string, citation: string){
    this.emojisLike.push(new Emoji(name,citation));
    this.checkLike++
  }




}
