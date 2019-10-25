import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; // 追加
import { Observable } from 'rxjs'; // 追加
import { Tweet } from './tweet'; // 追加

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  items$: Observable<Tweet[]>; // 追加
  user: string = ''; // 追加
  message: string = ''; // 追加

  constructor(private db: AngularFirestore) { // 追加
    this.items$ = db
      .collection<Tweet>('tweet')
      .valueChanges({ idField: "id" });
   }

  ngOnInit() {
  }

  // 追加
  async tweet() {
    if(this.user && this.message) {
      await this.db
      .collection<Tweet>('tweet')
      .add({
        user: this.user,
        message: this.message
      });
      this.user = '';
      this.message = '';
    }
  }

  // 追加
  async logout() {
  }

}
