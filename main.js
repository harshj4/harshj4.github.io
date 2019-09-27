(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div class=\"container-fluid no-gutters\"> -->\n<div class=\"row  justify-content-center no-gutters\" style = \"background-color:#416278; width: 100%;\n   height:100%; position: absolute; background-image: url('../assets/black.gif'); background-position: center; background-size: cover\">\n  <div class = \"col-12 col-md-10 col-sm-12 col-xs-12\" style = \"background-color: none; height:99%; position: relative;\">\n      <app-main></app-main>\n      <app-details></app-details>\n      <app-projects></app-projects>\n      <app-work></app-work>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _work_work_component__WEBPACK_IMPORTED_MODULE_7__["WorkComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"row\" style = \"height: 100%; position: fixed;  margin-top:0%; visibility: hidden; background: none; width: 100%\" id=\"detailsPane\">\n  <div class=\"col-12 col-md-4 col-sm-12 col-xs-12\" style=\"font-family: consolas; text-align: center;\">\n      <div class=\"card\" style=\"height: 45%; background: none;\">\n          <div class = \"card-header white\" style=\"color: black; font-weight: 300; text-align: center; border-bottom-color: white;\n            border-bottom-width: 0.5px; font-family: consolas\">My Skills</div>\n          <div class=\"card-body white-text\" style=\"background-color: none; height: 100%; overflow-y: scroll; \n              border-color: grey; border-width: 0.5px; border-style: solid\">\n            Programming/Scripting languages\n            <div class=\"grid-container scrollable skill-div\">\n              <!-- --webkit-overflow-scrolling: none\">  -->\n                <mdb-icon fab icon=\"python\" size=\"3x\" class=\"hoverable white-text skill-logo\" title=\"Python\"></mdb-icon>\n                <mdb-icon fab icon=\"java\" size=\"3x\" class=\"hoverable white-text\" title=\"Java\"></mdb-icon>\n                <img src=\"https://img.icons8.com/ios/50/000000/circled-c.png\" class=\"hoverable white skill-logo\" title=\"C\">\n                <img src=\"https://img.icons8.com/ios-filled/50/000000/c-plus-plus-logo.png\" class=\"hoverable white\" title=\"C++\">\n                <img src=\"https://img.icons8.com/ios/50/000000/console.png\" class=\"hoverable white\" title=\"Shell Scripts\">\n                <mdb-icon fab icon=\"js\" size=\"3x\" class=\"hoverable white-text\" title=\"Java Script\"></mdb-icon>\n                <mdb-icon fab icon=\"r-project\" size=\"3x\" class=\"hoverable white-text\" title=\"R\"></mdb-icon>\n            </div>\n            ML Frameworks\n            <div class=\"grid-container scrollable skill-div\">\n                <img src=\"../assets/keras_bw.jpg\" class=\"hoverable white\" title=\"Keras\">\n                <img src=\"../assets/tf2.png\" class=\"hoverable white\" title=\"TensorFlow\">\n            </div>\n            Web\n            <div class=\"grid-container scrollable skill-div\">\n                <mdb-icon fab icon=\"node\" size=\"3x\" class=\"hoverable white-text\" title=\"Node JS\"></mdb-icon>\n                <mdb-icon fab icon=\"angular\" size=\"3x\" class=\"hoverable white-text\" title=\"Angular 6\"></mdb-icon>\n                <mdb-icon fab icon=\"html5\" size=\"3x\" class=\"hoverable white-text\" title=\"HTML 5\"></mdb-icon>\n                <mdb-icon fab icon=\"css3\" size=\"3x\" class=\"hoverable white-text\" title=\"CSS\"></mdb-icon>\n                <img src=\"../assets/bootstrap.png\" class=\"hoverable white\" title=\"Bootstrap\">\n                <img src=\"../assets/django.png\" class=\"hoverable white\" title=\"Django\">\n                <img src=\"../assets/java-enterprise.png\" class=\"hoverable white\" title=\"J2EE\">\n            </div>\n            Other skills\n            <div class=\"grid-container scrollable skill-div\">\n                <img src=\"https://img.icons8.com/ios/50/000000/git.png\" class=\"hoverable white\" title=\"Git\">\n                <mdb-icon fas icon=\"database\" size=\"3x\" class=\"hoverable white-text\" title=\"Databases\"></mdb-icon>\n            </div>\n          </div>\n      </div>\n      <div class=\"card\" style=\"background: none; height: 20%;\">\n          <div class=\"card-header white\" style=\"color: black; font-weight: 300; text-align: center;\">My Contact</div>\n          <div class=\"card-body\" style=\"background-color: none; border-style: solid; border-color: grey; border-width: 0.5px\">\n              <div class=\"grid-container scrollable contact-div\">\n                  <a href=\"https://www.linkedin.com/in/harshal-jagtap-8a563476/\" target=\"_blank\">\n                    <mdb-icon fab icon=\"linkedin\" size=\"3x\" class=\"hoverable white-text\" title=\"LinkedIn\"></mdb-icon>\n                  </a>    \n                  <a href=\"https://github.com/harshj4\" target=\"_blank\">\n                    <mdb-icon fab icon=\"github-square\" size=\"3x\" class=\"hoverable white-text\" title=\"GitHub\"></mdb-icon>\n                  </a>\n                  <a href = \"mailto: harshal.jagtap4@gmail.com\">\n                      <mdb-icon far icon=\"envelope\" size=\"3x\" class=\"hoverable white-text\" title=\"GMail\"></mdb-icon>\n                  </a>\n                  <a href=\"mailto: harshalg@buffalo.edu\">\n                      <img src=\"../assets/ub.png\" class=\"hoverable white\" title=\"UB Mail\">\n                  </a>\n                  <a href=\"tel:+1-716-563-9712\" class=\"mobile\" onclick=\"showMobile();\">\n                      <mdb-icon fas icon=\"mobile-alt\" size=\"3x\" class=\"hoverable white-text\" title=\"Phone\"></mdb-icon>\n                  </a>\n                 \n              </div>\n              <!-- <p id = \"mob\" style=\"visibility: hidden; color:white; position: relative;\"+1 (716)-563-9712></p> -->\n          </div>\n      </div>\n  </div>\n  \n  <div class=\"col-12 col-md-3 col-sm-12 col-xs-12\" style=\"align-content: space-between;\">\n      \n    \n          \n          <div class=\"card transparent-div white-text custom-card\" onclick=\"slideToWork();\">\n              <a style=\"height: 100%\">\n                  <div class=\"card-body text-center\">\n                      <p style=\"margin-top: 30%\">Professional Experience</p>\n                  </div>\n              </a>\n          </div>\n          <div class=\"card transparent-div white-text custom-card\" style=\"margin-top: 6%;\">\n              <a href=\"https://www.slideshare.net/secret/imTAKubRMRFpGI\" target=\"_blank\" style=\"height: 100%; color: white\">\n                  <div class=\"card-body text-center\">\n                      <p style=\"margin-top: 30%\">Resume</p>\n                  </div>\n              </a>\n          </div>\n          \n      \n  </div>\n  \n  <div class=\"col-12 col-md-3 col-sm-12 col-xs-12\">\n      \n    \n          \n        <div class=\"card transparent-div white-text custom-card\" onclick=\"slideDetailsPane();\">\n              <a style=\"height: 100%\">    \n                <div class=\"card-body text-center\"> \n                    <p style=\"margin-top: 30%;\">Projects</p>\n                </div>\n              </a>\n        </div>\n        <div class=\"card transparent-div custom-card\" style=\"margin-top: 6%;\">\n              <a href=\"http://www.journalijar.com/article/13706/virtual-keyboard/\" target=\"_blank\" style=\"height: 100%; color: white\">\n                  <div class=\"card-body text-center\">\n                      <p style=\"margin-top: 30%\">Paper Publication</p>\n                  </div>\n              </a>\n        </div>              \n  </div>\n\n</div> "

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters justify-content-center\" style = \"background-color: none; height:80%\" id = \"upperRow\">\n      \n  <div class = \"col-12 col-md-7 col-sm-10 col-xs-12\" style = \"background-color:none; height: 100%; padding: 3%\">\n    <a onclick=\"goHome();\" id=\"homeBtn\" title=\"Jump Home\">\n      <p class = \"text-center\" \n            style=\"font-size: 250%; color: white; font-weight: 400; font-family: consolas\">Harshal Ganesh Jagtap</p>\n        <p class = \"text-center lighter-hover white\" style = \"font-size: 100%; font-family: consolas\">Python & Java programmer | Student | University at Buffalo</p>\n    </a>  \n    \n    <div style = \"padding: 2%; height: 60%\" id = \"bio\">\n        <p class = \"text-justify lighter-hover text\" style=\"font-size: 100%; color: white\">\n          As a student of computer science, I love to learn and work on lots of cool ideas and algorithms. Previously, as a software engineer in Tech Mahindra Ltd I have worked on some challenging Java assignments. I tend to look at things and try to think of possible ways in which it can be done better. This led me take up some additional Unix related automation coding tasks and I'm still striving to do more. When I was in\n          my undergrad school when I first started to code in Python, me and my couple of friends came together to work on our first ever computer vision projects. Since then, I have been trying to learn more and implement various techniques in computer vision. \n          When I'm not coding, I love to play violin. I am a fan of Itzak Perlman and I listen to his violin solos on repeat. And if you're a fellow cinephile, then I guess we have a lot of things we can talk.\n        </p>\n    </div>\n  </div>\n  <div class = \"col-12 col-md-5 col-sm-10 col-xs-12 overlay zoom\" style = \"background-color:none; height: 100%; padding: 3%\" id = \"rightDiv\">\n    <!-- <div class=\"avatar justify-content-center overlay zoom\" style=\"width:80%; height: 50%\"> -->\n        <img src=\"../assets/me.jpg\" alt=\"avatar mx-auto white\" \n        class=\"rounded-circle img-fluid z-depth-4\" style = \"height: 70%; width: 90%;\" id = \"myPic\">\n    <!-- </div> -->\n  </div>\n</div>\n\n  \n\n<!-- <div class=\"row no-gutters justify-content-center\" style = \"height: 20%\" id = \"btnBar\"> -->\n    <button id = \"moreBtn\" type=\"button\" class=\"btn btn-default btn-lg btn-block z-depth-5 more-btn\"  onclick = \"collapse();\">MORE</button>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class = \"text-center\" style = \"height: 75%; position: fixed;  margin-top:0%; visibility: hidden; \n            background: none; width: 90%; color: white; overflow-y: scroll; font-family: consolas; padding: 0.5%\" id=\"projectsPane\">\n          <button class=\"backButton projectCard\" onclick=\"slideProjectsPane();\">Go Back</button>\n          <p style=\"margin-left: 25%; width: 50%\">-- Distributed & Operating Systems -- </p>\n          <div class=\"grid-container scrollable projectGrid\" style=\"width:100%; grid-template-columns: auto auto auto auto; \n                  grid-template-rows: auto; \">\n            \n            <div class=\"card transparent-div projectCard\">\n                <div class = \"card-header white\" style=\"color: black; font-weight: 300; text-align: center;\n                border-width: 0px; font-family: consolas; justify-content: center;\">Dynamo</div>\n                <a href=\"https://github.com/harshj4/Dynamo\" target=\"_blank\" style=\"color: white;\">\n                    <div class=\"card-body text-center\" style=\"align-self: center; padding: 1%;\">\n                           <p style=\"margin-top: 20%\">A small scale implementation of Dynamo style key value storage.</p> \n                        <div class=\"text-center transparent-div tag-bar\">\n                            Tags: Distributed Systems, Java, Android\n                        </div>\n                    </div>\n                </a>                \n            </div>\n            \n            <div class=\"card transparent-div projectCard\">\n                <div class = \"card-header white\" style=\"color: black; font-weight: 300; text-align: center;\n                border-width: 0px; font-family: consolas; justify-content: center;\">Distributed Hash Tables</div>\n                <a href=\"https://github.com/harshj4/Distributed-Hash-Tables\" target=\"_blank\" style=\"color: white\">\n                    <div class=\"card-body text-center\" style=\"align-self: center; padding: 2%\">\n                        <p style=\"margin-top: 20%\">A simple distributed hash table implementation for peer to peer systems</p>\n                        <div class=\"text-center transparent-div tag-bar\">\n                            Tags: Distributed Systems, P2P,Java, Android\n                        </div>\n                      </div>\n                </a>                \n            </div>\n\n            <div class=\"card transparent-div projectCard\">\n                <div class = \"card-header white\" style=\"color: black; font-weight: 300; text-align: center;\n                border-width: 0px; font-family: consolas; justify-content: center;\">Messenger with ordering</div>\n                <a href=\"https://github.com/harshj4/Messenger-with-ordering-guarantees.\" target=\"_blank\" style=\"color: white\">\n                    <div class=\"card-body text-center\" style=\"align-self: center; padding: 2%\">\n                        <p style=\"margin-top: 20%\">A simple android based messenger with provides FIFO, causal and total ordering guarantees for messages.</p>\n                        <div class=\"text-center transparent-div tag-bar\">\n                            Tags: Distributed Systems,Java, Android\n                        </div>\n                      </div>\n                </a>                \n            </div>\n           \n            <div class=\"card transparent-div projectCard\">\n                <div class = \"card-header white\" style=\"color: black; font-weight: 300; text-align: center;\n                border-width: 0px; font-family: consolas; justify-content: center;\">Pintos Kernel</div>\n                <a href=\"https://github.com/harshj4/Pintos-Kernel\" target=\"_blank\" style=\"color: white\">\n                    <div class=\"card-body text-center\" style=\"align-self: center; padding: 2%\">\n                        <p style=\"margin-top: 20%\">A UNIX based multi-tasking kernel written in C (Ongoing)</p>\n                        <div class=\"text-center transparent-div tag-bar\">\n                            Tags: Operating Systems, C, System Design, System Programming\n                        </div>\n                      </div>\n                </a>                \n            </div>\n              \n          </div>\n          -- Machine Learning & Computer Vision --\n          <div class=\"grid-container scrollable projectGrid\" style=\"width:100%; grid-template-columns: auto auto auto auto; \n                      grid-template-rows: auto;\">\n              \n              <div class=\"card transparent-div projectCard\">\n                  <div class = \"card-header white\" style=\"color: black; font-weight: 300; text-align: center;\n                  border-width: 0px; font-family: consolas; justify-content: center;\">Bayesian Learning</div>\n                  <a href=\"https://github.com/harshj4/Bayesian-Learning\" target=\"_blank\" style=\"color: white\">\n                      <div class=\"card-body text-center\" style=\"align-self: center; padding: 2%\">\n                          <p style=\"margin-top: 20%\">Solving the classical problem of recognizing handwritten digits using Bayesian Decision Theory</p>\n                          <div class=\"text-center transparent-div tag-bar\">\n                              Tags: Classification, Bayes Theorem, Python, Pattern Recognition\n                          </div>\n                        </div>\n                  </a>                \n              </div>\n\n              <div class=\"card transparent-div projectCard\">\n                  <div class = \"card-header white\" style=\"color: black; font-weight: 300; text-align: center;\n                  border-width: 0px; font-family: consolas; justify-content: center;\">Virtual Keyboard</div>\n                  <a href=\"https://github.com/harshj4/Virtual-Keyboard\" target=\"_blank\" style=\"color: white\">\n                      <div class=\"card-body text-center\" style=\"align-self: center; padding: 2%\">\n                          <p style=\"margin-top: 20%\">Virtual keyboard is a virtual projection based keyboard in which a QWERTY keyboard is projected on a flat surface and key touches are detected using camera.</p>\n                          <div class=\"text-center transparent-div tag-bar\">\n                              Tags: Computer Vision, Image Processing, Python, Raspberry Pi\n                          </div>\n                        </div>\n                  </a>                \n              </div>\n\n              <div class=\"card transparent-div projectCard\">\n                  <div class = \"card-header white\" style=\"color: black; font-weight: 300; text-align: center;\n                  border-width: 0px; font-family: consolas; justify-content: center;\">Deep Q Reinforcement Learning</div>\n                  <a target=\"_blank\" style=\"color: white\">\n                      <div class=\"card-body text-center\" style=\"align-self: center; padding: 2%\">\n                          <p style=\"margin-top: 20%\">Finding the shortest optimal path between agent (Tom) and goal (Jerry) in a known grid arena. \n                                                    The agent pursues goal on an environment of 4 X 4 grid. The project was implemented in Python using Keras library.</p>\n                          <div class=\"text-center transparent-div tag-bar\">\n                              Tags: Reinforcement Learening, Python\n                          </div>\n                        </div>\n                  </a>                \n              </div>\n\n          </div>\n          -- Web Design & Others -- \n          <div class=\"grid-container scrollable projectGrid\" style=\"width:100%; grid-template-columns: auto auto auto auto; \n                      grid-template-rows: auto;\">\n               \n               <div class=\"card transparent-div projectCard\">\n                  <div class = \"card-header white\" style=\"color: black; font-weight: 300; text-align: center;\n                  border-width: 0px; font-family: consolas; justify-content: center;\">Auto-Transcription</div>\n                  <a href=\"https://github.com/harshj4/Autotranscription\" target=\"_blank\" style=\"color: white\">\n                      <div class=\"card-body text-center\" style=\"align-self: center; padding: 2%\">\n                          <p style=\"margin-top: 20%\">A web based transcription tool focused for CAD design software. It is built to transcribe speech and perform sentiment analysis,\n                                                     keyword extraction algorithms to display relevant results. This is a MEAN stack based application.</p>\n                          <div class=\"text-center transparent-div tag-bar\">\n                              Tags: Speech, Angular 7, NodeJS, MongoDB, Bootstrap, Python\n                          </div>\n                        </div>\n                  </a>                \n              </div>\n\n              <div class=\"card transparent-div projectCard\">\n                  <div class = \"card-header white\" style=\"color: black; font-weight: 300; text-align: center;\n                  border-width: 0px; font-family: consolas; justify-content: center;\">Cognitive Advertisements</div>\n                  <a target=\"_blank\" style=\"color: white\">\n                      <div class=\"card-body text-center\" style=\"align-self: center; padding: 2%\">\n                          <p style=\"margin-top: 20%\">An AI chatbot that can answer user queries based on video advertisements. The front-end was implemented in Java Enterprise Edition framework. \n                                                      The front-end was integrated with IBM Bluemix and Watson APIs. I achieved good accuracy was achieved in terms of context of user queries.</p>\n                          <div class=\"text-center transparent-div tag-bar\">\n                              Tags: AI, J2EE, Web APIs\n                          </div>\n                        </div>\n                  </a>                \n              </div>\n\n              <div class=\"card transparent-div projectCard\">\n                  <div class = \"card-header white\" style=\"color: black; font-weight: 300; text-align: center;\n                  border-width: 0px; font-family: consolas; justify-content: center;\">Exploratory Data Analysis</div>\n                  <a href=\"https://github.com/harshj4/Exploratory-Data-Analysis\" target=\"_blank\" style=\"color: white\">\n                      <div class=\"card-body text-center\" style=\"align-self: center; padding: 2%\">\n                          <p style=\"margin-top: 20%\">Exploratory data analysis of flu data from CDC fluview website. \n                                                      I have collected tweets related to keywords associated with flu. Tweets were collected using twitter APIs in R. The visualizations were deployed to a shiny app</p>\n                          <div class=\"text-center transparent-div tag-bar\">\n                              Tags: Data Visualization, R\n                          </div>\n                        </div>\n                  </a>                \n              </div>\n\n              <div class=\"card transparent-div projectCard\">\n                  <div class = \"card-header white\" style=\"color: black; font-weight: 300; text-align: center;\n                  border-width: 0px; font-family: consolas; justify-content: center;\">Robot Localization & path-finding</div>\n                  <a href=\"https://github.com/harshj4/Bot-localization---Bayes-Filter\" target=\"_blank\" style=\"color: white\">\n                      <div class=\"card-body text-center\" style=\"align-self: center; padding: 2%\">\n                          <p style=\"margin-top: 20%\">Determining the most probable position of a robot in a given environment using Bayes filter. The environment is a grid of size n X n. \n                                                    The goal is to estimate the most probable grid position of the bot after a sequence of motion commands read from a bag file. The project is implemented in ROS and python</p>\n                          <div class=\"text-center transparent-div tag-bar\">\n                              Tags: Autonomous Robotics, ROS, Python\n                          </div>\n                        </div>\n                  </a>                \n              </div>\n\n          </div>\n          \n      </div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.css":
/*!*****************************************!*\
  !*** ./src/app/work/work.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/work/work.component.html":
/*!******************************************!*\
  !*** ./src/app/work/work.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" style = \"height: 70%; position: fixed;  margin-top:0%; visibility: hidden; \nbackground: none; width: 90%; color: white; font-family: consolas; padding: 0.5%;\" id=\"workPane\">\n<button class=\"backButton projectCard\" onclick=\"hideWorkPane();\">Go Back</button>\n<div style = \"width: 70%; height: 20%; margin-left: 20%;border-bottom-style: solid; border-bottom-width: 0.5px; border-bottom-color: grey\">\n<h1 style=\"margin-left: 30%; width: 40%;\">Tech Mahindra Ltd</h1>\n<p style=\"margin-left: 10%; width: 80%\">Software Engineer | Aug 2016 - Aug 2018 | Pune, India</p>\n</div>\n<div style=\"height: 60%; width: 80%\">\n<p class=\"text-left\" style=\"margin-left: 40%; margin-top: 5%\">\n- Java front-end developer.<br>\n- Worked on Unix back-end server application.<br>\n- Implemented web browser automation and information processing automation projects.<br>\n- Contributed in web development projects based on J2EE and Struts frameworks.<br>\n- Built my own AI chatbot with IBM bluemix web services and REST api.<br>\n- Have a good experience of working on agile methodologies.<br>\n</p>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\portfolio\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map