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

module.exports = "<section id=\"content\">\n  <div class=\"container_24\">\n    <div class=\"wrapper\">\n      <div class=\"grid_24 content-bg\">\n        <div class=\"wrapper\">\n            <div class=\"page-header\">\n                <h3 class=\"cnt-head\">Product > Add Product</h3>      \n            </div>\n            <div class=\"successMsg\" *ngIf=\"successflag\">{{successMsg}}</div>\n            <div class=\"errorMsg\" *ngIf=\"errorFlag\">{{errorMsg}}</div>\n          <article class=\"grid_22 suffix_1 prefix_1 alpha omega\">\n            <div id=\"farmerDetails\">\n              <form class=\"mbr-form\" >\n                <div class=\"row row-sm-offset\">\n                    <div class=\"col-md-6 multi-horizontal\" data-for=\"barCode\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-4 col-form-label form-control-label\">Bar Code</label>\n                            <div class=\"col-lg-7\">\n                                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"transactionData.transId\" (ngModelChange)=\"fetchTransactionData()\"\n                                    name=\"BarCode\" data-form-field=\"BarCode\" required id=\"barCodeLabel\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 multi-horizontal\" data-for=\"farmerId\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-lg-4 col-form-label form-control-label\">Farmer Id</label>\n                            <div class=\"col-lg-7\">\n                                <input type=\"number\" class=\"form-control\" [disabled]=\"userRole == 'admin' && editButton == true?true:false\"\n                                [(ngModel)]=\"transactionData.farmer_id\" name=\"farmername\" data-form-field=\"farmername\" required=\"\" id=\"farmerIdLabel\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"SourceLocation\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Source Location</label>\n                        <div class=\"col-lg-7\">\n                      <input type=\"text\" class=\"form-control\"  [disabled]=\"userRole == 'admin' && editButton == true?true:false\"\n                      [(ngModel)]=\"transactionData.source_location\" maxlength=\"30\" name=\"SourceLocation\" data-form-field=\"SourceLocation\" required=\"\"\n                        id=\"SourceLocation\">\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"cropstatus\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Status</label>\n                      <div class=\"col-lg-7\">\n                      <input type=\"text\" class=\"form-control\"  [disabled]=\"userRole == 'admin' && editButton == true?true:false\"\n                      [(ngModel)]=\"transactionData.status\" maxlength=\"10\" name=\"cropstatus\" data-form-field=\"cropstatus\" required=\"\" id=\"cropstatus\">\n                    </div>\n                    </div>\n                  </div>\n                  \n\n                </div>\n                <div class=\"row row-sm-offset\">\n                    <div class=\"col-md-6 multi-horizontal\" data-for=\"grade\">\n                      <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Grade</label>\n                        <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\"  [disabled]=\"userRole == 'admin' && editButton == true?true:false\"\n                        [(ngModel)]=\"transactionData.grade\" maxlength=\"2\" name=\"cropgrade\" data-form-field=\"grade\" required=\"\" id=\"cropgrade\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6 multi-horizontal\" data-for=\"price\">\n                      <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Price</label>\n                        <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\"  [disabled]=\"userRole == 'admin' && editButton == true?true:false\"\n                        [(ngModel)]=\"transactionData.price\" step=\"0.1\" name=\"price\" data-form-field=\"price\" required=\"\" id=\"price\">\n                        </div>\n                      </div>\n                    </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"storageLocation\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Storage Location</label>\n                      <div class=\"col-lg-7\">\n                      <input type=\"text\" class=\"form-control\"  [disabled]=\"userRole == 'admin' && editButton == true?true:false\"\n                      [(ngModel)]=\"transactionData.storage_loc\" maxlength=\"30\" name=\"StorageLocation\" data-form-field=\"StorageLocation\" id=\"StorageLocation\">\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"storageDate\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Storage Date</label>\n                      <div class=\"col-lg-7\">\n                      <input type=\"date\" class=\"form-control\"  [disabled]=\"userRole == 'admin' && editButton == true?true:false\"\n                      [(ngModel)]=\"transactionData.storage_date\" name=\"storageDate\" data-form-field=\"storageDate\" required=\"\" id=\"storageDate\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"sellingLocation\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Selling Location</label>\n                        <div class=\"col-lg-7\">\n                      <input type=\"text\" class=\"form-control\"  [disabled]=\"userRole == 'admin' && editButton == true?true:false\"\n                      [(ngModel)]=\"transactionData.selling_loc\" maxlength=\"10\" name=\"sellingLocation\" data-form-field=\"sellingLocation\" required=\"\"\n                        id=\"sellingLocation\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"sellingDate\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Selling Date</label>\n                        <div class=\"col-lg-7\">\n                      <input type=\"date\" class=\"form-control\"  [disabled]=\"userRole == 'admin' && editButton == true?true:false\"\n                      [(ngModel)]=\"transactionData.selling_date\" maxlength=\"10\" name=\"sellingDate\" data-form-field=\"sellingDate\" required=\"\"\n                        id=\"sellingDate\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"Units\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Quantity</label>\n                        <div class=\"col-lg-7\">\n                      <input type=\"number\" maxlength=\"2\"  [disabled]=\"userRole == 'admin' && editButton == true?true:false\"\n                      [(ngModel)]=\"transactionData.qantity\" min=\"0\" step=\"0.1\" class=\"form-control\" name=\"Units\" data-form-field=\"Quantity\" id=\"UnitQty\">\n                    </div>\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"crop_category\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Crop Type</label>\n                        <div class=\"col-lg-7\">\n                      <select class=\"form-control\"  [disabled]=\"userRole == 'admin' && editButton == true?true:false\"\n                      [(ngModel)]=\"crop_type\" (ngModelChange)=\"cropTypeSelected()\" id=\"crop_category\" name=\"crop_category\">\n                        <option value=\"\" disabled selected=\"selected\">Select Crop Type</option>\n                        <option *ngFor=\"let item of item_types\" [value]=\"item\">{{item}}</option>\n                      </select>\n                    </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"crop_name\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Crop Name</label>\n                        <div class=\"col-lg-7\">\n                      <select class=\"form-control\"  [disabled]=\"userRole == 'admin' && editButton == true?true:false\"\n                      [(ngModel)]=\"transactionData.item_id\" (ngModelChange)=\"cropSelected()\" id=\"crop_name\" name=\"crop_name\">\n                        <option value=\"\" selected=\"selected\">Select a Crop</option>\n                        <option *ngFor=\"let crop of cropList\" [value]=\"crop.item_id\">{{crop.item_name}} - {{crop.item_localname}}</option>\n                      </select>\n                      <span *ngIf=\"cropError\">{{cropErrorMsg}}</span>\n                    </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-2 multi-horizontal\" >\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" *ngIf=\"updateTransButton == false\" class=\"btn btn-primary btn-form display-5\" (click)=\"saveTransactionDetails()\">Save Product</button>\n                      <button type=\"submit\" *ngIf=\"updateTransButton == true\" class=\"btn btn-primary btn-form display-5\" (click)=\"saveTransactionDetails()\">Update Product</button>\n                    </span>\n                  </div>\n                  <div class=\"col-md-2 multi-horizontal\" *ngIf=\"userRole == 'admin' && editButton == true\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"editTransaction()\">Edit Product</button>\n                    </span>\n                  </div>\n                  <div class=\"col-md-2 multi-horizontal\" *ngIf=\"userRole == 'admin'\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"deleteTransaction()\">Delete Product</button>\n                    </span>\n                  </div>\n                </div>\n              </form>\n\n            </div>\n\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

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
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddTransactionComponent = /** @class */ (function () {
    function AddTransactionComponent(kisanPortalService, sessionStorage) {
        this.kisanPortalService = kisanPortalService;
        this.sessionStorage = sessionStorage;
        this.errorMsg = 'Unable to Save the Transaction, Please Try again.';
        this.successMsg = 'Your Transaction is Saved Successfully.';
        this.errorFlag = false;
        this.successflag = false;
        this.userRole = '';
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
        this.editButton = false;
        this.updateTransButton = false;
        this.cropError = false;
        this.cropErrorMsg = '';
        this.crops = [];
    }
    AddTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.userRole = JSON.parse(sessionStorage.getItem("userRole").toString());
        //if (this.userRole != 'admin') {
        this.kisanPortalService.getItemsList().subscribe(function (data) {
            data.forEach(function (element) {
                console.log('element.item_desc : ' + element.item_desc);
                _this.crops.push(element);
            });
            console.log(_this.crops);
            _this.item_types = Array.from(new Set(_this.crops.map(function (IteminArray) { return IteminArray.item_type; })));
            console.log("uniq  :  " + _this.item_types);
        });
        //}
    };
    AddTransactionComponent.prototype.fetchTransactionData = function () {
        var _this = this;
        debugger;
        if (this.userRole == 'admin') {
            this.kisanPortalService.getTransaction(this.transactionData.transId).subscribe(function (data) {
                _this.transactionData = data;
                _this.editButton = true;
                console.log(_this.transactionData);
            });
        }
        else {
            return;
        }
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
            _this.errorFlag = false;
            _this.successflag = false;
            _this.clearTransactionDetails();
            console.log(data);
            _this.crop_type = '';
            _this.successflag = true;
            _this.successMsg = "Your Transaction is Saved Successfully.";
        }, function (Error) {
            _this.errorFlag = true;
            _this.errorMsg = "Unable to Save the Transaction, Please Try again.";
        });
    };
    AddTransactionComponent.prototype.editTransaction = function () {
        this.editButton = false;
        this.updateTransButton = true;
    };
    AddTransactionComponent.prototype.deleteTransaction = function () {
        var _this = this;
        console.log("Transaction to be deleted " + this.transactionData.transId);
        this.kisanPortalService.deleteTransaction(this.transactionData.transId).subscribe(function (data) {
            _this.errorFlag = false;
            _this.successflag = false;
            _this.clearTransactionDetails();
            console.log(data);
            _this.crop_type = '';
            _this.successflag = true;
            _this.successMsg = "Your Transaction Deleted Successfully.";
        }, function (Error) {
            _this.errorFlag = true;
            _this.errorMsg = "Unable to Delete the Transaction, Please Try again.";
        });
    };
    AddTransactionComponent.prototype.clearTransactionDetails = function () {
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
    };
    AddTransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addtransaction',
            template: __webpack_require__(/*! ./add-transaction.component.html */ "./src/app/add-transaction/add-transaction.component.html"),
            styles: [__webpack_require__(/*! ./add-transaction.component.css */ "./src/app/add-transaction/add-transaction.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__["KisanPortalService"], angular_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["WebStorageService"]])
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

module.exports = "<section id=\"content\">\r\n    <div class=\"container_24\">\r\n        <div class=\"wrapper\">\r\n            <div class=\"grid_24 content-bg\">\r\n                <div class=\"wrapper\">\r\n                    <div class=\"page-header\">\r\n                        <h3 class=\"cnt-head\">Product > Add Farmer</h3>\r\n                    </div>\r\n                    <div class=\"successMsg\" *ngIf=\"successflag\">{{successMsg}}</div>\r\n                    <div class=\"errorMsg\" *ngIf=\"errorFlag\">{{errorMsg}}</div>\r\n                    <article class=\"grid_22 suffix_1 prefix_1 alpha omega\">\r\n                        <div id=\"farmerDetails\">\r\n                            <form class=\"mbr-form\">\r\n                                <div class=\"row row-sm-offset\">\r\n                                    <div class=\"col-md-6 multi-horizontal\" data-for=\"farmerId\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">Farmer Id</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"farmerDetails.farmerId\"\r\n                                                    name=\"farmerIdLabel\" data-form-field=\"farmerId\" required=\"\" id=\"farmerIdLabel\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 multi-horizontal\" data-for=\"farmerName\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">Farmer Name</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.farmerName\"\r\n                                                    name=\"farmerName\" data-form-field=\"farmerName\" required id=\"farmerNameLabel\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row row-sm-offset\">\r\n                                    <div class=\"col-md-6 multi-horizontal\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">Village</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.village\"\r\n                                                    name=\"villageLabel\" required=\"\" id=\"farmerIdLabel\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 multi-horizontal\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">Mandal</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.mandal\"\r\n                                                    name=\"mandal\" required id=\"mandalLabel\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row row-sm-offset\">\r\n                                    <div class=\"col-md-6 multi-horizontal\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">Age</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"farmerDetails.age\"\r\n                                                    name=\"age\" required=\"\" id=\"ageLabel\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 multi-horizontal\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">Gender</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <div style=\"float: left\">\r\n                                                    <input type=\"radio\" value=\"M\" name=\"gender\" [(ngModel)]=\"farmerDetails.gender\">\r\n                                                    Male\r\n                                                </div>\r\n                                                <div style=\"padding-left: 75px;\">\r\n                                                    <input type=\"radio\" value=\"F\" name=\"gender\" [(ngModel)]=\"farmerDetails.gender\">\r\n                                                    Female\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row row-sm-offset\">\r\n                                    <div class=\"col-md-6 multi-horizontal\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">Survey Number</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.surveyNum\"\r\n                                                    name=\"surveyNum\" required=\"\" id=\"surveyNum\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 multi-horizontal\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">No Of Acres</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"farmerDetails.noOfAcres\"\r\n                                                    name=\"noOfAcres\" required=\"\" id=\"noOfAcres\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row row-sm-offset\">\r\n                                    <div class=\"col-md-6 multi-horizontal\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">Own Land ?</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <div style=\"float: left\">\r\n                                                    <input type=\"radio\" value=\"Y\" name=\"ownLand\" [(ngModel)]=\"farmerDetails.ownLand\">\r\n                                                    YES\r\n                                                </div>\r\n                                                <div style=\"padding-left: 75px;\">\r\n                                                    <input type=\"radio\" value=\"N\" name=\"ownLand\" [(ngModel)]=\"farmerDetails.ownLand\">\r\n                                                    NO\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 multi-horizontal\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">Aadhar</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"farmerDetails.aadharNum\"\r\n                                                    name=\"aadharNum\" required=\"\" id=\"aadharNum\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row row-sm-offset\">\r\n                                    <div class=\"col-md-6 multi-horizontal\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">PAN</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.pan\"\r\n                                                    name=\"pan\" required=\"\" id=\"pan\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 multi-horizontal\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">Account No</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.accountNum\"\r\n                                                    name=\"accountNum\" required=\"\" id=\"accountNum\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row row-sm-offset\">\r\n                                    <div class=\"col-md-6 multi-horizontal\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">Bank Name</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.bankName\"\r\n                                                    name=\"bankName\" required=\"\" id=\"bankName\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 multi-horizontal\">\r\n                                        <div class=\"form-group row\">\r\n                                            <label class=\"col-lg-4 col-form-label form-control-label\">IFSC CODE</label>\r\n                                            <div class=\"col-lg-7\">\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.ifscCode\"\r\n                                                    name=\"ifscCode\" required=\"\" id=\"ifscCode\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row row-sm-offset\">\r\n                                        <div class=\"col-md-12 multi-horizontal\">\r\n                                                <div class=\"form-group row\">\r\n                                                    <label class=\"col-lg-2 col-form-label form-control-label\">Cultivatable Prods</label>\r\n                                                    <div class=\"col-lg-9\">\r\n                                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"farmerDetails.cultivableProds\"\r\n                                                            name=\"cultivableProds\" required=\"\" id=\"cultivableProds\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                </div>\r\n                                <div class=\"row row-sm-offset\">\r\n                                    <div class=\"col-md-4 multi-horizontal\">\r\n                                        <span class=\"input-group-btn\">\r\n                                            <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"saveFarmer()\">Save\r\n                                                Farmer</button>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </article>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

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
            village: '',
            age: '',
            mandal: '',
            gender: '',
            surveyNum: '',
            noOfAcres: '',
            ownLand: '',
            aadharNum: '',
            pan: '',
            accountNum: '',
            bankName: '',
            ifscCode: '',
            cultivableProds: ''
        };
    }
    AddfarmerComponent.prototype.ngOnInit = function () {
    };
    AddfarmerComponent.prototype.saveFarmer = function () {
        var _this = this;
        debugger;
        console.log("Former Details  : " + this.farmerDetails);
        this.kisanPortalService.saveFarmer(this.farmerDetails).subscribe(function (data) {
            console.log(data);
            _this.errorFlag = false;
            _this.successflag = false;
            _this.successflag = true;
            _this.clearFarmerData();
            _this.successMsg = "Farmer is Saved Successfully.";
        }, function (Error) {
            _this.successflag = false;
            _this.errorFlag = true;
            _this.errorMsg = "Unable to Save the Farmer Details, Please Try again.";
        });
    };
    AddfarmerComponent.prototype.clearFarmerData = function () {
        this.farmerDetails = {
            farmerId: '',
            farmerName: '',
            village: '',
            age: '',
            mandal: '',
            gender: '',
            surveyNum: '',
            noOfAcres: '',
            ownLand: '',
            aadharNum: '',
            pan: '',
            accountNum: '',
            bankName: '',
            ifscCode: '',
            cultivableProds: ''
        };
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

module.exports = "<section id=\"content\">\n  <div class=\"container_24\">\n    <div class=\"wrapper\">\n      <div class=\"grid_24 content-bg\">\n        <div class=\"wrapper\">\n          <div class=\"page-header\">\n            <h3 class=\"cnt-head\">User > Add User</h3>\n          </div>\n          <div class=\"successMsg\" *ngIf=\"successflag\">{{successMsg}}</div>\n          <div class=\"errorMsg\" *ngIf=\"errorFlag\">{{errorMsg}}</div>\n          <article class=\"grid_22 suffix_1 prefix_1 alpha omega\">\n            <div id=\"userDetails\">\n              <form class=\"mbr-form\">\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"userId\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">User Id</label>\n                        <div class=\"col-lg-7\">\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userDetails.userId\" name=\"userId\" data-form-field=\"userId\" required=\"\"\n                        id=\"userId\">\n                        </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"userName\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">User Name</label>\n                        <div class=\"col-lg-7\">\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userDetails.userName\" name=\"userName\" data-form-field=\"userName\" required=\"\"\n                        id=\"userName\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"password\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Password</label>\n                        <div class=\"col-lg-7\">\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"userDetails.password\" name=\"password\" data-form-field=\"password\"\n                        required id=\"password\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"confirmPassword\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Confirm Password</label>\n                        <div class=\"col-lg-7\">\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"userDetails.confirmPassword\" name=\"confirmPassword\" data-form-field=\"confirmPassword\"\n                        required id=\"confirmPassword\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"userRole\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">User Role</label>\n                        <div class=\"col-lg-7\">\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userDetails.userRole\" name=\"userRole\" data-form-field=\"userRole\" required\n                        id=\"userRole\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"location\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-lg-4 col-form-label form-control-label\">Location</label>\n                        <div class=\"col-lg-7\">\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userDetails.location\" name=\"location\" data-form-field=\"location\" required\n                        id=\"location\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-4 multi-horizontal\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"saveUser()\">Save User</button>\n                    </span>\n                  </div>\n                </div>\n\n              </form>\n            </div>\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

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
                _this.errorFlag = false;
                _this.successflag = false;
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
                _this.successflag = false;
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

/***/ "./src/app/agent/agent.component.css":
/*!*******************************************!*\
  !*** ./src/app/agent/agent.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr{\r\n    border:1px solid white;\r\n    margin: 0px;\r\n}\r\n.sub-header{\r\n    padding-top: 15px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/agent/agent.component.html":
/*!********************************************!*\
  !*** ./src/app/agent/agent.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"content\">\n  <div class=\"container_24\">\n    <div class=\"wrapper\">\n      <div class=\"grid_24 content-bg\">\n        <div class=\"wrapper\">\n          <div class=\"page-header\">\n            <h3 class=\"cnt-head\">Product > Add Agent</h3>\n          </div>\n          <div class=\"successMsg\" *ngIf=\"successflag\">{{successMsg}}</div>\n          <div class=\"errorMsg\" *ngIf=\"errorFlag\">{{errorMsg}}</div>\n          <article class=\"grid_22 suffix_1 prefix_1 alpha omega\">\n            <div id=\"farmerDetails\">\n              <form class=\"mbr-form\">\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"agentName\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Agent Name</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.agentName\" name=\"agentName\"\n                          data-form-field=\"agentName\" required id=\"agentName\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"agentType\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Agent Type</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.agentType\" name=\"agentType\"\n                          data-form-field=\"agentType\" required=\"\" id=\"agentType\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"sub-header\">\n                  <h5>Address Details : </h5>\n                  <hr>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressLine1\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Address Line1</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.addressDetails.addressLine1\" name=\"addressLine1\"\n                          data-form-field=\"addressLine1\" required id=\"addressLine1\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressLine2\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Address Line2</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.addressDetails.addressLine2\"\n                          name=\"addressLine2\" data-form-field=\"addressLine2\" required=\"\" id=\"addressLine2\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressLine3\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">addressLine3</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.addressDetails.addressLine3\" name=\"addressLine3\"\n                          data-form-field=\"addressLine3\" required id=\"addressLine3\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"city\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">City</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.addressDetails.city\" name=\"city\"\n                          data-form-field=\"city\" required=\"\" id=\"city\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"state\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">State</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.addressDetails.state\" name=\"state\"\n                          data-form-field=\"state\" required id=\"state\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"pin\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Pin</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"agent.addressDetails.pin\" name=\"pin\"\n                          data-form-field=\"pin\" required=\"\" id=\"pin\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"email\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Email Id</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.addressDetails.email\" name=\"email\"\n                          data-form-field=\"email\" required id=\"email\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"mobileNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Mobile Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"agent.addressDetails.mobileNum\" name=\"mobileNum\"\n                          data-form-field=\"mobileNum\" required=\"\" id=\"mobileNum\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"altMobileNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Alternate Mobile Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"agent.addressDetails.altMobileNum\" name=\"altMobileNum\"\n                          data-form-field=\"altMobileNum\" required id=\"altMobileNum\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"residencePhNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Residence Phone Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"agent.addressDetails.residencePhNum\"\n                          name=\"residencePhNum\" data-form-field=\"residencePhNum\" required=\"\" id=\"residencePhNum\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"officePhNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Office Phone Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"agent.addressDetails.officePhNum\" name=\"officePhNum\"\n                          data-form-field=\"officePhNum\" required id=\"officePhNum\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressType\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Address Type</label>\n                      <div class=\"col-lg-7\">\n                        <div style=\"float: left\">\n                          <input type=\"radio\" value=\"B\" name=\"addressType\" [(ngModel)]=\"agent.addressDetails.addressType\">\n                          Billing\n                        </div>\n                        <div style=\"padding-left: 75px;\">\n                          <input type=\"radio\" value=\"D\" name=\"addressType\" [(ngModel)]=\"agent.addressDetails.addressType\">\n                          Delivery\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"sub-header\">\n                  <h5>Registration Details : </h5>\n                  <hr>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"pan\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">PAN</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.registrationInfo.pan\" name=\"pan\"\n                          data-form-field=\"pan\" required id=\"pan\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"tin\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">TIN</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.registrationInfo.tin\" name=\"tin\"\n                          data-form-field=\"tin\" required id=\"tin\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"gst\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">GST</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.registrationInfo.gst\" name=\"gst\"\n                          data-form-field=\"gst\" required id=\"gst\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"cst\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">CST</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.registrationInfo.cst\" name=\"cst\"\n                          data-form-field=\"cst\" required id=\"cst\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"licenceNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Licence Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"agent.registrationInfo.licenceNum\" name=\"licenceNum\"\n                          data-form-field=\"licenceNum\" required id=\"licenceNum\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"firstButton multi-horizontal\" >\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"saveAgent()\">Save Agent</button>\n                    </span>\n                  </div>\n                  <div class=\"firstButton multi-horizontal\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"editAgent()\">Edit Agent</button>\n                    </span>\n                  </div>\n                  <div class=\"firstButton multi-horizontal\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"deleteAgent()\">Delete Agent</button>\n                    </span>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/agent/agent.component.ts":
/*!******************************************!*\
  !*** ./src/app/agent/agent.component.ts ***!
  \******************************************/
/*! exports provided: AgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentComponent", function() { return AgentComponent; });
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


var AgentComponent = /** @class */ (function () {
    function AgentComponent(kisanPortalService) {
        this.kisanPortalService = kisanPortalService;
        this.errorMsg = 'Unable to Save Agent Details, Please Try again.';
        this.successMsg = 'Agent Details Saved Successfully.';
        this.errorFlag = false;
        this.successflag = false;
        this.agent = {
            agentName: "",
            agentType: "",
            description: "",
            addressDetails: {
                addressLine1: "",
                addressLine2: "",
                addressLine3: "",
                city: "",
                state: "",
                pin: 0,
                email: "",
                mobileNum: 0,
                altMobileNum: 0,
                residencePhNum: 0,
                officePhNum: 0,
                addressType: ""
            },
            registrationInfo: {
                pan: "",
                tin: "",
                gst: "",
                cst: "",
                licenceNum: ""
            }
        };
    }
    AgentComponent.prototype.ngOnInit = function () {
    };
    AgentComponent.prototype.saveAgent = function () {
        var _this = this;
        debugger;
        console.log("Agent Data : " + this.agent);
        this.kisanPortalService.saveAgent(this.agent).subscribe(function (data) {
            console.log(data);
            _this.errorFlag = false;
            _this.successflag = false;
            _this.successflag = true;
            _this.clearAgentData();
            _this.successMsg = "Agent Details are Saved Successfully.";
        }, function (Error) {
            _this.successflag = false;
            _this.errorFlag = true;
            _this.errorMsg = "Unable to Save Agent Details, Please Try again.";
        });
    };
    AgentComponent.prototype.clearAgentData = function () {
        this.agent = {
            agentName: "",
            agentType: "",
            description: "",
            addressDetails: {
                addressLine1: "",
                addressLine2: "",
                addressLine3: "",
                city: "",
                state: "",
                pin: 0,
                email: "",
                mobileNum: 0,
                altMobileNum: 0,
                residencePhNum: 0,
                officePhNum: 0,
                addressType: ""
            },
            registrationInfo: {
                pan: "",
                tin: "",
                gst: "",
                cst: "",
                licenceNum: ""
            }
        };
    };
    AgentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agent',
            template: __webpack_require__(/*! ./agent.component.html */ "./src/app/agent/agent.component.html"),
            styles: [__webpack_require__(/*! ./agent.component.css */ "./src/app/agent/agent.component.css")]
        }),
        __metadata("design:paramtypes", [_kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__["KisanPortalService"]])
    ], AgentComponent);
    return AgentComponent;
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
/* harmony import */ var _dashboardhome_dashboardhome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboardhome/dashboardhome.component */ "./src/app/dashboardhome/dashboardhome.component.ts");
/* harmony import */ var _agent_agent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agent/agent.component */ "./src/app/agent/agent.component.ts");
/* harmony import */ var _item_master_item_master_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-master/item-master.component */ "./src/app/item-master/item-master.component.ts");
/* harmony import */ var _store_location_store_location_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store-location/store-location.component */ "./src/app/store-location/store-location.component.ts");
/* harmony import */ var _kisan_supplier_kisan_supplier_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kisan-supplier/kisan-supplier.component */ "./src/app/kisan-supplier/kisan-supplier.component.ts");
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
                path: '',
                component: _dashboardhome_dashboardhome_component__WEBPACK_IMPORTED_MODULE_6__["DashboardhomeComponent"]
            },
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
            },
            {
                path: 'addAgent',
                component: _agent_agent_component__WEBPACK_IMPORTED_MODULE_7__["AgentComponent"]
            },
            {
                path: 'addItem',
                component: _item_master_item_master_component__WEBPACK_IMPORTED_MODULE_8__["ItemMasterComponent"]
            },
            {
                path: 'addLocation',
                component: _store_location_store_location_component__WEBPACK_IMPORTED_MODULE_9__["StoreLocationComponent"]
            },
            {
                path: 'addSupplier',
                component: _kisan_supplier_kisan_supplier_component__WEBPACK_IMPORTED_MODULE_10__["KisanSupplierComponent"]
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

module.exports = ".firstButton{\r\n    margin-right: 20px;\r\n}"

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
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _dashboardhome_dashboardhome_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboardhome/dashboardhome.component */ "./src/app/dashboardhome/dashboardhome.component.ts");
/* harmony import */ var _agent_agent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./agent/agent.component */ "./src/app/agent/agent.component.ts");
/* harmony import */ var _item_master_item_master_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./item-master/item-master.component */ "./src/app/item-master/item-master.component.ts");
/* harmony import */ var _store_location_store_location_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store-location/store-location.component */ "./src/app/store-location/store-location.component.ts");
/* harmony import */ var _kisan_supplier_kisan_supplier_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./kisan-supplier/kisan-supplier.component */ "./src/app/kisan-supplier/kisan-supplier.component.ts");
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
                _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_13__["AdduserComponent"],
                _dashboardhome_dashboardhome_component__WEBPACK_IMPORTED_MODULE_15__["DashboardhomeComponent"],
                _agent_agent_component__WEBPACK_IMPORTED_MODULE_16__["AgentComponent"],
                _item_master_item_master_component__WEBPACK_IMPORTED_MODULE_17__["ItemMasterComponent"],
                _store_location_store_location_component__WEBPACK_IMPORTED_MODULE_18__["StoreLocationComponent"],
                _kisan_supplier_kisan_supplier_component__WEBPACK_IMPORTED_MODULE_19__["KisanSupplierComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"].forRoot(), ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([_render_cell_render_cell_component__WEBPACK_IMPORTED_MODULE_10__["RenderCellComponent"]]),
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_14__["StorageServiceModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboardhome/dashboardhome.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboardhome/dashboardhome.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboardhome/dashboardhome.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboardhome/dashboardhome.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"content\">\n  <div class=\"container_24\">\n      <div class=\"wrapper\">\n          <div class=\"grid_24 content-bg\">\n              <div class=\"wrapper\">\n                  <img src=\"assets/images/slide-1.jpg\" alt=\"\">\n                <!-- <div id=\"slider-main\" *ngIf=\"dashboardHome\">\n  <div class=\"slider-container\">\n      <div class=\"mp-slider\" style=\"z-index: 1; overflow: hidden;\">\n        <ul class=\"items\">\n          <li style=\"display: none;\"><img src=\"assets/images/slide-1.jpg\" alt=\"\">\n            \n          </li>\n          <li style=\"display: none;\"><img src=\"assets/images/slide-2.jpg\" alt=\"\">\n            \n          </li>\n          <li style=\"display: none;\"><img src=\"assets/images/slide-3.jpg\" alt=\"\">\n            \n          </li>\n        </ul>\n      <div class=\"pic\" style=\"overflow: hidden; width: 950px; height: 511px; background: url(&quot;assets/images/slide-3.jpg&quot;) 0px 0px no-repeat;\">\n        <div class=\"mask\" style=\"position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; z-index: 1;\">\n          <div style=\"left: 0px; top: 0px; position: absolute; width: 950px; height: 511px; background-position: 0px 0px; background-image: url(&quot;assets/images/slide-1.jpg&quot;); opacity: 0.241;\">\n          </div>\n        </div>\n      </div>\n      <div class=\"banner mp-ban-3\" style=\"z-index: 999; display: block; opacity: 0.567009;\">\n        <span class=\"row-1\">growing clean</span>\n        <span class=\"row-2\">and full of health</span>\n        <span class=\"row-3\">products</span>\n      </div>\n    </div>\n    </div>\n    <a href=\"javascript:void(0)\" class=\"mp-prev\"></a>\n    <a href=\"javascript:void(0)\" class=\"mp-next\"></a>\n  </div> --> \n              </div>\n          </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/dashboardhome/dashboardhome.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboardhome/dashboardhome.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardhomeComponent", function() { return DashboardhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardhomeComponent = /** @class */ (function () {
    function DashboardhomeComponent() {
    }
    DashboardhomeComponent.prototype.ngOnInit = function () {
    };
    DashboardhomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboardhome',
            template: __webpack_require__(/*! ./dashboardhome.component.html */ "./src/app/dashboardhome/dashboardhome.component.html"),
            styles: [__webpack_require__(/*! ./dashboardhome.component.css */ "./src/app/dashboardhome/dashboardhome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardhomeComponent);
    return DashboardhomeComponent;
}());



/***/ }),

/***/ "./src/app/item-master/item-master.component.css":
/*!*******************************************************!*\
  !*** ./src/app/item-master/item-master.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/item-master/item-master.component.html":
/*!********************************************************!*\
  !*** ./src/app/item-master/item-master.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"content\">\n  <div class=\"container_24\">\n    <div class=\"wrapper\">\n      <div class=\"grid_24 content-bg\">\n        <div class=\"wrapper\">\n          <div class=\"page-header\">\n            <h3 class=\"cnt-head\">Product > Add Agent</h3>\n          </div>\n          <div class=\"successMsg\" *ngIf=\"successflag\">{{successMsg}}</div>\n          <div class=\"errorMsg\" *ngIf=\"errorFlag\">{{errorMsg}}</div>\n          <article class=\"grid_22 suffix_1 prefix_1 alpha omega\">\n            <div id=\"itemDetails\">\n              <form class=\"mbr-form\">\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"item_name\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Item Name</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"items.item_name\" name=\"item_name\"\n                          data-form-field=\"item_name\" required id=\"item_name\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"item_type\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Item Type</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"items.item_type\" name=\"item_type\"\n                          data-form-field=\"item_type\" required=\"\" id=\"item_type\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"item_desc\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Item Description</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"items.item_desc\" name=\"item_desc\"\n                          data-form-field=\"item_desc\" required id=\"item_desc\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"item_localname\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Item Type</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"items.item_localname\" name=\"item_localname\"\n                          data-form-field=\"item_localname\" required=\"\" id=\"item_localname\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"rate\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Rate</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"items.rate\" name=\"rate\"\n                          data-form-field=\"rate\" required id=\"rate\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"unit\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Unit</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"items.unit\" name=\"unit\"\n                          data-form-field=\"unit\" required=\"\" id=\"unit\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"mrp\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">M.R.P.</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"items.mrp\" name=\"mrp\"\n                          data-form-field=\"mrp\" required id=\"mrp\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"discount_rate\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Discount Rate</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"items.discount_rate\" name=\"discount_rate\"\n                          data-form-field=\"discount_rate\" required=\"\" id=\"discount_rate\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"effective_from\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Effective From</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"items.effective_from\" name=\"effective_from\"\n                          data-form-field=\"effective_from\" required id=\"effective_from\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"brand\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Brand</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"items.brand\" name=\"brand\"\n                          data-form-field=\"brand\" required=\"\" id=\"brand\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"firstButton multi-horizontal\" >\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"saveItem()\">Save Item</button>\n                    </span>\n                  </div>\n                  <div class=\"firstButton multi-horizontal\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"editItem()\">Edit Item</button>\n                    </span>\n                  </div>\n                  <div class=\"firstButton multi-horizontal\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"deleteItem()\">Delete Item</button>\n                    </span>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/item-master/item-master.component.ts":
/*!******************************************************!*\
  !*** ./src/app/item-master/item-master.component.ts ***!
  \******************************************************/
/*! exports provided: ItemMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMasterComponent", function() { return ItemMasterComponent; });
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


var ItemMasterComponent = /** @class */ (function () {
    function ItemMasterComponent(kisanPortalService) {
        this.kisanPortalService = kisanPortalService;
        this.errorMsg = 'Unable to Save Item Details, Please Try again.';
        this.successMsg = 'Item Details Saved Successfully.';
        this.errorFlag = false;
        this.successflag = false;
        this.items = {
            item_name: "",
            item_type: "",
            item_desc: "",
            item_localname: "",
            rate: 0.00,
            unit: "",
            mrp: 0,
            discount_rate: 0.00,
            effective_from: "",
            brand: ""
        };
    }
    ItemMasterComponent.prototype.ngOnInit = function () {
    };
    ItemMasterComponent.prototype.saveItem = function () {
        var _this = this;
        debugger;
        console.log("Item Data : " + this.items);
        this.kisanPortalService.saveItem(this.items).subscribe(function (data) {
            console.log(data);
            _this.errorFlag = false;
            _this.successflag = false;
            _this.successflag = true;
            _this.clearItemData();
            _this.successMsg = "Item Details are Saved Successfully.";
        }, function (Error) {
            _this.successflag = false;
            _this.errorFlag = true;
            _this.errorMsg = "Unable to Save Item Details, Please Try again.";
        });
    };
    ItemMasterComponent.prototype.clearItemData = function () {
        this.items = {
            item_name: "",
            item_type: "",
            item_desc: "",
            item_localname: "",
            rate: 0.00,
            unit: "",
            mrp: 0.00,
            discount_rate: 0.00,
            effective_from: "",
            brand: ""
        };
    };
    ItemMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-master',
            template: __webpack_require__(/*! ./item-master.component.html */ "./src/app/item-master/item-master.component.html"),
            styles: [__webpack_require__(/*! ./item-master.component.css */ "./src/app/item-master/item-master.component.css")]
        }),
        __metadata("design:paramtypes", [_kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__["KisanPortalService"]])
    ], ItemMasterComponent);
    return ItemMasterComponent;
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

module.exports = "<header>\n  <div class=\"inner\">\n    <h1 class=\"logo\"><a href=\"javascript:void(0)\" (click)=\"showDashboardHome()\">Kisan - Project</a></h1>\n    <nav>\n      <ul class=\"sf-menu sf-js-enabled\">\n        <li id=\"homeLi\" class=\"current\"><a href=\"javascript:void(0)\" (click)=\"showDashboardHome()\">home</a></li>\n        <li id=\"searchFarmerLi\" class=\"dropdown\"><a href=\"javascript:void(0)\" class=\"dropbtn\" >Farmer</a>\n          <ul class=\"dropdown-content\">\n            <li><a href=\"javascript:void(0)\" (click)=\"addFarmer(this)\">Add Farmer</a></li>\n            <li><a href=\"javascript:void(0)\">Edit Farmer</a></li>\n            <li> <a href=\"javascript:void(0)\">Delete Farmer</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown\"> <a href=\"javascript:void(0)\" class=\"dropbtn\" >Product</a>\n          <ul class=\"dropdown-content\">\n            <li><a href=\"javascript:void(0)\" (click)=\"addProduct(this)\">Add Product</a></li>\n            <li><a href=\"javascript:void(0)\">Edit Product</a></li>\n            <li> <a href=\"javascript:void(0)\">Delete Product</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown\"> <a href=\"javascript:void(0)\" class=\"dropbtn\" >User</a>\n          <ul class=\"dropdown-content\">\n            <li><a href=\"javascript:void(0)\" (click)=\"addUser(this)\">Add User</a></li>\n            <li><a href=\"javascript:void(0)\" (click)=\"addAgent(this)\">Add Agent</a></li>\n            <li> <a href=\"javascript:void(0)\" (click)=\"addItem(this)\">Add Item</a></li>\n            <li> <a href=\"javascript:void(0)\" (click)=\"addLocation(this)\">Add Location</a></li>\n            <li> <a href=\"javascript:void(0)\" (click)=\"addSupplier(this)\">Add Supplier</a></li>\n          </ul>\n        </li>\n        <li><a href=\"javascript:void(0)\">contacts</a></li>\n      </ul>\n    </nav>\n    <div class=\"clear\"></div>\n  </div>\n  <!-- <div id=\"slider-main\" *ngIf=\"dashboardHome\">\n  <div class=\"slider-container\">\n      <div class=\"mp-slider\" style=\"z-index: 1; overflow: hidden;\">\n        <ul class=\"items\">\n          <li style=\"display: none;\"><img src=\"assets/images/slide-1.jpg\" alt=\"\">\n            \n          </li>\n          <li style=\"display: none;\"><img src=\"assets/images/slide-2.jpg\" alt=\"\">\n            \n          </li>\n          <li style=\"display: none;\"><img src=\"assets/images/slide-3.jpg\" alt=\"\">\n            \n          </li>\n        </ul>\n      <div class=\"pic\" style=\"overflow: hidden; width: 950px; height: 511px; background: url(&quot;assets/images/slide-3.jpg&quot;) 0px 0px no-repeat;\">\n        <div class=\"mask\" style=\"position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; z-index: 1;\">\n          <div style=\"left: 0px; top: 0px; position: absolute; width: 950px; height: 511px; background-position: 0px 0px; background-image: url(&quot;assets/images/slide-1.jpg&quot;); opacity: 0.241;\">\n          </div>\n        </div>\n      </div>\n      <div class=\"banner mp-ban-3\" style=\"z-index: 999; display: block; opacity: 0.567009;\">\n        <span class=\"row-1\">growing clean</span>\n        <span class=\"row-2\">and full of health</span>\n        <span class=\"row-3\">products</span>\n      </div>\n    </div>\n    </div>\n    <a href=\"javascript:void(0)\" class=\"mp-prev\"></a>\n    <a href=\"javascript:void(0)\" class=\"mp-next\"></a>\n  </div> -->\n</header>\n<router-outlet></router-outlet>"

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
    KisanDashboardComponent.prototype.addAgent = function (el) {
        this.dashboardHome = false;
        jquery__WEBPACK_IMPORTED_MODULE_2__('.current').removeClass('current');
        // $('#searchFarmerLi').addClass('current');
        jquery__WEBPACK_IMPORTED_MODULE_2__(el).parents('li .dropdown').addClass('current');
        this.router.navigateByUrl('kisanDashboard/addAgent');
    };
    KisanDashboardComponent.prototype.addItem = function (el) {
        this.dashboardHome = false;
        jquery__WEBPACK_IMPORTED_MODULE_2__('.current').removeClass('current');
        // $('#searchFarmerLi').addClass('current');
        jquery__WEBPACK_IMPORTED_MODULE_2__(el).parents('li .dropdown').addClass('current');
        this.router.navigateByUrl('kisanDashboard/addItem');
    };
    KisanDashboardComponent.prototype.addLocation = function (el) {
        this.dashboardHome = false;
        jquery__WEBPACK_IMPORTED_MODULE_2__('.current').removeClass('current');
        // $('#searchFarmerLi').addClass('current');
        jquery__WEBPACK_IMPORTED_MODULE_2__(el).parents('li .dropdown').addClass('current');
        this.router.navigateByUrl('kisanDashboard/addLocation');
    };
    KisanDashboardComponent.prototype.addSupplier = function (el) {
        this.dashboardHome = false;
        jquery__WEBPACK_IMPORTED_MODULE_2__('.current').removeClass('current');
        // $('#searchFarmerLi').addClass('current');
        jquery__WEBPACK_IMPORTED_MODULE_2__(el).parents('li .dropdown').addClass('current');
        this.router.navigateByUrl('kisanDashboard/addSupplier');
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

module.exports = "a {\r\n\tcolor:#007bff;\r\n\ttext-decoration: underline;\r\n\tcursor:pointer;\r\n}\r\n.errorMsg{font-size: 14px;font-weight: 900;padding-bottom: 10px;color: #cd040b;}"

/***/ }),

/***/ "./src/app/kisan-login/kisan-login.component.html":
/*!********************************************************!*\
  !*** ./src/app/kisan-login/kisan-login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-page\" *ngIf=\"!loginsuccess\">\n    <div class=\"form\">\n      <div class=\"errorMsg\" *ngIf=\"errorFlag\">{{errorMsg}}</div>\n      <form class=\"login-form\" >\n        <input type=\"text\" [(ngModel)]=\"userLoginData.userId\" placeholder=\"user name\" name=\"user name\"/>\n        <input type=\"password\" [(ngModel)]=\"userLoginData.password\" placeholder=\"password\" name=\"password\"/>\n        <button (click)=\"login()\">login</button>\n      </form>\n    </div>\n  </div>\n  <router-outlet *ngIf=\"loginsuccess\"></router-outlet>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kisanlogin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kisanlogin.service */ "./src/app/kisanlogin.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var KisanLoginComponent = /** @class */ (function () {
    function KisanLoginComponent(kisanloginService, router, location, sessionStorage) {
        this.kisanloginService = kisanloginService;
        this.router = router;
        this.location = location;
        this.sessionStorage = sessionStorage;
        this.loginformType = 'login';
        this.username = '';
        this.password = '';
        this.loginsuccess = false;
        this.errorFlag = false;
        this.errorMsg = '';
        this.userLoginData = {
            userId: '',
            password: ''
        };
    }
    KisanLoginComponent.prototype.ngOnInit = function () {
    };
    KisanLoginComponent.prototype.login = function () {
        var _this = this;
        //debugger;
        if (this.userLoginData.userId == undefined || this.userLoginData.userId == '') {
            this.errorFlag = true;
            this.errorMsg = 'Please enter valid username';
        }
        else if (this.userLoginData.password == undefined || this.userLoginData.password == '') {
            this.errorFlag = true;
            this.errorMsg = 'Please enter valid password';
        }
        else {
            this.kisanloginService.kisanLogin(this.userLoginData).subscribe(function (data) {
                _this.loginsuccess = true;
                _this.errorFlag = false;
                if (data.userId != undefined && data.userId != '') {
                    _this.sessionStorage.set("userId", data.userId);
                    _this.sessionStorage.set("userRole", data.userRole);
                }
                if (_this.location.path() == '') {
                    _this.router.navigate(['kisanDashboard']);
                }
                else
                    _this.router.navigate([_this.location.path()]);
            });
            if (this.userLoginData.userId == 'janaki' && this.userLoginData.password == 'ramulu') {
                this.loginsuccess = true;
                this.sessionStorage.set("userId", this.userLoginData.userId);
                this.sessionStorage.set("userRole", "admin");
                if (this.location.path() == '') {
                    this.router.navigate(['kisanDashboard']);
                }
                else
                    this.router.navigate([this.location.path()]);
            }
        }
    };
    KisanLoginComponent.prototype.getLoginformType = function () {
        return this.loginformType;
    };
    KisanLoginComponent.prototype.showLoginForm = function () {
        this.loginformType = "login";
    };
    KisanLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kisan-login',
            template: __webpack_require__(/*! ./kisan-login.component.html */ "./src/app/kisan-login/kisan-login.component.html"),
            styles: [__webpack_require__(/*! ./kisan-login.component.css */ "./src/app/kisan-login/kisan-login.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_kisanlogin_service__WEBPACK_IMPORTED_MODULE_3__["KisanloginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"]])
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
        this.deleteTransactionUrl = 'http://localhost:8080/deleteTransaction';
        this.saveFarmerUrl = 'http://localhost:8080/SaveFarmer';
        this.saveUserUrl = 'http://localhost:8080/Saveuser';
        this.getTransactionUrl = 'http://localhost:8080/getTransaction';
        this.saveAgentUrl = 'http://localhost:8080/SaveAgent';
        this.saveItemUrl = 'http://localhost:8080/Saveitem';
        this.saveLocationUrl = 'http://localhost:8080/SaveLocation';
        this.saveSupplierUrl = 'http://localhost:8080/SaveSupplier';
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
    KisanPortalService.prototype.getTransaction = function (barCode) {
        this.getTransactionUrl = this.getTransactionUrl + "/" + barCode;
        return this.http.get(this.getTransactionUrl, barCode);
    };
    KisanPortalService.prototype.saveTransactionDetails = function (transData) {
        return this.http.post(this.saveTransactionUrl, transData);
    };
    KisanPortalService.prototype.deleteTransaction = function (TransId) {
        return this.http.put(this.deleteTransactionUrl, TransId);
    };
    KisanPortalService.prototype.saveFarmer = function (farmerData) {
        return this.http.post(this.saveFarmerUrl, farmerData);
    };
    KisanPortalService.prototype.saveUser = function (userData) {
        return this.http.post(this.saveUserUrl, userData);
    };
    KisanPortalService.prototype.saveAgent = function (agentData) {
        return this.http.post(this.saveAgentUrl, agentData);
    };
    KisanPortalService.prototype.saveItem = function (itemData) {
        return this.http.post(this.saveItemUrl, itemData);
    };
    KisanPortalService.prototype.saveLocation = function (locationData) {
        return this.http.post(this.saveLocationUrl, locationData);
    };
    KisanPortalService.prototype.saveSupplier = function (supplierData) {
        return this.http.post(this.saveSupplierUrl, supplierData);
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

/***/ "./src/app/kisan-supplier/kisan-supplier.component.css":
/*!*************************************************************!*\
  !*** ./src/app/kisan-supplier/kisan-supplier.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkAddress{\r\n    padding-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/kisan-supplier/kisan-supplier.component.html":
/*!**************************************************************!*\
  !*** ./src/app/kisan-supplier/kisan-supplier.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"content\">\n  <div class=\"container_24\">\n    <div class=\"wrapper\">\n      <div class=\"grid_24 content-bg\">\n        <div class=\"wrapper\">\n          <div class=\"page-header\">\n            <h3 class=\"cnt-head\">Product > Add Supplier</h3>\n          </div>\n          <div class=\"successMsg\" *ngIf=\"successflag\">{{successMsg}}</div>\n          <div class=\"errorMsg\" *ngIf=\"errorFlag\">{{errorMsg}}</div>\n          <article class=\"grid_22 suffix_1 prefix_1 alpha omega\">\n            <div id=\"supplierDetails\">\n              <form class=\"mbr-form\">\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"supplierId\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Supplier Id</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.supplierId\" name=\"supplierId\"\n                          data-form-field=\"supplierId\" required id=\"supplierId\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"supplierName\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Supplier Name</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.supplierName\" name=\"supplierName\"\n                          data-form-field=\"supplierName\" required=\"\" id=\"supplierName\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"supplierType\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Supplier Type</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.supplierType\" name=\"supplierType\"\n                          data-form-field=\"supplierType\" required id=\"supplierType\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"userId\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">User Id</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.userId\" name=\"userId\"\n                          data-form-field=\"userId\" required=\"\" id=\"userId\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"vehicle\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Supplier Id</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.vehicle\" name=\"vehicle\"\n                          data-form-field=\"vehicle\" required id=\"vehicle\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"sub-header\">\n                  <h5>Billing Address Details : </h5>\n                  <hr>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressLine1\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Address Line1</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.addressDetails.addressLine1\" name=\"addressLine1\"\n                          data-form-field=\"addressLine1\" required id=\"addressLine1\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressLine2\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Address Line2</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.addressDetails.addressLine2\"\n                          name=\"addressLine2\" data-form-field=\"addressLine2\" required=\"\" id=\"addressLine2\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressLine3\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">addressLine3</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.addressDetails.addressLine3\" name=\"addressLine3\"\n                          data-form-field=\"addressLine3\" required id=\"addressLine3\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"city\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">City</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.addressDetails.city\" name=\"city\"\n                          data-form-field=\"city\" required=\"\" id=\"city\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"state\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">State</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.addressDetails.state\" name=\"state\"\n                          data-form-field=\"state\" required id=\"state\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"pin\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Pin</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"supplier.addressDetails.pin\" name=\"pin\"\n                          data-form-field=\"pin\" required=\"\" id=\"pin\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"email\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Email Id</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.addressDetails.email\" name=\"email\"\n                          data-form-field=\"email\" required id=\"email\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"mobileNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Mobile Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"supplier.addressDetails.mobileNum\" name=\"mobileNum\"\n                          data-form-field=\"mobileNum\" required=\"\" id=\"mobileNum\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"altMobileNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Alternate Mobile Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"supplier.addressDetails.altMobileNum\" name=\"altMobileNum\"\n                          data-form-field=\"altMobileNum\" required id=\"altMobileNum\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"residencePhNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Residence Phone Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"supplier.addressDetails.residencePhNum\"\n                          name=\"residencePhNum\" data-form-field=\"residencePhNum\" required=\"\" id=\"residencePhNum\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"officePhNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Office Phone Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"supplier.addressDetails.officePhNum\" name=\"officePhNum\"\n                          data-form-field=\"officePhNum\" required id=\"officePhNum\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressCheck\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-7 col-form-label form-control-label\">Check If Delivery Address is same as Billing Address</label>\n                      <div class=\"col-lg-3 checkAddress\">\n                        <input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"addressCheckFlag\" (change)=\"addressCheck()\" name=\"addressCheck\"\n                          data-form-field=\"addressCheck\" required id=\"addressCheck\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"sub-header\">\n                  <h5>Delivery Address Details : </h5>\n                  <hr>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressLine1\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Address Line1</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.deliveryaddressDetails.addressLine1\" name=\"addressLine1\"\n                          data-form-field=\"addressLine1\" required id=\"addressLine1\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressLine2\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Address Line2</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.deliveryaddressDetails.addressLine2\"\n                          name=\"addressLine2\" data-form-field=\"addressLine2\" required=\"\" id=\"addressLine2\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressLine3\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">addressLine3</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.deliveryaddressDetails.addressLine3\" name=\"addressLine3\"\n                          data-form-field=\"addressLine3\" required id=\"addressLine3\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"city\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">City</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.deliveryaddressDetails.city\" name=\"city\"\n                          data-form-field=\"city\" required=\"\" id=\"city\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"state\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">State</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.deliveryaddressDetails.state\" name=\"state\"\n                          data-form-field=\"state\" required id=\"state\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"pin\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Pin</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"supplier.deliveryaddressDetails.pin\" name=\"pin\"\n                          data-form-field=\"pin\" required=\"\" id=\"pin\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"email\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Email Id</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.deliveryaddressDetails.email\" name=\"email\"\n                          data-form-field=\"email\" required id=\"email\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"mobileNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Mobile Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"supplier.deliveryaddressDetails.mobileNum\" name=\"mobileNum\"\n                          data-form-field=\"mobileNum\" required=\"\" id=\"mobileNum\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"altMobileNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Alternate Mobile Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"supplier.deliveryaddressDetails.altMobileNum\" name=\"altMobileNum\"\n                          data-form-field=\"altMobileNum\" required id=\"altMobileNum\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"residencePhNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Residence Phone Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"supplier.deliveryaddressDetails.residencePhNum\"\n                          name=\"residencePhNum\" data-form-field=\"residencePhNum\" required=\"\" id=\"residencePhNum\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"officePhNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Office Phone Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"supplier.deliveryaddressDetails.officePhNum\" name=\"officePhNum\"\n                          data-form-field=\"officePhNum\" required id=\"officePhNum\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"sub-header\">\n                  <h5>Registration Details : </h5>\n                  <hr>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"pan\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">PAN</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.registrationInfo.pan\" name=\"pan\"\n                          data-form-field=\"pan\" required id=\"pan\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"tin\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">TIN</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.registrationInfo.tin\" name=\"tin\"\n                          data-form-field=\"tin\" required id=\"tin\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"gst\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">GST</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.registrationInfo.gst\" name=\"gst\"\n                          data-form-field=\"gst\" required id=\"gst\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"cst\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">CST</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.registrationInfo.cst\" name=\"cst\"\n                          data-form-field=\"cst\" required id=\"cst\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"licenceNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Licence Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supplier.registrationInfo.licenceNum\" name=\"licenceNum\"\n                          data-form-field=\"licenceNum\" required id=\"licenceNum\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"firstButton multi-horizontal\" >\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"saveSupplier()\">Save Supplier</button>\n                    </span>\n                  </div>\n                  <div class=\"firstButton multi-horizontal\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"editSupplier()\">Edit Supplier</button>\n                    </span>\n                  </div>\n                  <div class=\"firstButton multi-horizontal\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"deleteSupplier()\">Delete Supplier</button>\n                    </span>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/kisan-supplier/kisan-supplier.component.ts":
/*!************************************************************!*\
  !*** ./src/app/kisan-supplier/kisan-supplier.component.ts ***!
  \************************************************************/
/*! exports provided: KisanSupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KisanSupplierComponent", function() { return KisanSupplierComponent; });
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


var KisanSupplierComponent = /** @class */ (function () {
    function KisanSupplierComponent(kisanPortalService) {
        this.kisanPortalService = kisanPortalService;
        this.errorMsg = 'Unable to Save Supplier Details, Please Try again.';
        this.successMsg = 'Supplier Details Saved Successfully.';
        this.errorFlag = false;
        this.successflag = false;
        this.addressCheckFlag = false;
        this.supplier = {
            supplierId: 0,
            supplierName: "",
            supplierType: "",
            userId: "",
            vehicle: "",
            addressDetails: {
                addressLine1: "",
                addressLine2: "",
                addressLine3: "",
                city: "",
                state: "",
                pin: 0,
                emain: "",
                mobileNum: 0,
                altMobileNum: 0,
                residencePhNum: 0,
                officePhNum: 0,
                addressType: ""
            },
            registrationInfo: {
                pan: "",
                tin: "",
                gst: "",
                cst: "",
                licenceNum: ""
            },
            deliveryaddressDetails: {
                addressLine1: "",
                addressLine2: "",
                addressLine3: "",
                city: "",
                state: "",
                pin: 0,
                emain: "",
                mobileNum: 0,
                altMobileNum: 0,
                residencePhNum: 0,
                officePhNum: 0,
                addressType: ""
            }
        };
    }
    KisanSupplierComponent.prototype.ngOnInit = function () {
    };
    KisanSupplierComponent.prototype.saveSupplier = function () {
        var _this = this;
        debugger;
        console.log("supplier Data : " + this.supplier);
        this.kisanPortalService.saveSupplier(this.supplier).subscribe(function (data) {
            console.log(data);
            _this.errorFlag = false;
            _this.successflag = false;
            _this.successflag = true;
            _this.clearSupplierData();
            _this.successMsg = "supplier Details are Saved Successfully.";
        }, function (Error) {
            _this.successflag = false;
            _this.errorFlag = true;
            _this.errorMsg = "Unable to Save supplier Details, Please Try again.";
        });
    };
    KisanSupplierComponent.prototype.clearSupplierData = function () {
        this.supplier = {
            supplierId: 0,
            supplierName: "",
            supplierType: "",
            userId: "",
            vehicle: "",
            addressDetails: {
                addressLine1: "",
                addressLine2: "",
                addressLine3: "",
                city: "",
                state: "",
                pin: 0,
                emain: "",
                mobileNum: 0,
                altMobileNum: 0,
                residencePhNum: 0,
                officePhNum: 0,
                addressType: ""
            },
            registrationInfo: {
                pan: "",
                tin: "",
                gst: "",
                cst: "",
                licenceNum: ""
            },
            deliveryaddressDetails: {
                addressLine1: "",
                addressLine2: "",
                addressLine3: "",
                city: "",
                state: "",
                pin: 0,
                emain: "",
                mobileNum: 0,
                altMobileNum: 0,
                residencePhNum: 0,
                officePhNum: 0,
                addressType: ""
            }
        };
    };
    KisanSupplierComponent.prototype.addressCheck = function () {
        debugger;
        console.log(this.addressCheckFlag);
        if (this.addressCheckFlag == true) {
            this.supplier.deliveryaddressDetails = this.supplier.addressDetails;
        }
        else {
            this.supplier.deliveryaddressDetails = {
                addressLine1: "",
                addressLine2: "",
                addressLine3: "",
                city: "",
                state: "",
                pin: 0,
                emain: "",
                mobileNum: 0,
                altMobileNum: 0,
                residencePhNum: 0,
                officePhNum: 0,
                addressType: ""
            };
        }
    };
    KisanSupplierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kisan-supplier',
            template: __webpack_require__(/*! ./kisan-supplier.component.html */ "./src/app/kisan-supplier/kisan-supplier.component.html"),
            styles: [__webpack_require__(/*! ./kisan-supplier.component.css */ "./src/app/kisan-supplier/kisan-supplier.component.css")]
        }),
        __metadata("design:paramtypes", [_kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__["KisanPortalService"]])
    ], KisanSupplierComponent);
    return KisanSupplierComponent;
}());



/***/ }),

/***/ "./src/app/kisanlogin.service.ts":
/*!***************************************!*\
  !*** ./src/app/kisanlogin.service.ts ***!
  \***************************************/
/*! exports provided: KisanloginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KisanloginService", function() { return KisanloginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KisanloginService = /** @class */ (function () {
    function KisanloginService(http) {
        this.http = http;
        this.loginUrl = 'http://localhost:8080/login';
    }
    KisanloginService.prototype.kisanLogin = function (userLoginData) {
        return this.http.post(this.loginUrl, userLoginData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data.json(); }));
    };
    KisanloginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], KisanloginService);
    return KisanloginService;
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

/***/ "./src/app/store-location/store-location.component.css":
/*!*************************************************************!*\
  !*** ./src/app/store-location/store-location.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr{\r\n    border:1px solid white;\r\n    margin: 0px;\r\n}\r\n.sub-header{\r\n    padding-top: 15px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/store-location/store-location.component.html":
/*!**************************************************************!*\
  !*** ./src/app/store-location/store-location.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"content\">\n  <div class=\"container_24\">\n    <div class=\"wrapper\">\n      <div class=\"grid_24 content-bg\">\n        <div class=\"wrapper\">\n          <div class=\"page-header\">\n            <h3 class=\"cnt-head\">Product > Add Location</h3>\n          </div>\n          <div class=\"successMsg\" *ngIf=\"successflag\">{{successMsg}}</div>\n          <div class=\"errorMsg\" *ngIf=\"errorFlag\">{{errorMsg}}</div>\n          <article class=\"grid_22 suffix_1 prefix_1 alpha omega\">\n            <div id=\"locationDetails\">\n              <form class=\"mbr-form\">\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"locName\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Location Name</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.locName\" name=\"locName\"\n                          data-form-field=\"locName\" required id=\"locName\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"locType\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Location Type</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.locType\" name=\"locType\"\n                          data-form-field=\"locType\" required=\"\" id=\"locType\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"description\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Description</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.description\" name=\"description\"\n                          data-form-field=\"description\" required id=\"description\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"accountNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Account Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.accountNum\" name=\"accountNum\"\n                          data-form-field=\"accountNum\" required id=\"accountNum\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"accountName\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Account Name</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.accountName\" name=\"accountName\"\n                          data-form-field=\"accountName\" required=\"\" id=\"accountName\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"bankName\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Bank Name</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.bankName\" name=\"bankName\"\n                          data-form-field=\"bankName\" required id=\"bankName\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"ifscCode\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">IFSC Code</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.ifscCode\" name=\"ifscCode\"\n                          data-form-field=\"ifscCode\" required=\"\" id=\"ifscCode\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"sub-header\">\n                  <h5>Address Details : </h5>\n                  <hr>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressLine1\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Address Line1</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.addressDetails.addressLine1\" name=\"addressLine1\"\n                          data-form-field=\"addressLine1\" required id=\"addressLine1\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressLine2\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Address Line2</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.addressDetails.addressLine2\"\n                          name=\"addressLine2\" data-form-field=\"addressLine2\" required=\"\" id=\"addressLine2\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressLine3\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">addressLine3</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.addressDetails.addressLine3\" name=\"addressLine3\"\n                          data-form-field=\"addressLine3\" required id=\"addressLine3\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"city\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">City</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.addressDetails.city\" name=\"city\"\n                          data-form-field=\"city\" required=\"\" id=\"city\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"state\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">State</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.addressDetails.state\" name=\"state\"\n                          data-form-field=\"state\" required id=\"state\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"pin\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Pin</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"location.addressDetails.pin\" name=\"pin\"\n                          data-form-field=\"pin\" required=\"\" id=\"pin\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"email\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Email Id</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.addressDetails.email\" name=\"email\"\n                          data-form-field=\"email\" required id=\"email\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"mobileNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Mobile Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"location.addressDetails.mobileNum\" name=\"mobileNum\"\n                          data-form-field=\"mobileNum\" required=\"\" id=\"mobileNum\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"altMobileNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Alternate Mobile Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"location.addressDetails.altMobileNum\" name=\"altMobileNum\"\n                          data-form-field=\"altMobileNum\" required id=\"altMobileNum\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"residencePhNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Residence Phone Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"location.addressDetails.residencePhNum\"\n                          name=\"residencePhNum\" data-form-field=\"residencePhNum\" required=\"\" id=\"residencePhNum\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"officePhNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Office Phone Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"location.addressDetails.officePhNum\" name=\"officePhNum\"\n                          data-form-field=\"officePhNum\" required id=\"officePhNum\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"addressType\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Address Type</label>\n                      <div class=\"col-lg-7\">\n                        <div style=\"float: left\">\n                          <input type=\"radio\" value=\"B\" name=\"addressType\" [(ngModel)]=\"location.addressDetails.addressType\">\n                          Billing\n                        </div>\n                        <div style=\"padding-left: 75px;\">\n                          <input type=\"radio\" value=\"D\" name=\"addressType\" [(ngModel)]=\"location.addressDetails.addressType\">\n                          Delivery\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"sub-header\">\n                  <h5>Registration Details : </h5>\n                  <hr>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"pan\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">PAN</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.registrationInfo.pan\" name=\"pan\"\n                          data-form-field=\"pan\" required id=\"pan\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"tin\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">TIN</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.registrationInfo.tin\" name=\"tin\"\n                          data-form-field=\"tin\" required id=\"tin\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"gst\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">GST</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.registrationInfo.gst\" name=\"gst\"\n                          data-form-field=\"gst\" required id=\"gst\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"cst\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">CST</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.registrationInfo.cst\" name=\"cst\"\n                          data-form-field=\"cst\" required id=\"cst\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"col-md-6 multi-horizontal\" data-for=\"licenceNum\">\n                    <div class=\"form-group row\">\n                      <label class=\"col-lg-4 col-form-label form-control-label\">Licence Number</label>\n                      <div class=\"col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location.registrationInfo.licenceNum\" name=\"licenceNum\"\n                          data-form-field=\"licenceNum\" required id=\"licenceNum\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row row-sm-offset\">\n                  <div class=\"firstButton multi-horizontal\" >\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"saveLocation()\">Save Location</button>\n                    </span>\n                  </div>\n                  <div class=\"firstButton multi-horizontal\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"editLocation()\">Edit Location</button>\n                    </span>\n                  </div>\n                  <div class=\"firstButton multi-horizontal\">\n                    <span class=\"input-group-btn\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-form display-5\" (click)=\"deleteLocation()\">Delete Location</button>\n                    </span>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/store-location/store-location.component.ts":
/*!************************************************************!*\
  !*** ./src/app/store-location/store-location.component.ts ***!
  \************************************************************/
/*! exports provided: StoreLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreLocationComponent", function() { return StoreLocationComponent; });
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


var StoreLocationComponent = /** @class */ (function () {
    function StoreLocationComponent(kisanPortalService) {
        this.kisanPortalService = kisanPortalService;
        this.errorMsg = 'Unable to Save Location Details, Please Try again.';
        this.successMsg = 'Location Details Saved Successfully.';
        this.errorFlag = false;
        this.successflag = false;
        this.location = {
            locName: "",
            locType: "",
            description: "",
            addressDetails: {
                addressLine1: "",
                addressLine2: "",
                addressLine3: "",
                city: "",
                state: "",
                pin: 0,
                emain: "",
                mobileNum: 0,
                altMobileNum: 0,
                residencePhNum: 0,
                officePhNum: 0,
                addressType: ""
            },
            registrationInfo: {
                pan: "",
                tin: "",
                gst: "",
                cst: "",
                licenceNum: ""
            },
            accountNum: "",
            accountName: "",
            bankName: "",
            ifscCode: ""
        };
    }
    StoreLocationComponent.prototype.ngOnInit = function () {
    };
    StoreLocationComponent.prototype.saveLocation = function () {
        var _this = this;
        debugger;
        console.log("Location Data : " + this.location);
        this.kisanPortalService.saveLocation(this.location).subscribe(function (data) {
            console.log(data);
            _this.errorFlag = false;
            _this.successflag = false;
            _this.successflag = true;
            _this.clearlocationData();
            _this.successMsg = "Location Details are Saved Successfully.";
        }, function (Error) {
            _this.successflag = false;
            _this.errorFlag = true;
            _this.errorMsg = "Unable to Save Location Details, Please Try again.";
        });
    };
    StoreLocationComponent.prototype.clearlocationData = function () {
        this.location = {
            locName: "",
            locType: "",
            description: "",
            addressDetails: {
                addressLine1: "",
                addressLine2: "",
                addressLine3: "",
                city: "",
                state: "",
                pin: 0,
                emain: "",
                mobileNum: 0,
                altMobileNum: 0,
                residencePhNum: 0,
                officePhNum: 0,
                addressType: ""
            },
            registrationInfo: {
                pan: "",
                tin: "",
                gst: "",
                cst: "",
                licenceNum: ""
            },
            accountNum: "",
            accountName: "",
            bankName: "",
            ifscCode: ""
        };
    };
    StoreLocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store-location',
            template: __webpack_require__(/*! ./store-location.component.html */ "./src/app/store-location/store-location.component.html"),
            styles: [__webpack_require__(/*! ./store-location.component.css */ "./src/app/store-location/store-location.component.css")]
        }),
        __metadata("design:paramtypes", [_kisan_portal_service__WEBPACK_IMPORTED_MODULE_1__["KisanPortalService"]])
    ], StoreLocationComponent);
    return StoreLocationComponent;
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

module.exports = __webpack_require__(/*! C:\Users\janak\myprojects\kisan-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map