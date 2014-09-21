// var SERVER_URL = 'localhost:8000';
// var SERVER_URL = 'grotto.io';
var SERVER_URL = 'kortaggio.github.io/cdn/grotto';

function getScript(url, success) {
  var script = document.createElement('script');
  script.src = url;
  var head = document.getElementsByTagName('head')[0],
  done = false;
  // Attach handlers for all browsers
  script.onload = script.onreadystatechange = function() {
    if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
      done = true;
      success();
      script.onload = script.onreadystatechange = null;
      head.removeChild(script);
    }
  };
  head.appendChild(script);
}
/*! Socket.IO.min.js build:0.9.16, production. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */
var io="undefined"==typeof module?{}:module.exports;(function(){(function(a,b){var c=a;c.version="0.9.16",c.protocol=1,c.transports=[],c.j=[],c.sockets={},c.connect=function(a,d){var e=c.util.parseUri(a),f,g;b&&b.location&&(e.protocol=e.protocol||b.location.protocol.slice(0,-1),e.host=e.host||(b.document?b.document.domain:b.location.hostname),e.port=e.port||b.location.port),f=c.util.uniqueUri(e);var h={host:e.host,secure:"https"==e.protocol,port:e.port||("https"==e.protocol?443:80),query:e.query||""};c.util.merge(h,d);if(h["force new connection"]||!c.sockets[f])g=new c.Socket(h);return!h["force new connection"]&&g&&(c.sockets[f]=g),g=g||c.sockets[f],g.of(e.path.length>1?e.path:"")}})("object"==typeof module?module.exports:this.io={},this),function(a,b){var c=a.util={},d=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,e=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];c.parseUri=function(a){var b=d.exec(a||""),c={},f=14;while(f--)c[e[f]]=b[f]||"";return c},c.uniqueUri=function(a){var c=a.protocol,d=a.host,e=a.port;return"document"in b?(d=d||document.domain,e=e||(c=="https"&&document.location.protocol!=="https:"?443:document.location.port)):(d=d||"localhost",!e&&c=="https"&&(e=443)),(c||"http")+"://"+d+":"+(e||80)},c.query=function(a,b){var d=c.chunkQuery(a||""),e=[];c.merge(d,c.chunkQuery(b||""));for(var f in d)d.hasOwnProperty(f)&&e.push(f+"="+d[f]);return e.length?"?"+e.join("&"):""},c.chunkQuery=function(a){var b={},c=a.split("&"),d=0,e=c.length,f;for(;d<e;++d)f=c[d].split("="),f[0]&&(b[f[0]]=f[1]);return b};var f=!1;c.load=function(a){if("document"in b&&document.readyState==="complete"||f)return a();c.on(b,"load",a,!1)},c.on=function(a,b,c,d){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,d)},c.request=function(a){if(a&&"undefined"!=typeof XDomainRequest&&!c.ua.hasCORS)return new XDomainRequest;if("undefined"!=typeof XMLHttpRequest&&(!a||c.ua.hasCORS))return new XMLHttpRequest;if(!a)try{return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(b){}return null},"undefined"!=typeof window&&c.load(function(){f=!0}),c.defer=function(a){if(!c.ua.webkit||"undefined"!=typeof importScripts)return a();c.load(function(){setTimeout(a,100)})},c.merge=function(b,d,e,f){var g=f||[],h=typeof e=="undefined"?2:e,i;for(i in d)d.hasOwnProperty(i)&&c.indexOf(g,i)<0&&(typeof b[i]!="object"||!h?(b[i]=d[i],g.push(d[i])):c.merge(b[i],d[i],h-1,g));return b},c.mixin=function(a,b){c.merge(a.prototype,b.prototype)},c.inherit=function(a,b){function c(){}c.prototype=b.prototype,a.prototype=new c},c.isArray=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"},c.intersect=function(a,b){var d=[],e=a.length>b.length?a:b,f=a.length>b.length?b:a;for(var g=0,h=f.length;g<h;g++)~c.indexOf(e,f[g])&&d.push(f[g]);return d},c.indexOf=function(a,b,c){for(var d=a.length,c=c<0?c+d<0?0:c+d:c||0;c<d&&a[c]!==b;c++);return d<=c?-1:c},c.toArray=function(a){var b=[];for(var c=0,d=a.length;c<d;c++)b.push(a[c]);return b},c.ua={},c.ua.hasCORS="undefined"!=typeof XMLHttpRequest&&function(){try{var a=new XMLHttpRequest}catch(b){return!1}return a.withCredentials!=undefined}(),c.ua.webkit="undefined"!=typeof navigator&&/webkit/i.test(navigator.userAgent),c.ua.iDevice="undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)}("undefined"!=typeof io?io:module.exports,this),function(a,b){function c(){}a.EventEmitter=c,c.prototype.on=function(a,c){return this.$events||(this.$events={}),this.$events[a]?b.util.isArray(this.$events[a])?this.$events[a].push(c):this.$events[a]=[this.$events[a],c]:this.$events[a]=c,this},c.prototype.addListener=c.prototype.on,c.prototype.once=function(a,b){function d(){c.removeListener(a,d),b.apply(this,arguments)}var c=this;return d.listener=b,this.on(a,d),this},c.prototype.removeListener=function(a,c){if(this.$events&&this.$events[a]){var d=this.$events[a];if(b.util.isArray(d)){var e=-1;for(var f=0,g=d.length;f<g;f++)if(d[f]===c||d[f].listener&&d[f].listener===c){e=f;break}if(e<0)return this;d.splice(e,1),d.length||delete this.$events[a]}else(d===c||d.listener&&d.listener===c)&&delete this.$events[a]}return this},c.prototype.removeAllListeners=function(a){return a===undefined?(this.$events={},this):(this.$events&&this.$events[a]&&(this.$events[a]=null),this)},c.prototype.listeners=function(a){return this.$events||(this.$events={}),this.$events[a]||(this.$events[a]=[]),b.util.isArray(this.$events[a])||(this.$events[a]=[this.$events[a]]),this.$events[a]},c.prototype.emit=function(a){if(!this.$events)return!1;var c=this.$events[a];if(!c)return!1;var d=Array.prototype.slice.call(arguments,1);if("function"==typeof c)c.apply(this,d);else{if(!b.util.isArray(c))return!1;var e=c.slice();for(var f=0,g=e.length;f<g;f++)e[f].apply(this,d)}return!0}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(exports,nativeJSON){function f(a){return a<10?"0"+a:a}function date(a,b){return isFinite(a.valueOf())?a.getUTCFullYear()+"-"+f(a.getUTCMonth()+1)+"-"+f(a.getUTCDate())+"T"+f(a.getUTCHours())+":"+f(a.getUTCMinutes())+":"+f(a.getUTCSeconds())+"Z":null}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i instanceof Date&&(i=date(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)typeof rep[c]=="string"&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict";if(nativeJSON&&nativeJSON.parse)return exports.JSON={parse:nativeJSON.parse,stringify:nativeJSON.stringify};var JSON=exports.JSON={},cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")},JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")}}("undefined"!=typeof io?io:module.exports,typeof JSON!="undefined"?JSON:undefined),function(a,b){var c=a.parser={},d=c.packets=["disconnect","connect","heartbeat","message","json","event","ack","error","noop"],e=c.reasons=["transport not supported","client not handshaken","unauthorized"],f=c.advice=["reconnect"],g=b.JSON,h=b.util.indexOf;c.encodePacket=function(a){var b=h(d,a.type),c=a.id||"",i=a.endpoint||"",j=a.ack,k=null;switch(a.type){case"error":var l=a.reason?h(e,a.reason):"",m=a.advice?h(f,a.advice):"";if(l!==""||m!=="")k=l+(m!==""?"+"+m:"");break;case"message":a.data!==""&&(k=a.data);break;case"event":var n={name:a.name};a.args&&a.args.length&&(n.args=a.args),k=g.stringify(n);break;case"json":k=g.stringify(a.data);break;case"connect":a.qs&&(k=a.qs);break;case"ack":k=a.ackId+(a.args&&a.args.length?"+"+g.stringify(a.args):"")}var o=[b,c+(j=="data"?"+":""),i];return k!==null&&k!==undefined&&o.push(k),o.join(":")},c.encodePayload=function(a){var b="";if(a.length==1)return a[0];for(var c=0,d=a.length;c<d;c++){var e=a[c];b+="\ufffd"+e.length+"\ufffd"+a[c]}return b};var i=/([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;c.decodePacket=function(a){var b=a.match(i);if(!b)return{};var c=b[2]||"",a=b[5]||"",h={type:d[b[1]],endpoint:b[4]||""};c&&(h.id=c,b[3]?h.ack="data":h.ack=!0);switch(h.type){case"error":var b=a.split("+");h.reason=e[b[0]]||"",h.advice=f[b[1]]||"";break;case"message":h.data=a||"";break;case"event":try{var j=g.parse(a);h.name=j.name,h.args=j.args}catch(k){}h.args=h.args||[];break;case"json":try{h.data=g.parse(a)}catch(k){}break;case"connect":h.qs=a||"";break;case"ack":var b=a.match(/^([0-9]+)(\+)?(.*)/);if(b){h.ackId=b[1],h.args=[];if(b[3])try{h.args=b[3]?g.parse(b[3]):[]}catch(k){}}break;case"disconnect":case"heartbeat":}return h},c.decodePayload=function(a){if(a.charAt(0)=="\ufffd"){var b=[];for(var d=1,e="";d<a.length;d++)a.charAt(d)=="\ufffd"?(b.push(c.decodePacket(a.substr(d+1).substr(0,e))),d+=Number(e)+1,e=""):e+=a.charAt(d);return b}return[c.decodePacket(a)]}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b){function c(a,b){this.socket=a,this.sessid=b}a.Transport=c,b.util.mixin(c,b.EventEmitter),c.prototype.heartbeats=function(){return!0},c.prototype.onData=function(a){this.clearCloseTimeout(),(this.socket.connected||this.socket.connecting||this.socket.reconnecting)&&this.setCloseTimeout();if(a!==""){var c=b.parser.decodePayload(a);if(c&&c.length)for(var d=0,e=c.length;d<e;d++)this.onPacket(c[d])}return this},c.prototype.onPacket=function(a){return this.socket.setHeartbeatTimeout(),a.type=="heartbeat"?this.onHeartbeat():(a.type=="connect"&&a.endpoint==""&&this.onConnect(),a.type=="error"&&a.advice=="reconnect"&&(this.isOpen=!1),this.socket.onPacket(a),this)},c.prototype.setCloseTimeout=function(){if(!this.closeTimeout){var a=this;this.closeTimeout=setTimeout(function(){a.onDisconnect()},this.socket.closeTimeout)}},c.prototype.onDisconnect=function(){return this.isOpen&&this.close(),this.clearTimeouts(),this.socket.onDisconnect(),this},c.prototype.onConnect=function(){return this.socket.onConnect(),this},c.prototype.clearCloseTimeout=function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)},c.prototype.clearTimeouts=function(){this.clearCloseTimeout(),this.reopenTimeout&&clearTimeout(this.reopenTimeout)},c.prototype.packet=function(a){this.send(b.parser.encodePacket(a))},c.prototype.onHeartbeat=function(a){this.packet({type:"heartbeat"})},c.prototype.onOpen=function(){this.isOpen=!0,this.clearCloseTimeout(),this.socket.onOpen()},c.prototype.onClose=function(){var a=this;this.isOpen=!1,this.socket.onClose(),this.onDisconnect()},c.prototype.prepareUrl=function(){var a=this.socket.options;return this.scheme()+"://"+a.host+":"+a.port+"/"+a.resource+"/"+b.protocol+"/"+this.name+"/"+this.sessid},c.prototype.ready=function(a,b){b.call(this)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b,c){function d(a){this.options={port:80,secure:!1,document:"document"in c?document:!1,resource:"socket.io",transports:b.transports,"connect timeout":1e4,"try multiple transports":!0,reconnect:!0,"reconnection delay":500,"reconnection limit":Infinity,"reopen delay":3e3,"max reconnection attempts":10,"sync disconnect on unload":!1,"auto connect":!0,"flash policy port":10843,manualFlush:!1},b.util.merge(this.options,a),this.connected=!1,this.open=!1,this.connecting=!1,this.reconnecting=!1,this.namespaces={},this.buffer=[],this.doBuffer=!1;if(this.options["sync disconnect on unload"]&&(!this.isXDomain()||b.util.ua.hasCORS)){var d=this;b.util.on(c,"beforeunload",function(){d.disconnectSync()},!1)}this.options["auto connect"]&&this.connect()}function e(){}a.Socket=d,b.util.mixin(d,b.EventEmitter),d.prototype.of=function(a){return this.namespaces[a]||(this.namespaces[a]=new b.SocketNamespace(this,a),a!==""&&this.namespaces[a].packet({type:"connect"})),this.namespaces[a]},d.prototype.publish=function(){this.emit.apply(this,arguments);var a;for(var b in this.namespaces)this.namespaces.hasOwnProperty(b)&&(a=this.of(b),a.$emit.apply(a,arguments))},d.prototype.handshake=function(a){function f(b){b instanceof Error?(c.connecting=!1,c.onError(b.message)):a.apply(null,b.split(":"))}var c=this,d=this.options,g=["http"+(d.secure?"s":"")+":/",d.host+":"+d.port,d.resource,b.protocol,b.util.query(this.options.query,"t="+ +(new Date))].join("/");if(this.isXDomain()&&!b.util.ua.hasCORS){var h=document.getElementsByTagName("script")[0],i=document.createElement("script");i.src=g+"&jsonp="+b.j.length,h.parentNode.insertBefore(i,h),b.j.push(function(a){f(a),i.parentNode.removeChild(i)})}else{var j=b.util.request();j.open("GET",g,!0),this.isXDomain()&&(j.withCredentials=!0),j.onreadystatechange=function(){j.readyState==4&&(j.onreadystatechange=e,j.status==200?f(j.responseText):j.status==403?c.onError(j.responseText):(c.connecting=!1,!c.reconnecting&&c.onError(j.responseText)))},j.send(null)}},d.prototype.getTransport=function(a){var c=a||this.transports,d;for(var e=0,f;f=c[e];e++)if(b.Transport[f]&&b.Transport[f].check(this)&&(!this.isXDomain()||b.Transport[f].xdomainCheck(this)))return new b.Transport[f](this,this.sessionid);return null},d.prototype.connect=function(a){if(this.connecting)return this;var c=this;return c.connecting=!0,this.handshake(function(d,e,f,g){function h(a){c.transport&&c.transport.clearTimeouts(),c.transport=c.getTransport(a);if(!c.transport)return c.publish("connect_failed");c.transport.ready(c,function(){c.connecting=!0,c.publish("connecting",c.transport.name),c.transport.open(),c.options["connect timeout"]&&(c.connectTimeoutTimer=setTimeout(function(){if(!c.connected){c.connecting=!1;if(c.options["try multiple transports"]){var a=c.transports;while(a.length>0&&a.splice(0,1)[0]!=c.transport.name);a.length?h(a):c.publish("connect_failed")}}},c.options["connect timeout"]))})}c.sessionid=d,c.closeTimeout=f*1e3,c.heartbeatTimeout=e*1e3,c.transports||(c.transports=c.origTransports=g?b.util.intersect(g.split(","),c.options.transports):c.options.transports),c.setHeartbeatTimeout(),h(c.transports),c.once("connect",function(){clearTimeout(c.connectTimeoutTimer),a&&typeof a=="function"&&a()})}),this},d.prototype.setHeartbeatTimeout=function(){clearTimeout(this.heartbeatTimeoutTimer);if(this.transport&&!this.transport.heartbeats())return;var a=this;this.heartbeatTimeoutTimer=setTimeout(function(){a.transport.onClose()},this.heartbeatTimeout)},d.prototype.packet=function(a){return this.connected&&!this.doBuffer?this.transport.packet(a):this.buffer.push(a),this},d.prototype.setBuffer=function(a){this.doBuffer=a,!a&&this.connected&&this.buffer.length&&(this.options.manualFlush||this.flushBuffer())},d.prototype.flushBuffer=function(){this.transport.payload(this.buffer),this.buffer=[]},d.prototype.disconnect=function(){if(this.connected||this.connecting)this.open&&this.of("").packet({type:"disconnect"}),this.onDisconnect("booted");return this},d.prototype.disconnectSync=function(){var a=b.util.request(),c=["http"+(this.options.secure?"s":"")+":/",this.options.host+":"+this.options.port,this.options.resource,b.protocol,"",this.sessionid].join("/")+"/?disconnect=1";a.open("GET",c,!1),a.send(null),this.onDisconnect("booted")},d.prototype.isXDomain=function(){var a=c.location.port||("https:"==c.location.protocol?443:80);return this.options.host!==c.location.hostname||this.options.port!=a},d.prototype.onConnect=function(){this.connected||(this.connected=!0,this.connecting=!1,this.doBuffer||this.setBuffer(!1),this.emit("connect"))},d.prototype.onOpen=function(){this.open=!0},d.prototype.onClose=function(){this.open=!1,clearTimeout(this.heartbeatTimeoutTimer)},d.prototype.onPacket=function(a){this.of(a.endpoint).onPacket(a)},d.prototype.onError=function(a){a&&a.advice&&a.advice==="reconnect"&&(this.connected||this.connecting)&&(this.disconnect(),this.options.reconnect&&this.reconnect()),this.publish("error",a&&a.reason?a.reason:a)},d.prototype.onDisconnect=function(a){var b=this.connected,c=this.connecting;this.connected=!1,this.connecting=!1,this.open=!1;if(b||c)this.transport.close(),this.transport.clearTimeouts(),b&&(this.publish("disconnect",a),"booted"!=a&&this.options.reconnect&&!this.reconnecting&&this.reconnect())},d.prototype.reconnect=function(){function e(){if(a.connected){for(var b in a.namespaces)a.namespaces.hasOwnProperty(b)&&""!==b&&a.namespaces[b].packet({type:"connect"});a.publish("reconnect",a.transport.name,a.reconnectionAttempts)}clearTimeout(a.reconnectionTimer),a.removeListener("connect_failed",f),a.removeListener("connect",f),a.reconnecting=!1,delete a.reconnectionAttempts,delete a.reconnectionDelay,delete a.reconnectionTimer,delete a.redoTransports,a.options["try multiple transports"]=c}function f(){if(!a.reconnecting)return;if(a.connected)return e();if(a.connecting&&a.reconnecting)return a.reconnectionTimer=setTimeout(f,1e3);a.reconnectionAttempts++>=b?a.redoTransports?(a.publish("reconnect_failed"),e()):(a.on("connect_failed",f),a.options["try multiple transports"]=!0,a.transports=a.origTransports,a.transport=a.getTransport(),a.redoTransports=!0,a.connect()):(a.reconnectionDelay<d&&(a.reconnectionDelay*=2),a.connect(),a.publish("reconnecting",a.reconnectionDelay,a.reconnectionAttempts),a.reconnectionTimer=setTimeout(f,a.reconnectionDelay))}this.reconnecting=!0,this.reconnectionAttempts=0,this.reconnectionDelay=this.options["reconnection delay"];var a=this,b=this.options["max reconnection attempts"],c=this.options["try multiple transports"],d=this.options["reconnection limit"];this.options["try multiple transports"]=!1,this.reconnectionTimer=setTimeout(f,this.reconnectionDelay),this.on("connect",f)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b){function c(a,b){this.socket=a,this.name=b||"",this.flags={},this.json=new d(this,"json"),this.ackPackets=0,this.acks={}}function d(a,b){this.namespace=a,this.name=b}a.SocketNamespace=c,b.util.mixin(c,b.EventEmitter),c.prototype.$emit=b.EventEmitter.prototype.emit,c.prototype.of=function(){return this.socket.of.apply(this.socket,arguments)},c.prototype.packet=function(a){return a.endpoint=this.name,this.socket.packet(a),this.flags={},this},c.prototype.send=function(a,b){var c={type:this.flags.json?"json":"message",data:a};return"function"==typeof b&&(c.id=++this.ackPackets,c.ack=!0,this.acks[c.id]=b),this.packet(c)},c.prototype.emit=function(a){var b=Array.prototype.slice.call(arguments,1),c=b[b.length-1],d={type:"event",name:a};return"function"==typeof c&&(d.id=++this.ackPackets,d.ack="data",this.acks[d.id]=c,b=b.slice(0,b.length-1)),d.args=b,this.packet(d)},c.prototype.disconnect=function(){return this.name===""?this.socket.disconnect():(this.packet({type:"disconnect"}),this.$emit("disconnect")),this},c.prototype.onPacket=function(a){function d(){c.packet({type:"ack",args:b.util.toArray(arguments),ackId:a.id})}var c=this;switch(a.type){case"connect":this.$emit("connect");break;case"disconnect":this.name===""?this.socket.onDisconnect(a.reason||"booted"):this.$emit("disconnect",a.reason);break;case"message":case"json":var e=["message",a.data];a.ack=="data"?e.push(d):a.ack&&this.packet({type:"ack",ackId:a.id}),this.$emit.apply(this,e);break;case"event":var e=[a.name].concat(a.args);a.ack=="data"&&e.push(d),this.$emit.apply(this,e);break;case"ack":this.acks[a.ackId]&&(this.acks[a.ackId].apply(this,a.args),delete this.acks[a.ackId]);break;case"error":a.advice?this.socket.onError(a):a.reason=="unauthorized"?this.$emit("connect_failed",a.reason):this.$emit("error",a.reason)}},d.prototype.send=function(){this.namespace.flags[this.name]=!0,this.namespace.send.apply(this.namespace,arguments)},d.prototype.emit=function(){this.namespace.flags[this.name]=!0,this.namespace.emit.apply(this.namespace,arguments)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b,c){function d(a){b.Transport.apply(this,arguments)}a.websocket=d,b.util.inherit(d,b.Transport),d.prototype.name="websocket",d.prototype.open=function(){var a=b.util.query(this.socket.options.query),d=this,e;return e||(e=c.MozWebSocket||c.WebSocket),this.websocket=new e(this.prepareUrl()+a),this.websocket.onopen=function(){d.onOpen(),d.socket.setBuffer(!1)},this.websocket.onmessage=function(a){d.onData(a.data)},this.websocket.onclose=function(){d.onClose(),d.socket.setBuffer(!0)},this.websocket.onerror=function(a){d.onError(a)},this},b.util.ua.iDevice?d.prototype.send=function(a){var b=this;return setTimeout(function(){b.websocket.send(a)},0),this}:d.prototype.send=function(a){return this.websocket.send(a),this},d.prototype.payload=function(a){for(var b=0,c=a.length;b<c;b++)this.packet(a[b]);return this},d.prototype.close=function(){return this.websocket.close(),this},d.prototype.onError=function(a){this.socket.onError(a)},d.prototype.scheme=function(){return this.socket.options.secure?"wss":"ws"},d.check=function(){return"WebSocket"in c&&!("__addTask"in WebSocket)||"MozWebSocket"in c},d.xdomainCheck=function(){return!0},b.transports.push("websocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b){function c(){b.Transport.websocket.apply(this,arguments)}a.flashsocket=c,b.util.inherit(c,b.Transport.websocket),c.prototype.name="flashsocket",c.prototype.open=function(){var a=this,c=arguments;return WebSocket.__addTask(function(){b.Transport.websocket.prototype.open.apply(a,c)}),this},c.prototype.send=function(){var a=this,c=arguments;return WebSocket.__addTask(function(){b.Transport.websocket.prototype.send.apply(a,c)}),this},c.prototype.close=function(){return WebSocket.__tasks.length=0,b.Transport.websocket.prototype.close.call(this),this},c.prototype.ready=function(a,d){function e(){var b=a.options,e=b["flash policy port"],g=["http"+(b.secure?"s":"")+":/",b.host+":"+b.port,b.resource,"static/flashsocket","WebSocketMain"+(a.isXDomain()?"Insecure":"")+".swf"];c.loaded||(typeof WEB_SOCKET_SWF_LOCATION=="undefined"&&(WEB_SOCKET_SWF_LOCATION=g.join("/")),e!==843&&WebSocket.loadFlashPolicyFile("xmlsocket://"+b.host+":"+e),WebSocket.__initialize(),c.loaded=!0),d.call(f)}var f=this;if(document.body)return e();b.util.load(e)},c.check=function(){return typeof WebSocket!="undefined"&&"__initialize"in WebSocket&&!!swfobject?swfobject.getFlashPlayerVersion().major>=10:!1},c.xdomainCheck=function(){return!0},typeof window!="undefined"&&(WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0),b.transports.push("flashsocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports);if("undefined"!=typeof window)var swfobject=function(){function A(){if(t)return;try{var a=i.getElementsByTagName("body")[0].appendChild(Q("span"));a.parentNode.removeChild(a)}catch(b){return}t=!0;var c=l.length;for(var d=0;d<c;d++)l[d]()}function B(a){t?a():l[l.length]=a}function C(b){if(typeof h.addEventListener!=a)h.addEventListener("load",b,!1);else if(typeof i.addEventListener!=a)i.addEventListener("load",b,!1);else if(typeof h.attachEvent!=a)R(h,"onload",b);else if(typeof h.onload=="function"){var c=h.onload;h.onload=function(){c(),b()}}else h.onload=b}function D(){k?E():F()}function E(){var c=i.getElementsByTagName("body")[0],d=Q(b);d.setAttribute("type",e);var f=c.appendChild(d);if(f){var g=0;(function(){if(typeof f.GetVariable!=a){var b=f.GetVariable("$version");b&&(b=b.split(" ")[1].split(","),y.pv=[parseInt(b[0],10),parseInt(b[1],10),parseInt(b[2],10)])}else if(g<10){g++,setTimeout(arguments.callee,10);return}c.removeChild(d),f=null,F()})()}else F()}function F(){var b=m.length;if(b>0)for(var c=0;c<b;c++){var d=m[c].id,e=m[c].callbackFn,f={success:!1,id:d};if(y.pv[0]>0){var g=P(d);if(g)if(S(m[c].swfVersion)&&!(y.wk&&y.wk<312))U(d,!0),e&&(f.success=!0,f.ref=G(d),e(f));else if(m[c].expressInstall&&H()){var h={};h.data=m[c].expressInstall,h.width=g.getAttribute("width")||"0",h.height=g.getAttribute("height")||"0",g.getAttribute("class")&&(h.styleclass=g.getAttribute("class")),g.getAttribute("align")&&(h.align=g.getAttribute("align"));var i={},j=g.getElementsByTagName("param"),k=j.length;for(var l=0;l<k;l++)j[l].getAttribute("name").toLowerCase()!="movie"&&(i[j[l].getAttribute("name")]=j[l].getAttribute("value"));I(h,i,d,e)}else J(g),e&&e(f)}else{U(d,!0);if(e){var n=G(d);n&&typeof n.SetVariable!=a&&(f.success=!0,f.ref=n),e(f)}}}}function G(c){var d=null,e=P(c);if(e&&e.nodeName=="OBJECT")if(typeof e.SetVariable!=a)d=e;else{var f=e.getElementsByTagName(b)[0];f&&(d=f)}return d}function H(){return!u&&S("6.0.65")&&(y.win||y.mac)&&!(y.wk&&y.wk<312)}function I(b,c,d,e){u=!0,r=e||null,s={success:!1,id:d};var g=P(d);if(g){g.nodeName=="OBJECT"?(p=K(g),q=null):(p=g,q=d),b.id=f;if(typeof b.width==a||!/%$/.test(b.width)&&parseInt(b.width,10)<310)b.width="310";if(typeof b.height==a||!/%$/.test(b.height)&&parseInt(b.height,10)<137)b.height="137";i.title=i.title.slice(0,47)+" - Flash Player Installation";var j=y.ie&&y.win?["Active"].concat("").join("X"):"PlugIn",k="MMredirectURL="+h.location.toString().replace(/&/g,"%26")+"&MMplayerType="+j+"&MMdoctitle="+i.title;typeof c.flashvars!=a?c.flashvars+="&"+k:c.flashvars=k;if(y.ie&&y.win&&g.readyState!=4){var l=Q("div");d+="SWFObjectNew",l.setAttribute("id",d),g.parentNode.insertBefore(l,g),g.style.display="none",function(){g.readyState==4?g.parentNode.removeChild(g):setTimeout(arguments.callee,10)}()}L(b,c,d)}}function J(a){if(y.ie&&y.win&&a.readyState!=4){var b=Q("div");a.parentNode.insertBefore(b,a),b.parentNode.replaceChild(K(a),b),a.style.display="none",function(){a.readyState==4?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)}()}else a.parentNode.replaceChild(K(a),a)}function K(a){var c=Q("div");if(y.win&&y.ie)c.innerHTML=a.innerHTML;else{var d=a.getElementsByTagName(b)[0];if(d){var e=d.childNodes;if(e){var f=e.length;for(var g=0;g<f;g++)(e[g].nodeType!=1||e[g].nodeName!="PARAM")&&e[g].nodeType!=8&&c.appendChild(e[g].cloneNode(!0))}}}return c}function L(c,d,f){var g,h=P(f);if(y.wk&&y.wk<312)return g;if(h){typeof c.id==a&&(c.id=f);if(y.ie&&y.win){var i="";for(var j in c)c[j]!=Object.prototype[j]&&(j.toLowerCase()=="data"?d.movie=c[j]:j.toLowerCase()=="styleclass"?i+=' class="'+c[j]+'"':j.toLowerCase()!="classid"&&(i+=" "+j+'="'+c[j]+'"'));var k="";for(var l in d)d[l]!=Object.prototype[l]&&(k+='<param name="'+l+'" value="'+d[l]+'" />');h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+k+"</object>",n[n.length]=c.id,g=P(c.id)}else{var m=Q(b);m.setAttribute("type",e);for(var o in c)c[o]!=Object.prototype[o]&&(o.toLowerCase()=="styleclass"?m.setAttribute("class",c[o]):o.toLowerCase()!="classid"&&m.setAttribute(o,c[o]));for(var p in d)d[p]!=Object.prototype[p]&&p.toLowerCase()!="movie"&&M(m,p,d[p]);h.parentNode.replaceChild(m,h),g=m}}return g}function M(a,b,c){var d=Q("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)}function N(a){var b=P(a);b&&b.nodeName=="OBJECT"&&(y.ie&&y.win?(b.style.display="none",function(){b.readyState==4?O(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function O(a){var b=P(a);if(b){for(var c in b)typeof b[c]=="function"&&(b[c]=null);b.parentNode.removeChild(b)}}function P(a){var b=null;try{b=i.getElementById(a)}catch(c){}return b}function Q(a){return i.createElement(a)}function R(a,b,c){a.attachEvent(b,c),o[o.length]=[a,b,c]}function S(a){var b=y.pv,c=a.split(".");return c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10)||0,c[2]=parseInt(c[2],10)||0,b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?!0:!1}function T(c,d,e,f){if(y.ie&&y.mac)return;var g=i.getElementsByTagName("head")[0];if(!g)return;var h=e&&typeof e=="string"?e:"screen";f&&(v=null,w=null);if(!v||w!=h){var j=Q("style");j.setAttribute("type","text/css"),j.setAttribute("media",h),v=g.appendChild(j),y.ie&&y.win&&typeof i.styleSheets!=a&&i.styleSheets.length>0&&(v=i.styleSheets[i.styleSheets.length-1]),w=h}y.ie&&y.win?v&&typeof v.addRule==b&&v.addRule(c,d):v&&typeof i.createTextNode!=a&&v.appendChild(i.createTextNode(c+" {"+d+"}"))}function U(a,b){if(!x)return;var c=b?"visible":"hidden";t&&P(a)?P(a).style.visibility=c:T("#"+a,"visibility:"+c)}function V(b){var c=/[\\\"<>\.;]/,d=c.exec(b)!=null;return d&&typeof encodeURIComponent!=a?encodeURIComponent(b):b}var a="undefined",b="object",c="Shockwave Flash",d="ShockwaveFlash.ShockwaveFlash",e="application/x-shockwave-flash",f="SWFObjectExprInst",g="onreadystatechange",h=window,i=document,j=navigator,k=!1,l=[D],m=[],n=[],o=[],p,q,r,s,t=!1,u=!1,v,w,x=!0,y=function(){var f=typeof i.getElementById!=a&&typeof i.getElementsByTagName!=a&&typeof i.createElement!=a,g=j.userAgent.toLowerCase(),l=j.platform.toLowerCase(),m=l?/win/.test(l):/win/.test(g),n=l?/mac/.test(l):/mac/.test(g),o=/webkit/.test(g)?parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,p=!1,q=[0,0,0],r=null;if(typeof j.plugins!=a&&typeof j.plugins[c]==b)r=j.plugins[c].description,r&&(typeof j.mimeTypes==a||!j.mimeTypes[e]||!!j.mimeTypes[e].enabledPlugin)&&(k=!0,p=!1,r=r.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),q[0]=parseInt(r.replace(/^(.*)\..*$/,"$1"),10),q[1]=parseInt(r.replace(/^.*\.(.*)\s.*$/,"$1"),10),q[2]=/[a-zA-Z]/.test(r)?parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof h[["Active"].concat("Object").join("X")]!=a)try{var s=new(window[["Active"].concat("Object").join("X")])(d);s&&(r=s.GetVariable("$version"),r&&(p=!0,r=r.split(" ")[1].split(","),q=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)]))}catch(t){}return{w3:f,pv:q,wk:o,ie:p,win:m,mac:n}}(),z=function(){if(!y.w3)return;(typeof i.readyState!=a&&i.readyState=="complete"||typeof i.readyState==a&&(i.getElementsByTagName("body")[0]||i.body))&&A(),t||(typeof i.addEventListener!=a&&i.addEventListener("DOMContentLoaded",A,!1),y.ie&&y.win&&(i.attachEvent(g,function(){i.readyState=="complete"&&(i.detachEvent(g,arguments.callee),A())}),h==top&&function(){if(t)return;try{i.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}A()}()),y.wk&&function(){if(t)return;if(!/loaded|complete/.test(i.readyState)){setTimeout(arguments.callee,0);return}A()}(),C(A))}(),W=function(){y.ie&&y.win&&window.attachEvent("onunload",function(){var a=o.length;for(var b=0;b<a;b++)o[b][0].detachEvent(o[b][1],o[b][2]);var c=n.length;for(var d=0;d<c;d++)N(n[d]);for(var e in y)y[e]=null;y=null;for(var f in swfobject)swfobject[f]=null;swfobject=null})}();return{registerObject:function(a,b,c,d){if(y.w3&&a&&b){var e={};e.id=a,e.swfVersion=b,e.expressInstall=c,e.callbackFn=d,m[m.length]=e,U(a,!1)}else d&&d({success:!1,id:a})},getObjectById:function(a){if(y.w3)return G(a)},embedSWF:function(c,d,e,f,g,h,i,j,k,l){var m={success:!1,id:d};y.w3&&!(y.wk&&y.wk<312)&&c&&d&&e&&f&&g?(U(d,!1),B(function(){e+="",f+="";var n={};if(k&&typeof k===b)for(var o in k)n[o]=k[o];n.data=c,n.width=e,n.height=f;var p={};if(j&&typeof j===b)for(var q in j)p[q]=j[q];if(i&&typeof i===b)for(var r in i)typeof p.flashvars!=a?p.flashvars+="&"+r+"="+i[r]:p.flashvars=r+"="+i[r];if(S(g)){var s=L(n,p,d);n.id==d&&U(d,!0),m.success=!0,m.ref=s}else{if(h&&H()){n.data=h,I(n,p,d,l);return}U(d,!0)}l&&l(m)})):l&&l(m)},switchOffAutoHideShow:function(){x=!1},ua:y,getFlashPlayerVersion:function(){return{major:y.pv[0],minor:y.pv[1],release:y.pv[2]}},hasFlashPlayerVersion:S,createSWF:function(a,b,c){return y.w3?L(a,b,c):undefined},showExpressInstall:function(a,b,c,d){y.w3&&H()&&I(a,b,c,d)},removeSWF:function(a){y.w3&&N(a)},createCSS:function(a,b,c,d){y.w3&&T(a,b,c,d)},addDomLoadEvent:B,addLoadEvent:C,getQueryParamValue:function(a){var b=i.location.search||i.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);if(a==null)return V(b);var c=b.split("&");for(var d=0;d<c.length;d++)if(c[d].substring(0,c[d].indexOf("="))==a)return V(c[d].substring(c[d].indexOf("=")+1))}return""},expressInstallCallback:function(){if(u){var a=P(f);a&&p&&(a.parentNode.replaceChild(p,a),q&&(U(q,!0),y.ie&&y.win&&(p.style.display="block")),r&&r(s)),u=!1}}}}();(function(){if("undefined"==typeof window||window.WebSocket)return;var a=window.console;if(!a||!a.log||!a.error)a={log:function(){},error:function(){}};if(!swfobject.hasFlashPlayerVersion("10.0.0")){a.error("Flash Player >= 10.0.0 is required.");return}location.protocol=="file:"&&a.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."),WebSocket=function(a,b,c,d,e){var f=this;f.__id=WebSocket.__nextId++,WebSocket.__instances[f.__id]=f,f.readyState=WebSocket.CONNECTING,f.bufferedAmount=0,f.__events={},b?typeof b=="string"&&(b=[b]):b=[],setTimeout(function(){WebSocket.__addTask(function(){WebSocket.__flash.create(f.__id,a,b,c||null,d||0,e||null)})},0)},WebSocket.prototype.send=function(a){if(this.readyState==WebSocket.CONNECTING)throw"INVALID_STATE_ERR: Web Socket connection has not been established";var b=WebSocket.__flash.send(this.__id,encodeURIComponent(a));return b<0?!0:(this.bufferedAmount+=b,!1)},WebSocket.prototype.close=function(){if(this.readyState==WebSocket.CLOSED||this.readyState==WebSocket.CLOSING)return;this.readyState=WebSocket.CLOSING,WebSocket.__flash.close(this.__id)},WebSocket.prototype.addEventListener=function(a,b,c){a in this.__events||(this.__events[a]=[]),this.__events[a].push(b)},WebSocket.prototype.removeEventListener=function(a,b,c){if(!(a in this.__events))return;var d=this.__events[a];for(var e=d.length-1;e>=0;--e)if(d[e]===b){d.splice(e,1);break}},WebSocket.prototype.dispatchEvent=function(a){var b=this.__events[a.type]||[];for(var c=0;c<b.length;++c)b[c](a);var d=this["on"+a.type];d&&d(a)},WebSocket.prototype.__handleEvent=function(a){"readyState"in a&&(this.readyState=a.readyState),"protocol"in a&&(this.protocol=a.protocol);var b;if(a.type=="open"||a.type=="error")b=this.__createSimpleEvent(a.type);else if(a.type=="close")b=this.__createSimpleEvent("close");else{if(a.type!="message")throw"unknown event type: "+a.type;var c=decodeURIComponent(a.message);b=this.__createMessageEvent("message",c)}this.dispatchEvent(b)},WebSocket.prototype.__createSimpleEvent=function(a){if(document.createEvent&&window.Event){var b=document.createEvent("Event");return b.initEvent(a,!1,!1),b}return{type:a,bubbles:!1,cancelable:!1}},WebSocket.prototype.__createMessageEvent=function(a,b){if(document.createEvent&&window.MessageEvent&&!window.opera){var c=document.createEvent("MessageEvent");return c.initMessageEvent("message",!1,!1,b,null,null,window,null),c}return{type:a,data:b,bubbles:!1,cancelable:!1}},WebSocket.CONNECTING=0,WebSocket.OPEN=1,WebSocket.CLOSING=2,WebSocket.CLOSED=3,WebSocket.__flash=null,WebSocket.__instances={},WebSocket.__tasks=[],WebSocket.__nextId=0,WebSocket.loadFlashPolicyFile=function(a){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(a)})},WebSocket.__initialize=function(){if(WebSocket.__flash)return;WebSocket.__swfLocation&&(window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation);if(!window.WEB_SOCKET_SWF_LOCATION){a.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");return}var b=document.createElement("div");b.id="webSocketContainer",b.style.position="absolute",WebSocket.__isFlashLite()?(b.style.left="0px",b.style.top="0px"):(b.style.left="-100px",b.style.top="-100px");var c=document.createElement("div");c.id="webSocketFlash",b.appendChild(c),document.body.appendChild(b),swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:!0,swliveconnect:!0,allowScriptAccess:"always"},null,function(b){b.success||a.error("[WebSocket] swfobject.embedSWF failed")})},WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=document.getElementById("webSocketFlash"),WebSocket.__flash.setCallerUrl(location.href),WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);for(var a=0;a<WebSocket.__tasks.length;++a)WebSocket.__tasks[a]();WebSocket.__tasks=[]},0)},WebSocket.__onFlashEvent=function(){return setTimeout(function(){try{var b=WebSocket.__flash.receiveEvents();for(var c=0;c<b.length;++c)WebSocket.__instances[b[c].webSocketId].__handleEvent(b[c])}catch(d){a.error(d)}},0),!0},WebSocket.__log=function(b){a.log(decodeURIComponent(b))},WebSocket.__error=function(b){a.error(decodeURIComponent(b))},WebSocket.__addTask=function(a){WebSocket.__flash?a():WebSocket.__tasks.push(a)},WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes)return!1;var a=window.navigator.mimeTypes["application/x-shockwave-flash"];return!a||!a.enabledPlugin||!a.enabledPlugin.filename?!1:a.enabledPlugin.filename.match(/flashlite/i)?!0:!1},window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION||(window.addEventListener?window.addEventListener("load",function(){WebSocket.__initialize()},!1):window.attachEvent("onload",function(){WebSocket.__initialize()}))})(),function(a,b,c){function d(a){if(!a)return;b.Transport.apply(this,arguments),this.sendBuffer=[]}function e(){}a.XHR=d,b.util.inherit(d,b.Transport),d.prototype.open=function(){return this.socket.setBuffer(!1),this.onOpen(),this.get(),this.setCloseTimeout(),this},d.prototype.payload=function(a){var c=[];for(var d=0,e=a.length;d<e;d++)c.push(b.parser.encodePacket(a[d]));this.send(b.parser.encodePayload(c))},d.prototype.send=function(a){return this.post(a),this},d.prototype.post=function(a){function d(){this.readyState==4&&(this.onreadystatechange=e,b.posting=!1,this.status==200?b.socket.setBuffer(!1):b.onClose())}function f(){this.onload=e,b.socket.setBuffer(!1)}var b=this;this.socket.setBuffer(!0),this.sendXHR=this.request("POST"),c.XDomainRequest&&this.sendXHR instanceof XDomainRequest?this.sendXHR.onload=this.sendXHR.onerror=f:this.sendXHR.onreadystatechange=d,this.sendXHR.send(a)},d.prototype.close=function(){return this.onClose(),this},d.prototype.request=function(a){var c=b.util.request(this.socket.isXDomain()),d=b.util.query(this.socket.options.query,"t="+ +(new Date));c.open(a||"GET",this.prepareUrl()+d,!0);if(a=="POST")try{c.setRequestHeader?c.setRequestHeader("Content-type","text/plain;charset=UTF-8"):c.contentType="text/plain"}catch(e){}return c},d.prototype.scheme=function(){return this.socket.options.secure?"https":"http"},d.check=function(a,d){try{var e=b.util.request(d),f=c.XDomainRequest&&e instanceof XDomainRequest,g=a&&a.options&&a.options.secure?"https:":"http:",h=c.location&&g!=c.location.protocol;if(e&&(!f||!h))return!0}catch(i){}return!1},d.xdomainCheck=function(a){return d.check(a,!0)}}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b){function c(a){b.Transport.XHR.apply(this,arguments)}a.htmlfile=c,b.util.inherit(c,b.Transport.XHR),c.prototype.name="htmlfile",c.prototype.get=function(){this.doc=new(window[["Active"].concat("Object").join("X")])("htmlfile"),this.doc.open(),this.doc.write("<html></html>"),this.doc.close(),this.doc.parentWindow.s=this;var a=this.doc.createElement("div");a.className="socketio",this.doc.body.appendChild(a),this.iframe=this.doc.createElement("iframe"),a.appendChild(this.iframe);var c=this,d=b.util.query(this.socket.options.query,"t="+ +(new Date));this.iframe.src=this.prepareUrl()+d,b.util.on(window,"unload",function(){c.destroy()})},c.prototype._=function(a,b){a=a.replace(/\\\//g,"/"),this.onData(a);try{var c=b.getElementsByTagName("script")[0];c.parentNode.removeChild(c)}catch(d){}},c.prototype.destroy=function(){if(this.iframe){try{this.iframe.src="about:blank"}catch(a){}this.doc=null,this.iframe.parentNode.removeChild(this.iframe),this.iframe=null,CollectGarbage()}},c.prototype.close=function(){return this.destroy(),b.Transport.XHR.prototype.close.call(this)},c.check=function(a){if(typeof window!="undefined"&&["Active"].concat("Object").join("X")in window)try{var c=new(window[["Active"].concat("Object").join("X")])("htmlfile");return c&&b.Transport.XHR.check(a)}catch(d){}return!1},c.xdomainCheck=function(){return!1},b.transports.push("htmlfile")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(a,b,c){function d(){b.Transport.XHR.apply(this,arguments)}function e(){}a["xhr-polling"]=d,b.util.inherit(d,b.Transport.XHR),b.util.merge(d,b.Transport.XHR),d.prototype.name="xhr-polling",d.prototype.heartbeats=function(){return!1},d.prototype.open=function(){var a=this;return b.Transport.XHR.prototype.open.call(a),!1},d.prototype.get=function(){function b(){this.readyState==4&&(this.onreadystatechange=e,this.status==200?(a.onData(this.responseText),a.get()):a.onClose())}function d(){this.onload=e,this.onerror=e,a.retryCounter=1,a.onData(this.responseText),a.get()}function f(){a.retryCounter++,!a.retryCounter||a.retryCounter>3?a.onClose():a.get()}if(!this.isOpen)return;var a=this;this.xhr=this.request(),c.XDomainRequest&&this.xhr instanceof XDomainRequest?(this.xhr.onload=d,this.xhr.onerror=f):this.xhr.onreadystatechange=b,this.xhr.send(null)},d.prototype.onClose=function(){b.Transport.XHR.prototype.onClose.call(this);if(this.xhr){this.xhr.onreadystatechange=this.xhr.onload=this.xhr.onerror=e;try{this.xhr.abort()}catch(a){}this.xhr=null}},d.prototype.ready=function(a,c){var d=this;b.util.defer(function(){c.call(d)})},b.transports.push("xhr-polling")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(a,b,c){function e(a){b.Transport["xhr-polling"].apply(this,arguments),this.index=b.j.length;var c=this;b.j.push(function(a){c._(a)})}var d=c.document&&"MozAppearance"in c.document.documentElement.style;a["jsonp-polling"]=e,b.util.inherit(e,b.Transport["xhr-polling"]),e.prototype.name="jsonp-polling",e.prototype.post=function(a){function i(){j(),c.socket.setBuffer(!1)}function j(){c.iframe&&c.form.removeChild(c.iframe);try{h=document.createElement('<iframe name="'+c.iframeId+'">')}catch(a){h=document.createElement("iframe"),h.name=c.iframeId}h.id=c.iframeId,c.form.appendChild(h),c.iframe=h}var c=this,d=b.util.query(this.socket.options.query,"t="+ +(new Date)+"&i="+this.index);if(!this.form){var e=document.createElement("form"),f=document.createElement("textarea"),g=this.iframeId="socketio_iframe_"+this.index,h;e.className="socketio",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.display="none",e.target=g,e.method="POST",e.setAttribute("accept-charset","utf-8"),f.name="d",e.appendChild(f),document.body.appendChild(e),this.form=e,this.area=f}this.form.action=this.prepareUrl()+d,j(),this.area.value=b.JSON.stringify(a);try{this.form.submit()}catch(k){}this.iframe.attachEvent?h.onreadystatechange=function(){c.iframe.readyState=="complete"&&i()}:this.iframe.onload=i,this.socket.setBuffer(!0)},e.prototype.get=function(){var a=this,c=document.createElement("script"),e=b.util.query(this.socket.options.query,"t="+ +(new Date)+"&i="+this.index);this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),c.async=!0,c.src=this.prepareUrl()+e,c.onerror=function(){a.onClose()};var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(c,f),this.script=c,d&&setTimeout(function(){var a=document.createElement("iframe");document.body.appendChild(a),document.body.removeChild(a)},100)},e.prototype._=function(a){return this.onData(a),this.isOpen&&this.get(),this},e.prototype.ready=function(a,c){var e=this;if(!d)return c.call(this);b.util.load(function(){c.call(e)})},e.check=function(){return"document"in c},e.xdomainCheck=function(){return!0},b.transports.push("jsonp-polling")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),typeof define=="function"&&define.amd&&define([],function(){return io})})()
getScript('//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', function() {
  /**
   * A simple jQuery plugin for creating animated drilldown menus.
   *
   * @name jQuery Drilldown
   * @version 0.1.4
   * @requires jQuery v1.7+
   * @author Aleksandras Nelkinas
   * @license [MIT]{@link http://opensource.org/licenses/mit-license.php}
   *
   * Copyright (c) 2013 Aleksandras Nelkinas
   */
  ;(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):b(jQuery)})(function(b,g){function f(a,c){this._name=d;this._defaults=e;this.element=a;this.$element=b(a);this.options=b.extend({},e,c);this.init()}var d="drilldown",e;e={event:"click",selector:"a",speed:100,cssClass:{container:d+"-container",root:d+"-root",sub:d+"-sub",back:d+"-back"}};f.prototype={init:function(){var a=this;this.history=[];this.css={"float":"left",width:null};this.$container=this.$element.find("."+this.options.cssClass.container);
  this.$element.on(this.options.event,this.options.selector,function(c){a.handleAction.call(a,c,b(this))})},handleAction:function(a,c){var b=c.nextAll("."+this.options.cssClass.sub),d=!0;b.length?this.down(b):c.closest("."+this.options.cssClass.back).length?this.up():d=!1;d&&"A"===c.prop("tagName")&&a.preventDefault()},down:function(a){var c=this;a.length&&(this.css.width=this.$element.outerWidth(),this.$container.width(2*this.css.width),a=a.clone(!0).removeClass(this.options.cssClass.sub).addClass(this.options.cssClass.root),
  this.$container.append(a),this.animateDrilling(-1*this.css.width,function(){var b=a.prev();c.history.push(b.detach());c.restoreState.call(c,a)}))},up:function(){var a=this,c=this.history.pop();this.css.width=this.$element.outerWidth();this.$container.width(2*this.css.width);this.$container.prepend(c);this.animateDrilling(0,function(){c.next().remove();a.restoreState.call(a,c)})},animateDrilling:function(a,c){var b=this.$container.children("."+this.options.cssClass.root);b.css(this.css);b.first().animate({"margin-left":a},
  this.options.speed,c)},restoreState:function(a){a.css({"float":"",width:""});this.$container.width("auto")}};b.fn[d]=function(a){return this.each(function(){b.data(this,d)||b.data(this,d,new f(this,a))})}});

  // for further down the road
  var namespace="messenger"
  // connects to server
  var socket = io.connect('//'+ document.domain + ':' + location.port + namespace);
  // initialize messages
  var messages = [];
  var user = 'tyler thomas';
  var rec;

  // this executes after response from server is received
  socket.on('initialize_return', function(data) {
    var messages = JSON.parse(data.body);
    for (var i = 0; i < messages.length; i++) {
      $('#grotto .users').append('<li class="message sender">'+messages[i].body+'</li>')
    }
  });

  // submitted on form submit, creates new message with send/reciever, !needs to create notifcation for receiver
  $('form#grotto').submit(function(event) {
    if ($('#entry-box').val()) {
      socket.emit('send_message', {sender: user, receiver: rec, body: $('#entry-box').val()});
      $('#entry-box').val(undefined);
      return false;
    }
  });

  // executes once server confirms message was sent
  socket.on('message_sent', function(msg) {
    $('#grotto .users').append('<li class="message receiver">'+msg.data.body+'</li>')
  });

  for (var i = 0; i < users.users.length; i++) {
    var u = users.users[i].user;
    var usr = '<li><a class="view-msg" href="#" data-name="'+ u.name.first +' '+ u.name.last +'" data-img="'+ u.picture.thumbnail +'"><img src="'+ u.picture.thumbnail +'" /><p class="desc">'+ u.name.first +' '+ u.name.last +'</p></a><ul class="messages"><li class="action-back"><a href="#"><span>&larr;</span> Back</a></li></ul></li>';
    $('#grotto .users').append(usr);
  }

  var options = {
    event: 'click',
    selector: 'a',
    speed: 100,
    cssClass: {
      container: 'middle-container',
      root: 'users',
      sub: 'messages',
      back: 'action-back'
    }
  };
  $('#grotto #drilldown').drilldown(options);
  $('#grotto .view-msg').on('click', function(e) {
    var img = e.currentTarget.getAttribute('data-img');
    var name = e.currentTarget.getAttribute('data-name');
    rec = name;
    socket.emit('initialize',{current_user:user});
    $('#grotto .bottom-container').removeClass('hide');
    $('#grotto #bar-img').attr({src: img});
    $('#grotto #bar-desc').html(name).addClass('title-case');
  })
  $('#grotto .action-back').on('click', function(e) {
    $('#grotto .bottom-container').addClass('hide');
    $('#grotto #bar-img').attr({src: '//'+ SERVER_URL +'/grotto-logo.png'});
    $('#grotto #bar-desc').html('grotto.io').removeClass('title-case');
  });
});

var users = {
  "users": [{
    "user": {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "tyler",
        "last": "thomas"
      },
      "location": {
        "street": "1683 lakeview st",
        "city": "red oak",
        "state": "oklahoma",
        "zip": "37278"
      },
      "email": "tyler.thomas90@example.com",
      "username": "goldenmeercat406",
      "password": "rhonda",
      "salt": "EWEbtZpk",
      "md5": "7d1441abf4c51f014a855ee7674fbc68",
      "sha1": "cc6ccbc5ec1a69d96ed0027e7170542faf60a8a0",
      "sha256": "c14a37bbe154329231c7e5fb507e4a48baed42384676ccf54a12e6bc2dd27b8c",
      "registered": "1310074930",
      "dob": "73157965",
      "phone": "(837)-790-3365",
      "cell": "(754)-754-7536",
      "SSN": "701-95-7583",
      "picture": {
        "large": "http://api.randomuser.me/portraits/men/16.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/16.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/men/16.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "e21b0f94e885d195"
  }, {
    "user": {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "renee",
        "last": "holland"
      },
      "location": {
        "street": "2747 homestead rd",
        "city": "new york",
        "state": "massachusetts",
        "zip": "96977"
      },
      "email": "renee.holland58@example.com",
      "username": "organicswan274",
      "password": "070462",
      "salt": "fESn8hZ0",
      "md5": "c689e0d3d8a021d4152e2e482f437eab",
      "sha1": "6b7b7ce37a00e5836c5bde88b30c9751bd65b306",
      "sha256": "3d0487622238f47db9deec2e68aa65fe11b8d5af20a5f0024b5f5a6035b7d540",
      "registered": "1191733923",
      "dob": "408904945",
      "phone": "(605)-968-9309",
      "cell": "(130)-459-2677",
      "SSN": "287-97-5589",
      "picture": {
        "large": "http://api.randomuser.me/portraits/women/35.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/35.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/women/35.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "d1b13dd11beae8a4"
  }, {
    "user": {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "lynn",
        "last": "wright"
      },
      "location": {
        "street": "5614 w pecan st",
        "city": "north valley",
        "state": "indiana",
        "zip": "78588"
      },
      "email": "lynn.wright37@example.com",
      "username": "smallleopard186",
      "password": "abbott",
      "salt": "Fi069cjR",
      "md5": "d6a426911e84d58aa0eea358b92d85c3",
      "sha1": "7886f3f0cf86b81d22e0b7da6eab5dbd4bf3cc97",
      "sha256": "715e93cc387cce18fe3074658b133c0146eea6571d348e5d251834ad4605caec",
      "registered": "960181772",
      "dob": "177869122",
      "phone": "(960)-602-6666",
      "cell": "(946)-337-4307",
      "SSN": "416-14-1193",
      "picture": {
        "large": "http://api.randomuser.me/portraits/women/51.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/51.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/women/51.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "09ebd686634dd6e2"
  }, {
    "user": {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "kenzi",
        "last": "day"
      },
      "location": {
        "street": "2973 lakeshore rd",
        "city": "henderson",
        "state": "texas",
        "zip": "49892"
      },
      "email": "kenzi.day42@example.com",
      "username": "goldenwolf788",
      "password": "toaster",
      "salt": "dsEoUGZE",
      "md5": "bf4533fc5e46aee14e3de92e25b7ddab",
      "sha1": "6f67ae03070e4cd2f9a20ef477f47466c0344a70",
      "sha256": "fe4c9f2a365d723d0836513aac9029d89898d64237a7323278bb3e8499266f10",
      "registered": "1327529707",
      "dob": "83735957",
      "phone": "(497)-620-8059",
      "cell": "(667)-647-9866",
      "SSN": "303-46-5118",
      "picture": {
        "large": "http://api.randomuser.me/portraits/women/12.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/12.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/women/12.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "ad004ad44d29ea0e"
  }, {
    "user": {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "terrence",
        "last": "peters"
      },
      "location": {
        "street": "7145 cackson st",
        "city": "saginaw",
        "state": "maine",
        "zip": "96516"
      },
      "email": "terrence.peters44@example.com",
      "username": "silvergoose970",
      "password": "jason",
      "salt": "58JdJpEg",
      "md5": "9ab16c928bca0cd669e5a65df1ab861d",
      "sha1": "597d68d2e33defac50ad68a21d1b31058284d89d",
      "sha256": "89e88cd7ace364b7287e1ceb6fa655ea06cd8980cec0a0566546d7e4716b7be4",
      "registered": "1305124290",
      "dob": "79637112",
      "phone": "(800)-116-1225",
      "cell": "(845)-242-2229",
      "SSN": "176-61-9352",
      "picture": {
        "large": "http://api.randomuser.me/portraits/men/76.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/76.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/men/76.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "33a9ab9fa75f8878"
  }, {
    "user": {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "bob",
        "last": "carr"
      },
      "location": {
        "street": "4239 nowlin rd",
        "city": "altoona",
        "state": "ohio",
        "zip": "50566"
      },
      "email": "bob.carr87@example.com",
      "username": "smallpeacock901",
      "password": "figure",
      "salt": "fxVW4oCI",
      "md5": "9214ba2f4e30e2ef5ed8eb0970f26736",
      "sha1": "2eb05672da2c81175420b6a01671fc95a2c82ad4",
      "sha256": "32518c34c87882abe038281ea24e00d139fdda47be0ae91fa55391e49e60e1e7",
      "registered": "1165699105",
      "dob": "342110441",
      "phone": "(280)-847-4526",
      "cell": "(173)-985-6944",
      "SSN": "829-29-8031",
      "picture": {
        "large": "http://api.randomuser.me/portraits/men/91.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/91.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/men/91.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "e3fca34c721c0500"
  }, {
    "user": {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "elijah",
        "last": "bowman"
      },
      "location": {
        "street": "7493 harrison ct",
        "city": "sunnyvale",
        "state": "delaware",
        "zip": "21250"
      },
      "email": "elijah.bowman25@example.com",
      "username": "browngorilla751",
      "password": "nudes",
      "salt": "PbOHXk9n",
      "md5": "84b2f9863ad4fc38027cd299bf4d1a20",
      "sha1": "fd60126beed25f96350d96c15d51a52c4e025a2e",
      "sha256": "862ad56653056a1f6189c5311d1c0d9cdd6a670d54e8c90034a1e0223658c1d2",
      "registered": "1224940800",
      "dob": "407456081",
      "phone": "(745)-194-6535",
      "cell": "(280)-193-4726",
      "SSN": "323-49-3143",
      "picture": {
        "large": "http://api.randomuser.me/portraits/men/50.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/50.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/men/50.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "781d3cbcc53abc42"
  }, {
    "user": {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "dave",
        "last": "cooper"
      },
      "location": {
        "street": "9613 hillcrest rd",
        "city": "dumas",
        "state": "pennsylvania",
        "zip": "53933"
      },
      "email": "dave.cooper15@example.com",
      "username": "bluelion549",
      "password": "dynamite",
      "salt": "OVNI4rHu",
      "md5": "b4eac38076050b3034024b70041ddcfd",
      "sha1": "d41c2d3818f2f8bb5fdd06057719279b613fbace",
      "sha256": "2506021f977eb336e22805e22725cb5ca48dbefa800f4ed663ef2d19cfb278ff",
      "registered": "1030902299",
      "dob": "91541702",
      "phone": "(613)-374-3147",
      "cell": "(820)-802-3777",
      "SSN": "171-39-9159",
      "picture": {
        "large": "http://api.randomuser.me/portraits/men/18.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/18.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/men/18.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "a4c1db160533aec7"
  }, {
    "user": {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "marlene",
        "last": "edwards"
      },
      "location": {
        "street": "9212 mockingbird ln",
        "city": "van alstyne",
        "state": "alaska",
        "zip": "53995"
      },
      "email": "marlene.edwards55@example.com",
      "username": "purpleladybug59",
      "password": "yvonne",
      "salt": "oTD5W2z3",
      "md5": "0c623b8da9130e9a15c0f98ce6d36c21",
      "sha1": "6220c26fcc586198bd124befc61879e0f8cec89f",
      "sha256": "aab3c1c2b139e1ba2a3d7efdb6005b7df50737a1292c990d9eaad052eed118a8",
      "registered": "1227723292",
      "dob": "293721072",
      "phone": "(718)-858-7792",
      "cell": "(629)-848-3862",
      "SSN": "245-58-3909",
      "picture": {
        "large": "http://api.randomuser.me/portraits/women/60.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/60.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/women/60.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "336fde6aaecf59a4"
  }, {
    "user": {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "joe",
        "last": "gomez"
      },
      "location": {
        "street": "6034 white oak dr",
        "city": "eureka",
        "state": "north carolina",
        "zip": "40825"
      },
      "email": "joe.gomez59@example.com",
      "username": "silvercat776",
      "password": "1michael",
      "salt": "qdTOr3jt",
      "md5": "4e18df185788a0c4669a49413a8f7f82",
      "sha1": "495ac78107b6ca30ecdf562213dc4cf7da4c7521",
      "sha256": "5b0616687a517560932fe95c7042e09b876bca453f9997cd88c8a0014496f3fc",
      "registered": "1131957965",
      "dob": "110448786",
      "phone": "(663)-592-7655",
      "cell": "(625)-159-7806",
      "SSN": "800-27-6178",
      "picture": {
        "large": "http://api.randomuser.me/portraits/men/29.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/29.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/men/29.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "780306a716622dab"
  }, {
    "user": {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "dean",
        "last": "george"
      },
      "location": {
        "street": "1889 w 6th st",
        "city": "cincinnati",
        "state": "virginia",
        "zip": "53687"
      },
      "email": "dean.george23@example.com",
      "username": "blackostrich517",
      "password": "buffalo1",
      "salt": "RkiMjn74",
      "md5": "a292f7cdd9b79772fa43936d320d2b65",
      "sha1": "da7c1d0f0691b8383f8bd1b31b5c6735cffcdcef",
      "sha256": "06b564747ccec1ad37d6ce9f17b41aeec8a2d15987c77d8c354c3135e4a729cd",
      "registered": "1305569382",
      "dob": "274854770",
      "phone": "(711)-145-5473",
      "cell": "(356)-223-3819",
      "SSN": "307-88-4876",
      "picture": {
        "large": "http://api.randomuser.me/portraits/men/43.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/43.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/men/43.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "62125225060eebf6"
  }, {
    "user": {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "vicki",
        "last": "allen"
      },
      "location": {
        "street": "3327 hamilton ave",
        "city": "evansville",
        "state": "south carolina",
        "zip": "84028"
      },
      "email": "vicki.allen20@example.com",
      "username": "bluebear725",
      "password": "native",
      "salt": "i0Oh5iq7",
      "md5": "961eaf4aa25d916aa78dbd804fa5d7c5",
      "sha1": "2c694b77b0222f234578f2d93af91a34ce305f9c",
      "sha256": "6cb8421822803613d41aedbd1968d0f1a1bc74f4d8fbff7c7e69caf6607e312e",
      "registered": "1032599154",
      "dob": "482676326",
      "phone": "(446)-566-7050",
      "cell": "(321)-134-5797",
      "SSN": "475-96-3591",
      "picture": {
        "large": "http://api.randomuser.me/portraits/women/18.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/18.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/women/18.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "a50b5fe8990b8568"
  }, {
    "user": {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "aubrey",
        "last": "cruz"
      },
      "location": {
        "street": "5015 eason rd",
        "city": "the colony",
        "state": "massachusetts",
        "zip": "19336"
      },
      "email": "aubrey.cruz69@example.com",
      "username": "bluelion528",
      "password": "shazam",
      "salt": "LKOLUJlB",
      "md5": "01e6d5841e14333d20e8b2826c557f9a",
      "sha1": "69185f81b07963563e88cff464ea5846642ab534",
      "sha256": "611299f905f0697eddc5260b09b09741cb3546cdae1b427e363d741ff4aae7ef",
      "registered": "1123102219",
      "dob": "100853061",
      "phone": "(202)-194-4401",
      "cell": "(610)-583-2686",
      "SSN": "872-29-3618",
      "picture": {
        "large": "http://api.randomuser.me/portraits/women/85.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/85.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/women/85.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "0576d0d60b10d3d9"
  }, {
    "user": {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "victor",
        "last": "steward"
      },
      "location": {
        "street": "8844 dogwood ave",
        "city": "colorado springs",
        "state": "missouri",
        "zip": "85587"
      },
      "email": "victor.steward61@example.com",
      "username": "lazycat988",
      "password": "fairlane",
      "salt": "u6bRJSQH",
      "md5": "f65e4f13d8b184aab983cb06da20caea",
      "sha1": "f06cc97feb2212e7d49dbd0fb8af98dee26adc37",
      "sha256": "be2a9ebcf556fc0612292f66341eaedbecf2359528bc15b5b6c7ac7737a9466a",
      "registered": "1139606378",
      "dob": "233005690",
      "phone": "(762)-494-3360",
      "cell": "(604)-551-7399",
      "SSN": "602-60-2544",
      "picture": {
        "large": "http://api.randomuser.me/portraits/men/0.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/0.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/men/0.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "65865c3f3ac24266"
  }, {
    "user": {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "chris",
        "last": "berry"
      },
      "location": {
        "street": "4282 spring st",
        "city": "altoona",
        "state": "georgia",
        "zip": "37009"
      },
      "email": "chris.berry71@example.com",
      "username": "tinyrabbit366",
      "password": "turbo",
      "salt": "xpFIRYJk",
      "md5": "2c2bf5c313563444c08eab3a50897efd",
      "sha1": "605c1b4fc1ba15f7d8df94140f727a2e6f9b8055",
      "sha256": "d445d5300c8ec728b2399d7fc4cf40a294fac7bdec5bdb5945bfa3ceac556174",
      "registered": "1337958788",
      "dob": "409788025",
      "phone": "(538)-696-9529",
      "cell": "(581)-259-7915",
      "SSN": "823-16-7822",
      "picture": {
        "large": "http://api.randomuser.me/portraits/men/41.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/41.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/men/41.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "2f89b56276b8e1b2"
  }, {
    "user": {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "paul",
        "last": "cunningham"
      },
      "location": {
        "street": "3162 groveland terrace",
        "city": "carrollton",
        "state": "utah",
        "zip": "10855"
      },
      "email": "paul.cunningham54@example.com",
      "username": "blackswan672",
      "password": "bookworm",
      "salt": "o148cSqU",
      "md5": "b1799f52d460c7153eed69ee35df4978",
      "sha1": "c9c0a93d95e34c6331b7b3cfb9fbe64feb17e6c2",
      "sha256": "ebf980148dc47ec34b1370b67d0b03050dd7ac991b3197e16a00ef5a7b1c1b4d",
      "registered": "1023029564",
      "dob": "298896631",
      "phone": "(507)-723-1870",
      "cell": "(917)-963-8466",
      "SSN": "869-84-2913",
      "picture": {
        "large": "http://api.randomuser.me/portraits/men/35.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/35.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/men/35.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "896079d441d92318"
  }, {
    "user": {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "rachel",
        "last": "sullivan"
      },
      "location": {
        "street": "7279 e sandy lake rd",
        "city": "duncanville",
        "state": "new jersey",
        "zip": "33542"
      },
      "email": "rachel.sullivan86@example.com",
      "username": "goldenbird855",
      "password": "inferno",
      "salt": "WoaA8tQa",
      "md5": "400fe62102eee849d3467cfdc3f65cca",
      "sha1": "b0ac34783cd385baf2824f1586183e0acd7bab13",
      "sha256": "410794e2cc7225e02e26fbed5de10c78949164d0c7686b67d2c3be0c3268a403",
      "registered": "1213526869",
      "dob": "110328807",
      "phone": "(715)-465-2123",
      "cell": "(367)-599-7457",
      "SSN": "344-55-7345",
      "picture": {
        "large": "http://api.randomuser.me/portraits/women/70.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/70.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/women/70.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "8abac81448cc53a3"
  }, {
    "user": {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "eugene",
        "last": "shelton"
      },
      "location": {
        "street": "4087 smokey ln",
        "city": "denver",
        "state": "kansas",
        "zip": "22899"
      },
      "email": "eugene.shelton89@example.com",
      "username": "yellowrabbit533",
      "password": "ambrose",
      "salt": "Cvmk3WAI",
      "md5": "c8cf538aeae7901a2de9526098162684",
      "sha1": "f86912cb6da10fb7219d42ca1abc629d72063008",
      "sha256": "33096eeb955ef1daad07132c63897c481c860992bbbf0be4087af43759979181",
      "registered": "1134250848",
      "dob": "384971564",
      "phone": "(826)-808-9705",
      "cell": "(916)-411-1379",
      "SSN": "150-74-5812",
      "picture": {
        "large": "http://api.randomuser.me/portraits/men/48.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/48.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/men/48.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "636ea670456c7501"
  }, {
    "user": {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "hazel",
        "last": "jordan"
      },
      "location": {
        "street": "6187 w gray st",
        "city": "albuquerque",
        "state": "massachusetts",
        "zip": "70612"
      },
      "email": "hazel.jordan75@example.com",
      "username": "orangegorilla972",
      "password": "nuts",
      "salt": "b9emw8yZ",
      "md5": "c3ce374674c7479ad7bff3c9b0e32907",
      "sha1": "88319431afd98897972b65183c664e256443d668",
      "sha256": "8eb0dca9b5915a3a3c521d118eba759f039a82310120716aaecd7449b3825be9",
      "registered": "1226428130",
      "dob": "299869464",
      "phone": "(797)-783-9499",
      "cell": "(869)-819-4795",
      "SSN": "117-33-2818",
      "picture": {
        "large": "http://api.randomuser.me/portraits/women/14.jpg",
        "medium": "http://api.randomuser.me/portraits/med/women/14.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/women/14.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "5fc6f821f830bebc"
  }, {
    "user": {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "david",
        "last": "ortiz"
      },
      "location": {
        "street": "3044 railroad st",
        "city": "cleveland",
        "state": "south dakota",
        "zip": "57894"
      },
      "email": "david.ortiz16@example.com",
      "username": "brownkoala281",
      "password": "rommel",
      "salt": "tM8iGMuu",
      "md5": "c404191dd991355a4c6fa70f41997a07",
      "sha1": "332ae846f6da189f79af21ad772921e8d94c29d2",
      "sha256": "757a44c2be95e8f8828fdec1d93e3c7ad0aae5143730971d72db7b09cd66781e",
      "registered": "1158024065",
      "dob": "30955236",
      "phone": "(249)-102-7815",
      "cell": "(115)-243-7029",
      "SSN": "385-23-2715",
      "picture": {
        "large": "http://api.randomuser.me/portraits/men/91.jpg",
        "medium": "http://api.randomuser.me/portraits/med/men/91.jpg",
        "thumbnail": "http://api.randomuser.me/portraits/thumb/men/91.jpg"
      },
      "version": "0.4.1"
    },
    "seed": "107b7b00ecadfe7a"
  }]
}