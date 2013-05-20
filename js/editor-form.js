/*
 *
 * Buttons and Forms
 *
 * Repo: https://github.com/SimonWaldherr/buttons-and-forms
 * Demo: http://simonwaldherr.github.com/buttons-and-forms/demo/
 * Editor: http://simonwaldherr.github.com/buttons-and-forms/editor/
 * License: MIT
 * Version: 2.0
 *
 */

function addListElement(type) {
  var listcount = (Math.round($id("buttonscount").value) + 1);
  $id("buttonscount").value = listcount;
  //var code = '<ol><li>';
  var code = '<div id="lidiv' + listcount + '"><a onclick="$id(\'liele' + listcount + '\').value = \'hidden\'; $id(\'lidiv' + listcount + '\').style.display = \'none\'; generateForm();" class="baf red del"><span class="baf-icomoon big" aria-hidden="true" data-icon="&#xe099;"></span></a><b>' + type + '</b><div class="hideme"><input type="text" id="liele' + listcount + '" value="' + type + '" /></div>';
  switch (type) {
  case 'text':
    //Sort
    code += '<label for="sort' + listcount + '">Sort </label><input class="sort" name="sort' + listcount + '" id="sort' + listcount + '" type="number" placeholder="" value="' + listcount + '" onchange="javascript:generateForm();" />';
    //Text
    code += '<label for="text' + listcount + '">text</label><input name="text' + listcount + '" id="text' + listcount + '" type="text" placeholder="" onkeyup="javascript:generateForm();" />';
    //Color
    code += '<label for="color' + listcount + '">color</label><select name="color' + listcount + '" id="color' + listcount + '" size="1" onchange="javascript:generateForm();"><option>grey</option><option>black</option><option>cyan</option><option>blue</option><option>green</option><option>yellow</option><option>red</option></select>';
    //size
    code += '<label for="size' + listcount + '">size</label><select name="size' + listcount + '" id="size' + listcount + '" size="1" onchange="javascript:generateForm();"><option>auto</option><option>60px</option><option>90px</option><option>120px</option><option>190px</option><option>240px</option></select>';
    //Img
    code += '<span>Image </span> <input id="iconid' + listcount + '" class="hideme" style="display:none;" name="img' + listcount + '" type="text"><a onclick="selectIcomoonIcon(' + listcount + ')" class="baf grey">change icon</a> ';
    //ImageSize
    code += '<label for="imgsize' + listcount + '">Imagesize</label><select name="imgsize' + listcount + '" id="imgsize' + listcount + '" size="1" onchange="javascript:generateForm();"><option>normal</option><option>big</option><option>bigger</option></select>';
    //Max Length
    code += '<label for="max' + listcount + '">max length</label><input name="max' + listcount + '" id="max' + listcount + '" type="number" placeholder="" onchange="javascript:generateForm();" />';
    //AutoClean
    code += '<span>Clean</span><input id="ac' + listcount + '" type="checkbox" onchange="javascript:generateForm();" />';
    break;
  case 'password':
    //Sort
    code += '<label for="sort' + listcount + '">Sort </label><input class="sort" name="sort' + listcount + '" id="sort' + listcount + '" type="number" placeholder="" value="' + listcount + '" onchange="javascript:generateForm();" />';
    //Text
    code += '<label for="text' + listcount + '">text</label><input name="text' + listcount + '" id="text' + listcount + '" type="text" placeholder="" onkeyup="javascript:generateForm();" />';
    //Color
    code += '<label for="color' + listcount + '">color</label><select name="color' + listcount + '" id="color' + listcount + '" size="1" onchange="javascript:generateForm();"><option>grey</option><option>black</option><option>cyan</option><option>blue</option><option>green</option><option>yellow</option><option>red</option></select>';
    //size
    code += '<label for="size' + listcount + '">size</label><select name="size' + listcount + '" id="size' + listcount + '" size="1" onchange="javascript:generateForm();"><option>auto</option><option>60px</option><option>90px</option><option>120px</option><option>190px</option><option>240px</option></select>';
    //Img
    code += '<span>Image </span> <input id="iconid' + listcount + '" class="hideme" style="display:none;" name="img' + listcount + '" type="text"><a onclick="selectIcomoonIcon(' + listcount + ')" class="baf grey">change icon</a> ';
    //ImageSize
    code += '<label for="imgsize' + listcount + '">Imagesize</label><select name="imgsize' + listcount + '" id="imgsize' + listcount + '" size="1" onchange="javascript:generateForm();"><option>normal</option><option>big</option><option>bigger</option></select>';
    //SecurityValue
    code += '<span>Show security </span><input id="sv' + listcount + '" type="checkbox" onchange="javascript:generateForm();" />';
    break;
  case 'number':
    //Sort
    code += '<label for="sort' + listcount + '">Sort </label><input class="sort" name="sort' + listcount + '" id="sort' + listcount + '" type="number" placeholder="" value="' + listcount + '" onchange="javascript:generateForm();" />';
    //Text
    code += '<label for="text' + listcount + '">text</label><input name="text' + listcount + '" id="text' + listcount + '" type="text" placeholder="" onkeyup="javascript:generateForm();" />';
    //Color
    code += '<label for="color' + listcount + '">color</label><select name="color' + listcount + '" id="color' + listcount + '" size="1" onchange="javascript:generateForm();"><option>grey</option><option>black</option><option>cyan</option><option>blue</option><option>green</option><option>yellow</option><option>red</option></select>';
    //size
    code += '<label for="size' + listcount + '">size</label><select name="size' + listcount + '" id="size' + listcount + '" size="1" onchange="javascript:generateForm();"><option>auto</option><option>60px</option><option>90px</option><option>120px</option><option>190px</option><option>240px</option></select>';
    //Img
    code += '<span>Image </span> <input id="iconid' + listcount + '" class="hideme" style="display:none;" name="img' + listcount + '" type="text"><a onclick="selectIcomoonIcon(' + listcount + ')" class="baf grey">change icon</a> ';
    //ImageSize
    code += '<label for="imgsize' + listcount + '">Imagesize</label><select name="imgsize' + listcount + '" id="imgsize' + listcount + '" size="1" onchange="javascript:generateForm();"><option>normal</option><option>big</option><option>bigger</option></select>';
    //InputType
    code += '<label for="inputtype' + listcount + '">Inputtype</label><select name="inputtype' + listcount + '" id="inputtype' + listcount + '" size="1" onchange="javascript:generateForm();"><option>number</option><option>range</option></select>';
    //Max Value
    code += '<label for="max' + listcount + '">max value</label><input name="max' + listcount + '" id="max' + listcount + '" type="number" value="100" placeholder="" onchange="javascript:generateForm();" />';
    //Min Value
    code += '<label for="min' + listcount + '">min value</label><input name="min' + listcount + '" id="min' + listcount + '" type="number" value="0" placeholder="" onchange="javascript:generateForm();" />';
    break;
  case 'email':
    //Sort
    code += '<label for="sort' + listcount + '">Sort </label><input class="sort" name="sort' + listcount + '" id="sort' + listcount + '" type="number" placeholder="" value="' + listcount + '" onchange="javascript:generateForm();" />';
    //Text
    code += '<label for="text' + listcount + '">text</label><input name="text' + listcount + '" id="text' + listcount + '" type="text" placeholder="" onkeyup="javascript:generateForm();" />';
    //Color
    code += '<label for="color' + listcount + '">color</label><select name="color' + listcount + '" id="color' + listcount + '" size="1" onchange="javascript:generateForm();"><option>grey</option><option>black</option><option>cyan</option><option>blue</option><option>green</option><option>yellow</option><option>red</option></select>';
    //size
    code += '<label for="size' + listcount + '">size</label><select name="size' + listcount + '" id="size' + listcount + '" size="1" onchange="javascript:generateForm();"><option>auto</option><option>60px</option><option>90px</option><option>120px</option><option>190px</option><option>240px</option></select>';
    //Img
    code += '<span>Image </span> <input id="iconid' + listcount + '" class="hideme" style="display:none;" name="img' + listcount + '" type="text"><a onclick="selectIcomoonIcon(' + listcount + ')" class="baf grey">change icon</a> ';
    //ImageSize
    code += '<label for="imgsize' + listcount + '">Imagesize</label><select name="imgsize' + listcount + '" id="imgsize' + listcount + '" size="1" onchange="javascript:generateForm();"><option>normal</option><option>big</option><option>bigger</option></select>';
    //validate
    code += '<span>validate </span><input id="ev' + listcount + '" type="checkbox" checked="checked" onchange="javascript:generateForm();" />';
    break;
  }
  code += '</div>';
  var node = document.createElement("li");
  node.innerHTML = code;
  $id("list").appendChild(node);

  generateForm();
}

function generateForm() {
  var text, color, size, img, imgsize, maxlength, minlength, autoclean, security, inputtype, maxvalue, minvalue, validate;

  var i = 1;
  var listcount = (Math.round($id("buttonscount").value) + 1);
  var FormCode = new Array();
  var group = '';
  var intquart = new Array();

  while (i < listcount) {
    group = $id('sort' + i).value;
    text = $id('text' + i).value;
    color = $id('color' + i).value;
    img = $id('iconid' + i).value;
    imgsize = $id('imgsize' + i).value;

    if ((text.trim() === '')&&(img.trim() === '')&&($id('liele' + i).value !== 'number')) {
      text = '&nbsp;';
    }

    switch ($id('size' + i).value) {
    case 'auto':
      size = '';
      break;
    case '60px':
      size = ' w60';
      break;
    case '90px':
      size = ' w90';
      break;
    case '120px':
      size = ' w120';
      break;
    case '190px':
      size = ' w190';
      break;
    case '240px':
      size = ' w240';
      break;
    }

    if ((img != '') && (text != '')) {
      img = '<span class="baf-icomoon ' + imgsize + '" aria-hidden="true" data-icon="&#xe' + img + ';">&nbsp;</span> '
    } else if (img != '') {
      img = '<span class="baf-icomoon ' + imgsize + '" aria-hidden="true" data-icon="&#xe' + img + ';"></span> '
    }

    if (FormCode[group] == undefined) {
      FormCode[group] = '';
    }

    switch ($id('liele' + i).value) {
    case 'text':
      maxlength = $id('max' + i).value;
      autoclean = '';
      if ($id('ac' + i).checked) {
        autoclean = ' onkeyup="this.value = baf_converttxt(this.value)"';
      }


      FormCode[group] = '<label class="baf ' + color + size + ' add-on" for="text-' + text + group + '" id="label-' + text + group + '">' + img + text + '</label><input class="input-' + color + '" id="text-' + text + group + '" name="text-' + text + group + '"' + autoclean + ' maxlength="' + maxlength + '" size="16" type="text"/>';
      break;
    case 'password':
      security = '';
      if ($id('sv' + i).checked) {
        security = ' onkeyup="baf_password(this.value, this.previousElementSibling.id)"';
      }
      FormCode[group] = '<label class="baf ' + color + size + ' add-on" for="pw-' + text + group + '" id="label-' + text + group + '">' + img + text + '</label><input class="input-' + color + '" id="pw-' + text + group + '" name="pw-' + text + group + '"' + security + ' size="16" type="password"/>';
      break;
    case 'number':
      maxvalue = Math.round($id('max' + i).value);
      minvalue = Math.round($id('min' + i).value);
      intquart[0] = Math.round(minvalue + (maxvalue - minvalue) / 4);
      intquart[1] = Math.round(minvalue + (maxvalue - minvalue) / 2);
      intquart[2] = Math.round(minvalue + (maxvalue - minvalue) / 4 * 3);
      if ($id('inputtype' + i).value == 'number') {
        FormCode[group] = '<div class="baf-group">';
        if ((text == '') && (img == '')) {
          FormCode[group] += '<a class="baf ' + color + '" onmousedown="baf_keepCalling=true; baf_plusone(\'int-' + text + group + '\', 400, 60);" onmouseout="baf_keepCalling=false;" onmouseup="baf_keepCalling=false;"><span class="baf-icomoon" aria-hidden="true" data-icon="&#xe094;"></span></a><a class="baf ' + color + '" onmousedown="baf_keepCalling=true; baf_minusone(\'int-' + text + group + '\', 400, 60);" onmouseout="baf_keepCalling=false;" onmouseup="baf_keepCalling=false;"><span class="baf-icomoon" aria-hidden="true" data-icon="&#xe095;"></span></a>';
        } else {
          FormCode[group] += '<label for="int-' + text + group + '" class="baf ' + color + size + '">' + img + text + '</label>';
        }
        FormCode[group] += '<input id="int-' + text + group + '" class="input-' + color + '" max="' + maxvalue + '" min="' + minvalue + '" name="quantity" onchange="baf_changeValues(this);" type="number" value="' + intquart[1] + '"/><a class="baf ' + color + ' dropdown-toggle"><span class="caret"></span></a><ul class="dropdown-menu-' + color + '"><li><a href="javascript:$id(\'int-' + text + group + '\').value=' + minvalue + ';">' + minvalue + '</a></li><li class="divider"></li><li><a href="javascript:$id(\'int-' + text + group + '\').value=' + intquart[0] + ';">' + intquart[0] + '</a></li><li><a href="javascript:$id(\'int-' + text + group + '\').value=' + intquart[1] + ';">' + intquart[1] + '</a></li><li><a href="javascript:$id(\'int-' + text + group + '\').value=' + intquart[2] + ';">' + intquart[2] + '</a></li><li class="divider"></li><li><a href="javascript:$id(\'int-' + text + group + '\').value=' + maxvalue + ';">' + maxvalue + '</a></li></ul></div>';
      } else {
        FormCode[group] = '<div class="baf-group">';
        if ((text == '') && (img == '')) {
          FormCode[group] += '<a class="baf ' + color + '" onmousedown="baf_keepCalling=true; baf_plusone(\'int-' + text + group + '\', 400, 60, 1);" onmouseout="baf_keepCalling=false;" onmouseup="baf_keepCalling=false;"><span class="baf-icomoon" aria-hidden="true" data-icon="&#xe094;"></span></a><a class="baf ' + color + '" onmousedown="baf_keepCalling=true; baf_minusone(\'int-' + text + group + '\', 400, 60, 1);" onmouseout="baf_keepCalling=false;" onmouseup="baf_keepCalling=false;"><span class="baf-icomoon" aria-hidden="true" data-icon="&#xe095;"></span></a>';
        } else {
          FormCode[group] += '<label for="int-' + text + group + '" class="baf ' + color + size + '">' + img + text + '</label>';
        }
        FormCode[group] += '<div class="bafslider baf ' + color + '"><input class="range-slider" name="rangeinput1" id="int-' + text + group + '" max="' + maxvalue + '" min="' + minvalue + '" type="text" title="" value="' + intquart[1] + '" maxlength="6"></div><a class="baf ' + color + ' dropdown-toggle"><span class="caret"></span></a><ul class="dropdown-menu-' + color + '"><li><a href="javascript:$id(\'int-' + text + group + '\').value=' + minvalue + '; fdSlider.updateSlider(\'int-' + text + group + '\');">' + minvalue + '</a></li><li class="divider"></li><li><a href="javascript:$id(\'int-' + text + group + '\').value=' + intquart[0] + '; fdSlider.updateSlider(\'int-' + text + group + '\');">' + intquart[0] + '</a></li><li><a href="javascript:$id(\'int-' + text + group + '\').value=' + intquart[1] + '; fdSlider.updateSlider(\'int-' + text + group + '\');">' + intquart[1] + '</a></li><li><a href="javascript:$id(\'int-' + text + group + '\').value=' + intquart[2] + '; fdSlider.updateSlider(\'int-' + text + group + '\');">' + intquart[2] + '</a></li><li class="divider"></li><li><a href="javascript:$id(\'int-' + text + group + '\').value=' + maxvalue + '; fdSlider.updateSlider(\'int-' + text + group + '\');">' + maxvalue + '</a></li></ul></div>';
      }
      break;
    case 'email':
      validate = '';
      if ($id('ev' + i).checked) {
        validate = ' onkeyup="baf_email(this.value, this.previousElementSibling.id)"'
      }

      FormCode[group] = '<label class="baf ' + color + size + ' add-on" for="text-' + text + group + '" id="label-' + text + group + '">' + img + text + '</label><input class="input-' + color + '" id="text-' + text + group + '" name="text-' + text + group + '"' + validate + ' size="16" type="text"/>';
      break;
    }
    ++i;
  }
  var output = '';

  for (x in FormCode) {
    if ((FormCode[x] != undefined) && (FormCode[x] != '')) {
      output += '<div class="input-prepend baf-input baf-group-x' + x + '">' + FormCode[x] + '</div>';
    }
  }

  if ($id('displaymode').value == 'div') {
    $id('democontainer').innerHTML = '<div id="demobox"></div>';
    $id('demobox').innerHTML = output;
  } else {
    $id('democontainer').innerHTML = '<iframe id="demobox"></iframe>';
    $id('demobox').srcdoc = '<html><head><link href="http://simonwaldherr.github.com/buttons-and-forms/css/v2.0/baf.min.css" media="screen" rel="stylesheet" type="text/css"/><link href="http://simonwaldherr.github.com/buttons-and-forms/css/v2.0/icomoon.min.css" media="screen" rel="stylesheet" type="text/css"/><script src="http://simonwaldherr.github.com/buttons-and-forms/repos/fd-slider/js/fd-slider.min.js"></script><script src="http://simonwaldherr.github.com/buttons-and-forms/js/baf.js"></script></head><body>' + output + '</body></html>';
  }

  var reg = new Array(new RegExp('><div', "gi"),
    new RegExp('><a', "gi"),
    new RegExp('a><', "gi"),
    new RegExp('><span', "gi"),
    new RegExp('span><', "gi"),
    new RegExp('</span>', "gi"),
    new RegExp('<', "gi"),
    new RegExp('&#', "gi"),
    new RegExp('undefined', "gi"),
    new RegExp('&nbsp;', "gi"));
  var rep = new Array('>\n<div',
    '>\n  <a',
    'a>\n<',
    '>\n    <span',
    'span>\n  <',
    '\n    </span>',
    '&lt;',
    '&amp;#',
    '',
    '&amp;nbsp;');

  for (var i = 0; i < 10; i++) {
    output = output.replace(reg[i], rep[i]);
  }

  $id('precode').innerHTML = '<pre class="code prettyprint"><code id="code">\n' + output + ' \n</code></pre>';
  $id('selectbuttoncode').style.display = 'inline-block';
  baf_listenerInit();
  window.setTimeout(prettyPrint, 100);
}

function clearTable() {
  $id('demobox').innerHTML = '';
  $id('precode').innerHTML = '';
  $id('list').innerHTML = '';
  $id('selectbuttoncode').style.display = 'none';
  $id("buttonscount").value = 0;
}

function selectIcomoonIcon(buttoncount) {
  var inserticons = '<div class="glyph" onclick="insertIcomoonIcon(\'\', \'' + buttoncount + '\');"><div class="fs1" aria-hidden="true" data-icon="&nbsp;"></div></div>';
  var icon = 0;
  var iconhex = '';
  while (icon < 316) {
    iconhex = icon.toString(16);
    if (iconhex.length == 1) {
      iconhex = '00' + iconhex;
    }
    if (iconhex.length == 2) {
      iconhex = '0' + iconhex;
    }
    inserticons += '<div class="glyph" onclick="insertIcomoonIcon(\'' + iconhex + '\', \'' + buttoncount + '\');"><div class="fs1" aria-hidden="true" data-icon="&#xe' + iconhex + '"></div></div>';
    ++icon;
  }
  inserticons += '<br /><div style="display:inline; top:20px; left:80px; position:relative;">click on one of the icons to add it to the button</b><br />';

  $id('iconselectcontainer').innerHTML = inserticons;
  $id('iconselectcontainer').style.display = 'block';
  $id('editorcontainer').style.display = 'none';
}

function insertIcomoonIcon(iconhex, buttoncount) {
  $id('iconid' + buttoncount).value = iconhex;
  generateForm();
  $id('iconselectcontainer').style.display = 'none';
  $id('editorcontainer').style.display = 'block';

  var currentPos = findPos($id("editorcontainer"));

  if (currentPos < window.pageYOffset) {
    window.scroll(0, currentPos);
  }
}

function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
    return [curtop - 100];
  }
}

function fnSelect(objId) {
  fnDeSelect();
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText($id(objId));
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode($id(objId));
    window.getSelection().addRange(range);
  }
}

function fnDeSelect() {
  if (document.selection) {
    document.selection.empty();
  } else if (window.getSelection) {
    window.getSelection().removeAllRanges();
  }
}
