/* QuoJS v3.0.1 - 2014/1/24
   http://quojs.tapquo.com
   Copyright (c) 2014 Javi Jimenez Villar (@soyjavi) - Licensed MIT */
(function(){"use strict";!function(a){return a.fn.attr=function(b,c){return this.length>0&&"string"===a.toType(b)?c?this.each(function(){return this.setAttribute(b,c)}):this[0].getAttribute(b):void 0},a.fn.removeAttr=function(b){return this.length>0&&"string"===a.toType(b)?this.each(function(){return this.removeAttribute(b)}):void 0},a.fn.data=function(a,b){return this.attr("data-"+a,b)},a.fn.removeData=function(a){return this.removeAttr("data-"+a)},a.fn.val=function(a){return a?this.each(function(){return this.value=a.toString()}):this.length>0?this[0].value:null},a.fn.show=function(){return this.style("display","block")},a.fn.hide=function(){return this.style("display","none")},a.fn.offset=function(){var a,b;return this.length>0&&(a=this[0].getBoundingClientRect(),b={left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}),b}}(Quo)}).call(this);