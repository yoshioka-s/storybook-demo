(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(n,t,o){"use strict";var e={name:"MyButton",props:{type:{type:String,default:"info"},rounded:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0}},computed:{classes:function(){var n={"my-button":!0,rounded:this.rounded,shadow:this.shadow};return n[this.type]=!0,n}}},a=(o(613),o(412)),r=Object(a.a)(e,function(){var n=this.$createElement;return(this._self._c||n)("button",{class:this.classes},[this._t("default")],2)},[],!1,null,"3c8ef042",null);r.options.__file="MyButton.vue";t.a=r.exports},158:function(n,t,o){var e=o(614);"string"==typeof e&&(e=[[n.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(616)(e,a);e.locals&&(n.exports=e.locals)},413:function(n,t,o){o(163),o(414),n.exports=o(415)},415:function(n,t,o){"use strict";o.r(t),function(n){var t=o(159),e=o(95),a=o(409);e.default.use(a.a),Object(t.configure)(function(){o(426)},n)}.call(this,o(262)(n))},426:function(n,t,o){"use strict";o.r(t),function(n){o(95);var t=o(159),e=o(410),a=o(136);Object(t.storiesOf)("atoms/MyButton",n).addDecorator(e.a).add("type: info",function(){return{components:{MyButton:a.a},template:'<my-button type="info">info</my-button>'}}).add("type: danger",function(){return{components:{MyButton:a.a},template:'<my-button type="danger">Danger</my-button>'}}).add("rouded: true",function(){return{components:{MyButton:a.a},template:'<my-button :rounded="true">rounded</my-button>'}}).add("shadow: false",function(){return{components:{MyButton:a.a},template:'<my-button :shadow="false">without shadow</my-button>'}})}.call(this,o(262)(n))},613:function(n,t,o){"use strict";var e=o(158);o.n(e).a},614:function(n,t,o){(n.exports=o(615)(!1)).push([n.i,"\n.my-button[data-v-3c8ef042] {\n  font-size: 16px;\n  text-align: center;\n  height: auto;\n  display: inline-block;\n  padding: 15px 0;\n  text-decoration: none;\n  color: #FFFFFF;\n  border-radius: 7px;\n  transition: all .4s ease;\n  width: 270px;\n  border-bottom: solid 4px;\n  cursor: pointer;\n}\n.my-button[data-v-3c8ef042]:hover {\n    transition: all .4s ease;\n}\n.my-button.danger[data-v-3c8ef042] {\n    background-color: #ff3f43;\n    border-color: #ff3f43;\n}\n.my-button.danger[data-v-3c8ef042]:hover {\n      background: #e6393c;\n      border-color: #e6393c;\n}\n.my-button.info[data-v-3c8ef042] {\n    background-color: #90CBD8;\n    border-color: #90CBD8;\n}\n.my-button.info[data-v-3c8ef042]:hover {\n      background: #82b7c2;\n      border-color: #82b7c2;\n}\n.my-button.rounded[data-v-3c8ef042] {\n    border-radius: 23px;\n}\n.my-button.shadow[data-v-3c8ef042]:hover {\n    padding: 17px 0 13px;\n}\n.my-button.shadow.danger[data-v-3c8ef042] {\n    border-bottom-color: #cc3236;\n}\n.my-button.shadow.danger[data-v-3c8ef042]:hover {\n      border-bottom-color: #e6393c;\n}\n.my-button.shadow.info[data-v-3c8ef042] {\n    border-bottom-color: #73a2ad;\n}\n.my-button.shadow.info[data-v-3c8ef042]:hover {\n      border-bottom-color: #82b7c2;\n}\n",""])}},[[413,2,4]]]);
//# sourceMappingURL=iframe.fe68d8ef86d69d01b8fd.bundle.js.map