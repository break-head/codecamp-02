(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{25772:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return nn}});var r=e(85893),i=e(46829),a=e(67294),o=e(27261),c=e(42731);function u(){var n=(0,o.Z)(["\n  margin: 0px 10px;\n  color: ",";\n  font-weight: ",";\n  cursor: ",";\n"]);return u=function(){return n},n}function d(){var n=(0,o.Z)(["\n  margin: 0px 50px;\n"]);return d=function(){return n},n}c.Z.span(d());var s=c.Z.span(u(),(function(n){return n.isActive?"blue":"black"}),(function(n){return n.isActive?"bold":"normal"}),(function(n){return n.isActive?"none":"pointer"}));function f(n){return(0,r.jsxs)("div",{children:[(0,r.jsx)(s,{onClick:n.onClickPrevPage,children:"<"}),new Array(10).fill(1).map((function(t,e){var i=n.startPage+e;return i<=n.lastPage&&(0,r.jsx)(s,{onClick:n.onClickPage,id:String(i),isActive:i===n.activedPage,children:i},i)})),(0,r.jsx)(s,{onClick:n.onClickNextPage,children:">"})]})}function l(n){var t=(0,a.useState)(1),e=t[0],i=t[1],o=Math.ceil(Number(n.count)/10);return(0,r.jsx)(f,{startPage:n.startPage,lastPage:o,activedPage:e,onClickPage:function(t){var e=Number(t.target.id);i(e),n.refetch({page:e}),history.pushState({page:e},"","?page=".concat(e))},onClickPrevPage:function(){n.startPage<=1||(i(n.startPage-10),n.setStartPage((function(n){return n-10})))},onClickNextPage:function(){n.startPage+10>o||(i(n.startPage+10),n.setStartPage((function(n){return n+10})))}})}var h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9z"}}]},name:"fire",theme:"filled"},g=e(74601),p=function(n,t){return a.createElement(g.Z,Object.assign({},n,{ref:t,icon:h}))};p.displayName="FireFilled";var x=a.forwardRef(p);function v(){var n=(0,o.Z)(["\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: none;\n  margin: 0px 20px;\n  ::placeholder {\n    color: black;\n  }\n"]);return v=function(){return n},n}function b(){var n=(0,o.Z)(["\n  color: black;\n  font-size: 30px;\n  cursor: pointer;\n  :hover {\n    color: gray;\n  }\n"]);return b=function(){return n},n}function w(){var n=(0,o.Z)(["\n  width: 776px;\n  height: 52px;\n  border-radius: 15px;\n  background-color: #fbdf14;\n  padding: 0px 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return w=function(){return n},n}function j(){var n=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return j=function(){return n},n}var Z=c.Z.div(j()),C=c.Z.div(w()),P=(0,c.Z)(x)(b()),k=c.Z.input(v());function y(n){return(0,r.jsx)(Z,{children:(0,r.jsxs)(C,{children:[(0,r.jsx)(P,{}),(0,r.jsx)(k,{placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",onChange:n.onChangeSearchbar})]})})}var m=e(96486),_=e.n(m);function S(n){var t=_().debounce((function(t){n.refetch({search:t}),n.onChangeKeyword(t)}),200);return(0,r.jsx)(y,{onChangeSearchbar:function(n){t(n.target.value)}})}function A(){var n=(0,o.Z)(["\n  float: right;\n  background-color: #ffffff;\n  height: 52px;\n  line-height: 52px;\n  width: 171px;\n  font-size: 16px;\n  margin-top: 40px;\n  border: 1px solid #f2f2f2;\n  border-radius: 10px;\n"]);return A=function(){return n},n}function N(){var n=(0,o.Z)([""]);return N=function(){return n},n}function B(){var n=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-top: 50px;\n"]);return B=function(){return n},n}function M(){var n=(0,o.Z)(["\n  width: 25%;\n  font-size: 18px;\n  font-weight: bold;\n"]);return M=function(){return n},n}function D(){var n=(0,o.Z)(["\n  width: 25%;\n"]);return D=function(){return n},n}function E(){var n=(0,o.Z)(["\n  div:nth-child(1) {\n    width: 10%;\n  }\n  div:nth-child(2) {\n    width: 60%;\n  }\n  div:nth-child(3) {\n    width: 15%;\n  }\n  div:nth-child(4) {\n    width: 15%;\n  }\n  height: 52px;\n  line-height: 52px;\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  border-bottom: 1px solid #bdbd;\n  :hover:not(:nth-of-type(1)) {\n    background-color: lightgray;\n  }\n"]);return E=function(){return n},n}function z(){var n=(0,o.Z)(["\n  width: 1200px;\n  margin-left: 100px;\n  margin-top: 100px;\n  border-top: 1px solid black;\n  padding-top: 20px;\n  /* border-bottom: 1px solid black; */\n"]);return z=function(){return n},n}function K(){var n=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n"]);return K=function(){return n},n}var $=c.Z.div(K()),F=c.Z.div(z()),O=c.Z.div(E()),q=c.Z.div(D()),Q=c.Z.div(M()),R=c.Z.div(B()),T=c.Z.img(N()),X=c.Z.button(A()),I=e(12750);function Y(n){var t,e;return(0,r.jsx)($,{children:(0,r.jsxs)(F,{children:[(0,r.jsx)(S,{refetch:n.refetch,onChangeKeyword:n.onChangeKeyword}),(0,r.jsxs)(O,{children:[(0,r.jsx)(Q,{children:"\ubc88\ud638"}),(0,r.jsx)(Q,{children:"\uc81c\ubaa9"}),(0,r.jsx)(Q,{children:"\uc791\uc131\uc790"}),(0,r.jsx)(Q,{children:"\uc791\uc131\uc77c"})]}),null===(t=n.data)||void 0===t?void 0:t.fetchBoards.map((function(t,e){return(0,r.jsxs)(O,{id:t._id,onClick:n.onClickMoveDetail(t._id),children:[(0,r.jsx)(q,{children:10-e}),(0,r.jsx)(q,{children:t.title}),(0,r.jsx)(q,{children:t.writer}),(0,r.jsx)(q,{children:(0,I._)(t.createdAt)})]},t._id)})),(0,r.jsxs)(R,{children:[(0,r.jsx)(l,{refetch:n.refetch,count:null===(e=n.dataBoardsCount)||void 0===e?void 0:e.fetchBoardsCount,startPage:n.startPage,setStartPage:n.setStartPage}),(0,r.jsxs)(X,{onClick:n.onClickMove,children:[(0,r.jsx)(T,{src:"/images/board/list/write.png"}),"\uac8c\uc2dc\ubb3c \ub4f1\ub85d\ud558\uae30"]})]})]})})}var G=e(22527);function H(){var n=(0,o.Z)(["\n  query fetchBoardsCount {\n    fetchBoardsCount\n  }\n"]);return H=function(){return n},n}function J(){var n=(0,o.Z)(["\n  query fetchBoards($page: Int, $search: String) {\n    fetchBoards(page: $page, search: $search) {\n      _id\n      writer\n      title\n      createdAt\n    }\n  }\n"]);return J=function(){return n},n}var L=(0,G.ZP)(J()),U=(0,G.ZP)(H()),V=e(11163);function W(){var n=(0,i.useQuery)(L),t=n.data,e=n.refetch,o=(0,i.useQuery)(U).data,c=(0,V.useRouter)(),u=(0,a.useState)(1),d=u[0],s=u[1],f=(0,a.useState)(""),l=f[0],h=f[1];return(0,r.jsx)(Y,{data:t,refetch:e,keyword:l,dataBoardsCount:o,startPage:d,setStartPage:s,onClickMove:function(){c.push("/boards/new")},onClickMoveDetail:function(n){return function(){c.push("/boards/".concat(n))}},onChangeKeyword:function(n){h(n)}})}function nn(){return(0,r.jsx)(W,{})}},12750:function(n,t,e){"use strict";function r(n){var t=new Date(n).getFullYear(),e=String(new Date(n).getMonth()+1).padStart(2,"0"),r=new Date(n).getDate();return"".concat(t,"-").concat(e,"-").concat(r)}e.d(t,{_:function(){return r}})},31650:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/boards",function(){return e(25772)}])}},function(n){n.O(0,[662,774,888,179],(function(){return t=31650,n(n.s=t);var t}));var t=n.O();_N_E=t}]);