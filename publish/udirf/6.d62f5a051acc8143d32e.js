(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{ZIrV:function(r,e,t){"use strict";t.r(e),t.d(e,"UserModule",(function(){return S}));var o=t("tyNb"),i=t("fXoL");let s=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=i.Db({type:r,selectors:[["app-home"]],decls:12,vars:0,consts:[[1,"container-fluid","d-flex","justify-content-between","flex-wrap","flex-md-nowrap","align-items-center","pb-2","mb-3","border-bottom"],[1,"h2"],[1,"btn-toolbar","mb-2","mb-md-0"],[1,"btn-group","mr-2"],[1,"btn","btn-sm","btn-outline-secondary"],[1,"btn","btn-sm","btn-outline-secondary","dropdown-toggle"],["data-feather","calendar"]],template:function(r,e){1&r&&(i.Ob(0,"div",0),i.Ob(1,"h1",1),i.xc(2,"Dashboard"),i.Nb(),i.Ob(3,"div",2),i.Ob(4,"div",3),i.Ob(5,"button",4),i.xc(6,"Share"),i.Nb(),i.Ob(7,"button",4),i.xc(8,"Export"),i.Nb(),i.Nb(),i.Ob(9,"button",5),i.Kb(10,"span",6),i.xc(11," This week "),i.Nb(),i.Nb(),i.Nb())},styles:[".bg-purple[_ngcontent-%COMP%]{background-color:var(--purple)}"]}),r})();var a=t("3Pt+"),n=t("I/4n"),b=t("5eHb"),c=t("WZwF");const l=function(){return["/register"]};let m=(()=>{class r{constructor(r,e,t,o,i){this.formBuilder=r,this.route=e,this.router=t,this.loginService=o,this.toastrService=i,this.model={},this.loading=!1}ngOnInit(){this.createForm(),this.loginService.logout(),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}createForm(){this.loginForm=this.formBuilder.group({userName:["",a.m.required],password:["",a.m.required],rememberMe:[!1]})}login(r){r.valid?(this.loading=!0,this.loginService.login(r.controls.userName.value,r.controls.password.value).subscribe(r=>{this.loading=!1,this.router.navigate([this.returnUrl])},r=>{this.toastrService.error(r),this.loading=!1})):this.toastrService.error("Please enter valid credentails")}}return r.\u0275fac=function(e){return new(e||r)(i.Jb(a.c),i.Jb(o.a),i.Jb(o.d),i.Jb(n.a),i.Jb(b.b))},r.\u0275cmp=i.Db({type:r,selectors:[["app-login"]],decls:32,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-md-12","min-vh-100","d-flex","flex-column","justify-content-center"],[1,"col-lg-5","col-md-8","mx-auto"],[1,"card"],[1,"card-body"],[1,"float-right","btn","btn-outline-primary",3,"routerLink"],[1,"card-title","mb-4","mt-1"],["novalidate","",3,"formGroup","submit"],[1,"form-group"],["placeholder","Email","type","email","name","username","formControlName","userName",1,"form-control"],[2,"text-align","left",3,"control"],["href","#",1,"float-right",2,"color","#5aaaff"],["placeholder","******","type","password","name","password","formControlName","password",1,"form-control"],[1,"checkbox"],["type","checkbox","name","rememberMe","formControlName","rememberMe"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"]],template:function(r,e){1&r&&(i.Ob(0,"div",0),i.Ob(1,"div",1),i.Ob(2,"div",2),i.Ob(3,"div",1),i.Ob(4,"div",3),i.Ob(5,"div",4),i.Ob(6,"article",5),i.Ob(7,"a",6),i.xc(8,"Sign up"),i.Nb(),i.Ob(9,"h4",7),i.xc(10,"Sign in"),i.Nb(),i.Ob(11,"form",8),i.Vb("submit",(function(){return e.login(e.loginForm)})),i.Ob(12,"div",9),i.Ob(13,"label"),i.xc(14,"Your email"),i.Nb(),i.Kb(15,"input",10),i.Kb(16,"validation-messages",11),i.Nb(),i.Ob(17,"div",9),i.Ob(18,"a",12),i.xc(19,"Forgot?"),i.Nb(),i.Ob(20,"label"),i.xc(21,"Your password"),i.Nb(),i.Kb(22,"input",13),i.Kb(23,"validation-messages",11),i.Nb(),i.Ob(24,"div",9),i.Ob(25,"div",14),i.Ob(26,"label"),i.Kb(27,"input",15),i.xc(28," Remember me "),i.Nb(),i.Nb(),i.Nb(),i.Ob(29,"div",9),i.Ob(30,"button",16),i.xc(31," Login "),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&r&&(i.xb(7),i.cc("routerLink",i.ec(5,l)),i.xb(4),i.cc("formGroup",e.loginForm),i.xb(5),i.cc("control",e.loginForm.controls.userName),i.xb(7),i.cc("control",e.loginForm.controls.password),i.xb(7),i.cc("disabled",e.loginForm.invalid))},directives:[o.f,a.n,a.j,a.e,a.b,a.i,a.d,c.a,a.a],styles:[".bg-purple[_ngcontent-%COMP%]{background-color:var(--purple)}"]}),r})();var d=t("f4AX"),u=t("Vyfh");const p=function(){return["/login"]};let f=(()=>{class r{constructor(r,e,t,o,i){this.formBuilder=r,this.router=e,this.userService=t,this.validationService=o,this.toastrService=i,this.loading=!1}register(){this.loading=!0,this.userService.create(this.registerForm.value).subscribe(r=>{this.toastrService.success("Registration successful"),this.router.navigate(["/login"]),console.log(r)},r=>{this.toastrService.error(r),this.loading=!1})}createForm(){this.registerForm=this.formBuilder.group({firstName:["",a.m.required],lastName:["",a.m.required],username:["",a.m.required],password:["",[a.m.required,a.m.minLength(6)]],confirmPassword:["",a.m.required]},{validator:this.validationService.MustMatch("password","confirmPassword")})}ngOnInit(){this.createForm()}}return r.\u0275fac=function(e){return new(e||r)(i.Jb(a.c),i.Jb(o.d),i.Jb(d.a),i.Jb(u.b),i.Jb(b.b))},r.\u0275cmp=i.Db({type:r,selectors:[["app-register"]],decls:40,vars:9,consts:[[1,"container"],[1,"row"],[1,"col-md-12","min-vh-100","d-flex","flex-column","justify-content-center"],[1,"col-lg-5","col-md-8","mx-auto"],[1,"card"],[1,"card-body"],[1,"float-right","btn","btn-outline-primary",3,"routerLink"],[1,"card-title","mb-4","mt-1"],["novalidate","",3,"formGroup","submit"],[1,"form-group"],["placeholder","First Name","type","text","name","firstName","formControlName","firstName",1,"form-control"],[2,"text-align","left",3,"control"],["name","lastName","placeholder","Last Name","type","text","formControlName","lastName",1,"form-control"],["placeholder","Email","type","email","name","username","formControlName","username",1,"form-control"],["type","password","name","password","formControlName","password",1,"form-control"],["type","password","name","confirmPassword","formControlName","confirmPassword",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"]],template:function(r,e){1&r&&(i.Ob(0,"div",0),i.Ob(1,"div",1),i.Ob(2,"div",2),i.Ob(3,"div",1),i.Ob(4,"div",3),i.Ob(5,"div",4),i.Ob(6,"article",5),i.Ob(7,"a",6),i.xc(8,"Sign in"),i.Nb(),i.Ob(9,"h4",7),i.xc(10,"Register"),i.Nb(),i.Ob(11,"form",8),i.Vb("submit",(function(){return e.register()})),i.Ob(12,"div",9),i.Ob(13,"label"),i.xc(14,"First Name"),i.Nb(),i.Kb(15,"input",10),i.Kb(16,"validation-messages",11),i.Nb(),i.Ob(17,"div",9),i.Ob(18,"label"),i.xc(19,"Last Name"),i.Nb(),i.Kb(20,"input",12),i.Kb(21,"validation-messages",11),i.Nb(),i.Ob(22,"div",9),i.Ob(23,"label"),i.xc(24,"Your email"),i.Nb(),i.Kb(25,"input",13),i.Kb(26,"validation-messages",11),i.Nb(),i.Ob(27,"div",9),i.Ob(28,"label"),i.xc(29,"Your password"),i.Nb(),i.Kb(30,"input",14),i.Kb(31,"validation-messages",11),i.Nb(),i.Ob(32,"div",9),i.Ob(33,"label"),i.xc(34,"Confirm password"),i.Nb(),i.Kb(35,"input",15),i.Kb(36,"validation-messages",11),i.Nb(),i.Ob(37,"div",9),i.Ob(38,"button",16),i.xc(39," Register "),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&r&&(i.xb(7),i.cc("routerLink",i.ec(8,p)),i.xb(4),i.cc("formGroup",e.registerForm),i.xb(5),i.cc("control",e.registerForm.controls.firstName),i.xb(5),i.cc("control",e.registerForm.controls.firstName),i.xb(5),i.cc("control",e.registerForm.controls.username),i.xb(5),i.cc("control",e.registerForm.controls.password),i.xb(5),i.cc("control",e.registerForm.controls.confirmPassword),i.xb(2),i.cc("disabled",e.registerForm.invalid))},directives:[o.f,a.n,a.j,a.e,a.b,a.i,a.d,c.a],styles:[""]}),r})();const v=function(){return["/login"]};let N=(()=>{class r{constructor(r,e,t,o,i){this.formBuilder=r,this.router=e,this.userService=t,this.validationService=o,this.toastrService=i,this.loading=!1}register(){this.loading=!0,this.userService.create(this.registerForm.value).subscribe(r=>{this.toastrService.success("Registration successful"),this.router.navigate(["/login"]),console.log(r)},r=>{this.toastrService.error(r),this.loading=!1})}createForm(){this.registerForm=this.formBuilder.group({firstName:["",a.m.required],lastName:["",a.m.required],username:["",a.m.required],password:["",[a.m.required,a.m.minLength(6)]],confirmPassword:["",a.m.required]},{validator:this.validationService.MustMatch("password","confirmPassword")})}ngOnInit(){this.createForm()}}return r.\u0275fac=function(e){return new(e||r)(i.Jb(a.c),i.Jb(o.d),i.Jb(d.a),i.Jb(u.b),i.Jb(b.b))},r.\u0275cmp=i.Db({type:r,selectors:[["app-forgot"]],decls:25,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-md-12","min-vh-100","d-flex","flex-column","justify-content-center"],[1,"col-lg-5","col-md-8","mx-auto"],[1,"card"],[1,"card-body"],[1,"float-right","btn","btn-outline-primary",3,"routerLink"],[1,"card-title","mb-4","mt-1"],["novalidate","",3,"formGroup","submit"],[1,"form-group"],["placeholder","First Name","type","text","name","firstName","formControlName","firstName",1,"form-control"],[2,"text-align","left",3,"control"],["placeholder","Email","type","email","name","username","formControlName","username",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"]],template:function(r,e){1&r&&(i.Ob(0,"div",0),i.Ob(1,"div",1),i.Ob(2,"div",2),i.Ob(3,"div",1),i.Ob(4,"div",3),i.Ob(5,"div",4),i.Ob(6,"article",5),i.Ob(7,"a",6),i.xc(8,"Sign in"),i.Nb(),i.Ob(9,"h4",7),i.xc(10,"Forgot Password"),i.Nb(),i.Ob(11,"form",8),i.Vb("submit",(function(){return e.register()})),i.Ob(12,"div",9),i.Ob(13,"label"),i.xc(14,"User Name"),i.Nb(),i.Kb(15,"input",10),i.Kb(16,"validation-messages",11),i.Nb(),i.Ob(17,"div",9),i.Ob(18,"label"),i.xc(19,"Your email"),i.Nb(),i.Kb(20,"input",12),i.Kb(21,"validation-messages",11),i.Nb(),i.Ob(22,"div",9),i.Ob(23,"button",13),i.xc(24," Submit "),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&r&&(i.xb(7),i.cc("routerLink",i.ec(5,v)),i.xb(4),i.cc("formGroup",e.registerForm),i.xb(5),i.cc("control",e.registerForm.controls.firstName),i.xb(5),i.cc("control",e.registerForm.controls.username),i.xb(2),i.cc("disabled",e.registerForm.invalid))},directives:[o.f,a.n,a.j,a.e,a.b,a.i,a.d,c.a],styles:[""]}),r})();var h=t("yK//"),g=t("E2jr"),O=t("44PX");const w=[{path:"",component:g.a,children:[{path:"",component:s,canActivate:[h.a]},{path:"profile",component:(()=>{class r{constructor(r,e,t,o,i){this.usreService=r,this.formBuilder=e,this.validationService=t,this.toastrService=o,this.router=i}createProfileForm(){this.profileForm=this.formBuilder.group({_id:[""],firstName:["",a.m.required],lastName:["",a.m.required],email:["",a.m.required],mobile:["",[a.m.required,a.m.minLength(10)]]})}createPasswordForm(){this.passwordForm=this.formBuilder.group({username:["",a.m.required],password:["",[a.m.required,a.m.minLength(6)]],confirmPassword:["",a.m.required]},{validator:this.validationService.MustMatch("password","confirmPassword")})}resetProfileForm(){this.profileForm.reset(),this.profileForm.patchValue(this.usreService.getCurrentUser())}updateProfile(){this.usreService.update(this.profileForm.value).subscribe(r=>{this.toastrService.success("Profile updated successful");const e=r;e.token=this.user.token,localStorage.setItem("currentUser",JSON.stringify(e))},r=>{})}resetPasswordForm(){this.passwordForm.reset(),this.passwordForm.get("username").patchValue(this.user.username)}updatePassword(){this.usreService.changePassword(this.user._id,this.passwordForm.get("password").value).subscribe(r=>{this.toastrService.success("Profile updated successful"),this.router.navigate(["/login"])},r=>{})}ngOnInit(){this.createProfileForm(),this.createPasswordForm(),this.user=this.usreService.getCurrentUser(),this.profileForm.patchValue(this.user),this.passwordForm.get("username").patchValue(this.user.username)}}return r.\u0275fac=function(e){return new(e||r)(i.Jb(d.a),i.Jb(a.c),i.Jb(u.b),i.Jb(b.b),i.Jb(o.d))},r.\u0275cmp=i.Db({type:r,selectors:[["app-profile"]],decls:71,vars:5,consts:[["staticTabs",""],["heading","Profile"],[1,"container","py-3"],[1,"row"],[1,"mx-auto","col-sm-6"],[1,"card"],[1,"card-header"],[1,"mb-0"],[1,"card-body"],["name","profileForm","novalidate","","autocomplete","off",1,"form",3,"formGroup"],[1,"form-group","row"],[1,"col-lg-3","col-form-label","form-control-label"],[1,"col-lg-9"],["type","text","name","firstName","formControlName","firstName",1,"form-control"],["type","text","name","lastName","formControlName","lastName",1,"form-control"],["type","email","name","email","formControlName","email",1,"form-control"],["type","text","name","mobile","formControlName","mobile",1,"form-control"],[1,"col-lg-6"],["role","group",1,"btn-group","float-right","mt-2"],["type","submit","value","Reset",1,"btn","btn-secondary",3,"click"],["type","button","value","Update",1,"btn","btn-primary",3,"click"],["heading","Password"],["name","passwordForm","novalidate","","autocomplete","off",1,"form",3,"formGroup"],["disabled","","type","text","name","username","formControlName","username",1,"form-control"],["type","password","name","password","formControlName","password",1,"form-control"],[2,"text-align","left",3,"control"],["type","password","name","confirmPassword","formControlName","confirmPassword",1,"form-control"],["type","button","value","Update",1,"btn","btn-primary",3,"disabled","click"]],template:function(r,e){1&r&&(i.Ob(0,"tabset",null,0),i.Ob(2,"tab",1),i.Ob(3,"div",2),i.Ob(4,"div",3),i.Ob(5,"div",4),i.Ob(6,"div",5),i.Ob(7,"div",6),i.Ob(8,"h4",7),i.xc(9,"User Information"),i.Nb(),i.Nb(),i.Ob(10,"div",8),i.Ob(11,"form",9),i.Ob(12,"div",10),i.Ob(13,"label",11),i.xc(14,"First name"),i.Nb(),i.Ob(15,"div",12),i.Kb(16,"input",13),i.Nb(),i.Nb(),i.Ob(17,"div",10),i.Ob(18,"label",11),i.xc(19,"Last name"),i.Nb(),i.Ob(20,"div",12),i.Kb(21,"input",14),i.Nb(),i.Nb(),i.Ob(22,"div",10),i.Ob(23,"label",11),i.xc(24,"Email"),i.Nb(),i.Ob(25,"div",12),i.Kb(26,"input",15),i.Nb(),i.Nb(),i.Ob(27,"div",10),i.Ob(28,"label",11),i.xc(29,"Mobile"),i.Nb(),i.Ob(30,"div",12),i.Kb(31,"input",16),i.Nb(),i.Nb(),i.Ob(32,"div",10),i.Kb(33,"div",17),i.Ob(34,"div",17),i.Ob(35,"div",18),i.Ob(36,"input",19),i.Vb("click",(function(){return e.resetProfileForm()})),i.Nb(),i.Ob(37,"input",20),i.Vb("click",(function(){return e.updateProfile()})),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Ob(38,"tab",21),i.Ob(39,"div",2),i.Ob(40,"div",3),i.Ob(41,"div",4),i.Ob(42,"div",5),i.Ob(43,"div",6),i.Ob(44,"h4",7),i.xc(45,"Password Update"),i.Nb(),i.Nb(),i.Ob(46,"div",8),i.Ob(47,"form",22),i.Ob(48,"div",10),i.Ob(49,"label",11),i.xc(50,"Username"),i.Nb(),i.Ob(51,"div",12),i.Kb(52,"input",23),i.Nb(),i.Nb(),i.Ob(53,"div",10),i.Ob(54,"label",11),i.xc(55,"Password"),i.Nb(),i.Ob(56,"div",12),i.Kb(57,"input",24),i.Kb(58,"validation-messages",25),i.Nb(),i.Nb(),i.Ob(59,"div",10),i.Ob(60,"label",11),i.xc(61,"Confirm"),i.Nb(),i.Ob(62,"div",12),i.Kb(63,"input",26),i.Kb(64,"validation-messages",25),i.Nb(),i.Nb(),i.Ob(65,"div",10),i.Kb(66,"div",17),i.Ob(67,"div",17),i.Ob(68,"div",18),i.Ob(69,"input",19),i.Vb("click",(function(){return e.resetPasswordForm()})),i.Nb(),i.Ob(70,"input",27),i.Vb("click",(function(){return e.updatePassword()})),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&r&&(i.xb(11),i.cc("formGroup",e.profileForm),i.xb(36),i.cc("formGroup",e.passwordForm),i.xb(11),i.cc("control",e.passwordForm.controls.password),i.xb(6),i.cc("control",e.passwordForm.controls.confirmPassword),i.xb(6),i.cc("disabled",e.passwordForm.invalid))},directives:[O.c,O.a,a.n,a.j,a.e,a.b,a.i,a.d,c.a],styles:[".nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#495057}.nav-link.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#007bff}"]}),r})(),canActivate:[h.a]}]},{path:"login",component:m},{path:"register",component:f},{path:"forgot",component:N}];let x=(()=>{class r{}return r.\u0275mod=i.Hb({type:r}),r.\u0275inj=i.Gb({factory:function(e){return new(e||r)},imports:[[o.g.forChild(w)],o.g]}),r})();var y=t("pKmL"),F=t("PCNd"),P=t("tk/3");let S=(()=>{class r{}return r.\u0275mod=i.Hb({type:r}),r.\u0275inj=i.Gb({factory:function(e){return new(e||r)},providers:[n.a],imports:[[x,P.c,y.a.forRoot(),F.a.forRoot()]]}),r})()}}]);