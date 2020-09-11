    /*
    This code is by Kazutokeita.
    I give you full permission to download, Copy, Edit or do whatever you want with this code AS LONG
    AS YOU GIVE CREDIT!! >..<
    */
    function getCookie(c_name)
    {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1)
    {
     c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1)
    {
     c_value = null;
    }
    else
    {
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1)
    {
     c_end = c_value.length;
    }
    c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
    }
     
    var user = getCookie('id.chatango.com');
    var uid = getCookie('auth.chatango.com');
    var anonID = Math.floor((Math.random()*999)+111)
    var escapedauth = escape(uid);
    var greetings = ['hello'];
     
    var greeting = greetings[Math.floor(Math.random() * greetings.length)];
    if (user!=null && user!="")
      {
      document.getElementById("getUser").innerHTML='<div id="greet">Hi there, ' + user + '</div>';   //welcome logged in user
      }
    else
      {
      document.getElementById("getUser").innerHTML='<div id="greet">Hi there, ' + anonID + '</div>';
      }

