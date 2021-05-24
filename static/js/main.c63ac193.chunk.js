(this["webpackJsonpbook-search-app"]=this["webpackJsonpbook-search-app"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},34:function(e,t){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),s=n(12),i=n.n(s),r=(n(19),n(2)),c=n(3),l=n(5),u=n(4),b=n(0),h=function(e){return Object(b.jsx)("div",{className:"book-card",children:Object(b.jsxs)("a",{href:e.infolink,target:"_blank",alt:"Redirect link to Google Play Books",children:[Object(b.jsx)("img",{src:e.image,alt:"Book thumbnail cover"}),Object(b.jsxs)("div",{className:"desc",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Title:"})," ",e.title]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Author:"})," ",e.author]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Published Date: "}),"0000"===e.published?"Not Available":e.published.substring(0,4)]})]})]})})},d=function(e){return Object(b.jsx)("div",{className:"BookGroup",children:Object(b.jsx)("div",{className:"book-list",children:e.books.map((function(e,t){return Object(b.jsx)(h,{image:e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,author:e.volumeInfo.authors,published:e.volumeInfo.publishedDate,infolink:e.volumeInfo.infoLink},t)}))})})},j=n(14),p=(n(21),function(e){return Object(b.jsx)("div",{className:"navbar",children:Object(b.jsxs)("div",{className:"navbar-container container",children:[Object(b.jsxs)("div",{className:"navbar-icon",children:["Book Search App\xa0",Object(b.jsx)(j.a,{})]}),Object(b.jsx)("div",{className:"navbar-form",children:Object(b.jsxs)("form",{onSubmit:e.searchBook,children:[Object(b.jsx)("input",{type:"text",onChange:e.handleSearch,placeholder:"Enter Title",alt:"Book search input",required:!0}),Object(b.jsx)("button",{type:"submit",alt:"Submit button",children:"Search"}),Object(b.jsxs)("select",{defaultValue:"Sort",onChange:e.handleSort,alt:"Sort button for date and title",children:[Object(b.jsx)("option",{disabled:!0,value:"Sort",children:"Sort"}),Object(b.jsx)("option",{value:"Newest",children:"Newest"}),Object(b.jsx)("option",{value:"Oldest",children:"Oldest"}),Object(b.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(b.jsx)("option",{value:"Z-A",children:"Z-A"})]})]})})]})})}),m=n(13),v=n.n(m),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).searchBook=function(e){e.preventDefault(),v.a.get("https://www.googleapis.com/books/v1/volumes").query({q:o.state.searchField}).then((function(e){var t=o.replaceData(e);o.setState({books:t})}))},o.handleSearch=function(e){o.setState({searchField:e.target.value})},o.handleSort=function(e){o.setState({sort:e.target.value})},o.replaceData=function(e){return e.body.items.map((function(e){return!1===e.volumeInfo.hasOwnProperty("publishedDate")&&(e.volumeInfo.publishedDate="0000"),!1===e.volumeInfo.hasOwnProperty("imageLinks")&&(e.volumeInfo.imageLinks={thumbnail:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}),e}))},o.state={books:[],searchField:"",sort:""},o}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.books.sort((function(t,n){return"Newest"===e.state.sort?parseInt(n.volumeInfo.publishedDate.substring(0,4))-parseInt(t.volumeInfo.publishedDate.substring(0,4)):"Oldest"===e.state.sort?parseInt(t.volumeInfo.publishedDate.substring(0,4))-parseInt(n.volumeInfo.publishedDate.substring(0,4)):"A-Z"===e.state.sort?t.volumeInfo.title.localeCompare(n.volumeInfo.title):"Z-A"===e.state.sort?n.volumeInfo.title.localeCompare(t.volumeInfo.title):void 0}));return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{searchBook:this.searchBook,handleSearch:this.handleSearch,handleSort:this.handleSort,handleSubmit:this.handleSubmit}),Object(b.jsx)(d,{books:t})]})}}]),n}(o.Component),O=(n(40),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(f,{})})}}]),n}(o.Component));i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.c63ac193.chunk.js.map