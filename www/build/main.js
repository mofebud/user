webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullpage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_five_topic_five__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TopicTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicOnePage = /** @class */ (function () {
    function TopicOnePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicOnePage.prototype.ionViewDidLoad = function () {
        new __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default.a('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            offsetSections: false,
            paddingTop: '3em',
        });
    };
    TopicOnePage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__["a" /* TopicTwoPage */]);
        }
        if (e.direction == 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topic_five_topic_five__["a" /* TopicFivePage */]);
        }
    };
    TopicOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topic-one',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-one/topic-one.html"*/'<ion-header>\n  <!-- \n  <ion-navbar>\n    <ion-title>topicOne</ion-title>\n  </ion-navbar> -->\n  <custom-nav-bar [title]="\'Home\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n  <div id="fullpage">\n    <div class="section">\n      <h2>Plastic Pollution</h2>\n    </div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-one/topic-one.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicOnePage);
    return TopicOnePage;
}());

//# sourceMappingURL=topic-one.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TopicMenu = /** @class */ (function () {
    function TopicMenu(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicMenu.prototype.gotoTopicOne = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__["a" /* TopicOnePage */]);
    };
    TopicMenu.prototype.gotoTopicTwo = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__["a" /* TopicTwoPage */]);
    };
    TopicMenu.prototype.gotoTopicThree = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__["a" /* TopicThreePage */]);
    };
    TopicMenu.prototype.gotoTopicFour = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__["a" /* TopicFourPage */]);
    };
    TopicMenu.prototype.gotoTopicFive = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__["a" /* TopicFivePage */]);
    };
    TopicMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-menu/topic-menu.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar> -->\n\n  <custom-nav-bar [title]="\'Home\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n</ion-header>\n\n\n<ion-content>\n\n\n  <!-- <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p> -->\n    <div class="menuList" (click)="gotoTopicOne()">topic 1</div>\n    <div class="menuList" (click)="gotoTopicTwo()">topic 2</div>\n    <div class="menuList" (click)="gotoTopicThree()">topic 3</div>\n    <div class="menuList" (click)="gotoTopicFour()">topic 4</div>\n    <div class="menuList" (click)="gotoTopicFive()">topic 5</div>\n</ion-content>\n'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-menu/topic-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicMenu);
    return TopicMenu;
}());

//# sourceMappingURL=topic-menu.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My First List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/item-details/item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__achievement_achievement__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountMenuPage = /** @class */ (function () {
    function AccountMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            {
                title: 'Profile',
                icon: ''
            }, {
                title: 'Achivement',
                icon: ''
            }, {
                title: 'Community Feed',
                icon: ''
            }
        ];
    }
    AccountMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountMenuPage');
    };
    AccountMenuPage.prototype.pageSelected = function (page) {
        if (page.title == 'Profile') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
        }
        else if (page.title == 'Achivement') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__achievement_achievement__["a" /* AchievementPage */]);
        }
    };
    AccountMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-account-menu',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/account-menu/account-menu.html"*/'<!--\n  Generated template for the AccountMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>account-menu</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      <ion-list>\n          <button ion-item *ngFor="let page of pages" (click)="pageSelected(page)">\n            {{ page.title }}\n          </button>  \n        </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/account-menu/account-menu.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccountMenuPage);
    return AccountMenuPage;
}());

//# sourceMappingURL=account-menu.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    Hi, xxx!\n</ion-content>\n'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AchievementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AchievementPage = /** @class */ (function () {
    function AchievementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AchievementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AchievementPage');
    };
    AchievementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-achievement',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/achievement/achievement.html"*/'<!--\n  Generated template for the AchievementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Achievement</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Hi, xxx!\n    </ion-card-header>\n    <ion-card-content>\n      You are an enrironmental expert now!\n      <img src="../assets/imgs/badge01.jpg">\n      <hr/>\n      <ion-row>\n        <ion-col col-3>\n          <img src="../assets/imgs/badge01.jpg">\n        </ion-col>\n        <ion-col col-3>\n          <img src="../assets/imgs/badge01.jpg">\n        </ion-col>\n        <ion-col col-3>\n          <img src="../assets/imgs/badge01.jpg">\n        </ion-col>\n        <ion-col col-3>\n          <img src="../assets/imgs/badge01.jpg">\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-content padding>\n    <ion-card>\n      <ion-card-header>\n        Hi, xxx!\n      </ion-card-header>\n      <ion-card-content>\n        You are an enrironmental expert now!\n        <img src="../assets/imgs/badge01.jpg">\n        <hr/>\n        <ion-row>\n          <ion-col col-3>\n            <img src="../assets/imgs/badge01.jpg">\n          </ion-col>\n          <ion-col col-3>\n            <img src="../assets/imgs/badge01.jpg">\n          </ion-col>\n          <ion-col col-3>\n            <img src="../assets/imgs/badge01.jpg">\n          </ion-col>\n          <ion-col col-3>\n            <img src="../assets/imgs/badge01.jpg">\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/achievement/achievement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AchievementPage);
    return AchievementPage;
}());

//# sourceMappingURL=achievement.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_item_details_item_details__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_topic_one_topic_one__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_topic_two_topic_two__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_topic_three_topic_three__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_topic_four_topic_four__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_topic_five_topic_five__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_custom_nav_bar_custom_nav_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_topic_menu_topic_menu__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_account_menu_account_menu__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_achievement_achievement__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_custom_nav_bar_custom_nav_bar__["a" /* CustomNavBarPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_topic_menu_topic_menu__["a" /* TopicMenu */],
                __WEBPACK_IMPORTED_MODULE_4__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_topic_one_topic_one__["a" /* TopicOnePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_topic_two_topic_two__["a" /* TopicTwoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_topic_three_topic_three__["a" /* TopicThreePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_topic_four_topic_four__["a" /* TopicFourPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_topic_five_topic_five__["a" /* TopicFivePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_account_menu_account_menu__["a" /* AccountMenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_achievement_achievement__["a" /* AchievementPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_custom_nav_bar_custom_nav_bar__["a" /* CustomNavBarPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_topic_menu_topic_menu__["a" /* TopicMenu */],
                __WEBPACK_IMPORTED_MODULE_8__pages_topic_one_topic_one__["a" /* TopicOnePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_topic_two_topic_two__["a" /* TopicTwoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_topic_three_topic_three__["a" /* TopicThreePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_topic_four_topic_four__["a" /* TopicFourPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_topic_five_topic_five__["a" /* TopicFivePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_account_menu_account_menu__["a" /* AccountMenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_achievement_achievement__["a" /* AchievementPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_topic_menu_topic_menu__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_topic_menu_topic_menu__["a" /* TopicMenu */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__pages_topic_menu_topic_menu__["a" /* TopicMenu */] },
            { title: 'My First List', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/deniseho/plastic/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n'/*ion-inline-end:"/Users/deniseho/plastic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomNavBarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_menu_account_menu__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CustomNavBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomNavBarPage = /** @class */ (function () {
    function CustomNavBarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomNavBarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomNavBarPage');
    };
    CustomNavBarPage.prototype.gotoAccountMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_menu_account_menu__["a" /* AccountMenuPage */]);
    };
    CustomNavBarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-nav-bar',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/custom-nav-bar/custom-nav-bar.html"*/'<ion-toolbar>\n  <ion-row>\n    <ion-col col-3>\n      <ion-buttons *ngIf="addBack" start>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col col-6>\n      <ion-buttons *ngIf="addHome">\n        <button ion-button icon-only color="royal" (click)="gotoHomepage()">\n          PLASTIC OCEAN LOGO\n        </button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col col-3>\n      <ion-buttons *ngIf="addPerson" end>\n        <button ion-button icon-only color="royal" (click)="gotoAccountMenu()">\n          <ion-icon name="person"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n</ion-toolbar>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/custom-nav-bar/custom-nav-bar.html"*/,
            inputs: ['title', 'addBack', 'addHome', 'addPerson'],
            outputs: ['home']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CustomNavBarPage);
    return CustomNavBarPage;
}());

//# sourceMappingURL=custom-nav-bar.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullpage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_three_topic_three__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TopicTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicTwoPage = /** @class */ (function () {
    function TopicTwoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicTwoPage_1 = TopicTwoPage;
    TopicTwoPage.prototype.ionViewDidLoad = function () {
        new __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default.a('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            offsetSections: false,
            paddingTop: '3em',
        });
    };
    TopicTwoPage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_three_topic_three__["a" /* TopicThreePage */]);
        }
        if (e.direction == 4) {
            this.navCtrl.push(TopicTwoPage_1);
        }
    };
    TopicTwoPage = TopicTwoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topic-two',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-two/topic-two.html"*/'<ion-header>\n  <!-- \n    <ion-navbar>\n      <ion-title>topicOne</ion-title>\n    </ion-navbar> -->\n  <custom-nav-bar [title]="\'Home\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n  <div id="fullpage">\n    <div class="section">\n        <h2>About Plastic</h2>\n    </div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-two/topic-two.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicTwoPage);
    return TopicTwoPage;
    var TopicTwoPage_1;
}());

//# sourceMappingURL=topic-two.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullpage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_four_topic_four__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_two_topic_two__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TopicThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicThreePage = /** @class */ (function () {
    function TopicThreePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicThreePage.prototype.ionViewDidLoad = function () {
        new __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default.a('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            offsetSections: false,
            paddingTop: '3em',
        });
    };
    TopicThreePage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_four_topic_four__["a" /* TopicFourPage */]);
        }
        if (e.direction == 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topic_two_topic_two__["a" /* TopicTwoPage */]);
        }
    };
    TopicThreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topic-three',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-three/topic-three.html"*/'<ion-header>\n    <!-- \n    <ion-navbar>\n      <ion-title>topicOne</ion-title>\n    </ion-navbar> -->\n    <custom-nav-bar [title]="\'Home\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n  <div id="fullpage">\n    <div class="section">\n        <h2>Species Affected</h2>\n    </div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-three/topic-three.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicThreePage);
    return TopicThreePage;
}());

//# sourceMappingURL=topic-three.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullpage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_five_topic_five__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TopicFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicFourPage = /** @class */ (function () {
    function TopicFourPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicFourPage.prototype.ionViewDidLoad = function () {
        new __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default.a('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            offsetSections: false,
            paddingTop: '3em',
        });
    };
    TopicFourPage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_five_topic_five__["a" /* TopicFivePage */]);
        }
        if (e.direction == 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__["a" /* TopicThreePage */]);
        }
    };
    TopicFourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topic-four',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-four/topic-four.html"*/'<ion-header>\n  <!-- \n    <ion-navbar>\n      <ion-title>topicOne</ion-title>\n    </ion-navbar> -->\n  <custom-nav-bar [title]="\'Home\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n  <div id="fullpage">\n    <div class="section">\n        <h2>Take Action</h2>\n    </div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-four/topic-four.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicFourPage);
    return TopicFourPage;
}());

//# sourceMappingURL=topic-four.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullpage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_one_topic_one__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_four_topic_four__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TopicFivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicFivePage = /** @class */ (function () {
    function TopicFivePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicFivePage.prototype.ionViewDidLoad = function () {
        new __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default.a('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            offsetSections: false,
            paddingTop: '3em',
        });
    };
    TopicFivePage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_one_topic_one__["a" /* TopicOnePage */]);
        }
        if (e.direction == 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topic_four_topic_four__["a" /* TopicFourPage */]);
        }
    };
    TopicFivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topic-five',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-five/topic-five.html"*/'<ion-header>\n    <!-- \n    <ion-navbar>\n      <ion-title>topicOne</ion-title>\n    </ion-navbar> -->\n    <custom-nav-bar [title]="\'Home\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n    <div id="fullpage">\n      <div class="section">\n          <h2>Activities</h2>\n      </div>\n      <div class="section">Some section</div>\n      <div class="section">Some section</div>\n      <div class="section">Some section</div>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-five/topic-five.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicFivePage);
    return TopicFivePage;
}());

//# sourceMappingURL=topic-five.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map