# PWA + FirebaseでサーバーレスなTwitterっぽいアプリを作ってみる

## はじめに

これはサーバーレスなPWAアプリを作るハンズオンのためのプロジェクトで、3回目に実施するハンズオンです。

1回目のハンズオンは以下になります。

https://github.com/uemegu/HandsOnTwitterLike1

<br><br>

### 環境構築

#### Angularのインストール

npm install でAngularのコマンドラインをインストールします。
`-g`はグローバルという意味で、どこのディレクトリであっても実行できるようにします。

````
$ npm install -g @angular/cli
````

#### Angularプロジェクトの作成とライブラリの取得

Angularのプロジェクトを作ります。
このコマンドを実行したディレクトリ配下にプロジェクトのディレクトリが作られます。
下記例であれば`Client`というディレクトリが作られます。

````
$ ng new Clent --style=scss
? Would you like to add Angular routing? (y/N) y
````

`Cient`というディレクトリが作られたことが確認できたら、`Client`ディレクトリに移動してビルドしてみます。
下記コマンドを実行した後に`http://localhost:4200/`を開いてみます。

````
$ cd Client/
$ ng serve
````

画面が表示されることが確認できたら次は追加のライブラリをインストールします。
今回は Angular Material というCSSフレームワークを追加でインストールします。

````
$ ng add @angular/material
? Choose a prebuilt theme name, or "custom" for a custom theme: 
  Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ] 
  Deep Purple/Amber  [ Preview: https://material.angular.io?theme=deeppurple-amber ] 
  Pink/Blue Grey     [ Preview: https://material.angular.io?theme=pink-bluegrey ] 
  Purple/Green       [ Preview: https://material.angular.io?theme=purple-green ] 
❯ Custom 
? Set up HammerJS for gesture recognition? (Y/n) ←何も入力せずそのままエンター
? Set up browser animations for Angular Material? (Y/n)  ←何も入力せずそのままエンター
````

次はFirebaseのライブラリをインストールします。

````
$ npm install firebase @angular/fire --save
````

### 開発

#### 環境設定

Firebaseの環境設定をします。
設定内容はFirebaseのコンソールから確認できます。

プロジェクトの設定 > 全般 > マイアプリ > ウェブアプリ > Firebase SDK snippet > 構成

Firebase SDK snippetが表示されるまでしばらく時間がかかります。

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

#### 必要なコンポーネントの作成

今回はログイン画面とツイート一覧画面を作ります。
下記コマンドを入力します。
入力後、ディレクトリとファイルが増えていることを確認します。

````
$ ng generate component login
$ ng generate component list
````

次にルーティングの設定を書きます。
パスに応じてどのコンポーネントを表示するのかを定義します。

````
src/app/app-routing.module.ts

// importの並びに追加
import { LoginComponent } from './login/login.component'; // 追加
import { ListComponent } from './list/list.component'; // 追加

// routesの設定を変更
const routes: Routes = [
  { path: 'login', component: LoginComponent } ,  // 追加
  { path: 'list', component: ListComponent } ,  // 追加
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // 追加
];
````

先ほどの定義したコンポーネントをどこに表示するのかを書きます。
`router-outlet`タグの中身が先ほど定義したコンポーネントに置きかわります。

````
src/app/app.component.html

//ファイルの中身をこれだけに置き換える
<router-outlet></router-outlet>
````

追加したコンポーネントはapp.module.tsに定義を追加しないと使えないため、定義を追加します。

````
app.module.ts

// importの並びに追加
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
````

この時点で一旦ビルドしてみて確認してみます。
`ng serve`を実行した後、`http://localhost:4200/login`と`http://localhost:4200/list`で表示されるか確認します。


ここまで確認できたら以下のコマンドでコンポーネントを追加し、既にコミットされてる内容をコピペして下さい。
先ほどのlogin.component, list.component, app.module もコピペして下さい。

````
$ ng generate component list/card
$ ng generate interface list/tweet
````

ビルドしてみて確認してみます。
`ng serve`を実行した後、`http://localhost:4200/`でログイン画面が表示されるか確認して下さい。
Googleログインのみ対応されてるのでログインしてみて下さい。

## 課題

1. ログアウト処理を実装してみて下さい
2. ID/Password認証を実装してみて下さい



## 参考

Angularの環境構築（Angular CLIで構築）<br>
https://qiita.com/Yamamoto0525/items/65d5a0b36eb4dbd8079b

AngularのプロジェクトにFirebaseを導入する<br>
https://qiita.com/Yamamoto0525/items/437a2884c0c51f5a3af8#angularfire2%E3%81%A8firebase%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB

Angular&Firebaseでユーザー認証してみる<br>
https://qiita.com/daikiojm/items/65b4f27a1dc82f449666

