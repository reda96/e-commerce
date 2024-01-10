"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[618],{9618:(I,p,a)=>{a.r(p),a.d(p,{AuthModule:()=>E});var g=a(2253),l=a(95),c=a(9397),e=a(4946),d=a(304),f=a(6286),u=a(6814),h=a(707);function _(t,i){1&t&&(e.TgZ(0,"small",30),e._uU(1," This field is required.\n"),e.qZA())}function v(t,i){if(1&t&&(e.TgZ(0,"small",30),e._uU(1),e.qZA()),2&t){const n=e.oxw(2).formEle;e.xp6(1),e.hij(" The minimum length for this field is ",n.errors.minlength.requiredLength," characters.\n")}}function C(t,i){1&t&&(e.TgZ(0,"small",30),e._uU(1," Plaese type email in correct format.\n"),e.qZA())}function T(t,i){1&t&&(e.TgZ(0,"small",30),e._uU(1," passwords do not match"),e.qZA())}function Z(t,i){if(1&t&&(e.TgZ(0,"small",30),e._uU(1),e.qZA()),2&t){const n=e.oxw(3);e.xp6(1),e.hij("\n",n.signupErrorMessage,"")}}function x(t,i){if(1&t&&(e.TgZ(0,"small",30),e._uU(1),e.qZA()),2&t){const n=e.oxw(3);e.xp6(1),e.hij("\n",n.loginErrorMessage,"")}}function A(t,i){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,_,2,0,"small",29),e.YNc(2,v,2,1,"small",29),e.YNc(3,C,2,0,"small",29),e.YNc(4,T,2,0,"small",29),e.YNc(5,Z,2,1,"small",29),e.YNc(6,x,2,1,"small",29),e.qZA()),2&t){const n=e.oxw().formEle;e.xp6(1),e.Q6J("ngIf",n.touched&&(null==n.hasError?null:n.hasError("required"))),e.xp6(1),e.Q6J("ngIf",n.touched&&(null==n.hasError?null:n.hasError("minlength"))),e.xp6(1),e.Q6J("ngIf",n.touched&&(null==n.hasError?null:n.hasError("email"))),e.xp6(1),e.Q6J("ngIf",n.touched&&(null==n.hasError?null:n.hasError("PasswordNoMatch"))),e.xp6(1),e.Q6J("ngIf","signupErrorMessage"==n),e.xp6(1),e.Q6J("ngIf","loginErrorMessage"==n)}}function M(t,i){if(1&t&&e.YNc(0,A,7,6,"div",28),2&t){const n=i.formEle,o=e.oxw();e.Q6J("ngIf",n.invalid&&n.errors&&(n.dirty||n.touched)||o.loginErrorMessage||o.signupErrorMessage)}}const b=function(t){return{"max-height":t}},m=function(t){return{formEle:t}},O=function(){return["/forget-password"]},F=function(){return{formEle:"loginErrorMessage"}},k=function(){return{formEle:"signupErrorMessage"}};let q=(()=>{var t;class i{constructor(o,r,s,J){this.fb=o,this.authservice=r,this.cartService=s,this.router=J,this.activeForm="login"}ngOnInit(){window.scroll(100,100),this.myForm=this.fb.group({email:["",[l.kI.required,l.kI.email]],password:["",[l.kI.required]]}),this.signupForm=this.fb.group({name:["",[l.kI.required]],email:["",[l.kI.required,l.kI.email]],password:["",[l.kI.required,,l.kI.minLength(8)]],passwordConfirm:["",[l.kI.required,o=>y(o,this.signupForm)]]})}login(){this.myForm.valid?this.authservice.logIn(this.myForm.value).pipe((0,c.b)(o=>{sessionStorage.setItem("token",o.token),this.cartService.getCartOfSpecificUser()})).subscribe({next:({})=>{this.router.navigateByUrl("/")},error:o=>{this.loginErrorMessage=o.error.message,this.myForm.reset(),this.myForm.markAllAsTouched()}}):(this.myForm.reset(),this.myForm.markAllAsTouched())}signup(){this.signupForm.valid?this.authservice.signUp(this.signupForm.value).pipe((0,c.b)(o=>{this.cartService.getCartOfSpecificUser()})).subscribe({next:({})=>{this.router.navigateByUrl("/")},error:o=>{console.log(o),this.signupErrorMessage=o.error?.errors[0].msg,this.signupForm.reset(),this.signupForm.markAllAsTouched()}}):(this.signupForm.reset(),this.signupForm.markAllAsTouched())}}return(t=i).\u0275fac=function(o){return new(o||t)(e.Y36(l.qu),e.Y36(d.e),e.Y36(f.N),e.Y36(g.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:66,vars:39,consts:[[1,"bg"],[1,"container",3,"ngStyle"],[2,"text-align","center","padding-top","2rem",3,"click"],["src","/assets/images/logo.png","alt",""],[1,"login-form",2,"padding","2rem",3,"formGroup","click","ngSubmit"],[2,"text-align","center",3,"click"],[1,"form-input","field"],["for","email",1,"form-label"],["autocomplete","false","id","email","placeholder","your email","type","email","pInputText","","formControlName","email",1,"form-control"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["for","float-input1",1,"form-label"],[1,"input-container"],["type","password","placeholder","password","pInputText","","formControlName","password",1,"form-control"],[1,"icon-eye-password","icon-gray","title-xsmall","icon-1"],[1,"mt-2"],[1,"form-check"],["type","checkbox","name","example1",1,"form-check-input"],["for","customCheck",1,"form-check-label"],[3,"routerLink"],[1,"justify-content-center",3,"ngClass"],["pButton","","type","submit",1,"btn","btn-primary"],[1,"signup-form",3,"formGroup","ngClass","ngSubmit"],["for","name",1,"form-label"],["autocomplete","false","type","name","placeholder","full name","pInputText","","formControlName","name",1,"form-control"],["autocomplete","false","type","email","placeholder","your email","pInputText","","formControlName","email",1,"form-control"],["type","password","pInputText","","placeholder","confirm password","formControlName","passwordConfirm",1,"form-control"],[1,"justify-content-center","mt-2"],["errorTemplate",""],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(o,r){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.NdJ("click",function(){return r.activeForm="login"}),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"form",4),e.NdJ("click",function(){return r.activeForm="login"})("ngSubmit",function(){return r.login()}),e.TgZ(5,"h4",5),e.NdJ("click",function(){return r.activeForm="login"}),e._uU(6,"Log in"),e.qZA(),e.TgZ(7,"div",6)(8,"label",7),e._uU(9,"Email "),e.qZA(),e._UZ(10,"input",8),e.qZA(),e.GkF(11,9),e.TgZ(12,"div",6)(13,"label",10),e._uU(14,"Password "),e.qZA(),e.TgZ(15,"div",11),e._UZ(16,"input",12),e.qZA(),e._UZ(17,"div",13),e.GkF(18,9),e.qZA(),e.TgZ(19,"div",14)(20,"div",15),e._UZ(21,"input",16),e.TgZ(22,"label",17),e._uU(23," Remember me "),e.qZA()(),e.TgZ(24,"div")(25,"a",18),e._uU(26," Forgot password? "),e.qZA()()(),e.GkF(27,9),e.TgZ(28,"div",19)(29,"button",20),e._uU(30,"Login"),e.qZA()()(),e.TgZ(31,"form",21),e.NdJ("ngSubmit",function(){return r.signup()}),e.TgZ(32,"h4",5),e.NdJ("click",function(){return r.activeForm="signup"}),e._uU(33,"Sign up"),e.qZA(),e.TgZ(34,"div",6)(35,"label",22),e._uU(36,"Name "),e.qZA(),e._UZ(37,"input",23),e.qZA(),e.GkF(38,9),e.TgZ(39,"div")(40,"div",6)(41,"label",7),e._uU(42,"Email "),e.qZA(),e._UZ(43,"input",24),e.qZA(),e.GkF(44,9),e.qZA(),e.TgZ(45,"div")(46,"div",6)(47,"label",10),e._uU(48,"Password "),e.qZA(),e.TgZ(49,"div",11),e._UZ(50,"input",12),e.qZA(),e._UZ(51,"div",13),e.qZA(),e.GkF(52,9),e.qZA(),e.TgZ(53,"div",6)(54,"label",10),e._uU(55,"Confirm Password "),e.qZA(),e.TgZ(56,"div",11),e._UZ(57,"input",25),e.qZA(),e._UZ(58,"div",13),e.GkF(59,9),e.qZA(),e.GkF(60,9),e.TgZ(61,"div",26)(62,"button",20),e._uU(63,"Sign up"),e.qZA()()(),e.YNc(64,M,1,1,"ng-template",null,27,e.W1O),e.qZA()()),2&o){const s=e.MAs(65);e.xp6(1),e.Q6J("ngStyle",e.VKq(22,b,"signup"==r.activeForm?"90vh":"80vh")),e.xp6(3),e.Q6J("formGroup",r.myForm),e.xp6(7),e.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",e.VKq(24,m,r.myForm.get("email"))),e.xp6(7),e.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",e.VKq(26,m,r.myForm.get("password"))),e.xp6(7),e.Q6J("routerLink",e.DdM(28,O)),e.xp6(2),e.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",e.DdM(29,F)),e.xp6(1),e.Q6J("ngClass",r.loginErrorMessage?"mt-2":"mt-5"),e.xp6(3),e.Q6J("formGroup",r.signupForm)("ngClass","signup"==r.activeForm?"activeForm":""),e.xp6(7),e.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",e.VKq(30,m,r.signupForm.get("name"))),e.xp6(6),e.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",e.VKq(32,m,r.signupForm.get("email"))),e.xp6(8),e.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",e.VKq(34,m,r.signupForm.get("password"))),e.xp6(7),e.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",e.VKq(36,m,r.signupForm.get("passwordConfirm"))),e.xp6(1),e.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",e.DdM(38,k))}},dependencies:[g.rH,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,u.mk,u.O5,u.tP,u.PC,h.Hq],styles:[".bg[_ngcontent-%COMP%]{display:flex;height:100vh;background:#ddd}h4[_ngcontent-%COMP%]{cursor:pointer}h4[_ngcontent-%COMP%]:hover{color:#000}.container[_ngcontent-%COMP%]{padding:0!important;background:#fff;border-radius:10px;width:30%;margin:auto;padding:2rem;overflow-y:hidden;max-height:80vh;box-shadow:1px 1px 3px #333;min-width:300px;transition:ease-in-out .2s}.login-form[_ngcontent-%COMP%]{max-height:50vh}form[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%}.required-msg[_ngcontent-%COMP%]{color:#d00;display:block}input.ng-valid.ng-touched[_ngcontent-%COMP%]{border-color:#4bb543}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:#d00}.signup-form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding-left:2rem;padding-right:2rem}.signup-form[_ngcontent-%COMP%]{color:#aaa;height:80vh;position:relative;top:13vh;background-color:#222;border-top-left-radius:10%;border-top-right-radius:10%;transition:ease 1s}.signup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:.2rem}.signup-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#aaa}.signup-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#222;color:#fff}.signup-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#aaa}.activeForm[_ngcontent-%COMP%]{top:-50vh;background-color:#333;transition:ease 1s}button[_ngcontent-%COMP%]{text-align:center;display:block}"]}),i})();const y=(t,i)=>t.value===i?.value.password?null:{PasswordNoMatch:!0},U=[{path:"login",component:q}];let P=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(U),g.Bz]}),i})();var w=a(8798);let E=(()=>{var t;class i{}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[P,w.m]}),i})()}}]);