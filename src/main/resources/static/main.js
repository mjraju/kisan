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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-transaction/add-transaction.component.css":
/*!***************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".successMsg{font-size: 14px;font-weight: 900;padding-left: 40px;padding-bottom: 10px;color: #4CAF50;}\r\n.errorMsg{font-size: 14px;font-weight: 900;padding-left: 40px;padding-bottom: 10px;color: #cd040b;}"

/***/ }),

/***/ "./src/app/add-transaction/add-transaction.component.html":
/*!****************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"content\">\n  <div class=\"container_24\">\n    <div class=\"wrapper\">\n      <div class=\"grid_24 content-bg\">\n        <div class=\"wrapper\">\n            <div class=\"page-header\">\n                <h3 class=\"cnt-head\">Product > Add Product</h3>      \n            </div>\n            <div class=\"successMsg\" *ngIf=\"successflag\">{{successMsg}}</div>\n            <div class=\"errorMsg\" *ngIf=\"errorFlag\">{{errorMsg}}</div>\n          <article class=\"grid_22 suffix_1 prefix_1 alpha omega\">\n            <div id=\"farmerDetails\">\n              <form class=\"mbr-form\" >\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"BarCode\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"barCodeLabel\">Bar Code</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"transactionData.transId\" name=\"BarCode\" data-form-field=\"BarCode\" required id=\"barCodeLabel\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"farmername\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"farmerIdLabel\">Farmer Id</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"transactionData.farmer_id\" name=\"farmername\" data-form-field=\"farmername\" required=\"\" id=\"farmerIdLabel\">\n                    </div>\n                  </div>\n                  \n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"SourceLocation\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"SourceLocation\">source Location</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"transactionData.source_location\" maxlength=\"30\" name=\"SourceLocation\" data-form-field=\"SourceLocation\" required=\"\"\n                        id=\"SourceLocation\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"cropstatus\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"cropstatus\">Status</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"transactionData.status\" maxlength=\"10\" name=\"cropstatus\" data-form-field=\"cropstatus\" required=\"\" id=\"cropstatus\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-3 multi-horizontal\" data-for=\"grade\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"cropgrade\">Grade</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"transactionData.grade\" maxlength=\"2\" name=\"cropgrade\" data-form-field=\"grade\" required=\"\" id=\"cropgrade\">\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"storageLocation\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"StorageLocation\">Storage Location</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"transactionData.storage_loc\" maxlength=\"30\" name=\"StorageLocation\" data-form-field=\"StorageLocation\" required=\"\"\n                        id=\"StorageLocation\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"storageDate\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"storageDate\">Storage Date</label>\n                      <input type=\"date\" class=\"form-control\" [(ngModel)]=\"transactionData.storage_date\" name=\"storageDate\" data-form-field=\"storageDate\" required=\"\" id=\"storageDate\">\n                    </div>\n                  </div>\n                 \n                  <div class=\"col-md-3 multi-horizontal\" data-for=\"price\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"price\">Price</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"transactionData.price\" step=\"0.1\" name=\"price\" data-form-field=\"price\" required=\"\" id=\"price\">\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"sellingLocation\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"sellingLocation\">Selling Location</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"transactionData.selling_loc\" maxlength=\"10\" name=\"sellingLocation\" data-form-field=\"sellingLocation\" required=\"\"\n                        id=\"sellingLocation\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"sellingDate\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"sellingDate\">Selling Date</label>\n                      <input type=\"date\" class=\"form-control\" [(ngModel)]=\"transactionData.selling_date\" maxlength=\"10\" name=\"sellingDate\" data-form-field=\"sellingDate\" required=\"\"\n                        id=\"sellingDate\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-2 multi-horizontal\" data-for=\"Units\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"UnitQty\">Quantity</label>\n                      <input type=\"number\" maxlength=\"2\" [(ngModel)]=\"transactionData.qantity\" min=\"0\" step=\"0.1\" class=\"form-control\" name=\"Units\" data-form-field=\"Quantity\" id=\"UnitQty\">\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"crop_category\">\n                    <div class=\"form-group\">\n                      <label for=\"crop_category\">Crop Type</label>\n                      <select class=\"form-control\" [(ngModel)]=\"crop_type\" (ngModelChange)=\"cropTypeSelected()\" id=\"crop_category\" name=\"crop_category\">\n                        <option value=\"\" disabled selected=\"selected\">Select Crop Type</option>\n                        <option *ngFor=\"let item of item_types\" [value]=\"item\">{{item}}</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"crop_name\">\n                    <div class=\"form-group\">\n                      <label for=\"crop_name\">Crop Name</label>\n                      <select class=\"form-control\" [(ngModel)]=\"transactionData.item_id\" (ngModelChange)=\"cropSelected()\" id=\"crop_name\" name=\"crop_name\">\n                        <option value=\"\" selected=\"selected\">Select a Crop</option>\n                        <option *ngFor=\"let crop of cropList\" [value]=\"crop.item_id\">{{crop.item_name}} - {{crop.item_localname}}</option>\n                      </select>\n                      <span *ngIf=\"cropError\">{{cropErrorMsg}}</span>\n                    </div>\n                  </div>\n                  \n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-4 multi-horizontal\" >\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"saveTransactionDetails()\">Save Details</button>\n                    </span>\n                  </div>\n                </div>\n              </form>\n\n            </div>\n\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/add-transaction/add-transaction.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.component.ts ***!
  \**************************************************************/
/*! exports provided: AddTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTransactionComponent", function() { return AddTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kisan-portal.service */ "./src/app/kisan-portal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTransactionComponent = /** @class */ (function () {
    function AddTransactionComponent(kisanPortalService) {
        this.kisanPortalService = kisanPortalService;
        this.errorMsg = 'Unable to Save the Transaction, Please Try again.';
        this.successMsg = 'Your Transaction is Saved Successfully.';
        this.errorFlag = false;
        this.successflag = false;
        this.crop_type = '';
        this.crop_id = '';
        this.item_types = [];
        this.cropList = [];
        this.transactionData = {
            transId: '',
            farmer_id: '',
            item_id: '',
            source_location: '',
            create_date: '',
            qantity: '',
            grade: '',
            status: '',
            storage_loc: '',
            storage_date: '',
            price: '',
            selling_loc: '',
            selling_date: ''
        };
        this.cropError = false;
        this.cropErrorMsg = '';
        this.crops = [];
    }
    AddTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kisanPortalService.getItemsList().subscribe(function (data) {
            data.forEach(function (element) {
                console.log('element.item_desc : ' + element.item_desc);
                _this.crops.push(element);
            });
            console.log(_this.crops);
            _this.item_types = Array.from(new Set(_this.crops.map(function (IteminArray) { return IteminArray.item_type; })));
            console.log("uniw  :  " + _this.item_types);
        });
    };
    AddTransactionComponent.prototype.cropTypeSelected = function () {
        var _this = this;
        console.log(this.crop_type);
        this.transactionData.item_id = '';
        this.cropList = [];
        if (this.crop_type != '' && this.crop_type) {
            this.cropError = false;
            console.log(this.crop_type);
            this.crops.forEach(function (element) {
                console.log('ele' + element.item_name);
                if (element.item_type === _this.crop_type) {
                    _this.cropList.push(element);
                }
            });
            console.log(this.cropList);
        }
    };
    AddTransactionComponent.prototype.cropSelected = function () {
        //debugger;
        if (this.crop_type == '' || !this.crop_type) {
            this.cropError = true;
            this.cropErrorMsg = 'Please Select Crop Type';
            console.log(this.crop_id);
            return false;
        }
        else {
            this.cropError = false;
        }
        console.log(this.transactionData.item_id);
    };
    AddTransactionComponent.prototype.saveTransactionDetails = function () {
        var _this = this;
        console.log(this.transactionData);
        this.kisanPortalService.saveTransactionDetails(this.transactionData).subscribe(function (data) {
            console.log(data);
            _this.crop_type = '';
            _this.transactionData = {
                transId: '',
                farmer_id: '',
                item_id: '',
                source_location: '',
                create_date: '',
                qantity: '',
                grade: '',
                status: '',
                storage_loc: '',
                storage_date: '',
                price: '',
                selling_loc: '',
                selling_date: ''
            };
            _this.successflag = true;
            _this.successMsg = "Your Transaction is Saved Successfully.";
        }, function (Error) {
            _this.errorFlag = true;
            _this.errorMsg = "Unable to Save the Transaction, Please Try again.";
        });
    };
    AddTransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addtransaction',
            template: __webpack_require__(/*! ./add-transaction.component.html */ "./src/app/add-transaction/add-transaction.component.html"),
            styles: [__webpack_require__(/*! ./add-transaction.component.css */ "./src/app/add-transaction/add-transaction.component.css")]
        }),
        __metadata("design:paramtypes", [_kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__["KisanPortalService"]])
    ], AddTransactionComponent);
    return AddTransactionComponent;
}());



/***/ }),

/***/ "./src/app/addfarmer/addfarmer.component.css":
/*!***************************************************!*\
  !*** ./src/app/addfarmer/addfarmer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".successMsg{font-size: 14px;font-weight: 900;padding-left: 40px;padding-bottom: 10px;color: #4CAF50;}\r\n.errorMsg{font-size: 14px;font-weight: 900;padding-left: 40px;padding-bottom: 10px;color: #cd040b;}"

/***/ }),

/***/ "./src/app/addfarmer/addfarmer.component.html":
/*!****************************************************!*\
  !*** ./src/app/addfarmer/addfarmer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"content\">\r\n    <div class=\"container_24\">\r\n        <div class=\"wrapper\">\r\n            <div class=\"grid_24 content-bg\">\r\n                <div class=\"wrapper\">\r\n                    <div class=\"page-header\">\r\n                        <h3 class=\"cnt-head\">Product > Add Farmer</h3>\r\n                    </div>\r\n                    <div class=\"successMsg\" *ngIf=\"successflag\">{{successMsg}}</div>\r\n                    <div class=\"errorMsg\" *ngIf=\"errorFlag\">{{errorMsg}}</div>\r\n                    <article class=\"grid_22 suffix_1 prefix_1 alpha omega\">\r\n                        <div id=\"farmerDetails\">\r\n                            <form class=\"mbr-form\">\r\n                                <div class=\"row row-sm-offset\">\r\n                                    <div class=\"col-md-5 multi-horizontal\" data-for=\"farmerId\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"form-control-label mbr-fonts-style display-7\" for=\"farmerIdLabel\">Farmer Id</label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.farmerId\" name=\"farmerIdLabel\" data-form-field=\"farmerId\"\r\n                                                required=\"\" id=\"farmerIdLabel\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5 multi-horizontal\" data-for=\"farmerName\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"form-control-label mbr-fonts-style display-7\" for=\"farmerNameLabel\">Farmer Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.farmerName\" name=\"farmerName\" data-form-field=\"farmerName\"\r\n                                                required id=\"farmerNameLabel\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row row-sm-offset\">\r\n                                    <div class=\"col-sm-3 multi-horizontal\" data-for=\"age\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"form-control-label mbr-fonts-style display-7\" for=\"ageLabel\">Age</label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.age\" name=\"ageLabel\" data-form-field=\"age\" required=\"\"\r\n                                                id=\"ageLabel\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3 multi-horizontal\" data-for=\"gender\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"form-control-label mbr-fonts-style display-7\" for=\"genderLabel\">Gender</label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.gender\" name=\"gender\" data-form-field=\"gender\" required\r\n                                                id=\"genderLabel\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 multi-horizontal\" data-for=\"location\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"form-control-label mbr-fonts-style display-7\" for=\"locationLabel\">Location</label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.location\" name=\"location\" data-form-field=\"location\" required\r\n                                                id=\"locationLabel\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row row-sm-offset\">\r\n                                    <div class=\"col-md-10 multi-horizontal\" data-for=\"otherDetails\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"form-control-label mbr-fonts-style display-7\" for=\"otherDetailsLabel\">Other Details</label>\r\n                                            <input type=\"textarea\" class=\"form-control\" [(ngModel)]=\"farmerDetails.otherDetails\" name=\"otherDetailsLabel\" data-form-field=\"otherDetails\"\r\n                                                required=\"\" id=\"otherDetailsLabel\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row row-sm-offset\">\r\n                                    <div class=\"col-md-4 multi-horizontal\">\r\n                                        <span class=\"input-group-btn\">\r\n                                            <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"saveFarmer()\">Save Farmer</button>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </article>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/addfarmer/addfarmer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/addfarmer/addfarmer.component.ts ***!
  \**************************************************/
/*! exports provided: AddfarmerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfarmerComponent", function() { return AddfarmerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kisan-portal.service */ "./src/app/kisan-portal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddfarmerComponent = /** @class */ (function () {
    function AddfarmerComponent(kisanPortalService) {
        this.kisanPortalService = kisanPortalService;
        this.errorMsg = 'Unable to Save the Farmer Details, Please Try again.';
        this.successMsg = 'Farmer is Saved Successfully.';
        this.errorFlag = false;
        this.successflag = false;
        this.farmerDetails = {
            farmerId: '',
            farmerName: '',
            location: '',
            age: '',
            gender: '',
            otherDetails: ''
        };
    }
    AddfarmerComponent.prototype.ngOnInit = function () {
    };
    AddfarmerComponent.prototype.saveFarmer = function () {
        var _this = this;
        console.log(this.farmerDetails);
        this.kisanPortalService.saveFarmer(this.farmerDetails).subscribe(function (data) {
            console.log(data);
            _this.farmerDetails = {
                farmerId: '',
                farmerName: '',
                location: '',
                age: '',
                gender: '',
                otherDetails: ''
            };
            _this.successflag = true;
            _this.successMsg = "Farmer is Saved Successfully.";
        }, function (Error) {
            _this.errorFlag = true;
            _this.errorMsg = "Unable to Save the Farmer Details, Please Try again.";
        });
    };
    AddfarmerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addfarmer',
            template: __webpack_require__(/*! ./addfarmer.component.html */ "./src/app/addfarmer/addfarmer.component.html"),
            styles: [__webpack_require__(/*! ./addfarmer.component.css */ "./src/app/addfarmer/addfarmer.component.css")]
        }),
        __metadata("design:paramtypes", [_kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__["KisanPortalService"]])
    ], AddfarmerComponent);
    return AddfarmerComponent;
}());



/***/ }),

/***/ "./src/app/adduser/adduser.component.css":
/*!***********************************************!*\
  !*** ./src/app/adduser/adduser.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".successMsg{font-size: 14px;font-weight: 900;padding-left: 40px;padding-bottom: 10px;color: #4CAF50;}\r\n.errorMsg{font-size: 14px;font-weight: 900;padding-left: 40px;padding-bottom: 10px;color: #cd040b;}"

/***/ }),

/***/ "./src/app/adduser/adduser.component.html":
/*!************************************************!*\
  !*** ./src/app/adduser/adduser.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"content\">\n  <div class=\"container_24\">\n    <div class=\"wrapper\">\n      <div class=\"grid_24 content-bg\">\n        <div class=\"wrapper\">\n          <div class=\"page-header\">\n            <h3 class=\"cnt-head\">User > Add User</h3>\n          </div>\n          <div class=\"successMsg\" *ngIf=\"successflag\">{{successMsg}}</div>\n          <div class=\"errorMsg\" *ngIf=\"errorFlag\">{{errorMsg}}</div>\n          <article class=\"grid_22 suffix_1 prefix_1 alpha omega\">\n            <div id=\"userDetails\">\n              <form class=\"mbr-form\">\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"userId\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"userId\">User Id</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userDetails.userId\" name=\"userId\" data-form-field=\"userId\" required=\"\"\n                        id=\"userId\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"userName\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"userName\">User Name</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userDetails.userName\" name=\"userName\" data-form-field=\"userName\" required=\"\"\n                        id=\"userName\">\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"password\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"password\">Password</label>\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"userDetails.password\" name=\"password\" data-form-field=\"password\"\n                        required id=\"password\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"confirmPassword\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"confirmPassword\">Confirm Password</label>\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"userDetails.confirmPassword\" name=\"confirmPassword\" data-form-field=\"confirmPassword\"\n                        required id=\"confirmPassword\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"userRole\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"userRole\">User Role</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userDetails.userRole\" name=\"userRole\" data-form-field=\"userRole\" required\n                        id=\"userRole\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4 multi-horizontal\" data-for=\"location\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label mbr-fonts-style display-7\" for=\"location\">Location</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userDetails.location\" name=\"location\" data-form-field=\"location\" required\n                        id=\"location\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-4 multi-horizontal\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"saveUser()\">Save User</button>\n                    </span>\n                  </div>\n                </div>\n\n              </form>\n            </div>\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/adduser/adduser.component.ts":
/*!**********************************************!*\
  !*** ./src/app/adduser/adduser.component.ts ***!
  \**********************************************/
/*! exports provided: AdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function() { return AdduserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kisan-portal.service */ "./src/app/kisan-portal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdduserComponent = /** @class */ (function () {
    function AdduserComponent(kisanPortalService) {
        this.kisanPortalService = kisanPortalService;
        this.errorMsg = 'Unable to Save the User Details, Please Try again.';
        this.successMsg = 'User is Saved Successfully.';
        this.errorFlag = false;
        this.successflag = false;
        this.userDetails = {
            userId: '',
            password: '',
            confirmPassword: '',
            userName: '',
            userRole: '',
            location: ''
        };
    }
    AdduserComponent.prototype.ngOnInit = function () {
    };
    AdduserComponent.prototype.saveUser = function () {
        var _this = this;
        console.log(this.userDetails);
        if (this.userDetails.password == this.userDetails.confirmPassword) {
            this.kisanPortalService.saveUser(this.userDetails).subscribe(function (data) {
                console.log(data);
                _this.userDetails = {
                    userId: '',
                    password: '',
                    confirmPassword: '',
                    userName: '',
                    userRole: '',
                    location: ''
                };
                _this.successflag = true;
                _this.successMsg = "User is Saved Successfully.";
            }, function (Error) {
                _this.errorFlag = true;
                _this.errorMsg = "Unable to Save the User Details, Please Try again.";
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = "Password not matched.";
        }
    };
    AdduserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adduser',
            template: __webpack_require__(/*! ./adduser.component.html */ "./src/app/adduser/adduser.component.html"),
            styles: [__webpack_require__(/*! ./adduser.component.css */ "./src/app/adduser/adduser.component.css")]
        }),
        __metadata("design:paramtypes", [_kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__["KisanPortalService"]])
    ], AdduserComponent);
    return AdduserComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-transaction/add-transaction.component */ "./src/app/add-transaction/add-transaction.component.ts");
/* harmony import */ var _kisan_dashboard_kisan_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kisan-dashboard/kisan-dashboard.component */ "./src/app/kisan-dashboard/kisan-dashboard.component.ts");
/* harmony import */ var _addfarmer_addfarmer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addfarmer/addfarmer.component */ "./src/app/addfarmer/addfarmer.component.ts");
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adduser/adduser.component */ "./src/app/adduser/adduser.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'kisanDashboard', component: _kisan_dashboard_kisan_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["KisanDashboardComponent"],
        children: [
            {
                path: 'addProduct',
                component: _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_2__["AddTransactionComponent"]
            },
            {
                path: 'addFarmer',
                component: _addfarmer_addfarmer_component__WEBPACK_IMPORTED_MODULE_4__["AddfarmerComponent"]
            },
            {
                path: 'addUser',
                component: _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_5__["AdduserComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n <div class=\"main-bg\">\n  <div id=\"loginPage\">\n    <app-kisan-login></app-kisan-login>\n  </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kisan-portal.service */ "./src/app/kisan-portal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(kisanPortalService) {
        this.kisanPortalService = kisanPortalService;
        this.title = 'app';
        this.loginsuccess = true;
    }
    AppComponent.prototype.setLoginsuccess = function (loginsuccess) {
        this.loginsuccess = loginsuccess;
    };
    AppComponent.prototype.getLoginsuccess = function () {
        return this.loginsuccess;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__["KisanPortalService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _kisan_login_kisan_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kisan-login/kisan-login.component */ "./src/app/kisan-login/kisan-login.component.ts");
/* harmony import */ var _kisan_dashboard_kisan_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kisan-dashboard/kisan-dashboard.component */ "./src/app/kisan-dashboard/kisan-dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-transaction/add-transaction.component */ "./src/app/add-transaction/add-transaction.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _render_cell_render_cell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./render-cell/render-cell.component */ "./src/app/render-cell/render-cell.component.ts");
/* harmony import */ var _addfarmer_addfarmer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addfarmer/addfarmer.component */ "./src/app/addfarmer/addfarmer.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adduser/adduser.component */ "./src/app/adduser/adduser.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _kisan_login_kisan_login_component__WEBPACK_IMPORTED_MODULE_5__["KisanLoginComponent"],
                _kisan_dashboard_kisan_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["KisanDashboardComponent"],
                _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_8__["AddTransactionComponent"],
                _render_cell_render_cell_component__WEBPACK_IMPORTED_MODULE_10__["RenderCellComponent"],
                _addfarmer_addfarmer_component__WEBPACK_IMPORTED_MODULE_11__["AddfarmerComponent"],
                _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_13__["AdduserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"].forRoot(), ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([_render_cell_render_cell_component__WEBPACK_IMPORTED_MODULE_10__["RenderCellComponent"]])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/kisan-dashboard/kisan-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/kisan-dashboard/kisan-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Dropdown Button */\r\n.dropbtn {\r\n    color: white;\r\n    padding: 14px;\r\n    font-size: 14px;\r\n    border: none;\r\n}\r\n/* The container <div> - needed to position the dropdown content */\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n/* Dropdown Content (Hidden by Default) */\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n/* Change color of dropdown links on hover */\r\n.dropdown-content a:hover {background-color: #ddd;}\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {display: block;}\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n/* .dropdown:hover .dropbtn {} */"

/***/ }),

/***/ "./src/app/kisan-dashboard/kisan-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/kisan-dashboard/kisan-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"inner\">\n    <h1 class=\"logo\"><a href=\"javascript:void(0)\" (click)=\"showDashboardHome()\">Kisan - Project</a></h1>\n    <nav>\n      <ul class=\"sf-menu sf-js-enabled\">\n        <li id=\"homeLi\" class=\"current\"><a href=\"javascript:void(0)\" (click)=\"showDashboardHome()\">home</a></li>\n        <li id=\"searchFarmerLi\" class=\"dropdown\"><a href=\"javascript:void(0)\" class=\"dropbtn\" >Farmer</a>\n          <ul class=\"dropdown-content\">\n            <li><a href=\"javascript:void(0)\" (click)=\"addFarmer(this)\">Add Farmer</a></li>\n            <li><a href=\"javascript:void(0)\">Edit Farmer</a></li>\n            <li> <a href=\"javascript:void(0)\">Delete Farmer</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown\"> <a href=\"javascript:void(0)\" class=\"dropbtn\" >Product</a>\n          <ul class=\"dropdown-content\">\n            <li><a href=\"javascript:void(0)\" (click)=\"addProduct(this)\">Add Product</a></li>\n            <li><a href=\"javascript:void(0)\">Edit Product</a></li>\n            <li> <a href=\"javascript:void(0)\">Delete Product</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown\"> <a href=\"javascript:void(0)\" class=\"dropbtn\" >User</a>\n          <ul class=\"dropdown-content\">\n            <li><a href=\"javascript:void(0)\" (click)=\"addUser(this)\">Add User</a></li>\n            <li><a href=\"javascript:void(0)\">Update User</a></li>\n            <li> <a href=\"javascript:void(0)\">Delete User</a></li>\n          </ul>\n        </li>\n        <li><a href=\"javascript:void(0)\">contacts</a></li>\n      </ul>\n    </nav>\n    <div class=\"clear\"></div>\n  </div>\n  <div id=\"slider-main\" *ngIf=\"dashboardHome\">\n  <div class=\"slider-container\">\n      <div class=\"mp-slider\" style=\"z-index: 1; overflow: hidden;\">\n        <ul class=\"items\">\n          <li style=\"display: none;\"><img src=\"assets/images/slide-1.jpg\" alt=\"\">\n            \n          </li>\n          <li style=\"display: none;\"><img src=\"assets/images/slide-2.jpg\" alt=\"\">\n            \n          </li>\n          <li style=\"display: none;\"><img src=\"assets/images/slide-3.jpg\" alt=\"\">\n            \n          </li>\n        </ul>\n      <div class=\"pic\" style=\"overflow: hidden; width: 950px; height: 511px; background: url(&quot;assets/images/slide-3.jpg&quot;) 0px 0px no-repeat;\">\n        <div class=\"mask\" style=\"position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; z-index: 1;\">\n          <div style=\"left: 0px; top: 0px; position: absolute; width: 950px; height: 511px; background-position: 0px 0px; background-image: url(&quot;assets/images/slide-1.jpg&quot;); opacity: 0.241;\">\n          </div>\n        </div>\n      </div>\n      <div class=\"banner mp-ban-3\" style=\"z-index: 999; display: block; opacity: 0.567009;\">\n        <span class=\"row-1\">growing clean</span>\n        <span class=\"row-2\">and full of health</span>\n        <span class=\"row-3\">products</span>\n      </div>\n    </div>\n    </div>\n    <a href=\"javascript:void(0)\" class=\"mp-prev\"></a>\n    <a href=\"javascript:void(0)\" class=\"mp-next\"></a>\n  </div>\n</header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/kisan-dashboard/kisan-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/kisan-dashboard/kisan-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: KisanDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KisanDashboardComponent", function() { return KisanDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KisanDashboardComponent = /** @class */ (function () {
    function KisanDashboardComponent(router, location) {
        this.router = router;
        this.location = location;
        this.barCode = "";
        this.farmerName = "";
        this.paths = [];
        this.dashboardHome = false;
        this.showFarmerListFlag = false;
    }
    KisanDashboardComponent.prototype.ngOnInit = function () {
        if (this.location.path() != '') {
            this.paths = this.location.path().split('/');
            console.log(this.paths[this.paths.length] - 1);
            //debugger;
            if (this.paths[this.paths.length - 1] == 'kisanDashboard') {
                this.dashboardHome = true;
            }
            if (this.paths[this.paths.length - 1] == 'searchFarmer') {
                this.dashboardHome = false;
                jquery__WEBPACK_IMPORTED_MODULE_2__('.current').removeClass('current');
                jquery__WEBPACK_IMPORTED_MODULE_2__('#searchFarmerLi').addClass('current');
            }
        }
    };
    KisanDashboardComponent.prototype.showDashboardHome = function () {
        this.dashboardHome = true;
        jquery__WEBPACK_IMPORTED_MODULE_2__('.current').removeClass('current');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#homeLi').addClass('current');
        this.router.navigateByUrl('kisanDashboard');
    };
    KisanDashboardComponent.prototype.addProduct = function (el) {
        this.dashboardHome = false;
        jquery__WEBPACK_IMPORTED_MODULE_2__('.current').removeClass('current');
        // $('#searchFarmerLi').addClass('current');
        jquery__WEBPACK_IMPORTED_MODULE_2__(el).parents('.dropdown').addClass('current');
        this.router.navigateByUrl('kisanDashboard/addProduct');
    };
    KisanDashboardComponent.prototype.addFarmer = function (el) {
        this.dashboardHome = false;
        jquery__WEBPACK_IMPORTED_MODULE_2__('.current').removeClass('current');
        // $('#searchFarmerLi').addClass('current');
        jquery__WEBPACK_IMPORTED_MODULE_2__(el).parents('li .dropdown').addClass('current');
        this.router.navigateByUrl('kisanDashboard/addFarmer');
    };
    KisanDashboardComponent.prototype.showFarmerList = function () {
        if (this.showFarmerListFlag == true) {
            this.showFarmerListFlag = false;
        }
        else
            this.showFarmerListFlag = true;
    };
    KisanDashboardComponent.prototype.hideFarmerList = function () {
        this.showFarmerListFlag = false;
    };
    KisanDashboardComponent.prototype.addUser = function (el) {
        this.dashboardHome = false;
        jquery__WEBPACK_IMPORTED_MODULE_2__('.current').removeClass('current');
        // $('#searchFarmerLi').addClass('current');
        jquery__WEBPACK_IMPORTED_MODULE_2__(el).parents('li .dropdown').addClass('current');
        this.router.navigateByUrl('kisanDashboard/addUser');
    };
    KisanDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kisan-dashboard',
            template: __webpack_require__(/*! ./kisan-dashboard.component.html */ "./src/app/kisan-dashboard/kisan-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./kisan-dashboard.component.css */ "./src/app/kisan-dashboard/kisan-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], KisanDashboardComponent);
    return KisanDashboardComponent;
}());



/***/ }),

/***/ "./src/app/kisan-login/kisan-login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/kisan-login/kisan-login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n\tcolor:#007bff;\r\n\ttext-decoration: underline;\r\n\tcursor:pointer;\r\n}"

/***/ }),

/***/ "./src/app/kisan-login/kisan-login.component.html":
/*!********************************************************!*\
  !*** ./src/app/kisan-login/kisan-login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-page\" *ngIf=\"!loginsuccess\">\n    <div class=\"form\">\n      <div class=\"register-form\" *ngIf=\"loginformType=='register'\">\n        <input type=\"text\" [(ngModel)]=\"username\" placeholder=\"user name\" name=\"user name\"/>\n        <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\" name=\"password\"/>\n        <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"email address\" name=\"email address\"/>\n        <button (click)=\"login()\">create</button>\n        <p class=\"message\">Already registered? <a href=\"javascript:void(0)\" (click)=\"showLoginForm()\">Sign In</a></p>\n      </div>\n      <form class=\"login-form\" *ngIf=\"loginformType=='login'\">\n        <input type=\"text\" [(ngModel)]=\"username\" placeholder=\"user name\" name=\"user name\"/>\n        <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\" name=\"password\"/>\n        <button (click)=\"login()\">login</button>\n        <p class=\"message\">Not registered? <a href=\"javascript:void(0)\" (click)=\"showRegistrationForm()\">Create an account</a></p>\n      </form>\n    </div>\n  </div>\n  <router-outlet *ngIf=\"loginsuccess\"></router-outlet>"

/***/ }),

/***/ "./src/app/kisan-login/kisan-login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/kisan-login/kisan-login.component.ts ***!
  \******************************************************/
/*! exports provided: KisanLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KisanLoginComponent", function() { return KisanLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kisan-portal.service */ "./src/app/kisan-portal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KisanLoginComponent = /** @class */ (function () {
    function KisanLoginComponent(kisanPortalService, router, location) {
        this.kisanPortalService = kisanPortalService;
        this.router = router;
        this.location = location;
        this.loginformType = 'login';
        this.username = '';
        this.password = '';
        this.loginsuccess = false;
    }
    KisanLoginComponent.prototype.ngOnInit = function () {
    };
    KisanLoginComponent.prototype.login = function () {
        //debugger;
        this.loginsuccess = true;
        if (this.location.path() == '') {
            this.router.navigate(['kisanDashboard']);
        }
        else
            this.router.navigate([this.location.path()]);
    };
    KisanLoginComponent.prototype.getLoginformType = function () {
        return this.loginformType;
    };
    KisanLoginComponent.prototype.showLoginForm = function () {
        this.loginformType = "login";
    };
    KisanLoginComponent.prototype.showRegistrationForm = function () {
        this.loginformType = "register";
    };
    KisanLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kisan-login',
            template: __webpack_require__(/*! ./kisan-login.component.html */ "./src/app/kisan-login/kisan-login.component.html"),
            styles: [__webpack_require__(/*! ./kisan-login.component.css */ "./src/app/kisan-login/kisan-login.component.css")]
        }),
        __metadata("design:paramtypes", [_kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__["KisanPortalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], KisanLoginComponent);
    return KisanLoginComponent;
}());



/***/ }),

/***/ "./src/app/kisan-portal.service.ts":
/*!*****************************************!*\
  !*** ./src/app/kisan-portal.service.ts ***!
  \*****************************************/
/*! exports provided: KisanPortalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KisanPortalService", function() { return KisanPortalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KisanPortalService = /** @class */ (function () {
    function KisanPortalService(http) {
        this.http = http;
        this.loginsuccess = true;
        this.getItemsListUrl = 'http://localhost:8080/getItemsList';
        this.saveTransactionUrl = 'http://localhost:8080/SaveTransaction';
        this.saveFarmerUrl = 'http://localhost:8080/SaveFarmer';
        this.saveUserUrl = 'http://localhost:8080/Saveuser';
    }
    KisanPortalService.prototype.setLoginsuccess = function (loginsuccess) {
        this.loginsuccess = loginsuccess;
    };
    KisanPortalService.prototype.getLoginsuccess = function () {
        return this.loginsuccess;
    };
    KisanPortalService.prototype.getItemsList = function () {
        return this.http.get(this.getItemsListUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.json(); }));
    };
    KisanPortalService.prototype.saveTransactionDetails = function (transData) {
        return this.http.post(this.saveTransactionUrl, transData);
    };
    KisanPortalService.prototype.saveFarmer = function (farmerData) {
        return this.http.post(this.saveFarmerUrl, farmerData);
    };
    KisanPortalService.prototype.saveUser = function (userData) {
        return this.http.post(this.saveUserUrl, userData);
    };
    KisanPortalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], KisanPortalService);
    return KisanPortalService;
}());



/***/ }),

/***/ "./src/app/render-cell/render-cell.component.css":
/*!*******************************************************!*\
  !*** ./src/app/render-cell/render-cell.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/render-cell/render-cell.component.html":
/*!********************************************************!*\
  !*** ./src/app/render-cell/render-cell.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span style=\"color: red\">{{ params.value }}</span>"

/***/ }),

/***/ "./src/app/render-cell/render-cell.component.ts":
/*!******************************************************!*\
  !*** ./src/app/render-cell/render-cell.component.ts ***!
  \******************************************************/
/*! exports provided: RenderCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderCellComponent", function() { return RenderCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RenderCellComponent = /** @class */ (function () {
    function RenderCellComponent() {
    }
    RenderCellComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    RenderCellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-render-cell',
            template: __webpack_require__(/*! ./render-cell.component.html */ "./src/app/render-cell/render-cell.component.html"),
            styles: [__webpack_require__(/*! ./render-cell.component.css */ "./src/app/render-cell/render-cell.component.css")]
        })
    ], RenderCellComponent);
    return RenderCellComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\somi2\kisan-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map