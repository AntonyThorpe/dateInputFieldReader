# Date Input Field Reader for jQuery UI Datepicker
Sneaky shortcuts for date input field data entry with jQuery UI datepicker in any locale.  Provides a better UX by allowing the user to select either the input field or the datepicker.

## Usage
The user can enter:
* `23`
* `23/1`
* `23 1`
* `23-1`
* `23.1`
* `23 Jan`
* or `23/1/18`(short year length)
to generate `Wed Jan 03 2018 00:00:00 GMT+1300 (NZDT)` date string.

If you are from a funny country that places the month first then this will work too:
* `1/23`
* `1 23`
* `1-23`
* `1.23`
* `Jan 23`

Also with year-first regions like Korea.
* `18 Jan 23`

## Installation
```javascript
npm install dateinputfieldreader
```

## How to use
* ensure that jQuery UI Datepicker is loaded first
* import the function:
```javascript
import extractDateFromInput from "dateinputfieldreader";
```
and within the change event of the datepicker run the data entry through this function.  Below is some `knockoutjs` code you can modify:
```javascript
//handle the field changing update observable and excluded dates for beforeShowDay
ko.utils.registerEventHandler(element, "change", function(event) {
    var enteredDate = (event.target.value).trim();
    var extractedDate = extractDateFromInput(enteredDate);

    if (extractedDate){
        // next update the variable
        observable(extractedDate);

        // and update the datepicker
        $(element).datepicker("setDate", extractedDate);
    }
});
```

## Requirements
* [jQuery UI Datepicker](https://jqueryui.com/datepicker/)

## Tests
Run online [here](http://antonythorpe.github.io/dateInputFieldReader/index.html).
Locally `npm test` to launch in Chrome.

## Contributions
Pull requests are most welcome!

## Support
None sorry.

## Change Log
[File](changelog.md)

## Licence
[MIT](LICENCE)
