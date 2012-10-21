/*
 *
 * Buttons and Forms
 *
 * Repo: https://github.com/SimonWaldherr/buttons-and-forms
 * Demo: http://simonwaldherr.github.com/buttons-and-forms/demo/
 * Editor: http://simonwaldherr.github.com/buttons-and-forms/editor/
 * License: MIT
 * Version: 1.6
 *
 */

function addListElement(type)
  {
    var listcount = (Math.round($id("buttonscount").value)+1);
    $id("buttonscount").value = listcount;
    //var code = '<ol><li>';
    var code = '<div id="lidiv'+listcount+'"><a onclick="$id(\'liele'+listcount+'\').value = \'hidden\'; $id(\'lidiv'+listcount+'\').style.display = \'none\'; generateForm();" class="baf red del"><span class="baf-icomoon big" aria-hidden="true" data-icon="&#xe099;"></span></a><b>'+type+'</b><div class="hideme"><input type="text" id="liele'+listcount+'" value="'+type+'" /></div>';
    switch(type)
      {
        case 'text':
          //Sort
          code += '<label for="sort'+listcount+'">Sort </label><input class="sort" name="sort'+listcount+'" id="sort'+listcount+'" type="number" placeholder="" value="'+listcount+'" onchange="javascript:generateForm();" />';
          //Text - 0
          code += '<label for="text'+listcount+'">text</label><input name="text'+listcount+'" id="text'+listcount+'" type="text" placeholder="" onkeyup="javascript:generateForm();" />';
          //Color - 1
          code += '<label for="color'+listcount+'">color</label><select name="color'+listcount+'" id="color'+listcount+'" size="1" onchange="javascript:generateForm();"><option>grey</option><option>black</option><option>cyan</option><option>blue</option><option>green</option><option>yellow</option><option>red</option></select>';
          //Img - 2
          code += '<span>Image </span> <input id="iconid'+listcount+'" class="hideme" style="display:none;" name="img'+listcount+'" type="text"><a onclick="selectIcomoonIcon('+listcount+')" class="baf grey">change icon</a> ';
          //ImageSize - 3
          code += '<label for="imgsize'+listcount+'">Imagesize</label><select name="imgsize'+listcount+'" id="imgsize'+listcount+'" size="1" onchange="javascript:generateForm();"><option>normal</option><option>big</option><option>bigger</option></select>';
          //Max Length - 4
          code += '<label for="max'+listcount+'">max length</label><input name="max'+listcount+'" id="max'+listcount+'" type="number" placeholder="" onkeyup="javascript:generateForm();" />';
          //Min Length - 5
          code += '<label for="min'+listcount+'">min length</label><input name="min'+listcount+'" id="min'+listcount+'" type="number" placeholder="" onkeyup="javascript:generateForm();" />';
          //AutoClean - 6
          code += '<span>Clean</span><input id="ac'+listcount+'" type="checkbox" onchange="javascript:generateForm();" />';
          break;
        case 'password':
          //Sort
          code += '<label for="sort'+listcount+'">Sort </label><input class="sort" name="sort'+listcount+'" id="sort'+listcount+'" type="number" placeholder="" value="'+listcount+'" onkeyup="javascript:generateForm();" />';
          //Text - 0
          code += '<label for="text'+listcount+'">text</label><input name="text'+listcount+'" id="text'+listcount+'" type="text" placeholder="" onkeyup="javascript:generateForm();" />';
          //Color - 1
          code += '<label for="color'+listcount+'">color</label><select name="color'+listcount+'" id="color'+listcount+'" size="1" onchange="javascript:generateForm();"><option>grey</option><option>black</option><option>cyan</option><option>blue</option><option>green</option><option>yellow</option><option>red</option></select>';
          //Img - 2
          code += '<span>Image </span> <input id="iconid'+listcount+'" class="hideme" style="display:none;" name="img'+listcount+'" type="text"><a onclick="selectIcomoonIcon('+listcount+')" class="baf grey">change icon</a> ';
          //ImageSize - 3
          code += '<label for="imgsize'+listcount+'">Imagesize</label><select name="imgsize'+listcount+'" id="imgsize'+listcount+'" size="1" onchange="javascript:generateForm();"><option>normal</option><option>big</option><option>bigger</option></select>';
          //SecurityValue - 4
          code += '<span>Show security </span><input id="sv'+listcount+'" type="checkbox" onchange="javascript:generateForm();" />';
          break;
        case 'number':
          //Sort
          code += '<label for="sort'+listcount+'">Sort </label><input class="sort" name="sort'+listcount+'" id="sort'+listcount+'" type="number" placeholder="" value="'+listcount+'" onkeyup="javascript:generateForm();" />';
          //Text - 0
          code += '<label for="text'+listcount+'">text</label><input name="text'+listcount+'" id="text'+listcount+'" type="text" placeholder="" onkeyup="javascript:generateForm();" />';
          //Color - 1
          code += '<label for="color'+listcount+'">color</label><select name="color'+listcount+'" id="color'+listcount+'" size="1" onchange="javascript:generateForm();"><option>grey</option><option>black</option><option>cyan</option><option>blue</option><option>green</option><option>yellow</option><option>red</option></select>';
          //Img - 2
          code += '<span>Image </span> <input id="iconid'+listcount+'" class="hideme" style="display:none;" name="img'+listcount+'" type="text"><a onclick="selectIcomoonIcon('+listcount+')" class="baf grey">change icon</a> ';
          //ImageSize - 3
          code += '<label for="imgsize'+listcount+'">Imagesize</label><select name="imgsize'+listcount+'" id="imgsize'+listcount+'" size="1" onchange="javascript:generateForm();"><option>normal</option><option>big</option><option>bigger</option></select>';
          //InputType - 3
          code += '<label for="inputtype'+listcount+'">Inputtype</label><select name="inputtype'+listcount+'" id="inputtype'+listcount+'" size="1" onchange="javascript:generateForm();"><option>number</option><option>range</option></select>';
          //Max Value - 4
          code += '<label for="max'+listcount+'">max value</label><input name="max'+listcount+'" id="max'+listcount+'" type="number" value="100" placeholder="" onkeyup="javascript:generateForm();" />';
          //Min Value - 5
          code += '<label for="min'+listcount+'">min value</label><input name="min'+listcount+'" id="min'+listcount+'" type="number" value="0" placeholder="" onkeyup="javascript:generateForm();" />';
          break;
        case 'email':
          //Sort
          code += '<label for="sort'+listcount+'">Sort </label><input class="sort" name="sort'+listcount+'" id="sort'+listcount+'" type="number" placeholder="" value="'+listcount+'" onkeyup="javascript:generateForm();" />';
          //Text - 0
          code += '<label for="text'+listcount+'">text</label><input name="text'+listcount+'" id="text'+listcount+'" type="text" placeholder="" onkeyup="javascript:generateForm();" />';
          //Color - 1
          code += '<label for="color'+listcount+'">color</label><select name="color'+listcount+'" id="color'+listcount+'" size="1" onchange="javascript:generateForm();"><option>grey</option><option>black</option><option>cyan</option><option>blue</option><option>green</option><option>yellow</option><option>red</option></select>';
          //Img - 2
          code += '<span>Image </span> <input id="iconid'+listcount+'" class="hideme" style="display:none;" name="img'+listcount+'" type="text"><a onclick="selectIcomoonIcon('+listcount+')" class="baf grey">change icon</a> ';
          //ImageSize - 3
          code += '<label for="imgsize'+listcount+'">Imagesize</label><select name="imgsize'+listcount+'" id="imgsize'+listcount+'" size="1" onchange="javascript:generateForm();"><option>normal</option><option>big</option><option>bigger</option></select>';
          //validate - 4
          code += '<span>validate </span><input type="checkbox" onchange="javascript:generateForm();" />';
          break;
      }
    code += '</div>';
    var node = document.createElement("li");
    node.innerHTML = code;
    $id("list").appendChild(node);
    
    generateForm();
  }

function generateForm()
  {
    var text, color, img, imgsize, maxlength, minlength, autoclean, security, inputtype, maxvalue, minvalue, validate;
    
    var i         = 1;
    var listcount = (Math.round($id("buttonscount").value)+1);
    var FormCode  = new Array();
    var group     = '';
    var rangeInit = new Array();
    var intquart  = new Array();
    
    while(i<listcount)
      {
        group   = $id('sort'+i).value;
        text    = $id('text'+i).value;
        color   = $id('color'+i).value;
        img     = $id('iconid'+i).value;
        imgsize = $id('imgsize'+i).value;
        
        if(img != '')
          {
            //img = '&#xe'+img;
            img = '<span class="baf-icomoon '+imgsize+'" aria-hidden="true" data-icon="&#xe'+img+';">&nbsp;</span> '
          }
        
        if(FormCode[group] == undefined)
          {
            FormCode[group] = '';
          }
        
        switch($id('liele'+i).value)
          {
            case 'text':
              maxlength = $id('max'+i).value;
              minlength = $id('min'+i).value;
              autoclean = $id('ac'+i).checked;
              
              FormCode[group] = '<label class="baf '+color+' add-on" for="text-'+text+group+'" id="key">'+img+text+'</label><input class="input-'+color+'" id="text-'+text+group+'" name="text-'+text+group+'" size="16" type="text"/>';
              break;
            case 'password':
              security = $id('sv'+i).value;
              FormCode[group] = '<label class="baf '+color+' add-on" for="pw-'+text+group+'" id="key">'+img+text+'</label><input class="input-'+color+'" id="pw-'+text+group+'" name="pw-'+text+group+'" size="16" type="password"/>';
              break;
            case 'number':
              maxvalue = $id('max'+i).value;
              minvalue = $id('min'+i).value;
              intquart[0] = Math.round(Math.round(maxvalue-minvalue)/4);
              intquart[1] = Math.round(Math.round(maxvalue-minvalue)/2);
              intquart[2] = Math.round(Math.round(maxvalue-minvalue)/4*3);
              if($id('inputtype'+i).value == 'number')
                {
                  FormCode[group] = '<div class="baf-group">';
                  if(text == '')
                    {
                      FormCode[group] += '<a class="baf '+color+'" onmousedown="keepCalling=true; plusone(\'int-'+text+group+'\', 400);" onmouseout="keepCalling=false;" onmouseup="keepCalling=false;"><span class="baf-icomoon '+imgsize+'" aria-hidden="true" data-icon="&#xe094;"></span></a><a class="baf '+color+'" onmousedown="keepCalling=true; minusone(\'int-'+text+group+'\', 400);" onmouseout="keepCalling=false;" onmouseup="keepCalling=false;"><span class="baf-icomoon" aria-hidden="true" data-icon="&#xe095;"></span></a>';
                    }
                  else
                    {
                      FormCode[group] += '<label for="int-'+text+group+'" class="baf '+color+'">'+img+text+'</label>';
                    }
                  FormCode[group] += '<input id="int-'+text+group+'" class="input-'+color+'" max="'+maxvalue+'" min="'+minvalue+'" name="quantity" onkeydown="changeValues(this);" type="number" value="'+intquart[1]+'"/><a class="baf '+color+' dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a><ul class="dropdown-menu-'+color+'"><li><a href="javascript:$id(\'int-'+text+group+'\').value='+minvalue+';">'+minvalue+'</a></li><li class="divider"></li><li><a href="javascript:$id(\'int-'+text+group+'\').value='+intquart[0]+';">'+intquart[0]+'</a></li><li><a href="javascript:$id(\'int-'+text+group+'\').value='+intquart[1]+';">'+intquart[1]+'</a></li><li><a href="javascript:$id(\'int-'+text+group+'\').value='+intquart[2]+';">'+intquart[2]+'</a></li><li class="divider"></li><li><a href="javascript:$id(\'int-'+text+group+'\').value='+maxvalue+';">'+maxvalue+'</a></li></ul></div>';
                }
              else
                {
                  FormCode[group] = '<div class="baf-group">';
                  if(text == '')
                    {
                      FormCode[group] += '<a class="baf '+color+'" onmousedown="keepCalling=true; plusone(\'int-'+text+group+'\', 400, 60, 1);" onmouseout="keepCalling=false;" onmouseup="keepCalling=false;"><span class="baf-icomoon '+imgsize+'" aria-hidden="true" data-icon="&#xe094;"></span></a><a class="baf '+color+'" onmousedown="keepCalling=true; minusone(\'int-'+text+group+'\', 400, 60, 1);" onmouseout="keepCalling=false;" onmouseup="keepCalling=false;"><span class="baf-icomoon" aria-hidden="true" data-icon="&#xe095;"></span></a>';
                    }
                  else
                    {
                      FormCode[group] += '<label for="int-'+text+group+'" class="baf '+color+'"><span class="baf-icomoon" aria-hidden="true" data-icon="'+img+';"></span>'+text+'</label>';
                    }
                  FormCode[group] += '<div class="bafslider baf '+color+'"><input name="rangeinput1" id="int-'+text+group+'" max="'+maxvalue+'" min="'+minvalue+'" type="text" title="" value="'+intquart[1]+'" maxlength="6" onchange=""></div><a class="baf '+color+' dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a><ul class="dropdown-menu-'+color+'"><li><a href="javascript:$id(\'int-'+text+group+'\').value='+minvalue+'; fdSlider.updateSlider(\'int-'+text+group+'\');">'+minvalue+'</a></li><li class="divider"></li><li><a href="javascript:$id(\'int-'+text+group+'\').value='+intquart[0]+'; fdSlider.updateSlider(\'int-'+text+group+'\');">'+intquart[0]+'</a></li><li><a href="javascript:$id(\'int-'+text+group+'\').value='+intquart[1]+'; fdSlider.updateSlider(\'int-'+text+group+'\');">'+intquart[1]+'</a></li><li><a href="javascript:$id(\'int-'+text+group+'\').value='+intquart[2]+'; fdSlider.updateSlider(\'int-'+text+group+'\');">'+intquart[2]+'</a></li><li class="divider"></li><li><a href="javascript:$id(\'int-'+text+group+'\').value='+maxvalue+'; fdSlider.updateSlider(\'int-'+text+group+'\');">'+maxvalue+'</a></li></ul></div>';
                  rangeInit[i] = new Array();
                  rangeInit[i][0] = 'int-'+text+group;
                  rangeInit[i][1] = minvalue;
                  rangeInit[i][2] = maxvalue;
                }
              break;
          }
        ++i;
      }
    var output = '';
    
    for (x in FormCode)
      {
        if((FormCode[x] != undefined)&&(FormCode[x] != ''))
          {
            output += '<div class="input-prepend baf-input baf-group-x'+x+'">'+FormCode[x]+'</div>';
          }
      }
    
    if($id('displaymode').value == 'div')
      {
        $id('democontainer').innerHTML = '<div id="demobox"></div>';
        $id('demobox').innerHTML = output;
      }
    else
      {
        $id('democontainer').innerHTML = '<iframe id="demobox"></iframe>';
        $id('demobox').srcdoc = '<html><head><link href="http://simonwaldherr.github.com/buttons-and-forms/css/v1.6/baf.min.css" media="screen" rel="stylesheet" type="text/css"/><link href="http://simonwaldherr.github.com/buttons-and-forms/css/v1.6/icomoon.min.css" media="screen" rel="stylesheet" type="text/css"/></head><body>'+output+'</body></html>';
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
    
    for (var i = 0; i < 10; i++)
      {
        output = output.replace(reg[i], rep[i]);
      }
    
    $id('precode').innerHTML = '<pre class="code prettyprint"><code id="code">\n'+output+' \n</code></pre>';
    $id('selectbuttoncode').style.display = 'inline-block';
    
    for (x in rangeInit)
      {
        fdSlider.createSlider({
          inp:document.getElementById(rangeInit[x][0]),
          step:1, 
          maxStep:1,
          min:rangeInit[x][1],
          max:rangeInit[x][2],
          animation:"tween",
          forceValue:true
        });
      }
    
    window.setTimeout(prettyPrint, 100);
  }

function clearTable()
  {
    $id('demobox').innerHTML = '';
    $id('precode').innerHTML = '';
    $id('list').innerHTML = '';
    $id('selectbuttoncode').style.display = 'none';
    $id("buttonscount").value = 0;
  }

function selectIcomoonIcon(buttoncount)
  {
    var inserticons = '<div class="glyph" onclick="insertIcomoonIcon(\'\', \''+buttoncount+'\');"><div class="fs1" aria-hidden="true" data-icon="&nbsp;"></div></div>';
    var icon = 0;
    var iconhex = '';
    while(icon < 316)
      {
        iconhex = icon.toString(16);
        if(iconhex.length == 1)
          {
            iconhex = '00'+iconhex;
          }
        if(iconhex.length == 2)
          {
            iconhex = '0'+iconhex;
          }
        inserticons += '<div class="glyph" onclick="insertIcomoonIcon(\''+iconhex+'\', \''+buttoncount+'\');"><div class="fs1" aria-hidden="true" data-icon="&#xe'+iconhex+'"></div></div>';
        ++icon;
      }
    inserticons += '<br /><div style="display:inline; top:20px; left:80px; position:relative;">click on one of the icons to add it to the button</b><br />';

    $id('iconselectcontainer').innerHTML = inserticons;
    $id('iconselectcontainer').style.display = 'block';
    $id('editorcontainer').style.display = 'none';
  }

function insertIcomoonIcon(iconhex, buttoncount)
  {
    $id('iconid'+buttoncount).value = iconhex;
    generateForm();
    $id('iconselectcontainer').style.display = 'none';
    $id('editorcontainer').style.display = 'block';

    var currentPos = findPos($id("editorcontainer"));

    if(currentPos < window.pageYOffset)
      {
        window.scroll(0,currentPos);
      }
  }

function findPos(obj)
  {
    var curtop = 0;
    if (obj.offsetParent)
      {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return [curtop-100];
      }
  }

function fnSelect(objId)
  {
    fnDeSelect();
    if (document.selection)
      {
        var range = document.body.createTextRange();
        range.moveToElementText($id(objId));
        range.select();
      }
    else if (window.getSelection)
      {
        var range = document.createRange();
        range.selectNode($id(objId));
        window.getSelection().addRange(range);
      }
  }

function fnDeSelect()
  {
    if (document.selection)
      {
        document.selection.empty();
      }
    else if (window.getSelection)
      {
        window.getSelection().removeAllRanges();
      }
  }
