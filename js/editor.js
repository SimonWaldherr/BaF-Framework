/*
 *
 * Buttons and Forms
 *
 * Repo: https://github.com/SimonWaldherr/buttons-and-forms
 * Demo: http://simonwaldherr.github.com/buttons-and-forms/demo/
 * Editor: http://simonwaldherr.github.com/buttons-and-forms/editor/
 * License: MIT
 * Version: 1.2b
 *
 */

function addTableRow()
  {
    var code = '<td><input name="text" type="text" placeholder="text" onkeyup="javascript:generateButton();"></td>';
    code += '<td><select name="color" size="1" onchange="javascript:generateButton();"><option>grey</option><option>dark</option><option>blue</option><option>green</option><option>yellow</option><option>red</option></select></td>';
    code += '<td><select name="icon" size="1" onchange="javascript:generateButton();"><option></option><option>plus</option><option>minus</option><option>search</option><option>envelope</option><option>heart</option><option>star</option><option>user</option><option>ok</option><option>remove</option><option>off</option><option>cog</option><option>trash</option><option>home</option><option>download</option><option>upload</option><option>refresh</option><option>pencil</option><option>picture</option><option>share</option></select></td>';
    code += '<td><input name="link" type="text" onkeyup="javascript:generateButton();"></td>';
    
    var node=document.createElement("tr");
    node.innerHTML = code;
    document.getElementById("table").appendChild(node);
  }

function showContent()
  {
    var TBL = document.getElementById('realtable');
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
    var TBL = document.getElementById('realtable');
    var ButtonCode = '';
    for(var x = 1; x < TBL.rows.length; x++)
      {
        ButtonCode += '<a href="'+TBL.rows[x].cells[3].firstChild.value+'" class="baf '+TBL.rows[x].cells[1].firstChild.value+'">'
        if((TBL.rows[x].cells[2].firstChild.value != '')&&(TBL.rows[x].cells[1].firstChild.value == 'grey'))
          {
            ButtonCode += '<i class="icon-'+TBL.rows[x].cells[2].firstChild.value+'"></i>  ';
          }
        else if(TBL.rows[x].cells[2].firstChild.value != '')
          {
            ButtonCode += '<i class="icon-'+TBL.rows[x].cells[2].firstChild.value+' icon-white"></i>  ';
          }
        ButtonCode += TBL.rows[x].cells[0].firstChild.value+'</a>';
      }
    
    id('demobox').innerHTML = ButtonCode;
    id('code').value = ButtonCode;
  }

function clearTable()
  {
    document.getElementById('demobox').innerHTML = '';
    document.getElementById('code').value = '';
    document.getElementById('realtable').innerHTML = '<tbody id="table"><tr><td><b>text</b></td><td><b>color</b></td><td><b>img</b></td><td><b>link</b></td></tr></tbody>';
  }
