import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination'
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { AllEmojiComponent } from './all-emoji/all-emoji.component';
import { DeleteEmojiComponent } from './delete-emoji/delete-emoji.component';
import { LikeEmojiComponent } from './like-emoji/like-emoji.component';
// import { InMemoryService } from './api/in-memory.service';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'all', component: AllEmojiComponent},
  {path: 'like', component: LikeEmojiComponent},
  {path: 'delete', component: DeleteEmojiComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AllEmojiComponent,
    DeleteEmojiComponent,
    LikeEmojiComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
