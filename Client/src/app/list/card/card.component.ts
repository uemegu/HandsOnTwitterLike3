import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; // 追加
import { Tweet } from '../tweet'; // 追加
import { AngularFirestore } from '@angular/fire/firestore'; // 追加
import { firestore } from "firebase/app"; // 追加

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item : Tweet; //追加

  constructor(private db: AngularFirestore) { //追加
  }

  ngOnInit() {
  }

  //追加
  likeClick() {
    this.db.collection('tweet').doc(this.item.id).update({
      like: firestore.FieldValue.increment(1)
    })
  }
}
