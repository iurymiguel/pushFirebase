import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';

/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {

  constructor(public firebaseNative: Firebase, private platform: Platform) {
    console.log('Hello FcmProvider Provider');
  }

  subscribeToTopic(topic){
    this.firebaseNative.subscribe(topic).then((value) =>{
      console.log("Subscription value: " +value);
    });
  }

  async getToken(){
    let token;

    if(this.platform.is('android')){
      token = await this.firebaseNative.getToken();
    }
    console.log(token);
    return token;
  }


  listenToNotifications(){
    return this.firebaseNative.onNotificationOpen();
  }
}
