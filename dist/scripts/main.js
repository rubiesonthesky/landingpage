var Konami=function(t){var e={addEvent:function(t,e,n,i){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&(t["e"+e+n]=n,t[e+n]=function(){t["e"+e+n](window.event,i)},t.attachEvent("on"+e,t[e+n]))},input:"",pattern:"38384040373937396665",load:function(t){this.addEvent(document,"keydown",function(n,i){return i&&(e=i),e.input+=n?n.keyCode:event.keyCode,e.input.length>e.pattern.length&&(e.input=e.input.substr(e.input.length-e.pattern.length)),e.input==e.pattern?(e.code(t),e.input="",n.preventDefault(),!1):void 0},this),this.iphone.load(t)},code:function(t){window.location=t},iphone:{start_x:0,start_y:0,stop_x:0,stop_y:0,tap:!1,capture:!1,orig_keys:"",keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP"],code:function(t){e.code(t)},load:function(t){this.orig_keys=this.keys,e.addEvent(document,"touchmove",function(t){if(1==t.touches.length&&1==e.iphone.capture){var n=t.touches[0];e.iphone.stop_x=n.pageX,e.iphone.stop_y=n.pageY,e.iphone.tap=!1,e.iphone.capture=!1,e.iphone.check_direction()}}),e.addEvent(document,"touchend",function(){1==e.iphone.tap&&e.iphone.check_direction(t)},!1),e.addEvent(document,"touchstart",function(t){e.iphone.start_x=t.changedTouches[0].pageX,e.iphone.start_y=t.changedTouches[0].pageY,e.iphone.tap=!0,e.iphone.capture=!0})},check_direction:function(t){x_magnitude=Math.abs(this.start_x-this.stop_x),y_magnitude=Math.abs(this.start_y-this.stop_y),x=this.start_x-this.stop_x<0?"RIGHT":"LEFT",y=this.start_y-this.stop_y<0?"DOWN":"UP",result=x_magnitude>y_magnitude?x:y,result=1==this.tap?"TAP":result,result==this.keys[0]&&(this.keys=this.keys.slice(1,this.keys.length)),0==this.keys.length&&(this.keys=this.orig_keys,this.code(t))}}};return"string"==typeof t&&e.load(t),"function"==typeof t&&(e.code=t,e.load()),e};!function(){"use strict";function t(){var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}function e(){i("embed").style.display="none",i("wrapper").style.opacity=0,o("overlay")[0].style.background="transparent"}function n(){i("embed").style.display="block",i("wrapper").style.opacity=1,o("overlay")[0].style.background=void 0}var i=document.getElementById.bind(document),o=document.getElementsByClassName.bind(document);window.onYouTubeIframeAPIReady=function(){function t(t){t.data===YT.PlayerState.ENDED&&(i("skriik").style.display="none",n(),o.seekTo(0))}i("skriik").style.display="none";var o=new YT.Player("skriik",{videoId:"DI3PJ1t_sOg",playerVars:{rel:0},events:{onStateChange:t}}),s=new Konami;s.code=function(){o.playVideo(),i("skriik").style.display="block",e()},s.load()},t()}();