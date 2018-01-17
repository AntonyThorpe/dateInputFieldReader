(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__ = __webpack_require__(1);


var today = new Date();
var fullYear = today.getFullYear();
var thisMonth = today.getMonth() + 1;
var dateFormat = $.datepicker._defaults.dateFormat;

if (dateFormat === "dd/mm/yy" || dateFormat === "dd.mm.yy" || dateFormat === "dd-mm-yy" || dateFormat === "d.m.yy") {
    describe(`#${dateFormat} - Day only`, function () {
        it("Only d entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("3");
            var same = moment(result).isSame(moment(fullYear + "-" + thisMonth + "-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("Only dd entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("15");
            var same = moment(result).isSame(moment(fullYear + "-" + thisMonth + "-15", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Day & Month only`, function () {
        it("dd/mm entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("03/05");
            var same = moment(result).isSame(moment(fullYear + "-05-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("d/m entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("3/5");
            var same = moment(result).isSame(moment(fullYear + "-05-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("d/mm entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("4/12");
            var same = moment(result).isSame(moment(fullYear + "-12-04", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("dd/m entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("18/4");
            var same = moment(result).isSame(moment(fullYear + "-04-18", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Day, Month, and a two digit year`, function () {
        it("dd/mm/y entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("03/05/22");
            var same = moment(result).isSame(moment("2022-05-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    if ($.datepicker._defaults.monthNamesShort[4] === "May") {
        describe(`#${dateFormat} - Short month name`, function () {
            it("dd/M entered", function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("13 May");
                var same = moment(result).isSame(moment(fullYear + "-05-13", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("d/M entered", function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("3 May");
                var same = moment(result).isSame(moment(fullYear + "-05-03", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("d/M entered", function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("4 Dec");
                var same = moment(result).isSame(moment(fullYear + "-12-04", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("dd/M entered", function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("18 Apr");
                var same = moment(result).isSame(moment(fullYear + "-04-18", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("dd/M/y entered", function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("18 Apr 24");
                var same = moment(result).isSame(moment("2024-04-18", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("dd/M/yy entered", function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("18 Apr 2024");
                var same = moment(result).isSame(moment("2024-04-18", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });
        });
    }

    describe("Enter rubbish", function () {
        it("Entered text", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("Sometext");
            console.log(result);
            expect(result).toBe(null);
        });
    });
}

if (dateFormat === "yy-mm-dd" || dateFormat === "yy/mm/dd" || dateFormat === "yy.mm.dd." || dateFormat === "yy. m. d.") {
    describe(`#${dateFormat} - Day only`, function () {
        it("Only d entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("3");
            var same = moment(result).isSame(moment(fullYear + "-" + thisMonth + "-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("Only dd entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("15");
            var same = moment(result).isSame(moment(fullYear + "-" + thisMonth + "-15", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Month and Day only`, function () {
        it("mm/dd entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("11/17");
            var same = moment(result).isSame(moment(fullYear + "-11-17", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("m/d entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("3/5");
            var same = moment(result).isSame(moment(fullYear + "-03-05", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("mm/d entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("12/4");
            var same = moment(result).isSame(moment(fullYear + "-12-04", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("m/dd entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("5/24");
            var same = moment(result).isSame(moment(fullYear + "-05-24", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Two digit year, Month & Day`, function () {
        it("y/mm/dd entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("22-12-3");
            var same = moment(result).isSame(moment("2022-12-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    // tested against 'eu'
    if ($.datepicker._defaults.monthNamesShort[4] === "mai.") {
        describe(`#${dateFormat} - Short month name`, function () {
            it("M/dd entered", function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("mai. 13");
                var same = moment(result).isSame(moment(fullYear + "-05-13", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("M/d entered", function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("mai. 3");
                var same = moment(result).isSame(moment(fullYear + "-05-03", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("M/d entered", function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("mai. 4");
                var same = moment(result).isSame(moment(fullYear + "-05-04", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("M/dd entered", function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("mai. 18");
                var same = moment(result).isSame(moment(fullYear + "-05-18", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("y/M/dd entered", function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("24 mai. 18");
                var same = moment(result).isSame(moment("2024-05-18", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("yy/M/dd entered", function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("2024 mai. 18");
                var same = moment(result).isSame(moment("2024-05-18", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });
        });
    }
}

if (dateFormat === "mm/dd/yy") {
    describe(`#${dateFormat} - Day only`, function () {
        it("Only d entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("3");
            var same = moment(result).isSame(moment(fullYear + "-" + thisMonth + "-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("Only dd entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("15");
            var same = moment(result).isSame(moment(fullYear + "-" + thisMonth + "-15", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Month and Day only`, function () {
        it("mm/dd entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("11/17");
            var same = moment(result).isSame(moment(fullYear + "-11-17", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("m/d entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("3/5");
            var same = moment(result).isSame(moment(fullYear + "-03-05", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("mm/d entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("12/4");
            var same = moment(result).isSame(moment(fullYear + "-12-04", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("m/dd entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("5/24");
            var same = moment(result).isSame(moment(fullYear + "-05-24", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Two digit year, Month & Day`, function () {
        it("y/mm/dd entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("12-3-22");
            var same = moment(result).isSame(moment("2022-12-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Short month name`, function () {
        it("M/dd entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("May 13");
            var same = moment(result).isSame(moment(fullYear + "-05-13", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("M/d entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("May 3");
            var same = moment(result).isSame(moment(fullYear + "-05-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("M/d entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("May 4");
            var same = moment(result).isSame(moment(fullYear + "-05-04", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("M/dd entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("May 18");
            var same = moment(result).isSame(moment(fullYear + "-05-18", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("M/dd/y entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("May 18 24");
            console.log(result);
            var same = moment(result).isSame(moment("2024-05-18", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("M/dd/yy entered", function () {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__dateInputFieldReader__["a" /* default */])("May 18 2024");
            var same = moment(result).isSame(moment("2024-05-18", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Definitions
var dateFormatFirstCharacter;
var dateFormatMiddleCharacter;
var dateFormatLastCharacter;
var dateStructure;
var dateFormatDivider;
var today = new Date();
var fullYear = today.getFullYear();
var thisMonth = today.getMonth() + 1;
var dateFormat = $.datepicker._defaults.dateFormat;
dateFormatFirstCharacter = dateFormat.charAt(0);
dateFormatLastCharacter = dateFormat.substr(dateFormat.length - 1);
if (dateFormatLastCharacter === ".") {
    // for Hungarian
    dateFormatLastCharacter = "d";
}

// Determine the middle characters in the dateFormat
switch (dateFormatFirstCharacter + dateFormatLastCharacter) {
    case "dy":
        dateFormatMiddleCharacter = "m";
        break;
    case "my":
        dateFormatMiddleCharacter = "d";
        break;
    case "dm":
        dateFormatMiddleCharacter = "y";
        break;
    case "ym":
        dateFormatMiddleCharacter = "d";
        break;
    case "md":
        dateFormatMiddleCharacter = "y";
        break;
    case "yd":
        dateFormatMiddleCharacter = "m";
        break;
}

dateStructure = dateFormatFirstCharacter + dateFormatMiddleCharacter + dateFormatLastCharacter;

// Discover the divider used by jQuery UI Datepicker
switch (dateFormat.substr(2, 2)) {
    case "/y":
        dateFormatDivider = "/";
        break;
    case "/m":
        dateFormatDivider = "/";
        break;
    case "/d":
        dateFormatDivider = "/";
        break;
    case ".y":
        dateFormatDivider = ".";
        break;
    case ".m":
        dateFormatDivider = ".";
        break;
    case ".d":
        dateFormatDivider = ".";
        break;
    case "-y":
        dateFormatDivider = "-";
        break;
    case "-m":
        dateFormatDivider = "-";
        break;
    case "-d":
        dateFormatDivider = "-";
        break;
    case ". ":
        dateFormatDivider = ". ";
        break;
    case "m.":
        dateFormatDivider = ".";
        break;
}

/**
 * Function to determine the date from the entered string
 * @param  {string} enteredDate user input
 * @return {string|null} Date string or null
 */
/* harmony default export */ __webpack_exports__["a"] = (function (enteredDate) {
    var enteredDate = enteredDate.trim();
    try {
        return $.datepicker.parseDate(dateFormat, enteredDate);
    } catch (e) {
        // Definitions
        var enteredDivider;
        var enteredFormat;
        var enteredDateArray;
        var monthFormat = "mm";
        var yearFormat = "yy";

        // Determine the divider used in the data entry @var enteredDivider
        // It might be / . - , or space
        var shortMonthEntered = $.datepicker._defaults.monthNamesShort.filter(function (item) {
            return enteredDate.includes(item);
        });

        if (!shortMonthEntered.length) {
            enteredDivider = ["/", ".", "-", ",", " "].find(function (item) {
                return enteredDate.includes(item);
            });
        } else {
            // Obtain date with month as 'M' (for the short name)
            enteredDivider = enteredDate.charAt(enteredDate.search(shortMonthEntered) - 1); // d M
            if (!enteredDivider) {
                enteredDivider = enteredDate.charAt(enteredDate.search(shortMonthEntered) + shortMonthEntered[0].length);
            }
            monthFormat = "M";
        }

        // Extract the date values for each of the three components - day, month, year
        if (enteredDivider) {
            enteredDateArray = enteredDate.split(enteredDivider);

            switch (enteredDateArray.length) {
                case 2:
                    // assumes the day and the month have been entered
                    switch (dateStructure) {
                        case "dmy":
                            try {
                                return $.datepicker.parseDate(`dd${dateFormatDivider}${monthFormat}${dateFormatDivider}yy`, enteredDateArray[0] + dateFormatDivider + enteredDateArray[1] + dateFormatDivider + fullYear);
                            } catch (e) {
                                console.error(e);
                                return null;
                            }
                            break;
                        case "mdy":
                            try {
                                return $.datepicker.parseDate(`${monthFormat}${dateFormatDivider}dd`, enteredDateArray[0] + dateFormatDivider + enteredDateArray[1]);
                            } catch (e) {
                                console.error(e);
                                return null;
                            }
                            break;
                        case "ymd":
                            try {
                                return $.datepicker.parseDate(`yy${dateFormatDivider}${monthFormat}${dateFormatDivider}dd`, fullYear + dateFormatDivider + enteredDateArray[0] + dateFormatDivider + enteredDateArray[1]);
                            } catch (e) {
                                console.error(e);
                                return null;
                            }
                    };
                    break;
                case 3:
                    switch (dateStructure) {
                        case "dmy":
                            if (enteredDateArray[2].length === 2) {
                                yearFormat = "y";
                            }
                            try {
                                return $.datepicker.parseDate(`dd${dateFormatDivider}${monthFormat}${dateFormatDivider}${yearFormat}`, enteredDateArray[0] + dateFormatDivider + enteredDateArray[1] + dateFormatDivider + enteredDateArray[2]);
                            } catch (e) {
                                console.error(e);
                                return null;
                            }
                            break;
                        case "mdy":
                            if (enteredDateArray[2].length === 2) {
                                yearFormat = "y";
                            }
                            try {
                                return $.datepicker.parseDate(`${monthFormat}${dateFormatDivider}dd${dateFormatDivider}${yearFormat}`, enteredDateArray[0] + dateFormatDivider + enteredDateArray[1] + dateFormatDivider + enteredDateArray[2]);
                            } catch (e) {
                                console.error(e);
                                return null;
                            }
                            break;
                        case "ymd":
                            if (enteredDateArray[0].length === 2) {
                                yearFormat = "y";
                            }
                            try {
                                return $.datepicker.parseDate(`${yearFormat}${dateFormatDivider}${monthFormat}${dateFormatDivider}dd`, enteredDateArray[0] + dateFormatDivider + enteredDateArray[1] + dateFormatDivider + enteredDateArray[2]);
                            } catch (e) {
                                console.error(e);
                                return null;
                            }
                            break;
                    };
                    break;
            };
        } else {
            // Only the day has been entered
            switch (dateStructure) {
                case "dmy":
                    try {
                        return $.datepicker.parseDate(`dd${dateFormatDivider}${monthFormat}`, enteredDate + dateFormatDivider + thisMonth);
                    } catch (e) {
                        console.error(e);
                        return null;
                    }
                    break;
                case "mdy":
                    try {
                        return $.datepicker.parseDate(`${monthFormat}${dateFormatDivider}dd`, thisMonth + dateFormatDivider + enteredDate);
                    } catch (e) {
                        console.error(e);
                        return null;
                    }
                    break;
                case "ymd":
                    try {
                        return $.datepicker.parseDate(`yy${dateFormatDivider}${monthFormat}${dateFormatDivider}dd`, fullYear + dateFormatDivider + thisMonth + dateFormatDivider + enteredDate);
                    } catch (e) {
                        console.error(e);
                        return null;
                    }
            };
        }
    }
    return null;
});;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMjhjMTI1OTgyYWQ5ZjkwMzUxZSIsIndlYnBhY2s6Ly8vLi9zcmMvc3BlYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0ZUlucHV0RmllbGRSZWFkZXIuanMiXSwibmFtZXMiOlsidG9kYXkiLCJEYXRlIiwiZnVsbFllYXIiLCJnZXRGdWxsWWVhciIsInRoaXNNb250aCIsImdldE1vbnRoIiwiZGF0ZUZvcm1hdCIsIiQiLCJkYXRlcGlja2VyIiwiX2RlZmF1bHRzIiwiZGVzY3JpYmUiLCJpdCIsInJlc3VsdCIsImV4dHJhY3REYXRlRnJvbUlucHV0Iiwic2FtZSIsIm1vbWVudCIsImlzU2FtZSIsImV4cGVjdCIsInRvQmUiLCJtb250aE5hbWVzU2hvcnQiLCJjb25zb2xlIiwibG9nIiwiZGF0ZUZvcm1hdEZpcnN0Q2hhcmFjdGVyIiwiZGF0ZUZvcm1hdE1pZGRsZUNoYXJhY3RlciIsImRhdGVGb3JtYXRMYXN0Q2hhcmFjdGVyIiwiZGF0ZVN0cnVjdHVyZSIsImRhdGVGb3JtYXREaXZpZGVyIiwiY2hhckF0Iiwic3Vic3RyIiwibGVuZ3RoIiwiZW50ZXJlZERhdGUiLCJ0cmltIiwicGFyc2VEYXRlIiwiZSIsImVudGVyZWREaXZpZGVyIiwiZW50ZXJlZEZvcm1hdCIsImVudGVyZWREYXRlQXJyYXkiLCJtb250aEZvcm1hdCIsInllYXJGb3JtYXQiLCJzaG9ydE1vbnRoRW50ZXJlZCIsImZpbHRlciIsIml0ZW0iLCJpbmNsdWRlcyIsImZpbmQiLCJzZWFyY2giLCJzcGxpdCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBOztBQUVBLElBQUlBLFFBQVEsSUFBSUMsSUFBSixFQUFaO0FBQ0EsSUFBSUMsV0FBV0YsTUFBTUcsV0FBTixFQUFmO0FBQ0EsSUFBSUMsWUFBWUosTUFBTUssUUFBTixLQUFtQixDQUFuQztBQUNBLElBQUlDLGFBQWFDLEVBQUVDLFVBQUYsQ0FBYUMsU0FBYixDQUF1QkgsVUFBeEM7O0FBRUEsSUFDSUEsZUFBZSxVQUFmLElBQ0FBLGVBQWUsVUFEZixJQUVBQSxlQUFlLFVBRmYsSUFHQUEsZUFBZSxRQUpuQixFQUtFO0FBQ0VJLGFBQVUsSUFBR0osVUFBVyxhQUF4QixFQUFzQyxZQUFXO0FBQzdDSyxXQUFHLGdCQUFILEVBQXFCLFlBQVc7QUFDNUIsZ0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLEdBQXJCLENBQWI7QUFDQSxnQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPYixXQUFXLEdBQVgsR0FBaUJFLFNBQWpCLEdBQTZCLEtBQXBDLEVBQTJDLFlBQTNDLENBQXRCLENBQVg7QUFDQWEsbUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILFNBSkQ7O0FBTUFQLFdBQUcsaUJBQUgsRUFBc0IsWUFBVztBQUM3QixnQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsSUFBckIsQ0FBYjtBQUNBLGdCQUFJQyxPQUFPQyxPQUFPSCxNQUFQLEVBQWVJLE1BQWYsQ0FBc0JELE9BQU9iLFdBQVcsR0FBWCxHQUFpQkUsU0FBakIsR0FBNkIsS0FBcEMsRUFBMkMsWUFBM0MsQ0FBdEIsQ0FBWDtBQUNBYSxtQkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsU0FKRDtBQUtILEtBWkQ7O0FBY0FSLGFBQVUsSUFBR0osVUFBVyxxQkFBeEIsRUFBOEMsWUFBVztBQUNyREssV0FBRyxlQUFILEVBQW9CLFlBQVc7QUFDM0IsZ0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLE9BQXJCLENBQWI7QUFDQSxnQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPYixXQUFXLFFBQWxCLEVBQTRCLFlBQTVCLENBQXRCLENBQVg7QUFDQWUsbUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILFNBSkQ7O0FBTUFQLFdBQUcsYUFBSCxFQUFrQixZQUFXO0FBQ3pCLGdCQUFJQyxTQUFTLDhFQUFBQyxDQUFxQixLQUFyQixDQUFiO0FBQ0EsZ0JBQUlDLE9BQU9DLE9BQU9ILE1BQVAsRUFBZUksTUFBZixDQUFzQkQsT0FBT2IsV0FBVyxRQUFsQixFQUE0QixZQUE1QixDQUF0QixDQUFYO0FBQ0FlLG1CQUFPSCxJQUFQLEVBQWFJLElBQWIsQ0FBa0IsSUFBbEI7QUFDSCxTQUpEOztBQU1BUCxXQUFHLGNBQUgsRUFBbUIsWUFBVztBQUMxQixnQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsTUFBckIsQ0FBYjtBQUNBLGdCQUFJQyxPQUFPQyxPQUFPSCxNQUFQLEVBQWVJLE1BQWYsQ0FBc0JELE9BQU9iLFdBQVcsUUFBbEIsRUFBNEIsWUFBNUIsQ0FBdEIsQ0FBWDtBQUNBZSxtQkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsU0FKRDs7QUFNQVAsV0FBRyxjQUFILEVBQW1CLFlBQVc7QUFDMUIsZ0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLE1BQXJCLENBQWI7QUFDQSxnQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPYixXQUFXLFFBQWxCLEVBQTRCLFlBQTVCLENBQXRCLENBQVg7QUFDQWUsbUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILFNBSkQ7QUFLSCxLQXhCRDs7QUEwQkFSLGFBQVUsSUFBR0osVUFBVyxxQ0FBeEIsRUFBOEQsWUFBVztBQUNyRUssV0FBRyxpQkFBSCxFQUFzQixZQUFXO0FBQzdCLGdCQUFJQyxTQUFTLDhFQUFBQyxDQUFxQixVQUFyQixDQUFiO0FBQ0EsZ0JBQUlDLE9BQU9DLE9BQU9ILE1BQVAsRUFBZUksTUFBZixDQUFzQkQsT0FBTyxZQUFQLEVBQXFCLFlBQXJCLENBQXRCLENBQVg7QUFDQUUsbUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILFNBSkQ7QUFLSCxLQU5EOztBQVFBLFFBQUlYLEVBQUVDLFVBQUYsQ0FBYUMsU0FBYixDQUF1QlUsZUFBdkIsQ0FBdUMsQ0FBdkMsTUFBOEMsS0FBbEQsRUFBeUQ7QUFDckRULGlCQUFVLElBQUdKLFVBQVcscUJBQXhCLEVBQThDLFlBQVc7QUFDckRLLGVBQUcsY0FBSCxFQUFtQixZQUFXO0FBQzFCLG9CQUFJQyxTQUFTLDhFQUFBQyxDQUFxQixRQUFyQixDQUFiO0FBQ0Esb0JBQUlDLE9BQU9DLE9BQU9ILE1BQVAsRUFBZUksTUFBZixDQUFzQkQsT0FBT2IsV0FBVyxRQUFsQixFQUE0QixZQUE1QixDQUF0QixDQUFYO0FBQ0FlLHVCQUFPSCxJQUFQLEVBQWFJLElBQWIsQ0FBa0IsSUFBbEI7QUFDSCxhQUpEOztBQU1BUCxlQUFHLGFBQUgsRUFBa0IsWUFBVztBQUN6QixvQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsT0FBckIsQ0FBYjtBQUNBLG9CQUFJQyxPQUFPQyxPQUFPSCxNQUFQLEVBQWVJLE1BQWYsQ0FBc0JELE9BQU9iLFdBQVcsUUFBbEIsRUFBNEIsWUFBNUIsQ0FBdEIsQ0FBWDtBQUNBZSx1QkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsYUFKRDs7QUFNQVAsZUFBRyxhQUFILEVBQWtCLFlBQVc7QUFDekIsb0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLE9BQXJCLENBQWI7QUFDQSxvQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPYixXQUFXLFFBQWxCLEVBQTRCLFlBQTVCLENBQXRCLENBQVg7QUFDQWUsdUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILGFBSkQ7O0FBTUFQLGVBQUcsY0FBSCxFQUFtQixZQUFXO0FBQzFCLG9CQUFJQyxTQUFTLDhFQUFBQyxDQUFxQixRQUFyQixDQUFiO0FBQ0Esb0JBQUlDLE9BQU9DLE9BQU9ILE1BQVAsRUFBZUksTUFBZixDQUFzQkQsT0FBT2IsV0FBVyxRQUFsQixFQUE0QixZQUE1QixDQUF0QixDQUFYO0FBQ0FlLHVCQUFPSCxJQUFQLEVBQWFJLElBQWIsQ0FBa0IsSUFBbEI7QUFDSCxhQUpEOztBQU1BUCxlQUFHLGdCQUFILEVBQXFCLFlBQVc7QUFDNUIsb0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLFdBQXJCLENBQWI7QUFDQSxvQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPLFlBQVAsRUFBcUIsWUFBckIsQ0FBdEIsQ0FBWDtBQUNBRSx1QkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsYUFKRDs7QUFNQVAsZUFBRyxpQkFBSCxFQUFzQixZQUFXO0FBQzdCLG9CQUFJQyxTQUFTLDhFQUFBQyxDQUFxQixhQUFyQixDQUFiO0FBQ0Esb0JBQUlDLE9BQU9DLE9BQU9ILE1BQVAsRUFBZUksTUFBZixDQUFzQkQsT0FBTyxZQUFQLEVBQXFCLFlBQXJCLENBQXRCLENBQVg7QUFDQUUsdUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILGFBSkQ7QUFLSCxTQXBDRDtBQXFDSDs7QUFFRFIsYUFBUyxlQUFULEVBQTBCLFlBQVU7QUFDaENDLFdBQUcsY0FBSCxFQUFtQixZQUFVO0FBQ3pCLGdCQUFJQyxTQUFTLDhFQUFBQyxDQUFxQixVQUFyQixDQUFiO0FBQ0FPLG9CQUFRQyxHQUFSLENBQVlULE1BQVo7QUFDQUssbUJBQU9MLE1BQVAsRUFBZU0sSUFBZixDQUFvQixJQUFwQjtBQUNILFNBSkQ7QUFLSCxLQU5EO0FBT0g7O0FBRUQsSUFDSVosZUFBZSxVQUFmLElBQ0FBLGVBQWUsVUFEZixJQUVBQSxlQUFlLFdBRmYsSUFHQUEsZUFBZSxXQUpuQixFQUtFO0FBQ0VJLGFBQVUsSUFBR0osVUFBVyxhQUF4QixFQUFzQyxZQUFXO0FBQzdDSyxXQUFHLGdCQUFILEVBQXFCLFlBQVc7QUFDNUIsZ0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLEdBQXJCLENBQWI7QUFDQSxnQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPYixXQUFXLEdBQVgsR0FBaUJFLFNBQWpCLEdBQTZCLEtBQXBDLEVBQTJDLFlBQTNDLENBQXRCLENBQVg7QUFDQWEsbUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILFNBSkQ7O0FBTUFQLFdBQUcsaUJBQUgsRUFBc0IsWUFBVztBQUM3QixnQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsSUFBckIsQ0FBYjtBQUNBLGdCQUFJQyxPQUFPQyxPQUFPSCxNQUFQLEVBQWVJLE1BQWYsQ0FBc0JELE9BQU9iLFdBQVcsR0FBWCxHQUFpQkUsU0FBakIsR0FBNkIsS0FBcEMsRUFBMkMsWUFBM0MsQ0FBdEIsQ0FBWDtBQUNBYSxtQkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsU0FKRDtBQUtILEtBWkQ7O0FBY0FSLGFBQVUsSUFBR0osVUFBVyx1QkFBeEIsRUFBZ0QsWUFBVztBQUN2REssV0FBRyxlQUFILEVBQW9CLFlBQVc7QUFDM0IsZ0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLE9BQXJCLENBQWI7QUFDQSxnQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPYixXQUFXLFFBQWxCLEVBQTRCLFlBQTVCLENBQXRCLENBQVg7QUFDQWUsbUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILFNBSkQ7O0FBTUFQLFdBQUcsYUFBSCxFQUFrQixZQUFXO0FBQ3pCLGdCQUFJQyxTQUFTLDhFQUFBQyxDQUFxQixLQUFyQixDQUFiO0FBQ0EsZ0JBQUlDLE9BQU9DLE9BQU9ILE1BQVAsRUFBZUksTUFBZixDQUFzQkQsT0FBT2IsV0FBVyxRQUFsQixFQUE0QixZQUE1QixDQUF0QixDQUFYO0FBQ0FlLG1CQUFPSCxJQUFQLEVBQWFJLElBQWIsQ0FBa0IsSUFBbEI7QUFDSCxTQUpEOztBQU1BUCxXQUFHLGNBQUgsRUFBbUIsWUFBVztBQUMxQixnQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsTUFBckIsQ0FBYjtBQUNBLGdCQUFJQyxPQUFPQyxPQUFPSCxNQUFQLEVBQWVJLE1BQWYsQ0FBc0JELE9BQU9iLFdBQVcsUUFBbEIsRUFBNEIsWUFBNUIsQ0FBdEIsQ0FBWDtBQUNBZSxtQkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsU0FKRDs7QUFNQVAsV0FBRyxjQUFILEVBQW1CLFlBQVc7QUFDMUIsZ0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLE1BQXJCLENBQWI7QUFDQSxnQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPYixXQUFXLFFBQWxCLEVBQTRCLFlBQTVCLENBQXRCLENBQVg7QUFDQWUsbUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILFNBSkQ7QUFLSCxLQXhCRDs7QUEwQkFSLGFBQVUsSUFBR0osVUFBVyxnQ0FBeEIsRUFBeUQsWUFBVztBQUNoRUssV0FBRyxpQkFBSCxFQUFzQixZQUFXO0FBQzdCLGdCQUFJQyxTQUFTLDhFQUFBQyxDQUFxQixTQUFyQixDQUFiO0FBQ0EsZ0JBQUlDLE9BQU9DLE9BQU9ILE1BQVAsRUFBZUksTUFBZixDQUFzQkQsT0FBTyxZQUFQLEVBQXFCLFlBQXJCLENBQXRCLENBQVg7QUFDQUUsbUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILFNBSkQ7QUFLSCxLQU5EOztBQVFBO0FBQ0EsUUFBSVgsRUFBRUMsVUFBRixDQUFhQyxTQUFiLENBQXVCVSxlQUF2QixDQUF1QyxDQUF2QyxNQUE4QyxNQUFsRCxFQUEwRDtBQUN0RFQsaUJBQVUsSUFBR0osVUFBVyxxQkFBeEIsRUFBOEMsWUFBVztBQUNyREssZUFBRyxjQUFILEVBQW1CLFlBQVc7QUFDMUIsb0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLFNBQXJCLENBQWI7QUFDQSxvQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPYixXQUFXLFFBQWxCLEVBQTRCLFlBQTVCLENBQXRCLENBQVg7QUFDQWUsdUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILGFBSkQ7O0FBTUFQLGVBQUcsYUFBSCxFQUFrQixZQUFXO0FBQ3pCLG9CQUFJQyxTQUFTLDhFQUFBQyxDQUFxQixRQUFyQixDQUFiO0FBQ0Esb0JBQUlDLE9BQU9DLE9BQU9ILE1BQVAsRUFBZUksTUFBZixDQUFzQkQsT0FBT2IsV0FBVyxRQUFsQixFQUE0QixZQUE1QixDQUF0QixDQUFYO0FBQ0FlLHVCQUFPSCxJQUFQLEVBQWFJLElBQWIsQ0FBa0IsSUFBbEI7QUFDSCxhQUpEOztBQU1BUCxlQUFHLGFBQUgsRUFBa0IsWUFBVztBQUN6QixvQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsUUFBckIsQ0FBYjtBQUNBLG9CQUFJQyxPQUFPQyxPQUFPSCxNQUFQLEVBQWVJLE1BQWYsQ0FBc0JELE9BQU9iLFdBQVcsUUFBbEIsRUFBNEIsWUFBNUIsQ0FBdEIsQ0FBWDtBQUNBZSx1QkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsYUFKRDs7QUFNQVAsZUFBRyxjQUFILEVBQW1CLFlBQVc7QUFDMUIsb0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLFNBQXJCLENBQWI7QUFDQSxvQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPYixXQUFXLFFBQWxCLEVBQTRCLFlBQTVCLENBQXRCLENBQVg7QUFDQWUsdUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILGFBSkQ7O0FBTUFQLGVBQUcsZ0JBQUgsRUFBcUIsWUFBVztBQUM1QixvQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsWUFBckIsQ0FBYjtBQUNBLG9CQUFJQyxPQUFPQyxPQUFPSCxNQUFQLEVBQWVJLE1BQWYsQ0FBc0JELE9BQU8sWUFBUCxFQUFxQixZQUFyQixDQUF0QixDQUFYO0FBQ0FFLHVCQUFPSCxJQUFQLEVBQWFJLElBQWIsQ0FBa0IsSUFBbEI7QUFDSCxhQUpEOztBQU1BUCxlQUFHLGlCQUFILEVBQXNCLFlBQVc7QUFDN0Isb0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLGNBQXJCLENBQWI7QUFDQSxvQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPLFlBQVAsRUFBcUIsWUFBckIsQ0FBdEIsQ0FBWDtBQUNBRSx1QkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsYUFKRDtBQUtILFNBcENEO0FBcUNIO0FBQ0o7O0FBRUQsSUFBSVosZUFBZSxVQUFuQixFQUErQjtBQUMzQkksYUFBVSxJQUFHSixVQUFXLGFBQXhCLEVBQXNDLFlBQVc7QUFDN0NLLFdBQUcsZ0JBQUgsRUFBcUIsWUFBVztBQUM1QixnQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsR0FBckIsQ0FBYjtBQUNBLGdCQUFJQyxPQUFPQyxPQUFPSCxNQUFQLEVBQWVJLE1BQWYsQ0FBc0JELE9BQU9iLFdBQVcsR0FBWCxHQUFpQkUsU0FBakIsR0FBNkIsS0FBcEMsRUFBMkMsWUFBM0MsQ0FBdEIsQ0FBWDtBQUNBYSxtQkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsU0FKRDs7QUFNQVAsV0FBRyxpQkFBSCxFQUFzQixZQUFXO0FBQzdCLGdCQUFJQyxTQUFTLDhFQUFBQyxDQUFxQixJQUFyQixDQUFiO0FBQ0EsZ0JBQUlDLE9BQU9DLE9BQU9ILE1BQVAsRUFBZUksTUFBZixDQUFzQkQsT0FBT2IsV0FBVyxHQUFYLEdBQWlCRSxTQUFqQixHQUE2QixLQUFwQyxFQUEyQyxZQUEzQyxDQUF0QixDQUFYO0FBQ0FhLG1CQUFPSCxJQUFQLEVBQWFJLElBQWIsQ0FBa0IsSUFBbEI7QUFDSCxTQUpEO0FBS0gsS0FaRDs7QUFjQVIsYUFBVSxJQUFHSixVQUFXLHVCQUF4QixFQUFnRCxZQUFXO0FBQ3ZESyxXQUFHLGVBQUgsRUFBb0IsWUFBVztBQUMzQixnQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsT0FBckIsQ0FBYjtBQUNBLGdCQUFJQyxPQUFPQyxPQUFPSCxNQUFQLEVBQWVJLE1BQWYsQ0FBc0JELE9BQU9iLFdBQVcsUUFBbEIsRUFBNEIsWUFBNUIsQ0FBdEIsQ0FBWDtBQUNBZSxtQkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsU0FKRDs7QUFNQVAsV0FBRyxhQUFILEVBQWtCLFlBQVc7QUFDekIsZ0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLEtBQXJCLENBQWI7QUFDQSxnQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPYixXQUFXLFFBQWxCLEVBQTRCLFlBQTVCLENBQXRCLENBQVg7QUFDQWUsbUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILFNBSkQ7O0FBTUFQLFdBQUcsY0FBSCxFQUFtQixZQUFXO0FBQzFCLGdCQUFJQyxTQUFTLDhFQUFBQyxDQUFxQixNQUFyQixDQUFiO0FBQ0EsZ0JBQUlDLE9BQU9DLE9BQU9ILE1BQVAsRUFBZUksTUFBZixDQUFzQkQsT0FBT2IsV0FBVyxRQUFsQixFQUE0QixZQUE1QixDQUF0QixDQUFYO0FBQ0FlLG1CQUFPSCxJQUFQLEVBQWFJLElBQWIsQ0FBa0IsSUFBbEI7QUFDSCxTQUpEOztBQU1BUCxXQUFHLGNBQUgsRUFBbUIsWUFBVztBQUMxQixnQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsTUFBckIsQ0FBYjtBQUNBLGdCQUFJQyxPQUFPQyxPQUFPSCxNQUFQLEVBQWVJLE1BQWYsQ0FBc0JELE9BQU9iLFdBQVcsUUFBbEIsRUFBNEIsWUFBNUIsQ0FBdEIsQ0FBWDtBQUNBZSxtQkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsU0FKRDtBQUtILEtBeEJEOztBQTBCQVIsYUFBVSxJQUFHSixVQUFXLGdDQUF4QixFQUF5RCxZQUFXO0FBQ2hFSyxXQUFHLGlCQUFILEVBQXNCLFlBQVc7QUFDN0IsZ0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLFNBQXJCLENBQWI7QUFDQSxnQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPLFlBQVAsRUFBcUIsWUFBckIsQ0FBdEIsQ0FBWDtBQUNBRSxtQkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsU0FKRDtBQUtILEtBTkQ7O0FBUUFSLGFBQVUsSUFBR0osVUFBVyxxQkFBeEIsRUFBOEMsWUFBVztBQUNyREssV0FBRyxjQUFILEVBQW1CLFlBQVc7QUFDMUIsZ0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLFFBQXJCLENBQWI7QUFDQSxnQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPYixXQUFXLFFBQWxCLEVBQTRCLFlBQTVCLENBQXRCLENBQVg7QUFDQWUsbUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILFNBSkQ7O0FBTUFQLFdBQUcsYUFBSCxFQUFrQixZQUFXO0FBQ3pCLGdCQUFJQyxTQUFTLDhFQUFBQyxDQUFxQixPQUFyQixDQUFiO0FBQ0EsZ0JBQUlDLE9BQU9DLE9BQU9ILE1BQVAsRUFBZUksTUFBZixDQUFzQkQsT0FBT2IsV0FBVyxRQUFsQixFQUE0QixZQUE1QixDQUF0QixDQUFYO0FBQ0FlLG1CQUFPSCxJQUFQLEVBQWFJLElBQWIsQ0FBa0IsSUFBbEI7QUFDSCxTQUpEOztBQU1BUCxXQUFHLGFBQUgsRUFBa0IsWUFBVztBQUN6QixnQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsT0FBckIsQ0FBYjtBQUNBLGdCQUFJQyxPQUFPQyxPQUFPSCxNQUFQLEVBQWVJLE1BQWYsQ0FBc0JELE9BQU9iLFdBQVcsUUFBbEIsRUFBNEIsWUFBNUIsQ0FBdEIsQ0FBWDtBQUNBZSxtQkFBT0gsSUFBUCxFQUFhSSxJQUFiLENBQWtCLElBQWxCO0FBQ0gsU0FKRDs7QUFNQVAsV0FBRyxjQUFILEVBQW1CLFlBQVc7QUFDMUIsZ0JBQUlDLFNBQVMsOEVBQUFDLENBQXFCLFFBQXJCLENBQWI7QUFDQSxnQkFBSUMsT0FBT0MsT0FBT0gsTUFBUCxFQUFlSSxNQUFmLENBQXNCRCxPQUFPYixXQUFXLFFBQWxCLEVBQTRCLFlBQTVCLENBQXRCLENBQVg7QUFDQWUsbUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILFNBSkQ7O0FBTUFQLFdBQUcsZ0JBQUgsRUFBcUIsWUFBVztBQUM1QixnQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsV0FBckIsQ0FBYjtBQUNBTyxvQkFBUUMsR0FBUixDQUFZVCxNQUFaO0FBQ0EsZ0JBQUlFLE9BQU9DLE9BQU9ILE1BQVAsRUFBZUksTUFBZixDQUFzQkQsT0FBTyxZQUFQLEVBQXFCLFlBQXJCLENBQXRCLENBQVg7QUFDQUUsbUJBQU9ILElBQVAsRUFBYUksSUFBYixDQUFrQixJQUFsQjtBQUNILFNBTEQ7O0FBT0FQLFdBQUcsaUJBQUgsRUFBc0IsWUFBVztBQUM3QixnQkFBSUMsU0FBUyw4RUFBQUMsQ0FBcUIsYUFBckIsQ0FBYjtBQUNBLGdCQUFJQyxPQUFPQyxPQUFPSCxNQUFQLEVBQWVJLE1BQWYsQ0FBc0JELE9BQU8sWUFBUCxFQUFxQixZQUFyQixDQUF0QixDQUFYO0FBQ0FFLG1CQUFPSCxJQUFQLEVBQWFJLElBQWIsQ0FBa0IsSUFBbEI7QUFDSCxTQUpEO0FBS0gsS0FyQ0Q7QUFzQ0gsQzs7Ozs7OztBQ3JTRDtBQUNBLElBQUlJLHdCQUFKO0FBQ0EsSUFBSUMseUJBQUo7QUFDQSxJQUFJQyx1QkFBSjtBQUNBLElBQUlDLGFBQUo7QUFDQSxJQUFJQyxpQkFBSjtBQUNBLElBQUkxQixRQUFRLElBQUlDLElBQUosRUFBWjtBQUNBLElBQUlDLFdBQVdGLE1BQU1HLFdBQU4sRUFBZjtBQUNBLElBQUlDLFlBQVlKLE1BQU1LLFFBQU4sS0FBbUIsQ0FBbkM7QUFDQSxJQUFJQyxhQUFhQyxFQUFFQyxVQUFGLENBQWFDLFNBQWIsQ0FBdUJILFVBQXhDO0FBQ0FnQiwyQkFBMkJoQixXQUFXcUIsTUFBWCxDQUFrQixDQUFsQixDQUEzQjtBQUNBSCwwQkFBMEJsQixXQUFXc0IsTUFBWCxDQUFrQnRCLFdBQVd1QixNQUFYLEdBQW9CLENBQXRDLENBQTFCO0FBQ0EsSUFBSUwsNEJBQTRCLEdBQWhDLEVBQXFDO0FBQUc7QUFDcENBLDhCQUEwQixHQUExQjtBQUNIOztBQUVEO0FBQ0EsUUFBUUYsMkJBQTJCRSx1QkFBbkM7QUFDSSxTQUFLLElBQUw7QUFDSUQsb0NBQTRCLEdBQTVCO0FBQ0E7QUFDSixTQUFLLElBQUw7QUFDSUEsb0NBQTRCLEdBQTVCO0FBQ0E7QUFDSixTQUFLLElBQUw7QUFDSUEsb0NBQTRCLEdBQTVCO0FBQ0E7QUFDSixTQUFLLElBQUw7QUFDSUEsb0NBQTRCLEdBQTVCO0FBQ0E7QUFDSixTQUFLLElBQUw7QUFDSUEsb0NBQTRCLEdBQTVCO0FBQ0E7QUFDSixTQUFLLElBQUw7QUFDSUEsb0NBQTRCLEdBQTVCO0FBQ0E7QUFsQlI7O0FBcUJBRSxnQkFBZ0JILDJCQUEyQkMseUJBQTNCLEdBQXVEQyx1QkFBdkU7O0FBRUE7QUFDQSxRQUFRbEIsV0FBV3NCLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsQ0FBUjtBQUNJLFNBQUssSUFBTDtBQUNJRiw0QkFBb0IsR0FBcEI7QUFDQTtBQUNKLFNBQUssSUFBTDtBQUNJQSw0QkFBb0IsR0FBcEI7QUFDQTtBQUNKLFNBQUssSUFBTDtBQUNJQSw0QkFBb0IsR0FBcEI7QUFDQTtBQUNKLFNBQUssSUFBTDtBQUNJQSw0QkFBb0IsR0FBcEI7QUFDQTtBQUNKLFNBQUssSUFBTDtBQUNJQSw0QkFBb0IsR0FBcEI7QUFDQTtBQUNKLFNBQUssSUFBTDtBQUNJQSw0QkFBb0IsR0FBcEI7QUFDQTtBQUNKLFNBQUssSUFBTDtBQUNJQSw0QkFBb0IsR0FBcEI7QUFDQTtBQUNKLFNBQUssSUFBTDtBQUNJQSw0QkFBb0IsR0FBcEI7QUFDQTtBQUNKLFNBQUssSUFBTDtBQUNJQSw0QkFBb0IsR0FBcEI7QUFDQTtBQUNKLFNBQUssSUFBTDtBQUNJQSw0QkFBb0IsSUFBcEI7QUFDQTtBQUNKLFNBQUssSUFBTDtBQUNJQSw0QkFBb0IsR0FBcEI7QUFDQTtBQWpDUjs7QUFvQ0E7Ozs7O0FBS0EseURBQWUsVUFBU0ksV0FBVCxFQUFzQjtBQUNqQyxRQUFJQSxjQUFjQSxZQUFZQyxJQUFaLEVBQWxCO0FBQ0EsUUFBSTtBQUNBLGVBQU94QixFQUFFQyxVQUFGLENBQWF3QixTQUFiLENBQXVCMUIsVUFBdkIsRUFBbUN3QixXQUFuQyxDQUFQO0FBQ0gsS0FGRCxDQUVFLE9BQU9HLENBQVAsRUFBVTtBQUNSO0FBQ0EsWUFBSUMsY0FBSjtBQUNBLFlBQUlDLGFBQUo7QUFDQSxZQUFJQyxnQkFBSjtBQUNBLFlBQUlDLGNBQWMsSUFBbEI7QUFDQSxZQUFJQyxhQUFhLElBQWpCOztBQUVBO0FBQ0E7QUFDQSxZQUFJQyxvQkFBb0JoQyxFQUFFQyxVQUFGLENBQWFDLFNBQWIsQ0FBdUJVLGVBQXZCLENBQXVDcUIsTUFBdkMsQ0FBOEMsVUFBU0MsSUFBVCxFQUFjO0FBQ2hGLG1CQUFPWCxZQUFZWSxRQUFaLENBQXFCRCxJQUFyQixDQUFQO0FBQ0gsU0FGdUIsQ0FBeEI7O0FBSUEsWUFBSSxDQUFDRixrQkFBa0JWLE1BQXZCLEVBQStCO0FBQzNCSyw2QkFBaUIsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEJTLElBQTFCLENBQStCLFVBQVNGLElBQVQsRUFBYztBQUMxRCx1QkFBT1gsWUFBWVksUUFBWixDQUFxQkQsSUFBckIsQ0FBUDtBQUNILGFBRmdCLENBQWpCO0FBSUgsU0FMRCxNQUtPO0FBQ0g7QUFDQVAsNkJBQWlCSixZQUFZSCxNQUFaLENBQW1CRyxZQUFZYyxNQUFaLENBQW1CTCxpQkFBbkIsSUFBd0MsQ0FBM0QsQ0FBakIsQ0FGRyxDQUU4RTtBQUNqRixnQkFBSSxDQUFDTCxjQUFMLEVBQXFCO0FBQ2pCQSxpQ0FBaUJKLFlBQVlILE1BQVosQ0FBbUJHLFlBQVljLE1BQVosQ0FBbUJMLGlCQUFuQixJQUF3Q0Esa0JBQWtCLENBQWxCLEVBQXFCVixNQUFoRixDQUFqQjtBQUNIO0FBQ0RRLDBCQUFjLEdBQWQ7QUFDSDs7QUFFRDtBQUNBLFlBQUlILGNBQUosRUFBb0I7QUFDaEJFLCtCQUFtQk4sWUFBWWUsS0FBWixDQUFrQlgsY0FBbEIsQ0FBbkI7O0FBRUEsb0JBQVFFLGlCQUFpQlAsTUFBekI7QUFDSSxxQkFBSyxDQUFMO0FBQVM7QUFDTCw0QkFBUUosYUFBUjtBQUNJLDZCQUFLLEtBQUw7QUFDSSxnQ0FBSTtBQUNBLHVDQUFPbEIsRUFBRUMsVUFBRixDQUFhd0IsU0FBYixDQUNGLEtBQUlOLGlCQUFrQixHQUFFVyxXQUFZLEdBQUVYLGlCQUFrQixJQUR0RCxFQUVIVSxpQkFBaUIsQ0FBakIsSUFBc0JWLGlCQUF0QixHQUEwQ1UsaUJBQWlCLENBQWpCLENBQTFDLEdBQWdFVixpQkFBaEUsR0FBb0Z4QixRQUZqRixDQUFQO0FBSUgsNkJBTEQsQ0FLRSxPQUFPK0IsQ0FBUCxFQUFVO0FBQ1JiLHdDQUFRMEIsS0FBUixDQUFjYixDQUFkO0FBQ0EsdUNBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSiw2QkFBSyxLQUFMO0FBQ0ksZ0NBQUk7QUFDQSx1Q0FBTzFCLEVBQUVDLFVBQUYsQ0FBYXdCLFNBQWIsQ0FDRixHQUFFSyxXQUFZLEdBQUVYLGlCQUFrQixJQURoQyxFQUVIVSxpQkFBaUIsQ0FBakIsSUFBc0JWLGlCQUF0QixHQUEwQ1UsaUJBQWlCLENBQWpCLENBRnZDLENBQVA7QUFJSCw2QkFMRCxDQUtFLE9BQU9ILENBQVAsRUFBVTtBQUNSYix3Q0FBUTBCLEtBQVIsQ0FBY2IsQ0FBZDtBQUNBLHVDQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0osNkJBQUssS0FBTDtBQUNJLGdDQUFJO0FBQ0EsdUNBQU8xQixFQUFFQyxVQUFGLENBQWF3QixTQUFiLENBQ0YsS0FBSU4saUJBQWtCLEdBQUVXLFdBQVksR0FBRVgsaUJBQWtCLElBRHRELEVBRUh4QixXQUFXd0IsaUJBQVgsR0FBK0JVLGlCQUFpQixDQUFqQixDQUEvQixHQUFxRFYsaUJBQXJELEdBQXlFVSxpQkFBaUIsQ0FBakIsQ0FGdEUsQ0FBUDtBQUlILDZCQUxELENBS0UsT0FBT0gsQ0FBUCxFQUFVO0FBQ1JiLHdDQUFRMEIsS0FBUixDQUFjYixDQUFkO0FBQ0EsdUNBQU8sSUFBUDtBQUNIO0FBaENULHFCQWlDQztBQUNEO0FBQ0oscUJBQUssQ0FBTDtBQUNJLDRCQUFRUixhQUFSO0FBQ0ksNkJBQUssS0FBTDtBQUNJLGdDQUFJVyxpQkFBaUIsQ0FBakIsRUFBb0JQLE1BQXBCLEtBQStCLENBQW5DLEVBQXNDO0FBQ2xDUyw2Q0FBYSxHQUFiO0FBQ0g7QUFDRCxnQ0FBSTtBQUNBLHVDQUFPL0IsRUFBRUMsVUFBRixDQUFhd0IsU0FBYixDQUNGLEtBQUlOLGlCQUFrQixHQUFFVyxXQUFZLEdBQUVYLGlCQUFrQixHQUFFWSxVQUFXLEVBRG5FLEVBRUhGLGlCQUFpQixDQUFqQixJQUFzQlYsaUJBQXRCLEdBQTBDVSxpQkFBaUIsQ0FBakIsQ0FBMUMsR0FBZ0VWLGlCQUFoRSxHQUFvRlUsaUJBQWlCLENBQWpCLENBRmpGLENBQVA7QUFJSCw2QkFMRCxDQUtFLE9BQU9ILENBQVAsRUFBVTtBQUNSYix3Q0FBUTBCLEtBQVIsQ0FBY2IsQ0FBZDtBQUNBLHVDQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0osNkJBQUssS0FBTDtBQUNJLGdDQUFJRyxpQkFBaUIsQ0FBakIsRUFBb0JQLE1BQXBCLEtBQStCLENBQW5DLEVBQXNDO0FBQ2xDUyw2Q0FBYSxHQUFiO0FBQ0g7QUFDRCxnQ0FBSTtBQUNBLHVDQUFPL0IsRUFBRUMsVUFBRixDQUFhd0IsU0FBYixDQUNGLEdBQUVLLFdBQVksR0FBRVgsaUJBQWtCLEtBQUlBLGlCQUFrQixHQUFFWSxVQUFXLEVBRG5FLEVBRUhGLGlCQUFpQixDQUFqQixJQUFzQlYsaUJBQXRCLEdBQTBDVSxpQkFBaUIsQ0FBakIsQ0FBMUMsR0FBZ0VWLGlCQUFoRSxHQUFvRlUsaUJBQWlCLENBQWpCLENBRmpGLENBQVA7QUFJSCw2QkFMRCxDQUtFLE9BQU9ILENBQVAsRUFBVTtBQUNSYix3Q0FBUTBCLEtBQVIsQ0FBY2IsQ0FBZDtBQUNBLHVDQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0osNkJBQUssS0FBTDtBQUNJLGdDQUFJRyxpQkFBaUIsQ0FBakIsRUFBb0JQLE1BQXBCLEtBQStCLENBQW5DLEVBQXNDO0FBQ2xDUyw2Q0FBYSxHQUFiO0FBQ0g7QUFDRCxnQ0FBSTtBQUNBLHVDQUFPL0IsRUFBRUMsVUFBRixDQUFhd0IsU0FBYixDQUNGLEdBQUVNLFVBQVcsR0FBRVosaUJBQWtCLEdBQUVXLFdBQVksR0FBRVgsaUJBQWtCLElBRGpFLEVBRUhVLGlCQUFpQixDQUFqQixJQUFzQlYsaUJBQXRCLEdBQTBDVSxpQkFBaUIsQ0FBakIsQ0FBMUMsR0FBZ0VWLGlCQUFoRSxHQUFvRlUsaUJBQWlCLENBQWpCLENBRmpGLENBQVA7QUFJSCw2QkFMRCxDQUtFLE9BQU9ILENBQVAsRUFBVTtBQUNSYix3Q0FBUTBCLEtBQVIsQ0FBY2IsQ0FBZDtBQUNBLHVDQUFPLElBQVA7QUFDSDtBQUNEO0FBMUNSLHFCQTJDSztBQUNMO0FBbEZSLGFBbUZDO0FBQ0osU0F2RkQsTUF1Rk87QUFBRTtBQUNMLG9CQUFRUixhQUFSO0FBQ0kscUJBQUssS0FBTDtBQUNJLHdCQUFJO0FBQ0EsK0JBQU9sQixFQUFFQyxVQUFGLENBQWF3QixTQUFiLENBQ0YsS0FBSU4saUJBQWtCLEdBQUVXLFdBQVksRUFEbEMsRUFFSFAsY0FBY0osaUJBQWQsR0FBa0N0QixTQUYvQixDQUFQO0FBSUgscUJBTEQsQ0FLRSxPQUFPNkIsQ0FBUCxFQUFVO0FBQ1JiLGdDQUFRMEIsS0FBUixDQUFjYixDQUFkO0FBQ0EsK0JBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSixxQkFBSyxLQUFMO0FBQ0ksd0JBQUk7QUFDQSwrQkFBTzFCLEVBQUVDLFVBQUYsQ0FBYXdCLFNBQWIsQ0FDRixHQUFFSyxXQUFZLEdBQUVYLGlCQUFrQixJQURoQyxFQUVIdEIsWUFBWXNCLGlCQUFaLEdBQWdDSSxXQUY3QixDQUFQO0FBSUgscUJBTEQsQ0FLRSxPQUFPRyxDQUFQLEVBQVU7QUFDUmIsZ0NBQVEwQixLQUFSLENBQWNiLENBQWQ7QUFDQSwrQkFBTyxJQUFQO0FBQ0g7QUFDRDtBQUNKLHFCQUFLLEtBQUw7QUFDSSx3QkFBSTtBQUNBLCtCQUFPMUIsRUFBRUMsVUFBRixDQUFhd0IsU0FBYixDQUNGLEtBQUlOLGlCQUFrQixHQUFFVyxXQUFZLEdBQUVYLGlCQUFrQixJQUR0RCxFQUVIeEIsV0FBV3dCLGlCQUFYLEdBQStCdEIsU0FBL0IsR0FBMkNzQixpQkFBM0MsR0FBK0RJLFdBRjVELENBQVA7QUFJSCxxQkFMRCxDQUtFLE9BQU9HLENBQVAsRUFBVTtBQUNSYixnQ0FBUTBCLEtBQVIsQ0FBY2IsQ0FBZDtBQUNBLCtCQUFPLElBQVA7QUFDSDtBQWhDVCxhQWlDQztBQUNKO0FBRUo7QUFDRCxXQUFPLElBQVA7QUFDSCxJIiwiZmlsZSI6Ii4vZGlzdC9zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDI4YzEyNTk4MmFkOWY5MDM1MWUiLCJpbXBvcnQgZXh0cmFjdERhdGVGcm9tSW5wdXQgZnJvbSBcIi4vZGF0ZUlucHV0RmllbGRSZWFkZXJcIjtcblxudmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbnZhciBmdWxsWWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG52YXIgdGhpc01vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XG52YXIgZGF0ZUZvcm1hdCA9ICQuZGF0ZXBpY2tlci5fZGVmYXVsdHMuZGF0ZUZvcm1hdDtcblxuaWYgKFxuICAgIGRhdGVGb3JtYXQgPT09IFwiZGQvbW0veXlcIiB8fFxuICAgIGRhdGVGb3JtYXQgPT09IFwiZGQubW0ueXlcIiB8fFxuICAgIGRhdGVGb3JtYXQgPT09IFwiZGQtbW0teXlcIiB8fFxuICAgIGRhdGVGb3JtYXQgPT09IFwiZC5tLnl5XCJcbikge1xuICAgIGRlc2NyaWJlKGAjJHtkYXRlRm9ybWF0fSAtIERheSBvbmx5YCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGl0KFwiT25seSBkIGVudGVyZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCIzXCIpO1xuICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KGZ1bGxZZWFyICsgXCItXCIgKyB0aGlzTW9udGggKyBcIi0wM1wiLCBcIllZWVktTU0tRERcIikpO1xuICAgICAgICAgICAgZXhwZWN0KHNhbWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiT25seSBkZCBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGV4dHJhY3REYXRlRnJvbUlucHV0KFwiMTVcIik7XG4gICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoZnVsbFllYXIgKyBcIi1cIiArIHRoaXNNb250aCArIFwiLTE1XCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZShgIyR7ZGF0ZUZvcm1hdH0gLSBEYXkgJiBNb250aCBvbmx5YCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGl0KFwiZGQvbW0gZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIjAzLzA1XCIpO1xuICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KGZ1bGxZZWFyICsgXCItMDUtMDNcIiwgXCJZWVlZLU1NLUREXCIpKTtcbiAgICAgICAgICAgIGV4cGVjdChzYW1lKS50b0JlKHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImQvbSBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGV4dHJhY3REYXRlRnJvbUlucHV0KFwiMy81XCIpO1xuICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KGZ1bGxZZWFyICsgXCItMDUtMDNcIiwgXCJZWVlZLU1NLUREXCIpKTtcbiAgICAgICAgICAgIGV4cGVjdChzYW1lKS50b0JlKHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImQvbW0gZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIjQvMTJcIik7XG4gICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoZnVsbFllYXIgKyBcIi0xMi0wNFwiLCBcIllZWVktTU0tRERcIikpO1xuICAgICAgICAgICAgZXhwZWN0KHNhbWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiZGQvbSBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGV4dHJhY3REYXRlRnJvbUlucHV0KFwiMTgvNFwiKTtcbiAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChmdWxsWWVhciArIFwiLTA0LTE4XCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZShgIyR7ZGF0ZUZvcm1hdH0gLSBEYXksIE1vbnRoLCBhbmQgYSB0d28gZGlnaXQgeWVhcmAsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpdChcImRkL21tL3kgZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIjAzLzA1LzIyXCIpO1xuICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KFwiMjAyMi0wNS0wM1wiLCBcIllZWVktTU0tRERcIikpO1xuICAgICAgICAgICAgZXhwZWN0KHNhbWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKCQuZGF0ZXBpY2tlci5fZGVmYXVsdHMubW9udGhOYW1lc1Nob3J0WzRdID09PSBcIk1heVwiKSB7XG4gICAgICAgIGRlc2NyaWJlKGAjJHtkYXRlRm9ybWF0fSAtIFNob3J0IG1vbnRoIG5hbWVgLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGl0KFwiZGQvTSBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIjEzIE1heVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoZnVsbFllYXIgKyBcIi0wNS0xM1wiLCBcIllZWVktTU0tRERcIikpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChzYW1lKS50b0JlKHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiZC9NIGVudGVyZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGV4dHJhY3REYXRlRnJvbUlucHV0KFwiMyBNYXlcIik7XG4gICAgICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KGZ1bGxZZWFyICsgXCItMDUtMDNcIiwgXCJZWVlZLU1NLUREXCIpKTtcbiAgICAgICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcImQvTSBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIjQgRGVjXCIpO1xuICAgICAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChmdWxsWWVhciArIFwiLTEyLTA0XCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHNhbWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJkZC9NIGVudGVyZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGV4dHJhY3REYXRlRnJvbUlucHV0KFwiMTggQXByXCIpO1xuICAgICAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChmdWxsWWVhciArIFwiLTA0LTE4XCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHNhbWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJkZC9NL3kgZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCIxOCBBcHIgMjRcIik7XG4gICAgICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KFwiMjAyNC0wNC0xOFwiLCBcIllZWVktTU0tRERcIikpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChzYW1lKS50b0JlKHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiZGQvTS95eSBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIjE4IEFwciAyMDI0XCIpO1xuICAgICAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChcIjIwMjQtMDQtMThcIiwgXCJZWVlZLU1NLUREXCIpKTtcbiAgICAgICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXNjcmliZShcIkVudGVyIHJ1YmJpc2hcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJFbnRlcmVkIHRleHRcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIlNvbWV0ZXh0XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQpLnRvQmUobnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5pZiAoXG4gICAgZGF0ZUZvcm1hdCA9PT0gXCJ5eS1tbS1kZFwiIHx8XG4gICAgZGF0ZUZvcm1hdCA9PT0gXCJ5eS9tbS9kZFwiIHx8XG4gICAgZGF0ZUZvcm1hdCA9PT0gXCJ5eS5tbS5kZC5cIiB8fFxuICAgIGRhdGVGb3JtYXQgPT09IFwieXkuIG0uIGQuXCJcbikge1xuICAgIGRlc2NyaWJlKGAjJHtkYXRlRm9ybWF0fSAtIERheSBvbmx5YCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGl0KFwiT25seSBkIGVudGVyZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCIzXCIpO1xuICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KGZ1bGxZZWFyICsgXCItXCIgKyB0aGlzTW9udGggKyBcIi0wM1wiLCBcIllZWVktTU0tRERcIikpO1xuICAgICAgICAgICAgZXhwZWN0KHNhbWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiT25seSBkZCBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGV4dHJhY3REYXRlRnJvbUlucHV0KFwiMTVcIik7XG4gICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoZnVsbFllYXIgKyBcIi1cIiArIHRoaXNNb250aCArIFwiLTE1XCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZShgIyR7ZGF0ZUZvcm1hdH0gLSBNb250aCBhbmQgRGF5IG9ubHlgLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaXQoXCJtbS9kZCBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGV4dHJhY3REYXRlRnJvbUlucHV0KFwiMTEvMTdcIik7XG4gICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoZnVsbFllYXIgKyBcIi0xMS0xN1wiLCBcIllZWVktTU0tRERcIikpO1xuICAgICAgICAgICAgZXhwZWN0KHNhbWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwibS9kIGVudGVyZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCIzLzVcIik7XG4gICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoZnVsbFllYXIgKyBcIi0wMy0wNVwiLCBcIllZWVktTU0tRERcIikpO1xuICAgICAgICAgICAgZXhwZWN0KHNhbWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwibW0vZCBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGV4dHJhY3REYXRlRnJvbUlucHV0KFwiMTIvNFwiKTtcbiAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChmdWxsWWVhciArIFwiLTEyLTA0XCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJtL2RkIGVudGVyZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCI1LzI0XCIpO1xuICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KGZ1bGxZZWFyICsgXCItMDUtMjRcIiwgXCJZWVlZLU1NLUREXCIpKTtcbiAgICAgICAgICAgIGV4cGVjdChzYW1lKS50b0JlKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKGAjJHtkYXRlRm9ybWF0fSAtIFR3byBkaWdpdCB5ZWFyLCBNb250aCAmIERheWAsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpdChcInkvbW0vZGQgZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIjIyLTEyLTNcIik7XG4gICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoXCIyMDIyLTEyLTAzXCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyB0ZXN0ZWQgYWdhaW5zdCAnZXUnXG4gICAgaWYgKCQuZGF0ZXBpY2tlci5fZGVmYXVsdHMubW9udGhOYW1lc1Nob3J0WzRdID09PSBcIm1haS5cIikge1xuICAgICAgICBkZXNjcmliZShgIyR7ZGF0ZUZvcm1hdH0gLSBTaG9ydCBtb250aCBuYW1lYCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpdChcIk0vZGQgZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCJtYWkuIDEzXCIpO1xuICAgICAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChmdWxsWWVhciArIFwiLTA1LTEzXCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHNhbWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJNL2QgZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCJtYWkuIDNcIik7XG4gICAgICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KGZ1bGxZZWFyICsgXCItMDUtMDNcIiwgXCJZWVlZLU1NLUREXCIpKTtcbiAgICAgICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcIk0vZCBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIm1haS4gNFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoZnVsbFllYXIgKyBcIi0wNS0wNFwiLCBcIllZWVktTU0tRERcIikpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChzYW1lKS50b0JlKHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiTS9kZCBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIm1haS4gMThcIik7XG4gICAgICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KGZ1bGxZZWFyICsgXCItMDUtMThcIiwgXCJZWVlZLU1NLUREXCIpKTtcbiAgICAgICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcInkvTS9kZCBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIjI0IG1haS4gMThcIik7XG4gICAgICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KFwiMjAyNC0wNS0xOFwiLCBcIllZWVktTU0tRERcIikpO1xuICAgICAgICAgICAgICAgIGV4cGVjdChzYW1lKS50b0JlKHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwieXkvTS9kZCBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIjIwMjQgbWFpLiAxOFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoXCIyMDI0LTA1LTE4XCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICAgICAgZXhwZWN0KHNhbWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5pZiAoZGF0ZUZvcm1hdCA9PT0gXCJtbS9kZC95eVwiKSB7XG4gICAgZGVzY3JpYmUoYCMke2RhdGVGb3JtYXR9IC0gRGF5IG9ubHlgLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaXQoXCJPbmx5IGQgZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIjNcIik7XG4gICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoZnVsbFllYXIgKyBcIi1cIiArIHRoaXNNb250aCArIFwiLTAzXCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJPbmx5IGRkIGVudGVyZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCIxNVwiKTtcbiAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChmdWxsWWVhciArIFwiLVwiICsgdGhpc01vbnRoICsgXCItMTVcIiwgXCJZWVlZLU1NLUREXCIpKTtcbiAgICAgICAgICAgIGV4cGVjdChzYW1lKS50b0JlKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKGAjJHtkYXRlRm9ybWF0fSAtIE1vbnRoIGFuZCBEYXkgb25seWAsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpdChcIm1tL2RkIGVudGVyZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCIxMS8xN1wiKTtcbiAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChmdWxsWWVhciArIFwiLTExLTE3XCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJtL2QgZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIjMvNVwiKTtcbiAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChmdWxsWWVhciArIFwiLTAzLTA1XCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJtbS9kIGVudGVyZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCIxMi80XCIpO1xuICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KGZ1bGxZZWFyICsgXCItMTItMDRcIiwgXCJZWVlZLU1NLUREXCIpKTtcbiAgICAgICAgICAgIGV4cGVjdChzYW1lKS50b0JlKHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIm0vZGQgZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIjUvMjRcIik7XG4gICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoZnVsbFllYXIgKyBcIi0wNS0yNFwiLCBcIllZWVktTU0tRERcIikpO1xuICAgICAgICAgICAgZXhwZWN0KHNhbWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoYCMke2RhdGVGb3JtYXR9IC0gVHdvIGRpZ2l0IHllYXIsIE1vbnRoICYgRGF5YCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGl0KFwieS9tbS9kZCBlbnRlcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGV4dHJhY3REYXRlRnJvbUlucHV0KFwiMTItMy0yMlwiKTtcbiAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChcIjIwMjItMTItMDNcIiwgXCJZWVlZLU1NLUREXCIpKTtcbiAgICAgICAgICAgIGV4cGVjdChzYW1lKS50b0JlKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKGAjJHtkYXRlRm9ybWF0fSAtIFNob3J0IG1vbnRoIG5hbWVgLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaXQoXCJNL2RkIGVudGVyZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCJNYXkgMTNcIik7XG4gICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoZnVsbFllYXIgKyBcIi0wNS0xM1wiLCBcIllZWVktTU0tRERcIikpO1xuICAgICAgICAgICAgZXhwZWN0KHNhbWUpLnRvQmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiTS9kIGVudGVyZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCJNYXkgM1wiKTtcbiAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChmdWxsWWVhciArIFwiLTA1LTAzXCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJNL2QgZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIk1heSA0XCIpO1xuICAgICAgICAgICAgdmFyIHNhbWUgPSBtb21lbnQocmVzdWx0KS5pc1NhbWUobW9tZW50KGZ1bGxZZWFyICsgXCItMDUtMDRcIiwgXCJZWVlZLU1NLUREXCIpKTtcbiAgICAgICAgICAgIGV4cGVjdChzYW1lKS50b0JlKHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIk0vZGQgZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIk1heSAxOFwiKTtcbiAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChmdWxsWWVhciArIFwiLTA1LTE4XCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJNL2RkL3kgZW50ZXJlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBleHRyYWN0RGF0ZUZyb21JbnB1dChcIk1heSAxOCAyNFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICB2YXIgc2FtZSA9IG1vbWVudChyZXN1bHQpLmlzU2FtZShtb21lbnQoXCIyMDI0LTA1LTE4XCIsIFwiWVlZWS1NTS1ERFwiKSk7XG4gICAgICAgICAgICBleHBlY3Qoc2FtZSkudG9CZSh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJNL2RkL3l5IGVudGVyZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdERhdGVGcm9tSW5wdXQoXCJNYXkgMTggMjAyNFwiKTtcbiAgICAgICAgICAgIHZhciBzYW1lID0gbW9tZW50KHJlc3VsdCkuaXNTYW1lKG1vbWVudChcIjIwMjQtMDUtMThcIiwgXCJZWVlZLU1NLUREXCIpKTtcbiAgICAgICAgICAgIGV4cGVjdChzYW1lKS50b0JlKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zcGVjLmpzIiwiLy8gRGVmaW5pdGlvbnNcbnZhciBkYXRlRm9ybWF0Rmlyc3RDaGFyYWN0ZXI7XG52YXIgZGF0ZUZvcm1hdE1pZGRsZUNoYXJhY3RlcjtcbnZhciBkYXRlRm9ybWF0TGFzdENoYXJhY3RlcjtcbnZhciBkYXRlU3RydWN0dXJlO1xudmFyIGRhdGVGb3JtYXREaXZpZGVyO1xudmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbnZhciBmdWxsWWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG52YXIgdGhpc01vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XG52YXIgZGF0ZUZvcm1hdCA9ICQuZGF0ZXBpY2tlci5fZGVmYXVsdHMuZGF0ZUZvcm1hdDtcbmRhdGVGb3JtYXRGaXJzdENoYXJhY3RlciA9IGRhdGVGb3JtYXQuY2hhckF0KDApO1xuZGF0ZUZvcm1hdExhc3RDaGFyYWN0ZXIgPSBkYXRlRm9ybWF0LnN1YnN0cihkYXRlRm9ybWF0Lmxlbmd0aCAtIDEpO1xuaWYgKGRhdGVGb3JtYXRMYXN0Q2hhcmFjdGVyID09PSBcIi5cIikgeyAgLy8gZm9yIEh1bmdhcmlhblxuICAgIGRhdGVGb3JtYXRMYXN0Q2hhcmFjdGVyID0gXCJkXCI7XG59XG5cbi8vIERldGVybWluZSB0aGUgbWlkZGxlIGNoYXJhY3RlcnMgaW4gdGhlIGRhdGVGb3JtYXRcbnN3aXRjaCAoZGF0ZUZvcm1hdEZpcnN0Q2hhcmFjdGVyICsgZGF0ZUZvcm1hdExhc3RDaGFyYWN0ZXIpIHtcbiAgICBjYXNlIFwiZHlcIjpcbiAgICAgICAgZGF0ZUZvcm1hdE1pZGRsZUNoYXJhY3RlciA9IFwibVwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwibXlcIjpcbiAgICAgICAgZGF0ZUZvcm1hdE1pZGRsZUNoYXJhY3RlciA9IFwiZFwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwiZG1cIjpcbiAgICAgICAgZGF0ZUZvcm1hdE1pZGRsZUNoYXJhY3RlciA9IFwieVwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwieW1cIjpcbiAgICAgICAgZGF0ZUZvcm1hdE1pZGRsZUNoYXJhY3RlciA9IFwiZFwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwibWRcIjpcbiAgICAgICAgZGF0ZUZvcm1hdE1pZGRsZUNoYXJhY3RlciA9IFwieVwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwieWRcIjpcbiAgICAgICAgZGF0ZUZvcm1hdE1pZGRsZUNoYXJhY3RlciA9IFwibVwiO1xuICAgICAgICBicmVhaztcbn1cblxuZGF0ZVN0cnVjdHVyZSA9IGRhdGVGb3JtYXRGaXJzdENoYXJhY3RlciArIGRhdGVGb3JtYXRNaWRkbGVDaGFyYWN0ZXIgKyBkYXRlRm9ybWF0TGFzdENoYXJhY3RlcjtcblxuLy8gRGlzY292ZXIgdGhlIGRpdmlkZXIgdXNlZCBieSBqUXVlcnkgVUkgRGF0ZXBpY2tlclxuc3dpdGNoIChkYXRlRm9ybWF0LnN1YnN0cigyLDIpKSB7XG4gICAgY2FzZSBcIi95XCI6XG4gICAgICAgIGRhdGVGb3JtYXREaXZpZGVyID0gXCIvXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIvbVwiOlxuICAgICAgICBkYXRlRm9ybWF0RGl2aWRlciA9IFwiL1wiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwiL2RcIjpcbiAgICAgICAgZGF0ZUZvcm1hdERpdmlkZXIgPSBcIi9cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIi55XCI6XG4gICAgICAgIGRhdGVGb3JtYXREaXZpZGVyID0gXCIuXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCIubVwiOlxuICAgICAgICBkYXRlRm9ybWF0RGl2aWRlciA9IFwiLlwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwiLmRcIjpcbiAgICAgICAgZGF0ZUZvcm1hdERpdmlkZXIgPSBcIi5cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIi15XCI6XG4gICAgICAgIGRhdGVGb3JtYXREaXZpZGVyID0gXCItXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCItbVwiOlxuICAgICAgICBkYXRlRm9ybWF0RGl2aWRlciA9IFwiLVwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwiLWRcIjpcbiAgICAgICAgZGF0ZUZvcm1hdERpdmlkZXIgPSBcIi1cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIi4gXCI6XG4gICAgICAgIGRhdGVGb3JtYXREaXZpZGVyID0gXCIuIFwiO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIFwibS5cIjpcbiAgICAgICAgZGF0ZUZvcm1hdERpdmlkZXIgPSBcIi5cIjtcbiAgICAgICAgYnJlYWs7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHRoZSBkYXRlIGZyb20gdGhlIGVudGVyZWQgc3RyaW5nXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVudGVyZWREYXRlIHVzZXIgaW5wdXRcbiAqIEByZXR1cm4ge3N0cmluZ3xudWxsfSBEYXRlIHN0cmluZyBvciBudWxsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVudGVyZWREYXRlKSB7XG4gICAgdmFyIGVudGVyZWREYXRlID0gZW50ZXJlZERhdGUudHJpbSgpO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAkLmRhdGVwaWNrZXIucGFyc2VEYXRlKGRhdGVGb3JtYXQsIGVudGVyZWREYXRlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIERlZmluaXRpb25zXG4gICAgICAgIHZhciBlbnRlcmVkRGl2aWRlcjtcbiAgICAgICAgdmFyIGVudGVyZWRGb3JtYXQ7XG4gICAgICAgIHZhciBlbnRlcmVkRGF0ZUFycmF5O1xuICAgICAgICB2YXIgbW9udGhGb3JtYXQgPSBcIm1tXCI7XG4gICAgICAgIHZhciB5ZWFyRm9ybWF0ID0gXCJ5eVwiO1xuXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgZGl2aWRlciB1c2VkIGluIHRoZSBkYXRhIGVudHJ5IEB2YXIgZW50ZXJlZERpdmlkZXJcbiAgICAgICAgLy8gSXQgbWlnaHQgYmUgLyAuIC0gLCBvciBzcGFjZVxuICAgICAgICB2YXIgc2hvcnRNb250aEVudGVyZWQgPSAkLmRhdGVwaWNrZXIuX2RlZmF1bHRzLm1vbnRoTmFtZXNTaG9ydC5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICByZXR1cm4gZW50ZXJlZERhdGUuaW5jbHVkZXMoaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc2hvcnRNb250aEVudGVyZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbnRlcmVkRGl2aWRlciA9IFtcIi9cIiwgXCIuXCIsIFwiLVwiLCBcIixcIiwgXCIgXCJdLmZpbmQoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGVyZWREYXRlLmluY2x1ZGVzKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE9idGFpbiBkYXRlIHdpdGggbW9udGggYXMgJ00nIChmb3IgdGhlIHNob3J0IG5hbWUpXG4gICAgICAgICAgICBlbnRlcmVkRGl2aWRlciA9IGVudGVyZWREYXRlLmNoYXJBdChlbnRlcmVkRGF0ZS5zZWFyY2goc2hvcnRNb250aEVudGVyZWQpIC0gMSk7ICAvLyBkIE1cbiAgICAgICAgICAgIGlmICghZW50ZXJlZERpdmlkZXIpIHtcbiAgICAgICAgICAgICAgICBlbnRlcmVkRGl2aWRlciA9IGVudGVyZWREYXRlLmNoYXJBdChlbnRlcmVkRGF0ZS5zZWFyY2goc2hvcnRNb250aEVudGVyZWQpICsgc2hvcnRNb250aEVudGVyZWRbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vbnRoRm9ybWF0ID0gXCJNXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeHRyYWN0IHRoZSBkYXRlIHZhbHVlcyBmb3IgZWFjaCBvZiB0aGUgdGhyZWUgY29tcG9uZW50cyAtIGRheSwgbW9udGgsIHllYXJcbiAgICAgICAgaWYgKGVudGVyZWREaXZpZGVyKSB7XG4gICAgICAgICAgICBlbnRlcmVkRGF0ZUFycmF5ID0gZW50ZXJlZERhdGUuc3BsaXQoZW50ZXJlZERpdmlkZXIpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGVudGVyZWREYXRlQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOiAgLy8gYXNzdW1lcyB0aGUgZGF5IGFuZCB0aGUgbW9udGggaGF2ZSBiZWVuIGVudGVyZWRcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkYXRlU3RydWN0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZG15XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuZGF0ZXBpY2tlci5wYXJzZURhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZGQke2RhdGVGb3JtYXREaXZpZGVyfSR7bW9udGhGb3JtYXR9JHtkYXRlRm9ybWF0RGl2aWRlcn15eWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcmVkRGF0ZUFycmF5WzBdICsgZGF0ZUZvcm1hdERpdmlkZXIgKyBlbnRlcmVkRGF0ZUFycmF5WzFdICsgZGF0ZUZvcm1hdERpdmlkZXIgKyBmdWxsWWVhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1keVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkLmRhdGVwaWNrZXIucGFyc2VEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7bW9udGhGb3JtYXR9JHtkYXRlRm9ybWF0RGl2aWRlcn1kZGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcmVkRGF0ZUFycmF5WzBdICsgZGF0ZUZvcm1hdERpdmlkZXIgKyBlbnRlcmVkRGF0ZUFycmF5WzFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwieW1kXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuZGF0ZXBpY2tlci5wYXJzZURhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgeXkke2RhdGVGb3JtYXREaXZpZGVyfSR7bW9udGhGb3JtYXR9JHtkYXRlRm9ybWF0RGl2aWRlcn1kZGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsWWVhciArIGRhdGVGb3JtYXREaXZpZGVyICsgZW50ZXJlZERhdGVBcnJheVswXSArIGRhdGVGb3JtYXREaXZpZGVyICsgZW50ZXJlZERhdGVBcnJheVsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZGF0ZVN0cnVjdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRteVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRlcmVkRGF0ZUFycmF5WzJdLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyRm9ybWF0ID0gXCJ5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkLmRhdGVwaWNrZXIucGFyc2VEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGRkJHtkYXRlRm9ybWF0RGl2aWRlcn0ke21vbnRoRm9ybWF0fSR7ZGF0ZUZvcm1hdERpdmlkZXJ9JHt5ZWFyRm9ybWF0fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcmVkRGF0ZUFycmF5WzBdICsgZGF0ZUZvcm1hdERpdmlkZXIgKyBlbnRlcmVkRGF0ZUFycmF5WzFdICsgZGF0ZUZvcm1hdERpdmlkZXIgKyBlbnRlcmVkRGF0ZUFycmF5WzJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWR5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudGVyZWREYXRlQXJyYXlbMl0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXJGb3JtYXQgPSBcInlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuZGF0ZXBpY2tlci5wYXJzZURhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHttb250aEZvcm1hdH0ke2RhdGVGb3JtYXREaXZpZGVyfWRkJHtkYXRlRm9ybWF0RGl2aWRlcn0ke3llYXJGb3JtYXR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyZWREYXRlQXJyYXlbMF0gKyBkYXRlRm9ybWF0RGl2aWRlciArIGVudGVyZWREYXRlQXJyYXlbMV0gKyBkYXRlRm9ybWF0RGl2aWRlciArIGVudGVyZWREYXRlQXJyYXlbMl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ5bWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50ZXJlZERhdGVBcnJheVswXS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhckZvcm1hdCA9IFwieVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5kYXRlcGlja2VyLnBhcnNlRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3llYXJGb3JtYXR9JHtkYXRlRm9ybWF0RGl2aWRlcn0ke21vbnRoRm9ybWF0fSR7ZGF0ZUZvcm1hdERpdmlkZXJ9ZGRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJlZERhdGVBcnJheVswXSArIGRhdGVGb3JtYXREaXZpZGVyICsgZW50ZXJlZERhdGVBcnJheVsxXSArIGRhdGVGb3JtYXREaXZpZGVyICsgZW50ZXJlZERhdGVBcnJheVsyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgeyAvLyBPbmx5IHRoZSBkYXkgaGFzIGJlZW4gZW50ZXJlZFxuICAgICAgICAgICAgc3dpdGNoIChkYXRlU3RydWN0dXJlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRteVwiOlxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuZGF0ZXBpY2tlci5wYXJzZURhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGRkJHtkYXRlRm9ybWF0RGl2aWRlcn0ke21vbnRoRm9ybWF0fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJlZERhdGUgKyBkYXRlRm9ybWF0RGl2aWRlciArIHRoaXNNb250aFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtZHlcIjpcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkLmRhdGVwaWNrZXIucGFyc2VEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke21vbnRoRm9ybWF0fSR7ZGF0ZUZvcm1hdERpdmlkZXJ9ZGRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNNb250aCArIGRhdGVGb3JtYXREaXZpZGVyICsgZW50ZXJlZERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwieW1kXCI6XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5kYXRlcGlja2VyLnBhcnNlRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgeXkke2RhdGVGb3JtYXREaXZpZGVyfSR7bW9udGhGb3JtYXR9JHtkYXRlRm9ybWF0RGl2aWRlcn1kZGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFllYXIgKyBkYXRlRm9ybWF0RGl2aWRlciArIHRoaXNNb250aCArIGRhdGVGb3JtYXREaXZpZGVyICsgZW50ZXJlZERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kYXRlSW5wdXRGaWVsZFJlYWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=