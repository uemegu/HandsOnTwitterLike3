import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; // 追加
import { Observable } from 'rxjs'; // 追加
import { ModelModule } from '../model/model.module'; // 追加


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  items$: Observable<ModelModule[]>; // 追加

  constructor(db: AngularFirestore) {
    this.items$ = db
      .collection<ModelModule>('tweet')
      .valueChanges();
      this.items$.subscribe((items) => {
        console.log(items);
        console.log(this.items$);
      });
   }

  ngOnInit() {
  }

}
