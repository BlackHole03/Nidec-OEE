/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/lang/index.js":
/*!************************************!*\
  !*** ./resources/js/lang/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var lang = document.querySelector('html').getAttribute('lang');
var translations = {};

var requireModules = __webpack_require__("./resources/js/lang/translations sync \\.js$");

requireModules.keys().forEach(function (modulePath) {
  var key = modulePath.replace(/(^.\/)|(.js$)/g, '');
  translations[key] = requireModules(modulePath)["default"];
});

var t = function t(text) {
  return translations[lang][text] || text;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t);

/***/ }),

/***/ "./resources/js/lang/translations/en.js":
/*!**********************************************!*\
  !*** ./resources/js/lang/translations/en.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vi */ "./resources/js/lang/translations/vi.js");

var en = {};
Object.keys(_vi__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach(function (key) {
  en[key] = key;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (en);

/***/ }),

/***/ "./resources/js/lang/translations/ko.js":
/*!**********************************************!*\
  !*** ./resources/js/lang/translations/ko.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./resources/js/lang/translations/vi.js":
/*!**********************************************!*\
  !*** ./resources/js/lang/translations/vi.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _NumberOfRecords_M;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NumberOfRecords_M = {
  "Number of records _MENU_": "S??? l?????ng b???n ghi _MENU_",
  "Showing _START_ to _END_ of _TOTAL_ entries": "B???n ghi t??? _START_ ?????n _END_ c???a _TOTAL_ b???n ghi",
  "Name": "T??n",
  "Symbols": "M??",
  "Type": "Lo???i",
  "Note": "Ghi ch??",
  "User Created": "Ng?????i t???o",
  "Time Created": "Th???i gian t???o",
  "User Updated": "Ng?????i c???p nh???t",
  "Time Updated": "Th???i gian c???p nh???t",
  "Action": "H??nh ?????ng",
  "Edit": "S???a",
  "Delete": "X??a",
  "Start Time": "Th???i Gian B???t ?????u",
  "End Time": "Th???i Gian K???t Th??c",
  "Cycle Time": "Chu K?? S???n Xu???t 1 S???n Ph???m ",
  "Detail": "Chi Ti???t",
  "Month": "Th??ng",
  "Year": "N??m",
  "Location Take Materials": "V??? Tr?? L???y H??ng",
  "Materials Return Location": "V??? Tr?? Tr??? H??ng",
  "Destroy": "H???y"
}, _defineProperty(_NumberOfRecords_M, "Detail", "Chi Ti???t"), _defineProperty(_NumberOfRecords_M, "Success", "Ho??n Th??nh"), _defineProperty(_NumberOfRecords_M, "Product", "S???n Ph???m"), _defineProperty(_NumberOfRecords_M, "Machine", "M??y S???n Xu???t"), _defineProperty(_NumberOfRecords_M, "Dont Production", "Ch??a S???n Xu???t"), _defineProperty(_NumberOfRecords_M, "Are Production", "??ang S???n Xu???t"), _defineProperty(_NumberOfRecords_M, "Success Production", "Ho??n Th??nh S???n Xu???t"), _defineProperty(_NumberOfRecords_M, "Status", "Tr???ng Th??i"), _defineProperty(_NumberOfRecords_M, "Export", "Xu???t Kho"), _defineProperty(_NumberOfRecords_M, "Materials", "Nguy??n V???t Li???u"), _defineProperty(_NumberOfRecords_M, "Dont Export", "Ch??a Xu???t"), _defineProperty(_NumberOfRecords_M, "Are Export", "??ang Xu???t"), _defineProperty(_NumberOfRecords_M, "Success Export", "Ho??n Th??nh Xu???t"), _defineProperty(_NumberOfRecords_M, "Stock Min", "T???n Gi???i H???n"), _defineProperty(_NumberOfRecords_M, "Cavity", "Cavity"), _defineProperty(_NumberOfRecords_M, "Mold", "Khu??n"), _defineProperty(_NumberOfRecords_M, "Quantity Mold", "S??? L?????ng Khu??n"), _defineProperty(_NumberOfRecords_M, "Quantity", "S??? L?????ng"), _defineProperty(_NumberOfRecords_M, "Date", "Ng??y"), _defineProperty(_NumberOfRecords_M, "Unit", "????n V??? T??nh"), _defineProperty(_NumberOfRecords_M, "Parking", "????n V??? ????ng G??i"), _defineProperty(_NumberOfRecords_M, "History", "L???ch S???"), _defineProperty(_NumberOfRecords_M, "Return", "Kh??i Ph???c"), _defineProperty(_NumberOfRecords_M, "Update", "C???p Nh???t"), _defineProperty(_NumberOfRecords_M, "Delete", "X??a"), _defineProperty(_NumberOfRecords_M, "Processing", "??ang Th???c Hi???n"), _defineProperty(_NumberOfRecords_M, "Enable", "K??ch Ho???t"), _defineProperty(_NumberOfRecords_M, "Disable", "V?? Hi???u H??a"), _defineProperty(_NumberOfRecords_M, "Part", "B??? Ph???n"), _defineProperty(_NumberOfRecords_M, "Time Start", "Th???i Gian B???t ?????u"), _defineProperty(_NumberOfRecords_M, "Time End", "Th???i Gian K???t Th??c"), _defineProperty(_NumberOfRecords_M, "Manager AGV", "Ng?????i Qu???n L?? AGV"), _defineProperty(_NumberOfRecords_M, "Maintenance Time", "Th???i Gian B???o Tr??"), _defineProperty(_NumberOfRecords_M, "Maintenance Date", "Ng??y B???o D?????ng"), _defineProperty(_NumberOfRecords_M, "Warehouse", "Kho"), _defineProperty(_NumberOfRecords_M, "Plan", "K??? Ho???ch"), _defineProperty(_NumberOfRecords_M, "Production", "S???n Xu???t"), _defineProperty(_NumberOfRecords_M, "Output", "S???n L?????ng"), _defineProperty(_NumberOfRecords_M, "End", "K???t Th??c"), _defineProperty(_NumberOfRecords_M, "Error", "L???i"), _defineProperty(_NumberOfRecords_M, "Time Real Start", "B???t ?????u Th???c T???"), _defineProperty(_NumberOfRecords_M, "Time Real End", "K???t Th??c Th???c T???"), _defineProperty(_NumberOfRecords_M, "Symbols Plan", "M?? Ch??? Th???"), _defineProperty(_NumberOfRecords_M, "Infor", "Th??ng Tin"), _defineProperty(_NumberOfRecords_M, "Normal", "Xu???t Th?????ng"), _defineProperty(_NumberOfRecords_M, "Cancel", "H???y"), _defineProperty(_NumberOfRecords_M, "Confirm", "X??c nh???n"), _defineProperty(_NumberOfRecords_M, "Close", "????ng"), _defineProperty(_NumberOfRecords_M, "Start", "B???t ?????u"), _defineProperty(_NumberOfRecords_M, "User Name", "T??n ????ng Nh???p"), _defineProperty(_NumberOfRecords_M, "ENABLE", "K??ch Ho???t"), _defineProperty(_NumberOfRecords_M, "DISABLE", "Kh??ng K??ch Ho???t"), _defineProperty(_NumberOfRecords_M, "Action Name", "Ki???u H??nh ?????ng"), _defineProperty(_NumberOfRecords_M, "INSERT", "Th??m M???i"), _defineProperty(_NumberOfRecords_M, "Insert", "Th??m M???i"), _defineProperty(_NumberOfRecords_M, "OEE", "Hi???u Su???t T???ng Th???"), _defineProperty(_NumberOfRecords_M, "Availability", "Kh??? D???ng"), _defineProperty(_NumberOfRecords_M, "Performance", "Hi???u Su???t"), _defineProperty(_NumberOfRecords_M, "Quality", "Ch???t L?????ng"), _defineProperty(_NumberOfRecords_M, "shift", "ca"), _defineProperty(_NumberOfRecords_M, "Shift", "ca"), _defineProperty(_NumberOfRecords_M, "day", "ng??y"), _defineProperty(_NumberOfRecords_M, "Description", "Ch?? Th??ch"), _defineProperty(_NumberOfRecords_M, "Find AGV", "T??m AGV"), _defineProperty(_NumberOfRecords_M, "Role", "Vai Tr??"), _defineProperty(_NumberOfRecords_M, "Waiting for AGV", "Ch??? AGV"), _defineProperty(_NumberOfRecords_M, "AGV Shipping", "AGV ??ang Chuy???n H??ng"), _defineProperty(_NumberOfRecords_M, "IsDelete", "X??a"), _defineProperty(_NumberOfRecords_M, "To", "T???i"), _defineProperty(_NumberOfRecords_M, "Command", "L???nh"), _defineProperty(_NumberOfRecords_M, "INSERT_USER", "Th??m M???i T??i Kho???n"), _defineProperty(_NumberOfRecords_M, "INSERT_ROLE", "Th??m M???i Vai Tr??"), _defineProperty(_NumberOfRecords_M, "Update_User", "C???p Nh???t T??i Kho???n"), _defineProperty(_NumberOfRecords_M, "Delete_Role", "X??a Vai Tr??"), _defineProperty(_NumberOfRecords_M, "Command AGV Was Destroy", "L???nh AGV ???? b??? h???y"), _defineProperty(_NumberOfRecords_M, "Select machine", "Ch???n m??y s???n xu???t"), _defineProperty(_NumberOfRecords_M, "Loading data", "??ang t???i d??? li???u"), _defineProperty(_NumberOfRecords_M, "Mold code", "M?? khu??n"), _defineProperty(_NumberOfRecords_M, "Actual start time", "B???t ?????u th???c t???"), _defineProperty(_NumberOfRecords_M, "Cycle time", "Th???i gian ????ng m??? khu??n"), _defineProperty(_NumberOfRecords_M, "Quantity NG", "S??? l?????ng s???n ph???m l???i"), _defineProperty(_NumberOfRecords_M, "Quantity NG of", "S??? l?????ng s???n ph???m l???i c???a"), _defineProperty(_NumberOfRecords_M, "OEE parameter chart", "Bi???u ????? th??ng s??? hi???u su???t OEE"), _defineProperty(_NumberOfRecords_M, "Active timeline chart", "Bi???u ????? th???i gian ho???t ?????ng"), _defineProperty(_NumberOfRecords_M, "minute", "ph??t"), _defineProperty(_NumberOfRecords_M, "minutes", "ph??t"), _defineProperty(_NumberOfRecords_M, "hour", "gi???"), _defineProperty(_NumberOfRecords_M, "Machine stop logs", "D???ng m??y"), _defineProperty(_NumberOfRecords_M, "Defective products", "S???n ph???m l???i"), _defineProperty(_NumberOfRecords_M, "Statistical chart of OEE by machine", "Bi???u ????? th???ng k?? hi???u su???t theo m??y"), _defineProperty(_NumberOfRecords_M, "Statistical chart of OEE by day", "Bi???u ????? th???ng k?? hi???u su???t theo ng??y"), _defineProperty(_NumberOfRecords_M, "View", "Xem"), _defineProperty(_NumberOfRecords_M, "Rows per page", "S??? l?????ng b???n ghi"), _defineProperty(_NumberOfRecords_M, "Error stop and no-error stop rate chart", "Bi???u ????? t??? l??? d???ng l???i v?? kh??ng l???i"), _defineProperty(_NumberOfRecords_M, "Machine error rate chart", "Bi???u ????? t??? l??? l???i m??y s???n xu???t"), _defineProperty(_NumberOfRecords_M, "No-error stop rate chart", "Bi???u ????? t??? l??? d???ng kh??ng l???i"), _defineProperty(_NumberOfRecords_M, "Machine stop rate chart due to quality", "Bi???u ????? t??? l??? d???ng m??y cho ch???t l?????ng"), _defineProperty(_NumberOfRecords_M, "Statistics chart of machine time stop", "Bi???u ????? th???ng k?? th???i gian d???ng m??y"), _defineProperty(_NumberOfRecords_M, "Statistics chart of defective product", "Bi???u ????? th???ng k?? s???n ph???m l???i"), _defineProperty(_NumberOfRecords_M, "Stop Time", "Th???i Gian D???ng"), _defineProperty(_NumberOfRecords_M, "Error Code", "M?? L???i"), _defineProperty(_NumberOfRecords_M, "Error Type", "Lo???i L???i"), _defineProperty(_NumberOfRecords_M, "Quantity Error", "S??? l?????ng l???i"), _defineProperty(_NumberOfRecords_M, "Iot disconnect", "M???t k???t n???i Iot"), _defineProperty(_NumberOfRecords_M, "All machine", "T???t c??? m??y s???n xu???t"), _defineProperty(_NumberOfRecords_M, "Quantity produced", "S??? l?????ng ???? s???n xu???t"), _defineProperty(_NumberOfRecords_M, "Quantity produced of", "S??? l?????ng ???? s???n xu???t c???a"), _defineProperty(_NumberOfRecords_M, "run", "Ch???y"), _defineProperty(_NumberOfRecords_M, "stopError", "D???ng do l???i"), _defineProperty(_NumberOfRecords_M, "stopNotError", "D???ng kh??ng l???i"), _defineProperty(_NumberOfRecords_M, "stop due to error", "D???ng do l???i"), _defineProperty(_NumberOfRecords_M, "stop not error", "D???ng kh??ng l???i"), _defineProperty(_NumberOfRecords_M, "stop due to quality", "D???ng do ch???t l?????ng"), _defineProperty(_NumberOfRecords_M, "machine stop", "D???ng m??y"), _defineProperty(_NumberOfRecords_M, "products", "s???n ph???m"), _defineProperty(_NumberOfRecords_M, "Export excel", "Xu???t excel"), _defineProperty(_NumberOfRecords_M, "Duration", "Th???i l?????ng"), _defineProperty(_NumberOfRecords_M, "Total stop time", "T???ng th???i gian d???ng"), _NumberOfRecords_M);

/***/ }),

/***/ "./resources/js/lang/translations sync \\.js$":
/*!*****************************************************************!*\
  !*** ./resources/js/lang/translations/ sync nonrecursive \.js$ ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.js": "./resources/js/lang/translations/en.js",
	"./ko.js": "./resources/js/lang/translations/ko.js",
	"./vi.js": "./resources/js/lang/translations/vi.js"
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
webpackContext.id = "./resources/js/lang/translations sync \\.js$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************************!*\
  !*** ./resources/js/production-plan/detail.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang */ "./resources/js/lang/index.js");
var _$$DataTable, _$$DataTable2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$('.select2').select2();

var route = "".concat(window.location.origin, "/api/productionplan/detail");
var route_export = "".concat(window.location.origin, "/production-plan/detail/export-materials");
var route_his = "".concat(window.location.origin, "/api/productionplan/detail/history");
console.log(route);
var arr_status = [];
jQuery("input[name='statusId']").each(function () {
  if (this.checked) {
    arr_status.push(this.value);
  }
});
var table = $('.table-plan-detail').DataTable((_$$DataTable = {
  scrollX: true,
  // infoCallback: ( settings, start, end, max, total, pre ) => {
  //     console.log({settings, start, end, max, total, pre})
  // },
  language: __languages.table,
  aaSorting: []
}, _defineProperty(_$$DataTable, "language", {
  lengthMenu: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Number of records _MENU_'),
  info: '',
  paginate: {
    previous: '???',
    next: '???'
  }
}), _defineProperty(_$$DataTable, "processing", true), _defineProperty(_$$DataTable, "serverSide", true), _defineProperty(_$$DataTable, "searching", false), _defineProperty(_$$DataTable, "dom", 'rt<"bottom"flp><"clear">'), _defineProperty(_$$DataTable, "lengthMenu", [10, 20, 30, 40, 50]), _defineProperty(_$$DataTable, "ajax", {
  url: route,
  dataSrc: 'data',
  data: function data(d) {
    d.page = d.start / d.length + 1;
    d.planId = $('#idPlan').val();
    d.product = $('.product').val();
    d.machine = $('.machine').val();
    d.status = arr_status;
    d.from = $('#from').val();
    d.to = $('#to').val();
  }
}), _defineProperty(_$$DataTable, "columns", [{
  data: 'Symbols',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Symbols Plan'),
  render: function render(data) {
    if (data) {
      var explode = data.split("--"); // console.log(explode);

      return "<p>" + explode[0] + "</p><p>-" + explode[1] + "-" + explode[2] + "</p>";
    } else {
      return "";
    }
  }
}, {
  data: 'machine.Name',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Machine')
}, {
  data: 'mold.Name',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Mold')
}, {
  data: 'product.Name',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Product')
}, {
  data: 'Date',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Date')
}, {
  data: {
    id: 'ID',
    status: 'Status'
  },
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Output'),
  render: function render(data) {
    return (data.Quantity_Production ? parseFloat(data.Quantity_Production) : 0) + " / " + parseFloat(data.Quantity);
  }
}, {
  data: 'Quantity_Error',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Quantity') + ' ' + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Error'),
  render: function render(data) {
    return parseFloat(data ? data : 0);
  }
}, {
  data: 'Time_Real_Start',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Start'),
  render: function render(data) {
    if (data) {
      var explode = data.split(" "); // console.log(explode);

      return "<p>" + explode[1] + "</p><p>" + explode[0] + "</p>";
    } else {
      return "";
    }
  }
}, {
  data: 'Time_Real_End',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('End'),
  render: function render(data) {
    if (data) {
      var explode = data.split(" "); // console.log(explode);

      return "<p>" + explode[1] + "</p><p>" + explode[0] + "</p>";
    } else {
      return "";
    }
  }
}, {
  data: 'Version',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Version')
}, {
  data: 'His',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('His')
}, {
  data: 'Status',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Status'),
  render: function render(data) {
    if (data == 0) {
      return "<p style=\"color:red\">" + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Dont Production') + "</p>";
    } else if (data == 1) {
      return "<p style=\"color:Blue\">" + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Are Production') + "</p>";
    } else {
      return "<p style=\"color:green\">" + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Success') + "</p>";
    }
  }
}, {
  data: {
    id: 'ID',
    status: 'Status'
  },
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Action'),
  render: function render(data) {
    if (data.Status == 0) {
      // return `
      //     <button type="button" id="edit-` + data.ID + `"  class="btn btn-info btn-edit" >
      //     ` + t('Edit') + `
      //     </button>
      //     <button id="del-` + data.ID + `"  class="btn btn-danger btn-delete" >
      //     ` + t('Delete') + `
      //     </button>
      // `;
      var bt = "";

      if (role_edit_plan) {
        bt = bt + "\n                        <button type=\"button\" id=\"edit-" + data.ID + "\"  class=\"btn btn-info btn-edit\" >\n                        " + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Edit') + "\n                        </button>";
      }

      if (role_delete_plan) {
        bt = bt + "  <button id=\"del-" + data.ID + "\"  class=\"btn btn-danger btn-delete\" >\n                        " + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Delete') + "\n                        </button>\n                        ";
      }

      return bt;
    } else if (data.Status == 1) {
      if (role_end_plan) {
        return "\n                        <button id=\"end-" + data.ID + "\"  class=\"btn btn-warning btn-end\" style=\"width: 110px\">\n                        " + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('End') + "\n                        </button>\n                        ";
      }
    } else {
      return " \n                    \n                    ";
    }
  }
}]), _defineProperty(_$$DataTable, "rowsGroup", [0, 1, 2, 4, 11]), _$$DataTable));
$('table').on('page.dt', function () {
  console.log(table.page.info());
});
$('.filter').on('click', function () {
  arr_status = [];
  jQuery("input[name='statusId']").each(function () {
    if (this.checked) {
      arr_status.push(this.value);
    }
  });
  table.ajax.reload();
});
$('.list_status').on('change', function () {
  arr_status = [];
  jQuery("input[name='statusId']").each(function () {
    if (this.checked) {
      arr_status.push(this.value);
    }
  });
  console.log(arr_status);
  table.ajax.reload();
});
$(document).on('click', '.btn-delete', function () {
  var id = $(this).attr('id');
  var name = $(this).parent().parent().children('td').first().text();
  $('#modalRequestDel').modal();
  $('#nameDel').text(name);
  $('#idDel').val(id.split('-')[1]);
});
$('.btn-import').on('click', function () {
  $('#modalImport').modal();
  $('#importFile').val('');
  $('.input-text').text(__input.file);
  $('.error-file').hide();
  $('.btn-save-file').prop('disabled', false);
  $('#product_id').val('');
});
var check_file = false;
$('#importFile').on('change', function () {
  var val = $(this).val();
  var name = val.split('\\').pop();
  var typeFile = name.split('.').pop().toLowerCase();
  $('.input-text').text(name);
  $('.error-file').hide();

  if (typeFile != 'xlsx' && typeFile != 'xls') {
    $('.error-file').show();
    $('.btn-save-file').prop('disabled', true);
  } else {
    $('.btn-save-file').prop('disabled', false);
    check_file = true;
  }
});
$('.btn-save-file').on('click', function () {
  $('.error-file').hide();

  if (check_file) {
    $('.btn-submit-file').click();
  } else {
    $('.error-file').show();
  }
});
$(document).on('click', '.btn-detail', function () {
  var id = $(this).attr('id');
  var name = $(this).parent().parent().children('td').first().text();
  $('#modalTableDetail').modal();
  $('#idUnit').val(id.split('-')[1]);
  tablehis.ajax.reload();
  $('#nameDel').text(name);
});
$(document).on('click', '.btn-end', function () {
  var id = $(this).attr('id');
  var name = $(this).parent().parent().children('td').first().text();
  $('#modalend').modal();
  $('#idEnd').val(id.split('-')[1]);
});
$(document).on('click', '.btn-edit', function () {
  $("#Product option:selected").attr('selected', false);
  $("#Machine option:selected").attr('selected', false);
  $("#Mold option:selected").attr('selected', false);
  $("#Quantity").val('');
  $("#Date").val('');
  $("#Version").val('');
  $("#His").val('');
  var currentRow = $(this).closest("tr");
  var col1 = currentRow.find("td:eq(1)").text();
  var col2 = currentRow.find("td:eq(2)").text();
  var col3 = currentRow.find("td:eq(3)").text();
  var col4 = currentRow.find("td:eq(4)").text();
  var col5 = currentRow.find("td:eq(5)").text();
  var col9 = currentRow.find("td:eq(9)").text();
  var col10 = currentRow.find("td:eq(10)").text();
  var id = $(this).attr('id');
  console.log(col1, col2, col3, col4, col5, col9, col10);
  var explode = col5.split("/");
  console.log(explode);
  $('#modalAddOrUpdate').modal();
  $("#Product option:contains(" + col3 + ")").attr('selected', 'selected');
  $("#Machine option:contains(" + col1 + ")").attr('selected', 'selected');
  $("#Mold option:contains(" + col2 + ")").attr('selected', 'selected');
  $("#Quantity").val(Number(explode[1]));
  $("#Date").val(col4);
  $("#Version").val(col9);
  $("#His").val(col10);
  $('#idDetail').val(id.split('-')[1]);
});
$(document).on('click', '.btn-create', function () {
  $('#modalAddOrUpdate').modal();
  $("#Product").val('');
  $("#Machine").val('');
  $("#Mold").val('');
  $("#Quantity").val('');
  $("#Date").val('');
  $("#Version").val('');
  $("#His").val('');
  $('#idDetail').val('');
});
var idplan = 0;
var tablehis = $('.table-his').DataTable((_$$DataTable2 = {
  scrollX: true,
  searching: false,
  ordering: false,
  language: {
    lengthMenu: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Number of records _MENU_'),
    info: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Showing _START_ to _END_ of _TOTAL_ entries'),
    paginate: {
      previous: '???',
      next: '???'
    }
  },
  processing: true,
  serverSide: true
}, _defineProperty(_$$DataTable2, "searching", false), _defineProperty(_$$DataTable2, "dom", 'rt<"bottom"flp><"clear">'), _defineProperty(_$$DataTable2, "lengthMenu", [5, 10, 20, 30, 40]), _defineProperty(_$$DataTable2, "ajax", {
  url: route_his,
  dataSrc: 'data',
  data: function data(d) {
    delete d.columns;
    delete d.order;
    delete d.search;
    d.page = d.start / d.length + 1;
    d.idplan = idplan;
  }
}), _defineProperty(_$$DataTable2, "columns", [{
  data: 'ID',
  defaultContent: '',
  title: 'ID'
}, {
  data: 'Data_Table',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Symbols'),
  render: function render(data) {
    var datas = JSON.parse(data);
    var explode = datas.Symbols.split("--");
    return "<p>" + explode[0] + "</p><p>-" + explode[1] + "-" + explode[2] + "</p>";
  }
}, {
  data: 'Data_Table',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Machine'),
  render: function render(data) {
    var datas = JSON.parse(data);
    return datas.Part_Action;
  }
}, {
  data: 'Data_Table',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Mold'),
  render: function render(data) {
    var datas = JSON.parse(data);
    return datas.Mold_ID;
  }
}, {
  data: 'Data_Table',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Product'),
  render: function render(data) {
    var datas = JSON.parse(data);
    return datas.Product_ID;
  }
}, {
  data: 'Data_Table',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Date'),
  render: function render(data) {
    var datas = JSON.parse(data);
    return datas.Date;
  }
}, {
  data: 'Data_Table',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Quantity'),
  render: function render(data) {
    var datas = JSON.parse(data);
    return datas.Quantity;
  }
}, {
  data: 'Data_Table',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Note'),
  render: function render(data) {
    var datas = JSON.parse(data);
    return datas.Note;
  }
}, {
  data: 'Action_Name',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Action Name'),
  render: function render(data) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
  }
}, {
  data: 'Data_Table',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('User Updated'),
  render: function render(data) {
    var datas = JSON.parse(data);
    return datas.User_Updated;
  }
}, {
  data: 'Data_Table',
  defaultContent: '',
  title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Time Updated'),
  render: function render(data) {
    var datas = JSON.parse(data);
    var timecreated = moment(datas.Time_Updated, 'MMMM Do YYYY h:mm:ss a').format('YYYY-MM-DD HH:mm:ss');
    return timecreated;
  }
}]), _$$DataTable2));
$(document).on('click', '.btn-history', function () {
  var id = $(this).attr('id');
  var name = $(this).parent().parent().children('td').first().text();
  $('#modalTableHistory').modal();
  $('#idUnit').val(id.split('-')[1]);
  idplan = id.split('-')[1];
  tablehis.ajax.reload();
  $('#nameDel').text(name);
});
socket.on('start-plan', function (message) {
  table.ajax.reload();
});
socket.on('end-plan', function (message) {
  table.ajax.reload();
});
})();

/******/ })()
;