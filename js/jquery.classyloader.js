!function(e){e.fn.ClassyLoader=function(t){function i(e){return Math.PI/180*e}var n={width:200,height:200,animate:!0,displayOnLoad:!0,percentage:100,speed:1,roundedLine:!0,showRemaining:!0,fontFamily:"Helvetica",fontSize:"50px",showText:!0,diameter:80,fontColor:"rgba(25, 25, 25, 0.6)",lineColor:"rgba(55, 55, 55, 1)",remainingLineColor:"rgba(55, 55, 55, 0.4)",lineWidth:5,start:"left"};t=e.extend({},n,t);var o=e(this);return this.draw=function(e){"undefined"!=typeof e&&(t.percentage=e);var n=o[0].getContext("2d"),r=o.width()/2,a=o.height()/2,l=100,h=0,s=0,c=function(e){var t=i(360)/l;return t*e};n.scale(1,1),n.lineWidth=t.lineWidth,n.strokeStyle=t.lineColour;var d=function(e,i){switch(e=e||c(h),i=i||c(h+1),n.clearRect(0,0,o.width(),o.height()),t.showRemaining===!0&&(n.beginPath(),n.strokeStyle=t.remainingLineColor,n.arc(r,a,t.diameter,0,360),n.stroke(),n.closePath()),n.strokeStyle=t.lineColor,n.beginPath(),t.roundedLine===!0?n.lineCap="round":n.lineCap="butt",t.start){case"top":s=1.5*Math.PI;break;case"bottom":s=.5*Math.PI;break;case"right":s=1*Math.PI;break;case"left":default:s=0}n.arc(r,a,t.diameter,s,i+s),n.stroke(),n.closePath(),t.showText===!0&&(h>0?(n.fillStyle=t.fontColor,n.font=t.fontSize+" "+t.fontFamily,n.textAlign="center",n.textBaseline="middle",n.fillText(h+1+"%",r,a)):(n.fillStyle=t.fontColor,n.font=t.fontSize+" "+t.fontFamily,n.textAlign="center",n.textBaseline="middle",n.fillText(h+"%",r,a)))};setTimeout(function f(){d(c(h),c(h+1)),h+=1,h<t.percentage&&setTimeout(f,t.speed)},t.speed)},this.setPercent=function(e){return t.percentage=e,this},this.getPercent=function(){return t.percentage},this.show=function(){var e=o[0].getContext("2d"),n=o.width()/2,r=o.height()/2;e.scale(1,1),e.lineWidth=t.lineWidth,e.strokeStyle=t.lineColour,e.clearRect(0,0,o.width(),o.height()),e.strokeStyle=t.lineColor,e.beginPath(),e.arc(n,r,t.diameter,0,i(t.percentage/100*360)),e.stroke(),e.closePath(),t.showText===!0&&(e.fillStyle=t.fontColor,e.font=t.fontSize+" "+t.font,e.textAlign="center",e.textBaseline="middle",e.fillText(t.percentage+"%",n,r)),t.showRemaining===!0&&(e.beginPath(),e.strokeStyle=t.remainingLineColor,e.arc(n,r,t.diameter,0,360),e.stroke(),e.closePath())},this.__constructor=function(){return e(this).attr("width",t.width),e(this).attr("height",t.height),t.displayOnLoad===!0&&(t.animate===!0?this.draw():this.show()),this},this.__constructor()}}(jQuery);