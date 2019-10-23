# PWA + FirebaseでサーバーレスなTwitterっぽいアプリを作ってみる

## はじめに

これはサーバーレスなPWAアプリを作るハンズオンのためのプロジェクトで、3回目に実施するハンズオンです。

1回目のハンズオンは以下になります。

https://github.com/uemegu/HandsOnTwitterLike1

<br><br>

### 環境構築

#### Angularのインストール

#### Angularプロジェクトの作成とライブラリの取得

````
$ ng new Clent --style=scss
? Would you like to add Angular routing? (y/N) y
$ cd Client/
$ ng add @angular/material
? Choose a prebuilt theme name, or "custom" for a custom theme: 
  Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ] 
  Deep Purple/Amber  [ Preview: https://material.angular.io?theme=deeppurple-amber ] 
  Pink/Blue Grey     [ Preview: https://material.angular.io?theme=pink-bluegrey ] 
  Purple/Green       [ Preview: https://material.angular.io?theme=purple-green ] 
❯ Custom 
? Set up HammerJS for gesture recognition? (Y/n) 
? Set up browser animations for Angular Material? (Y/n) 
$ npm install firebase @angular/fire --save
````

````
$ ng serve
````

### 開発

#### 環境設定

Firebase SDK snippet
````
src/environments/environment.ts

  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
````

````
src/app/app.module.ts

import { environment } from '../environments/environment'; // 追加
import { AngularFireModule } from '@angular/fire'; // 追加
import { AngularFirestoreModule } from '@angular/fire/firestore'; // 追加
import { AngularFireAuthModule } from '@angular/fire/auth'; // 追加


    AngularFireModule.initializeApp(environment.firebase) // 追加
    AngularFirestoreModule,  // 追加
    AngularFireAuthModule,  // 追加
````


````
ng generate component login
ng generate component list
ng generate module model
````

````
src/app/app-routing.module.ts

import { LoginComponent } from './login/login.component'; // 追加
import { ListComponent } from './list/list.component'; // 追加

  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // 追加
  { path: 'login', component: LoginComponent } ,  // 追加
  { path: 'list', component: ListComponent } ,  // 追加
````

````
src/app/app.component.html

<router-outlet></router-outlet>
````


https://qiita.com/Yamamoto0525/items/437a2884c0c51f5a3af8#angularfire2%E3%81%A8firebase%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB

https://qiita.com/daikiojm/items/65b4f27a1dc82f449666

https://qiita.com/Yamamoto0525/items/65d5a0b36eb4dbd8079b