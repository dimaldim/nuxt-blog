(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{218:function(t,e,o){var content=o(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("16d2bbee",content,!0,{sourceMap:!1})},221:function(t,e,o){"use strict";var n=o(8),r={props:{post:{type:Object,required:!1,default:null}},data:function(){return{editedPost:this.post?Object(n.a)({},this.post):{author:"",title:"",thumbnail:"",content:"",previewText:""}}},methods:{onSave:function(){this.$emit("submit",this.editedPost)},onCancel:function(){this.$router.push("/admin")}}},d=o(2),component=Object(d.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.onSave(e)}}},[o("AppControlInput",{model:{value:t.editedPost.author,callback:function(e){t.$set(t.editedPost,"author",e)},expression:"editedPost.author"}},[t._v("Author Name")]),t._v(" "),o("AppControlInput",{model:{value:t.editedPost.title,callback:function(e){t.$set(t.editedPost,"title",e)},expression:"editedPost.title"}},[t._v("Title")]),t._v(" "),o("AppControlInput",{model:{value:t.editedPost.thumbnail,callback:function(e){t.$set(t.editedPost,"thumbnail",e)},expression:"editedPost.thumbnail"}},[t._v("Thumbnail Link")]),t._v(" "),o("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.content,callback:function(e){t.$set(t.editedPost,"content",e)},expression:"editedPost.content"}},[t._v("Content")]),t._v(" "),o("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.previewText,callback:function(e){t.$set(t.editedPost,"previewText",e)},expression:"editedPost.previewText"}},[t._v("Preview Text")]),t._v(" "),o("AppButton",{attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),o("AppButton",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"cancel"},on:{click:t.onCancel}},[t._v("Cancel")])],1)},[],!1,null,null,null);e.a=component.exports},232:function(t,e,o){"use strict";var n=o(218);o.n(n).a},233:function(t,e,o){(t.exports=o(11)(!1)).push([t.i,".update-form[data-v-0fafc185]{width:90%;margin:20px auto}@media (min-width:768px){.update-form[data-v-0fafc185]{width:500px}}",""])},244:function(t,e,o){"use strict";o.r(e);var n=o(8),r=o(221),d=o(108),c=o.n(d),l={middleware:["auth","check-auth"],layout:"admin",components:{AdminPostForm:r.a},asyncData:function(t){return c.a.get("https://nuxt-blog-8c06c.firebaseio.com/posts/"+t.params.postId+".json").then(function(e){return{loadedPost:Object(n.a)({},e.data,{id:t.params.postId})}}).catch(function(e){return t.error(e)})},methods:{onSubmitted:function(t){var e=this;this.$store.dispatch("posts/editPost",t).then(function(){e.$router.push("/admin")})}}},m=(o(232),o(2)),component=Object(m.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"admin-post-page"},[e("section",{staticClass:"update-form"},[e("AdminPostForm",{attrs:{post:this.loadedPost},on:{submit:this.onSubmitted}})],1)])},[],!1,null,"0fafc185",null);e.default=component.exports}}]);