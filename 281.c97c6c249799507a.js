"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[281],{8281:(T,y,o)=>{o.r(y),o.d(y,{TyaChatGptModule:()=>w});var a=o(6997),v=o(6366),p=o(4006),d=o(9697),t=o(2963);let m=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ngx-tya-chat-gpt"]],decls:3,vars:0,template:function(e,r){1&e&&(t.TgZ(0,"nb-layout")(1,"nb-layout-column"),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[d.lC,a.Aqw,a.dP_],styles:["[_nghost-%COMP%]{margin:auto}[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}"]}),n})();var l=o(9671);const s=[{path:"",component:m,children:[{path:"chat-gpt",component:(()=>{class n{constructor(){}ngOnInit(){this.domHTML()}domHTML(){let e=19,r=32,g=13.5,b=45;function C(){19==e?(e-=1,Z()):0==e?document.getElementById("btn-content-navbar").style.opacity="1":setTimeout(()=>{Z()},10)}function Z(){e-=1,r>24?(r-=.5,g+=.5,b-=.5):(r=22,g=23.5,b=35),document.getElementById("tya-content").style.width="100vw",document.getElementById("new-chat").style.display="none",document.getElementById("btn-navbar").style.display="none",document.getElementById("tya-navbar").style.width=`${e}vw`,document.getElementById("input-chat").style.left=`${r}vw`,document.getElementById("icon-btn-chat").style.right=`${g}vw`,document.getElementById("btn-send-chat").style.right=`${g}vw`,document.getElementById("info").style.left=`${b}vw`,C()}document.getElementById("btn-send-chat").style.display="none",document.getElementById("btn-navbar").onclick=(0,l.Z)(function*(){C()}),document.getElementById("btn-content-navbar").onclick=(0,l.Z)(function*(){e=19,r=32,g=13.5,b=45,function _(){document.getElementById("btn-content-navbar").style.opacity="0",document.getElementById("tya-navbar").style.width=`${e}vw`,document.getElementById("tya-content").style.width="81vw",document.getElementById("new-chat").style.display="",document.getElementById("btn-navbar").style.display="",document.getElementById("input-chat").style.left=`${r}vw`,document.getElementById("icon-btn-chat").style.right=`${g}vw`,document.getElementById("btn-send-chat").style.right=`${g}vw`,document.getElementById("info").style.left=`${b}vw`}()}),document.getElementById("content-chat").classList.add("placeholder"),document.getElementById("content-chat").textContent="Send a message"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ngx-chat-gpt"]],decls:67,vars:0,consts:[[1,"tya-container"],["id","tya-navbar"],[1,"tya-navbar-top"],["id","new-chat"],[1,"h-new-chat"],[1,"text-new-chat"],["id","btn-navbar"],["icon","layout-outline",1,"icon-nav-left"],[1,"history-chat"],[1,"info-user"],[1,"content-info-user"],["aria-hidden","true",1,"fa","fa-undo","icon-back"],["src","https://chat.openai.com/_next/image?url=https%3A%2F%2Fs.gravatar.com%2Favatar%2F94f2de810bdd522e4bdcbfb0c4e1ae51%3Fs%3D480%26r%3Dpg%26d%3Dhttps%253A%252F%252Fcdn.auth0.com%252Favatars%252Fty.png&w=32&q=75",1,"avatar-user"],["id","tya-content"],["id","btn-content-navbar"],["icon","layout-outline",1,"icon-nav-right"],[1,"text-chat"],[1,"exp-chat"],[1,"row"],[1,"col-md-4"],["icon","sun-outline",1,"icon-samp"],[1,"title-samp"],[1,"samp-content"],["icon","flash-outline",1,"icon-samp"],["icon","alert-triangle-outline",1,"icon-samp"],["id","input-chat"],[1,"col-md-12"],["contenteditable","true","id","content-chat","onfocus","removePlaceholder(this)","onblur","addPlaceholder(this)"],["id","icon-btn-chat","icon","paper-plane-outline",1,"icon-samp"],["id","btn-send-chat"],["aria-hidden","true",1,"fa","fa-paper-plane","show-icon-btn"],["id","info"],["href","https://tya-technologies.github.io/","target","_blank"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t._uU(5,"+"),t.qZA(),t.TgZ(6,"p",5),t._uU(7,"New chat"),t.qZA()(),t.TgZ(8,"div",6),t._UZ(9,"nb-icon",7),t.qZA()(),t._UZ(10,"div",8)(11,"hr"),t.TgZ(12,"div",9)(13,"div",10),t._UZ(14,"i",11),t._uU(15," Tya Technologies Tool "),t.qZA(),t.TgZ(16,"div",10),t._UZ(17,"img",12),t._uU(18," Tya user "),t.qZA()()(),t.TgZ(19,"div",13)(20,"div",14),t._UZ(21,"nb-icon",15),t.qZA(),t.TgZ(22,"h3",16),t._uU(23,"ChatGPT with TYA Technologies"),t.qZA(),t.TgZ(24,"div",17)(25,"div",18)(26,"div",19),t._UZ(27,"nb-icon",20),t.TgZ(28,"p",21),t._uU(29,"Examples"),t.qZA(),t.TgZ(30,"div",22),t._uU(31,' "Explain quantum computing in simple terms" '),t.qZA(),t.TgZ(32,"div",22),t._uU(33,' "Got any creative ideas for a 10 year old\'s birthday?" '),t.qZA(),t.TgZ(34,"div",22),t._uU(35,' "How do I make an HTTP request in Javascript?" '),t.qZA()(),t.TgZ(36,"div",19),t._UZ(37,"nb-icon",23),t.TgZ(38,"p",21),t._uU(39,"Capabilities"),t.qZA(),t.TgZ(40,"div",22),t._uU(41,' "Remembers what user said earlier in the conversation" '),t.qZA(),t.TgZ(42,"div",22),t._uU(43,' "Allows user to provide follow-up corrections" '),t.qZA(),t.TgZ(44,"div",22),t._uU(45,' "Trained to decline inappropriate requests" '),t.qZA()(),t.TgZ(46,"div",19),t._UZ(47,"nb-icon",24),t.TgZ(48,"p",21),t._uU(49,"Limitations"),t.qZA(),t.TgZ(50,"div",22),t._uU(51,' "May occasionally generate incorrect information" '),t.qZA(),t.TgZ(52,"div",22),t._uU(53,' "May occasionally produce harmful instructions or biased content" '),t.qZA(),t.TgZ(54,"div",22),t._uU(55,' "Limited knowledge of world and events after 2021" '),t.qZA()()()(),t.TgZ(56,"div",25)(57,"div",18)(58,"div",26),t._UZ(59,"p",27),t.qZA()(),t._UZ(60,"nb-icon",28),t.TgZ(61,"button",29),t._UZ(62,"i",30),t.qZA()(),t.TgZ(63,"p",31),t._uU(64," Built and developed by TYA Technologies | "),t.TgZ(65,"a",32),t._uU(66,"https://tya-technologies.github.io"),t.qZA()()()())},dependencies:[a.fMN],styles:[".tya-container[_ngcontent-%COMP%]{height:100vh;display:flex;background-position:center center;background-size:cover;height:auto;left:0;min-height:100%;min-width:100%;position:absolute;top:0;width:auto}#tya-navbar[_ngcontent-%COMP%]{width:19vw;height:100vh;background-color:#202123}.tya-navbar-top[_ngcontent-%COMP%]{height:9vh;width:100%}#new-chat[_ngcontent-%COMP%]{width:74%;max-width:74%;height:78%;border-radius:7px;border:solid 1px #4d4d4f;position:relative;top:15%;left:3%}.text-new-chat[_ngcontent-%COMP%]{color:#fff;font-family:Arial,Helvetica,sans-serif;display:inline;position:relative;top:8%;left:10%;font-size:85%}.h-new-chat[_ngcontent-%COMP%]{display:inline;color:#b5b5b6;font-size:140%;position:relative;top:8%;left:7%}#btn-navbar[_ngcontent-%COMP%]{width:17%;max-width:17%;height:78%;border-radius:7px;border:solid 1px #4d4d4f;position:relative;top:-63%;left:80%}#btn-navbar[_ngcontent-%COMP%]:hover{-webkit-backdrop-filter:blur(.15rem);backdrop-filter:blur(.15rem);background-color:#ffffff10}.icon-nav-left[_ngcontent-%COMP%], .icon-nav-right[_ngcontent-%COMP%]{color:#e6e6e7;position:relative;top:25%;left:29%}#tya-content[_ngcontent-%COMP%]{width:81vw;height:100vh;background-color:#343541}#btn-content-navbar[_ngcontent-%COMP%]{width:3.05%;max-width:3.05%;height:7.1%;border-radius:7px;border:solid 1px #5d5d67;position:relative;left:.6%;top:1.2%;opacity:0}#btn-content-navbar[_ngcontent-%COMP%]:hover{-webkit-backdrop-filter:blur(.15rem);backdrop-filter:blur(.15rem);background-color:#ffffff10}.text-chat[_ngcontent-%COMP%]{color:#fff;font-weight:700;text-align:center}.exp-chat[_ngcontent-%COMP%]{width:50vw;height:10rem;margin-left:auto;margin-right:auto;margin-top:3rem}.icon-samp[_ngcontent-%COMP%]{color:#fff;font-size:250%;display:block;margin-left:auto;margin-right:auto}.title-samp[_ngcontent-%COMP%]{color:#fff;margin-top:1rem;text-align:center;font-weight:400;font-size:110%}.samp-content[_ngcontent-%COMP%]{width:100%;border-radius:.3rem;background-color:#3e3f4b;color:#fff;padding:.8rem;font-size:85%;margin-top:1rem;text-align:center}.samp-content[_ngcontent-%COMP%]:hover{background-color:#1f2124}#input-chat[_ngcontent-%COMP%]{width:56vw;position:fixed;left:32vw;bottom:3rem;background-color:#40414f;border-radius:.8rem;max-height:40vh}#content-chat[_ngcontent-%COMP%]{width:97.5%;background-color:#40414f;margin-top:1rem;margin-bottom:1.5rem;margin-left:1rem;border:none;overflow:hidden;outline:none;box-shadow:none;color:#8e8ea0;max-height:35vh;overflow-y:auto}#content-chat[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}#content-chat[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{box-shadow:inset 0 0 60px #bbbbc6;border-radius:6px}#btn-send-chat[_ngcontent-%COMP%]{background-color:#19c37d;outline:none;border:none;width:2rem;height:2rem;position:fixed;bottom:4rem;right:13.5vw;border-radius:.3em}.show-icon-btn[_ngcontent-%COMP%]{color:#fff}#icon-btn-chat[_ngcontent-%COMP%]{position:fixed;bottom:4.5rem;right:13.5vw;color:#6b6c7b}#info[_ngcontent-%COMP%]{position:fixed;bottom:0rem;font-size:.7rem;color:#fff;left:45vw}.history-chat[_ngcontent-%COMP%]{width:96%;height:70.5vh;margin-left:auto;margin-right:auto}hr[_ngcontent-%COMP%]{background-color:#6b6c7b;width:94%}.info-user[_ngcontent-%COMP%]{height:15vh;width:100%;margin-top:-.5rem}.content-info-user[_ngcontent-%COMP%]{height:50%;width:100%;margin-top:.2rem;font-size:1rem;color:#fff;font-weight:300;cursor:pointer;background-color:#19c37d}.icon-back[_ngcontent-%COMP%]{color:#fff;padding-top:2.5vh;padding-bottom:2.5vh;padding-left:1vw;padding-right:1vw}.avatar-user[_ngcontent-%COMP%]{padding-top:1.1vh;padding-bottom:1.1vh;padding-left:1vw}"]}),n})()},{path:"",redirectTo:"create",pathMatch:"full"}]}];let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(s),d.Bz]}),n})();var c=o(8405);let w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h,v.O,p.u5,a.BW0,a.zyh,a.KdK,c.$]}),n})()},9671:(T,y,o)=>{function a(p,d,t,m,l,f,s){try{var h=p[f](s),c=h.value}catch(w){return void t(w)}h.done?d(c):Promise.resolve(c).then(m,l)}function v(p){return function(){var d=this,t=arguments;return new Promise(function(m,l){var f=p.apply(d,t);function s(c){a(f,m,l,s,h,"next",c)}function h(c){a(f,m,l,s,h,"throw",c)}s(void 0)})}}o.d(y,{Z:()=>v})}}]);