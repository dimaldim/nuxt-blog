(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{217:function(t,e,n){var content=n(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("5a3d24f7",content,!0,{sourceMap:!1})},221:function(t,e,n){"use strict";var o=n(8),l={props:{post:{type:Object,required:!1,default:null}},data:function(){return{editedPost:this.post?Object(o.a)({},this.post):{author:"",title:"",thumbnail:"",content:"",previewText:""}}},methods:{onSave:function(){this.$emit("submit",this.editedPost)},onCancel:function(){this.$router.push("/admin")}}},r=n(2),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSave(e)}}},[n("AppControlInput",{model:{value:t.editedPost.author,callback:function(e){t.$set(t.editedPost,"author",e)},expression:"editedPost.author"}},[t._v("Author Name")]),t._v(" "),n("AppControlInput",{model:{value:t.editedPost.title,callback:function(e){t.$set(t.editedPost,"title",e)},expression:"editedPost.title"}},[t._v("Title")]),t._v(" "),n("AppControlInput",{model:{value:t.editedPost.thumbnail,callback:function(e){t.$set(t.editedPost,"thumbnail",e)},expression:"editedPost.thumbnail"}},[t._v("Thumbnail Link")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.content,callback:function(e){t.$set(t.editedPost,"content",e)},expression:"editedPost.content"}},[t._v("Content")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.previewText,callback:function(e){t.$set(t.editedPost,"previewText",e)},expression:"editedPost.previewText"}},[t._v("Preview Text")]),t._v(" "),n("AppButton",{attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),n("AppButton",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"cancel"},on:{click:t.onCancel}},[t._v("Cancel")])],1)},[],!1,null,null,null);e.a=component.exports},230:function(t,e,n){"use strict";var o=n(217);n.n(o).a},231:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,".new-post-form[data-v-b8881608]{width:90%;margin:20px auto}@media (min-width:768px){.new-post-form[data-v-b8881608]{width:500px}}",""])},243:function(t,e,n){"use strict";n.r(e);var o={middleware:["auth","check-auth"],layout:"admin",components:{AdminPostForm:n(221).a},methods:{onSubmitted:function(t){var e=this;this.$store.dispatch("posts/addPost",t).then(function(){e.$router.push("/admin")})}}},l=(n(230),n(2)),component=Object(l.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"admin-new-post-page"},[e("section",{staticClass:"new-post-form"},[e("AdminPostForm",{on:{submit:this.onSubmitted}})],1)])},[],!1,null,"b8881608",null);e.default=component.exports}}]);