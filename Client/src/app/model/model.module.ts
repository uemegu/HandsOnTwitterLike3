import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModelModule {
  public user : string | null;
  public message: string | null;
  public like: Number;
}
