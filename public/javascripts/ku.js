var ku={};ku.$=function(e){return document.getElementById(e)},ku.getByClass=function(e,t){for(var n=[],r=(t?ku.$(t):document).getElementsByTagName("*"),a=0;a<r.length;a++)r[a].className==e&&n.push(r[a]);return n};var EventUtil={addHandler:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},getEvent:function(e){return e||window.event},getTarget:function(e){return e.target||e.srcElement},preventDefault:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},removeHandler:function(e,t,n){e.addEventListener?e.removeEventListener(t,n,!1):e.attachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},stopPropagation:function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}};ku.getStyle=function(e,t){return e.currentStyle?e.currentStyle[t]:getComputedStyle(e,!1)[t]},ku.insertAfter=function(e,t){var n=t.parentNode;n.lastChild==t?n.appendChild(e):n.insertBefore(e,t.nextSibling)};