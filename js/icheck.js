!function(e){function t(e,t,s){var n=e[0],r=/er/.test(s)?b:/bl/.test(s)?h:f,o=s==g?{checked:n[f],disabled:n[h],indeterminate:"true"==e.attr(b)||"false"==e.attr(v)}:n[r];if(/^(ch|di|in)/.test(s)&&!o)i(e,r);else if(/^(un|en|de)/.test(s)&&o)a(e,r);else if(s==g)for(var d in o)o[d]?i(e,d,!0):a(e,d,!0);else t&&"toggle"!=s||(t||e[x]("ifClicked"),o?n[y]!==u&&a(e,r):i(e,r))}function i(t,i,s){var l=t[0],g=t.parent(),m=i==f,k=i==b,x=i==h,A=k?v:m?p:"enabled",j=n(t,A+r(l[y])),D=n(t,i+r(l[y]));if(l[i]!==!0){if(!s&&i==f&&l[y]==u&&l.name){var P=t.closest("form"),T='input[name="'+l.name+'"]';T=P.length?P.find(T):e(T),T.each(function(){this!==l&&e(this).data(d)&&a(e(this),i)})}k?(l[i]=!0,l[f]&&a(t,f,"force")):(s||(l[i]=!0),m&&l[b]&&a(t,b,!1)),o(t,m,i,s)}l[h]&&n(t,H,!0)&&g.find("."+c).css(H,"default"),g[C](D||n(t,i)||""),g.attr("role")&&!k&&g.attr("aria-"+(x?h:f),"true"),g[w](j||n(t,A)||"")}function a(e,t,i){var a=e[0],s=e.parent(),d=t==f,l=t==b,u=t==h,g=l?v:d?p:"enabled",m=n(e,g+r(a[y])),k=n(e,t+r(a[y]));a[t]!==!1&&(!l&&i&&"force"!=i||(a[t]=!1),o(e,d,g,i)),!a[h]&&n(e,H,!0)&&s.find("."+c).css(H,"pointer"),s[w](k||n(e,t)||""),s.attr("role")&&!l&&s.attr("aria-"+(u?h:f),"false"),s[C](m||n(e,g)||"")}function s(t,i){t.data(d)&&(t.parent().html(t.attr("style",t.data(d).s||"")),i&&t[x](i),t.off(".i").unwrap(),e(A+'[for="'+t[0].id+'"]').add(t.closest(A)).off(".i"))}function n(e,t,i){return e.data(d)?e.data(d).o[t+(i?"":"Class")]:void 0}function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o(e,t,i,a){a||(t&&e[x]("ifToggled"),e[x]("ifChanged")[x]("if"+r(i)))}var d="iCheck",c=d+"-helper",l="checkbox",u="radio",f="checked",p="un"+f,h="disabled",v="determinate",b="in"+v,g="update",y="type",m="click",k="touchbegin.i touchend.i",C="addClass",w="removeClass",x="trigger",A="label",H="cursor",j=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);e.fn[d]=function(n,r){var o='input[type="'+l+'"], input[type="'+u+'"]',p=e(),v=function(t){t.each(function(){var t=e(this);p=t.is(o)?p.add(t):p.add(t.find(o))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(n))return n=n.toLowerCase(),v(this),p.each(function(){var i=e(this);"destroy"==n?s(i,"ifDestroyed"):t(i,!0,n),e.isFunction(r)&&r()});if("object"!=typeof n&&n)return this;var H=e.extend({checkedClass:f,disabledClass:h,indeterminateClass:b,labelHover:!0},n),D=H.handle,P=H.hoverClass||"hover",T=H.focusClass||"focus",F=H.activeClass||"active",I=!!H.labelHover,L=H.labelHoverClass||"hover",M=0|(""+H.increaseArea).replace("%","");return D!=l&&D!=u||(o='input[type="'+D+'"]'),-50>M&&(M=-50),v(this),p.each(function(){var n=e(this);s(n);var r,o=this,p=o.id,v=-M+"%",b=100+2*M+"%",D={position:"absolute",top:v,left:v,display:"block",width:b,height:b,margin:0,padding:0,background:"#fff",border:0,opacity:0},N=j?{position:"absolute",visibility:"hidden"}:M?D:{position:"absolute",opacity:0},Q=o[y]==l?H.checkboxClass||"i"+l:H.radioClass||"i"+u,S=e(A+'[for="'+p+'"]').add(n.closest(A)),U=!!H.aria,Z=d+"-"+Math.random().toString(36).substr(2,6),$='<div class="'+Q+'" '+(U?'role="'+o[y]+'" ':"");U&&S.each(function(){$+='aria-labelledby="',this.id?$+=this.id:(this.id=Z,$+=Z),$+='"'}),$=n.wrap($+"/>")[x]("ifCreated").parent().append(H.insert),r=e('<ins class="'+c+'"/>').css(D).appendTo($),n.data(d,{o:H,s:n.attr("style")}).css(N),!!H.inheritClass&&$[C](o.className||""),!!H.inheritID&&p&&$.attr("id",d+"-"+p),"static"==$.css("position")&&$.css("position","relative"),t(n,!0,g),S.length&&S.on(m+".i mouseover.i mouseout.i "+k,function(i){var a=i[y],s=e(this);if(!o[h]){if(a==m){if(e(i.target).is("a"))return;t(n,!1,!0)}else I&&(/ut|nd/.test(a)?($[w](P),s[w](L)):($[C](P),s[C](L)));if(!j)return!1;i.stopPropagation()}}),n.on(m+".i focus.i blur.i keyup.i keydown.i keypress.i",function(e){var t=e[y],s=e.keyCode;return t==m?!1:"keydown"==t&&32==s?(o[y]==u&&o[f]||(o[f]?a(n,f):i(n,f)),!1):void("keyup"==t&&o[y]==u?!o[f]&&i(n,f):/us|ur/.test(t)&&$["blur"==t?w:C](T))}),r.on(m+" mousedown mouseup mouseover mouseout "+k,function(e){var i=e[y],a=/wn|up/.test(i)?F:P;if(!o[h]){if(i==m?t(n,!1,!0):(/wn|er|in/.test(i)?$[C](a):$[w](a+" "+F),S.length&&I&&a==P&&S[/ut|nd/.test(i)?w:C](L)),!j)return!1;e.stopPropagation()}})})}}(window.jQuery||window.Zepto);