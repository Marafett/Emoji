import { Injectable } from '@angular/core';
import { Emoji } from './emoji';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MainService {

  emojis: Emoji[] = [];
  emojisDel: Emoji[]=[];
  emojisLike: Emoji[]=[];
  responce: any;
  checkLike: number = 0;
  checkDel: number = 0;
  
 

  constructor(private httpClient: HttpClient) {
    this.getEmoEmo();
    this.getEmoLike();
    this.getEmoDel();
    
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
    this.checkLike--;
    for(let i = 0; i < this.emojisLike.length; i++){
        if(ind == i){
          this.emojisLike.splice(i,1)
        }
    }
    localStorage.setItem('emojisLike', JSON.stringify(this.emojisLike));
    localStorage.setItem('checkLike', JSON.stringify(this.checkLike))
  }

  getVostEmoji(name:string, citation:string, ind:number){
    this.emojis.push(new Emoji(name, citation));
    this.sortArray(this.emojis);
    this.checkDel--;
    for(let i = 0; i < this.emojisDel.length; i++){
      if(ind == i){
        this.emojisDel.splice(i,1)
      }
    }
    localStorage.setItem('checkDel', JSON.stringify(this.checkDel));
    localStorage.setItem('emojisDel', JSON.stringify(this.emojisDel));
    localStorage.setItem('emojis', JSON.stringify(this.emojis));
  }

  getDelEmoji(name:string, citation:string, ind:number){
    this.emojisDel.push(new Emoji(name, citation));
    this.sortArray(this.emojisDel);
    this.checkDel++;
    for(let i = 0; i < this.emojis.length; i++){
      if(ind == i){
        this.emojis.splice(i,1)
      }
    }
    localStorage.setItem('checkDel', JSON.stringify(this.checkDel));
    localStorage.setItem('emojisDel', JSON.stringify(this.emojisDel));
    localStorage.setItem('emojis', JSON.stringify(this.emojis));
  }

  getPlus(name: string, citation: string){
    this.emojisLike.push(new Emoji(name,citation));
    this.sortArray(this.emojisLike);
    this.checkLike++;
    localStorage.setItem('checkLike', JSON.stringify(this.checkLike))
    localStorage.setItem('emojisLike', JSON.stringify(this.emojisLike))
  }

getEmoLike(){
  if (localStorage.getItem('emojisLike') === null){
    this.emojisLike = [];
    this.checkLike = 0;
  } else {
    this.emojisLike = JSON.parse(localStorage.getItem('emojisLike'));
    this.checkLike = JSON.parse(localStorage.getItem('checkLike'))
  }
}

getEmoDel(){
  if (localStorage.getItem('emojisDel') === null){
    this.emojisDel = [];
    this.checkDel = 0;
  } else {
    this.emojisDel = JSON.parse(localStorage.getItem('emojisDel'));
    this.checkDel = JSON.parse(localStorage.getItem('checkDel'))
  }
}

getEmoEmo(){
  if (localStorage.getItem('emojis') === null){
    return this.httpClient.get('https://api.github.com/emojis')
   .subscribe((responce)=>{
     this.responce = responce;
     for(let i in this.responce){
      this.emojis.push(new Emoji(i, this.responce[i])) 
    };
    localStorage.setItem('emojis', JSON.stringify(this.emojis));
  });
}else{
  this.emojis = JSON.parse(localStorage.getItem('emojis'))
}
}

sortArray(x:Emoji[]){
  x.sort(function(a, b){
    let nameA = a.name.toLowerCase()
    let nameB = b.name.toLowerCase()
    if (nameA < nameB){
      return -1
    }
    if (nameA > nameB){
      return 1
    } else{
    return 0 
    }
    })
}

}
