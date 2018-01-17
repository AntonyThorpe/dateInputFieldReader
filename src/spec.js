import extractDateFromInput from "./dateInputFieldReader";

var today = new Date();
var fullYear = today.getFullYear();
var thisMonth = today.getMonth() + 1;
var dateFormat = $.datepicker._defaults.dateFormat;

if (
    dateFormat === "dd/mm/yy" ||
    dateFormat === "dd.mm.yy" ||
    dateFormat === "dd-mm-yy" ||
    dateFormat === "d.m.yy"
) {
    describe(`#${dateFormat} - Day only`, function() {
        it("Only d entered", function() {
            var result = extractDateFromInput("3");
            var same = moment(result).isSame(moment(fullYear + "-" + thisMonth + "-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("Only dd entered", function() {
            var result = extractDateFromInput("15");
            var same = moment(result).isSame(moment(fullYear + "-" + thisMonth + "-15", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Day & Month only`, function() {
        it("dd/mm entered", function() {
            var result = extractDateFromInput("03/05");
            var same = moment(result).isSame(moment(fullYear + "-05-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("d/m entered", function() {
            var result = extractDateFromInput("3/5");
            var same = moment(result).isSame(moment(fullYear + "-05-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("d/mm entered", function() {
            var result = extractDateFromInput("4/12");
            var same = moment(result).isSame(moment(fullYear + "-12-04", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("dd/m entered", function() {
            var result = extractDateFromInput("18/4");
            var same = moment(result).isSame(moment(fullYear + "-04-18", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Day, Month, and a two digit year`, function() {
        it("dd/mm/y entered", function() {
            var result = extractDateFromInput("03/05/22");
            var same = moment(result).isSame(moment("2022-05-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    if ($.datepicker._defaults.monthNamesShort[4] === "May") {
        describe(`#${dateFormat} - Short month name`, function() {
            it("dd/M entered", function() {
                var result = extractDateFromInput("13 May");
                var same = moment(result).isSame(moment(fullYear + "-05-13", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("d/M entered", function() {
                var result = extractDateFromInput("3 May");
                var same = moment(result).isSame(moment(fullYear + "-05-03", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("d/M entered", function() {
                var result = extractDateFromInput("4 Dec");
                var same = moment(result).isSame(moment(fullYear + "-12-04", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("dd/M entered", function() {
                var result = extractDateFromInput("18 Apr");
                var same = moment(result).isSame(moment(fullYear + "-04-18", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("dd/M/y entered", function() {
                var result = extractDateFromInput("18 Apr 24");
                var same = moment(result).isSame(moment("2024-04-18", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("dd/M/yy entered", function() {
                var result = extractDateFromInput("18 Apr 2024");
                var same = moment(result).isSame(moment("2024-04-18", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });
        });
    }

    describe("Enter rubbish", function(){
        it("Entered text", function(){
            var result = extractDateFromInput("Sometext");
            console.log(result);
            expect(result).toBe(null);
        });
    });
}

if (
    dateFormat === "yy-mm-dd" ||
    dateFormat === "yy/mm/dd" ||
    dateFormat === "yy.mm.dd." ||
    dateFormat === "yy. m. d."
) {
    describe(`#${dateFormat} - Day only`, function() {
        it("Only d entered", function() {
            var result = extractDateFromInput("3");
            var same = moment(result).isSame(moment(fullYear + "-" + thisMonth + "-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("Only dd entered", function() {
            var result = extractDateFromInput("15");
            var same = moment(result).isSame(moment(fullYear + "-" + thisMonth + "-15", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Month and Day only`, function() {
        it("mm/dd entered", function() {
            var result = extractDateFromInput("11/17");
            var same = moment(result).isSame(moment(fullYear + "-11-17", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("m/d entered", function() {
            var result = extractDateFromInput("3/5");
            var same = moment(result).isSame(moment(fullYear + "-03-05", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("mm/d entered", function() {
            var result = extractDateFromInput("12/4");
            var same = moment(result).isSame(moment(fullYear + "-12-04", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("m/dd entered", function() {
            var result = extractDateFromInput("5/24");
            var same = moment(result).isSame(moment(fullYear + "-05-24", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Two digit year, Month & Day`, function() {
        it("y/mm/dd entered", function() {
            var result = extractDateFromInput("22-12-3");
            var same = moment(result).isSame(moment("2022-12-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    // tested against 'eu'
    if ($.datepicker._defaults.monthNamesShort[4] === "mai.") {
        describe(`#${dateFormat} - Short month name`, function() {
            it("M/dd entered", function() {
                var result = extractDateFromInput("mai. 13");
                var same = moment(result).isSame(moment(fullYear + "-05-13", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("M/d entered", function() {
                var result = extractDateFromInput("mai. 3");
                var same = moment(result).isSame(moment(fullYear + "-05-03", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("M/d entered", function() {
                var result = extractDateFromInput("mai. 4");
                var same = moment(result).isSame(moment(fullYear + "-05-04", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("M/dd entered", function() {
                var result = extractDateFromInput("mai. 18");
                var same = moment(result).isSame(moment(fullYear + "-05-18", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("y/M/dd entered", function() {
                var result = extractDateFromInput("24 mai. 18");
                var same = moment(result).isSame(moment("2024-05-18", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });

            it("yy/M/dd entered", function() {
                var result = extractDateFromInput("2024 mai. 18");
                var same = moment(result).isSame(moment("2024-05-18", "YYYY-MM-DD"));
                expect(same).toBe(true);
            });
        });
    }
}

if (dateFormat === "mm/dd/yy") {
    describe(`#${dateFormat} - Day only`, function() {
        it("Only d entered", function() {
            var result = extractDateFromInput("3");
            var same = moment(result).isSame(moment(fullYear + "-" + thisMonth + "-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("Only dd entered", function() {
            var result = extractDateFromInput("15");
            var same = moment(result).isSame(moment(fullYear + "-" + thisMonth + "-15", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Month and Day only`, function() {
        it("mm/dd entered", function() {
            var result = extractDateFromInput("11/17");
            var same = moment(result).isSame(moment(fullYear + "-11-17", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("m/d entered", function() {
            var result = extractDateFromInput("3/5");
            var same = moment(result).isSame(moment(fullYear + "-03-05", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("mm/d entered", function() {
            var result = extractDateFromInput("12/4");
            var same = moment(result).isSame(moment(fullYear + "-12-04", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("m/dd entered", function() {
            var result = extractDateFromInput("5/24");
            var same = moment(result).isSame(moment(fullYear + "-05-24", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Two digit year, Month & Day`, function() {
        it("y/mm/dd entered", function() {
            var result = extractDateFromInput("12-3-22");
            var same = moment(result).isSame(moment("2022-12-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });

    describe(`#${dateFormat} - Short month name`, function() {
        it("M/dd entered", function() {
            var result = extractDateFromInput("May 13");
            var same = moment(result).isSame(moment(fullYear + "-05-13", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("M/d entered", function() {
            var result = extractDateFromInput("May 3");
            var same = moment(result).isSame(moment(fullYear + "-05-03", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("M/d entered", function() {
            var result = extractDateFromInput("May 4");
            var same = moment(result).isSame(moment(fullYear + "-05-04", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("M/dd entered", function() {
            var result = extractDateFromInput("May 18");
            var same = moment(result).isSame(moment(fullYear + "-05-18", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("M/dd/y entered", function() {
            var result = extractDateFromInput("May 18 24");
            console.log(result);
            var same = moment(result).isSame(moment("2024-05-18", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });

        it("M/dd/yy entered", function() {
            var result = extractDateFromInput("May 18 2024");
            var same = moment(result).isSame(moment("2024-05-18", "YYYY-MM-DD"));
            expect(same).toBe(true);
        });
    });
}
