import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FcmProvider } from '../../providers/fcm/fcm';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FcmProvider]
})
export class HomePage {

  constructor(public navCtrl: NavController, public fcm: FcmProvider) {

  }

  ionViewDidLoad() {
    this.fcm.subscribeToTopic("aaa");    
    this.fcm.listenToNotifications().pipe(
      tap(msg => {
        console.log("clicked");
        console.log("msg: " + msg);
      })
    ).subscribe();
  }

 

}
