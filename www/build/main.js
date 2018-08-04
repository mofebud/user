webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicFourPage = /** @class */ (function () {
    function TopicFourPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 100;
        this.tabs = [];
        this.tabs = ["Problem", "Cause", "Effect", "Importance", "Game"];
    }
    TopicFourPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    TopicFourPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this
            .scroll
            .scrollTo(index * this.tabElementWidth_px, 0, 500);
        this
            .SwipedTabsSlider
            .slideTo(index, 500);
    };
    TopicFourPage.prototype.updateIndicatorPosition = function () {
        this
            .scroll
            .scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    TopicFourPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    TopicFourPage.prototype.gotoGamePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__game_game__["a" /* GamePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], TopicFourPage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TopicFourPage.prototype, "scroll", void 0);
    TopicFourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-topic-four',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-four/topic-four.html"*/'<ion-header>\n    <!-- \n            <ion-navbar>\n              <ion-title>Topic Four</ion-title>\n            </ion-navbar> -->\n    <custom-nav-bar></custom-nav-bar>\n    <ion-content #scroll scrollX="true" scrollY="false" style="height: 50px;">\n        <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)" [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'\n                [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}">\n                {{tab}}\n            </ion-segment-button>\n        </ion-segment>\n\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}"></div>\n    </ion-content>\n</ion-header>\n\n<ion-content>\n\n    <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)" (ionSlideWillChange)="updateIndicatorPosition()"\n        (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <ion-slide>\n            <h1>Problem</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Cause</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Effect</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Importance</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Game</h1>\n            <button ion-button (click)="gotoGamePage()">Start the game</button>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-four/topic-four.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], TopicFourPage);
    return TopicFourPage;
}());

//# sourceMappingURL=topic-four.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_quiz__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_api_service_user_api_service__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopicOnePage = /** @class */ (function () {
    function TopicOnePage(event, navCtrl, navParams, modalCtrl, viewCtrl, auth, useApi) {
        this.event = event;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.useApi = useApi;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 100;
        this.tabs = [];
        this.tabs = ["Problem", "Cause", "Effect", "Importance", "Quiz"];
        var score = this
            .navParams
            .get('topicOneQuizScore');
        this.quizScore = score
            ? score
            : 0;
        this.quizButtonText = score
            ? 'Try again'
            : 'Start the quiz';
    }
    TopicOnePage.prototype.addScore = function () {
        this
            .event
            .publish('topicOneQuizScore', Number(this.quizScore));
    };
    TopicOnePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    TopicOnePage.prototype.ionViewDidLoad = function () {
        this
            .useApi
            .getAllUsers()
            .then(function (data) {
            console.log(data);
        });
        // let mySubject = new Subject(); mySubject.subscribe((data)=>{
        // console.log(data); }) mySubject.next('hello');
    };
    TopicOnePage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this
            .scroll
            .scrollTo(index * this.tabElementWidth_px, 0, 500);
        this
            .SwipedTabsSlider
            .slideTo(index, 500);
    };
    TopicOnePage.prototype.updateIndicatorPosition = function () {
        this
            .scroll
            .scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    TopicOnePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    TopicOnePage.prototype.startQuiz = function () {
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_2__quiz_quiz__["a" /* QuizPage */]);
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], TopicOnePage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TopicOnePage.prototype, "scroll", void 0);
    TopicOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-topic-one',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-one/topic-one.html"*/'<ion-header>\n    <!-- \n            <ion-navbar>\n              <ion-title>Topic One</ion-title>\n            </ion-navbar> -->\n    <custom-nav-bar></custom-nav-bar>\n    <ion-content #scroll scrollX="true" scrollY="false" style="height: 50px;">\n        <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)" [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'\n                [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}">\n                {{tab}}\n            </ion-segment-button>\n        </ion-segment>\n\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}"></div>\n    </ion-content>\n</ion-header>\n\n<ion-content>\n\n    <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)" (ionSlideWillChange)="updateIndicatorPosition()"\n        (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <ion-slide>\n            <h1>Problem</h1>\n            <!-- <button ion-button (click)="addScore()">Add Score</button> -->\n        </ion-slide>\n        <ion-slide>\n            <h1>Cause</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Effect</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Importance</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Quiz</h1>\n            <!-- <h3>Score: {{quizScore}}</h3> -->\n            <button ion-button (click)="startQuiz()">{{quizButtonText}}</button>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-one/topic-one.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_api_service_user_api_service__["a" /* UserApiServiceProvider */]])
    ], TopicOnePage);
    return TopicOnePage;
}());

//# sourceMappingURL=topic-one.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicTwoPage = /** @class */ (function () {
    function TopicTwoPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 100;
        this.tabs = [];
        this.tabs = ["Problem", "Cause", "Effect", "Importance", "Quiz"];
    }
    TopicTwoPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    TopicTwoPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this
            .scroll
            .scrollTo(index * this.tabElementWidth_px, 0, 500);
        this
            .SwipedTabsSlider
            .slideTo(index, 500);
    };
    TopicTwoPage.prototype.updateIndicatorPosition = function () {
        this
            .scroll
            .scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    TopicTwoPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], TopicTwoPage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TopicTwoPage.prototype, "scroll", void 0);
    TopicTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-topic-two',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-two/topic-two.html"*/'<ion-header>\n<!-- \n    <ion-navbar>\n      <ion-title>Topic Two</ion-title>\n    </ion-navbar> -->\n    <custom-nav-bar></custom-nav-bar>    \n  <ion-content  #scroll scrollX="true" scrollY="false" style="height: 50px;">\n    <ion-segment  class="SwipedTabs-tabs">\n      <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n      [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'  [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}" >\n        {{tab}}\n      </ion-segment-button>\n    </ion-segment>\n  \n    <!-- here is our dynamic line  "indicator"-->\n    <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}" ></div>\n  </ion-content>\n  </ion-header>\n  \n  <ion-content >\n  \n    <ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n                (ionSlideWillChange)="updateIndicatorPosition()"\n                (ionSlideDidChange)="updateIndicatorPosition()"\n                (pan)="updateIndicatorPosition()"\n                [pager]="false"\n          >\n      <ion-slide>\n        <h1>Problem</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Cause</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Effect</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Importance</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Quiz</h1>\n      </ion-slide>\n    </ion-slides>\n  \n  \n  </ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-two/topic-two.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], TopicTwoPage);
    return TopicTwoPage;
}());

//# sourceMappingURL=topic-two.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicThreePage = /** @class */ (function () {
    function TopicThreePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 100;
        this.tabs = [];
        this.tabs = ["Problem", "Cause", "Effect", "Importance", "Quiz"];
    }
    TopicThreePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    TopicThreePage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this
            .scroll
            .scrollTo(index * this.tabElementWidth_px, 0, 500);
        this
            .SwipedTabsSlider
            .slideTo(index, 500);
    };
    TopicThreePage.prototype.updateIndicatorPosition = function () {
        this
            .scroll
            .scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    TopicThreePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], TopicThreePage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TopicThreePage.prototype, "scroll", void 0);
    TopicThreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-topic-three',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-three/topic-three.html"*/'<ion-header>\n    <!-- \n            <ion-navbar>\n              <ion-title>Topic Three</ion-title>\n            </ion-navbar> -->\n    <custom-nav-bar></custom-nav-bar>\n    <ion-content #scroll scrollX="true" scrollY="false" style="height: 50px;">\n        <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)" [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'\n                [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}">\n                {{tab}}\n            </ion-segment-button>\n        </ion-segment>\n\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}"></div>\n    </ion-content>\n</ion-header>\n\n<ion-content>\n\n    <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)" (ionSlideWillChange)="updateIndicatorPosition()"\n        (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <ion-slide>\n            <h1>Problem</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Cause</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Effect</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Importance</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Quiz</h1>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-three/topic-three.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], TopicThreePage);
    return TopicThreePage;
}());

//# sourceMappingURL=topic-three.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicFivePage = /** @class */ (function () {
    function TopicFivePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 100;
        this.tabs = [];
        this.tabs = ["Problem", "Cause", "Effect", "Importance", "Quiz"];
    }
    TopicFivePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    TopicFivePage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this
            .scroll
            .scrollTo(index * this.tabElementWidth_px, 0, 500);
        this
            .SwipedTabsSlider
            .slideTo(index, 500);
    };
    TopicFivePage.prototype.updateIndicatorPosition = function () {
        this
            .scroll
            .scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    TopicFivePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], TopicFivePage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TopicFivePage.prototype, "scroll", void 0);
    TopicFivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-topic-five',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-five/topic-five.html"*/'<ion-header>\n    <!-- \n            <ion-navbar>\n              <ion-title>Topic Five</ion-title>\n            </ion-navbar> -->\n    <custom-nav-bar></custom-nav-bar>\n    <ion-content #scroll scrollX="true" scrollY="false" style="height: 50px;">\n        <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)" [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'\n                [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}">\n                {{tab}}\n            </ion-segment-button>\n        </ion-segment>\n\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}"></div>\n    </ion-content>\n</ion-header>\n\n<ion-content>\n\n    <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)" (ionSlideWillChange)="updateIndicatorPosition()"\n        (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <ion-slide>\n            <h1>Problem</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Cause</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Effect</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Importance</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Quiz</h1>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-five/topic-five.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], TopicFivePage);
    return TopicFivePage;
}());

//# sourceMappingURL=topic-five.js.map

/***/ }),

/***/ 205:
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
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 249:
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
webpackEmptyAsyncContext.id = 249;

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_questions__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__result__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quiz_badges__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuizPage = /** @class */ (function () {
    function QuizPage(navCtrl, navParams, viewCtrl, modalCtrl, alertCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.badges = [];
        this.questions = __WEBPACK_IMPORTED_MODULE_3__quiz_questions__["a" /* questions */];
        this.isAnswer = false;
        this.btnStyle = "";
        this.score = 0;
        this.badges = __WEBPACK_IMPORTED_MODULE_5__quiz_badges__["a" /* badges */];
        this.disableButtons = false;
    }
    QuizPage.prototype.ionViewDidEnter = function () {
        this
            .quizSlides
            .lockSwipes(true);
    };
    QuizPage.prototype.ionViewDidLoad = function () {
        this
            .nativeAudio
            .preloadSimple('correct', 'assets/audio/correct.m4a');
        this
            .nativeAudio
            .preloadSimple('wrong', 'assets/audio/wrong.m4a');
        this
            .nativeAudio
            .preloadSimple('new_badge', 'assets/audio/New-Badge.m4a');
    };
    QuizPage.prototype.checkAnswer = function (e, option) {
        var _this = this;
        if (option.isAnswer) {
            this.isAnswer = true;
            e
                .target
                .parentNode
                .classList
                .add("btn-correct");
            this.score++;
            this
                .nativeAudio
                .play('correct');
        }
        else {
            this.isAnswer = false;
            e
                .target
                .parentNode
                .classList
                .add("btn-wrong");
            this
                .nativeAudio
                .play('wrong');
        }
        setTimeout(function () {
            _this.disableButtons = true;
        }, 300);
        setTimeout(function () {
            if (_this.quizSlides.clickedIndex < _this.quizSlides.length() - 1) {
                _this.disableButtons = false;
                _this.nextSlide();
            }
            else {
                _this.showResultPage();
                _this
                    .nativeAudio
                    .play('new_badge');
            }
        }, 1000);
    };
    QuizPage.prototype.nextSlide = function () {
        this
            .quizSlides
            .lockSwipes(false);
        this
            .quizSlides
            .slideNext();
        this
            .quizSlides
            .lockSwipes(true);
    };
    QuizPage.prototype.showLeaveConfirm = function () {
        var _this = this;
        var confirm = this
            .alertCtrl
            .create({
            title: 'Are you sure to leave?',
            message: 'You will lose your current points!',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () { }
                }, {
                    text: 'Confirm',
                    handler: function () {
                        _this
                            .viewCtrl
                            .dismiss();
                        // this   .scoreEmitter   .emit(this.score);
                    }
                }
            ]
        });
        confirm.present();
    };
    QuizPage.prototype.showResultPage = function () {
        var _this = this;
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_4__result__["a" /* QuizResultPage */], {
            score: this.score,
            badge: this
                .badges
                .find(function (item, index, array) {
                return item.points == _this.score;
            })
        });
        //todo: insert score & badge into db
        // 
        modal.onDidDismiss(function (data) {
            if (data.action == 'remove') {
                _this
                    .viewCtrl
                    .dismiss();
            }
        });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], QuizPage.prototype, "quizSlides", void 0);
    QuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-quiz',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/quiz/quiz.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Quiz\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="showLeaveConfirm()">\n        <span ion-text color="primary">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides #quizSlides>\n    <ion-slide *ngFor="let question of questions">\n      <h3>{{question.question}}</h3>\n      <ion-buttons *ngFor="let option of question.options">\n        <button ion-button block large \n          [ngClass]="[btnStyle]"\n          [disabled]="disableButtons"\n          (click)="checkAnswer($event, option)">\n          {{option.description}}\n        </button>\n      </ion-buttons>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/quiz/quiz.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], QuizPage);
    return QuizPage;
}());

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizResultPage = /** @class */ (function () {
    function QuizResultPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.score = navParams.get('score');
        this.badge = navParams.get('badge');
    }
    QuizResultPage.prototype.ionViewDidLoad = function () {
        // document.getElementById("BadgeTitle").innerHTML = this.badge.title;
        // let badgeImg = document.getElementById("BadgeImg") as HTMLImageElement;
        // badgeImg.src = this.badge.imgUrl;
    };
    QuizResultPage.prototype.close = function () {
        this
            .viewCtrl
            .dismiss({ 'action': 'remove', 'score': this.score });
    };
    QuizResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-quiz-result',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/quiz/result.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Result\n        </ion-title>\n        <ion-buttons start>\n\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>Your score: {{score}}</h1>\n    <h1 *ngIf=\'badge\'>Badge: {{badge.title}}</h1>\n    <img *ngIf=\'badge\'[src]=\'badge.imgUrl\'>\n    <button ion-button (click)="close()">\n        <span ion-text>Confirm</span>\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/quiz/result.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], QuizResultPage);
    return QuizResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserApiServiceProvider = /** @class */ (function () {
    function UserApiServiceProvider(http) {
        this.http = http;
        this.baseUrl = "https://plastic-ocean.firebaseio.com";
        console.log('Hello UserApiServiceProvider Provider');
    }
    UserApiServiceProvider.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.baseUrl + "/userData.json").subscribe(function (res) { return resolve(res.json()); });
        });
    };
    UserApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserApiServiceProvider);
    return UserApiServiceProvider;
}());

//# sourceMappingURL=user-api-service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pixi_js__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_items__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GamePage = /** @class */ (function () {
    function GamePage(navCtrl, alertCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.gameScore = 0;
        this.gameLife = 5;
        this.gamePlay = true;
    }
    GamePage_1 = GamePage;
    GamePage.prototype.playGame = function () {
        var self = this;
        self.gamePlay = !self.gamePlay;
        if (self.gamePlay) {
            self
                .app
                .ticker
                .start();
        }
        else {
            self
                .app
                .ticker
                .stop();
        }
    };
    GamePage.prototype.ionViewDidLoad = function () {
        this
            .nativeAudio
            .preloadSimple('correct', 'assets/audio/correct.m4a');
        this
            .nativeAudio
            .preloadSimple('wrong', 'assets/audio/wrong.m4a');
        this
            .nativeAudio
            .preloadSimple('new_badge', 'assets/audio/New-Badge.m4a');
        var self = this;
        var bottomPadding = 75;
        self.app = new __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Application"](window.innerWidth, window.innerHeight, { backgroundColor: 0x1099bb });
        ;
        this
            .content
            .nativeElement
            .appendChild(self.app.view);
        var container = new __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Container"]();
        self
            .app
            .stage
            .addChild(container);
        startAlert(self);
        function startAlert(self) {
            var alert = self
                .alertCtrl
                .create({
                title: 'Start the game!',
                subTitle: 'Description',
                buttons: [
                    {
                        text: 'OK',
                        handler: function (data) {
                            fall();
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
            alert.present();
        }
        function fall() {
            var firstTime = true;
            if (self.gamePlay) {
                if (firstTime) {
                    __WEBPACK_IMPORTED_MODULE_4__game_items__["a" /* items */].forEach(function (elemData, index) {
                        createItem(elemData, index);
                    });
                    firstTime = false;
                }
                if (!firstTime) {
                    setTimeout(fall, 1500);
                }
            }
        }
        function createItem(elemData, index) {
            console.log("Create Item: " + elemData.url);
            var item = __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Sprite"]
                .fromImage(elemData.url);
            // center the sprite's anchor point
            item
                .anchor
                .set(0.5);
            item.x = getItemPosX();
            item.y = getItemPosY(index);
            function getItemPosX() {
                var padding = 60;
                var max = self.app.screen.width - padding;
                var min = padding;
                var posX = Math.random() * (max - min + 1) + min;
                if (posX > min && posX < self.app.screen.width / 2 - padding || posX > self.app.screen.width / 2 + padding / 2 && posX < max) {
                    return posX;
                }
            }
            function getItemPosY(i) {
                var max = 100;
                var min = 0;
                return -i * (Math.floor(Math.random() * (max - min + 1)) + min) * 20 - Math.floor(Math.random() * 200);
            }
            item.rotation = Math.random() * 360;
            item
                .scale
                .set(0.6);
            item.interactive = true;
            item.buttonMode = true;
            item
                .on('pointerdown', onDragStart)
                .on('pointerup', onDragEnd)
                .on('pointerupoutside', onDragEnd)
                .on('pointermove', onDragMove);
            container.addChild(item);
            self
                .app
                .ticker
                .add(function (delta) {
                if (item.y < self.app.screen.height - bottomPadding) {
                    item.y += elemData.speed;
                }
                else {
                    calScore(elemData, item);
                    if (self.gameLife == 0) {
                        self
                            .app
                            .ticker
                            .stop();
                        gameOverAlert(self);
                        self.gamePlay = false;
                    }
                    this.destroy();
                }
            });
        }
        function calScore(elemData, item) {
            item
                .on('pointerdown', onDragStop)
                .on('pointerup', onDragStop)
                .on('pointerupoutside', onDragStop)
                .on('pointermove', onDragStop);
            //recycable bin
            if (item.x >= self.app.screen.width / 2) {
                if (elemData.recycable) {
                    self
                        .nativeAudio
                        .play('correct');
                    self.gameScore++;
                    container.removeChild(item);
                }
                else if (!elemData.recycable) {
                    self
                        .nativeAudio
                        .play('wrong');
                    item.y = self.app.screen.height - bottomPadding;
                    bottomPadding += 3;
                    self.gameLife--;
                }
            }
            //unrecycable bin
            if (item.x < self.app.screen.width / 2) {
                if (elemData.recycable) {
                    self
                        .nativeAudio
                        .play('wrong');
                    item.y = self.app.screen.height - bottomPadding;
                    bottomPadding += 3;
                    self.gameLife--;
                }
                else if (!elemData.recycable) {
                    self
                        .nativeAudio
                        .play('correct');
                    self.gameScore++;
                    container.removeChild(item);
                }
            }
        }
        function gameOverAlert(self) {
            self
                .app
                .ticker
                .stop();
            var prompt = self
                .alertCtrl
                .create({
                title: 'Game Over.',
                message: "Your score: " + self.gameScore,
                buttons: [
                    {
                        text: 'Play again',
                        handler: function (data) {
                            self
                                .navCtrl
                                .push(GamePage_1);
                        }
                    }, {
                        text: 'Back to the topic',
                        handler: function (data) {
                            self
                                .navCtrl
                                .push(__WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__["a" /* TopicFourPage */]);
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
            prompt.present();
        }
        function onDragStart(event) {
            this.data = event.data;
            this.alpha = 0.5;
            this.dragging = true;
        }
        function onDragEnd() {
            this.alpha = 1;
            this.dragging = false;
            // set the interaction data to null
            this.data = null;
        }
        function onDragMove() {
            if (this.x <= 0 || this.x >= self.app.screen.width || this.y >= self.app.screen.height) {
                this.dragging = false;
            }
            if (this.dragging) {
                var newPosition = this
                    .data
                    .getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
        function onDragStop() {
            this.dragging = false;
        }
        var drawSeaBottom = function () {
            var graphics = new __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Graphics"]();
            graphics.lineStyle(1);
            graphics.beginFill(0xFF0000, 0.7);
            graphics.drawRect(0, self.app.screen.height - 80, self.app.screen.width / 2, 80);
            graphics.endFill();
            graphics.lineStyle(1);
            graphics.beginFill(0x33FF00, 0.7);
            graphics.drawRect(self.app.screen.width / 2, self.app.screen.height - 80, self.app.screen.width / 2, 80);
            graphics.endFill();
            self
                .app
                .stage
                .addChild(graphics);
        };
        drawSeaBottom();
    };
    GamePage.prototype.ionViewWillLeave = function () {
        var self = this;
        self
            .app
            .ticker
            .stop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GamePage.prototype, "content", void 0);
    GamePage = GamePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-game',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/game/game.html"*/'<!-- <ion-header>\n  <custom-nav-bar></custom-nav-bar>\n</ion-header> -->\n\n<ion-content>\n  <div #content ion-fixed>\n    <ion-grid ion-fixed>\n      <ion-row>\n        <ion-col col-4>\n          <h4>Score: {{gameScore}}</h4>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button color="light" outline (click)="playGame()">\n            <ion-icon name="{{gamePlay?\'pause\':\'play\'}}"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <h4>Life: {{gameLife}}</h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/game/game.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], GamePage);
    return GamePage;
    var GamePage_1;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_menu_topic_menu__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = {
            email: 'hoc2@tcd.ie',
            password: 'pass001'
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.createAccount = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this
            .auth
            .login(this.registerCredentials)
            .subscribe(function (allowed) {
            if (allowed) {
                // this.userSetting.initStorage().then(()=>{
                _this
                    .navCtrl
                    .setRoot(__WEBPACK_IMPORTED_MODULE_4__topic_menu_topic_menu__["a" /* TopicMenu */]);
                // });
            }
            else {
                _this.showError("Access Denied");
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this
            .loadingCtrl
            .create({ content: 'Please wait...', dismissOnPageChange: true });
        this
            .loading
            .present();
    };
    LoginPage.prototype.showError = function (text) {
        this
            .loading
            .dismiss();
        var alert = this
            .alertCtrl
            .create({ title: 'Fail', subTitle: text, buttons: ['OK'] });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-login',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col>\n      LOGO\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n  <div>\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n          <button ion-button block clear (click)="createAccount()">Create New Account</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/login/login.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(52);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = {
            email: '',
            password: ''
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this
            .auth
            .register(this.registerCredentials)
            .subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup("Success", "Account created.");
            }
            else {
                _this.showPopup("Error", "Problem creating account.");
            }
        });
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-register',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <form (ngSubmit)="register()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" requied></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" requied></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/register/register.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__achievement_achievement__ = __webpack_require__(449);
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
                component: __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]
            }, {
                title: 'Achivement',
                component: __WEBPACK_IMPORTED_MODULE_3__achievement_achievement__["a" /* AchievementPage */]
            }
            // , {
            //   title: 'Community Feed',
            //   component: AchievementPage
            // }
        ];
        this.userScore = navParams.get('score');
    }
    AccountMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountMenuPage');
    };
    AccountMenuPage.prototype.pageSelected = function (page) {
        this.navCtrl.push(page.component, { score: this.userScore });
    };
    AccountMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-account-menu',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/account-menu/account-menu.html"*/'<ion-header>\n    <custom-nav-bar></custom-nav-bar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let page of pages" (click)="pageSelected(page)">\n      {{ page.title }}\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/account-menu/account-menu.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AccountMenuPage);
    return AccountMenuPage;
}());

//# sourceMappingURL=account-menu.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        var currentUser = this
            .auth
            .getUserInfo();
        this.username = currentUser['name'];
        this.email = currentUser['email'];
        this.badge = currentUser['badge'];
    }
    ProfilePage.prototype.ionViewDidLoad = function () { };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-profile',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>Name: {{username}}</p>\n  <p>Email: {{email}}</p>\n  <p>Position: {{badge}}</p>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/profile/profile.html"*/ }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _b || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AchievementPage = /** @class */ (function () {
    function AchievementPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        // this.userScore = navParams.get('score');
        var info = this
            .auth
            .getUserInfo();
        this.achievement = info['achievement'];
    }
    AchievementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AchievementPage');
    };
    AchievementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-achievement',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/achievement/achievement.html"*/'<!--\n  Generated template for the AchievementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Achievement</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-card *ngFor="let a of achievement">\n    <ion-card-header>\n      {{a.section}}\n    </ion-card-header>\n    <ion-card-content>\n      <h4>Score: {{a.score}}</h4>\n      <h4>Badge: {{a.badge}}</h4>\n    </ion-card-content>\n  </ion-card> -->\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/achievement/achievement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AchievementPage);
    return AchievementPage;
}());

//# sourceMappingURL=achievement.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(455);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_topic_one_topic_one__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_topic_two_topic_two__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_topic_three_topic_three__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_topic_four_topic_four__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_topic_five_topic_five__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_custom_nav_bar_custom_nav_bar__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_topic_menu_topic_menu__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_account_menu_account_menu__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_achievement_achievement__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_game_game__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_quiz_quiz__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_quiz_result__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_auth_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_register_register__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_http__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_sql_storage_sql_storage__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_user_api_service_user_api_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_native_audio__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_http__ = __webpack_require__(298);
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_custom_nav_bar_custom_nav_bar__["a" /* CustomNavBarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_topic_menu_topic_menu__["a" /* TopicMenu */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_topic_one_topic_one__["a" /* TopicOnePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_topic_two_topic_two__["a" /* TopicTwoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_topic_three_topic_three__["a" /* TopicThreePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_topic_four_topic_four__["a" /* TopicFourPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_topic_five_topic_five__["a" /* TopicFivePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_account_menu_account_menu__["a" /* AccountMenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_achievement_achievement__["a" /* AchievementPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_quiz_result__["a" /* QuizResultPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_custom_nav_bar_custom_nav_bar__["a" /* CustomNavBarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_topic_menu_topic_menu__["a" /* TopicMenu */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_topic_one_topic_one__["a" /* TopicOnePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_topic_two_topic_two__["a" /* TopicTwoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_topic_three_topic_three__["a" /* TopicThreePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_topic_four_topic_four__["a" /* TopicFourPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_topic_five_topic_five__["a" /* TopicFivePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_account_menu_account_menu__["a" /* AccountMenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_achievement_achievement__["a" /* AchievementPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_quiz_result__["a" /* QuizResultPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_sql_storage_sql_storage__["a" /* SqlStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_user_api_service_user_api_service__["a" /* UserApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_28__providers_user_api_service_user_api_service__["a" /* UserApiServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_topic_menu_topic_menu__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_topic_one_topic_one__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_topic_two_topic_two__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_topic_three_topic_three__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_topic_four_topic_four__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_topic_five_topic_five__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__ = __webpack_require__(52);
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
    function MyApp(platform, menu, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        // make HelloIonicPage the root (or first) page
        // rootPage = TopicMenu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Plastic Pollution', component: __WEBPACK_IMPORTED_MODULE_5__pages_topic_one_topic_one__["a" /* TopicOnePage */] },
            { title: 'About Pollution', component: __WEBPACK_IMPORTED_MODULE_6__pages_topic_two_topic_two__["a" /* TopicTwoPage */] },
            { title: 'Species Affected', component: __WEBPACK_IMPORTED_MODULE_7__pages_topic_three_topic_three__["a" /* TopicThreePage */] },
            { title: 'Take Action', component: __WEBPACK_IMPORTED_MODULE_8__pages_topic_four_topic_four__["a" /* TopicFourPage */] },
            { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_9__pages_topic_five_topic_five__["a" /* TopicFivePage */] },
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
    MyApp.prototype.gotoPage = function (page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.gotoHomepage = function () {
        this.menu.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_topic_menu_topic_menu__["a" /* TopicMenu */]);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.menu.close();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/deniseho/plastic/src/app/app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>MENU</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item icon-only (click)="gotoHomepage()">\n          <ion-icon name="home"></ion-icon>\n        </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>Pages</ion-list-header>\n      <button ion-item *ngFor="let p of pages" (click)="gotoPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>Settings</ion-list-header>\n      <button ion-item (click)="logout()">\n        <ion-icon name="log-out"> Logout</ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/deniseho/plastic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return questions; });
var questions = [
    {
        question: "question 01",
        options: [
            {
                description: "correct",
                isAnswer: true
            }, {
                description: "wrong",
                isAnswer: false
            }, {
                description: "wrong",
                isAnswer: false
            }, {
                description: "wrong",
                isAnswer: false
            }, {
                description: "wrong",
                isAnswer: false
            }
        ]
    },
    {
        question: "question 02",
        options: [
            {
                description: "wrong",
                isAnswer: false
            }, {
                description: "wrong",
                isAnswer: false
            }, {
                description: "wrong",
                isAnswer: false
            }, {
                description: "correct",
                isAnswer: true
            }, {
                description: "wrong",
                isAnswer: false
            }
        ]
    },
    {
        question: "question 03",
        options: [
            {
                description: "wrong",
                isAnswer: false
            }, {
                description: "correct",
                isAnswer: true
            }, {
                description: "wrong",
                isAnswer: false
            }, {
                description: "wrong",
                isAnswer: false
            }, {
                description: "wrong",
                isAnswer: false
            }
        ]
    },
    {
        question: "question 04",
        options: [
            {
                description: "wrong",
                isAnswer: false
            }, {
                description: "wrong",
                isAnswer: false
            }, {
                description: "wrong",
                isAnswer: false
            }, {
                description: "correct",
                isAnswer: true
            }, {
                description: "wrong",
                isAnswer: false
            }
        ]
    },
    {
        question: "question 05",
        options: [
            {
                description: "wrong",
                isAnswer: false
            }, {
                description: "wrong",
                isAnswer: false
            }, {
                description: "wrong",
                isAnswer: false
            }, {
                description: "wrong",
                isAnswer: false
            }, {
                description: "correct",
                isAnswer: true
            }
        ]
    },
];
//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return badges; });
var badges = [
    {
        title: "Trainee",
        points: 5,
        imgUrl: "assets/imgs/badge01.jpg"
    }, {
        title: "Assistant",
        points: 10,
        imgUrl: "assets/imgs/badge01.jpg"
    }, {
        title: "Junior",
        points: 15,
        imgUrl: "assets/imgs/badge01.jpg"
    }, {
        title: "Senior",
        points: 20,
        imgUrl: "assets/imgs/badge01.jpg"
    }, {
        title: "Consultant",
        points: 25,
        imgUrl: "assets/imgs/badge01.jpg"
    }
];

//# sourceMappingURL=badges.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_api_service_user_api_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var User = /** @class */ (function () {
    function User(name, email, password, achievement, badge) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.achievement = achievement;
        this.badge = badge;
    }
    return User;
}());

var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http, sqlite, userApi) {
        var _this = this;
        this.http = http;
        this.sqlite = sqlite;
        this.userApi = userApi;
        this
            .userApi
            .getAllUsers()
            .then(function (data) {
            _this.allUsers = data;
        });
    }
    AuthServiceProvider.prototype.ionViewDidLoad = function () { };
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_5_lodash__["first"](__WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](_this.allUsers, function (item) {
                    return item.email === credentials.email;
                }));
                console.log(_this.currentUser);
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.register = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            //todo: store the credentials to your backend
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.getUserInfo = function () { return this.currentUser; };
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__["a" /* SQLite */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__["a" /* SQLite */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_api_service_user_api_service__["a" /* UserApiServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_api_service_user_api_service__["a" /* UserApiServiceProvider */]) === "function" && _c || Object])
    ], AuthServiceProvider);
    return AuthServiceProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return items; });
var items = [
    {
        url: 'assets/imgs/cup.png',
        name: "Plastic Cup",
        type: "tag1",
        recycable: true,
        speed: 2.5,
    }, {
        url: 'assets/imgs/bottle.png',
        name: "Plastic Cup",
        type: "tag2",
        recycable: true,
        speed: 3,
    }, {
        url: 'assets/imgs/microplastic.png',
        name: "Microplastic",
        type: "tag3",
        recycable: true,
        speed: 1.8,
    },
    ,
    {
        url: 'assets/imgs/fork_knife.png',
        name: 'Fork and knife',
        type: "tag4",
        recycable: false,
        speed: 3.5,
    }
];

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(446);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomNavBarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_menu_account_menu__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_menu_topic_menu__ = __webpack_require__(95);
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
    function CustomNavBarPage(event, navCtrl, menuCtrl, navParams) {
        this.event = event;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.totalScore = 0;
        // this.event.subscribe('topicOneQuizScore', (score)=>{
        //   this.calculateScore(score);
        // })
    }
    // calculateScore(score: number){
    //   this.totalScore += score;
    //   console.log(this.totalScore);
    // }
    CustomNavBarPage.prototype.ionViewDidLoad = function () {
    };
    CustomNavBarPage.prototype.gotoHomepage = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__topic_menu_topic_menu__["a" /* TopicMenu */]);
    };
    CustomNavBarPage.prototype.gotoAccountMenu = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_2__account_menu_account_menu__["a" /* AccountMenuPage */]);
    };
    CustomNavBarPage.prototype.openMenu = function () {
        this
            .menuCtrl
            .open();
    };
    CustomNavBarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'custom-nav-bar',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/custom-nav-bar/custom-nav-bar.html"*/'<ion-toolbar>\n  <ion-row>\n    <ion-col col-2>\n      <ion-buttons start>\n        <button ion-button menuToggle (click)="openMenu()">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col col-6>\n      <ion-buttons>\n        <button ion-button icon-only color="royal" (click)="gotoHomepage()">\n          <ion-title>OUR LOGO</ion-title>\n        </button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col col-4>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal" (click)="gotoAccountMenu()">\n          <ion-icon name="person"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n</ion-toolbar>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/custom-nav-bar/custom-nav-bar.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CustomNavBarPage);
    return CustomNavBarPage;
}());

//# sourceMappingURL=custom-nav-bar.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqlStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SqlStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SqlStorageProvider = /** @class */ (function () {
    function SqlStorageProvider(sqlite) {
        this.sqlite = sqlite;
    }
    SqlStorageProvider.prototype.get = function (key) {
        return this
            .db
            .executeSql('select key, value from userData where key = ?', [key])
            .then(function (data) {
            return JSON.parse(data.rows.item(0).value);
        });
    };
    SqlStorageProvider.prototype.set = function (key, value) {
        return this.db.executeSql('insert or replace into userData(key, value) values (?, ?)', [key, value]).then(function (data) {
            if (data.rows.length > 0) {
                return JSON.parse(data.rows.item(0).value);
            }
        });
    };
    SqlStorageProvider.prototype.initializeDatabase = function () {
        var _this = this;
        return this
            .sqlite
            .create({ name: 'data.db', location: 'default' })
            .then(function (db) {
            _this.db = db;
            return _this
                .db
                .executeSql('CREATE TABLE IF NOT EXISTS userData (key text primary key, value text)', [])
                .then(function (data) {
                console.log('**after CREATE TABLE check', data);
            });
        });
    };
    SqlStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], SqlStorageProvider);
    return SqlStorageProvider;
}());

//# sourceMappingURL=sql-storage.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__ = __webpack_require__(194);
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
        this.pages = [
            { title: 'Plastic Pollution', component: __WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__["a" /* TopicOnePage */] },
            { title: 'About Pollution', component: __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__["a" /* TopicTwoPage */] },
            { title: 'Species Affected', component: __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__["a" /* TopicThreePage */] },
            { title: 'Take Action', component: __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__["a" /* TopicFourPage */] },
            { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__["a" /* TopicFivePage */] },
        ];
    }
    TopicMenu.prototype.gotoPage = function (p) {
        this
            .navCtrl
            .push(p);
    };
    TopicMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-menu/topic-menu.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar> -->\n\n  <custom-nav-bar></custom-nav-bar>\n</ion-header>\n\n\n<ion-content>\n  <!-- <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p> -->\n  <button class="menuList" *ngFor="let p of pages" (click)="gotoPage(p.component)">\n    <h2>{{p.title}}</h2>\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-menu/topic-menu.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TopicMenu);
    return TopicMenu;
}());

//# sourceMappingURL=topic-menu.js.map

/***/ })

},[450]);
//# sourceMappingURL=main.js.map