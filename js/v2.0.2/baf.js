/*
 *
 * Buttons and Forms
 *
 * Repo: https://github.com/SimonWaldherr/buttons-and-forms
 * Demo: http://simonwaldherr.github.com/buttons-and-forms/demo/
 * Editor: http://simonwaldherr.github.com/buttons-and-forms/editor/
 * License: MIT
 * Version: 2.0.1
 *
 */
/*jslint browser: true, indent: 2 */
/*global fdSlider */
/*exported baf_plusone, baf_minusone, baf_changeValues, baf_changeloadingmode, baf_listenerInit, baf_age, baf_date, baf_email, baf_password, baf_repeat, baf_cleartext, baf_clearfloat */

function $id(id) {
  'use strict';
  return document.getElementById(id);
}

var baf_keepCalling = true;

function baf_plusone(id, wait, min, slider) {
  'use strict';
  if (baf_keepCalling && (Math.round($id(id).max) > $id(id).value)) {
    $id(id).value = parseInt($id(id).value, 10) + 1;
    if (wait > min) {
      wait = wait - 30;
    }
    if (wait < min) {
      wait = min;
    }
    if (slider === 1) {
      fdSlider.updateSlider(id);
    }
    window.setTimeout(baf_plusone, wait, id, wait, min, slider);
  }
}

function baf_minusone(id, wait, min, slider) {
  'use strict';
  if (baf_keepCalling && ($id(id).value > Math.round($id(id).min))) {
    $id(id).value = parseInt($id(id).value, 10) - 1;
    if (wait > min) {
      wait = wait - 30;
    }
    if (wait < min) {
      wait = min;
    }
    if (slider === 1) {
      fdSlider.updateSlider(id);
    }
    window.setTimeout(baf_minusone, wait, id, wait, min, slider);
  }
}

function baf_changeValues(element) {
  'use strict';
  if (element !== '[object HTMLInputElement]') {
    element = $id(element);
  }
  var kc = window.event.keyCode;
  if (((kc === 37) || (kc === 40) || (kc === 109)) && (element.value > (Math.round(element.min)))) {
    //left||down||minus -
    element.value = Math.round(element.value) - 1;
    return false;
  }
  if (((kc === 38) || (kc === 39) || (kc === 107)) && ((Math.round(element.max)) > element.value)) {
    //up||right||plus +
    element.value = Math.round(element.value) + 1;
    return false;
  }
  if ((kc === 34) && (element.value > (Math.round(element.min)))) {
    //page down -
    element.value = Math.round(element.value) - 10;
    return false;
  }
  if ((kc === 33) && ((Math.round(element.max)) > element.value)) {
    //page up +
    element.value = Math.round(element.value) + 10;
    return false;
  }
  return true;
}

function baf_changeloadingmode(element) {
  'use strict';
  if (element.disabled !== true) {
    if (element.className.search('loading') !== -1) {
      element.className = element.className.replace(' loading', '');
    } else {
      element.className = element.className + ' loading';
      return true;
    }
  }
}

function baf_dgeb(name, type) {
  'use strict';
  if (type === 'name') {
    if (!document.getElementsByTagName(name)) {
      return false;
    }
    return document.getElementsByTagName(name);
  }
  if (!$id(name)) {
    return false;
  }
  return $id(name);
}

function baf_colorize(data, output) {
  'use strict';
  var boxcolor, element;
  if ((typeof data !== 'number') && (data !== false) && (data !== true)) {
    data = parseInt(data, 10);
  }
  if (typeof data === 'number') {
    if ((data < 115) && (data > 1)) {
      boxcolor = 'rgb(255,' + (153 + data) + ',' + (153 - data) + ')';
      baf_dgeb(output, 'id').style.background = boxcolor;
      return true;
    }
    if ((data > 115) && (data < 230)) {
      data = data - 115;
      boxcolor = 'rgb(' + (255 - data) + ',243,63)';
      baf_dgeb(output, 'id').style.background = boxcolor;
      return true;
    }
    if (data > 230) {
      boxcolor = 'rgb(145,243,63)';
      baf_dgeb(output, 'id').style.background = boxcolor;
      return true;
    }
  }
  if (data === 'none') {
    baf_dgeb(output, 'id').style.background = 'rgb(204,204,204)';
    return false;
  }
  if (data === true) {
    element = baf_dgeb(output, 'id');
    if (typeof element === 'object') {
      element.style.background = 'rgb(145,243,63)';
      return true;
    }
    return false;
  }
  element = baf_dgeb(output, 'id');
  if (typeof element === 'object') {
    element.style.background = 'rgb(255,153,153)';
    return true;
  }
  return false;
}

function baf_converttxt(text) {
  'use strict';
  var textarray = text.split(""),
    textoutput = "",
    i;
  for (i = 0; i < textarray.length; i += 1) {
    if ((textarray[i].charCodeAt(0) > 47) && (textarray[i].charCodeAt(0) < 59)) {
      textoutput = textoutput + textarray[i]; //0-9, :
    }
    if ((textarray[i].charCodeAt(0) > 62) && (textarray[i].charCodeAt(0) < 91)) {
      textoutput = textoutput + textarray[i]; //A-Z
    }
    if ((textarray[i].charCodeAt(0) > 96) && (textarray[i].charCodeAt(0) < 123)) {
      textoutput = textoutput + textarray[i]; //a-z
    }
    if ((((textarray[i].charCodeAt(0) > 34) && (textarray[i].charCodeAt(0) < 47)) || (textarray[i].charCodeAt(0) === 61) || (textarray[i].charCodeAt(0) === 33)) && (textarray[i].charCodeAt(0) !== 39)) {
      textoutput = textoutput + textarray[i]; //#$%&()*+,-.=!
    }
  }
  return textoutput;
}

function baf_convertnumber(text) {
  'use strict';
  var textarray = text.split(""),
    textoutput = "",
    dots = 0,
    i;
  for (i = 0; i < textarray.length; i += 1) {
    if ((textarray[i].charCodeAt(0) > 47) && (textarray[i].charCodeAt(0) < 59)) {
      textoutput = textoutput + textarray[i]; //0-9, :
    }
    if (((textarray[i].charCodeAt(0) === 46) || (textarray[i].charCodeAt(0) === 44)) && (dots === 0)) {
      textoutput = textoutput + '.'; //#$%&()*+,-.=!
      dots = 1;
    }
  }
  return textoutput;
}

function baf_number(innumber, rule, output) {
  'use strict';
  var checkf = 0,
    checks = 0,
    number = parseInt(innumber, 10),
    rulenumbers = rule.split("-");

  if ((number >= rulenumbers[0]) || (rulenumbers[0] === 'x')) {
    checkf = 1;
  }
  if ((number <= rulenumbers[1]) || (rulenumbers[1] === 'x')) {
    checks = 1;
  }
  if (isNaN(innumber)) {
    checkf = 0;
  }

  if ((checkf === 1) && (checks === 1)) {
    baf_colorize(true, output);
    return true;
  }
  baf_colorize(false, output);
  return false;
}

function baf_age(dateid, notation, rule, output) {
  'use strict';
  var date = baf_dgeb(dateid, 'id').value,
    splited = "",
    day = 0,
    month = 0,
    year = 0,
    schaltjahr,
    error,
    now,
    nowts,
    indate,
    timestamp;

  switch (notation) {
  case "dd.mm.yyyy":
    splited = date.split(".");
    day = splited[0];
    month = splited[1];
    year = splited[2];
    break;
  case "yyyy.mm.dd":
    splited = date.split(".");
    day = splited[2];
    month = splited[1];
    year = splited[0];
    break;
  case "mm/dd/yyyy":
    splited = date.split("/");
    day = splited[1];
    month = splited[0];
    year = splited[2];
    break;
  default:
    break;
  }

  schaltjahr = 0;
  if (((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0)))) {
    schaltjahr = 1;
  }

  error = 0;
  if ((day < 1) || (day > 31) || (month < 1) || (month > 12)) {
    error = 1;
  }
  if (((month === 4) || (month === 6) || (month === 9) || (month === 11)) && (day > 30)) {
    error = 1;
  }
  if (month === 2) {
    if ((schaltjahr === 1) && (day > 29)) {
      error = 1;
    } else if ((schaltjahr === 0) && (day > 28)) {
      error = 1;
    }
  }

  now = new Date();
  nowts = now.getTime() / 31556952000;
  indate = new Date(year, month, day, 1, 0, 0);
  timestamp = indate.getTime() / 31556952000;

  if ((year < 1000) || (year > now.getFullYear())) {
    error = 1;
  }

  if ((isNaN(timestamp)) || (error === 1)) {
    baf_colorize(false, output);
    return false;
  }
  baf_number(nowts - timestamp, rule, output);
  return true;
}

function baf_date(dateid, notation, output) {
  'use strict';
  var date = baf_dgeb(dateid, 'id').value,
    splited = "",
    day = 0,
    month = 0,
    year = 0,
    schaltjahr,
    error,
    indate,
    timestamp;

  switch (notation) {
  case "dd.mm.yyyy":
    splited = date.split(".");
    day = splited[0];
    month = splited[1];
    year = splited[2];
    break;
  case "yyyy.mm.dd":
    splited = date.split(".");
    day = splited[2];
    month = splited[1];
    year = splited[0];
    break;
  case "mm/dd/yyyy":
    splited = date.split("/");
    day = splited[1];
    month = splited[0];
    year = splited[2];
    break;
  default:
    break;
  }

  schaltjahr = 0;
  if (((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0)))) {
    schaltjahr = 1;
  }

  error = 0;
  if ((day < 1) || (day > 31) || (month < 1) || (month > 12)) {
    error = 1;
  }
  if (((month === 4) || (month === 6) || (month === 9) || (month === 11)) && (day > 30)) {
    error = 1;
  }
  if (month === 2) {
    if ((schaltjahr === 1) && (day > 29)) {
      error = 1;
    } else if ((schaltjahr === 0) && (day > 28)) {
      error = 1;
    }
  }

  indate = new Date(year, month, day, 1, 0, 0);
  timestamp = indate.getTime() / 1000;

  if ((isNaN(timestamp)) || (error === 1)) {
    baf_colorize(false, output);
    return false;
  }
  baf_colorize(true, output);
  return true;
}

function baf_email(email, output) {
  'use strict';
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,7})$/,
    checkedmail;
  checkedmail = reg.test(email);
  if (checkedmail === false) {
    baf_colorize(false, output);
    return false;
  }
  baf_colorize(true, output);
  return true;
}

function baf_password(password, output) {
  'use strict';
  var valunicode, keys = password.split(""),
    numbers = 1,
    uletter = 1,
    lletter = 1,
    special = 1,
    complex = 0,
    i;
  for (i = 0; i < keys.length; i += 1) {
    valunicode = keys[i].charCodeAt(0);
    if ((valunicode > 0x40) && (valunicode < 0x5B)) {
      //Großbuchstaben A-Z
      uletter += 1;
    } else if ((valunicode > 0x60) && (valunicode < 0x7B)) {
      //Kleinbuchstaben a-z
      lletter += 1;
    } else if ((valunicode > 0x2F) && (valunicode < 0x3A)) {
      //Zahlen 0-9
      numbers += 1;
    } else if ((valunicode > 0x20) && (valunicode < 0x7F)) {
      //Sonderzeichen
      special += 1;
    }
  }
  complex = ((uletter * lletter * numbers * special) + Math.round(uletter * 1.8 + lletter * 1.5 + numbers + special * 2)) - 6;
  baf_colorize(complex, output);
  return complex;
}

function baf_repeat(idone, idtwo, output) {
  'use strict';
  if (baf_dgeb(idone, 'id').value !== baf_dgeb(idtwo, 'id').value) {
    baf_colorize(false, output);
    return false;
  }
  baf_colorize(true, output);
  return true;
}

function baf_cleartext(text, output) {
  'use strict';
  var textoutput = baf_converttxt(text);
  baf_dgeb(output, 'id').value = textoutput;
}

function baf_clearfloat(text, output) {
  'use strict';
  var textoutput = baf_convertnumber(text);
  baf_dgeb(output, 'id').value = textoutput;
}

var baf_dd_status = false;

function baf_dropdownclose() {
  'use strict';
  if (baf_dd_status === false) {
    return false;
  }
  var i, classn, bafele = [];
  bafele.dd = document.getElementsByTagName('*');
  for (i = 0; i < bafele.dd.length; i += 1) {
    classn = bafele.dd[i].className;
    if ((typeof classn === 'string')) {
      if (classn.length > 3) {
        if (classn.indexOf("dropdown-toggle") !== -1) {
          if (bafele.dd[i].offsetParent.className.search("open") !== -1) {
            bafele.dd[i].offsetParent.className = bafele.dd[i].offsetParent.className.replace('open', '');
          }
        }
      }
    }
  }
  baf_dd_status = false;
}

function baf_eventddclose() {
  'use strict';
  window.onclick = function () {
    baf_dropdownclose();
  };
}

var baf_dropdown = function (e) {
  'use strict';
  baf_eventddclose();
  e = e || window.event;
  window.setTimeout(function () {
    var target;
    if(e !== undefined) {
      target = e.target || e.srcElement;
      target.offsetParent.className  +=  " open";
      baf_dd_status = true;
    }
  }, 10, this);
};

function baf_listenerInit() {
  'use strict';
  var classn, maxvalue, minvalue, bafele, rangeSlider, i;
  bafele = [];
  rangeSlider = [];
  bafele.dd = document.getElementsByTagName('*');
  for (i = 0; i < bafele.dd.length; i += 1) {
    classn = bafele.dd[i].className;
    if ((typeof classn === 'string')) {
      if (classn.length > 3) {
        if (classn.search("dropdown-toggle") !== -1) {
          if (bafele.dd[i].addEventListener){
            bafele.dd[i].addEventListener("click", baf_dropdown, false);
          } else if (el.attachEvent){
            bafele.dd[i].attachEvent('onclick', baf_dropdown);
          }
        }
        if ((classn.search("range-slider") !== -1) && (bafele.dd[i].tagName.toLowerCase() === 'input')) {
          rangeSlider[i] = bafele.dd[i].id;
        }
      }
    }
  }
  for (i = 0; i < rangeSlider.length; i += 1) {
    if (rangeSlider[i] !== undefined) {
      if (typeof Math.round($id(rangeSlider[i]).getAttribute("max")) !== 'number') {
        maxvalue = 100;
      } else {
        maxvalue = Math.round($id(rangeSlider[i]).getAttribute("max"));
      }
      if (typeof Math.round($id(rangeSlider[i]).getAttribute("min")) !== 'number') {
        minvalue = 0;
      } else {
        minvalue = Math.round($id(rangeSlider[i]).getAttribute("min"));
      }
      fdSlider.createSlider({
        inp: $id(rangeSlider[i]),
        step: 1,
        maxStep: 1,
        min: minvalue,
        max: maxvalue,
        animation: "tween",
        forceValue: true
      });
    }
  }
}
