/**
 * gtemplate
 * Author: Darlan Alves <darlan@moovia.com>
 * Built on 2013-06-13
 */

!function(a){"use strict";function b(a){return"\\"+e[a]}function c(a,b){this.processors=[],this.compiled=!1,this.options=b||{},this.setSource(a||"",!1)}!function(a){function b(a){return"\\"+e[a]}function c(a,b){this.processors=[],this.compiled=!1,this.options=b||{},this.setSource(a||"",!1)}!function(a){function b(a){return"\\"+e[a]}function c(a,b){this.processors=[],this.compiled=!1,this.options=b||{},this.setSource(a||"",!1)}!function(a){function b(a){return"\\"+e[a]}function c(a,b){this.processors=[],this.compiled=!1,this.options=b||{},this.setSource(a||"",!1)}!function(a){function b(a){return"\\"+e[a]}function c(a,b){this.processors=[],this.compiled=!1,this.options=b||{},this.setSource(a||"",!1)}!function(a){function b(a){return"\\"+e[a]}function c(a,b){this.processors=[],this.compiled=!1,this.options=b||{},this.setSource(a||"",!1)}!function(a){function b(a){return"\\"+e[a]}function c(a,b){this.processors=[],this.compiled=!1,this.options=b||{},this.setSource(a||"",!1)}!function(a){function b(a){return"\\"+e[a]}function c(a,b){this.processors=[],this.compiled=!1,this.options=b||{},this.setSource(a||"",!1)}!function(){}("object"==typeof a&&a||this);var d=/['\n\r\t\u2028\u2029\\]/g,e={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},f=Array.prototype.slice,g=c.prototype;g.setSource=function(a){return this.source=a,this},g.getSource=function(){return this.source},g.render=function(a,b){return this.compiled||this.compile(),this.fn.call("object"==typeof b&&null!==b?b:this,this.processors,a)},g.registerProcessor=function(a,b){return this.processors.push({matcher:a instanceof RegExp?a.source:a,evaluate:"undefined"==typeof b,fn:b}),this},g.compile=function(){for(var a=0,c=this.processors,e=c.length,g="";e>a;a++)g+=c[a].matcher+"|";g+="$";try{g=new RegExp(g,"g")}catch(h){throw new Error("Error on compile preprocessors")}a=0;var i=this.source,j="var __p=arguments[0],o=arguments[1]||{};return '";i.replace(g,function(){var g=0,h=f.call(arguments),k=h.shift(),l=(h.pop(),h.pop()),m=!1;for(j+=i.slice(a,l).replace(d,b);e>g;g++)if(h[g]){m=h[g],j+=c[g].evaluate?"'+(("+m+")||'')+'":"'+(__p["+g+"].fn(o."+m+"||'')||'')+'";break}a=l+k.length}),j+="';";try{this.fn=Function(j),this.compiled=!0}catch(h){throw new Error("Failed to build template: "+h)}},a.Template=c}("object"==typeof a&&a||this),!function(){}("object"==typeof a&&a||this);var d=/['\n\r\t\u2028\u2029\\]/g,e={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},f=Array.prototype.slice,g=c.prototype;g.setSource=function(a){return this.source=a,this},g.getSource=function(){return this.source},g.render=function(a,b){return this.compiled||this.compile(),this.fn.call("object"==typeof b&&null!==b?b:this,this.processors,a)},g.registerProcessor=function(a,b){return this.processors.push({matcher:a instanceof RegExp?a.source:a,evaluate:"undefined"==typeof b,fn:b}),this},g.compile=function(){for(var a=0,c=this.processors,e=c.length,g="";e>a;a++)g+=c[a].matcher+"|";g+="$";try{g=new RegExp(g,"g")}catch(h){throw new Error("Error on compile preprocessors")}a=0;var i=this.source,j="var __p=arguments[0],o=arguments[1]||{};return '";i.replace(g,function(){var g=0,h=f.call(arguments),k=h.shift(),l=(h.pop(),h.pop()),m=!1;for(j+=i.slice(a,l).replace(d,b);e>g;g++)if(h[g]){m=h[g],j+=c[g].evaluate?"'+(("+m+")||'')+'":"'+(__p["+g+"].fn(o."+m+"||'')||'')+'";break}a=l+k.length}),j+="';";try{this.fn=Function(j),this.compiled=!0}catch(h){throw new Error("Failed to build template: "+h)}},a.Template=c}("object"==typeof a&&a||this),!function(){}("object"==typeof a&&a||this);var d=/['\n\r\t\u2028\u2029\\]/g,e={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},f=Array.prototype.slice,g=c.prototype;g.setSource=function(a){return this.source=a,this},g.getSource=function(){return this.source},g.render=function(a,b){return this.compiled||this.compile(),this.fn.call("object"==typeof b&&null!==b?b:this,this.processors,a)},g.registerProcessor=function(a,b){return this.processors.push({matcher:a instanceof RegExp?a.source:a,evaluate:"undefined"==typeof b,fn:b}),this},g.compile=function(){for(var a=0,c=this.processors,e=c.length,g="";e>a;a++)g+=c[a].matcher+"|";g+="$";try{g=new RegExp(g,"g")}catch(h){throw new Error("Error on compile preprocessors")}a=0;var i=this.source,j="var __p=arguments[0],o=arguments[1]||{};return '";i.replace(g,function(){var g=0,h=f.call(arguments),k=h.shift(),l=(h.pop(),h.pop()),m=!1;for(j+=i.slice(a,l).replace(d,b);e>g;g++)if(h[g]){m=h[g],j+=c[g].evaluate?"'+(("+m+")||'')+'":"'+(__p["+g+"].fn(o."+m+"||'')||'')+'";break}a=l+k.length}),j+="';";try{this.fn=Function(j),this.compiled=!0}catch(h){throw new Error("Failed to build template: "+h)}},a.Template=c}("object"==typeof a&&a||this),!function(){}("object"==typeof a&&a||this);var d=/['\n\r\t\u2028\u2029\\]/g,e={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},f=Array.prototype.slice,g=c.prototype;g.setSource=function(a){return this.source=a,this},g.getSource=function(){return this.source},g.render=function(a,b){return this.compiled||this.compile(),this.fn.call("object"==typeof b&&null!==b?b:this,this.processors,a)},g.registerProcessor=function(a,b){return this.processors.push({matcher:a instanceof RegExp?a.source:a,evaluate:"undefined"==typeof b,fn:b}),this},g.compile=function(){for(var a=0,c=this.processors,e=c.length,g="";e>a;a++)g+=c[a].matcher+"|";g+="$";try{g=new RegExp(g,"g")}catch(h){throw new Error("Error on compile preprocessors")}a=0;var i=this.source,j="var __p=arguments[0],o=arguments[1]||{};return '";i.replace(g,function(){var g=0,h=f.call(arguments),k=h.shift(),l=(h.pop(),h.pop()),m=!1;for(j+=i.slice(a,l).replace(d,b);e>g;g++)if(h[g]){m=h[g],j+=c[g].evaluate?"'+(("+m+")||'')+'":"'+(__p["+g+"].fn(o."+m+"||'')||'')+'";break}a=l+k.length}),j+="';";try{this.fn=Function(j),this.compiled=!0}catch(h){throw new Error("Failed to build template: "+h)}},a.Template=c}("object"==typeof a&&a||this),!function(){}("object"==typeof a&&a||this);var d=/['\n\r\t\u2028\u2029\\]/g,e={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},f=Array.prototype.slice,g=c.prototype;g.setSource=function(a){return this.source=a,this},g.getSource=function(){return this.source},g.render=function(a,b){return this.compiled||this.compile(),this.fn.call("object"==typeof b&&null!==b?b:this,this.processors,a)},g.registerProcessor=function(a,b){return this.processors.push({matcher:a instanceof RegExp?a.source:a,evaluate:"undefined"==typeof b,fn:b}),this},g.compile=function(){for(var a=0,c=this.processors,e=c.length,g="";e>a;a++)g+=c[a].matcher+"|";g+="$";try{g=new RegExp(g,"g")}catch(h){throw new Error("Error on compile preprocessors")}a=0;var i=this.source,j="var __p=arguments[0],o=arguments[1]||{};return '";i.replace(g,function(){var g=0,h=f.call(arguments),k=h.shift(),l=(h.pop(),h.pop()),m=!1;for(j+=i.slice(a,l).replace(d,b);e>g;g++)if(h[g]){m=h[g],j+=c[g].evaluate?"'+(("+m+")||'')+'":"'+(__p["+g+"].fn(o."+m+"||'')||'')+'";break}a=l+k.length}),j+="';";try{this.fn=Function(j),this.compiled=!0}catch(h){throw console.log(j),new Error("Failed to build template: "+h)}},a.Template=c}("object"==typeof a&&a||this),!function(){}("object"==typeof a&&a||this);var d=/['\n\r\t\u2028\u2029\\]/g,e={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},f=Array.prototype.slice,g=c.prototype;g.setSource=function(a){return this.source=a,this},g.getSource=function(){return this.source},g.render=function(a,b){return this.compiled||this.compile(),this.fn.call("object"==typeof b&&null!==b?b:this,this.processors,a)},g.registerProcessor=function(a,b){return this.processors.push({matcher:a instanceof RegExp?a.source:a,evaluate:"undefined"==typeof b,fn:b}),this},g.compile=function(){for(var a=0,c=this.processors,e=c.length,g="";e>a;a++)g+=c[a].matcher+"|";g+="$";try{g=new RegExp(g,"g")}catch(h){throw new Error("Error on compile preprocessors")}a=0;var i=this.source,j='var __a=function(v){return typeof v==="string"?v:""},__p=arguments[0],data=arguments[1]||{};return \'';i.replace(g,function(){var g=0,h=f.call(arguments),k=h.shift(),l=(h.pop(),h.pop()),m=!1;for(j+=i.slice(a,l).replace(d,b);e>g;g++)if(h[g]){m=h[g],j+=c[g].evaluate?"'+__a("+m+")+'":"'+__a(__p["+g+"].fn(data."+m+"))+'";break}a=l+k.length}),j+="';";try{this.fn=Function(j),this.compiled=!0}catch(h){throw console.log(j),new Error("Failed to build template: "+h)}},a.Template=c}("object"==typeof a&&a||this),!function(){}("object"==typeof a&&a||this);var d=/['\n\r\t\u2028\u2029\\]/g,e={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},f=Array.prototype.slice,g=c.prototype;g.setSource=function(a){return this.source=a,this},g.getSource=function(){return this.source},g.render=function(a,b){return this.compiled||this.compile(),this.fn.call("object"==typeof b&&null!==b?b:this,this.processors,a)},g.registerProcessor=function(a,b){return this.processors.push({matcher:a instanceof RegExp?a.source:a,evaluate:"undefined"==typeof b,fn:b}),this},g.compile=function(){for(var a=0,c=this.processors,e=c.length,g="";e>a;a++)g+=c[a].matcher+"|";g+="$";try{g=new RegExp(g,"g")}catch(h){throw new Error("Error on compile preprocessors")}a=0;var i=this.source,j='var __a=function(v){return typeof v==="string"?v:""},__p=arguments[0],data=arguments[1]||{};return \'';i.replace(g,function(){var g=0,h=f.call(arguments),k=h.shift(),l=(h.pop(),h.pop()),m=!1;for(j+=i.slice(a,l).replace(d,b);e>g;g++)if(h[g]){m=h[g],j+=c[g].evaluate?"'+__a("+m+")+'":"'+__a(__p["+g+"].fn(data."+m+"))+'";break}a=l+k.length}),j+="';",console.log(j);try{this.fn=Function(j),this.compiled=!0}catch(h){throw new Error("Failed to build template: "+h)}},a.Template=c}("object"==typeof a&&a||this),!function(){}("object"==typeof a&&a||this);var d=/['\n\r\t\u2028\u2029\\]/g,e={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},f=Array.prototype.slice,g=c.prototype;g.setSource=function(a){return this.source=a,this},g.getSource=function(){return this.source},g.render=function(a,b){return this.compiled||this.compile(),this.fn.call("object"==typeof b&&null!==b?b:this,this.processors,a)},g.registerProcessor=function(a,b){return this.processors.push({matcher:a instanceof RegExp?a.source:a,evaluate:"undefined"==typeof b,fn:b}),this},g.compile=function(){for(var a=0,c=this.processors,e=c.length,g="";e>a;a++)g+=c[a].matcher+"|";g+="$";try{g=new RegExp(g,"g")}catch(h){throw new Error("Error on compile preprocessors")}a=0;var i=this.source,j='var __a=function(v){return typeof v==="string"?v:""},__p=arguments[0],data=arguments[1]||{};return \'';i.replace(g,function(){var g=0,h=f.call(arguments),k=h.shift(),l=(h.pop(),h.pop()),m=!1;for(j+=i.slice(a,l).replace(d,b);e>g;g++)if(h[g]){m=h[g],j+=c[g].evaluate?"'+__a("+m+")+'":"'+__a(__p["+g+"].fn(data."+m+"))+'";break}a=l+k.length}),j+="';";try{this.fn=Function(j),this.compiled=!0}catch(h){throw new Error("Failed to build template: "+h)}},a.Template=c}("object"==typeof exports&&exports||this);