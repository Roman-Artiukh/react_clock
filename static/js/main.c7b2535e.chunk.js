(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),d=(n(12),n(0)),u=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={today:new Date},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:new Date})}),1e3)}},{key:"componentDidUpdate",value:function(t,e){var n=this.props.clockName,c=t.clockName,a=this.state.today,o=e.today;n!==c&&console.debug("Renamed from ".concat(c," to ").concat(n)),a!==o&&console.info(a.toLocaleTimeString())}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.today,e=this.props.clockName;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:t.toLocaleTimeString()})]})}}]),n}(s.Component);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var m=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},t.timerId=0,t.handleRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.handleLeftClick=function(){t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("contextmenu",this.handleRightClick),document.addEventListener("click",this.handleLeftClick),this.timerId=window.setInterval((function(){t.setState({clockName:h()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleRightClick),document.removeEventListener("click",this.handleLeftClick),window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),e&&Object(d.jsx)(u,{clockName:n})]})}}]),n}(s.Component);a.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c7b2535e.chunk.js.map