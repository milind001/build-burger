(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[5],{103:function(e,n,r){"use strict";r.r(n);var t=r(10),a=r(11),i=r(13),o=r(12),u=r(0),c=r.n(u),s=r(15),p=r(17),l=(r(99),function(e){var n=e.ingredients,r=e.price,t=[];for(var a in n)t.push({name:a,amount:n[a]});var i=t.map((function(e){return c.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return c.a.createElement("div",{className:"Order"},c.a.createElement("p",null,"Ingredients : ",i),c.a.createElement("p",null,"Price: ",c.a.createElement("strong",null,"$ ",Number.parseFloat(r))))}),d=r(34),m=r(16),f=r(33),h=function(e){Object(i.a)(r,e);var n=Object(o.a)(r);function r(){return Object(t.a)(this,r),n.apply(this,arguments)}return Object(a.a)(r,[{key:"componentDidMount",value:function(){this.props.fetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=c.a.createElement(f.a,null);return this.props.loading||(e=this.props.orders.map((function(e){return c.a.createElement(l,{key:e.id,ingredients:e.ingredients,price:e.price})}))),c.a.createElement("div",null,e)}}]),r}(u.Component);n.default=Object(s.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{fetchOrders:function(n,r){return e(m.d(n,r))}}}))(Object(d.a)(h,p.a))},99:function(e,n,r){}}]);
//# sourceMappingURL=5.458c7947.chunk.js.map