var cssId1 = 'css1';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId1))
{
       var head  = document.getElementsByTagName('head')[0];
       var link1  = document.createElement('link');
       link1.id   = cssId1;
       link1.rel  = 'stylesheet';
       link1.type = 'text/css';
       link1.href = 'https://cdn.jsdelivr.net/gh/Programming-True/custom-bootstrap@latest/FreeFramework/FreeFramework.min.css';
       link1.media = 'all';
       head.appendChild(link);
}

var cssId2 = 'css2';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId2))
{
       var head  = document.getElementsByTagName('head')[0];
       var link2  = document.createElement('link');
       link2.id   = cssId2;
       link2.rel  = 'stylesheet';
       link2.type = 'text/css';
       link2.href = 'https://cdn.jsdelivr.net/gh/Programming-True/custom-bootstrap@latest/FreeFramework/FreeFramework-grid.min.css';
       link2.media = 'all';
       head.appendChild(link);
}


var cssId3 = 'css3';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId3))
{
       var head  = document.getElementsByTagName('head')[0];
       var link3  = document.createElement('link');
       link3.id   = cssId3;
       link3.rel  = 'stylesheet';
       link3.type = 'text/css';
       link3.href = 'https://cdn.jsdelivr.net/gh/Programming-True/custom-bootstrap@latest/FreeFramework/FreeFramework-reboot.min.css';
       link3.media = 'all';
       head.appendChild(link);
}