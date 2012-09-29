function id(id)
  {
    return document.getElementById(id);
  }

function changeValues(element)
  {
    var kc = window.event.keyCode;
    if (((kc === 37)||(kc === 40))&&(element.value > (Math.round(element.min))))
      {
        //left||down -
        element.value = Math.round(element.value)-1;
        return false;
      }
    else if (((kc === 38)||(kc === 39))&&((Math.round(element.max)) > element.value))
      {
        //up||right +
        element.value = Math.round(element.value)+1;
        return false;
      }
    else
      {
        return true;
      }
  }

function changeloadingmode(element)
  {
    if(element.disabled == true)
      {
        
      }
    else
      {
        if(element.className.search('loading') != -1)
          {
            element.className = element.className.replace(' loading', '');
          }
        else
          {
            element.className = element.className+' loading';
            return true;
          }
      }
  }
