(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Practice\Frontend\fileupload_frontend\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3i3o":
/*!****************************************************************************!*\
  !*** ./src/app/components/master/admin/view-admin/view-admin.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAdminComponent", function() { return ViewAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/app-urls */ "Rg0J");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/upload.service */ "jT/F");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "oTcB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");











function ViewAdminComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewAdminComponent_tr_29_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const member_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeAdminStatus(member_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAdminComponent_tr_29_Template_img_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const member_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editData(member_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewAdminComponent_tr_29_Template_img_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const member_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteMember(member_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((member_r1 == null ? null : member_r1.firstName) + " " + (member_r1 == null ? null : member_r1.lastName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1 == null ? null : member_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1 == null ? null : member_r1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1 == null ? null : member_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", member_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", member_r1.isActive == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", member_r1._id);
} }
const _c0 = function () { return ["/add-admins"]; };
class ViewAdminComponent {
    constructor(router, uploadService, snackBar, config, modalService) {
        this.router = router;
        this.uploadService = uploadService;
        this.snackBar = snackBar;
        this.modalService = modalService;
        this.flag = true;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.store = {};
        this.warningStatus = false;
        this.closeResult = '';
        this.selectedObj = {};
        this.getAdminDetails();
    }
    //////Get Data
    getAdminDetails() {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["actionUrl"]._getMember, {
            params: {
                role: "Admin"
            }
        })
            .then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.type == "success") {
                this.adminData = response.data.data;
                console.log(this.adminData);
                console.log(response.data);
                if (this.flag) {
                    this.dtTrigger.next();
                    this.flag = false;
                }
            }
            else {
                this.adminData = [];
            }
            // else if(this.baseService.checkToken(response.data.message , response.data.status))
            // {
            // }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    changeAdminStatus(data) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["actionUrl"]._updateMemberStatus, {
            _id: data._id,
            isActive: !data.isActive
        })
            .then(response => {
            if (response.data.code == 200 && response.data.type == "success") {
                this.openSnackBar(response.data.message, '5000', 'close');
                this.getAdminDetails();
                // window.location.reload();
            }
            else {
                this.openSnackBar(response.data.message, '5000', 'close');
            }
            // else if(this.baseService.checkToken(response.data.message , response.data.status))
            // {
            // }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    /////////////////Edit Data
    editData(id) {
        this.router.navigate(['/add-admins'], { queryParams: { id: id } });
    }
    ////////////////Delete Categoire
    deleteMember(data) {
        if (confirm("Do You Delete This Record Permanently")) {
            // this.uploadService.deleteImage(data.imageURL.split('.com/')[1]);
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["actionUrl"]._deleteMember + data._id, {})
                .then(response => {
                console.log("Deleted Testing..");
                console.log(response);
                if (response.data.code == 200 && response.data.type == "success") {
                    this.openSnackBar(response.data.message, '5000', 'close');
                    this.getAdminDetails();
                }
                else {
                    this.openSnackBar(response.data.message, '5000', 'close');
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            "lengthMenu": [[100, 200, -1], [100, 200, "All"]]
        };
    }
    openSnackBar(msg, duration, action) {
        this.snackBar.open(msg, action, {
            duration: duration,
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
}
ViewAdminComponent.ɵfac = function ViewAdminComponent_Factory(t) { return new (t || ViewAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"])); };
ViewAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewAdminComponent, selectors: [["app-view-admin"]], decls: 30, vars: 5, consts: [[1, "card"], [1, "card-header", "page-content-header"], [1, "row"], [1, "col-md-3"], [1, "col-md-8"], [1, "btn", "btn-success", 2, "float", "right", 3, "routerLink"], [1, "card-body"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-bordered", "table-striped", 3, "dtOptions", "dtTrigger"], [2, "background-color", "#fb9013"], [4, "ngFor", "ngForOf"], [1, "custom-control", "custom-switch"], ["type", "checkbox", 1, "custom-control-input", 3, "checked", "id", "change"], [1, "custom-control-label", 2, "cursor", "pointer", 3, "for"], ["src", "assets/images/edit.png", "height", "25px", 3, "click"], ["src", "assets/images/delete.png", "height", "25px", 3, "click"]], template: function ViewAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+ Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " S NO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ViewAdminComponent_tr_29_Template, 18, 8, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.adminData);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFzdGVyL2FkbWluL3ZpZXctYWRtaW4vdmlldy1hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-admin',
                templateUrl: './view-admin.component.html',
                styleUrls: ['./view-admin.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "A27c":
/*!*************************************************************************************!*\
  !*** ./src/app/components/master/member/member-display/member-display.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MemberDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDisplayComponent", function() { return MemberDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/app-urls */ "Rg0J");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/upload.service */ "jT/F");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "oTcB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");











function MemberDisplayComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MemberDisplayComponent_tr_29_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const member_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeMemberStatus(member_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberDisplayComponent_tr_29_Template_img_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const member_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editData(member_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberDisplayComponent_tr_29_Template_img_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const member_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteMember(member_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((member_r1 == null ? null : member_r1.firstName) + " " + (member_r1 == null ? null : member_r1.lastName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1 == null ? null : member_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1 == null ? null : member_r1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1 == null ? null : member_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", member_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", member_r1.isActive == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", member_r1._id);
} }
const _c0 = function () { return ["/add-client"]; };
class MemberDisplayComponent {
    constructor(router, uploadService, snackBar, config, modalService) {
        this.router = router;
        this.uploadService = uploadService;
        this.snackBar = snackBar;
        this.modalService = modalService;
        this.flag = true;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.store = {};
        this.warningStatus = false;
        this.closeResult = '';
        this.selectedObj = {};
        this.getMemberDetails();
    }
    //////Get Data
    getMemberDetails() {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["actionUrl"]._getMember, {
            params: {
                role: "Client"
            }
        })
            .then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.type == "success") {
                this.memberData = response.data.data;
                console.log(this.memberData);
                console.log(response.data);
                if (this.flag) {
                    this.dtTrigger.next();
                    this.flag = false;
                }
            }
            else {
                this.memberData = [];
            }
            // else if(this.baseService.checkToken(response.data.message , response.data.status))
            // {
            // }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    changeMemberStatus(data) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["actionUrl"]._updateMemberStatus, {
            _id: data._id,
            isActive: !data.isActive
        })
            .then(response => {
            if (response.data.code == 200 && response.data.type == "success") {
                this.openSnackBar(response.data.message, '5000', 'close');
                this.getMemberDetails();
                // window.location.reload();
            }
            else {
                this.openSnackBar(response.data.message, '5000', 'close');
            }
            // else if(this.baseService.checkToken(response.data.message , response.data.status))
            // {
            // }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    /////////////////Edit Data
    editData(id) {
        this.router.navigate(['/edit-client'], { queryParams: { id: id } });
    }
    ////////////////Delete Categoire
    deleteMember(data) {
        if (confirm("Do You Delete This Record Permanently")) {
            // this.uploadService.deleteImage(data.imageURL.split('.com/')[1]);
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["actionUrl"]._deleteMember + data._id, {})
                .then(response => {
                console.log("Deleted Testing..");
                console.log(response);
                if (response.data.code == 200 && response.data.type == "success") {
                    this.openSnackBar(response.data.message, '5000', 'close');
                    this.getMemberDetails();
                }
                else {
                    this.openSnackBar(response.data.message, '5000', 'close');
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            "lengthMenu": [[100, 200, -1], [100, 200, "All"]]
        };
    }
    openSnackBar(msg, duration, action) {
        this.snackBar.open(msg, action, {
            duration: duration,
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
}
MemberDisplayComponent.ɵfac = function MemberDisplayComponent_Factory(t) { return new (t || MemberDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"])); };
MemberDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberDisplayComponent, selectors: [["app-member-display"]], decls: 30, vars: 5, consts: [[1, "card"], [1, "card-header", "page-content-header"], [1, "row"], [1, "col-md-3"], [1, "col-md-8"], [1, "btn", "btn-success", 2, "float", "right", 3, "routerLink"], [1, "card-body"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-bordered", "table-striped", 3, "dtOptions", "dtTrigger"], [2, "background-color", "#fb9013"], [4, "ngFor", "ngForOf"], [1, "custom-control", "custom-switch"], ["type", "checkbox", 1, "custom-control-input", 3, "checked", "id", "change"], [1, "custom-control-label", 2, "cursor", "pointer", 3, "for"], ["src", "assets/images/edit.png", "height", "25px", 3, "click"], ["src", "assets/images/delete.png", "height", "25px", 3, "click"]], template: function MemberDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+ Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " S NO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MemberDisplayComponent_tr_29_Template, 18, 8, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.memberData);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFzdGVyL21lbWJlci9tZW1iZXItZGlzcGxheS9tZW1iZXItZGlzcGxheS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-member-display',
                templateUrl: './member-display.component.html',
                styleUrls: ['./member-display.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    _baseUrl: "https://mks-fileuplods-app.herokuapp.com/"
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

/***/ "ED6/":
/*!**************************************************************************!*\
  !*** ./src/app/components/master/admin/add-admin/add-admin.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminComponent", function() { return AddAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/app-urls */ "Rg0J");
/* harmony import */ var src_environments_image_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/image-urls */ "ISW5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/upload.service */ "jT/F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");










function AddAdminComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddAdminComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddAdminComponent_div_19_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
} }
function AddAdminComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " last Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddAdminComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddAdminComponent_div_28_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
} }
function AddAdminComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddAdminComponent_div_37_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is not valid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddAdminComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddAdminComponent_div_37_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddAdminComponent_div_37_div_2_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.email);
} }
function AddAdminComponent_div_38_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddAdminComponent_div_38_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddAdminComponent_div_38_div_8_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r15.errors.required);
} }
const _c0 = function () { return { standalone: true }; };
function AddAdminComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAdminComponent_div_38_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.member.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddAdminComponent_div_38_div_8_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("ngModel", ctx_r7.member.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r15.invalid && (_r15.dirty || _r15.touched));
} }
function AddAdminComponent_div_39_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "confirm password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddAdminComponent_div_39_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddAdminComponent_div_39_div_8_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r20.errors.required);
} }
function AddAdminComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAdminComponent_div_39_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.member.confirmPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddAdminComponent_div_39_div_8_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("ngModel", ctx_r8.member.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r20.invalid && (_r20.dirty || _r20.touched));
} }
function AddAdminComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " phone number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddAdminComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddAdminComponent_div_48_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.required);
} }
class AddAdminComponent {
    constructor(router, uploadService, arouter, _location, snackBar) {
        this.router = router;
        this.uploadService = uploadService;
        this.arouter = arouter;
        this._location = _location;
        this.snackBar = snackBar;
        this.member = {
            role: 'Admin'
        };
        this.keyPath = "";
        this.imageUrl = src_environments_image_urls__WEBPACK_IMPORTED_MODULE_3__["ImageUrls"].default_imgUrl;
        this.id = null;
        this.status = true;
        this.fullPage = true;
        this.config = {
            uiColor: 'transparent',
            // Define the toolbar groups as it is a more accessible solution.
            toolbarGroups: [
                { 'name': 'basicstyles', 'groups': ['basicstyles'] },
                // {'name': 'links', 'groups': ['links']},
                { 'name': 'paragraph', 'groups': ['list', 'blocks'] },
                // {'name': 'document', 'groups': ['mode']},
                // {'name': 'insert', 'groups': ['insert']},
                { 'name': 'styles', 'groups': ['styles'] },
                { 'name': 'about', 'groups': ['about'] }
            ],
            // Remove the redundant buttons from toolbar groups defined above.
            removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar'
        };
        this.id = this.arouter.snapshot.queryParamMap.get('id');
        if (this.id != null) {
            this.status = false;
            this.getMemberById();
        }
    }
    formSubmit(form) {
        console.log(this.member);
        // this.categorie.imageURL=this.imageUrl+"categories/"+this.keyPath;
        if (this.id == null) {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["actionUrl"]._addMember, this.member, {
            // headers: {
            //   'x-auth' : this.baseService.authToken
            // },
            })
                .then(response => {
                console.log(response);
                if (response.data.code == 201 && response.data.type == 'success') {
                    this.openSnackBar(response.data.message, '5000', 'close');
                    // this.member = {};
                    // form.resetForm("");
                    setTimeout(() => {
                        this.router.navigate(['/view-admins']);
                    }, 1000);
                }
                else {
                    this.openSnackBar(response.data.message, '5000', 'close');
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        else {
            delete this.member.password;
            delete this.member.isActive;
            delete this.member.__v;
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["actionUrl"]._updateMember, this.member)
                .then(response => {
                console.log('resp: ', response);
                if (response.data.code == 200 && response.data.type == 'success') {
                    this.openSnackBar(response.data.message, '5000', 'close');
                    // this.member = {};
                    // form.resetForm("");
                    this.getMemberById();
                }
                else {
                    this.openSnackBar(response.data.message, '5000', 'close');
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    }
    getMemberById() {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["actionUrl"]._getMemberById + this.id, {
        // headers: {
        //   'x-auth' : this.baseService.authToken
        // },
        })
            .then(response => {
            if (response.data.code == 200 && response.data.type == 'success') {
                this.member = response.data.data;
                console.log(this.member);
                console.log(response.data);
            }
            // else if(this.baseService.checkToken(response.data.message , response.data.status))
            // {
            // }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    ////////////////////Image Code
    selectFile(event) {
        console.log("selectFile");
        this.selectedFiles = event.target.files[0];
        // this.upload(event.target.files[0]);
        this.upload();
    }
    upload() {
        let file = this.selectedFiles;
        let type = "categories";
        console.log("UPLOAD", file);
        let self = this;
        self.statusText = "Uploaded.....";
        self.uploadService.uploadFileAny(file, type, function (err, key) {
            if (err)
                console.log(err);
            console.log('Seccouse ', err, key);
            self.keyPath = key;
            //   else {
            //      console.log(key);
            //     // axios.post(self.baseurl + 'admin/api/media/', { "name": self.name, "key": key ,"type":"img"}, {
            //   headers: { 'x-auth': self.token }
            // })
            // .then(response => {
            //   console.log(response);
            //   self.statusText = "Image Uploaded Succesfully";
            //   self.getAllMedia();
            // }).catch((error) => {
            //   // handle error
            //   console.log("0000", error);
            //   self.statusText = "Image Uploaded Error";
            // }).
            // finally(() => {
            //   // always executed
            //   // this.loading = true;
            //   self.selectedFiles = {};
            // });
            // };
        });
    }
    openSnackBar(msg, duration, action) {
        this.snackBar.open(msg, action, {
            duration: duration,
        });
    }
    ngOnInit() {
    }
    backClicked() {
        this._location.back();
    }
}
AddAdminComponent.ɵfac = function AddAdminComponent_Factory(t) { return new (t || AddAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
AddAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddAdminComponent, selectors: [["app-add-admin"]], decls: 54, vars: 21, consts: [[1, "page-content-header"], [1, "page-content-body"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "overall-contentblock"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["memberForm", "ngForm"], [1, "form-group", "form-row"], ["for", "normal-input-1", 1, "col-md-2", "col-sm-3", "col-form-label", "col-form-label-md", "text-sm-right"], [1, "star"], [1, "col-md-8", "col-sm-8", "mb-3"], ["type", "text", "name", "firstName", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "text", "name", "lastName", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["type", "email", "name", "email", "email", "", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "form-group form-row", 4, "ngIf"], ["type", "number", "name", "phone", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["phone", "ngModel"], [1, "btn", "btn-primary", "mr-2", 2, "margin-left", "40%", 3, "disabled"], [1, "btn", "btn-danger", 3, "click"], [1, "form-text", "text-danger"], [4, "ngIf"], ["type", "password", "name", "password", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "password", "name", "confirmPassword", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"]], template: function AddAdminComponent_Template(rf, ctx) { if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddAdminComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.formSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAdminComponent_Template_input_ngModelChange_17_listener($event) { return ctx.member.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddAdminComponent_div_19_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAdminComponent_Template_input_ngModelChange_26_listener($event) { return ctx.member.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddAdminComponent_div_28_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAdminComponent_Template_input_ngModelChange_35_listener($event) { return ctx.member.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddAdminComponent_div_37_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddAdminComponent_div_38_Template, 9, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AddAdminComponent_div_39_Template, 9, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAdminComponent_Template_input_ngModelChange_46_listener($event) { return ctx.member.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AddAdminComponent_div_48_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAdminComponent_Template_a_click_52_listener() { return ctx.backClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.id == null ? "ADD " : "UPDATE ", " Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0))("ngModel", ctx.member.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0))("ngModel", ctx.member.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0))("ngModel", ctx.member.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("ngModel", ctx.member.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.id == null ? "SAVE" : "UPDATE");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFzdGVyL2FkbWluL2FkZC1hZG1pbi9hZGQtYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-admin',
                templateUrl: './add-admin.component.html',
                styleUrls: ['./add-admin.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "GGwj":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidemenu/sidemenu.component.ts ***!
  \******************************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/app-urls */ "Rg0J");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");






function SidemenuComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Upload Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidemenuComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upload Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SidemenuComponent {
    constructor() {
        this.role = '';
        this.id = !!localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'))._id;
    }
    ngOnInit() {
        this.getRoleDetails();
    }
    getRoleDetails() {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["actionUrl"]._getRoleById + this.id, {})
            .then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.type == "success") {
                this.role = response.data.data;
            }
            else {
                this.role = 'Client';
            }
            // else if(this.baseService.checkToken(response.data.message , response.data.status))
            // {
            // }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
}
SidemenuComponent.ɵfac = function SidemenuComponent_Factory(t) { return new (t || SidemenuComponent)(); };
SidemenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidemenuComponent, selectors: [["app-sidemenu"]], decls: 4, vars: 2, consts: [[1, "side-menu"], [4, "ngIf", "ngIfElse"], ["other", ""], ["routerLinkActive", "sactive"], ["routerLink", "/dashboard"], ["id", "sidemenudopdown", 1, "accordion"], [1, "card"], ["id", "m0", 1, "card-header"], [1, "mb-0"], ["type", "button", "data-toggle", "collapse", "data-target", "#cm0", "aria-expanded", "true", "aria-controls", "cm0", 1, "btn", "btn-link", "btn-block"], ["aria-hidden", "true", 1, "fa", "fa-angle-right", "float-right"], ["id", "cm0", "aria-labelledby", "m0", "data-parent", "#sidemenudopdown", 1, "collapse"], [1, "card-body"], ["routerLink", "/view-admins"], ["aria-hidden", "true", 1, "fa", "fa-circle", "pr-1"], ["routerLink", "/view-client"], ["id", "m1", 1, "card-header"], [1, "mb-1"], ["type", "button", "data-toggle", "collapse", "data-target", "#cm1", "aria-expanded", "true", "aria-controls", "cm1", 1, "btn", "btn-link", "btn-block"], ["id", "cm1", "aria-labelledby", "m1", "data-parent", "#sidemenudopdown", 1, "collapse"], ["routerLink", "/view-file"]], template: function SidemenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidemenuComponent_ul_1_Template, 36, 0, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidemenuComponent_ng_template_2_Template, 16, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role == "Admin")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%] {\n  line-height: 16px !important;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%] {\n  border-top: 7px solid #adadad !important;\n  border-left: 7px solid transparent !important;\n  border-right: 7px solid transparent !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:before {\n  background: transparent !important;\n  border-radius: 50px !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:before {\n  background: transparent !important;\n  border-radius: 50px !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:after {\n  background-color: #111010 !important;\n  border-color: #111010 !important;\n  transform: rotate(0deg) scale(1) !important;\n  border-radius: 50px;\n  width: 7px !important;\n  height: 7px !important;\n  margin-top: -5px !important;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0);\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #111010;\n}\n.ng2-smart-actions[_ngcontent-%COMP%] {\n  color: #111010 !important;\n}\n.table[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #111010 !important;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background-color: #111010;\n  color: #fff;\n}\n.table[_ngcontent-%COMP%]   .table-special-header[_ngcontent-%COMP%] {\n  background-color: #fdc000;\n}\n.table[_ngcontent-%COMP%]   .table-total[_ngcontent-%COMP%] {\n  background-color: #ed3238;\n  color: #fff;\n}\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0% !important;\n}\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0% !important;\n}\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1px 10px !important;\n}\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: inline-block;\n  min-width: 1.5em;\n  padding: 0em 0.5em !important;\n  margin-left: 2px;\n  text-align: center;\n  text-decoration: none;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: hidden !important;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #f9fafc;\n  color: #343a40;\n  font-family: \"Poppins\", sans-serif;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.text-blue[_ngcontent-%COMP%] {\n  color: #111010;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #ed3238;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #13aa92;\n}\n.dropdown-list[_ngcontent-%COMP%] {\n  z-index: 9;\n}\n.crsr-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.overall-ht-box[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.card-min-ht[_ngcontent-%COMP%] {\n  min-height: 70vh;\n}\nchart-legend[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  transform: translateY(-50%);\n}\n.page-content-header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 25px 25px 25px 25px;\n}\n.page-content-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.page-content-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span.hd-date[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #ed3238;\n  position: relative;\n  top: 7px;\n}\n.page-content-body[_ngcontent-%COMP%] {\n  padding: 0px 15px 15px 15px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 0;\n}\n.card.overall-contentblock[_ngcontent-%COMP%] {\n  box-shadow: 1px 5px 24px 0px rgba(68, 102, 242, 0.1);\n  margin-bottom: 25px;\n}\n.card.overall-contentblock[_ngcontent-%COMP%]   .overall-content-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 25px 25px 0 25px;\n  margin: 0;\n  font-weight: 800;\n}\n.card.overall-contentblock[_ngcontent-%COMP%]   .overall-content-body[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n}\n.card.overall-contentblock[_ngcontent-%COMP%]   .overall-content-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.card.widget-block[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  border: 0;\n  color: #fff;\n  box-shadow: 0px 0 6px 0px rgba(4, 0, 0, 0.2);\n  transition: all 0.3s ease;\n}\n.card.widget-block.widget-block-1[_ngcontent-%COMP%] {\n  background-color: #ffbc58;\n}\n.card.widget-block.widget-block-2[_ngcontent-%COMP%] {\n  background-color: #13c9ca;\n}\n.card.widget-block.widget-block-3[_ngcontent-%COMP%] {\n  background-color: #ff8084;\n}\n.card.widget-block.widget-block-4[_ngcontent-%COMP%] {\n  background-color: #a5a5a5;\n}\n.card.widget-block[_ngcontent-%COMP%]   .widget-text[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.card.widget-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n}\n.total-sites[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-bottom: 15px;\n}\n.total-sites[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  font-weight: 600;\n  padding-right: 25px;\n  font-size: 16px;\n  position: relative;\n}\n.total-sites[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"|\";\n  position: absolute;\n  right: 10px;\n  bottom: 2px;\n}\n.total-sites[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 0;\n    display: contents;\n  }\n\n  .page-body.pgbodyhalf[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0px !important;\n  }\n\n  .page-sidebar.pgsidebarshow[_ngcontent-%COMP%] {\n    margin-left: -250px !important;\n  }\n  .page-sidebar.pgsidebarhide[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n\n  .side-menu[_ngcontent-%COMP%] {\n    z-index: 1;\n  }\n}\n.star[_ngcontent-%COMP%] {\n  color: red;\n  margin-left: 1px;\n  margin-right: 1px;\n}\n.side-menu[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 100vh;\n  background: black;\n  overflow-y: auto;\n  background: linear-gradient(34deg, black 0%, black 100%);\n  box-shadow: 2px 0 5px 0px rgba(0, 0, 0, 0.07);\n  padding-top: 60px;\n  position: fixed;\n  z-index: 1;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.sactive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #86e9ec;\n  color: #343a40;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 15px;\n  color: #fff;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #86e9ec;\n  color: #343a40;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #sidemenudopdown[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-radius: 0;\n  border: 0;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #sidemenudopdown[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n  border-radius: 0;\n  border: 0;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #sidemenudopdown[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:hover {\n  background-color: #86e9ec;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #sidemenudopdown[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:hover   .btn-link[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #sidemenudopdown[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: left;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #sidemenudopdown[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #sidemenudopdown[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 0;\n  font-size: 14px;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #sidemenudopdown[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n.side-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   #sidemenudopdown[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fa-circle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ed3238;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL19yYWRpb2J0bi5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlbWVudS9zaWRlbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL19idXR0b25zLnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvYmFzZS9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fdGFibGVzLnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvYmFzZS9fdGhlbWUuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9iYXNlL19taXhpbnMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9iYXNlL19yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVRLHdHQUFBO0FBQ0EscUhBQUE7QUFIUiw4RUFBQTtBQ0NJO0VBQ0ksNEJBQUE7QUNHUjtBREZRO0VBQ0ksZUFBQTtBQ0laO0FERlE7RUFDSSx3Q0FBQTtFQUNBLDZDQUFBO0VBQ0EsOENBQUE7QUNJWjtBREVJO0VBQ0kscUJBQUE7QUNDUjtBREdZO0VBQ0ksa0NBQUE7RUFDQSw4QkFBQTtBQ0RoQjtBRE1nQjtFQUNJLGtDQUFBO0VBQ0EsOEJBQUE7QUNKcEI7QURNZ0I7RUFDSSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0pwQjtBQ2pDSTtFQUNJLDZDQUFBO0VBQ0EscUJBQUE7QURvQ1I7QUNoQ0E7RUFDSSx5QkNGRTtBRnFDTjtBRzNDQTtFQUNJLHlCQUFBO0FIOENKO0FHM0NBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FIOENKO0FHNUNRO0VBQ0kseUJBQUE7QUg4Q1o7QUczQ0k7O0VBRUksZ0JBQUE7RUFDQSxzQkFBQTtBSDZDUjtBRzNDSTtFQUNJLHlCRFpGO0VDYUUsV0RkRDtBRjJEUDtBRzNDSTtFQUNJLHlCRGRBO0FGMkRSO0FHM0NJO0VBQ0kseUJEbEJIO0VDbUJHLFdEckJEO0FGa0VQO0FHeENBO0VBQ0Esc0JBQUE7QUgyQ0E7QUd4Q0E7RUFDSSxzQkFBQTtBSDJDSjtBR3pDQTtFQUNJLDRCQUFBO0FINENKO0FHeENBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUgyQ0o7QUd4Q0E7RUFDQyw2QkFBQTtBSDJDRDtBSWpHQTtFQUNJLHlCRkdRO0VFRlIsY0ZZTztFRVhQLGtDRkRLO0FGcUdUO0FJakdBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBSm9HSjtBSWhHSTtFQUNJLHFCQUFBO0FKbUdSO0FJL0ZBOzs7Ozs7Ozs7Ozs7RUFZSSxpQ0Y3Qkk7QUYrSFI7QUkvRkE7RUFDSSxjRjVCRTtBRjhITjtBSS9GQTtFQUNJLGNGL0JDO0FGaUlMO0FJL0ZBO0VBQ0ksY0ZqQ0c7QUZtSVA7QUk5RkE7RUFDSSxVQUFBO0FKaUdKO0FJOUZBO0VBQ0ksZUFBQTtBSmlHSjtBSTlGQTtFQUNJLGFBQUE7QUppR0o7QUk5RkE7RUFDSSxnQkFBQTtBSmlHSjtBSTlGQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBSmlHSjtBSTlGQTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtBSmlHSjtBSWhHSTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FKa0dSO0FJaEdZO0VBQ0ksZUFBQTtFQUNBLGNGeEVYO0VFeUVXLGtCQUFBO0VBQ0EsUUFBQTtBSmtHaEI7QUk1RkE7RUFDSSwyQkFBQTtBSitGSjtBSTVGQTtFQUNJLFNBQUE7QUorRko7QUk5Rkk7RUNuRkEsb0RBQUE7RURxRkksbUJBQUE7QUprR1I7QUloR1k7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBSmtHaEI7QUkvRlE7RUFDSSw0QkFBQTtBSmlHWjtBSWhHWTtFQUNJLGdCQUFBO0FKa0doQjtBSTlGSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdGNUdEO0VHS0gsNENBQUE7RUFTQSx5QkFBQTtBTHNNSjtBSXJHUTtFQUNJLHlCQUFBO0FKdUdaO0FJckdRO0VBQ0kseUJBQUE7QUp1R1o7QUlyR1E7RUFDSSx5QkFBQTtBSnVHWjtBSXJHUTtFQUNJLHlCQUFBO0FKdUdaO0FJckdRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUp1R1o7QUlyR1E7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUp1R1o7QUlsR0E7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0FKcUdKO0FJcEdJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUpzR1I7QUlyR1E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBSnVHWjtBSXBHWTtFQUNJLFdBQUE7QUpzR2hCO0FLL05TO0VDakNEO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFTm9RVjs7RU05UE07SUFDSSxXQUFBO0lBQ0EsMkJBQUE7RU5pUVY7O0VNN1BGO0lBQ0ksOEJBQUE7RU5nUUY7RU05UEY7SUFDSSwyQkFBQTtFTmdRRjs7RU03UEU7SUFDSSxVQUFBO0VOZ1FOO0FBQ0Y7QUY5UUE7RUFFSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRStRSjtBQS9SQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJFTUc7RUZMSCxnQkFBQTtFQUNBLHdEQUFBO0VLSUEsNkNBQUE7RUxBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBa1NKO0FBOVJnQjtFQUNJLHlCRUxQO0VGTU8sY0VKVDtBRm9TWDtBQTdSWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdFbkJUO0FGa1RQO0FBOVJnQjtFQUNJLHlCRWRQO0VGZU8sY0ViVDtBRjZTWDtBQTVSZ0I7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQThScEI7QUE3Um9CO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBK1J4QjtBQTlSd0I7RUFDSSx5QkU3QmY7QUY2VGI7QUEvUjRCO0VBQ0ksY0U3QnJCO0FGOFRYO0FBOVJ3QjtFQUNJLFdFMUNyQjtFRjJDcUIsZ0JBQUE7QUFnUzVCO0FBL1I0QjtFQUNJLHFCQUFBO0FBaVNoQztBQTdSb0I7RUFDSSx1QkU1Q2pCO0VGNkNpQixVQUFBO0VBQ0EsZUFBQTtBQStSeEI7QUE1UmdDO0VBQ0ksY0FBQTtBQThScEM7QUE3Um9DO0VBQ0ksZUFBQTtFQUNBLGNFekRuQztBRndWTCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGVtZW51L3NpZGVtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwOzQwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCAnLi9hc3NldHMvc2Nzcy9iYXNlL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4vYXNzZXRzL3Njc3MvYmFzZS9taXhpbnMnO1xyXG5AaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvcmFkaW9idG4nO1xyXG5AaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvYnV0dG9ucyc7XHJcbkBpbXBvcnQgJy4vYXNzZXRzL3Njc3MvY29tcG9uZW50cy90YWJsZXMnO1xyXG5AaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2Jhc2UvdGhlbWUnO1xyXG5AaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2Jhc2UvcmVzcG9uc2l2ZSc7XHJcblxyXG5cclxuLnN0YXJcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDtcclxufVxyXG5cclxuIiwiLm11bHRpc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgIC5kcm9wZG93bi1idG4ge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4IWltcG9ydGFudDtcclxuICAgICAgICAuc2VsZWN0ZWQtaXRlbSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyb3Bkb3duLWRvd24ge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiA3cHggc29saWQgI2FkYWRhZCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucmQtYnRuIHtcclxuICAgIC5kcm9wZG93bi1saXN0IHtcclxuICAgICAgICB6LWluZGV4OiAxIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IHtcclxuICAgICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XStkaXYge1xyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgICAgICAgICAgICY6Y2hlY2tlZCtkaXYge1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRibHVlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogN3B4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDdweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCtkaXYge1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcFwiKTtcbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5zZWxlY3RlZC1pdGVtIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLWRvd24ge1xuICBib3JkZXItdG9wOiA3cHggc29saWQgI2FkYWRhZCAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5yZC1idG4gLmRyb3Bkb3duLWxpc3Qge1xuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG59XG4ucmQtYnRuIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdICsgZGl2OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbn1cbi5yZC1idG4gLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGRpdjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG59XG4ucmQtYnRuIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBkaXY6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMDEwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzExMTAxMCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogN3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogN3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMDEwO1xufVxuXG4ubmcyLXNtYXJ0LWFjdGlvbnMge1xuICBjb2xvcjogIzExMTAxMCAhaW1wb3J0YW50O1xufVxuXG4udGFibGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50YWJsZSB0aCBhIHtcbiAgY29sb3I6ICMxMTEwMTAgIWltcG9ydGFudDtcbn1cbi50YWJsZSB0aCxcbi50YWJsZSB0ZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4udGFibGUgLnRhYmxlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTEwMTA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnRhYmxlIC50YWJsZS1zcGVjaWFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGMwMDA7XG59XG4udGFibGUgLnRhYmxlLXRvdGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMzIzODtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfbGVuZ3RoIHNlbGVjdCB7XG4gIHBhZGRpbmc6IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0IHtcbiAgcGFkZGluZzogMCUgIWltcG9ydGFudDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRib2R5IHRkIHtcbiAgcGFkZGluZzogMXB4IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19wYWdpbmF0ZSAucGFnaW5hdGVfYnV0dG9uIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEuNWVtO1xuICBwYWRkaW5nOiAwZW0gMC41ZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZjO1xuICBjb2xvcjogIzM0M2E0MDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuLmgxLFxuLmgyLFxuLmgzLFxuLmg0LFxuLmg1LFxuLmg2IHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogIzExMTAxMDtcbn1cblxuLnRleHQtcmVkIHtcbiAgY29sb3I6ICNlZDMyMzg7XG59XG5cbi50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMxM2FhOTI7XG59XG5cbi5kcm9wZG93bi1saXN0IHtcbiAgei1pbmRleDogOTtcbn1cblxuLmNyc3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm92ZXJhbGwtaHQtYm94IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNhcmQtbWluLWh0IHtcbiAgbWluLWhlaWdodDogNzB2aDtcbn1cblxuY2hhcnQtbGVnZW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5wYWdlLWNvbnRlbnQtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI1cHggMjVweCAyNXB4IDI1cHg7XG59XG4ucGFnZS1jb250ZW50LWhlYWRlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wYWdlLWNvbnRlbnQtaGVhZGVyIGgzIHNwYW4uaGQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNlZDMyMzg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA3cHg7XG59XG5cbi5wYWdlLWNvbnRlbnQtYm9keSB7XG4gIHBhZGRpbmc6IDBweCAxNXB4IDE1cHggMTVweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDA7XG59XG4uY2FyZC5vdmVyYWxsLWNvbnRlbnRibG9jayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDVweCAyNHB4IDBweCByZ2JhKDY4LCAxMDIsIDI0MiwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggNXB4IDI0cHggMHB4IHJnYmEoNjgsIDEwMiwgMjQyLCAwLjEpO1xuICBib3gtc2hhZG93OiAxcHggNXB4IDI0cHggMHB4IHJnYmEoNjgsIDEwMiwgMjQyLCAwLjEpO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmNhcmQub3ZlcmFsbC1jb250ZW50YmxvY2sgLm92ZXJhbGwtY29udGVudC1oZWFkZXIgaDQge1xuICBwYWRkaW5nOiAyNXB4IDI1cHggMCAyNXB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uY2FyZC5vdmVyYWxsLWNvbnRlbnRibG9jayAub3ZlcmFsbC1jb250ZW50LWJvZHkge1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xufVxuLmNhcmQub3ZlcmFsbC1jb250ZW50YmxvY2sgLm92ZXJhbGwtY29udGVudC1ib2R5IGg1IHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5jYXJkLndpZGdldC1ibG9jayB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMCA2cHggMHB4IHJnYmEoNCwgMCwgMCwgMC4yKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMCA2cHggMHB4IHJnYmEoNCwgMCwgMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogMHB4IDAgNnB4IDBweCByZ2JhKDQsIDAsIDAsIDAuMik7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jYXJkLndpZGdldC1ibG9jay53aWRnZXQtYmxvY2stMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJjNTg7XG59XG4uY2FyZC53aWRnZXQtYmxvY2sud2lkZ2V0LWJsb2NrLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNjOWNhO1xufVxuLmNhcmQud2lkZ2V0LWJsb2NrLndpZGdldC1ibG9jay0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODA4NDtcbn1cbi5jYXJkLndpZGdldC1ibG9jay53aWRnZXQtYmxvY2stNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWE1YTU7XG59XG4uY2FyZC53aWRnZXQtYmxvY2sgLndpZGdldC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNhcmQud2lkZ2V0LWJsb2NrIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udG90YWwtc2l0ZXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnRvdGFsLXNpdGVzIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRvdGFsLXNpdGVzIGxpOmFmdGVyIHtcbiAgY29udGVudDogXCJ8XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMnB4O1xufVxuLnRvdGFsLXNpdGVzIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgfVxuXG4gIC5wYWdlLWJvZHkucGdib2R5aGFsZiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBhZ2Utc2lkZWJhci5wZ3NpZGViYXJzaG93IHtcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBhZ2Utc2lkZWJhci5wZ3NpZGViYXJoaWRlIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2lkZS1tZW51IHtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG4uc3RhciB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xufVxuXG4uc2lkZS1tZW51IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM0ZGVnLCBibGFjayAwJSwgYmxhY2sgMTAwJSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDAgNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCAwIDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgYm94LXNoYWRvdzogMnB4IDAgNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xufVxuLnNpZGUtbWVudSB1bCBsaS5zYWN0aXZlIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZlOWVjO1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbi5zaWRlLW1lbnUgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNpZGUtbWVudSB1bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2ZTllYztcbiAgY29sb3I6ICMzNDNhNDA7XG59XG4uc2lkZS1tZW51IHVsIGxpICNzaWRlbWVudWRvcGRvd24gLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAwO1xufVxuLnNpZGUtbWVudSB1bCBsaSAjc2lkZW1lbnVkb3Bkb3duIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDA7XG59XG4uc2lkZS1tZW51IHVsIGxpICNzaWRlbWVudWRvcGRvd24gLmNhcmQgLmNhcmQtaGVhZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2ZTllYztcbn1cbi5zaWRlLW1lbnUgdWwgbGkgI3NpZGVtZW51ZG9wZG93biAuY2FyZCAuY2FyZC1oZWFkZXI6aG92ZXIgLmJ0bi1saW5rIHtcbiAgY29sb3I6ICMzNDNhNDA7XG59XG4uc2lkZS1tZW51IHVsIGxpICNzaWRlbWVudWRvcGRvd24gLmNhcmQgLmNhcmQtaGVhZGVyIC5idG4tbGluayB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnNpZGUtbWVudSB1bCBsaSAjc2lkZW1lbnVkb3Bkb3duIC5jYXJkIC5jYXJkLWhlYWRlciAuYnRuLWxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2lkZS1tZW51IHVsIGxpICNzaWRlbWVudWRvcGRvd24gLmNhcmQgLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2lkZS1tZW51IHVsIGxpICNzaWRlbWVudWRvcGRvd24gLmNhcmQgLmNhcmQtYm9keSB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2lkZS1tZW51IHVsIGxpICNzaWRlbWVudWRvcGRvd24gLmNhcmQgLmNhcmQtYm9keSB1bCBsaSBhIC5mYS1jaXJjbGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZWQzMjM4O1xufSIsIi5idG4ge1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDApO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG59IiwiLy8gZm9udHNcclxuJG51bml0bzonTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuJHBvcHBpbnM6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4vLyBjb2xvclxyXG4kbGlnaHQtZ3JleTojZjlmYWZjO1xyXG4kd2hpdGU6I2ZmZjtcclxuJGJsdWU6cmdiKDE3LCAxNiwgMTYpO1xyXG4kcmVkOiNlZDMyMzg7XHJcbiR5ZWxsb3c6I2ZkYzAwMDtcclxuJGdyZWVuOiMxM2FhOTI7XHJcbiRncmFkMTpibGFjaztcclxuJGdyYWQyOmJsYWNrO1xyXG4kaG92ZXItY29sb3I6cmdiKDEzNCwgMjMzLCAyMzYpO1xyXG4vLyBzaXRlXHJcbiRiYXNlLXRleHQ6IzM0M2E0MDsiLCIubmcyLXNtYXJ0LWFjdGlvbnMge1xyXG4gICAgY29sb3I6ICRibHVlIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRoIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXNwZWNpYWwtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXRvdGFsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX2xlbmd0aCBzZWxlY3QgIHtcclxucGFkZGluZzogMCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX2ZpbHRlciBpbnB1dHtcclxuICAgIHBhZGRpbmc6IDAlIWltcG9ydGFudDtcclxufVxyXG50YWJsZS5kYXRhVGFibGUgdGJvZHkgdGQge1xyXG4gICAgcGFkZGluZzogMXB4IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfcGFnaW5hdGUgLnBhZ2luYXRlX2J1dHRvbiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxLjVlbTtcclxuICAgIHBhZGRpbmc6IDAuMGVtIDAuNWVtIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgO1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiBvdmVyZmxvdy14OiBoaWRkZW4haW1wb3J0YW50O1xyXG59ICIsImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiAgICBjb2xvcjogJGJhc2UtdGV4dDtcclxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG4uaDEsXHJcbi5oMixcclxuLmgzLFxyXG4uaDQsXHJcbi5oNSxcclxuLmg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAkbnVuaXRvO1xyXG59XHJcblxyXG4udGV4dC1ibHVlIHtcclxuICAgIGNvbG9yOiAkYmx1ZTtcclxufVxyXG5cclxuLnRleHQtcmVkIHtcclxuICAgIGNvbG9yOiAkcmVkO1xyXG59XHJcblxyXG4udGV4dC1ncmVlbiB7XHJcbiAgICBjb2xvcjogJGdyZWVuO1xyXG59XHJcblxyXG4vLyBvdmVyYWxsLXN0eWxlcyBzdGFydFxyXG4uZHJvcGRvd24tbGlzdCB7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG4uY3Jzci1wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm92ZXJhbGwtaHQtYm94IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jYXJkLW1pbi1odCB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xyXG59XHJcblxyXG5jaGFydC1sZWdlbmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRlbnQtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcclxuICAgIGgzIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAmLmhkLWRhdGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnBhZ2UtY29udGVudC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4IDE1cHggMTVweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgJi5vdmVyYWxsLWNvbnRlbnRibG9jayB7XHJcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdyggMXB4LCA1cHgsIDI0cHgsIDBweCwgcmdiYSg2OCwgMTAyLCAyNDIsIDAuMSkpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgLm92ZXJhbGwtY29udGVudC1oZWFkZXIge1xyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDI1cHggMCAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmFsbC1jb250ZW50LWJvZHkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi53aWRnZXQtYmxvY2sge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBAaW5jbHVkZSBib3gtc2hhZG93KCAwcHgsIDAsIDZweCwgMHB4LCByZ2JhKDQsIDAsIDAsIDAuMikpO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjNzLCBlYXNlKTtcclxuICAgICAgICAmLndpZGdldC1ibG9jay0xIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmM1ODtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi53aWRnZXQtYmxvY2stMiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxM2M5Y2E7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYud2lkZ2V0LWJsb2NrLTMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MDg0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLndpZGdldC1ibG9jay00IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTVhNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndpZGdldC10ZXh0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b3RhbC1zaXRlcyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJ8XCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBvdmVyYWxsLXN0eWxlcyBlbmQiLCIvLyBib3hzaGFkb3dcclxuQG1peGluIGJveC1zaGFkb3coJG9mZnNldC14LCAkb2Zmc2V0LXksICRibHVyLXJhZGl1cywgJHNwcmVhZC1yYWRpdXMsICRjb2xvciwgJGluc2V0OiBmYWxzZSkge1xyXG4gICAgQGlmICRpbnNldCB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRvZmZzZXQteCAkb2Zmc2V0LXkgJGJsdXItcmFkaXVzICRzcHJlYWQtcmFkaXVzICRjb2xvcjtcclxuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgJG9mZnNldC14ICRvZmZzZXQteSAkYmx1ci1yYWRpdXMgJHNwcmVhZC1yYWRpdXMgJGNvbG9yO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgJG9mZnNldC14ICRvZmZzZXQteSAkYmx1ci1yYWRpdXMgJHNwcmVhZC1yYWRpdXMgJGNvbG9yO1xyXG4gICAgfVxyXG4gICAgQGVsc2Uge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkb2Zmc2V0LXggJG9mZnNldC15ICRibHVyLXJhZGl1cyAkc3ByZWFkLXJhZGl1cyAkY29sb3I7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICRvZmZzZXQteCAkb2Zmc2V0LXkgJGJsdXItcmFkaXVzICRzcHJlYWQtcmFkaXVzICRjb2xvcjtcclxuICAgIGJveC1zaGFkb3c6ICRvZmZzZXQteCAkb2Zmc2V0LXkgJGJsdXItcmFkaXVzICRzcHJlYWQtcmFkaXVzICRjb2xvcjtcclxuICAgIH1cclxufVxyXG4vLyB0cmFuc2l0aW9uXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLXByb3BlcnR5LCAkdHJhbnNpdGlvbi10aW1lLCAkbWV0aG9kKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLXByb3BlcnR5ICR0cmFuc2l0aW9uLXRpbWUgJG1ldGhvZDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tcHJvcGVydHkgJHRyYW5zaXRpb24tdGltZSAkbWV0aG9kO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLXByb3BlcnR5ICR0cmFuc2l0aW9uLXRpbWUgJG1ldGhvZDtcclxuICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLXByb3BlcnR5ICR0cmFuc2l0aW9uLXRpbWUgJG1ldGhvZDtcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLXByb3BlcnR5ICR0cmFuc2l0aW9uLXRpbWUgJG1ldGhvZDtcclxufVxyXG4vLyByZXNwb25zaXZlIFxyXG4kYnJlYWtwb2ludHM6IChcclxuICAgIHhzOiA1NzZweCxcclxuICAgIHNtOiA3NjhweCxcclxuICAgIG1kOiA5OTJweCxcclxuICAgIGxnOiAxMjAwcHhcclxuKTtcclxuLy8gUkVTUE9ORCBCRUxPV1xyXG4vLyBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7fVxyXG5AbWl4aW4gcmVzcG9uZC1iZWxvdygkYnJlYWtwb2ludCkge1xyXG4gICAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxyXG4gICAgIFx0ICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XHJcbiAgICAgICAgXHQvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXHJcbiAgICAgICAgXHRAbWVkaWEgKG1heC13aWR0aDogKCRicmVha3BvaW50LXZhbHVlIC0gMSkpIHtcclxuICAgICAgICAgICAgXHRcdEBjb250ZW50O1xyXG4gICAgICAgXHQgfVxyXG4gICAgICAgICAgICAgIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cclxuICAgIH1cclxuICAgIEBlbHNlIHtcclxuICAgICAgICAvLyBMb2cgYSB3YXJuaW5nLlxyXG4gICAgICAgIEB3YXJuICdJbnZhbGlkIGJyZWFrcG9pbnQ6ICN7JGJyZWFrcG9pbnR9Lic7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiByZXNwb25kLWJldHdlZW4oJGxvd2VyLCAkdXBwZXIpIHtcclxuICAgIC8vIElmIGJvdGggdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cyBleGlzdCBpbiB0aGUgbWFwLlxyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyKSBhbmQgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIpIHtcclxuICAgICAgICAvLyBHZXQgdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cy5cclxuICAgICAgICAkbG93ZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XHJcbiAgICAgICAgJHVwcGVyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xyXG4gICAgICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGxvd2VyLWJyZWFrcG9pbnQpIGFuZCAobWF4LXdpZHRoOiAoJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgLy8gSWYgb25lIG9yIGJvdGggb2YgdGhlIGJyZWFrcG9pbnRzIGRvbid0IGV4aXN0LlxyXG4gICAgfVxyXG4gICAgQGVsc2Uge1xyXG5cclxuICAgICAgICAvLyBJZiBsb3dlciBicmVha3BvaW50IGlzIGludmFsaWQuXHJcbiAgICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlcikgPT0gZmFsc2UpIHtcclxuICAgIFxyXG4gICAgICAgICAgLy8gTG9nIGEgd2FybmluZy5cclxuICAgICAgICAgIEB3YXJuICdZb3VyIGxvd2VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JGxvd2VyfS4nO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIElmIHVwcGVyIGJyZWFrcG9pbnQgaXMgaW52YWxpZC5cclxuICAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSA9PSBmYWxzZSkge1xyXG4gICAgXHJcbiAgICAgICAgICAvLyBMb2cgYSB3YXJuaW5nLlxyXG4gICAgICAgICAgQHdhcm4gJ1lvdXIgdXBwZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbn1cclxuIiwiQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhtZCkge1xyXG4gICAgLy8gaGVhZGVyXHJcbiAgICAubmF2YmFye1xyXG4gICAgICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzaWRlbWVudVxyXG4gICAgLnBhZ2UtYm9keXtcclxuICAgICAgICAmLnBnYm9keWhhbGZ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDowcHghaW1wb3J0YW50IDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFnZS1zaWRlYmFye1xyXG4mLnBnc2lkZWJhcnNob3d7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4IWltcG9ydGFudDtcclxufVxyXG4mLnBnc2lkZWJhcmhpZGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4IWltcG9ydGFudDtcclxufVxyXG4gICAgfVxyXG4gICAgLnNpZGUtbWVudXtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidemenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidemenu',
                templateUrl: './sidemenu.component.html',
                styleUrls: ['./sidemenu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Hj+p":
/*!**********************************************************!*\
  !*** ./src/app/shared/service/shared-service.service.ts ***!
  \**********************************************************/
/*! exports provided: SharedServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedServiceService", function() { return SharedServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class SharedServiceService {
    // ChangeVal(val)
    // {
    //   console.log(!val);
    //   console.log("Value Change");
    //  return this.isShowSideMenu=true
    // }
    // toggle side menu end
    constructor() {
        this.isShowSideMenu = false;
    }
    // toggle side menu start
    setter() {
        console.log(!this.isShowSideMenu);
        return this.isShowSideMenu = !this.isShowSideMenu;
    }
    getter() {
        return this.isShowSideMenu;
    }
}
SharedServiceService.ɵfac = function SharedServiceService_Factory(t) { return new (t || SharedServiceService)(); };
SharedServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedServiceService, factory: SharedServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HzFZ":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_app_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/app-urls */ "Rg0J");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth-service.service */ "UPSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");











function LoginComponent_div_5_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Role is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_5_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_5_div_18_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.role.errors.required);
} }
function LoginComponent_div_5_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Id is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_5_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_5_div_21_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.required);
} }
function LoginComponent_div_5_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_5_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_5_div_24_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function LoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_div_5_Template_form_submit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.adminLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_5_div_18_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_div_5_div_21_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_div_5_div_24_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Don't have account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_5_Template_span_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.loginStatus = !ctx_r11.loginStatus; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Create New One");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_5_Template_p_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.forgotStatus = !ctx_r12.forgotStatus; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.role.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.submitted && ctx_r0.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.submitted && ctx_r0.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.password.errors);
} }
function LoginComponent_div_6_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Id is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_6_div_8_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.h.email.errors.required);
} }
function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_div_6_Template_form_submit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.forgotPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_6_div_8_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.forgotForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.submitted && ctx_r1.h.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.h.email.errors);
} }
function LoginComponent_div_7_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name Id is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_7_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_7_div_8_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.g.firstName.errors.required);
} }
function LoginComponent_div_7_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_7_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_7_div_11_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.g.lastName.errors.required);
} }
function LoginComponent_div_7_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " user name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_7_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_7_div_14_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.g.userName.errors.required);
} }
function LoginComponent_div_7_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Id is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_7_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_7_div_17_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.g.email.errors.required);
} }
function LoginComponent_div_7_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_7_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_7_div_20_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.g.password.errors.required);
} }
function LoginComponent_div_7_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_7_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_7_div_23_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.g.confirmPassword.errors.required);
} }
function LoginComponent_div_7_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " phone number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_7_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_7_div_26_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.g.phone.errors.required);
} }
function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_div_7_Template_form_submit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.memberReg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_7_div_8_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_div_7_div_11_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_7_div_14_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_7_div_17_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_div_7_div_20_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_div_7_div_23_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_div_7_div_26_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Already have an account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_7_Template_span_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.loginStatus = !ctx_r33.loginStatus; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Login In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r2.submitted && ctx_r2.g.firstName.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.g.firstName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx_r2.submitted && ctx_r2.g.lastName.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.g.lastName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx_r2.submitted && ctx_r2.g.userName.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.g.userName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx_r2.submitted && ctx_r2.g.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.g.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx_r2.submitted && ctx_r2.g.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.g.password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx_r2.submitted && ctx_r2.g.confirmPassword.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.g.confirmPassword.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx_r2.submitted && ctx_r2.g.phone.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.submitted && ctx_r2.g.phone.errors);
} }
class LoginComponent {
    constructor(formBuilder, _http, authService, router, snackBar) {
        this.formBuilder = formBuilder;
        this._http = _http;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.forgotStatus = false;
        this.loginStatus = true;
        this.submitted = false;
        this.createLoginForm();
        this.createRegisterForm();
        this.createforgotPasswordForm();
    }
    // loginModelObj: LoginModel = new LoginModel();
    createLoginForm() {
        this.loginForm = this.formBuilder.group({
            role: ['Client', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    createforgotPasswordForm() {
        this.forgotForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    createRegisterForm() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    get f() {
        return this.loginForm.controls;
    }
    get g() {
        return this.registerForm.controls;
    }
    get h() {
        return this.forgotForm.controls;
    }
    forgotPassword() {
        this.submitted = true;
        if (this.forgotForm.invalid) {
            return;
        }
        // this.authService.signinUser(this.email.value, this.password.value);
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_3__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_3__["actionUrl"]._forgotPassword, {
            email: this.forgotForm.get("email").value,
        })
            .then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.type == "success") {
                this.openSnackBar(response.data.message, '5000', 'close');
                this.loginStatus = true;
                this.forgotStatus = false;
                this.submitted = false;
                this.loginForm.controls['role'].setValue('Client');
            }
            else {
                console.log("Error block");
                this.openSnackBar(response.data.message, '5000', 'close');
                // this.msg=response.data.message;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    ngOnInit() {
    }
    adminLogin() {
        // this.router.navigate(['/dashboard']);
        console.log(this.loginForm);
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        // this.authService.signinUser(this.email.value, this.password.value);
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_3__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_3__["actionUrl"]._memberLoginUrl, {
            role: this.loginForm.get("role").value,
            email: this.loginForm.get("email").value,
            password: this.loginForm.get("password").value
        })
            .then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.type == "success") {
                console.log("success block");
                console.log(response.data.token);
                console.log(response.data.data);
                localStorage.setItem('gearUpToken', response.data.token);
                localStorage.setItem('userData', JSON.stringify(response.data.data));
                this.authService.update();
                if (response.data.data.role == 'Admin')
                    this.router.navigate(['/dashboard']);
                else
                    this.router.navigate(['/view-file']);
                //  this.submitted=false;
                //  this.loginForm.reset();
            }
            else {
                console.log("Error block");
                this.openSnackBar(response.data.message, '5000', 'close');
                // this.msg=response.data.message;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    memberReg() {
        // this.router.navigate(['/dashboard']);
        console.log(this.registerForm);
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        // this.authService.signinUser(this.email.value, this.password.value);
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_3__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_3__["actionUrl"]._addMember, {
            role: 'Client',
            firstName: this.registerForm.get("firstName").value,
            lastName: this.registerForm.get("lastName").value,
            email: this.registerForm.get("email").value,
            userName: this.registerForm.get("userName").value,
            password: this.registerForm.get("password").value,
            confirmPassword: this.registerForm.get("confirmPassword").value,
            phone: this.registerForm.get("phone").value
        })
            .then(response => {
            console.log(response);
            if (response.data.code == 201 && response.data.type == "success") {
                this.openSnackBar(response.data.message, '5000', 'close');
                this.loginStatus = true;
                this.submitted = false;
                this.loginForm.controls['role'].setValue('Client');
            }
            else {
                console.log("Error block");
                this.openSnackBar(response.data.message, '5000', 'close');
                // this.msg=response.data.message;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    onReset() {
        this.submitted = false;
        this.loginForm.reset();
    }
    openSnackBar(msg, duration, action) {
        this.snackBar.open(msg, action, {
            duration: duration,
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 8, vars: 3, consts: [[1, "page-wrapper"], [1, "container"], [1, "row", "justify-content-center", "align-items-center", "overall-ht-box"], [1, "col-md-6"], [1, "mb-3", "text-center"], ["class", "card overall-contentblock", 4, "ngIf"], [1, "card", "overall-contentblock"], [1, "overall-content-header"], [1, "card-body"], ["novalidate", "", 1, "form-horizontal", "auth-form", 3, "formGroup", "submit"], [1, "form-group"], [1, "row", "ml-5"], [1, "form-check"], ["type", "radio", "formControlName", "role", "name", "role", "id", "role3", "value", "Client", 1, "form-check-input"], ["for", "role3", 1, "form-check-label"], [1, "col-md-5"], ["type", "radio", "formControlName", "role", "name", "role", "id", "role1", "value", "Admin", "checked", "", 1, "form-check-input"], ["for", "role1", 1, "form-check-label"], [4, "ngIf"], ["required", "", "formControlName", "email", "type", "email", "placeholder", "Email Id", "id", "exampleInputEmail1", 1, "form-control", 3, "ngClass"], ["required", "", "formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [1, "form-button"], [1, "row"], [1, "col-md-8"], [2, "display", "inline"], [1, "h6", "ml-1", 2, "color", "rgb(116, 235, 116)", "cursor", "pointer", 3, "click"], [1, "col-md-4"], [2, "color", "rgb(125, 189, 241)", "cursor", "pointer", 3, "click"], [1, "btn", "float-right", "lgn-btn"], [1, "fa-stack", "fa-lg", "crsr-pointer"], [1, "fa", "fa-circle", "fa-stack-2x", "text-blue"], [1, "fa", "fa-angle-right", "fa-stack-1x", "fa-inverse"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["required", "", "formControlName", "firstName", "type", "text", "placeholder", "First Name", "id", "exampleInputEmail1", 1, "form-control", 3, "ngClass"], ["required", "", "formControlName", "lastName", "type", "text", "placeholder", "Last Name", "id", "exampleInputEmail1", 1, "form-control", 3, "ngClass"], ["required", "", "formControlName", "userName", "type", "text", "placeholder", "Client Username", "id", "exampleInputEmail1", 1, "form-control", 3, "ngClass"], ["required", "", "formControlName", "confirmPassword", "type", "password", "placeholder", "confirmPassword", 1, "form-control", 3, "ngClass"], ["required", "", "formControlName", "phone", "type", "number", "placeholder", "Mobile Number", 1, "form-control", 3, "ngClass"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 39, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 13, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 36, 29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginStatus && !ctx.forgotStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forgotStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginStatus && !ctx.forgotStatus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%] {\n  line-height: 16px !important;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%] {\n  border-top: 7px solid #adadad !important;\n  border-left: 7px solid transparent !important;\n  border-right: 7px solid transparent !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:before {\n  background: transparent !important;\n  border-radius: 50px !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:before {\n  background: transparent !important;\n  border-radius: 50px !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:after {\n  background-color: #111010 !important;\n  border-color: #111010 !important;\n  transform: rotate(0deg) scale(1) !important;\n  border-radius: 50px;\n  width: 7px !important;\n  height: 7px !important;\n  margin-top: -5px !important;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0);\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #111010;\n}\n.ng2-smart-actions[_ngcontent-%COMP%] {\n  color: #111010 !important;\n}\n.table[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #111010 !important;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background-color: #111010;\n  color: #fff;\n}\n.table[_ngcontent-%COMP%]   .table-special-header[_ngcontent-%COMP%] {\n  background-color: #fdc000;\n}\n.table[_ngcontent-%COMP%]   .table-total[_ngcontent-%COMP%] {\n  background-color: #ed3238;\n  color: #fff;\n}\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0% !important;\n}\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0% !important;\n}\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1px 10px !important;\n}\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: inline-block;\n  min-width: 1.5em;\n  padding: 0em 0.5em !important;\n  margin-left: 2px;\n  text-align: center;\n  text-decoration: none;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: hidden !important;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #f9fafc;\n  color: #343a40;\n  font-family: \"Poppins\", sans-serif;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.text-blue[_ngcontent-%COMP%] {\n  color: #111010;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #ed3238;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #13aa92;\n}\n.dropdown-list[_ngcontent-%COMP%] {\n  z-index: 9;\n}\n.crsr-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.overall-ht-box[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.card-min-ht[_ngcontent-%COMP%] {\n  min-height: 70vh;\n}\nchart-legend[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  transform: translateY(-50%);\n}\n.page-content-header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 25px 25px 25px 25px;\n}\n.page-content-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.page-content-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span.hd-date[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #ed3238;\n  position: relative;\n  top: 7px;\n}\n.page-content-body[_ngcontent-%COMP%] {\n  padding: 0px 15px 15px 15px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 0;\n}\n.card.overall-contentblock[_ngcontent-%COMP%] {\n  box-shadow: 1px 5px 24px 0px rgba(68, 102, 242, 0.1);\n  margin-bottom: 25px;\n}\n.card.overall-contentblock[_ngcontent-%COMP%]   .overall-content-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 25px 25px 0 25px;\n  margin: 0;\n  font-weight: 800;\n}\n.card.overall-contentblock[_ngcontent-%COMP%]   .overall-content-body[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n}\n.card.overall-contentblock[_ngcontent-%COMP%]   .overall-content-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.card.widget-block[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  border: 0;\n  color: #fff;\n  box-shadow: 0px 0 6px 0px rgba(4, 0, 0, 0.2);\n  transition: all 0.3s ease;\n}\n.card.widget-block.widget-block-1[_ngcontent-%COMP%] {\n  background-color: #ffbc58;\n}\n.card.widget-block.widget-block-2[_ngcontent-%COMP%] {\n  background-color: #13c9ca;\n}\n.card.widget-block.widget-block-3[_ngcontent-%COMP%] {\n  background-color: #ff8084;\n}\n.card.widget-block.widget-block-4[_ngcontent-%COMP%] {\n  background-color: #a5a5a5;\n}\n.card.widget-block[_ngcontent-%COMP%]   .widget-text[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.card.widget-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n}\n.total-sites[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-bottom: 15px;\n}\n.total-sites[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  font-weight: 600;\n  padding-right: 25px;\n  font-size: 16px;\n  position: relative;\n}\n.total-sites[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"|\";\n  position: absolute;\n  right: 10px;\n  bottom: 2px;\n}\n.total-sites[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 0;\n    display: contents;\n  }\n\n  .page-body.pgbodyhalf[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0px !important;\n  }\n\n  .page-sidebar.pgsidebarshow[_ngcontent-%COMP%] {\n    margin-left: -250px !important;\n  }\n  .page-sidebar.pgsidebarhide[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n\n  .side-menu[_ngcontent-%COMP%] {\n    z-index: 1;\n  }\n}\n.star[_ngcontent-%COMP%] {\n  color: red;\n  margin-left: 1px;\n  margin-right: 1px;\n}\n.lgn-btn[_ngcontent-%COMP%] {\n  padding: 0;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL19yYWRpb2J0bi5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2Jhc2UvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX3RhYmxlcy5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2Jhc2UvX3RoZW1lLnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvYmFzZS9fbWl4aW5zLnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvYmFzZS9fcmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFUSx3R0FBQTtBQUNBLHFIQUFBO0FBSFIsOEVBQUE7QUNDSTtFQUNJLDRCQUFBO0FDR1I7QURGUTtFQUNJLGVBQUE7QUNJWjtBREZRO0VBQ0ksd0NBQUE7RUFDQSw2Q0FBQTtFQUNBLDhDQUFBO0FDSVo7QURFSTtFQUNJLHFCQUFBO0FDQ1I7QURHWTtFQUNJLGtDQUFBO0VBQ0EsOEJBQUE7QUNEaEI7QURNZ0I7RUFDSSxrQ0FBQTtFQUNBLDhCQUFBO0FDSnBCO0FETWdCO0VBQ0ksb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNKcEI7QUNqQ0k7RUFDSSw2Q0FBQTtFQUNBLHFCQUFBO0FEb0NSO0FDaENBO0VBQ0kseUJDRkU7QUZxQ047QUczQ0E7RUFDSSx5QkFBQTtBSDhDSjtBRzNDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBSDhDSjtBRzVDUTtFQUNJLHlCQUFBO0FIOENaO0FHM0NJOztFQUVJLGdCQUFBO0VBQ0Esc0JBQUE7QUg2Q1I7QUczQ0k7RUFDSSx5QkRaRjtFQ2FFLFdEZEQ7QUYyRFA7QUczQ0k7RUFDSSx5QkRkQTtBRjJEUjtBRzNDSTtFQUNJLHlCRGxCSDtFQ21CRyxXRHJCRDtBRmtFUDtBR3hDQTtFQUNBLHNCQUFBO0FIMkNBO0FHeENBO0VBQ0ksc0JBQUE7QUgyQ0o7QUd6Q0E7RUFDSSw0QkFBQTtBSDRDSjtBR3hDQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FIMkNKO0FHeENBO0VBQ0MsNkJBQUE7QUgyQ0Q7QUlqR0E7RUFDSSx5QkZHUTtFRUZSLGNGWU87RUVYUCxrQ0ZESztBRnFHVDtBSWpHQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUpvR0o7QUloR0k7RUFDSSxxQkFBQTtBSm1HUjtBSS9GQTs7Ozs7Ozs7Ozs7O0VBWUksaUNGN0JJO0FGK0hSO0FJL0ZBO0VBQ0ksY0Y1QkU7QUY4SE47QUkvRkE7RUFDSSxjRi9CQztBRmlJTDtBSS9GQTtFQUNJLGNGakNHO0FGbUlQO0FJOUZBO0VBQ0ksVUFBQTtBSmlHSjtBSTlGQTtFQUNJLGVBQUE7QUppR0o7QUk5RkE7RUFDSSxhQUFBO0FKaUdKO0FJOUZBO0VBQ0ksZ0JBQUE7QUppR0o7QUk5RkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUppR0o7QUk5RkE7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7QUppR0o7QUloR0k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBSmtHUjtBSWhHWTtFQUNJLGVBQUE7RUFDQSxjRnhFWDtFRXlFVyxrQkFBQTtFQUNBLFFBQUE7QUprR2hCO0FJNUZBO0VBQ0ksMkJBQUE7QUorRko7QUk1RkE7RUFDSSxTQUFBO0FKK0ZKO0FJOUZJO0VDbkZBLG9EQUFBO0VEcUZJLG1CQUFBO0FKa0dSO0FJaEdZO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUprR2hCO0FJL0ZRO0VBQ0ksNEJBQUE7QUppR1o7QUloR1k7RUFDSSxnQkFBQTtBSmtHaEI7QUk5Rkk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXRjVHRDtFR0tILDRDQUFBO0VBU0EseUJBQUE7QUxzTUo7QUlyR1E7RUFDSSx5QkFBQTtBSnVHWjtBSXJHUTtFQUNJLHlCQUFBO0FKdUdaO0FJckdRO0VBQ0kseUJBQUE7QUp1R1o7QUlyR1E7RUFDSSx5QkFBQTtBSnVHWjtBSXJHUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FKdUdaO0FJckdRO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FKdUdaO0FJbEdBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtBSnFHSjtBSXBHSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FKc0dSO0FJckdRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUp1R1o7QUlwR1k7RUFDSSxXQUFBO0FKc0doQjtBSy9OUztFQ2pDRDtJQUNJLGFBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RU5vUVY7O0VNOVBNO0lBQ0ksV0FBQTtJQUNBLDJCQUFBO0VOaVFWOztFTTdQRjtJQUNJLDhCQUFBO0VOZ1FGO0VNOVBGO0lBQ0ksMkJBQUE7RU5nUUY7O0VNN1BFO0lBQ0ksVUFBQTtFTmdRTjtBQUNGO0FGOVFBO0VBRUksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUUrUUo7QUEvUkE7RUFDSSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBa1NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwOzQwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCAnLi9hc3NldHMvc2Nzcy9iYXNlL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4vYXNzZXRzL3Njc3MvYmFzZS9taXhpbnMnO1xyXG5AaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvcmFkaW9idG4nO1xyXG5AaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvYnV0dG9ucyc7XHJcbkBpbXBvcnQgJy4vYXNzZXRzL3Njc3MvY29tcG9uZW50cy90YWJsZXMnO1xyXG5AaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2Jhc2UvdGhlbWUnO1xyXG5AaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2Jhc2UvcmVzcG9uc2l2ZSc7XHJcblxyXG5cclxuLnN0YXJcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDtcclxufVxyXG5cclxuIiwiLm11bHRpc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgIC5kcm9wZG93bi1idG4ge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4IWltcG9ydGFudDtcclxuICAgICAgICAuc2VsZWN0ZWQtaXRlbSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyb3Bkb3duLWRvd24ge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiA3cHggc29saWQgI2FkYWRhZCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucmQtYnRuIHtcclxuICAgIC5kcm9wZG93bi1saXN0IHtcclxuICAgICAgICB6LWluZGV4OiAxIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IHtcclxuICAgICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XStkaXYge1xyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgICAgICAgICAgICY6Y2hlY2tlZCtkaXYge1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRibHVlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogN3B4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDdweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCtkaXYge1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcFwiKTtcbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5zZWxlY3RlZC1pdGVtIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLWRvd24ge1xuICBib3JkZXItdG9wOiA3cHggc29saWQgI2FkYWRhZCAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5yZC1idG4gLmRyb3Bkb3duLWxpc3Qge1xuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG59XG4ucmQtYnRuIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdICsgZGl2OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbn1cbi5yZC1idG4gLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGRpdjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG59XG4ucmQtYnRuIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBkaXY6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMDEwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzExMTAxMCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogN3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogN3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMDEwO1xufVxuXG4ubmcyLXNtYXJ0LWFjdGlvbnMge1xuICBjb2xvcjogIzExMTAxMCAhaW1wb3J0YW50O1xufVxuXG4udGFibGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50YWJsZSB0aCBhIHtcbiAgY29sb3I6ICMxMTEwMTAgIWltcG9ydGFudDtcbn1cbi50YWJsZSB0aCxcbi50YWJsZSB0ZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4udGFibGUgLnRhYmxlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTEwMTA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnRhYmxlIC50YWJsZS1zcGVjaWFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGMwMDA7XG59XG4udGFibGUgLnRhYmxlLXRvdGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkMzIzODtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfbGVuZ3RoIHNlbGVjdCB7XG4gIHBhZGRpbmc6IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0IHtcbiAgcGFkZGluZzogMCUgIWltcG9ydGFudDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRib2R5IHRkIHtcbiAgcGFkZGluZzogMXB4IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19wYWdpbmF0ZSAucGFnaW5hdGVfYnV0dG9uIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEuNWVtO1xuICBwYWRkaW5nOiAwZW0gMC41ZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZjO1xuICBjb2xvcjogIzM0M2E0MDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuLmgxLFxuLmgyLFxuLmgzLFxuLmg0LFxuLmg1LFxuLmg2IHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogIzExMTAxMDtcbn1cblxuLnRleHQtcmVkIHtcbiAgY29sb3I6ICNlZDMyMzg7XG59XG5cbi50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMxM2FhOTI7XG59XG5cbi5kcm9wZG93bi1saXN0IHtcbiAgei1pbmRleDogOTtcbn1cblxuLmNyc3ItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm92ZXJhbGwtaHQtYm94IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNhcmQtbWluLWh0IHtcbiAgbWluLWhlaWdodDogNzB2aDtcbn1cblxuY2hhcnQtbGVnZW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5wYWdlLWNvbnRlbnQtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI1cHggMjVweCAyNXB4IDI1cHg7XG59XG4ucGFnZS1jb250ZW50LWhlYWRlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wYWdlLWNvbnRlbnQtaGVhZGVyIGgzIHNwYW4uaGQtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNlZDMyMzg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA3cHg7XG59XG5cbi5wYWdlLWNvbnRlbnQtYm9keSB7XG4gIHBhZGRpbmc6IDBweCAxNXB4IDE1cHggMTVweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDA7XG59XG4uY2FyZC5vdmVyYWxsLWNvbnRlbnRibG9jayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDVweCAyNHB4IDBweCByZ2JhKDY4LCAxMDIsIDI0MiwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggNXB4IDI0cHggMHB4IHJnYmEoNjgsIDEwMiwgMjQyLCAwLjEpO1xuICBib3gtc2hhZG93OiAxcHggNXB4IDI0cHggMHB4IHJnYmEoNjgsIDEwMiwgMjQyLCAwLjEpO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmNhcmQub3ZlcmFsbC1jb250ZW50YmxvY2sgLm92ZXJhbGwtY29udGVudC1oZWFkZXIgaDQge1xuICBwYWRkaW5nOiAyNXB4IDI1cHggMCAyNXB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uY2FyZC5vdmVyYWxsLWNvbnRlbnRibG9jayAub3ZlcmFsbC1jb250ZW50LWJvZHkge1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xufVxuLmNhcmQub3ZlcmFsbC1jb250ZW50YmxvY2sgLm92ZXJhbGwtY29udGVudC1ib2R5IGg1IHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5jYXJkLndpZGdldC1ibG9jayB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMCA2cHggMHB4IHJnYmEoNCwgMCwgMCwgMC4yKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMCA2cHggMHB4IHJnYmEoNCwgMCwgMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogMHB4IDAgNnB4IDBweCByZ2JhKDQsIDAsIDAsIDAuMik7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jYXJkLndpZGdldC1ibG9jay53aWRnZXQtYmxvY2stMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJjNTg7XG59XG4uY2FyZC53aWRnZXQtYmxvY2sud2lkZ2V0LWJsb2NrLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNjOWNhO1xufVxuLmNhcmQud2lkZ2V0LWJsb2NrLndpZGdldC1ibG9jay0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODA4NDtcbn1cbi5jYXJkLndpZGdldC1ibG9jay53aWRnZXQtYmxvY2stNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWE1YTU7XG59XG4uY2FyZC53aWRnZXQtYmxvY2sgLndpZGdldC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNhcmQud2lkZ2V0LWJsb2NrIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udG90YWwtc2l0ZXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnRvdGFsLXNpdGVzIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRvdGFsLXNpdGVzIGxpOmFmdGVyIHtcbiAgY29udGVudDogXCJ8XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMnB4O1xufVxuLnRvdGFsLXNpdGVzIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgfVxuXG4gIC5wYWdlLWJvZHkucGdib2R5aGFsZiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBhZ2Utc2lkZWJhci5wZ3NpZGViYXJzaG93IHtcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBhZ2Utc2lkZWJhci5wZ3NpZGViYXJoaWRlIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2lkZS1tZW51IHtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG4uc3RhciB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xufVxuXG4ubGduLWJ0biB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn0iLCIuYnRuIHtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwKTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxufSIsIi8vIGZvbnRzXHJcbiRudW5pdG86J051bml0bycsIHNhbnMtc2VyaWY7XHJcbiRwb3BwaW5zOidQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuLy8gY29sb3JcclxuJGxpZ2h0LWdyZXk6I2Y5ZmFmYztcclxuJHdoaXRlOiNmZmY7XHJcbiRibHVlOnJnYigxNywgMTYsIDE2KTtcclxuJHJlZDojZWQzMjM4O1xyXG4keWVsbG93OiNmZGMwMDA7XHJcbiRncmVlbjojMTNhYTkyO1xyXG4kZ3JhZDE6YmxhY2s7XHJcbiRncmFkMjpibGFjaztcclxuJGhvdmVyLWNvbG9yOnJnYigxMzQsIDIzMywgMjM2KTtcclxuLy8gc2l0ZVxyXG4kYmFzZS10ZXh0OiMzNDNhNDA7IiwiLm5nMi1zbWFydC1hY3Rpb25zIHtcclxuICAgIGNvbG9yOiAkYmx1ZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0aCB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICAgIC50YWJsZS1zcGVjaWFsLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdztcclxuICAgIH1cclxuICAgIC50YWJsZS10b3RhbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19sZW5ndGggc2VsZWN0ICB7XHJcbnBhZGRpbmc6IDAlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19maWx0ZXIgaW5wdXR7XHJcbiAgICBwYWRkaW5nOiAwJSFpbXBvcnRhbnQ7XHJcbn1cclxudGFibGUuZGF0YVRhYmxlIHRib2R5IHRkIHtcclxuICAgIHBhZGRpbmc6IDFweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX3BhZ2luYXRlIC5wYWdpbmF0ZV9idXR0b24ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAwLjBlbSAwLjVlbSFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIDtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gb3ZlcmZsb3cteDogaGlkZGVuIWltcG9ydGFudDtcclxufSAiLCJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xyXG4gICAgY29sb3I6ICRiYXNlLXRleHQ7XHJcbiAgICBmb250LWZhbWlseTogJHBvcHBpbnM7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5hIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNixcclxuLmgxLFxyXG4uaDIsXHJcbi5oMyxcclxuLmg0LFxyXG4uaDUsXHJcbi5oNiB7XHJcbiAgICBmb250LWZhbWlseTogJG51bml0bztcclxufVxyXG5cclxuLnRleHQtYmx1ZSB7XHJcbiAgICBjb2xvcjogJGJsdWU7XHJcbn1cclxuXHJcbi50ZXh0LXJlZCB7XHJcbiAgICBjb2xvcjogJHJlZDtcclxufVxyXG5cclxuLnRleHQtZ3JlZW4ge1xyXG4gICAgY29sb3I6ICRncmVlbjtcclxufVxyXG5cclxuLy8gb3ZlcmFsbC1zdHlsZXMgc3RhcnRcclxuLmRyb3Bkb3duLWxpc3Qge1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG5cclxuLmNyc3ItcG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vdmVyYWxsLWh0LWJveCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY2FyZC1taW4taHQge1xyXG4gICAgbWluLWhlaWdodDogNzB2aDtcclxufVxyXG5cclxuY2hhcnQtbGVnZW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4ucGFnZS1jb250ZW50LWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDI1cHggMjVweCAyNXB4IDI1cHg7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgJi5oZC1kYXRlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRlbnQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweCAxNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgICYub3ZlcmFsbC1jb250ZW50YmxvY2sge1xyXG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coIDFweCwgNXB4LCAyNHB4LCAwcHgsIHJnYmEoNjgsIDEwMiwgMjQyLCAwLjEpKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIC5vdmVyYWxsLWNvbnRlbnQtaGVhZGVyIHtcclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAyNXB4IDAgMjVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJhbGwtY29udGVudC1ib2R5IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggMTVweDtcclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYud2lkZ2V0LWJsb2NrIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdyggMHB4LCAwLCA2cHgsIDBweCwgcmdiYSg0LCAwLCAwLCAwLjIpKTtcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC4zcywgZWFzZSk7XHJcbiAgICAgICAgJi53aWRnZXQtYmxvY2stMSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJjNTg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYud2lkZ2V0LWJsb2NrLTIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNjOWNhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLndpZGdldC1ibG9jay0zIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODA4NDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi53aWRnZXQtYmxvY2stNCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNWE1YTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53aWRnZXQtdGV4dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udG90YWwtc2l0ZXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwifFwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gb3ZlcmFsbC1zdHlsZXMgZW5kIiwiLy8gYm94c2hhZG93XHJcbkBtaXhpbiBib3gtc2hhZG93KCRvZmZzZXQteCwgJG9mZnNldC15LCAkYmx1ci1yYWRpdXMsICRzcHJlYWQtcmFkaXVzLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcclxuICAgIEBpZiAkaW5zZXQge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkb2Zmc2V0LXggJG9mZnNldC15ICRibHVyLXJhZGl1cyAkc3ByZWFkLXJhZGl1cyAkY29sb3I7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0ICRvZmZzZXQteCAkb2Zmc2V0LXkgJGJsdXItcmFkaXVzICRzcHJlYWQtcmFkaXVzICRjb2xvcjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0ICRvZmZzZXQteCAkb2Zmc2V0LXkgJGJsdXItcmFkaXVzICRzcHJlYWQtcmFkaXVzICRjb2xvcjtcclxuICAgIH1cclxuICAgIEBlbHNlIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJG9mZnNldC14ICRvZmZzZXQteSAkYmx1ci1yYWRpdXMgJHNwcmVhZC1yYWRpdXMgJGNvbG9yO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAkb2Zmc2V0LXggJG9mZnNldC15ICRibHVyLXJhZGl1cyAkc3ByZWFkLXJhZGl1cyAkY29sb3I7XHJcbiAgICBib3gtc2hhZG93OiAkb2Zmc2V0LXggJG9mZnNldC15ICRibHVyLXJhZGl1cyAkc3ByZWFkLXJhZGl1cyAkY29sb3I7XHJcbiAgICB9XHJcbn1cclxuLy8gdHJhbnNpdGlvblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi1wcm9wZXJ0eSwgJHRyYW5zaXRpb24tdGltZSwgJG1ldGhvZCkge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1wcm9wZXJ0eSAkdHJhbnNpdGlvbi10aW1lICRtZXRob2Q7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLXByb3BlcnR5ICR0cmFuc2l0aW9uLXRpbWUgJG1ldGhvZDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1wcm9wZXJ0eSAkdHJhbnNpdGlvbi10aW1lICRtZXRob2Q7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1wcm9wZXJ0eSAkdHJhbnNpdGlvbi10aW1lICRtZXRob2Q7XHJcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1wcm9wZXJ0eSAkdHJhbnNpdGlvbi10aW1lICRtZXRob2Q7XHJcbn1cclxuLy8gcmVzcG9uc2l2ZSBcclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgICB4czogNTc2cHgsXHJcbiAgICBzbTogNzY4cHgsXHJcbiAgICBtZDogOTkycHgsXHJcbiAgICBsZzogMTIwMHB4XHJcbik7XHJcbi8vIFJFU1BPTkQgQkVMT1dcclxuLy8gQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge31cclxuQG1peGluIHJlc3BvbmQtYmVsb3coJGJyZWFrcG9pbnQpIHtcclxuICAgIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuICAgIC8vIEdldCB0aGUgYnJlYWtwb2ludCB2YWx1ZS5cclxuICAgICBcdCAgICRicmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xyXG4gICAgICAgIFx0Ly8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxyXG4gICAgICAgIFx0QG1lZGlhIChtYXgtd2lkdGg6ICgkYnJlYWtwb2ludC12YWx1ZSAtIDEpKSB7XHJcbiAgICAgICAgICAgIFx0XHRAY29udGVudDtcclxuICAgICAgIFx0IH1cclxuICAgICAgICAgICAgICAvLyBJZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0IGluIHRoZSBtYXAuXHJcbiAgICB9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgLy8gTG9nIGEgd2FybmluZy5cclxuICAgICAgICBAd2FybiAnSW52YWxpZCBicmVha3BvaW50OiAjeyRicmVha3BvaW50fS4nO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gcmVzcG9uZC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyKSB7XHJcbiAgICAvLyBJZiBib3RoIHRoZSBsb3dlciBhbmQgdXBwZXIgYnJlYWtwb2ludHMgZXhpc3QgaW4gdGhlIG1hcC5cclxuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBsb3dlciBhbmQgdXBwZXIgYnJlYWtwb2ludHMuXHJcbiAgICAgICAgJGxvd2VyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xyXG4gICAgICAgICR1cHBlci1icmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHVwcGVyKTtcclxuICAgICAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDogKCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgIC8vIElmIG9uZSBvciBib3RoIG9mIHRoZSBicmVha3BvaW50cyBkb24ndCBleGlzdC5cclxuICAgIH1cclxuICAgIEBlbHNlIHtcclxuXHJcbiAgICAgICAgLy8gSWYgbG93ZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxyXG4gICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpID09IGZhbHNlKSB7XHJcbiAgICBcclxuICAgICAgICAgIC8vIExvZyBhIHdhcm5pbmcuXHJcbiAgICAgICAgICBAd2FybiAnWW91ciBsb3dlciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyRsb3dlcn0uJztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvLyBJZiB1cHBlciBicmVha3BvaW50IGlzIGludmFsaWQuXHJcbiAgICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikgPT0gZmFsc2UpIHtcclxuICAgIFxyXG4gICAgICAgICAgLy8gTG9nIGEgd2FybmluZy5cclxuICAgICAgICAgIEB3YXJuICdZb3VyIHVwcGVyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcbiIsIkBpbmNsdWRlIHJlc3BvbmQtYmVsb3cobWQpIHtcclxuICAgIC8vIGhlYWRlclxyXG4gICAgLm5hdmJhcntcclxuICAgICAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMDtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2lkZW1lbnVcclxuICAgIC5wYWdlLWJvZHl7XHJcbiAgICAgICAgJi5wZ2JvZHloYWxme1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MHB4IWltcG9ydGFudCA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBhZ2Utc2lkZWJhcntcclxuJi5wZ3NpZGViYXJzaG93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuJi5wZ3NpZGViYXJoaWRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuICAgIH1cclxuICAgIC5zaWRlLW1lbnV7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "ISW5":
/*!****************************************!*\
  !*** ./src/environments/image-urls.ts ***!
  \****************************************/
/*! exports provided: ImageUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUrls", function() { return ImageUrls; });
const ImageUrls = {
    default_imgUrl: 'https://oit-athome.s3.amazonaws.com/images/',
    default_videoUrl: 'https://oit-athome.s3.amazonaws.com/videos/'
};


/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/app-urls */ "Rg0J");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth-service.service */ "UPSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");









const _c0 = function () { return ["/view-admins"]; };
const _c1 = function () { return ["/view-client"]; };
class DashboardComponent {
    constructor(http, snackBar, authService, _router) {
        this.http = http;
        this.snackBar = snackBar;
        this.authService = authService;
        this._router = _router;
        this.url = src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._adminModuleUrl;
        this.LoggedData = [];
        this.dashboardCount = {
            userCount: 0,
            partnerCount: 0,
            pendingCount: 0,
            categoryCount: 0,
            addonsCount: 0,
            completedCount: 0
        };
        this.token = localStorage.getItem('token');
        this.getDashboardCount();
    }
    getDashboardCount() {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["actionUrl"]._dashboardCount, {
            headers: {
                'x-auth': this.authService.authToken
            },
        })
            .then(response => {
            console.log(response);
            if (response.data.isSuccess) {
                this.dashboardCount = response.data.data;
                console.log(this.dashboardCount);
                console.log(response.data);
            }
            else if (this.authService.checkToken(response.data.message, response.data.status)) {
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    ngOnInit() {
        console.log("dashboard Working...");
    }
    viewData(id) {
        this._router.navigate(['/view-single-employee-data/'], { queryParams: { id: id } });
    }
    openStcakBar(msg, duration, action) {
        this.snackBar.open(msg, action, {
            duration
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 37, vars: 9, consts: [[1, "page-content-header"], [1, "main-section"], [1, "dashbord"], [1, "icon-section"], ["aria-hidden", "true", 1, "fa", "fa-male"], [1, "detail-section"], [3, "routerLink"], [1, "dashbord", "dashbord-orange"], ["aria-hidden", "true", 1, "fa", "fa-users"], [1, "dashbord", "dashbord-blue"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "More Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Active Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "More Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "In Active Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "More Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboardCount.userCount || "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboardCount.pendingCount || "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dashboardCount.categoryCount || "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: [".card[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #000000;\n  font-family: \"Raleway\", sans-serif;\n}\n\n.main-section[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 0px 5px;\n}\n\n.dashbord[_ngcontent-%COMP%] {\n  width: 32%;\n  display: inline-block;\n  background-color: #34495E;\n  color: #fff;\n  margin-top: 50px;\n  margin-left: 5px;\n  z-index: 99999;\n}\n\n.icon-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding: 10px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  margin-top: -25px;\n  margin-bottom: 10px;\n  background-color: #34495E;\n}\n\n.icon-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 20px;\n  padding-bottom: 10px;\n}\n\n.detail-section[_ngcontent-%COMP%] {\n  background-color: #2F4254;\n  padding: 5px 0px;\n}\n\n.dashbord[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]:hover {\n  background-color: #5a5a5a;\n  cursor: pointer;\n}\n\n.detail-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n\n.dashbord-green[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%], .dashbord-green[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #16A085;\n}\n\n.dashbord-green[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%] {\n  background-color: #149077;\n}\n\n.dashbord-orange[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%], .dashbord-orange[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #F39C12;\n}\n\n.dashbord-orange[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%] {\n  background-color: #DA8C10;\n}\n\n.dashbord-blue[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%], .dashbord-blue[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #2980B9;\n}\n\n.dashbord-blue[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%] {\n  background-color: #2573A6;\n}\n\n.dashbord-red[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%], .dashbord-red[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #E74C3C;\n}\n\n.dashbord-red[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%] {\n  background-color: #CF4436;\n}\n\n.dashbord-skyblue[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%], .dashbord-skyblue[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #8E44AD;\n}\n\n.dashbord-skyblue[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%] {\n  background-color: #803D9B;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDSixrQ0FBQTtBQUFBOztBQUVBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0E7O0FBQ0E7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVBOztBQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBR0E7O0FBREE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBSUE7O0FBRkE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBS0E7O0FBSEE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFNQTs7QUFKQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQU9BOztBQUxBO0VBQ0EseUJBQUE7QUFRQTs7QUFOQTtFQUNBLHlCQUFBO0FBU0E7O0FBUEE7RUFDQSx5QkFBQTtBQVVBOztBQVJBO0VBQ0EseUJBQUE7QUFXQTs7QUFUQTtFQUNBLHlCQUFBO0FBWUE7O0FBVkE7RUFDQSx5QkFBQTtBQWFBOztBQVhBO0VBQ0EseUJBQUE7QUFjQTs7QUFaQTtFQUNBLHlCQUFBO0FBZUE7O0FBYkE7RUFDQSx5QkFBQTtBQWdCQTs7QUFkQTtFQUNBLHlCQUFBO0FBaUJBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTAlIDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQ6IzAwMDAwMDtcclxuZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxufVxyXG4ubWFpbi1zZWN0aW9ue1xyXG53aWR0aDo4MCU7XHJcbm1hcmdpbjowIGF1dG87XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxucGFkZGluZzogMHB4IDVweDtcclxufVxyXG4uZGFzaGJvcmR7XHJcbndpZHRoOjMyJTtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiMzNDQ5NUU7XHJcbmNvbG9yOiNmZmY7XHJcbm1hcmdpbi10b3A6IDUwcHg7IFxyXG5tYXJnaW4tbGVmdDogNXB4O1xyXG56LWluZGV4OiA5OTk5OTtcclxufVxyXG4uaWNvbi1zZWN0aW9uIGl7XHJcbmZvbnQtc2l6ZTogMzBweDtcclxucGFkZGluZzoxMHB4O1xyXG5ib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5tYXJnaW4tdG9wOi0yNXB4O1xyXG5tYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiMzNDQ5NUU7XHJcbn1cclxuLmljb24tc2VjdGlvbiBwe1xyXG5tYXJnaW46MHB4O1xyXG5mb250LXNpemU6IDIwcHg7XHJcbnBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5kZXRhaWwtc2VjdGlvbntcclxuYmFja2dyb3VuZC1jb2xvcjogIzJGNDI1NDtcclxucGFkZGluZzogNXB4IDBweDtcclxufVxyXG4uZGFzaGJvcmQgLmRldGFpbC1zZWN0aW9uOmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNWE1YTVhO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRldGFpbC1zZWN0aW9uIGF7XHJcbmNvbG9yOiNmZmY7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZGFzaGJvcmQtZ3JlZW4gLmljb24tc2VjdGlvbiwuZGFzaGJvcmQtZ3JlZW4gLmljb24tc2VjdGlvbiBpe1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMTZBMDg1O1xyXG59XHJcbi5kYXNoYm9yZC1ncmVlbiAuZGV0YWlsLXNlY3Rpb257XHJcbmJhY2tncm91bmQtY29sb3I6ICMxNDkwNzc7XHJcbn1cclxuLmRhc2hib3JkLW9yYW5nZSAuaWNvbi1zZWN0aW9uLC5kYXNoYm9yZC1vcmFuZ2UgLmljb24tc2VjdGlvbiBpe1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRjM5QzEyO1xyXG59XHJcbi5kYXNoYm9yZC1vcmFuZ2UgLmRldGFpbC1zZWN0aW9ue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjREE4QzEwO1xyXG59XHJcbi5kYXNoYm9yZC1ibHVlIC5pY29uLXNlY3Rpb24sLmRhc2hib3JkLWJsdWUgLmljb24tc2VjdGlvbiBpe1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MEI5O1xyXG59XHJcbi5kYXNoYm9yZC1ibHVlIC5kZXRhaWwtc2VjdGlvbntcclxuYmFja2dyb3VuZC1jb2xvcjojMjU3M0E2O1xyXG59XHJcbi5kYXNoYm9yZC1yZWQgLmljb24tc2VjdGlvbiwuZGFzaGJvcmQtcmVkIC5pY29uLXNlY3Rpb24gaXtcclxuYmFja2dyb3VuZC1jb2xvcjojRTc0QzNDO1xyXG59XHJcbi5kYXNoYm9yZC1yZWQgLmRldGFpbC1zZWN0aW9ue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNDRjQ0MzY7XHJcbn1cclxuLmRhc2hib3JkLXNreWJsdWUgLmljb24tc2VjdGlvbiwuZGFzaGJvcmQtc2t5Ymx1ZSAuaWNvbi1zZWN0aW9uIGl7XHJcbmJhY2tncm91bmQtY29sb3I6IzhFNDRBRDtcclxufVxyXG4uZGFzaGJvcmQtc2t5Ymx1ZSAuZGV0YWlsLXNlY3Rpb257XHJcbmJhY2tncm91bmQtY29sb3I6IzgwM0Q5QjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "N+K7":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/app-urls */ "Rg0J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");









class HttpService {
    constructor(http, _router, snackBar) {
        this.http = http;
        this._router = _router;
        this.snackBar = snackBar;
        this.baseUrl = src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl;
        this._locationObject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.locationObject$ = this._locationObject.asObservable();
    }
    ngOnInit() { }
    get(subUrl, token) {
        let myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        token = localStorage.getItem('token');
        myheader =
            token != null
                ? myheader
                    .set('Content-Type', 'application/json; charset=utf-8')
                    .set('Authorization', 'Bearer ' + token)
                : myheader.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(this.baseUrl + subUrl, { headers: myheader }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            return res;
        }, (error) => {
            console.log(error);
        }));
    }
    postNew(url, paramsObj, token) {
        let myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        if (token != null) {
            myheader = myheader
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Authorization', 'Bearer ' + token);
        }
        else {
            myheader = myheader.set('Content-Type', 'application/x-www-form-urlencoded');
        }
        let body = null;
        if (paramsObj) {
            for (var key in paramsObj) {
                body = body === null ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]() : body;
                body = body.set(`${key}`, `${paramsObj[key]}`);
            }
            return this.http.post(this.baseUrl + url, body, { headers: myheader });
        }
    }
    headersNG(token) {
        let myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myheader =
            token != undefined
                ? myheader
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('Authorization', 'Bearer ' + token)
                : myheader.set('Content-Type', 'application/x-www-form-urlencoded');
        return myheader;
    }
    post(url, paramsObj, token) {
        let myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myheader =
            token != undefined
                ? myheader
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('Authorization', 'Bearer ' + token)
                : myheader.set('Content-Type', 'application/x-www-form-urlencoded');
        let body = null;
        if (paramsObj) {
            for (var key in paramsObj) {
                body = body === null ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]() : body;
                // body = body.set(key, paramsObj[key].toString());
                body = body.append(key, paramsObj[key]);
            }
        }
        return this.http
            .post(this.baseUrl + url, body, {
            headers: myheader,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
    loggedIn() {
        //  return !!localStorage.getItem('gearUpToken');
        // Axios.get(AppUrls._baseUrl + "secure",{
        //   headers: {
        //     'x-auth' : localStorage.getItem('gearUpToken')
        //   },
        // })
        //   .then(response => {        
        //     console.log(response)
        //     if (response.data.isSuccess) {
        //       // this.openSnackBar(response.data.message,'5000','close');
        //       return true;
        //     }
        //     else
        //     {
        //       return false;
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //     return false;
        //   })
        // return false;
        return !!localStorage.getItem('gearUpToken');
    }
    /* postObj(subUrl, paramsObj?, token?): Observable<any> {
      let myheader = new HttpHeaders();
      token = localStorage.getItem('token');
      myheader =
        token != null
          ? myheader
              .set('Content-Type', 'application/json; charset=utf-8')
              .set('Authorization', 'Bearer ' + token)
          : myheader.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post(this.baseUrl + subUrl, paramsObj, {
        headers: myheader,
      });
    } */
    openSnackBar(msg, duration, action) {
        this.snackBar.open(msg, action, {
            duration: duration,
        });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "QGzq":
/*!***********************************************************************************!*\
  !*** ./src/app/components/master/services/view-service/view-service.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ViewServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewServiceComponent", function() { return ViewServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/app-urls */ "Rg0J");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/upload.service */ "jT/F");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "oTcB");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "UPO+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");













function ViewServiceComponent_ng_multiselect_dropdown_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-multiselect-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function ViewServiceComponent_ng_multiselect_dropdown_7_Template_ng_multiselect_dropdown_onSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onChangeData($event); })("ngModelChange", function ViewServiceComponent_ng_multiselect_dropdown_7_Template_ng_multiselect_dropdown_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectedItems = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Client ")("ngModel", ctx_r0.selectedItems)("settings", ctx_r0.dropdownSettingCat)("data", ctx_r0.clientList);
} }
function ViewServiceComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewServiceComponent_tr_31_Template_img_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.editData(data_r5._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewServiceComponent_tr_31_Template_img_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteService(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5 == null ? null : data_r5.employee == null ? null : data_r5.employee.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5 == null ? null : data_r5.fileName.split(".")[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.bytesToMegaBytes(data_r5 == null ? null : data_r5.fileSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, data_r5 == null ? null : data_r5.createdAt, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "", ctx_r1.imageUrl, "", data_r5.serviceFileUrl, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["/add-file"]; };
class ViewServiceComponent {
    constructor(router, uploadService, snackBar, config, modalService) {
        this.router = router;
        this.uploadService = uploadService;
        this.snackBar = snackBar;
        this.modalService = modalService;
        this.dropdownSettingCat = {};
        this.selectedItems = [];
        this.clientList = [];
        this.flag = true;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.store = {};
        this.warningStatus = false;
        this.clientid = '';
        this.userData = !!localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'));
        this.imageUrl = src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl;
        this.closeResult = '';
        this.selectedObj = {};
        if (this.userData.role != 'Admin') {
            this.getServiceDetails(this.userData._id);
            this.id = this.userData._id;
        }
        else {
            this.getClientList();
        }
    }
    showDropdwon() {
        return this.userData.role == 'Admin' ? true : false;
    }
    //////Get Data
    getServiceDetails(id) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["actionUrl"]._getServiceByClientId + id, {})
            .then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.type == "success" && response.data.data.length) {
                this.serviceData = response.data.data;
                console.log(this.serviceData);
                console.log(response.data);
                if (this.flag) {
                    this.dtTrigger.next();
                    this.flag = false;
                }
            }
            else {
                this.serviceData = [];
            }
            // else if(this.baseService.checkToken(response.data.message , response.data.status))
            // {
            // }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    bytesToMegaBytes(bytes) {
        return (bytes / (1024 * 1024)).toFixed(3);
    }
    getClientList() {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["actionUrl"]._getMember, {
            params: {
                role: "Client"
            }
        })
            .then(response => {
            if (response.data.code == 200 && response.data.type == "success") {
                this.clientList = response.data.data;
                console.log(this.clientList);
                this.selectedItems = this.clientList[0];
                this.selectedItems = [
                    { _id: this.selectedItems = this.clientList[0]['_id'], firstName: this.selectedItems = this.clientList[0]['firstName'] },
                    this.id = this.clientList[0]['_id']
                ];
                //  this.subCatId=this.selectedItems[0]['subCatId'];
                // this.getManPowerData();
                this.getServiceDetails(this.id);
                this.dropdownSettingCat = {
                    singleSelection: true,
                    idField: '_id',
                    textField: 'firstName',
                    selectAllText: 'Select All',
                    unSelectAllText: 'UnSelect All',
                    itemsShowLimit: 5,
                    allowSearchFilter: true,
                    closeDropDownOnSelection: true
                };
                console.log(response.data);
            }
            // else if(this.baseService.checkToken(response.data.message , response.data.status))
            // {
            // }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    changeserviceStatus(data) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["actionUrl"]._updateMemberStatus, {
            _id: data._id,
            isActive: !data.isActive
        })
            .then(response => {
            if (response.data.code == 200 && response.data.type == "success") {
                this.openSnackBar(response.data.message, '5000', 'close');
                this.getServiceDetails(this.userData._id);
                // window.location.reload();
            }
            else {
                this.openSnackBar(response.data.message, '5000', 'close');
            }
            // else if(this.baseService.checkToken(response.data.message , response.data.status))
            // {
            // }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    /////////////////Edit Data
    editData(id) {
        this.router.navigate(['/edit-file'], { queryParams: { id: id } });
    }
    ////////////////Delete Categoire
    deleteService(data) {
        if (confirm("Do You Delete This Record Permanently")) {
            // this.uploadService.deleteImage(data.imageURL.split('.com/')[1]);
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_1__["actionUrl"]._deleteService + data._id, {})
                .then(response => {
                console.log("Deleted Testing..");
                console.log(response);
                if (response.data.code == 200 && response.data.type == "success") {
                    this.openSnackBar(response.data.message, '5000', 'close');
                    this.getServiceDetails(this.id);
                }
                else {
                    this.openSnackBar(response.data.message, '5000', 'close');
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            "lengthMenu": [[100, 200, -1], [100, 200, "All"]]
        };
    }
    openSnackBar(msg, duration, action) {
        this.snackBar.open(msg, action, {
            duration: duration,
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
    onChangeData(data) {
        console.log(data['_id']);
        this.id = data['_id'];
        this.getServiceDetails(this.id);
    }
}
ViewServiceComponent.ɵfac = function ViewServiceComponent_Factory(t) { return new (t || ViewServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"])); };
ViewServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewServiceComponent, selectors: [["app-view-service"]], decls: 32, vars: 6, consts: [[1, "card"], [1, "card-header", "page-content-header"], [1, "row"], [1, "col-md-6"], [1, "col-md-3"], ["class", "rd-btn", 3, "placeholder", "ngModel", "settings", "data", "onSelect", "ngModelChange", 4, "ngIf"], [1, "col-md-2"], [1, "btn", "btn-success", 2, "float", "right", 3, "routerLink"], [1, "card-body"], [1, "table-responsive"], ["datatable", "", 1, "table", "table-bordered", "table-striped", 3, "dtOptions", "dtTrigger"], [2, "background-color", "#fb9013"], [4, "ngFor", "ngForOf"], [1, "rd-btn", 3, "placeholder", "ngModel", "settings", "data", "onSelect", "ngModelChange"], ["target", "_blank", 2, "line-height", "20px", 3, "href"], ["src", "assets/images/eye.png", "height", "25px"], ["src", "assets/images/edit.png", "height", "25px", 3, "click"], ["src", "assets/images/delete.png", "height", "25px", 3, "click"]], template: function ViewServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewServiceComponent_ng_multiselect_dropdown_7_Template, 1, 4, "ng-multiselect-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+ File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " S NO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Employee Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " File Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " File Size(MB) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Uploaded Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ViewServiceComponent_tr_31_Template, 18, 10, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDropdwon());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serviceData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFzdGVyL3NlcnZpY2VzL3ZpZXctc2VydmljZS92aWV3LXNlcnZpY2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-service',
                templateUrl: './view-service.component.html',
                styleUrls: ['./view-service.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "RJ0n":
/*!*****************************************************************************!*\
  !*** ./src/app/components/master/member/add-member/add-member.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function() { return AddMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/app-urls */ "Rg0J");
/* harmony import */ var src_environments_image_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/image-urls */ "ISW5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/upload.service */ "jT/F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");










function AddMemberComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddMemberComponent_div_19_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
} }
function AddMemberComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " last Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddMemberComponent_div_28_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
} }
function AddMemberComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberComponent_div_37_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is not valid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddMemberComponent_div_37_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddMemberComponent_div_37_div_2_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.email);
} }
function AddMemberComponent_div_38_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberComponent_div_38_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddMemberComponent_div_38_div_8_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r15.errors.required);
} }
const _c0 = function () { return { standalone: true }; };
function AddMemberComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddMemberComponent_div_38_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.member.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddMemberComponent_div_38_div_8_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("ngModel", ctx_r7.member.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r15.invalid && (_r15.dirty || _r15.touched));
} }
function AddMemberComponent_div_39_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "confirm password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberComponent_div_39_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddMemberComponent_div_39_div_8_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r20.errors.required);
} }
function AddMemberComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddMemberComponent_div_39_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.member.confirmPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddMemberComponent_div_39_div_8_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("ngModel", ctx_r8.member.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r20.invalid && (_r20.dirty || _r20.touched));
} }
function AddMemberComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " phone number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddMemberComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddMemberComponent_div_48_div_1_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.required);
} }
class AddMemberComponent {
    constructor(router, uploadService, arouter, _location, snackBar) {
        this.router = router;
        this.uploadService = uploadService;
        this.arouter = arouter;
        this._location = _location;
        this.snackBar = snackBar;
        this.member = {
            role: 'Manager'
        };
        this.keyPath = "";
        this.imageUrl = src_environments_image_urls__WEBPACK_IMPORTED_MODULE_3__["ImageUrls"].default_imgUrl;
        this.id = null;
        this.status = true;
        this.fullPage = true;
        this.config = {
            uiColor: 'transparent',
            // Define the toolbar groups as it is a more accessible solution.
            toolbarGroups: [
                { 'name': 'basicstyles', 'groups': ['basicstyles'] },
                // {'name': 'links', 'groups': ['links']},
                { 'name': 'paragraph', 'groups': ['list', 'blocks'] },
                // {'name': 'document', 'groups': ['mode']},
                // {'name': 'insert', 'groups': ['insert']},
                { 'name': 'styles', 'groups': ['styles'] },
                { 'name': 'about', 'groups': ['about'] }
            ],
            // Remove the redundant buttons from toolbar groups defined above.
            removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar'
        };
        this.id = this.arouter.snapshot.queryParamMap.get('id');
        if (this.id != null) {
            this.status = false;
            this.getMemberById();
        }
    }
    formSubmit(form) {
        console.log(this.member);
        // this.categorie.imageURL=this.imageUrl+"categories/"+this.keyPath;
        if (this.id == null) {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["actionUrl"]._addMember, this.member, {
            // headers: {
            //   'x-auth' : this.baseService.authToken
            // },
            })
                .then(response => {
                console.log(response);
                if (response.data.code == 201 && response.data.type == 'success') {
                    this.openSnackBar(response.data.message, '5000', 'close');
                    // this.member = {};
                    // form.resetForm("");
                    setTimeout(() => {
                        this.router.navigate(['/view-managers']);
                    }, 1000);
                }
                else {
                    this.openSnackBar(response.data.message, '5000', 'close');
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        else {
            delete this.member.password;
            delete this.member.isActive;
            delete this.member.__v;
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["actionUrl"]._updateMember, this.member)
                .then(response => {
                console.log('resp: ', response);
                if (response.data.code == 200 && response.data.type == 'success') {
                    this.openSnackBar(response.data.message, '5000', 'close');
                    // this.member = {};
                    // form.resetForm("");
                    this.getMemberById();
                }
                else {
                    this.openSnackBar(response.data.message, '5000', 'close');
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    }
    getMemberById() {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["actionUrl"]._getMemberById + this.id, {
        // headers: {
        //   'x-auth' : this.baseService.authToken
        // },
        })
            .then(response => {
            if (response.data.code == 200 && response.data.type == 'success') {
                this.member = response.data.data;
                console.log(this.member);
                console.log(response.data);
            }
            // else if(this.baseService.checkToken(response.data.message , response.data.status))
            // {
            // }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    ////////////////////Image Code
    selectFile(event) {
        console.log("selectFile");
        this.selectedFiles = event.target.files[0];
        // this.upload(event.target.files[0]);
        this.upload();
    }
    upload() {
        let file = this.selectedFiles;
        let type = "categories";
        console.log("UPLOAD", file);
        let self = this;
        self.statusText = "Uploaded.....";
        self.uploadService.uploadFileAny(file, type, function (err, key) {
            if (err)
                console.log(err);
            console.log('Seccouse ', err, key);
            self.keyPath = key;
            //   else {
            //      console.log(key);
            //     // axios.post(self.baseurl + 'admin/api/media/', { "name": self.name, "key": key ,"type":"img"}, {
            //   headers: { 'x-auth': self.token }
            // })
            // .then(response => {
            //   console.log(response);
            //   self.statusText = "Image Uploaded Succesfully";
            //   self.getAllMedia();
            // }).catch((error) => {
            //   // handle error
            //   console.log("0000", error);
            //   self.statusText = "Image Uploaded Error";
            // }).
            // finally(() => {
            //   // always executed
            //   // this.loading = true;
            //   self.selectedFiles = {};
            // });
            // };
        });
    }
    openSnackBar(msg, duration, action) {
        this.snackBar.open(msg, action, {
            duration: duration,
        });
    }
    ngOnInit() {
    }
    backClicked() {
        this._location.back();
    }
}
AddMemberComponent.ɵfac = function AddMemberComponent_Factory(t) { return new (t || AddMemberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
AddMemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddMemberComponent, selectors: [["app-add-member"]], decls: 54, vars: 21, consts: [[1, "page-content-header"], [1, "page-content-body"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "overall-contentblock"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["memberForm", "ngForm"], [1, "form-group", "form-row"], ["for", "normal-input-1", 1, "col-md-2", "col-sm-3", "col-form-label", "col-form-label-md", "text-sm-right"], [1, "star"], [1, "col-md-8", "col-sm-8", "mb-3"], ["type", "text", "name", "firstName", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "text", "name", "lastName", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["type", "email", "name", "email", "email", "", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "form-group form-row", 4, "ngIf"], ["type", "number", "name", "phone", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["phone", "ngModel"], [1, "btn", "btn-primary", "mr-2", 2, "margin-left", "40%", 3, "disabled"], [1, "btn", "btn-danger", 3, "click"], [1, "form-text", "text-danger"], [4, "ngIf"], ["type", "password", "name", "password", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "password", "name", "confirmPassword", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"]], template: function AddMemberComponent_Template(rf, ctx) { if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddMemberComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.formSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddMemberComponent_Template_input_ngModelChange_17_listener($event) { return ctx.member.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddMemberComponent_div_19_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddMemberComponent_Template_input_ngModelChange_26_listener($event) { return ctx.member.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddMemberComponent_div_28_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddMemberComponent_Template_input_ngModelChange_35_listener($event) { return ctx.member.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddMemberComponent_div_37_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddMemberComponent_div_38_Template, 9, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AddMemberComponent_div_39_Template, 9, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddMemberComponent_Template_input_ngModelChange_46_listener($event) { return ctx.member.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AddMemberComponent_div_48_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddMemberComponent_Template_a_click_52_listener() { return ctx.backClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.id == null ? "ADD " : "UPDATE ", " Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0))("ngModel", ctx.member.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0))("ngModel", ctx.member.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0))("ngModel", ctx.member.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("ngModel", ctx.member.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.id == null ? "SAVE" : "UPDATE");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFzdGVyL21lbWJlci9hZGQtbWVtYmVyL2FkZC1tZW1iZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddMemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-member',
                templateUrl: './add-member.component.html',
                styleUrls: ['./add-member.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "Rg0J":
/*!**************************************!*\
  !*** ./src/environments/app-urls.ts ***!
  \**************************************/
/*! exports provided: AppUrls, actionUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUrls", function() { return AppUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionUrl", function() { return actionUrl; });
const AppUrls = {
    // _baseUrl: 'http://localhost:3000/',
    _baseUrl: 'https://mks-fileuplods-app.herokuapp.com/',
    _adminModuleUrl: '',
};
const actionUrl = {
    //////////////Dashboard
    _dashboardCount: "dashboardCount",
    ////Admin Login
    _loginUrl: "admin/adminLogin",
    // _changePassword:"admin/updateAdminPasswordById",
    /////Member Login
    _memberLoginUrl: "api/member/memberLogin",
    _addMember: "api/member/addMember",
    _getMember: "api/member/getMembers",
    _getRoleById: "api/member/getRoleById/",
    _getMemberById: "api/member/getMemberById/",
    _updateMember: "api/member/updateMember",
    _deleteMember: "api/member/deleteMemberById/",
    _updateMemberStatus: "api/member/changeStatus",
    _forgotPassword: "api/member/forgotPassword",
    _changePassword: "api/member/changePassword",
    ///Customer
    _getCustomer: "api/user/getUsers",
    _deleteCustomer: "api/user/deleteUserById/",
    _updateCustomerStatus: "api/user/changeStatus",
    //////////////////////////////////Service
    _getService: "api/service/getServices",
    _getServiceByClientId: "api/service/getServiceByClientId/",
    _addService: "api/service/addService",
    _updateServiceStatus: "api/service/ServicetatusChange",
    _deleteService: "api/service/deleteServiceById/",
    _getServiceById: "api/service/getServiceById/",
    _updateService: "api/service/updateServiceById/",
    ///////////////////// Service Type
    // _getAllService:"service/getAllServices/",
    // // _addService:"service/addService",
    // // _updateServiceStatus:"service/updateServiceStatus",
    // //  _deleteService :"service/deleteServices/",
    //  _getServiceById:"service/getServices/",
    //  _updateService:"service/updateService/",
    /////////////////////////AddOns 
    _getAllAddOnBySubId: "addOn/getAddOnBySubCatId/",
    _addAddon: "addOn/addAddOn",
    _updateAddonStatus: "addOn/updateAddOnStatusById",
    _deleteAddon: "addOn/deleteAddOnById/",
    _getAddonById: "addOn/getAddOnById/",
    _updateAddon: "addOn/updateAddOnById/",
    ///////////////////////Users
    _getAllUser: "user/allCustomers",
    _addUser: "user/addUser",
    _updateUserStatus: "user/updateUserStatus",
    _getUserById: "user/getUser/",
    _deleteUser: "user/deleteUser/",
    _UserById: "user/updateUser/",
    _UserAddNewAddress: "user/addNewAddresss/",
    _updateUser: "service/updateService/",
    ///////////////////////Partner
    _getAllPartner: "partner/getAllPartners",
    _addPartner: "partner/addPartner",
    _updatePartnerStatus: "partner/updatePartnerStatus",
    _deletePartner: "partner/deletePartner/",
    _getPartnerById: "partner/getPartner/",
    _updatePartnerById: "partner/updatePartner/",
    _updatePartner: "partner/updateService/",
    _getpartnersByCatId: "partner/getPartnerByCatId/",
    ///////////////////////////////////Orders
    _getOrders: "order/getOrder",
    _getOrderById: "order/getOrder/",
    _updateOrderStatus: "order/updateOrderStatus",
    _updateOrderActiveStatus: "order/updateOrderActiveStatus",
    _updateOrderById: "order/updatOrder/",
    _getOrdersByStatus: "order/getOrdersByStatus",
    _getCancelledOrders: "order/getCancelledOrders",
    ////////////////////////////////// Offers Banners
    _getOfferbanner: "offerbanner/getofferbanners",
    _addofferbanner: "offerbanner/addofferbanner",
    _updateofferbannerStatus: "offerbanner/offerbannerStatusChange",
    _deleteOfferBanner: "offerbanner/offerbannerDelete/",
    ///////////////////////////////// Ribbons
    _getRibbon: "ribbon/getRibbon",
    _addRibbon: "ribbon/addribbon",
    _updateRibbonStatus: "ribbon/ribbonStatusChange",
    _deleteRibbon: "ribbon/ribbonDelete/",
    ///////////////////////////////// Popup Banners
    _getpopupBanner: "popupBanner/getpopupBanner",
    _addpopupBanner: "popupBanner/addpopupBanner",
    _updatpopupBanner: "popupBanner/popupBannerStatusChange",
    _deletepopupBanner: "popupBanner/popupBannerDelete/",
    ////////////////////////////Add Order
    _addOrder: "order/addOrder",
    ////////////////////////////Footer Details
    _addFooterDetails: "footer/addFooterService",
    _getFooterDetails: "footer/getAllFooterService",
    _getFooterById: "footer/getFooterById/",
    _updateFooterDetails: "footer/updateFooter",
    _deleteFooterDetails: "footer/footerServiceDelete/",
};


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
    constructor() {
        this.token = false;
        this.token = !!localStorage.getItem('token');
        console.log(this.token);
    }
    title(title) {
        throw new Error('Method not implemented.');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "UPSQ":
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





class AuthServiceService {
    constructor(_http, snackBar, _router) {
        this._http = _http;
        this.snackBar = snackBar;
        this._router = _router;
        this.authToken = localStorage.getItem("gearUpToken");
    }
    canActivate() {
        if (this._http.loggedIn()) {
            return true;
        }
        else {
            // location.reload();
            localStorage.clear();
            location.href = '/auth/login';
            return false;
        }
    }
    checkToken(msg, status) {
        if (msg == "Invalid Token" && status == false) {
            this.openSnackBar('Invalid Token Please Login Again', '5000', 'close');
            // localStorage.clear();
            localStorage.clear();
            location.href = '/auth/login';
            return false;
        }
        else {
            return true;
        }
    }
    update() {
        this.authToken = localStorage.getItem("gearUpToken");
    }
    openSnackBar(msg, duration, action) {
        this.snackBar.open(msg, action, {
            duration: duration,
        });
    }
}
AuthServiceService.ɵfac = function AuthServiceService_Factory(t) { return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthServiceService, factory: AuthServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "VdIu":
/*!**************************************************************************!*\
  !*** ./src/app/components/auth/admin-profile/admin-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function() { return AdminProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/app-urls */ "Rg0J");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");








function AdminProfileComponent_div_61_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Current Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminProfileComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminProfileComponent_div_61_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
} }
function AdminProfileComponent_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminProfileComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminProfileComponent_div_71_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
} }
function AdminProfileComponent_div_81_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminProfileComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminProfileComponent_div_81_div_1_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required && !ctx_r6.passwordStatus);
} }
function AdminProfileComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " New Password and Confirm Password Must Matchs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "fa-eye-slash": a0, "fa-eye": a1 }; };
class AdminProfileComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.id = '';
        this.Password = {};
        this.hide = true;
        this.passwordStatus = false;
        if (!!localStorage.getItem('gearUpToken'))
            this.id = JSON.parse(localStorage.getItem('userData'))._id;
        if (this.id)
            this.getMemberDetails();
    }
    ngOnInit() {
    }
    getMemberDetails() {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["actionUrl"]._getMemberById + this.id, {})
            .then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.type == "success") {
                this.adminData = response.data.data;
                console.log(this.adminData);
                console.log(response.data);
            }
            else {
                this.adminData = [];
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    formSubmit(form) {
        this.Password._id = this.adminData._id;
        console.log(this.Password);
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["actionUrl"]._changePassword, this.Password, {
        // headers: {
        //   'x-auth' : this.baseService.authToken
        // },
        })
            .then(response => {
            console.log(response);
            if (response.data.code == 200 && response.data.type == "success") {
                this.openSnackBar(response.data.message, '5000', 'close');
                localStorage.clear();
                location.reload();
                // form.resetForm("");
            }
            else {
                this.openSnackBar(response.data.message, '5000', 'close');
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    openSnackBar(msg, duration, action) {
        this.snackBar.open(msg, action, {
            duration: duration,
        });
    }
    passwordCheck() {
        if (this.Password.newPassword == this.Password.confirmPassword) {
            this.passwordStatus = false;
        }
        else {
            this.passwordStatus = true;
        }
    }
}
AdminProfileComponent.ɵfac = function AdminProfileComponent_Factory(t) { return new (t || AdminProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
AdminProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminProfileComponent, selectors: [["app-admin-profile"]], decls: 86, vars: 30, consts: [["mat-align-tabs", "center", "animationDuration", "1000ms"], ["label", "Profile"], [1, "page-content-body"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card", "overall-contentblock", "card-min-ht"], [1, "overall-content-body"], [1, "col-md-6"], [1, "form-row"], [1, "form-group", "col-md-12"], [1, "text-blue"], [1, "profileimg", 3, "src"], ["label", "Change Password"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["changePasswordForm", "ngForm"], [1, "form-group", "form-row"], ["for", "normal-input-1", 1, "col-md-2", "col-sm-3", "col-form-label", "col-form-label-md", "text-sm-right"], [1, "col-md-6", "col-sm-6", "mb-3"], ["name", "password", "required", "", 1, "form-control", "form-control-sm", 3, "type", "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", 3, "ngClass", "click"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "password", "name", "newPassword", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["newPassword", "ngModel"], ["type", "password", "name", "confirmPassword", "required", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "input"], ["confirmPassword", "ngModel"], ["class", "text-danger", 4, "ngIf"], [1, "btn", "btn-primary", "mr-2", 2, "margin-left", "40%", 3, "disabled"], [1, "form-text", "text-danger"], [4, "ngIf"], [1, "text-danger"]], template: function AdminProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Account Created On ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "form", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminProfileComponent_Template_form_ngSubmit_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51); return ctx.formSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminProfileComponent_Template_input_ngModelChange_56_listener($event) { return ctx.Password.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProfileComponent_Template_i_click_60_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AdminProfileComponent_div_61_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminProfileComponent_Template_input_ngModelChange_66_listener($event) { return ctx.Password.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProfileComponent_Template_i_click_70_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, AdminProfileComponent_div_71_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminProfileComponent_Template_input_ngModelChange_76_listener($event) { return ctx.Password.confirmPassword = $event; })("input", function AdminProfileComponent_Template_input_input_76_listener() { return ctx.passwordCheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProfileComponent_Template_i_click_80_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, AdminProfileComponent_div_81_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, AdminProfileComponent_div_82_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.adminData == null ? null : ctx.adminData.firstName) + " " + (ctx.adminData == null ? null : ctx.adminData.lastName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.adminData == null ? null : ctx.adminData.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.adminData == null ? null : ctx.adminData.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.adminData == null ? null : ctx.adminData.profile_pic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.adminData == null ? null : ctx.adminData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 18, ctx.adminData == null ? null : ctx.adminData.createdAt, "MM/dd/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password")("ngModel", ctx.Password.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c0, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Password.newPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c0, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Password.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c0, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid || ctx.passwordStatus);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n\n.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ninput.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  margin-left: 93%;\n  margin-top: -31px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2FkbWluLXByb2ZpbGUvYWRtaW4tcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7QUFDSjs7QUFFRTs7RUFFRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSwwQkFBQTtBQUNKOztBQUVFO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUVDLFlBQUE7QUFBUCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9hZG1pbi1wcm9maWxlL2FkbWluLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYi1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtZ3JvdXAtdGV4dHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDkzJTtcclxuICAgICAgbWFyZ2luLXRvcDogLTMxcHg7XHJcbiAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IG5vbmUhaW1wb3J0YW50OyBcclxuICAgICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-profile',
                templateUrl: './admin-profile.component.html',
                styleUrls: ['./admin-profile.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "Xn/w":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/layout/layout.component.ts ***!
  \**************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_service_shared_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/shared-service.service */ "Hj+p");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "aZ8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sidemenu/sidemenu.component */ "GGwj");







const _c0 = function (a0) { return { pgsidebarhide: a0 }; };
const _c1 = function (a0) { return { pgbodyfull: a0 }; };
class LayoutComponent {
    constructor(_sharedata, _router) {
        this._sharedata = _sharedata;
        this._router = _router;
        // this.togglebtn= this._sharedata.getter();
        // console.log(this.togglebtn);
    }
    ngOnInit() {
        // this.token = localStorage.getItem('token');
        // if(!!this.token){
        // } else {
        //   localStorage.removeItem('token');
        //      localStorage.removeItem('userData');
        //      this._router.navigate(['/auth/login']);
        // }
        // console.log("Value Change1");
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["SharedServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 7, vars: 6, consts: [[1, "pg-header"], [1, "page-wrapper"], [1, "page-sidebar", "pgsidebarshow", 3, "ngClass"], [1, "page-body", "pgbodyhalf", 3, "ngClass"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sidemenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx._sharedata.isShowSideMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx._sharedata.isShowSideMenu));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__["SidemenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%] {\n  line-height: 16px !important;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%] {\n  border-top: 7px solid #adadad !important;\n  border-left: 7px solid transparent !important;\n  border-right: 7px solid transparent !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:before {\n  background: transparent !important;\n  border-radius: 50px !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:before {\n  background: transparent !important;\n  border-radius: 50px !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:after {\n  background-color: #111010 !important;\n  border-color: #111010 !important;\n  transform: rotate(0deg) scale(1) !important;\n  border-radius: 50px;\n  width: 7px !important;\n  height: 7px !important;\n  margin-top: -5px !important;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0);\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #111010;\n}\n.ng2-smart-actions[_ngcontent-%COMP%] {\n  color: #111010 !important;\n}\n.table[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #111010 !important;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background-color: #111010;\n  color: #fff;\n}\n.table[_ngcontent-%COMP%]   .table-special-header[_ngcontent-%COMP%] {\n  background-color: #fdc000;\n}\n.table[_ngcontent-%COMP%]   .table-total[_ngcontent-%COMP%] {\n  background-color: #ed3238;\n  color: #fff;\n}\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0% !important;\n}\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0% !important;\n}\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1px 10px !important;\n}\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: inline-block;\n  min-width: 1.5em;\n  padding: 0em 0.5em !important;\n  margin-left: 2px;\n  text-align: center;\n  text-decoration: none;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: hidden !important;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #f9fafc;\n  color: #343a40;\n  font-family: \"Poppins\", sans-serif;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.text-blue[_ngcontent-%COMP%] {\n  color: #111010;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #ed3238;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #13aa92;\n}\n.dropdown-list[_ngcontent-%COMP%] {\n  z-index: 9;\n}\n.crsr-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.overall-ht-box[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.card-min-ht[_ngcontent-%COMP%] {\n  min-height: 70vh;\n}\nchart-legend[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  transform: translateY(-50%);\n}\n.page-content-header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 25px 25px 25px 25px;\n}\n.page-content-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.page-content-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span.hd-date[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #ed3238;\n  position: relative;\n  top: 7px;\n}\n.page-content-body[_ngcontent-%COMP%] {\n  padding: 0px 15px 15px 15px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 0;\n}\n.card.overall-contentblock[_ngcontent-%COMP%] {\n  box-shadow: 1px 5px 24px 0px rgba(68, 102, 242, 0.1);\n  margin-bottom: 25px;\n}\n.card.overall-contentblock[_ngcontent-%COMP%]   .overall-content-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 25px 25px 0 25px;\n  margin: 0;\n  font-weight: 800;\n}\n.card.overall-contentblock[_ngcontent-%COMP%]   .overall-content-body[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n}\n.card.overall-contentblock[_ngcontent-%COMP%]   .overall-content-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.card.widget-block[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  border: 0;\n  color: #fff;\n  box-shadow: 0px 0 6px 0px rgba(4, 0, 0, 0.2);\n  transition: all 0.3s ease;\n}\n.card.widget-block.widget-block-1[_ngcontent-%COMP%] {\n  background-color: #ffbc58;\n}\n.card.widget-block.widget-block-2[_ngcontent-%COMP%] {\n  background-color: #13c9ca;\n}\n.card.widget-block.widget-block-3[_ngcontent-%COMP%] {\n  background-color: #ff8084;\n}\n.card.widget-block.widget-block-4[_ngcontent-%COMP%] {\n  background-color: #a5a5a5;\n}\n.card.widget-block[_ngcontent-%COMP%]   .widget-text[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.card.widget-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n}\n.total-sites[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-bottom: 15px;\n}\n.total-sites[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  font-weight: 600;\n  padding-right: 25px;\n  font-size: 16px;\n  position: relative;\n}\n.total-sites[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"|\";\n  position: absolute;\n  right: 10px;\n  bottom: 2px;\n}\n.total-sites[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 0;\n    display: contents;\n  }\n\n  .page-body.pgbodyhalf[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0px !important;\n  }\n\n  .page-sidebar.pgsidebarshow[_ngcontent-%COMP%] {\n    margin-left: -250px !important;\n  }\n  .page-sidebar.pgsidebarhide[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n\n  .side-menu[_ngcontent-%COMP%] {\n    z-index: 1;\n  }\n}\n.star[_ngcontent-%COMP%] {\n  color: red;\n  margin-left: 1px;\n  margin-right: 1px;\n}\n.pg-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.page-sidebar[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.page-sidebar.pgsidebarshow[_ngcontent-%COMP%] {\n  margin-left: 0;\n  transition: 0.3s;\n}\n.page-sidebar.pgsidebarhide[_ngcontent-%COMP%] {\n  margin-left: -250px;\n  transition: 0.3s;\n}\n.page-body[_ngcontent-%COMP%] {\n  padding-top: 60px;\n  min-height: calc(100% - 60px);\n}\n.page-body.pgbodyhalf[_ngcontent-%COMP%] {\n  margin-left: 250px;\n  transition: 0.3s;\n}\n.page-body.pgbodyfull[_ngcontent-%COMP%] {\n  margin-left: 0;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL19yYWRpb2J0bi5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9iYXNlL192YXJpYWJsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL190YWJsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9iYXNlL190aGVtZS5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2Jhc2UvX21peGlucy5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2Jhc2UvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRVEsd0dBQUE7QUFDQSxxSEFBQTtBQUhSLDhFQUFBO0FDQ0k7RUFDSSw0QkFBQTtBQ0dSO0FERlE7RUFDSSxlQUFBO0FDSVo7QURGUTtFQUNJLHdDQUFBO0VBQ0EsNkNBQUE7RUFDQSw4Q0FBQTtBQ0laO0FERUk7RUFDSSxxQkFBQTtBQ0NSO0FER1k7RUFDSSxrQ0FBQTtFQUNBLDhCQUFBO0FDRGhCO0FETWdCO0VBQ0ksa0NBQUE7RUFDQSw4QkFBQTtBQ0pwQjtBRE1nQjtFQUNJLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDSnBCO0FDakNJO0VBQ0ksNkNBQUE7RUFDQSxxQkFBQTtBRG9DUjtBQ2hDQTtFQUNJLHlCQ0ZFO0FGcUNOO0FHM0NBO0VBQ0kseUJBQUE7QUg4Q0o7QUczQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUg4Q0o7QUc1Q1E7RUFDSSx5QkFBQTtBSDhDWjtBRzNDSTs7RUFFSSxnQkFBQTtFQUNBLHNCQUFBO0FINkNSO0FHM0NJO0VBQ0kseUJEWkY7RUNhRSxXRGREO0FGMkRQO0FHM0NJO0VBQ0kseUJEZEE7QUYyRFI7QUczQ0k7RUFDSSx5QkRsQkg7RUNtQkcsV0RyQkQ7QUZrRVA7QUd4Q0E7RUFDQSxzQkFBQTtBSDJDQTtBR3hDQTtFQUNJLHNCQUFBO0FIMkNKO0FHekNBO0VBQ0ksNEJBQUE7QUg0Q0o7QUd4Q0E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBSDJDSjtBR3hDQTtFQUNDLDZCQUFBO0FIMkNEO0FJakdBO0VBQ0kseUJGR1E7RUVGUixjRllPO0VFWFAsa0NGREs7QUZxR1Q7QUlqR0E7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FKb0dKO0FJaEdJO0VBQ0kscUJBQUE7QUptR1I7QUkvRkE7Ozs7Ozs7Ozs7OztFQVlJLGlDRjdCSTtBRitIUjtBSS9GQTtFQUNJLGNGNUJFO0FGOEhOO0FJL0ZBO0VBQ0ksY0YvQkM7QUZpSUw7QUkvRkE7RUFDSSxjRmpDRztBRm1JUDtBSTlGQTtFQUNJLFVBQUE7QUppR0o7QUk5RkE7RUFDSSxlQUFBO0FKaUdKO0FJOUZBO0VBQ0ksYUFBQTtBSmlHSjtBSTlGQTtFQUNJLGdCQUFBO0FKaUdKO0FJOUZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FKaUdKO0FJOUZBO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0FKaUdKO0FJaEdJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUprR1I7QUloR1k7RUFDSSxlQUFBO0VBQ0EsY0Z4RVg7RUV5RVcsa0JBQUE7RUFDQSxRQUFBO0FKa0doQjtBSTVGQTtFQUNJLDJCQUFBO0FKK0ZKO0FJNUZBO0VBQ0ksU0FBQTtBSitGSjtBSTlGSTtFQ25GQSxvREFBQTtFRHFGSSxtQkFBQTtBSmtHUjtBSWhHWTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FKa0doQjtBSS9GUTtFQUNJLDRCQUFBO0FKaUdaO0FJaEdZO0VBQ0ksZ0JBQUE7QUprR2hCO0FJOUZJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0Y1R0Q7RUdLSCw0Q0FBQTtFQVNBLHlCQUFBO0FMc01KO0FJckdRO0VBQ0kseUJBQUE7QUp1R1o7QUlyR1E7RUFDSSx5QkFBQTtBSnVHWjtBSXJHUTtFQUNJLHlCQUFBO0FKdUdaO0FJckdRO0VBQ0kseUJBQUE7QUp1R1o7QUlyR1E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBSnVHWjtBSXJHUTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBSnVHWjtBSWxHQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7QUpxR0o7QUlwR0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBSnNHUjtBSXJHUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FKdUdaO0FJcEdZO0VBQ0ksV0FBQTtBSnNHaEI7QUsvTlM7RUNqQ0Q7SUFDSSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VOb1FWOztFTTlQTTtJQUNJLFdBQUE7SUFDQSwyQkFBQTtFTmlRVjs7RU03UEY7SUFDSSw4QkFBQTtFTmdRRjtFTTlQRjtJQUNJLDJCQUFBO0VOZ1FGOztFTTdQRTtJQUNJLFVBQUE7RU5nUU47QUFDRjtBRjlRQTtFQUVJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FFK1FKO0FBL1JBO0VBQ0ksV0FBQTtBQWtTSjtBQS9SQTtFQUNJLGtCQUFBO0FBa1NKO0FBL1JBO0VBQ0ksWUFBQTtBQWtTSjtBQWpTSTtFQUNJLGNBQUE7RUFFQSxnQkFBQTtBQWtTUjtBQWhTSTtFQUNJLG1CQUFBO0VBRUEsZ0JBQUE7QUFpU1I7QUE3UkE7RUFDSSxpQkFBQTtFQUNBLDZCQUFBO0FBZ1NKO0FBL1JJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQWlTUjtBQTlSSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQWdTUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2Jhc2UvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi9hc3NldHMvc2Nzcy9iYXNlL21peGlucyc7XHJcbkBpbXBvcnQgJy4vYXNzZXRzL3Njc3MvY29tcG9uZW50cy9yYWRpb2J0bic7XHJcbkBpbXBvcnQgJy4vYXNzZXRzL3Njc3MvY29tcG9uZW50cy9idXR0b25zJztcclxuQGltcG9ydCAnLi9hc3NldHMvc2Nzcy9jb21wb25lbnRzL3RhYmxlcyc7XHJcbkBpbXBvcnQgJy4vYXNzZXRzL3Njc3MvYmFzZS90aGVtZSc7XHJcbkBpbXBvcnQgJy4vYXNzZXRzL3Njc3MvYmFzZS9yZXNwb25zaXZlJztcclxuXHJcblxyXG4uc3RhclxyXG57XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG59XHJcblxyXG4iLCIubXVsdGlzZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgLmRyb3Bkb3duLWJ0biB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHghaW1wb3J0YW50O1xyXG4gICAgICAgIC5zZWxlY3RlZC1pdGVtIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZHJvcGRvd24tZG93biB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAjYWRhZGFkIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZC1idG4ge1xyXG4gICAgLmRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAgIHotaW5kZXg6IDEhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3gge1xyXG4gICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdK2RpdiB7XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgICAgICAgICAgJjpjaGVja2VkK2RpdiB7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGJsdWUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3cHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogN3B4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkK2RpdiB7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMDs0MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwXCIpO1xuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4ge1xuICBsaW5lLWhlaWdodDogMTZweCAhaW1wb3J0YW50O1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLnNlbGVjdGVkLWl0ZW0ge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tZG93biB7XG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjYWRhZGFkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnJkLWJ0biAuZHJvcGRvd24tbGlzdCB7XG4gIHotaW5kZXg6IDEgIWltcG9ydGFudDtcbn1cbi5yZC1idG4gLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0gKyBkaXY6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xufVxuLnJkLWJ0biAubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgZGl2OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbn1cbi5yZC1idG4gLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGRpdjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTEwMTAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMTExMDEwICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiA3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA3cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTVweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDApO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTEwMTA7XG59XG5cbi5uZzItc21hcnQtYWN0aW9ucyB7XG4gIGNvbG9yOiAjMTExMDEwICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRhYmxlIHRoIGEge1xuICBjb2xvcjogIzExMTAxMCAhaW1wb3J0YW50O1xufVxuLnRhYmxlIHRoLFxuLnRhYmxlIHRkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi50YWJsZSAudGFibGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTAxMDtcbiAgY29sb3I6ICNmZmY7XG59XG4udGFibGUgLnRhYmxlLXNwZWNpYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYzAwMDtcbn1cbi50YWJsZSAudGFibGUtdG90YWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQzMjM4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19sZW5ndGggc2VsZWN0IHtcbiAgcGFkZGluZzogMCUgIWltcG9ydGFudDtcbn1cblxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19maWx0ZXIgaW5wdXQge1xuICBwYWRkaW5nOiAwJSAhaW1wb3J0YW50O1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGJvZHkgdGQge1xuICBwYWRkaW5nOiAxcHggMTBweCAhaW1wb3J0YW50O1xufVxuXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX3BhZ2luYXRlIC5wYWdpbmF0ZV9idXR0b24ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMS41ZW07XG4gIHBhZGRpbmc6IDBlbSAwLjVlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmM7XG4gIGNvbG9yOiAjMzQzYTQwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG4uaDEsXG4uaDIsXG4uaDMsXG4uaDQsXG4uaDUsXG4uaDYge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnRleHQtYmx1ZSB7XG4gIGNvbG9yOiAjMTExMDEwO1xufVxuXG4udGV4dC1yZWQge1xuICBjb2xvcjogI2VkMzIzODtcbn1cblxuLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzEzYWE5Mjtcbn1cblxuLmRyb3Bkb3duLWxpc3Qge1xuICB6LWluZGV4OiA5O1xufVxuXG4uY3Jzci1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub3ZlcmFsbC1odC1ib3gge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY2FyZC1taW4taHQge1xuICBtaW4taGVpZ2h0OiA3MHZoO1xufVxuXG5jaGFydC1sZWdlbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnBhZ2UtY29udGVudC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcbn1cbi5wYWdlLWNvbnRlbnQtaGVhZGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnBhZ2UtY29udGVudC1oZWFkZXIgaDMgc3Bhbi5oZC1kYXRlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2VkMzIzODtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDdweDtcbn1cblxuLnBhZ2UtY29udGVudC1ib2R5IHtcbiAgcGFkZGluZzogMHB4IDE1cHggMTVweCAxNXB4O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMDtcbn1cbi5jYXJkLm92ZXJhbGwtY29udGVudGJsb2NrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggNXB4IDI0cHggMHB4IHJnYmEoNjgsIDEwMiwgMjQyLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDFweCA1cHggMjRweCAwcHggcmdiYSg2OCwgMTAyLCAyNDIsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDFweCA1cHggMjRweCAwcHggcmdiYSg2OCwgMTAyLCAyNDIsIDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uY2FyZC5vdmVyYWxsLWNvbnRlbnRibG9jayAub3ZlcmFsbC1jb250ZW50LWhlYWRlciBoNCB7XG4gIHBhZGRpbmc6IDI1cHggMjVweCAwIDI1cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5jYXJkLm92ZXJhbGwtY29udGVudGJsb2NrIC5vdmVyYWxsLWNvbnRlbnQtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDE1cHg7XG59XG4uY2FyZC5vdmVyYWxsLWNvbnRlbnRibG9jayAub3ZlcmFsbC1jb250ZW50LWJvZHkgaDUge1xuICBmb250LXdlaWdodDogODAwO1xufVxuLmNhcmQud2lkZ2V0LWJsb2NrIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwIDZweCAwcHggcmdiYSg0LCAwLCAwLCAwLjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwIDZweCAwcHggcmdiYSg0LCAwLCAwLCAwLjIpO1xuICBib3gtc2hhZG93OiAwcHggMCA2cHggMHB4IHJnYmEoNCwgMCwgMCwgMC4yKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmNhcmQud2lkZ2V0LWJsb2NrLndpZGdldC1ibG9jay0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmM1ODtcbn1cbi5jYXJkLndpZGdldC1ibG9jay53aWRnZXQtYmxvY2stMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxM2M5Y2E7XG59XG4uY2FyZC53aWRnZXQtYmxvY2sud2lkZ2V0LWJsb2NrLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MDg0O1xufVxuLmNhcmQud2lkZ2V0LWJsb2NrLndpZGdldC1ibG9jay00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTVhNTtcbn1cbi5jYXJkLndpZGdldC1ibG9jayAud2lkZ2V0LXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uY2FyZC53aWRnZXQtYmxvY2sgaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50b3RhbC1zaXRlcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4udG90YWwtc2l0ZXMgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG90YWwtc2l0ZXMgbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcInxcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAycHg7XG59XG4udG90YWwtc2l0ZXMgbGk6bGFzdC1jaGlsZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2YmFyIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB9XG5cbiAgLnBhZ2UtYm9keS5wZ2JvZHloYWxmIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucGFnZS1zaWRlYmFyLnBnc2lkZWJhcnNob3cge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHggIWltcG9ydGFudDtcbiAgfVxuICAucGFnZS1zaWRlYmFyLnBnc2lkZWJhcmhpZGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaWRlLW1lbnUge1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbn1cbi5zdGFyIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG5cbi5wZy1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnBhZ2Utc2lkZWJhciB7XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5wYWdlLXNpZGViYXIucGdzaWRlYmFyc2hvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnBhZ2Utc2lkZWJhci5wZ3NpZGViYXJoaWRlIHtcbiAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnBhZ2UtYm9keSB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbn1cbi5wYWdlLWJvZHkucGdib2R5aGFsZiB7XG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5wYWdlLWJvZHkucGdib2R5ZnVsbCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufSIsIi5idG4ge1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDApO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG59IiwiLy8gZm9udHNcclxuJG51bml0bzonTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuJHBvcHBpbnM6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4vLyBjb2xvclxyXG4kbGlnaHQtZ3JleTojZjlmYWZjO1xyXG4kd2hpdGU6I2ZmZjtcclxuJGJsdWU6cmdiKDE3LCAxNiwgMTYpO1xyXG4kcmVkOiNlZDMyMzg7XHJcbiR5ZWxsb3c6I2ZkYzAwMDtcclxuJGdyZWVuOiMxM2FhOTI7XHJcbiRncmFkMTpibGFjaztcclxuJGdyYWQyOmJsYWNrO1xyXG4kaG92ZXItY29sb3I6cmdiKDEzNCwgMjMzLCAyMzYpO1xyXG4vLyBzaXRlXHJcbiRiYXNlLXRleHQ6IzM0M2E0MDsiLCIubmcyLXNtYXJ0LWFjdGlvbnMge1xyXG4gICAgY29sb3I6ICRibHVlIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRoIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXNwZWNpYWwtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXRvdGFsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX2xlbmd0aCBzZWxlY3QgIHtcclxucGFkZGluZzogMCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX2ZpbHRlciBpbnB1dHtcclxuICAgIHBhZGRpbmc6IDAlIWltcG9ydGFudDtcclxufVxyXG50YWJsZS5kYXRhVGFibGUgdGJvZHkgdGQge1xyXG4gICAgcGFkZGluZzogMXB4IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfcGFnaW5hdGUgLnBhZ2luYXRlX2J1dHRvbiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxLjVlbTtcclxuICAgIHBhZGRpbmc6IDAuMGVtIDAuNWVtIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgO1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiBvdmVyZmxvdy14OiBoaWRkZW4haW1wb3J0YW50O1xyXG59ICIsImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiAgICBjb2xvcjogJGJhc2UtdGV4dDtcclxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucztcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG4uaDEsXHJcbi5oMixcclxuLmgzLFxyXG4uaDQsXHJcbi5oNSxcclxuLmg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAkbnVuaXRvO1xyXG59XHJcblxyXG4udGV4dC1ibHVlIHtcclxuICAgIGNvbG9yOiAkYmx1ZTtcclxufVxyXG5cclxuLnRleHQtcmVkIHtcclxuICAgIGNvbG9yOiAkcmVkO1xyXG59XHJcblxyXG4udGV4dC1ncmVlbiB7XHJcbiAgICBjb2xvcjogJGdyZWVuO1xyXG59XHJcblxyXG4vLyBvdmVyYWxsLXN0eWxlcyBzdGFydFxyXG4uZHJvcGRvd24tbGlzdCB7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG4uY3Jzci1wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm92ZXJhbGwtaHQtYm94IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jYXJkLW1pbi1odCB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xyXG59XHJcblxyXG5jaGFydC1sZWdlbmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRlbnQtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcclxuICAgIGgzIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAmLmhkLWRhdGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnBhZ2UtY29udGVudC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4IDE1cHggMTVweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgJi5vdmVyYWxsLWNvbnRlbnRibG9jayB7XHJcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdyggMXB4LCA1cHgsIDI0cHgsIDBweCwgcmdiYSg2OCwgMTAyLCAyNDIsIDAuMSkpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgLm92ZXJhbGwtY29udGVudC1oZWFkZXIge1xyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDI1cHggMCAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmFsbC1jb250ZW50LWJvZHkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi53aWRnZXQtYmxvY2sge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBAaW5jbHVkZSBib3gtc2hhZG93KCAwcHgsIDAsIDZweCwgMHB4LCByZ2JhKDQsIDAsIDAsIDAuMikpO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjNzLCBlYXNlKTtcclxuICAgICAgICAmLndpZGdldC1ibG9jay0xIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmM1ODtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi53aWRnZXQtYmxvY2stMiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxM2M5Y2E7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYud2lkZ2V0LWJsb2NrLTMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MDg0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLndpZGdldC1ibG9jay00IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTVhNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndpZGdldC10ZXh0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b3RhbC1zaXRlcyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGxpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJ8XCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBvdmVyYWxsLXN0eWxlcyBlbmQiLCIvLyBib3hzaGFkb3dcclxuQG1peGluIGJveC1zaGFkb3coJG9mZnNldC14LCAkb2Zmc2V0LXksICRibHVyLXJhZGl1cywgJHNwcmVhZC1yYWRpdXMsICRjb2xvciwgJGluc2V0OiBmYWxzZSkge1xyXG4gICAgQGlmICRpbnNldCB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0ICRvZmZzZXQteCAkb2Zmc2V0LXkgJGJsdXItcmFkaXVzICRzcHJlYWQtcmFkaXVzICRjb2xvcjtcclxuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgJG9mZnNldC14ICRvZmZzZXQteSAkYmx1ci1yYWRpdXMgJHNwcmVhZC1yYWRpdXMgJGNvbG9yO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgJG9mZnNldC14ICRvZmZzZXQteSAkYmx1ci1yYWRpdXMgJHNwcmVhZC1yYWRpdXMgJGNvbG9yO1xyXG4gICAgfVxyXG4gICAgQGVsc2Uge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkb2Zmc2V0LXggJG9mZnNldC15ICRibHVyLXJhZGl1cyAkc3ByZWFkLXJhZGl1cyAkY29sb3I7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICRvZmZzZXQteCAkb2Zmc2V0LXkgJGJsdXItcmFkaXVzICRzcHJlYWQtcmFkaXVzICRjb2xvcjtcclxuICAgIGJveC1zaGFkb3c6ICRvZmZzZXQteCAkb2Zmc2V0LXkgJGJsdXItcmFkaXVzICRzcHJlYWQtcmFkaXVzICRjb2xvcjtcclxuICAgIH1cclxufVxyXG4vLyB0cmFuc2l0aW9uXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLXByb3BlcnR5LCAkdHJhbnNpdGlvbi10aW1lLCAkbWV0aG9kKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLXByb3BlcnR5ICR0cmFuc2l0aW9uLXRpbWUgJG1ldGhvZDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tcHJvcGVydHkgJHRyYW5zaXRpb24tdGltZSAkbWV0aG9kO1xyXG4gICAgLW1zLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLXByb3BlcnR5ICR0cmFuc2l0aW9uLXRpbWUgJG1ldGhvZDtcclxuICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uLXByb3BlcnR5ICR0cmFuc2l0aW9uLXRpbWUgJG1ldGhvZDtcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLXByb3BlcnR5ICR0cmFuc2l0aW9uLXRpbWUgJG1ldGhvZDtcclxufVxyXG4vLyByZXNwb25zaXZlIFxyXG4kYnJlYWtwb2ludHM6IChcclxuICAgIHhzOiA1NzZweCxcclxuICAgIHNtOiA3NjhweCxcclxuICAgIG1kOiA5OTJweCxcclxuICAgIGxnOiAxMjAwcHhcclxuKTtcclxuLy8gUkVTUE9ORCBCRUxPV1xyXG4vLyBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7fVxyXG5AbWl4aW4gcmVzcG9uZC1iZWxvdygkYnJlYWtwb2ludCkge1xyXG4gICAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxyXG4gICAgIFx0ICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XHJcbiAgICAgICAgXHQvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXHJcbiAgICAgICAgXHRAbWVkaWEgKG1heC13aWR0aDogKCRicmVha3BvaW50LXZhbHVlIC0gMSkpIHtcclxuICAgICAgICAgICAgXHRcdEBjb250ZW50O1xyXG4gICAgICAgXHQgfVxyXG4gICAgICAgICAgICAgIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cclxuICAgIH1cclxuICAgIEBlbHNlIHtcclxuICAgICAgICAvLyBMb2cgYSB3YXJuaW5nLlxyXG4gICAgICAgIEB3YXJuICdJbnZhbGlkIGJyZWFrcG9pbnQ6ICN7JGJyZWFrcG9pbnR9Lic7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiByZXNwb25kLWJldHdlZW4oJGxvd2VyLCAkdXBwZXIpIHtcclxuICAgIC8vIElmIGJvdGggdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cyBleGlzdCBpbiB0aGUgbWFwLlxyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyKSBhbmQgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIpIHtcclxuICAgICAgICAvLyBHZXQgdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cy5cclxuICAgICAgICAkbG93ZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XHJcbiAgICAgICAgJHVwcGVyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xyXG4gICAgICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGxvd2VyLWJyZWFrcG9pbnQpIGFuZCAobWF4LXdpZHRoOiAoJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgLy8gSWYgb25lIG9yIGJvdGggb2YgdGhlIGJyZWFrcG9pbnRzIGRvbid0IGV4aXN0LlxyXG4gICAgfVxyXG4gICAgQGVsc2Uge1xyXG5cclxuICAgICAgICAvLyBJZiBsb3dlciBicmVha3BvaW50IGlzIGludmFsaWQuXHJcbiAgICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlcikgPT0gZmFsc2UpIHtcclxuICAgIFxyXG4gICAgICAgICAgLy8gTG9nIGEgd2FybmluZy5cclxuICAgICAgICAgIEB3YXJuICdZb3VyIGxvd2VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JGxvd2VyfS4nO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIElmIHVwcGVyIGJyZWFrcG9pbnQgaXMgaW52YWxpZC5cclxuICAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSA9PSBmYWxzZSkge1xyXG4gICAgXHJcbiAgICAgICAgICAvLyBMb2cgYSB3YXJuaW5nLlxyXG4gICAgICAgICAgQHdhcm4gJ1lvdXIgdXBwZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbn1cclxuIiwiQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhtZCkge1xyXG4gICAgLy8gaGVhZGVyXHJcbiAgICAubmF2YmFye1xyXG4gICAgICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzaWRlbWVudVxyXG4gICAgLnBhZ2UtYm9keXtcclxuICAgICAgICAmLnBnYm9keWhhbGZ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDowcHghaW1wb3J0YW50IDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFnZS1zaWRlYmFye1xyXG4mLnBnc2lkZWJhcnNob3d7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4IWltcG9ydGFudDtcclxufVxyXG4mLnBnc2lkZWJhcmhpZGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4IWltcG9ydGFudDtcclxufVxyXG4gICAgfVxyXG4gICAgLnNpZGUtbWVudXtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return [{ type: _shared_service_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["SharedServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/header/header.component */ "aZ8m");
/* harmony import */ var _shared_components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/sidemenu/sidemenu.component */ "GGwj");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _shared_service_shared_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/service/shared-service.service */ "Hj+p");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "oTcB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng_image_fullscreen_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-image-fullscreen-view */ "iO4A");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-smart-table */ "DjsD");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-multiselect-dropdown */ "UPO+");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-ckeditor */ "+l4i");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-material/app-material.module */ "kJ4b");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-mask */ "bOtU");
/* harmony import */ var _components_master_admin_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/master/admin/add-admin/add-admin.component */ "ED6/");
/* harmony import */ var _components_master_admin_view_admin_view_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/master/admin/view-admin/view-admin.component */ "3i3o");
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/components/layout/layout.component */ "Xn/w");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/auth/login/login.component */ "HzFZ");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_auth_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/auth/admin-profile/admin-profile.component */ "VdIu");
/* harmony import */ var _components_master_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/master/member/add-member/add-member.component */ "RJ0n");
/* harmony import */ var _components_master_member_member_display_member_display_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/master/member/member-display/member-display.component */ "A27c");
/* harmony import */ var _components_master_services_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/master/services/add-service/add-service.component */ "jYfj");
/* harmony import */ var _components_master_services_view_service_view_service_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/master/services/view-service/view-service.component */ "QGzq");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_service_shared_service_service__WEBPACK_IMPORTED_MODULE_8__["SharedServiceService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng_image_fullscreen_view__WEBPACK_IMPORTED_MODULE_12__["NgImageFullscreenViewModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_ckeditor__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
            _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_18__["AppMaterialModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__["Ng2SmartTableModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_15__["ChartsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__["NgMultiSelectDropDownModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_19__["NgxMaskModule"].forRoot({
                showMaskTyped: true,
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_22__["LayoutComponent"], _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"], _components_auth_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_25__["AdminProfileComponent"], _components_master_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_26__["AddMemberComponent"], _components_master_member_member_display_member_display_component__WEBPACK_IMPORTED_MODULE_27__["MemberDisplayComponent"], _components_master_services_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_28__["AddServiceComponent"], _components_master_services_view_service_view_service_component__WEBPACK_IMPORTED_MODULE_29__["ViewServiceComponent"], _shared_components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_6__["SidemenuComponent"],
        _components_master_admin_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_20__["AddAdminComponent"],
        _components_master_admin_view_admin_view_admin_component__WEBPACK_IMPORTED_MODULE_21__["ViewAdminComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ng_image_fullscreen_view__WEBPACK_IMPORTED_MODULE_12__["NgImageFullscreenViewModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        ngx_ckeditor__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
        _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_18__["AppMaterialModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__["Ng2SmartTableModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_15__["ChartsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__["NgMultiSelectDropDownModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_19__["NgxMaskModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
                    _shared_components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_6__["SidemenuComponent"],
                    _components_master_admin_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_20__["AddAdminComponent"],
                    _components_master_admin_view_admin_view_admin_component__WEBPACK_IMPORTED_MODULE_21__["ViewAdminComponent"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    ng_image_fullscreen_view__WEBPACK_IMPORTED_MODULE_12__["NgImageFullscreenViewModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    ngx_ckeditor__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
                    _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_18__["AppMaterialModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_13__["Ng2SmartTableModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_15__["ChartsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__["NgMultiSelectDropDownModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_19__["NgxMaskModule"].forRoot({
                        showMaskTyped: true,
                    })
                ],
                providers: [_shared_service_shared_service_service__WEBPACK_IMPORTED_MODULE_8__["SharedServiceService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_service_shared_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/shared-service.service */ "Hj+p");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





class HeaderComponent {
    constructor(_sharedata) {
        this._sharedata = _sharedata;
        this.name = '';
        if (!!localStorage.getItem('gearUpToken'))
            this.name = JSON.parse(localStorage.getItem('userData')).name;
    }
    ngOnInit() {
    }
    clickbtn() {
        this._sharedata.setter();
    }
    logOut() {
        localStorage.clear();
        location.href = '/auth/login';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["SharedServiceService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "admin-header"], ["src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c01c4ed-765d-4373-985a-67155a7711a2/d7c0bo5-57b12124-18af-4484-bee2-3a21e18b04ad.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjMDFjNGVkLTc2NWQtNDM3My05ODVhLTY3MTU1YTc3MTFhMlwvZDdjMGJvNS01N2IxMjEyNC0xOGFmLTQ0ODQtYmVlMi0zYTIxZTE4YjA0YWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gzRYQNn1zo0rN775ThKov2POTkz-qVsVsqjzZvzqC0g", "alt", "logo", "width", "5%"], [1, "navbar-brand", "ml-2"], [1, "mtl-icn", 3, "click"], [1, "material-icons"], ["id", "navbarSupportedContent", 1, "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, ""], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "dropdown-menu-right"], ["routerLink", "/admin-profile", 1, "dropdown-item"], [1, "dropdown-item", "logOut", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.clickbtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_17_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%] {\n  line-height: 16px !important;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%] {\n  border-top: 7px solid #adadad !important;\n  border-left: 7px solid transparent !important;\n  border-right: 7px solid transparent !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:before {\n  background: transparent !important;\n  border-radius: 50px !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:before {\n  background: transparent !important;\n  border-radius: 50px !important;\n}\n.rd-btn[_ngcontent-%COMP%]   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + div[_ngcontent-%COMP%]:after {\n  background-color: #111010 !important;\n  border-color: #111010 !important;\n  transform: rotate(0deg) scale(1) !important;\n  border-radius: 50px;\n  width: 7px !important;\n  height: 7px !important;\n  margin-top: -5px !important;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0);\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #111010;\n}\n.ng2-smart-actions[_ngcontent-%COMP%] {\n  color: #111010 !important;\n}\n.table[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #111010 !important;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n  vertical-align: middle;\n}\n.table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background-color: #111010;\n  color: #fff;\n}\n.table[_ngcontent-%COMP%]   .table-special-header[_ngcontent-%COMP%] {\n  background-color: #fdc000;\n}\n.table[_ngcontent-%COMP%]   .table-total[_ngcontent-%COMP%] {\n  background-color: #ed3238;\n  color: #fff;\n}\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_length[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0% !important;\n}\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0% !important;\n}\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1px 10px !important;\n}\n.dataTables_wrapper[_ngcontent-%COMP%]   .dataTables_paginate[_ngcontent-%COMP%]   .paginate_button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: inline-block;\n  min-width: 1.5em;\n  padding: 0em 0.5em !important;\n  margin-left: 2px;\n  text-align: center;\n  text-decoration: none;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: hidden !important;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #f9fafc;\n  color: #343a40;\n  font-family: \"Poppins\", sans-serif;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n}\n.text-blue[_ngcontent-%COMP%] {\n  color: #111010;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #ed3238;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #13aa92;\n}\n.dropdown-list[_ngcontent-%COMP%] {\n  z-index: 9;\n}\n.crsr-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.overall-ht-box[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.card-min-ht[_ngcontent-%COMP%] {\n  min-height: 70vh;\n}\nchart-legend[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  transform: translateY(-50%);\n}\n.page-content-header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 25px 25px 25px 25px;\n}\n.page-content-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.page-content-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span.hd-date[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #ed3238;\n  position: relative;\n  top: 7px;\n}\n.page-content-body[_ngcontent-%COMP%] {\n  padding: 0px 15px 15px 15px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 0;\n}\n.card.overall-contentblock[_ngcontent-%COMP%] {\n  box-shadow: 1px 5px 24px 0px rgba(68, 102, 242, 0.1);\n  margin-bottom: 25px;\n}\n.card.overall-contentblock[_ngcontent-%COMP%]   .overall-content-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 25px 25px 0 25px;\n  margin: 0;\n  font-weight: 800;\n}\n.card.overall-contentblock[_ngcontent-%COMP%]   .overall-content-body[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n}\n.card.overall-contentblock[_ngcontent-%COMP%]   .overall-content-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.card.widget-block[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  border: 0;\n  color: #fff;\n  box-shadow: 0px 0 6px 0px rgba(4, 0, 0, 0.2);\n  transition: all 0.3s ease;\n}\n.card.widget-block.widget-block-1[_ngcontent-%COMP%] {\n  background-color: #ffbc58;\n}\n.card.widget-block.widget-block-2[_ngcontent-%COMP%] {\n  background-color: #13c9ca;\n}\n.card.widget-block.widget-block-3[_ngcontent-%COMP%] {\n  background-color: #ff8084;\n}\n.card.widget-block.widget-block-4[_ngcontent-%COMP%] {\n  background-color: #a5a5a5;\n}\n.card.widget-block[_ngcontent-%COMP%]   .widget-text[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.card.widget-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n}\n.total-sites[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-bottom: 15px;\n}\n.total-sites[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  font-weight: 600;\n  padding-right: 25px;\n  font-size: 16px;\n  position: relative;\n}\n.total-sites[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"|\";\n  position: absolute;\n  right: 10px;\n  bottom: 2px;\n}\n.total-sites[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: \"\";\n}\n@media (max-width: 991px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 0;\n    display: contents;\n  }\n\n  .page-body.pgbodyhalf[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0px !important;\n  }\n\n  .page-sidebar.pgsidebarshow[_ngcontent-%COMP%] {\n    margin-left: -250px !important;\n  }\n  .page-sidebar.pgsidebarhide[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n\n  .side-menu[_ngcontent-%COMP%] {\n    z-index: 1;\n  }\n}\n.star[_ngcontent-%COMP%] {\n  color: red;\n  margin-left: 1px;\n  margin-right: 1px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 0;\n}\n.navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #86e9ec;\n  color: #343a40;\n}\n.navbar.admin-header[_ngcontent-%COMP%] {\n  background: linear-gradient(34deg, black 0%, black 100%);\n  box-shadow: 0 0 8px 0px rgba(4, 0, 0, 0.1);\n}\n.navbar.admin-header[_ngcontent-%COMP%]   .mtl-icn[_ngcontent-%COMP%] {\n  display: grid;\n  cursor: pointer;\n  color: #fff;\n}\n.navbar.admin-header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 0;\n}\n.navbar.admin-header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  padding: 0;\n  line-height: 0;\n}\n.navbar.admin-header[_ngcontent-%COMP%]   .logOut[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL19yYWRpb2J0bi5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9iYXNlL192YXJpYWJsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL190YWJsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9iYXNlL190aGVtZS5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2Jhc2UvX21peGlucy5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2Jhc2UvX3Jlc3BvbnNpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRVEsd0dBQUE7QUFDQSxxSEFBQTtBQUhSLDhFQUFBO0FDQ0k7RUFDSSw0QkFBQTtBQ0dSO0FERlE7RUFDSSxlQUFBO0FDSVo7QURGUTtFQUNJLHdDQUFBO0VBQ0EsNkNBQUE7RUFDQSw4Q0FBQTtBQ0laO0FERUk7RUFDSSxxQkFBQTtBQ0NSO0FER1k7RUFDSSxrQ0FBQTtFQUNBLDhCQUFBO0FDRGhCO0FETWdCO0VBQ0ksa0NBQUE7RUFDQSw4QkFBQTtBQ0pwQjtBRE1nQjtFQUNJLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDSnBCO0FDakNJO0VBQ0ksNkNBQUE7RUFDQSxxQkFBQTtBRG9DUjtBQ2hDQTtFQUNJLHlCQ0ZFO0FGcUNOO0FHM0NBO0VBQ0kseUJBQUE7QUg4Q0o7QUczQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUg4Q0o7QUc1Q1E7RUFDSSx5QkFBQTtBSDhDWjtBRzNDSTs7RUFFSSxnQkFBQTtFQUNBLHNCQUFBO0FINkNSO0FHM0NJO0VBQ0kseUJEWkY7RUNhRSxXRGREO0FGMkRQO0FHM0NJO0VBQ0kseUJEZEE7QUYyRFI7QUczQ0k7RUFDSSx5QkRsQkg7RUNtQkcsV0RyQkQ7QUZrRVA7QUd4Q0E7RUFDQSxzQkFBQTtBSDJDQTtBR3hDQTtFQUNJLHNCQUFBO0FIMkNKO0FHekNBO0VBQ0ksNEJBQUE7QUg0Q0o7QUd4Q0E7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBSDJDSjtBR3hDQTtFQUNDLDZCQUFBO0FIMkNEO0FJakdBO0VBQ0kseUJGR1E7RUVGUixjRllPO0VFWFAsa0NGREs7QUZxR1Q7QUlqR0E7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FKb0dKO0FJaEdJO0VBQ0kscUJBQUE7QUptR1I7QUkvRkE7Ozs7Ozs7Ozs7OztFQVlJLGlDRjdCSTtBRitIUjtBSS9GQTtFQUNJLGNGNUJFO0FGOEhOO0FJL0ZBO0VBQ0ksY0YvQkM7QUZpSUw7QUkvRkE7RUFDSSxjRmpDRztBRm1JUDtBSTlGQTtFQUNJLFVBQUE7QUppR0o7QUk5RkE7RUFDSSxlQUFBO0FKaUdKO0FJOUZBO0VBQ0ksYUFBQTtBSmlHSjtBSTlGQTtFQUNJLGdCQUFBO0FKaUdKO0FJOUZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FKaUdKO0FJOUZBO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0FKaUdKO0FJaEdJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUprR1I7QUloR1k7RUFDSSxlQUFBO0VBQ0EsY0Z4RVg7RUV5RVcsa0JBQUE7RUFDQSxRQUFBO0FKa0doQjtBSTVGQTtFQUNJLDJCQUFBO0FKK0ZKO0FJNUZBO0VBQ0ksU0FBQTtBSitGSjtBSTlGSTtFQ25GQSxvREFBQTtFRHFGSSxtQkFBQTtBSmtHUjtBSWhHWTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FKa0doQjtBSS9GUTtFQUNJLDRCQUFBO0FKaUdaO0FJaEdZO0VBQ0ksZ0JBQUE7QUprR2hCO0FJOUZJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0Y1R0Q7RUdLSCw0Q0FBQTtFQVNBLHlCQUFBO0FMc01KO0FJckdRO0VBQ0kseUJBQUE7QUp1R1o7QUlyR1E7RUFDSSx5QkFBQTtBSnVHWjtBSXJHUTtFQUNJLHlCQUFBO0FKdUdaO0FJckdRO0VBQ0kseUJBQUE7QUp1R1o7QUlyR1E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBSnVHWjtBSXJHUTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBSnVHWjtBSWxHQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7QUpxR0o7QUlwR0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBSnNHUjtBSXJHUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FKdUdaO0FJcEdZO0VBQ0ksV0FBQTtBSnNHaEI7QUsvTlM7RUNqQ0Q7SUFDSSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VOb1FWOztFTTlQTTtJQUNJLFdBQUE7SUFDQSwyQkFBQTtFTmlRVjs7RU03UEY7SUFDSSw4QkFBQTtFTmdRRjtFTTlQRjtJQUNJLDJCQUFBO0VOZ1FGOztFTTdQRTtJQUNJLFVBQUE7RU5nUU47QUFDRjtBRjlRQTtFQUVJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FFK1FKO0FBOVJJO0VBQ0ksV0VFRDtBRitSUDtBQS9SSTtFQUNJLHVCRUtEO0VGSkMsVUFBQTtBQWlTUjtBQS9SUTtFQUNJLFdFTEw7QUZzU1A7QUFoU1k7RUFDSSx5QkFBQTtFQUNBLGNFQ0w7QUZpU1g7QUE5Ukk7RUFDSSx3REFBQTtFS1JKLDBDQUFBO0FMMlNKO0FBL1JJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxXRXBCRDtBRnFUUDtBQTdSUTtFQUNJLFdFekJMO0VGMEJLLFVBQUE7QUErUlo7QUE1Ulk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQThSaEI7QUF6UkE7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0FBMFJGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMDs0MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgJy4vYXNzZXRzL3Njc3MvYmFzZS92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2Jhc2UvbWl4aW5zJztcclxuQGltcG9ydCAnLi9hc3NldHMvc2Nzcy9jb21wb25lbnRzL3JhZGlvYnRuJztcclxuQGltcG9ydCAnLi9hc3NldHMvc2Nzcy9jb21wb25lbnRzL2J1dHRvbnMnO1xyXG5AaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvdGFibGVzJztcclxuQGltcG9ydCAnLi9hc3NldHMvc2Nzcy9iYXNlL3RoZW1lJztcclxuQGltcG9ydCAnLi9hc3NldHMvc2Nzcy9iYXNlL3Jlc3BvbnNpdmUnO1xyXG5cclxuXHJcbi5zdGFyXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbiIsIi5tdWx0aXNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAuZHJvcGRvd24tYnRuIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLnNlbGVjdGVkLWl0ZW0ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcm9wZG93bi1kb3duIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNhZGFkYWQhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnJkLWJ0biB7XHJcbiAgICAuZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgICAgei1pbmRleDogMSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCB7XHJcbiAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF0rZGl2IHtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gICAgICAgICAgICAmOmNoZWNrZWQrZGl2IHtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkYmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSkhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDdweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3cHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQrZGl2IHtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwOzQwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXBcIik7XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biB7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuc2VsZWN0ZWQtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi1kb3duIHtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNhZGFkYWQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ucmQtYnRuIC5kcm9wZG93bi1saXN0IHtcbiAgei1pbmRleDogMSAhaW1wb3J0YW50O1xufVxuLnJkLWJ0biAubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGRpdjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG59XG4ucmQtYnRuIC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBkaXY6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xufVxuLnJkLWJ0biAubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgZGl2OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTAxMCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMxMTEwMTAgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDdweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG46Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTAxMDtcbn1cblxuLm5nMi1zbWFydC1hY3Rpb25zIHtcbiAgY29sb3I6ICMxMTEwMTAgIWltcG9ydGFudDtcbn1cblxuLnRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGFibGUgdGggYSB7XG4gIGNvbG9yOiAjMTExMDEwICFpbXBvcnRhbnQ7XG59XG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBmb250LXdlaWdodDogNTAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnRhYmxlIC50YWJsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMDEwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi50YWJsZSAudGFibGUtc3BlY2lhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjMDAwO1xufVxuLnRhYmxlIC50YWJsZS10b3RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDMyMzg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX2xlbmd0aCBzZWxlY3Qge1xuICBwYWRkaW5nOiAwJSAhaW1wb3J0YW50O1xufVxuXG4uZGF0YVRhYmxlc193cmFwcGVyIC5kYXRhVGFibGVzX2ZpbHRlciBpbnB1dCB7XG4gIHBhZGRpbmc6IDAlICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0ZCB7XG4gIHBhZGRpbmc6IDFweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfcGFnaW5hdGUgLnBhZ2luYXRlX2J1dHRvbiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxLjVlbTtcbiAgcGFkZGluZzogMGVtIDAuNWVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYztcbiAgY29sb3I6ICMzNDNhNDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbi5oMSxcbi5oMixcbi5oMyxcbi5oNCxcbi5oNSxcbi5oNiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGV4dC1ibHVlIHtcbiAgY29sb3I6ICMxMTEwMTA7XG59XG5cbi50ZXh0LXJlZCB7XG4gIGNvbG9yOiAjZWQzMjM4O1xufVxuXG4udGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMTNhYTkyO1xufVxuXG4uZHJvcGRvd24tbGlzdCB7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5jcnNyLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vdmVyYWxsLWh0LWJveCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jYXJkLW1pbi1odCB7XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG59XG5cbmNoYXJ0LWxlZ2VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ucGFnZS1jb250ZW50LWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyNXB4IDI1cHggMjVweCAyNXB4O1xufVxuLnBhZ2UtY29udGVudC1oZWFkZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ucGFnZS1jb250ZW50LWhlYWRlciBoMyBzcGFuLmhkLWRhdGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZWQzMjM4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3B4O1xufVxuXG4ucGFnZS1jb250ZW50LWJvZHkge1xuICBwYWRkaW5nOiAwcHggMTVweCAxNXB4IDE1cHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAwO1xufVxuLmNhcmQub3ZlcmFsbC1jb250ZW50YmxvY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCA1cHggMjRweCAwcHggcmdiYSg2OCwgMTAyLCAyNDIsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDVweCAyNHB4IDBweCByZ2JhKDY4LCAxMDIsIDI0MiwgMC4xKTtcbiAgYm94LXNoYWRvdzogMXB4IDVweCAyNHB4IDBweCByZ2JhKDY4LCAxMDIsIDI0MiwgMC4xKTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5jYXJkLm92ZXJhbGwtY29udGVudGJsb2NrIC5vdmVyYWxsLWNvbnRlbnQtaGVhZGVyIGg0IHtcbiAgcGFkZGluZzogMjVweCAyNXB4IDAgMjVweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogODAwO1xufVxuLmNhcmQub3ZlcmFsbC1jb250ZW50YmxvY2sgLm92ZXJhbGwtY29udGVudC1ib2R5IHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggMTVweDtcbn1cbi5jYXJkLm92ZXJhbGwtY29udGVudGJsb2NrIC5vdmVyYWxsLWNvbnRlbnQtYm9keSBoNSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uY2FyZC53aWRnZXQtYmxvY2sge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDAgNnB4IDBweCByZ2JhKDQsIDAsIDAsIDAuMik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDAgNnB4IDBweCByZ2JhKDQsIDAsIDAsIDAuMik7XG4gIGJveC1zaGFkb3c6IDBweCAwIDZweCAwcHggcmdiYSg0LCAwLCAwLCAwLjIpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uY2FyZC53aWRnZXQtYmxvY2sud2lkZ2V0LWJsb2NrLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYzU4O1xufVxuLmNhcmQud2lkZ2V0LWJsb2NrLndpZGdldC1ibG9jay0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzYzljYTtcbn1cbi5jYXJkLndpZGdldC1ibG9jay53aWRnZXQtYmxvY2stMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjgwODQ7XG59XG4uY2FyZC53aWRnZXQtYmxvY2sud2lkZ2V0LWJsb2NrLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVhNWE1O1xufVxuLmNhcmQud2lkZ2V0LWJsb2NrIC53aWRnZXQtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jYXJkLndpZGdldC1ibG9jayBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRvdGFsLXNpdGVzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi50b3RhbC1zaXRlcyBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50b3RhbC1zaXRlcyBsaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwifFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDJweDtcbn1cbi50b3RhbC1zaXRlcyBsaTpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gIH1cblxuICAucGFnZS1ib2R5LnBnYm9keWhhbGYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYWdlLXNpZGViYXIucGdzaWRlYmFyc2hvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5wYWdlLXNpZGViYXIucGdzaWRlYmFyaGlkZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNpZGUtbWVudSB7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuLnN0YXIge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cblxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDA7XG59XG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2ZTllYztcbiAgY29sb3I6ICMzNDNhNDA7XG59XG4ubmF2YmFyLmFkbWluLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNGRlZywgYmxhY2sgMCUsIGJsYWNrIDEwMCUpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggMHB4IHJnYmEoNCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgOHB4IDBweCByZ2JhKDQsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMHB4IHJnYmEoNCwgMCwgMCwgMC4xKTtcbn1cbi5uYXZiYXIuYWRtaW4taGVhZGVyIC5tdGwtaWNuIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5uYXZiYXIuYWRtaW4taGVhZGVyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMDtcbn1cbi5uYXZiYXIuYWRtaW4taGVhZGVyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsgLm1hdGVyaWFsLWljb25zIHtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG4ubmF2YmFyLmFkbWluLWhlYWRlciAubG9nT3V0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMS41cmVtO1xuICBjbGVhcjogYm90aDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59IiwiLmJ0biB7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMCk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbn0iLCIvLyBmb250c1xyXG4kbnVuaXRvOidOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4kcG9wcGluczonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbi8vIGNvbG9yXHJcbiRsaWdodC1ncmV5OiNmOWZhZmM7XHJcbiR3aGl0ZTojZmZmO1xyXG4kYmx1ZTpyZ2IoMTcsIDE2LCAxNik7XHJcbiRyZWQ6I2VkMzIzODtcclxuJHllbGxvdzojZmRjMDAwO1xyXG4kZ3JlZW46IzEzYWE5MjtcclxuJGdyYWQxOmJsYWNrO1xyXG4kZ3JhZDI6YmxhY2s7XHJcbiRob3Zlci1jb2xvcjpyZ2IoMTM0LCAyMzMsIDIzNik7XHJcbi8vIHNpdGVcclxuJGJhc2UtdGV4dDojMzQzYTQwOyIsIi5uZzItc21hcnQtYWN0aW9ucyB7XHJcbiAgICBjb2xvcjogJGJsdWUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGgge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsdWUhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcbiAgICAudGFibGUtc3BlY2lhbC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3c7XHJcbiAgICB9XHJcbiAgICAudGFibGUtdG90YWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfbGVuZ3RoIHNlbGVjdCAge1xyXG5wYWRkaW5nOiAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRhVGFibGVzX3dyYXBwZXIgLmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0e1xyXG4gICAgcGFkZGluZzogMCUhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxcHggMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmRhdGFUYWJsZXNfd3JhcHBlciAuZGF0YVRhYmxlc19wYWdpbmF0ZSAucGFnaW5hdGVfYnV0dG9uIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDEuNWVtO1xyXG4gICAgcGFkZGluZzogMC4wZW0gMC41ZW0haW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSA7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuIG92ZXJmbG93LXg6IGhpZGRlbiFpbXBvcnRhbnQ7XHJcbn0gIiwiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcclxuICAgIGNvbG9yOiAkYmFzZS10ZXh0O1xyXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYSB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbi5oMSxcclxuLmgyLFxyXG4uaDMsXHJcbi5oNCxcclxuLmg1LFxyXG4uaDYge1xyXG4gICAgZm9udC1mYW1pbHk6ICRudW5pdG87XHJcbn1cclxuXHJcbi50ZXh0LWJsdWUge1xyXG4gICAgY29sb3I6ICRibHVlO1xyXG59XHJcblxyXG4udGV4dC1yZWQge1xyXG4gICAgY29sb3I6ICRyZWQ7XHJcbn1cclxuXHJcbi50ZXh0LWdyZWVuIHtcclxuICAgIGNvbG9yOiAkZ3JlZW47XHJcbn1cclxuXHJcbi8vIG92ZXJhbGwtc3R5bGVzIHN0YXJ0XHJcbi5kcm9wZG93bi1saXN0IHtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbi5jcnNyLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ub3ZlcmFsbC1odC1ib3gge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNhcmQtbWluLWh0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbmNoYXJ0LWxlZ2VuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLnBhZ2UtY29udGVudC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDI1cHggMjVweCAyNXB4O1xyXG4gICAgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICYuaGQtZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGFnZS1jb250ZW50LWJvZHkge1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHggMTVweCAxNXB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICAmLm92ZXJhbGwtY29udGVudGJsb2NrIHtcclxuICAgICAgICBAaW5jbHVkZSBib3gtc2hhZG93KCAxcHgsIDVweCwgMjRweCwgMHB4LCByZ2JhKDY4LCAxMDIsIDI0MiwgMC4xKSk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAub3ZlcmFsbC1jb250ZW50LWhlYWRlciB7XHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMjVweCAwIDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVyYWxsLWNvbnRlbnQtYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLndpZGdldC1ibG9jayB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coIDBweCwgMCwgNnB4LCAwcHgsIHJnYmEoNCwgMCwgMCwgMC4yKSk7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuM3MsIGVhc2UpO1xyXG4gICAgICAgICYud2lkZ2V0LWJsb2NrLTEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYzU4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLndpZGdldC1ibG9jay0yIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzYzljYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi53aWRnZXQtYmxvY2stMyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgwODQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYud2lkZ2V0LWJsb2NrLTQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVhNWE1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAud2lkZ2V0LXRleHQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRvdGFsLXNpdGVzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcInxcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIG92ZXJhbGwtc3R5bGVzIGVuZCIsIi8vIGJveHNoYWRvd1xyXG5AbWl4aW4gYm94LXNoYWRvdygkb2Zmc2V0LXgsICRvZmZzZXQteSwgJGJsdXItcmFkaXVzLCAkc3ByZWFkLXJhZGl1cywgJGNvbG9yLCAkaW5zZXQ6IGZhbHNlKSB7XHJcbiAgICBAaWYgJGluc2V0IHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgJG9mZnNldC14ICRvZmZzZXQteSAkYmx1ci1yYWRpdXMgJHNwcmVhZC1yYWRpdXMgJGNvbG9yO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAkb2Zmc2V0LXggJG9mZnNldC15ICRibHVyLXJhZGl1cyAkc3ByZWFkLXJhZGl1cyAkY29sb3I7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAkb2Zmc2V0LXggJG9mZnNldC15ICRibHVyLXJhZGl1cyAkc3ByZWFkLXJhZGl1cyAkY29sb3I7XHJcbiAgICB9XHJcbiAgICBAZWxzZSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRvZmZzZXQteCAkb2Zmc2V0LXkgJGJsdXItcmFkaXVzICRzcHJlYWQtcmFkaXVzICRjb2xvcjtcclxuICAgIC1tb3otYm94LXNoYWRvdzogJG9mZnNldC14ICRvZmZzZXQteSAkYmx1ci1yYWRpdXMgJHNwcmVhZC1yYWRpdXMgJGNvbG9yO1xyXG4gICAgYm94LXNoYWRvdzogJG9mZnNldC14ICRvZmZzZXQteSAkYmx1ci1yYWRpdXMgJHNwcmVhZC1yYWRpdXMgJGNvbG9yO1xyXG4gICAgfVxyXG59XHJcbi8vIHRyYW5zaXRpb25cclxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24tcHJvcGVydHksICR0cmFuc2l0aW9uLXRpbWUsICRtZXRob2QpIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tcHJvcGVydHkgJHRyYW5zaXRpb24tdGltZSAkbWV0aG9kO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1wcm9wZXJ0eSAkdHJhbnNpdGlvbi10aW1lICRtZXRob2Q7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tcHJvcGVydHkgJHRyYW5zaXRpb24tdGltZSAkbWV0aG9kO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tcHJvcGVydHkgJHRyYW5zaXRpb24tdGltZSAkbWV0aG9kO1xyXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tcHJvcGVydHkgJHRyYW5zaXRpb24tdGltZSAkbWV0aG9kO1xyXG59XHJcbi8vIHJlc3BvbnNpdmUgXHJcbiRicmVha3BvaW50czogKFxyXG4gICAgeHM6IDU3NnB4LFxyXG4gICAgc206IDc2OHB4LFxyXG4gICAgbWQ6IDk5MnB4LFxyXG4gICAgbGc6IDEyMDBweFxyXG4pO1xyXG4vLyBSRVNQT05EIEJFTE9XXHJcbi8vIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHt9XHJcbkBtaXhpbiByZXNwb25kLWJlbG93KCRicmVha3BvaW50KSB7XHJcbiAgICAvLyBJZiB0aGUgYnJlYWtwb2ludCBleGlzdHMgaW4gdGhlIG1hcC5cclxuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXHJcbiAgICAgXHQgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcclxuICAgICAgICBcdC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cclxuICAgICAgICBcdEBtZWRpYSAobWF4LXdpZHRoOiAoJGJyZWFrcG9pbnQtdmFsdWUgLSAxKSkge1xyXG4gICAgICAgICAgICBcdFx0QGNvbnRlbnQ7XHJcbiAgICAgICBcdCB9XHJcbiAgICAgICAgICAgICAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxyXG4gICAgfVxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAgIC8vIExvZyBhIHdhcm5pbmcuXHJcbiAgICAgICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHJlc3BvbmQtYmV0d2VlbigkbG93ZXIsICR1cHBlcikge1xyXG4gICAgLy8gSWYgYm90aCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzIGV4aXN0IGluIHRoZSBtYXAuXHJcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xyXG4gICAgICAgIC8vIEdldCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzLlxyXG4gICAgICAgICRsb3dlci1icmVha3BvaW50OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGxvd2VyKTtcclxuICAgICAgICAkdXBwZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICR1cHBlcik7XHJcbiAgICAgICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6ICgkdXBwZXItYnJlYWtwb2ludCAtIDEpKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAvLyBJZiBvbmUgb3IgYm90aCBvZiB0aGUgYnJlYWtwb2ludHMgZG9uJ3QgZXhpc3QuXHJcbiAgICB9XHJcbiAgICBAZWxzZSB7XHJcblxyXG4gICAgICAgIC8vIElmIGxvd2VyIGJyZWFrcG9pbnQgaXMgaW52YWxpZC5cclxuICAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyKSA9PSBmYWxzZSkge1xyXG4gICAgXHJcbiAgICAgICAgICAvLyBMb2cgYSB3YXJuaW5nLlxyXG4gICAgICAgICAgQHdhcm4gJ1lvdXIgbG93ZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gSWYgdXBwZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxyXG4gICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIpID09IGZhbHNlKSB7XHJcbiAgICBcclxuICAgICAgICAgIC8vIExvZyBhIHdhcm5pbmcuXHJcbiAgICAgICAgICBAd2FybiAnWW91ciB1cHBlciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxufVxyXG4iLCJAaW5jbHVkZSByZXNwb25kLWJlbG93KG1kKSB7XHJcbiAgICAvLyBoZWFkZXJcclxuICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHNpZGVtZW51XHJcbiAgICAucGFnZS1ib2R5e1xyXG4gICAgICAgICYucGdib2R5aGFsZntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjBweCFpbXBvcnRhbnQgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYWdlLXNpZGViYXJ7XHJcbiYucGdzaWRlYmFyc2hvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHghaW1wb3J0YW50O1xyXG59XHJcbiYucGdzaWRlYmFyaGlkZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHghaW1wb3J0YW50O1xyXG59XHJcbiAgICB9XHJcbiAgICAuc2lkZS1tZW51e1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _shared_service_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["SharedServiceService"] }]; }, null); })();


/***/ }),

/***/ "jT/F":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk/clients/s3 */ "tegk");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__);



class UploadService {
    constructor() { }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    getFileExtension(filename) {
        var array = filename.split('.');
        return array[array.length - 1];
    }
    uploadFile(file, cb) {
        console.log(file);
        const contentType = file.type;
        if (this.getFileExtension(file.name) != 'jpg') {
            console.log('There was an error uploading your file: jpg');
            return;
        }
        const bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__({
            accessKeyId: "AKIAVT4QCXEBSVFCPP7L",
            secretAccessKey: "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",
        });
        var ref = this.makeid(8) + '-' + new Date().getTime();
        const params = {
            Bucket: 'happimobiles',
            Key: 'happi/' + ref + "." + this.getFileExtension(file.name),
            ContentType: file.type,
            Body: file,
            ACL: "public-read"
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                //return false;
            }
            console.log('Successfully uploaded file.', data);
            //return true;
            cb(err, ref);
        });
    }
    uploadFileAny(file, name, cb) {
        console.log(file);
        const contentType = file.type;
        const bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__({
            accessKeyId: "AKIAVT4QCXEBSVFCPP7L",
            secretAccessKey: "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",
            region: 'us-east-1'
        });
        var ref = this.makeid(8) + '-' + new Date().getTime() + "." + this.getFileExtension(file.name);
        const params = {
            Bucket: 'oit-athome',
            Key: `images/${name}/` + ref,
            ContentType: file.type,
            Body: file,
            ACL: "public-read"
        };
        bucket.upload(params, function (err, data) {
            console.log(params);
            if (err) {
                console.log('There was an error uploading your file: ', err);
                //return false;
            }
            console.log('Successfully uploaded file.', data);
            //return true;
            cb(err, ref);
        });
    }
    uploadFilePdf(file, id, cb) {
        console.log(file);
        const contentType = file.type;
        const bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__({
            accessKeyId: "AKIAVT4QCXEBSVFCPP7L",
            secretAccessKey: "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",
        });
        var ref = this.makeid(8) + '-' + new Date().getTime() + "." + this.getFileExtension(file.name);
        const params = {
            Bucket: 'happimobiles',
            Key: 'orders/' + id + '/' + ref,
            ContentType: file.type,
            Body: file,
            ACL: "public-read"
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                //return false;
            }
            console.log('Successfully uploaded file.', data);
            //return true;
            cb(err, ref);
        });
    }
    uploadInstaFile(file, cb) {
        console.log(file);
        const contentType = file.type;
        if (this.getFileExtension(file.name) == 'jpg' || this.getFileExtension(file.name) == 'JPEG' || this.getFileExtension(file.name) == 'png') {
        }
        else {
            console.log('There was an error uploading your file: jpg');
            return;
        }
        const bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__({
            accessKeyId: "AKIAVT4QCXEBSVFCPP7L",
            secretAccessKey: "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",
        });
        var ref = this.makeid(8) + '-' + new Date().getTime();
        const params = {
            Bucket: 'happimobiles',
            Key: 'instagram-images/' + ref + "." + this.getFileExtension(file.name),
            ContentType: file.type,
            Body: file,
            ACL: "public-read"
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                //return false;
            }
            console.log('Successfully uploaded file.', data);
            //return true;
            // console.log(params['key'])
            cb(err, data.key);
        });
    }
    uploadVideo(file, cb) {
        console.log(file);
        const contentType = file.type;
        const bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__({
            accessKeyId: "AKIAVT4QCXEBSVFCPP7L",
            secretAccessKey: "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",
            region: 'us-east-1'
        });
        var ref = this.makeid(8) + '-' + new Date().getTime() + "." + this.getFileExtension(file.name);
        const params = {
            Bucket: 'oit-athome',
            Key: `videos/` + ref,
            ContentType: file.type,
            Body: file,
            ACL: "public-read"
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                //return false;
            }
            console.log('Successfully uploaded file.', data);
            //return true;
            cb(err, ref);
        });
    }
    deleteImage(path) {
        const bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__({
            accessKeyId: "AKIAVT4QCXEBSVFCPP7L",
            secretAccessKey: "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",
            region: 'us-east-1'
        });
        bucket.deleteObject({
            Bucket: "oit-athome",
            Key: path
        }, function (err, data) {
            console.log(err);
            console.log(data);
        });
    }
}
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(); };
UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadService, factory: UploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jYfj":
/*!*********************************************************************************!*\
  !*** ./src/app/components/master/services/add-service/add-service.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceComponent", function() { return AddServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/app-urls */ "Rg0J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/upload.service */ "jT/F");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ckeditor */ "+l4i");










function AddServiceComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " File Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddServiceComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddServiceComponent_div_19_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
} }
function AddServiceComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " File Size is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddServiceComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddServiceComponent_div_28_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
} }
function AddServiceComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddServiceComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddServiceComponent_div_37_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
} }
function AddServiceComponent_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " FIle is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddServiceComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddServiceComponent_div_51_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.required);
} }
class AddServiceComponent {
    constructor(router, _location, arouter, uploadService, snackBar) {
        this.router = router;
        this._location = _location;
        this.arouter = arouter;
        this.uploadService = uploadService;
        this.snackBar = snackBar;
        this.service = {};
        this.serviceObj = {};
        this.imageUrl = src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl;
        this.oldImagePath = '';
        this.fullPage = true;
        this.config = {
            uiColor: 'transparent',
            // Define the toolbar groups as it is a more accessible solution.
            toolbarGroups: [
                { 'name': 'basicstyles', 'groups': ['basicstyles'] },
                // {'name': 'links', 'groups': ['links']},
                { 'name': 'paragraph', 'groups': ['list', 'blocks'] },
                // {'name': 'document', 'groups': ['mode']},
                // {'name': 'insert', 'groups': ['insert']},
                { 'name': 'styles', 'groups': ['styles'] },
                { 'name': 'about', 'groups': ['about'] }
            ],
            // Remove the redundant buttons from toolbar groups defined above.
            removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar'
        };
        this.id = null;
        this.employee = !!localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'))._id;
        this.status = true;
        this.id = this.arouter.snapshot.queryParamMap.get('id');
        if (this.id != null) {
            this.status = false;
            this.getServiceById();
        }
    }
    selectFile(event) {
        if (event.target.files.length > 0) {
            if (this.id != null) {
                this.service.oldFilePath = this.serviceObj.serviceFileUrl;
            }
            const file = event.target.files[0];
            this.service.fileName = file.name;
            this.service.fileSize = file.size;
            this.uploadfile = file;
        }
    }
    formSubmit(form) {
        const formData = new FormData();
        console.log(this.service);
        console.log(this.uploadfile);
        if (this.id) {
            delete this.service.__v;
            delete this.service.createdAt;
            delete this.service.updatedAt;
        }
        if (this.service.oldFilePath == '') {
            this.service.serviceFileUrl = this.serviceObj.serviceFileUrl;
        }
        formData.append('serviceFileUrl', this.uploadfile);
        console.log(formData);
        // return;
        if (this.id == null) {
            this.service.employee = this.employee;
            formData.append('data', JSON.stringify(this.service));
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["actionUrl"]._addService, formData, {
            // headers: {
            //   'x-auth' : this.baseService.authToken
            // },
            })
                .then(response => {
                console.log(response);
                if (response.data.code == 201 && response.data.type == "success") {
                    this.openSnackBar(response.data.message, '5000', 'close');
                    form.resetForm("");
                }
                else {
                    this.openSnackBar(response.data.message, '5000', 'close');
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        }
        else {
            formData.append('data', JSON.stringify(this.service));
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["actionUrl"]._updateService, formData)
                .then(response => {
                console.log('resp: ', response);
                if (response.data.code == 200 && response.data.type == 'success') {
                    this.openSnackBar(response.data.message, '5000', 'close');
                    // this.member = {};
                    // form.resetForm("");
                    this.getServiceById();
                }
                else {
                    this.openSnackBar(response.data.message, '5000', 'close');
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    }
    backClicked() {
        this._location.back();
    }
    getServiceById() {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["AppUrls"]._baseUrl + src_environments_app_urls__WEBPACK_IMPORTED_MODULE_2__["actionUrl"]._getServiceById + this.id, {
        // headers: {
        //   'x-auth' : this.baseService.authToken
        // },
        })
            .then(response => {
            if (response.data.code == 200 && response.data.type == 'success') {
                var data = response.data.data;
                this.serviceObj = response.data.data;
                this.service.fileName = data.fileName;
                this.service.fileSize = data.fileSize;
                this.service.fileDescription = data.fileDescription;
                this.service._id = data._id;
                this.service.employee = data.employee._id;
                this.service.isActive = data.isActive;
                // this.oldImagePath = this.service.serviceImageUrl;
                this.service.oldFilePath = '';
                console.log(this.service);
                console.log(response.data);
            }
            // else if(this.baseService.checkToken(response.data.message , response.data.status))
            // {
            // }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    ////////////////////Image Code
    // selectFile(event) {
    //   console.log("selectFile");
    //   this.selectedFiles = event.target.files[0];
    //   // this.upload(event.target.files[0]);
    //   this.upload();
    // } 
    upload() {
        let file = this.selectedFiles;
        let type = "services";
        console.log("UPLOAD", file);
        let self = this;
        self.statusText = "Uploaded.....";
        self.uploadService.uploadFileAny(file, type, function (err, key) {
            if (err)
                console.log(err);
            console.log('Seccouse ', err, key);
            self.keyPath = key;
            //   else {
            //      console.log(key);
            //     // axios.post(self.baseurl + 'admin/api/media/', { "name": self.name, "key": key ,"type":"img"}, {
            //   headers: { 'x-auth': self.token }
            // })
            // .then(response => {
            //   console.log(response);
            //   self.statusText = "Image Uploaded Succesfully";
            //   self.getAllMedia();
            // }).catch((error) => {
            //   // handle error
            //   console.log("0000", error);
            //   self.statusText = "Image Uploaded Error";
            // }).
            // finally(() => {
            //   // always executed
            //   // this.loading = true;
            //   self.selectedFiles = {};
            // });
            // };
        });
    }
    openSnackBar(msg, duration, action) {
        this.snackBar.open(msg, action, {
            duration: duration,
        });
    }
    ngOnInit() {
    }
}
AddServiceComponent.ɵfac = function AddServiceComponent_Factory(t) { return new (t || AddServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
AddServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddServiceComponent, selectors: [["app-add-service"]], decls: 57, vars: 14, consts: [[1, "page-content-header"], [1, "page-content-body"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "overall-contentblock"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["serviceForm", "ngForm"], [1, "form-group", "form-row"], ["for", "normal-input-1", 1, "col-md-2", "col-sm-3", "col-form-label", "col-form-label-md", "text-sm-right"], [1, "star"], [1, "col-md-8", "col-sm-8", "mb-3"], ["type", "text", "name", "fileName", "required", "", "readonly", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["fileName", "ngModel"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "text", "name", "fileSize", "required", "", "readonly", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["fileSize", "ngModel"], ["name", "fileDescription", "required", "", 1, "mb-4", 3, "ngModel", "config", "fullPage", "ngModelChange"], ["fileDescription", "ngModel"], [1, "form-group", "form-row", 2, "display", "none"], ["width", "150px", "height", "100px", "alt", "service Image", 3, "src"], ["type", "file", "name", "serviceFileUrl", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "change"], ["serviceFileUrl", "ngModel"], [1, "btn", "btn-primary", "mr-2", 2, "margin-left", "40%", 3, "disabled"], [1, "btn", "btn-danger", 3, "click"], [1, "form-text", "text-danger"], [4, "ngIf"]], template: function AddServiceComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddServiceComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.formSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "File Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddServiceComponent_Template_input_ngModelChange_17_listener($event) { return ctx.service.fileName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddServiceComponent_div_19_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "File Size(Bytes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddServiceComponent_Template_input_ngModelChange_26_listener($event) { return ctx.service.fileSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddServiceComponent_div_28_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ck-editor", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddServiceComponent_Template_ck_editor_ngModelChange_35_listener($event) { return ctx.service.fileDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddServiceComponent_div_37_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddServiceComponent_Template_input_ngModelChange_49_listener($event) { return ctx.service.serviceFileUrl = $event; })("change", function AddServiceComponent_Template_input_change_49_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AddServiceComponent_div_51_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddServiceComponent_Template_a_click_55_listener() { return ctx.backClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.id == null ? "ADD " : "UPDATE ", " File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.fileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.fileSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.fileDescription)("config", ctx.config)("fullPage", ctx.fullPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx.imageUrl, "", ctx.oldImagePath, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.serviceFileUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && (_r7.dirty || _r7.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_8__["CKEditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFzdGVyL3NlcnZpY2VzL2FkZC1zZXJ2aWNlL2FkZC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-service',
                templateUrl: './add-service.component.html',
                styleUrls: ['./add-service.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "kJ4b":
/*!*****************************************************!*\
  !*** ./src/app/app-material/app-material.module.ts ***!
  \*****************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");













const componentMaterial = [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"]];
class AppMaterialModule {
}
AppMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppMaterialModule });
AppMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppMaterialModule_Factory(t) { return new (t || AppMaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            componentMaterial
        ], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"]], exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    componentMaterial
                ],
                exports: [
                    componentMaterial
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_auth_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/admin-profile/admin-profile.component */ "VdIu");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/login/login.component */ "HzFZ");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_master_admin_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/master/admin/add-admin/add-admin.component */ "ED6/");
/* harmony import */ var _components_master_admin_view_admin_view_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/master/admin/view-admin/view-admin.component */ "3i3o");
/* harmony import */ var _components_master_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/master/member/add-member/add-member.component */ "RJ0n");
/* harmony import */ var _components_master_member_member_display_member_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/master/member/member-display/member-display.component */ "A27c");
/* harmony import */ var _components_master_services_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/master/services/add-service/add-service.component */ "jYfj");
/* harmony import */ var _components_master_services_view_service_view_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/master/services/view-service/view-service.component */ "QGzq");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth-service.service */ "UPSQ");
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/layout/layout.component */ "Xn/w");















const routes = [
    {
        path: 'auth/login', component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: '',
        component: _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
        canActivate: [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"]],
        children: [
            {
                path: '',
                component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                canActivate: [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"]],
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                canActivate: [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"]],
                pathMatch: 'full'
            },
            {
                path: 'add-admins',
                component: _components_master_admin_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_5__["AddAdminComponent"],
                canActivate: [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"]],
            },
            {
                path: 'view-admins',
                component: _components_master_admin_view_admin_view_admin_component__WEBPACK_IMPORTED_MODULE_6__["ViewAdminComponent"],
                canActivate: [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"]],
            },
            {
                path: 'add-client',
                component: _components_master_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__["AddMemberComponent"],
                canActivate: [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"]],
            },
            {
                path: 'edit-client',
                component: _components_master_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__["AddMemberComponent"],
                canActivate: [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"]],
            },
            {
                path: 'view-client',
                component: _components_master_member_member_display_member_display_component__WEBPACK_IMPORTED_MODULE_8__["MemberDisplayComponent"],
                canActivate: [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"]],
            },
            {
                path: 'add-file',
                component: _components_master_services_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_9__["AddServiceComponent"],
                canActivate: [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"]],
            },
            {
                path: 'edit-file',
                component: _components_master_services_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_9__["AddServiceComponent"],
                canActivate: [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"]],
            },
            {
                path: 'view-file',
                component: _components_master_services_view_service_view_service_component__WEBPACK_IMPORTED_MODULE_10__["ViewServiceComponent"],
                canActivate: [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"]],
            },
            {
                path: 'admin-profile',
                component: _components_auth_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_2__["AdminProfileComponent"],
                canActivate: [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceService"]],
            },
        ]
    },
    {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
    },
    { path: '**', redirectTo: '/dashboard' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [
    _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"], _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
    _components_auth_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_2__["AdminProfileComponent"], _components_master_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__["AddMemberComponent"], _components_master_member_member_display_member_display_component__WEBPACK_IMPORTED_MODULE_8__["MemberDisplayComponent"],
    _components_master_services_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_9__["AddServiceComponent"], _components_master_services_view_service_view_service_component__WEBPACK_IMPORTED_MODULE_10__["ViewServiceComponent"]
];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map