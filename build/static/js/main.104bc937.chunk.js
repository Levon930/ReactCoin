(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.5c0436d5.png"},26:function(e,t,a){e.exports=a(45)},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),s=(a(31),a(8)),i=a(1),o=(a(32),a(22)),u=a.n(o),m=a(3),p=a.n(m),h=a(7),d=a(9),f=a(10),E=a(13),v=a(12),g=(a(34),a(15)),b=a(23),y=function(){function e(){if(Object(d.a)(this,e),Object.defineProperty(this,N,{writable:!0,value:"https://api.udilia.com/coins/v1"}),e.instance)return e.instance;e.instance=this}return Object(f.a)(e,[{key:"ReaquestData",value:function(){var e=Object(h.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:a});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"get",value:function(e){return this.ReaquestData("".concat(Object(g.a)(this,N)[N],"/").concat(e),"GET")}},{key:"put",value:function(e){return this.ReaquestData("".concat(Object(g.a)(this,N)[N],"/").concat(e),"PUT")}},{key:"post",value:function(e){return this.ReaquestData("".concat(Object(g.a)(this,N)[N],"/").concat(e),"POST")}},{key:"delete",value:function(e){return this.ReaquestData("".concat(Object(g.a)(this,N)[N],"/").concat(e),"DELETE")}}]),e}(),N=Object(b.a)("DOMAIN");y.instance=null;var k=new y,C=(a(35),function(e){var t=e.width,a=e.height;return r.a.createElement("div",{className:"Loading",style:{width:t,height:a}})});C.defaultProps={width:"28px",height:"28px"};var S=C,O=function(e,t){var a=null;return function(n){a&&clearTimeout(a),a=setTimeout((function(){e(n),a=null}),t)}},D=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleChange=function(){var t=Object(h.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.target.value,e.setState({searchQuery:n}),n){t.next=4;break}return t.abrupt("return","");case 4:e.setState({loading:!0}),e.fetchData(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.fetchCur=function(){var t=Object(h.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.get("autocomplete?searchQuery=".concat(a));case 2:n=t.sent,e.setState({searchResults:n,loading:!1});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleRedirect=function(t){e.setState({searchQuery:"",searchResults:[]}),e.props.history.push("/currency/".concat(t))},e.renderSearchRes=function(){var t=e.state,a=t.searchQuery,n=t.loading,c=t.searchResults;return a?c.length>0?r.a.createElement("div",{className:"Search-result-container"},c.map((function(t){return r.a.createElement("div",{key:t.id,className:"Search-result",onClick:function(){e.handleRedirect(t.id)}},t.name," (",t.symbol,")")}))):n?void 0:r.a.createElement("div",{className:"Search-result-container"},r.a.createElement("div",{className:"Search-no-result"},"No results found.")):""},e.state={searchQuery:"",searchResults:[],loading:!1},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.fetchData=O((function(t){return e.fetchCur(t)}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.loading;e.searchResults;return r.a.createElement("div",{className:"Search"},r.a.createElement("span",{className:"Search-icon"}),r.a.createElement("input",{className:"Search-input",type:"text",value:t,placeholder:"Currency name",onChange:this.handleChange}),a&&r.a.createElement("div",{className:"Search-loading"},r.a.createElement(S,{width:"12px",height:"12px"})),this.renderSearchRes())}}]),a}(r.a.Component),j=Object(i.f)(D),P=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{src:u.a,alt:"logo",className:"Header-logo"})),r.a.createElement(j,null))},x=(a(41),a(42),function(e){var t=e.handlePaginationClick,a=e.totalPages,n=e.page;return r.a.createElement("div",{className:"Pagination"},r.a.createElement("button",{className:"Pagination-button",onClick:function(){t("back")},disabled:1===n},"\u2190"),r.a.createElement("span",{className:"Pagination-info"},"page ",n," of ",r.a.createElement("b",null,a)),r.a.createElement("button",{className:"Pagination-button",onClick:function(){t("next")},disabled:n===a},"\u2192"))}),w=a(25),R=function(e){return e>0?r.a.createElement("span",{className:"percent-raised"},e,"% \u2191"):e<0?r.a.createElement("span",{className:"percent-fallen"},e,"% \u2193"):r.a.createElement("span",null,e)},T=Object(i.f)((function(e){var t=e.currencies,a=(e.currenciesGeter,e.SortAlphabet),n=e.SortMany,c=e.history;Object(w.a)(e,["currencies","currenciesGeter","SortAlphabet","SortMany","history"]);return r.a.createElement("div",{className:"Table-container"},r.a.createElement("table",{className:"Table"},r.a.createElement("thead",{className:"Table-head"},r.a.createElement("tr",null,r.a.createElement("th",{onClick:a},"Cryptocurrency"),r.a.createElement("th",{onClick:function(e){n("price")}},"Price"),r.a.createElement("th",{onClick:function(e){n("marketCap")}},"Market Cap"),r.a.createElement("th",{onClick:function(e){n("percentChange24h")}},"24H Change"))),r.a.createElement("tbody",{className:"Table-body"},t.map((function(e){return r.a.createElement("tr",{key:e.id,onClick:function(){c.push("/currency/".concat(e.id))}},r.a.createElement("td",null,r.a.createElement("span",{className:"Table-rank"},e.rank),e.name),r.a.createElement("td",null,r.a.createElement("span",{className:"Table-dollar"},"$"),e.price),r.a.createElement("td",null,r.a.createElement("span",{className:"Table-dollar"},"$",e.marketCap," ")),r.a.createElement("td",null,R(e.percentChange24h)))})))))})),M=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handlePaginationClick=function(t){"next"===t?e.setState((function(e){return{page:e.page+1}}),e.currenciesGeter):e.setState((function(e){return{page:e.page-1}}),e.currenciesGeter)},e.currenciesGeter=Object(h.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.get("cryptocurrencies?page=".concat(e.state.page,"&perPage=20"));case 2:a=t.sent,e.setState({currencies:a.currencies,loading:!1,totalPages:a.totalPages});case 4:case"end":return t.stop()}}),t)}))),e.SortAlphabet=function(){e.setState((function(e){return{currencies:e.currencies.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?-1:a>n?1:void 0}))}}))},e.SortMany=function(t){e.setState((function(e){return{currencies:e.currencies.sort((function(e,a){return parseInt(a[t])-parseInt(e[t])}))}}))},e.state={loading:!0,currencies:[],page:1,error:null,totalPages:0},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.currenciesGeter()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.currencies,n=e.totalPages,c=e.page;return t?r.a.createElement("div",{className:"loading-container"},r.a.createElement(S,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{currencies:a,loading:t,currenciesGeter:this.currenciesGeter,SortAlphabet:this.SortAlphabet,SortMany:this.SortMany}),r.a.createElement(x,{handlePaginationClick:this.handlePaginationClick,totalPages:n,page:c}))}}]),a}(r.a.Component),G=(a(43),function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h1",{className:"NotFound-title"},"Oops! Page not found"),r.a.createElement(s.b,{to:"/",className:"NotFound-link"},"Go to homepage"))}),A=(a(44),function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).getCurrency=Object(h.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match.params.id,t.next=3,k.get("cryptocurrencies/".concat(a));case 3:n=t.sent,console.log(n),e.setState({currency:n,loading:!1});case 6:case"end":return t.stop()}}),t)}))),e.state={currency:{},loading:!0},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.getCurrency()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.getCurrency()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.currency;return t?r.a.createElement("div",{className:"loading-container"}," ",r.a.createElement(S,null)):r.a.createElement("div",{className:"Detail"},r.a.createElement("h1",{className:"Detail-heading"},a.name," (",a.symbol,")"),r.a.createElement("div",{className:"Detail-container"},r.a.createElement("div",{className:"Detail-item"},"Price ",r.a.createElement("span",{className:"Detail-value"},"$ ",a.price)),r.a.createElement("div",{className:"Detail-item"},"Rank ",r.a.createElement("span",{className:"Detail-value"},a.rank)),r.a.createElement("div",{className:"Detail-item"},"24H Change",r.a.createElement("span",{className:"Detail-value"},R(a.percentChange24h))),r.a.createElement("div",{className:"Detail-item"},r.a.createElement("span",{className:"Detail-title"},"Market cap"),r.a.createElement("span",{className:"Detail-dollar"},"$"),a.marketCap),r.a.createElement("div",{className:"Detail-item"},r.a.createElement("span",{className:"Detail-title"},"24H Volume"),r.a.createElement("span",{className:"Detail-dollar"},"$"),a.volume24h),r.a.createElement("div",{className:"Detail-item"},r.a.createElement("span",{className:"Detail-title"},"Total supply"),a.totalSupply)))}}]),a}(r.a.PureComponent));l.a.render(r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:M,exact:!0}),r.a.createElement(i.a,{path:"/currency/:id",component:A}),r.a.createElement(i.a,{component:G})))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.104bc937.chunk.js.map