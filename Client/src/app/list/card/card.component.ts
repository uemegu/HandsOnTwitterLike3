import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; // 追加
import { ModelModule } from '../../model/model.module'; // 追加

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item : ModelModule;

  constructor() { }

  ngOnInit() {
  }

}
