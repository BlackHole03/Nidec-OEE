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
  "Number of records _MENU_": "Số lượng bản ghi _MENU_",
  "Showing _START_ to _END_ of _TOTAL_ entries": "Bản ghi từ _START_ đến _END_ của _TOTAL_ bản ghi",
  "Name": "Tên",
  "Symbols": "Mã",
  "Type": "Loại",
  "Note": "Ghi chú",
  "User Created": "Người tạo",
  "Time Created": "Thời gian tạo",
  "User Updated": "Người cập nhật",
  "Time Updated": "Thời gian cập nhật",
  "Action": "Hành Động",
  "Edit": "Sửa",
  "Delete": "Xóa",
  "Start Time": "Thời Gian Bắt Đầu",
  "End Time": "Thời Gian Kết Thúc",
  "Cycle Time": "Chu Kì Sản Xuất 1 Sản Phẩm ",
  "Detail": "Chi Tiết",
  "Month": "Tháng",
  "Year": "Năm",
  "Location Take Materials": "Vị Trí Lấy Hàng",
  "Materials Return Location": "Vị Trí Trả Hàng",
  "Destroy": "Hủy"
}, _defineProperty(_NumberOfRecords_M, "Detail", "Chi Tiết"), _defineProperty(_NumberOfRecords_M, "Success", "Hoàn Thành"), _defineProperty(_NumberOfRecords_M, "Product", "Sản Phẩm"), _defineProperty(_NumberOfRecords_M, "Machine", "Máy Sản Xuất"), _defineProperty(_NumberOfRecords_M, "Dont Production", "Chưa Sản Xuất"), _defineProperty(_NumberOfRecords_M, "Are Production", "Đang Sản Xuất"), _defineProperty(_NumberOfRecords_M, "Success Production", "Hoàn Thành Sản Xuất"), _defineProperty(_NumberOfRecords_M, "Status", "Trạng Thái"), _defineProperty(_NumberOfRecords_M, "Export", "Xuất Kho"), _defineProperty(_NumberOfRecords_M, "Materials", "Nguyên Vật Liệu"), _defineProperty(_NumberOfRecords_M, "Dont Export", "Chưa Xuất"), _defineProperty(_NumberOfRecords_M, "Are Export", "Đang Xuất"), _defineProperty(_NumberOfRecords_M, "Success Export", "Hoàn Thành Xuất"), _defineProperty(_NumberOfRecords_M, "Stock Min", "Tồn Giới Hạn"), _defineProperty(_NumberOfRecords_M, "Cavity", "Cavity"), _defineProperty(_NumberOfRecords_M, "Mold", "Khuôn"), _defineProperty(_NumberOfRecords_M, "Quantity Mold", "Số Lượng Khuôn"), _defineProperty(_NumberOfRecords_M, "Quantity", "Số Lượng"), _defineProperty(_NumberOfRecords_M, "Date", "Ngày"), _defineProperty(_NumberOfRecords_M, "Unit", "Đơn Vị Tính"), _defineProperty(_NumberOfRecords_M, "Parking", "Đơn Vị Đóng Gói"), _defineProperty(_NumberOfRecords_M, "History", "Lịch Sử"), _defineProperty(_NumberOfRecords_M, "Return", "Khôi Phục"), _defineProperty(_NumberOfRecords_M, "Update", "Cập Nhật"), _defineProperty(_NumberOfRecords_M, "Delete", "Xóa"), _defineProperty(_NumberOfRecords_M, "Processing", "Đang Thực Hiện"), _defineProperty(_NumberOfRecords_M, "Enable", "Kích Hoạt"), _defineProperty(_NumberOfRecords_M, "Disable", "Vô Hiệu Hóa"), _defineProperty(_NumberOfRecords_M, "Part", "Bộ Phận"), _defineProperty(_NumberOfRecords_M, "Time Start", "Thời Gian Bắt Đầu"), _defineProperty(_NumberOfRecords_M, "Time End", "Thời Gian Kết Thúc"), _defineProperty(_NumberOfRecords_M, "Manager AGV", "Người Quản Lý AGV"), _defineProperty(_NumberOfRecords_M, "Maintenance Time", "Thời Gian Bảo Trì"), _defineProperty(_NumberOfRecords_M, "Maintenance Date", "Ngày Bảo Dưỡng"), _defineProperty(_NumberOfRecords_M, "Warehouse", "Kho"), _defineProperty(_NumberOfRecords_M, "Plan", "Kế Hoạch"), _defineProperty(_NumberOfRecords_M, "Production", "Sản Xuất"), _defineProperty(_NumberOfRecords_M, "Output", "Sản Lượng"), _defineProperty(_NumberOfRecords_M, "End", "Kết Thúc"), _defineProperty(_NumberOfRecords_M, "Error", "Lỗi"), _defineProperty(_NumberOfRecords_M, "Time Real Start", "Bắt Đầu Thực Tế"), _defineProperty(_NumberOfRecords_M, "Time Real End", "Kết Thúc Thực Tế"), _defineProperty(_NumberOfRecords_M, "Symbols Plan", "Mã Chỉ Thị"), _defineProperty(_NumberOfRecords_M, "Infor", "Thông Tin"), _defineProperty(_NumberOfRecords_M, "Normal", "Xuất Thường"), _defineProperty(_NumberOfRecords_M, "Cancel", "Hủy"), _defineProperty(_NumberOfRecords_M, "Confirm", "Xác nhận"), _defineProperty(_NumberOfRecords_M, "Close", "Đóng"), _defineProperty(_NumberOfRecords_M, "Start", "Bắt Đầu"), _defineProperty(_NumberOfRecords_M, "User Name", "Tên Đăng Nhập"), _defineProperty(_NumberOfRecords_M, "ENABLE", "Kích Hoạt"), _defineProperty(_NumberOfRecords_M, "DISABLE", "Không Kích Hoạt"), _defineProperty(_NumberOfRecords_M, "Action Name", "Kiểu Hành Động"), _defineProperty(_NumberOfRecords_M, "INSERT", "Thêm Mới"), _defineProperty(_NumberOfRecords_M, "Insert", "Thêm Mới"), _defineProperty(_NumberOfRecords_M, "OEE", "Hiệu Suất Tổng Thể"), _defineProperty(_NumberOfRecords_M, "Availability", "Khả Dụng"), _defineProperty(_NumberOfRecords_M, "Performance", "Hiệu Suất"), _defineProperty(_NumberOfRecords_M, "Quality", "Chất Lượng"), _defineProperty(_NumberOfRecords_M, "shift", "ca"), _defineProperty(_NumberOfRecords_M, "Shift", "ca"), _defineProperty(_NumberOfRecords_M, "day", "ngày"), _defineProperty(_NumberOfRecords_M, "Description", "Chú Thích"), _defineProperty(_NumberOfRecords_M, "Find AGV", "Tìm AGV"), _defineProperty(_NumberOfRecords_M, "Role", "Vai Trò"), _defineProperty(_NumberOfRecords_M, "Waiting for AGV", "Chờ AGV"), _defineProperty(_NumberOfRecords_M, "AGV Shipping", "AGV Đang Chuyển Hàng"), _defineProperty(_NumberOfRecords_M, "IsDelete", "Xóa"), _defineProperty(_NumberOfRecords_M, "To", "Tới"), _defineProperty(_NumberOfRecords_M, "Command", "Lệnh"), _defineProperty(_NumberOfRecords_M, "INSERT_USER", "Thêm Mới Tài Khoản"), _defineProperty(_NumberOfRecords_M, "INSERT_ROLE", "Thêm Mới Vai Trò"), _defineProperty(_NumberOfRecords_M, "Update_User", "Cập Nhật Tài Khoản"), _defineProperty(_NumberOfRecords_M, "Delete_Role", "Xóa Vai Trò"), _defineProperty(_NumberOfRecords_M, "Command AGV Was Destroy", "Lệnh AGV đã bị hủy"), _defineProperty(_NumberOfRecords_M, "Select machine", "Chọn máy sản xuất"), _defineProperty(_NumberOfRecords_M, "Loading data", "Đang tải dữ liệu"), _defineProperty(_NumberOfRecords_M, "Mold code", "Mã khuôn"), _defineProperty(_NumberOfRecords_M, "Actual start time", "Bắt đầu thực tế"), _defineProperty(_NumberOfRecords_M, "Cycle time", "Thời gian đóng mở khuôn"), _defineProperty(_NumberOfRecords_M, "Quantity NG", "Số lượng sản phẩm lỗi"), _defineProperty(_NumberOfRecords_M, "Quantity NG of", "Số lượng sản phẩm lỗi của"), _defineProperty(_NumberOfRecords_M, "OEE parameter chart", "Biểu đồ thông số hiệu suất OEE"), _defineProperty(_NumberOfRecords_M, "Active timeline chart", "Biểu đồ thời gian hoạt động"), _defineProperty(_NumberOfRecords_M, "minute", "phút"), _defineProperty(_NumberOfRecords_M, "minutes", "phút"), _defineProperty(_NumberOfRecords_M, "hour", "giờ"), _defineProperty(_NumberOfRecords_M, "Machine stop logs", "Dừng máy"), _defineProperty(_NumberOfRecords_M, "Defective products", "Sản phẩm lỗi"), _defineProperty(_NumberOfRecords_M, "Statistical chart of OEE by machine", "Biểu đồ thống kê hiệu suất theo máy"), _defineProperty(_NumberOfRecords_M, "Statistical chart of OEE by day", "Biểu đồ thống kê hiệu suất theo ngày"), _defineProperty(_NumberOfRecords_M, "View", "Xem"), _defineProperty(_NumberOfRecords_M, "Rows per page", "Số lượng bản ghi"), _defineProperty(_NumberOfRecords_M, "Error stop and no-error stop rate chart", "Biểu đồ tỷ lệ dừng lỗi và không lỗi"), _defineProperty(_NumberOfRecords_M, "Machine error rate chart", "Biểu đồ tỷ lệ lỗi máy sản xuất"), _defineProperty(_NumberOfRecords_M, "No-error stop rate chart", "Biểu đồ tỷ lệ dừng không lỗi"), _defineProperty(_NumberOfRecords_M, "Machine stop rate chart due to quality", "Biểu đồ tỷ lệ dừng máy cho chất lượng"), _defineProperty(_NumberOfRecords_M, "Statistics chart of machine time stop", "Biểu đồ thống kê thời gian dừng máy"), _defineProperty(_NumberOfRecords_M, "Statistics chart of defective product", "Biểu đồ thống kê sản phẩm lỗi"), _defineProperty(_NumberOfRecords_M, "Stop Time", "Thời Gian Dừng"), _defineProperty(_NumberOfRecords_M, "Error Code", "Mã Lỗi"), _defineProperty(_NumberOfRecords_M, "Error Type", "Loại Lỗi"), _defineProperty(_NumberOfRecords_M, "Quantity Error", "Số lượng lỗi"), _defineProperty(_NumberOfRecords_M, "Iot disconnect", "Mất kết nối Iot"), _defineProperty(_NumberOfRecords_M, "All machine", "Tất cả máy sản xuất"), _defineProperty(_NumberOfRecords_M, "Quantity produced", "Số lượng đã sản xuất"), _defineProperty(_NumberOfRecords_M, "Quantity produced of", "Số lượng đã sản xuất của"), _defineProperty(_NumberOfRecords_M, "run", "Chạy"), _defineProperty(_NumberOfRecords_M, "stopError", "Dừng do lỗi"), _defineProperty(_NumberOfRecords_M, "stopNotError", "Dừng không lỗi"), _defineProperty(_NumberOfRecords_M, "stop due to error", "Dừng do lỗi"), _defineProperty(_NumberOfRecords_M, "stop not error", "Dừng không lỗi"), _defineProperty(_NumberOfRecords_M, "stop due to quality", "Dừng do chất lượng"), _defineProperty(_NumberOfRecords_M, "machine stop", "Dừng máy"), _defineProperty(_NumberOfRecords_M, "products", "sản phẩm"), _defineProperty(_NumberOfRecords_M, "Export excel", "Xuất excel"), _defineProperty(_NumberOfRecords_M, "Duration", "Thời lượng"), _defineProperty(_NumberOfRecords_M, "Total stop time", "Tổng thời gian dừng"), _NumberOfRecords_M);

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
/*!***********************************************************!*\
  !*** ./resources/js/warehouse-system/export-materials.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang */ "./resources/js/lang/index.js");
$('.select2').select2();

var route = "".concat(window.location.origin, "/api/warehouse-system/export");
var route_show = "".concat(window.location.origin, "/setting/setting-unit/show");
console.log(route);
var table = $('table').DataTable({
  scrollX: true,
  aaSorting: [],
  language: {
    lengthMenu: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Number of records _MENU_'),
    info: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Showing _START_ to _END_ of _TOTAL_ entries'),
    paginate: {
      previous: '‹',
      next: '›'
    }
  },
  processing: true,
  serverSide: true,
  searching: false,
  lengthMenu: [10, 15, 20, 25, 50],
  dom: 'rt<"bottom"flp><"clear">',
  ajax: {
    url: route,
    dataSrc: 'data',
    data: function data(d) {
      d.page = d.start / d.length + 1;
      d.materials = $('.materials').val();
      d.machine = $('.machine').val();
      d.status = $('.status').val();
      d.type = $('.Type').val();
    }
  },
  columns: [{
    data: 'ID',
    defaultContent: '',
    title: 'ID'
  }, {
    data: 'plan.Symbols',
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
    data: 'product.Symbols',
    defaultContent: '',
    title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Product'),
    render: function render(data) {
      // console.log(data)
      return "<p>" + data + "</p>";
    }
  }, {
    data: 'machine.Name',
    defaultContent: '',
    title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Machine')
  }, {
    data: 'Quantity_Export',
    defaultContent: '',
    title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Quantity') + ' ' + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Export') + '(Kg)',
    render: function render(data) {
      // console.log(data)
      if (data) {
        return "<p>" + parseFloat(data) + "</p>";
      } else {
        return 0;
      }
    }
  }, {
    data: 'Type',
    title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Type'),
    render: function render(data, status) {
      if (data == 1) {
        return (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('AGV');
      } else if (data == 2) {
        return (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Normal');
      } else {
        return "";
      }
    }
  }, {
    data: 'Note',
    title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Note'),
    render: function render(data) {
      return (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    }
  }, {
    data: 'user_updated.username',
    defaultContent: '',
    title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('User Updated')
  }, {
    data: 'Time_Updated',
    defaultContent: '',
    title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Time Updated')
  }, {
    data: 'Status',
    title: (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Status'),
    render: function render(data, status) {
      if (data == 0) {
        return "<p style=\"color:red\">" + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Dont Export') + "</p>";
      } else if (data == 1) {
        return "<p style=\"color:blue\">" + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Are Export') + '(' + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Waiting for AGV') + ')' + "</p>";
      } else if (data == 2) {
        return "<p style=\"color:blue\">" + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Are Export') + '(' + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('AGV Shipping') + ')' + "</p>";
      } else {
        return "<p style=\"color:green\">" + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Success Export') + "</p>";
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
        return "\n                    <button id=\"ex-" + data.ID + "\" class=\"btn btn-success btn-export\" >\n                    " + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Export') + "\n                    </button>\n                    <button id=\"del-" + data.ID + "\" class=\"btn btn-danger btn-delete\" >\n                    " + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Cancel') + "\n                    </button>\n                ";
      } else if (data.Status == 1 && data.Type == 2) {
        return "<button id=\"suc-" + data.ID + "\" class=\"btn btn-success btn-success\" >\n                    " + (0,_lang__WEBPACK_IMPORTED_MODULE_0__["default"])('Success') + "\n                    </button>";
      } else {
        return "";
      }
    }
  }]
});
$('table').on('page.dt', function () {
  console.log(table.page.info());
});
$('.filter').on('click', function () {
  table.ajax.reload();
});
$(document).on('click', '.btn-delete', function () {
  var id = $(this).attr('id');
  var name = $(this).parent().parent().children('td').first().text();
  var currentRow = $(this).closest("tr");
  var col1 = currentRow.find("td:eq(1)").text();
  $('#modalRequestCan').modal();
  $('#nameDel').text(col1);
  $('#idCan').val(id.split('-')[1]);
});
$(document).on('click', '.btn-export', function () {
  var id = $(this).attr('id');
  var currentRow = $(this).closest("tr");
  var col1 = currentRow.find("td:eq(0)").html();
  var col2 = currentRow.find("td:eq(2)").text();
  var col3 = currentRow.find("td:eq(3)").text();
  var name = $(this).parent().parent().children('td').first().text();
  $('#modalAddOrUpdate').modal();
  $('#Machine').val(col3);
  $('#Materials').val(col2);
  $('#idex').val(id.split('-')[1]);
});
var mater = 0;
socket.on('export-materials', function (message) {
  mater++;
  $('#modal_alert_export').modal();
  $('#alert').text('Có ' + mater + ' NVL cần Xuất');
  table.ajax.reload();
});
socket.on('update-status-agv', function (message) {
  console.log(message);
  table.ajax.reload();
});
})();

/******/ })()
;