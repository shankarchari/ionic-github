import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileSearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-profile-search',
    templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {

	username: string;

    constructor(private navCtrl: NavController, private navParams: NavParams) {
    }

    getUserInformationPage(): void {
        this.navCtrl.push('ProfileSearchResultsPage', {
        	username: this.username
        });
    }
}
