/*
 *
 * Buttons and Forms
 *
 * Repo: https://github.com/SimonWaldherr/buttons-and-forms
 * Demo: http://simonwaldherr.github.com/buttons-and-forms/demo/
 * Editor: http://simonwaldherr.github.com/buttons-and-forms/editor/
 * License: MIT
 * Version: 1.4
 *
 */

function addTableRow()
  {
    $id("buttonscount").value = (Math.round($id("buttonscount").value)+1);
    var code = '<td><input name="text" type="text" placeholder="text" onkeyup="javascript:generateButton();"></td>';
    code += '<td><select name="color" size="1" onchange="javascript:generateButton();"><option>grey</option><option>black</option><option>cyan</option><option>blue</option><option>green</option><option>yellow</option><option>red</option></select></td>';
    code += '<td><input id="iconid'+$id("buttonscount").value+'" class="hideme" style="display:none;" name="text" type="text"><a onclick="selectIcomoonIcon('+$id("buttonscount").value+')" class="baf grey">change icon</a></td>';
    code += '<td><input name="link" type="text" onkeyup="javascript:generateButton();"></td><td><input name="text" type="text" placeholder="group" value="'+($id("buttonscount").value)+'" onkeyup="javascript:generateButton();"></td>';
    code += '<td><input type="checkbox" onchange="javascript:generateButton();"></td>';
    
    var node=document.createElement("tr");
    node.innerHTML = code;
    $id("table").appendChild(node);
    
  }

function showContent()
  {
    var TBL = $id('realtable');
    for(var x = 1; x < TBL.rows.length; x++)
      {
        for (var y = 0; y < TBL.rows[x].cells.length; y++)
          {
            alert(TBL.rows[x].cells[y].firstChild.value);
          }
      }
  }

function generateButton()
  {
    var TBL = $id('realtable');
    //var ButtonCode = '';
    var ButtonCode = new Array();
    var group = '';
    for(var x = 1; x < TBL.rows.length; x++)
      {
        group = TBL.rows[x].cells[4].firstChild.value;
        if(ButtonCode[group] == undefined)
          {
            ButtonCode[group] = '';
          }
        if(TBL.rows[x].cells[3].firstChild.value != '')
          {
            ButtonCode[group] += '<a href="'+TBL.rows[x].cells[3].firstChild.value+'"';
          }
        else
          {
            ButtonCode[group] += '<a';
          }
        if(TBL.rows[x].cells[5].firstChild.checked == true)
          {
            ButtonCode[group] += ' disabled="true" ';
          }
        ButtonCode[group] += ' class="baf '+TBL.rows[x].cells[1].firstChild.value+'">';
        if(TBL.rows[x].cells[2].firstChild.value != '')
          {
            ButtonCode[group] += '<span class="baf-icomoon" aria-hidden="true" data-icon="&#xe'+TBL.rows[x].cells[2].firstChild.value+';">';
            if(TBL.rows[x].cells[0].firstChild.value != '')
              {
                ButtonCode[group] += ' &nbsp;';
              }
            ButtonCode[group] += '</span>';
          }
        ButtonCode[group] += TBL.rows[x].cells[0].firstChild.value+'</a>';
      }
    
    var output = '';
    
    for (x in ButtonCode)
      {
        output += '<div class="baf-group baf-group-x'+x+'">'+ButtonCode[x]+'</div>';
      }
    
    if($id('displaymode').value == 'div')
      {
        $id('democontainer').innerHTML = '<div id="demobox"></div>';
        $id('demobox').innerHTML = output;
      }
    else
      {
        $id('democontainer').innerHTML = '<iframe id="demobox"></iframe>';
        $id('demobox').srcdoc = '<html><head><link href="http://simonwaldherr.github.com/buttons-and-forms/css/v1.4/baf.min.css" media="screen" rel="stylesheet" type="text/css"/><link href="http://simonwaldherr.github.com/buttons-and-forms/css/v1.4/icomoon.min.css" media="screen" rel="stylesheet" type="text/css"/></head><body>'+output+'</body></html>';
      }
    
    var reg = new Array(new RegExp('><div', "gi"), 
                        new RegExp('><a', "gi"),
                        new RegExp('a><', "gi"),
                        new RegExp('><span', "gi"),
                        new RegExp('span><', "gi"),
                        new RegExp('<', "gi"),
                        new RegExp('&#', "gi"));
    var rep = new Array('>\n<div',
                        '>\n  <a',
                        'a>\n<',
                        '>\n    <span',
                        'span>\n  <',
                        '&lt;',
                        '&amp;#');
    
    for (var i = 0; i < 7; i++)
      {
        output = output.replace(reg[i], rep[i]);
      }
    
    $id('precode').innerHTML = '<pre class="code prettyprint"><code id="code">\n'+output+' \n</code></pre>';
    $id('selectbuttoncode').style.display = 'inline-block';
    
    window.setTimeout(prettyPrint, 100);
  }

function clearTable()
  {
    $id('demobox').innerHTML = '';
    $id('precode').innerHTML = '';
    $id('realtable').innerHTML = '<thead id="tablehead"><tr><td><b>text</b></td><td><b>color</b></td><td><b>img</b></td><td><b>link</b></td><td><b>group</b></td><td><b>disabled</b></td></tr></thead><tbody class="baf-input" id="table"></tbody>';
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
    generateButton();
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
