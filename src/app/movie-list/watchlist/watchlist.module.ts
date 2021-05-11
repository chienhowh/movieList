import { SharedModule } from './../../shared/shared.module';
import { WatchlistComponent } from './watchlist.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WatchlistRoutingModule} from './watchlist-routing.module';
import { CommentComponent } from './comment/comment.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    WatchlistComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    WatchlistRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class WatchlistModule { }
