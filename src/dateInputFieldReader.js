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
if (dateFormatLastCharacter === ".") {  // for Hungarian
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
switch (dateFormat.substr(2,2)) {
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
export default function(enteredDate) {
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
        var shortMonthEntered = $.datepicker._defaults.monthNamesShort.filter(function(item){
            return enteredDate.includes(item);
        });

        if (!shortMonthEntered.length) {
            enteredDivider = ["/", ".", "-", ",", " "].find(function(item){
                return enteredDate.includes(item);
            });

        } else {
            // Obtain date with month as 'M' (for the short name)
            enteredDivider = enteredDate.charAt(enteredDate.search(shortMonthEntered) - 1);  // d M
            if (!enteredDivider) {
                enteredDivider = enteredDate.charAt(enteredDate.search(shortMonthEntered) + shortMonthEntered[0].length);
            }
            monthFormat = "M";
        }

        // Extract the date values for each of the three components - day, month, year
        if (enteredDivider) {
            enteredDateArray = enteredDate.split(enteredDivider);

            switch (enteredDateArray.length) {
                case 2:  // assumes the day and the month have been entered
                    switch (dateStructure) {
                        case "dmy":
                            try {
                                return $.datepicker.parseDate(
                                    `dd${dateFormatDivider}${monthFormat}${dateFormatDivider}yy`,
                                    enteredDateArray[0] + dateFormatDivider + enteredDateArray[1] + dateFormatDivider + fullYear
                                );
                            } catch (e) {
                                console.error(e);
                                return null;
                            }
                            break;
                        case "mdy":
                            try {
                                return $.datepicker.parseDate(
                                    `${monthFormat}${dateFormatDivider}dd`,
                                    enteredDateArray[0] + dateFormatDivider + enteredDateArray[1]
                                );
                            } catch (e) {
                                console.error(e);
                                return null;
                            }
                            break;
                        case "ymd":
                            try {
                                return $.datepicker.parseDate(
                                    `yy${dateFormatDivider}${monthFormat}${dateFormatDivider}dd`,
                                    fullYear + dateFormatDivider + enteredDateArray[0] + dateFormatDivider + enteredDateArray[1]
                                );
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
                                return $.datepicker.parseDate(
                                    `dd${dateFormatDivider}${monthFormat}${dateFormatDivider}${yearFormat}`,
                                    enteredDateArray[0] + dateFormatDivider + enteredDateArray[1] + dateFormatDivider + enteredDateArray[2]
                                );
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
                                return $.datepicker.parseDate(
                                    `${monthFormat}${dateFormatDivider}dd${dateFormatDivider}${yearFormat}`,
                                    enteredDateArray[0] + dateFormatDivider + enteredDateArray[1] + dateFormatDivider + enteredDateArray[2]
                                );
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
                                return $.datepicker.parseDate(
                                    `${yearFormat}${dateFormatDivider}${monthFormat}${dateFormatDivider}dd`,
                                    enteredDateArray[0] + dateFormatDivider + enteredDateArray[1] + dateFormatDivider + enteredDateArray[2]
                                );
                            } catch (e) {
                                console.error(e);
                                return null;
                            }
                            break;
                        };
                    break;
            };
        } else { // Only the day has been entered
            switch (dateStructure) {
                case "dmy":
                    try {
                        return $.datepicker.parseDate(
                            `dd${dateFormatDivider}${monthFormat}`,
                            enteredDate + dateFormatDivider + thisMonth
                        );
                    } catch (e) {
                        console.error(e);
                        return null;
                    }
                    break;
                case "mdy":
                    try {
                        return $.datepicker.parseDate(
                            `${monthFormat}${dateFormatDivider}dd`,
                            thisMonth + dateFormatDivider + enteredDate
                        );
                    } catch (e) {
                        console.error(e);
                        return null;
                    }
                    break;
                case "ymd":
                    try {
                        return $.datepicker.parseDate(
                            `yy${dateFormatDivider}${monthFormat}${dateFormatDivider}dd`,
                            fullYear + dateFormatDivider + thisMonth + dateFormatDivider + enteredDate
                        );
                    } catch (e) {
                        console.error(e);
                        return null;
                    }
            };
        }

    }
    return null;
};
