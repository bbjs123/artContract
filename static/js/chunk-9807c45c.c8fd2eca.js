(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9807c45c"],{"01d8":function(e,t,n){},"0d11":function(e,t,n){e.exports=n.p+"static/img/balance.d4922b14.png"},1148:function(e,t,n){"use strict";var r=n("a691"),c=n("1d80");e.exports="".repeat||function(e){var t=String(c(this)),n="",a=r(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(n+=t);return n}},2869:function(e,t,n){"use strict";n("01d8")},"37f9":function(e,t,n){"use strict";n.r(t);n("b680"),n("a9e3");var r=n("7a23"),c=n("0d11"),a=n.n(c),o=n("4f01"),i=n.n(o),s=n("d38e"),l=n.n(s),u=n("a9d3"),f=n.n(u),d=n("e661"),b=n.n(d),p=Object(r["U"])("data-v-069a0e5e");Object(r["E"])("data-v-069a0e5e");var O={class:"index-bg"},w={class:"p15"},j={class:"pool-list"},h={class:"pool-item flex-between border-1px-b"},v={class:"pool-left flex-middle"},g=Object(r["l"])("img",{src:a.a},null,-1),x={class:"price"},m={class:"pool-item flex-between border-1px-b"},k={class:"pool-left flex-middle"},C=Object(r["l"])("img",{src:i.a},null,-1),N={class:"price"},I=Object(r["l"])("span",null,"$",-1),A={class:"pool-item flex-between border-1px-b"},M={class:"pool-left flex-middle"},T=Object(r["l"])("img",{src:l.a},null,-1),y={class:"price"},F={class:"pool-item flex-between border-1px-b"},R={class:"pool-left flex-middle"},E=Object(r["l"])("img",{src:f.a},null,-1),_={class:"price"},P={class:"pool-btn flex-between"},S=Object(r["l"])("div",{class:"index-img"},[Object(r["l"])("img",{src:b.a})],-1);Object(r["C"])();var $=p((function(e,t,n,c,a,o){var i=Object(r["I"])("HeadTop"),s=Object(r["I"])("van-swipe-item"),l=Object(r["I"])("van-swipe"),u=Object(r["I"])("van-button");return Object(r["B"])(),Object(r["h"])("div",O,[Object(r["l"])(i,{title:e.$t("index.ART chain")},null,8,["title"]),Object(r["l"])("div",w,[Object(r["l"])(l,{autoplay:3e3,"lazy-render":""},{default:p((function(){return[(Object(r["B"])(!0),Object(r["h"])(r["a"],null,Object(r["H"])(e.images,(function(e){return Object(r["B"])(),Object(r["h"])(s,{key:e},{default:p((function(){return[Object(r["l"])("img",{class:"swiper-img",src:e},null,8,["src"])]})),_:2},1024)})),128))]})),_:1}),Object(r["l"])("div",j,[Object(r["l"])("div",h,[Object(r["l"])("div",v,[g,Object(r["l"])("span",null,Object(r["M"])(e.$t("index.余额")),1)]),Object(r["l"])("div",x,Object(r["M"])(Number(e.balance/Math.pow(10,18)).toFixed(4)),1)]),Object(r["l"])("div",m,[Object(r["l"])("div",k,[C,Object(r["l"])("span",null,Object(r["M"])(e.$t("index.ART价格")),1)]),Object(r["l"])("div",N,[I,Object(r["k"])(Object(r["M"])(e.tokenUsdtPrice),1)])]),Object(r["l"])("div",A,[Object(r["l"])("div",M,[T,Object(r["l"])("span",null,Object(r["M"])(e.$t("index.总ART流动池")),1)]),Object(r["l"])("div",y,Object(r["M"])(e.tokenPool),1)]),Object(r["l"])("div",F,[Object(r["l"])("div",R,[E,Object(r["l"])("span",null,Object(r["M"])(e.$t("index.总BNB流动池")),1)]),Object(r["l"])("div",_,Object(r["M"])(e.wethPool),1)]),Object(r["l"])("div",P,[Object(r["l"])(u,{onClick:e.toSwap,type:"primary"},{default:p((function(){return[Object(r["k"])(Object(r["M"])(e.$t("index.购买ART")),1)]})),_:1},8,["onClick"]),Object(r["l"])(u,{onClick:e.toKline,plain:"",type:"primary"},{default:p((function(){return[Object(r["k"])(Object(r["M"])(e.$t("index.K线行情")),1)]})),_:1},8,["onClick"])])]),S])])})),B=n("5530"),U=n("1da1"),L=(n("96cf"),n("1a2e")),H=n("47e2"),V=n("5502"),G=n("01ea"),K=n("63a1"),D=n("722f"),J=n("a1be"),W=n("353f"),X=n("5e78"),Y={components:{HeadTop:L["a"]},setup:function(){var e=Object(V["b"])(),t=Object(H["b"])(),c=t.t,a=Object(r["F"])({$t:c,address:Object(r["f"])((function(){return e.state.accounts[0]})),web3:Object(r["f"])((function(){return e.state.provider})),artContract:null,artTokenContract:null,routerContract:null,balance:0,artPrice:"0.000",tokenUsdtPrice:"0.0000",tokenPool:"0.0000",wethPool:"0.0000",images:{0:n("571a"),1:n("806f")},initContract:function(){a.artContract=new a.web3.eth.Contract(K,G["a"].ArtAddress),a.artTokenContract=new a.web3.eth.Contract(D,G["a"].TokenAddress),a.routerContract=new a.web3.eth.Contract(J,G["a"].SwapRouter),a.initData()},initData:function(){a.getBalance(),a.getPrice(),a.getReverse()},getBalance:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.artTokenContract.methods.balanceOf(a.address).call();case 2:t=e.sent,a.balance=t;case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getPrice:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=3,a.artContract.methods.usdtAddress().call();case 3:return t=e.sent,n=new a.web3.eth.Contract(D,t),e.next=7,n.methods.decimals().call();case 7:return e.sent,e.next=10,a.routerContract.methods.getAmountsOut("1000000000000000000",[G["a"].TokenAddress,t]).call();case 10:r=e.sent,a.tokenUsdtPrice=Number(r[1]/Math.pow(10,18)).toFixed(4);case 12:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getReverse:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t,n,r,c,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.routerContract.methods.WETH().call();case 2:return t=e.sent,n=new a.web3.eth.Contract(W,G["a"].FactoryAddress),e.next=6,n.methods.getPair(t,G["a"].TokenAddress).call();case 6:return r=e.sent,c=new a.web3.eth.Contract(X,r),e.next=10,c.methods.token0().call();case 10:return o=e.sent,e.next=13,c.methods.getReserves().call();case 13:i=e.sent,o.toLowerCase()==t.toLowerCase()?(a.tokenPool=Number(i._reserve1/Math.pow(10,18)).toFixed(4),a.wethPool=Number(i._reserve0/Math.pow(10,18)).toFixed(4)):(a.tokenPool=Number(i._reserve0/Math.pow(10,18)).toFixed(4),a.wethPool=Number(i._reserve1/Math.pow(10,18)).toFixed(4));case 16:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),toSwap:function(){var e="https://pancakeswap.finance/swap?outputCurrency=".concat(G["a"].TokenAddress);window.location.href=e},toKline:function(){window.location.href="https://dex.guru/token/0xe97364f13fc8f40b0ab372a51b645a648f091483-bsc"}});a.address&&a.initContract(),Object(r["Q"])((function(){return a.address}),(function(e){e&&a.initContract()}));var o=Object(r["N"])(a);return Object(B["a"])({},o)}};n("ee23"),n("2869");Y.render=$,Y.__scopeId="data-v-069a0e5e";t["default"]=Y},"408a":function(e,t,n){var r=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"4f01":function(e,t,n){e.exports=n.p+"static/img/art-price.8542ed01.png"},"571a":function(e,t,n){e.exports=n.p+"static/img/swiper.af0181af.jpg"},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),c=n("5899"),a="["+c+"]",o=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),s=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(i,"")),n}};e.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(e,t,n){var r=n("861d"),c=n("d2bb");e.exports=function(e,t,n){var a,o;return c&&"function"==typeof(a=t.constructor)&&a!==n&&r(o=a.prototype)&&o!==n.prototype&&c(e,o),e}},"806f":function(e,t,n){e.exports=n.p+"static/img/swiper2.f3b91b1e.jpg"},a9d3:function(e,t,n){e.exports=n.p+"static/img/reword.0f092f87.png"},a9e3:function(e,t,n){"use strict";var r=n("83ab"),c=n("da84"),a=n("94ca"),o=n("6eeb"),i=n("5135"),s=n("c6b6"),l=n("7156"),u=n("c04e"),f=n("d039"),d=n("7c73"),b=n("241c").f,p=n("06cf").f,O=n("9bf2").f,w=n("58a8").trim,j="Number",h=c[j],v=h.prototype,g=s(d(v))==j,x=function(e){var t,n,r,c,a,o,i,s,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=w(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+l}for(a=l.slice(2),o=a.length,i=0;i<o;i++)if(s=a.charCodeAt(i),s<48||s>c)return NaN;return parseInt(a,r)}return+l};if(a(j,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var m,k=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof k&&(g?f((function(){v.valueOf.call(n)})):s(n)!=j)?l(new h(x(t)),n,k):x(t)},C=r?b(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;C.length>N;N++)i(h,m=C[N])&&!i(k,m)&&O(k,m,p(h,m));k.prototype=v,v.constructor=k,o(c,j,k)}},b680:function(e,t,n){"use strict";var r=n("23e7"),c=n("a691"),a=n("408a"),o=n("1148"),i=n("d039"),s=1..toFixed,l=Math.floor,u=function(e,t,n){return 0===t?n:t%2===1?u(e,t-1,n*e):u(e*e,t/2,n)},f=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},d=function(e,t,n){var r=-1,c=n;while(++r<6)c+=t*e[r],e[r]=c%1e7,c=l(c/1e7)},b=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=l(r/t),r=r%t*1e7},p=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=String(e[t]);n=""===n?r:n+o.call("0",7-r.length)+r}return n},O=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){s.call({})}));r({target:"Number",proto:!0,forced:O},{toFixed:function(e){var t,n,r,i,s=a(this),l=c(e),O=[0,0,0,0,0,0],w="",j="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(w="-",s=-s),s>1e-21)if(t=f(s*u(2,69,1))-69,n=t<0?s*u(2,-t,1):s/u(2,t,1),n*=4503599627370496,t=52-t,t>0){d(O,0,n),r=l;while(r>=7)d(O,1e7,0),r-=7;d(O,u(10,r,1),0),r=t-1;while(r>=23)b(O,1<<23),r-=23;b(O,1<<r),d(O,1,1),b(O,2),j=p(O)}else d(O,0,n),d(O,1<<-t,0),j=p(O)+o.call("0",l);return l>0?(i=j.length,j=w+(i<=l?"0."+o.call("0",l-i)+j:j.slice(0,i-l)+"."+j.slice(i-l))):j=w+j,j}})},d38e:function(e,t,n){e.exports=n.p+"static/img/flowcell.89994d36.png"},d681:function(e,t,n){},e661:function(e,t,n){e.exports=n.p+"static/img/quan.835b915c.jpg"},ee23:function(e,t,n){"use strict";n("d681")}}]);
//# sourceMappingURL=chunk-9807c45c.c8fd2eca.js.map