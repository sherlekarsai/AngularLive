(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5eHb":function(t,e,n){"use strict";n.d(e,"a",(function(){return T})),n.d(e,"b",(function(){return w}));var i=n("fXoL"),o=n("R0Ic"),s=n("XNiG"),a=n("jhN1"),r=n("ofXK");const c=["toast-component",""];function l(t,e){if(1&t){const t=i.Pb();i.Ob(0,"button",5),i.Vb("click",(function(){return i.nc(t),i.Xb().remove()})),i.Ob(1,"span",6),i.xc(2,"\xd7"),i.Nb(),i.Nb()}}function d(t,e){if(1&t&&(i.Mb(0),i.xc(1),i.Lb()),2&t){const t=i.Xb(2);i.xb(1),i.zc("[",t.duplicatesCount+1,"]")}}function u(t,e){if(1&t&&(i.Ob(0,"div"),i.xc(1),i.vc(2,d,2,1,"ng-container",4),i.Nb()),2&t){const t=i.Xb();i.zb(t.options.titleClass),i.yb("aria-label",t.title),i.xb(1),i.zc(" ",t.title," "),i.xb(1),i.cc("ngIf",t.duplicatesCount)}}function h(t,e){if(1&t&&i.Kb(0,"div",7),2&t){const t=i.Xb();i.zb(t.options.messageClass),i.cc("innerHTML",t.message,i.oc)}}function p(t,e){if(1&t&&(i.Ob(0,"div",8),i.xc(1),i.Nb()),2&t){const t=i.Xb();i.zb(t.options.messageClass),i.yb("aria-label",t.message),i.xb(1),i.zc(" ",t.message," ")}}function g(t,e){if(1&t&&(i.Ob(0,"div"),i.Kb(1,"div",9),i.Nb()),2&t){const t=i.Xb();i.xb(1),i.tc("width",t.width+"%")}}class b{constructor(t,e,n,i,o,a){this.toastId=t,this.config=e,this.message=n,this.title=i,this.toastType=o,this.toastRef=a,this._onTap=new s.a,this._onAction=new s.a,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(t){this._onAction.next(t)}onAction(){return this._onAction.asObservable()}}const m={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},f=new i.q("ToastConfig");class v{constructor(t,e){this.component=t,this.injector=e}attach(t,e){return this._attachedHost=t,t.attach(this,e)}detach(){const t=this._attachedHost;if(t)return this._attachedHost=void 0,t.detach()}get isAttached(){return null!=this._attachedHost}setAttachedHost(t){this._attachedHost=t}}class C extends class{attach(t,e){return this._attachedPortal=t,this.attachComponentPortal(t,e)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(t){this._disposeFn=t}}{constructor(t,e,n){super(),this._hostDomElement=t,this._componentFactoryResolver=e,this._appRef=n}attachComponentPortal(t,e){const n=this._componentFactoryResolver.resolveComponentFactory(t.component);let i;return i=n.create(t.injector),this._appRef.attachView(i.hostView),this.setDisposeFn(()=>{this._appRef.detachView(i.hostView),i.destroy()}),e?this._hostDomElement.insertBefore(this._getComponentRootNode(i),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(i)),i}_getComponentRootNode(t){return t.hostView.rootNodes[0]}}let O=(()=>{class t{constructor(t){this._document=t}ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const t=this._document.createElement("div");t.classList.add("overlay-container"),this._document.body.appendChild(t),this._containerElement=t}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(r.d))},t.\u0275prov=Object(i.Fb)({factory:function(){return new t(Object(i.Sb)(r.d))},token:t,providedIn:"root"}),t})();class _{constructor(t){this._portalHost=t}attach(t,e=!0){return this._portalHost.attach(t,e)}detach(){return this._portalHost.detach()}}let M=(()=>{class t{constructor(t,e,n,i){this._overlayContainer=t,this._componentFactoryResolver=e,this._appRef=n,this._document=i,this._paneElements=new Map}create(t,e){return this._createOverlayRef(this.getPaneElement(t,e))}getPaneElement(t="",e){return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[t]||(this._paneElements.get(e)[t]=this._createPaneElement(t,e)),this._paneElements.get(e)[t]}_createPaneElement(t,e){const n=this._document.createElement("div");return n.id="toast-container",n.classList.add(t),n.classList.add("toast-container"),e?e.getContainerElement().appendChild(n):this._overlayContainer.getContainerElement().appendChild(n),n}_createPortalHost(t){return new C(t,this._componentFactoryResolver,this._appRef)}_createOverlayRef(t){return new _(this._createPortalHost(t))}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(O),i.Sb(i.j),i.Sb(i.g),i.Sb(r.d))},t.\u0275prov=Object(i.Fb)({factory:function(){return new t(Object(i.Sb)(O),Object(i.Sb)(i.j),Object(i.Sb)(i.g),Object(i.Sb)(r.d))},token:t,providedIn:"root"}),t})();class P{constructor(t){this._overlayRef=t,this.duplicatesCount=0,this._afterClosed=new s.a,this._activate=new s.a,this._manualClose=new s.a,this._resetTimeout=new s.a,this._countDuplicate=new s.a}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(t,e){t&&this._resetTimeout.next(),e&&this._countDuplicate.next(++this.duplicatesCount)}}class y{constructor(t,e){this._toastPackage=t,this._parentInjector=e}get(t,e,n){return t===b?this._toastPackage:this._parentInjector.get(t,e,n)}}let w=(()=>{class t{constructor(t,e,n,i,o){this.overlay=e,this._injector=n,this.sanitizer=i,this.ngZone=o,this.currentlyActive=0,this.toasts=[],this.index=0,this.toastrConfig=Object.assign(Object.assign({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=Object.assign(Object.assign({},t.default.iconClasses),t.config.iconClasses))}show(t,e,n={},i=""){return this._preBuildNotification(i,t,e,this.applyConfig(n))}success(t,e,n={}){return this._preBuildNotification(this.toastrConfig.iconClasses.success||"",t,e,this.applyConfig(n))}error(t,e,n={}){return this._preBuildNotification(this.toastrConfig.iconClasses.error||"",t,e,this.applyConfig(n))}info(t,e,n={}){return this._preBuildNotification(this.toastrConfig.iconClasses.info||"",t,e,this.applyConfig(n))}warning(t,e,n={}){return this._preBuildNotification(this.toastrConfig.iconClasses.warning||"",t,e,this.applyConfig(n))}clear(t){for(const e of this.toasts)if(void 0!==t){if(e.toastId===t)return void e.toastRef.manualClose()}else e.toastRef.manualClose()}remove(t){const e=this._findToast(t);if(!e)return!1;if(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length)return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){const t=this.toasts[this.currentlyActive].toastRef;t.isInactive()||(this.currentlyActive=this.currentlyActive+1,t.activate())}return!0}findDuplicate(t="",e=!1,n=!1){for(const i of this.toasts)if(i.message===t)return i.toastRef.onDuplicate(e,n),i;return null}applyConfig(t={}){return Object.assign(Object.assign({},this.toastrConfig),t)}_findToast(t){for(let e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===t)return{index:e,activeToast:this.toasts[e]};return null}_preBuildNotification(t,e,n,i){return i.onActivateTick?this.ngZone.run(()=>this._buildNotification(t,e,n,i)):this._buildNotification(t,e,n,i)}_buildNotification(t,e,n,o){if(!o.toastComponent)throw new Error("toastComponent required");const s=this.findDuplicate(e,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if(e&&this.toastrConfig.preventDuplicates&&null!==s)return s;this.previousToastMessage=e;let a=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(a=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));const r=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let c=e;e&&o.enableHtml&&(c=this.sanitizer.sanitize(i.H.HTML,e));const l=new P(r),d=new b(this.index,o,c,n,t,l),u=new y(d,this._injector),h=new v(o.toastComponent,u),p=r.attach(h,this.toastrConfig.newestOnTop);l.componentInstance=p.instance;const g={toastId:this.index,message:e||"",toastRef:l,onShown:l.afterActivate(),onHidden:l.afterClosed(),onTap:d.onTap(),onAction:d.onAction(),portal:p};return a||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{g.toastRef.activate()})),this.toasts.push(g),g}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(f),i.Sb(M),i.Sb(i.r),i.Sb(a.b),i.Sb(i.z))},t.\u0275prov=Object(i.Fb)({factory:function(){return new t(Object(i.Sb)(f),Object(i.Sb)(M),Object(i.Sb)(i.o),Object(i.Sb)(a.b),Object(i.Sb)(i.z))},token:t,providedIn:"root"}),t})(),x=(()=>{class t{constructor(t,e,n){this.toastrService=t,this.toastPackage=e,this.ngZone=n,this.width=-1,this.toastClasses="",this.state={value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}},this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(t=>{this.duplicatesCount=t})}get displayStyle(){if("inactive"===this.state.value)return"none"}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state=Object.assign(Object.assign({},this.state),{value:"active"}),!0!==this.options.disableTimeOut&&"timeOut"!==this.options.disableTimeOut&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=(new Date).getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(0===this.width||100===this.width||!this.options.timeOut)return;const t=(new Date).getTime();this.width=(this.hideTime-t)/this.options.timeOut*100,"increasing"===this.options.progressAnimation&&(this.width=100-this.width),this.width<=0&&(this.width=0),this.width>=100&&(this.width=100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state=Object.assign(Object.assign({},this.state),{value:"active"}),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=(new Date).getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){"removed"!==this.state.value&&(clearTimeout(this.timeout),this.state=Object.assign(Object.assign({},this.state),{value:"removed"}),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){"removed"!==this.state.value&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){"removed"!==this.state.value&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width=0)}delayedHideToast(){!0!==this.options.disableTimeOut&&"extendedTimeOut"!==this.options.disableTimeOut&&0!==this.options.extendedTimeOut&&"removed"!==this.state.value&&(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=(new Date).getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(t),e)):this.timeout=setTimeout(()=>t(),e)}outsideInterval(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(t),e)):this.intervalId=setInterval(()=>t(),e)}runInsideAngular(t){this.ngZone?this.ngZone.run(()=>t()):t()}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(w),i.Jb(b),i.Jb(i.z))},t.\u0275cmp=i.Db({type:t,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(t,e){1&t&&i.Vb("click",(function(){return e.tapToast()}))("mouseenter",(function(){return e.stickAround()}))("mouseleave",(function(){return e.delayedHideToast()})),2&t&&(i.uc("@flyInOut",e.state),i.zb(e.toastClasses),i.tc("display",e.displayStyle))},attrs:c,decls:5,vars:5,consts:[["class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alertdialog","aria-live","polite",3,"class","innerHTML",4,"ngIf"],["role","alertdialog","aria-live","polite",3,"class",4,"ngIf"],[4,"ngIf"],["aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alertdialog","aria-live","polite",3,"innerHTML"],["role","alertdialog","aria-live","polite"],[1,"toast-progress"]],template:function(t,e){1&t&&(i.vc(0,l,3,0,"button",0),i.vc(1,u,3,5,"div",1),i.vc(2,h,1,3,"div",2),i.vc(3,p,2,4,"div",3),i.vc(4,g,2,2,"div",4)),2&t&&(i.cc("ngIf",e.options.closeButton),i.xb(1),i.cc("ngIf",e.title),i.xb(1),i.cc("ngIf",e.message&&e.options.enableHtml),i.xb(1),i.cc("ngIf",e.message&&!e.options.enableHtml),i.xb(1),i.cc("ngIf",e.options.progressBar))},directives:[r.k],encapsulation:2,data:{animation:[Object(o.j)("flyInOut",[Object(o.g)("inactive",Object(o.h)({opacity:0})),Object(o.g)("active",Object(o.h)({opacity:1})),Object(o.g)("removed",Object(o.h)({opacity:0})),Object(o.i)("inactive => active",Object(o.e)("{{ easeTime }}ms {{ easing }}")),Object(o.i)("active => removed",Object(o.e)("{{ easeTime }}ms {{ easing }}"))])]}}),t})();const I=Object.assign(Object.assign({},m),{toastComponent:x});let T=(()=>{class t{static forRoot(e={}){return{ngModule:t,providers:[{provide:f,useValue:{default:I,config:e}}]}}}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[r.c]]}),t})()},AXo0:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("fXoL");let o=(()=>{class t{constructor(){}getValidatorErrorMessage(t,e){return{required:"Required",invalidCreditCard:"Is invalid credit card number",invalidEmailAddress:"Invalid email address",invalidMobile:"Invalid Mobile no",invalidPassword:"Invalid password. Password must be at least 6 characters long, and contain a number.",minlength:"Minimum length "+e.requiredLength,maxlength:"Max length "+e.requiredLength,mustMatch:"Passwords must match"}[t]}emailValidator(t){return t.value.match(/[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)?null:{invalidEmailAddress:!0}}mobileValidator(t){return t.value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)?null:{invalidMobile:!0}}MustMatch(t,e){return n=>{const i=n.controls[e];i.errors&&!i.errors.mustMatch||i.setErrors(n.controls[t].value!==i.value?{mustMatch:!0}:null)}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac}),t})()},E2jr:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var i=n("fXoL"),o=n("tyNb"),s=n("dJ3e"),a=n("3Pt+"),r=n("dZIy");const c=function(){return["/profile"]},l=function(){return["/login"]};function d(t,e){if(1&t){const t=i.Pb();i.Ob(0,"div",13),i.Ob(1,"a",14),i.Kb(2,"i",15),i.xc(3," Profile "),i.Nb(),i.Ob(4,"a",16),i.Vb("click",(function(){return i.nc(t),i.Xb().onLoggedout()})),i.Kb(5,"i",17),i.xc(6,"Log Out "),i.Nb(),i.Nb()}2&t&&(i.xb(1),i.cc("routerLink",i.ec(2,c)),i.xb(3),i.cc("routerLink",i.ec(3,l)))}let u=(()=>{class t{constructor(t,e){this.router=t,this.userService=e,this.router.events.subscribe(t=>{t instanceof o.b&&window.innerWidth<=992&&this.isToggled()&&this.toggleSidebar()})}ngOnInit(){this.pushRightClass="push-right",this.user=this.userService.getCurrentUser()}isToggled(){return document.querySelector("body").classList.contains(this.pushRightClass)}toggleSidebar(){document.querySelector("body").classList.toggle(this.pushRightClass)}onLoggedout(){localStorage.removeItem("isLoggedin")}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(o.d),i.Jb(s.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-header"]],decls:16,vars:2,consts:[[1,"navbar","navbar-expand-lg","fixed-top"],["href","#",1,"navbar-brand"],["type","button",1,"navbar-toggler",3,"click"],["aria-hidden","true",1,"fa","fa-bars","text-muted"],[1,"collapse","navbar-collapse"],[1,"form-inline","my-2","my-lg-0"],["type","text","placeholder","Search",1,"form-control","mr-sm-2"],[1,"navbar-nav","ml-auto"],["dropdown","",1,"nav-item","dropdown"],["href","javascript:void(0)","id","basic-link","dropdownToggle","",1,"nav-link","dropdown-toggle"],[1,"fa","fa-user"],[1,"caret"],["id","basic-link-dropdown","class","dropdown-menu",4,"dropdownMenu"],["id","basic-link-dropdown",1,"dropdown-menu"],["routerLinkActive","router-link-active",1,"dropdown-item",3,"routerLink"],[1,"fa","fa-fw","fa-user"],[1,"dropdown-item",3,"routerLink","click"],[1,"fa","fa-fw","fa-power-off"]],template:function(t,e){1&t&&(i.Ob(0,"nav",0),i.Ob(1,"a",1),i.xc(2,"Contact Management \xa0"),i.Nb(),i.Ob(3,"button",2),i.Vb("click",(function(){return e.toggleSidebar()})),i.Kb(4,"i",3),i.Nb(),i.Ob(5,"div",4),i.Ob(6,"form",5),i.Kb(7,"input",6),i.Nb(),i.Ob(8,"ul",7),i.xc(9," \xa0 "),i.Ob(10,"li",8),i.Ob(11,"a",9),i.Kb(12,"i",10),i.xc(13),i.Kb(14,"b",11),i.Nb(),i.vc(15,d,7,4,"div",12),i.Nb(),i.Nb(),i.Nb(),i.Nb()),2&t&&(i.xb(13),i.Ac(" ",null==e.user?null:e.user.firstName," ",null==e.user?null:e.user.lastName," "))},directives:[a.n,a.j,a.k,r.a,r.d,r.b,o.f,o.e],styles:["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]{background-color:#222}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#999}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#8b8888}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 10px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}"]}),t})();var h=n("ofXK"),p=n("jaIm");const g=function(t,e){return{sidebarPushRight:t,collapsed:e}},b=function(t){return{collapsed:t}};let m=(()=>{class t{constructor(t,e){this.router=t,this.userService=e,this.title="dynamic-sidebar-menu",this.finalMenu=[],this.collapsedEvent=new i.n,this.router.events.subscribe(t=>{t instanceof o.b&&window.innerWidth<=992&&this.isToggled()&&this.toggleSidebar()})}ngOnInit(){this.isActive=!1,this.collapsed=!1,this.showMenu="",this.pushRightClass="push-right",this.user=this.userService.getCurrentUser(),this.menu=[{id:"1",text:"Contact",action:void 0,icon:"home",menuFatherId:void 0,opacity:void 0,children:void 0,isCollapsed:void 0},{id:"2",text:"Manage Contact",action:"contacts",icon:"home",menuFatherId:"1",opacity:void 0,children:void 0,isCollapsed:void 0},{id:"3",text:"User Management",action:void 0,icon:"location_on",menuFatherId:void 0,opacity:void 0,children:void 0,isCollapsed:void 0},{id:"4",text:"Manage User",action:"ManageUser",icon:"phone_enabled",menuFatherId:"3",opacity:void 0,children:void 0,isCollapsed:void 0},{id:"5",text:"Manage Role",action:"/action",icon:"voicemail",menuFatherId:"3",opacity:void 0,children:void 0,isCollapsed:void 0},{id:"6",text:"Manage Option",action:"/action",icon:"home",menuFatherId:"3",opacity:void 0,children:void 0,isCollapsed:void 0},{id:"7",text:"Session Activity",action:void 0,icon:"vpn_key",menuFatherId:void 0,opacity:void 0,children:void 0,isCollapsed:void 0},{id:"8",text:"Session Logs",action:void 0,icon:"sentiment_satisfied_alt",menuFatherId:"7",opacity:void 0,children:void 0,isCollapsed:void 0}],this.renderMenu(this.menu)}renderMenu(t){for(;t.length>0;)t.forEach(e=>{if(e.children=[],e.menuFatherId)this.serachFather(this.finalMenu,e.menuFatherId,e,t);else{const n=t.indexOf(e);-1!==n&&t.splice(n,1),e.opacity=0,this.finalMenu.push(e)}});this.menuLoaded=!0}serachFather(t,e,n,i){t.forEach(t=>{if(t.id===e){n.opacity=t.opacity+1,t.children.push(n);const e=i.indexOf(n);-1!==e&&i.splice(e,1)}else this.serachFather(t.children,e,n,i)})}eventCalled(){this.isActive=!this.isActive}addExpandClass(t){this.showMenu=t===this.showMenu?"0":t}toggleCollapsed(){this.collapsed=!this.collapsed,this.collapsedEvent.emit(this.collapsed)}isToggled(){return document.querySelector("body").classList.contains(this.pushRightClass)}toggleSidebar(){document.querySelector("body").classList.toggle(this.pushRightClass)}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(o.d),i.Jb(s.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-sidebar"]],outputs:{collapsedEvent:"collapsedEvent"},decls:7,vars:11,consts:[[1,"sidebar",3,"ngClass"],[3,"menu"],[1,"toggle-button",3,"ngClass","click"]],template:function(t,e){1&t&&(i.Ob(0,"nav",0),i.Kb(1,"app-ngx-bootstrap-menu",1),i.Nb(),i.Ob(2,"div",2),i.Vb("click",(function(){return e.toggleCollapsed()})),i.Kb(3,"i"),i.xc(4,"\xa0 "),i.Ob(5,"span"),i.xc(6,"Collapse Sidebar"),i.Nb(),i.Nb()),2&t&&(i.cc("ngClass",i.gc(6,g,e.isActive,e.collapsed)),i.xb(1),i.cc("menu",e.finalMenu),i.xb(1),i.cc("ngClass",i.fc(9,b,e.collapsed)),i.xb(1),i.Ab("fa fa-fw fa-angle-double-",e.collapsed?"right":"left",""))},directives:[h.i,p.a],styles:[".sidebar[_ngcontent-%COMP%]{position:fixed;z-index:1000;top:56px;left:235px;width:235px;margin-left:-235px;margin-bottom:48px;border:none;border-radius:0;overflow-y:auto;background-color:#222;bottom:0;overflow-x:hidden;padding-bottom:40px;white-space:nowrap;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#222;border:0;border-radius:0;color:#999;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid hsla(0,0%,100%,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#222}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:none;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#151515}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radius:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#222;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#151515}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}@media print{.sidebar[_ngcontent-%COMP%]{display:none!important}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.toggle-button[_ngcontent-%COMP%]{position:fixed;width:236px;cursor:pointer;padding:12px;bottom:0;color:#999;background:#212529;border-top:1px solid #999;transition:all .2s ease-in-out}.toggle-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:23px}.toggle-button[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.collapsed[_ngcontent-%COMP%]{width:60px}.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}.customClass[_ngcontent-%COMP%]{background-color:#009688;color:#fff}"]}),t})();const f=function(t){return{collapsed:t}};let v=(()=>{class t{constructor(){}ngOnInit(){}receiveCollapsed(t){this.collapedSideBar=t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["app-layout"]],decls:4,vars:3,consts:[[3,"collapsedEvent"],[1,"main-container",3,"ngClass"]],template:function(t,e){1&t&&(i.Kb(0,"app-header"),i.Ob(1,"app-sidebar",0),i.Vb("collapsedEvent",(function(t){return e.receiveCollapsed(t)})),i.Nb(),i.Ob(2,"section",1),i.Kb(3,"router-outlet"),i.Nb()),2&t&&(i.xb(2),i.cc("ngClass",i.fc(1,f,e.collapedSideBar)))},directives:[u,m,h.i,o.h],styles:["*[_ngcontent-%COMP%]{transition:margin-left .2s ease-in-out}.main-container[_ngcontent-%COMP%]{margin-top:56px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}.collapsed[_ngcontent-%COMP%]{margin-left:60px}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}@media print{.main-container[_ngcontent-%COMP%]{margin-top:0!important;margin-left:0!important}}"]}),t})()},"I/4n":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("lJxs"),o=n("fXoL"),s=n("tk/3");let a=(()=>{class t{constructor(t){this.http=t,this.strapiendpoint="https://uatsys.agsindia.com:7592/uidr/api"}login(t,e){return this.http.post(this.strapiendpoint+"/contact/authenticate",{username:t,password:e}).pipe(Object(i.a)(t=>(t&&t.data&&t.data.Token&&"undefined"!=typeof window&&localStorage.setItem("currentUser",JSON.stringify(t.data)),t.data)))}getuserReadWriteValue(){if("undefined"!=typeof window)return JSON.parse(localStorage.getItem("currentUser")),"iusd"}logout(){"undefined"!=typeof window&&localStorage.removeItem("currentUser")}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(s.b))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac}),t})()},Vyfh:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r.a}));var i=n("tyNb"),o=n("XNiG"),s=n("fXoL");let a=(()=>{class t{constructor(t){this.router=t,this.subject=new o.a,this.keepAfterNavigationChange=!1,this.router.events.subscribe(t=>{t instanceof i.c&&(this.keepAfterNavigationChange?this.keepAfterNavigationChange=!1:this.subject.next())})}success(t,e=!1){this.keepAfterNavigationChange=e,this.subject.next({type:"success",text:t})}error(t,e=!1){this.keepAfterNavigationChange=e,this.subject.next({type:"error",text:t})}getMessage(){return this.subject.asObservable()}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(i.d))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac}),t})();n("ofXK"),n("WZwF");var r=n("AXo0");n("jaIm")},WZwF:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fXoL"),o=n("AXo0"),s=n("ofXK");function a(t,e){if(1&t&&(i.Ob(0,"div",1),i.xc(1),i.Nb()),2&t){const t=i.Xb();i.xb(1),i.yc(t.errorMessage)}}let r=(()=>{class t{constructor(t){this.validationService=t}get errorMessage(){for(const t in this.control.errors)if(this.control.errors.hasOwnProperty(t)&&this.control.touched)return this.validationService.getValidatorErrorMessage(t,this.control.errors[t]);return null}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(o.a))},t.\u0275cmp=i.Db({type:t,selectors:[["validation-messages"]],inputs:{control:"control"},decls:1,vars:1,consts:[["class","alert-danger",4,"ngIf"],[1,"alert-danger"]],template:function(t,e){1&t&&i.vc(0,a,2,1,"div",0),2&t&&i.cc("ngIf",null!==e.errorMessage)},directives:[s.k],styles:[".alert-danger[_ngcontent-%COMP%]{color:red;background-color:initial;border-color:transparent}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),t})()},dJ3e:function(t,e,n){"use strict";var i=n("f4AX");n.d(e,"a",(function(){return i.a}))},f4AX:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("lJxs"),o=n("AytR"),s=n("fXoL"),a=n("tk/3");let r=(()=>{class t{constructor(t){this.http=t}getAll(){return this.http.get(o.a.apiEndpoint+"/users").pipe(Object(i.a)(t=>t.data))}getById(t){return this.http.get(o.a.apiEndpoint+"/user/"+t).pipe(Object(i.a)(t=>t.data))}getCurrentUser(){if(localStorage.getItem("currentUser"))return JSON.parse(localStorage.getItem("currentUser"))}create(t){return this.http.post(o.a.apiEndpoint+"/users",t)}update(t){return this.http.put(o.a.apiEndpoint+"/user/"+t._id,t).pipe(Object(i.a)(t=>t.data))}changePassword(t,e){return this.http.put(o.a.apiEndpoint+"/user/changepassword/"+t,{password:e}).pipe(Object(i.a)(t=>t.data))}delete(t){return this.http.delete(o.a.apiEndpoint+"/user/"+t)}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(a.b))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac}),t})()},jaIm:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n("fXoL"),o=n("ofXK"),s=n("tyNb"),a=n("+Cnu");function r(t,e){if(1&t&&(i.Ob(0,"div"),i.Ob(1,"a",2),i.Ob(2,"i",3),i.xc(3),i.Nb(),i.xc(4),i.Nb(),i.Nb()),2&t){const t=i.Xb();i.xb(1),i.dc("routerLink","/",t.menuItem.text,""),i.cc("ngStyle",t.styleLink),i.xb(2),i.yc(t.menuItem.icon),i.xb(1),i.zc(" ",t.menuItem.text," ")}}function c(t,e){1&t&&i.Kb(0,"app-menu-item-ng",11),2&t&&i.cc("menuItem",e.$implicit)}function l(t,e){if(1&t&&(i.Ob(0,"div",8),i.Ob(1,"div",9),i.vc(2,c,1,1,"app-menu-item-ng",10),i.Nb(),i.Nb()),2&t){const t=i.Xb(2);i.cc("collapse",!t.menuItem.isCollapsed)("isAnimated",!0),i.xb(2),i.cc("ngForOf",t.menuItem.children)}}function d(t,e){if(1&t){const t=i.Pb();i.Ob(0,"a",4),i.Vb("click",(function(){i.nc(t);const e=i.Xb();return e.menuItem.isCollapsed=!e.menuItem.isCollapsed})),i.Ob(1,"i",5),i.xc(2),i.Nb(),i.xc(3),i.Ob(4,"i",6),i.xc(5," keyboard_arrow_down"),i.Nb(),i.Nb(),i.vc(6,l,3,3,"div",7)}if(2&t){const t=i.Xb();i.cc("ngStyle",t.style),i.xb(2),i.yc(t.menuItem.icon),i.xb(1),i.zc(" ",t.menuItem.text," "),i.xb(3),i.cc("ngIf",t.hasChildrens)}}let u=(()=>{class t{constructor(){this.hasChildrens=!1}ngOnInit(){this.backgroundColor="rgba(0, 0, 0, "+this.opacity+")",this.style={"background-color":`rgb(155,155,155,${this.menuItem.opacity/10})`,color:"rgb(202 199 199)"},this.styleLink={"background-color":`rgb(155,155,155,${this.opacity+.1})`},this.menuItem.children.length>0&&(this.hasChildrens=!0)}onClick(){this.active=!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["app-menu-item-ng"]],inputs:{menuItem:"menuItem"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["elseBlock",""],["onclick","return false;",1,"list-group-item","list-group-item-action",3,"routerLink","ngStyle"],[1,"material-icons",2,"margin-right","10px"],["href","#","onclick","return false;",1,"list-group-item","list-group-item-action",3,"ngStyle","click"],[1,"material-icons",2,"width","30px"],[1,"material-icons",2,"float","right"],["id","collapseBasic",3,"collapse","isAnimated",4,"ngIf"],["id","collapseBasic",3,"collapse","isAnimated"],[1,"well","well-lg","card","card-block","card-header","bg-light",2,"padding","0","border","0"],[3,"menuItem",4,"ngFor","ngForOf"],[3,"menuItem"]],template:function(t,e){if(1&t&&(i.vc(0,r,5,4,"div",0),i.vc(1,d,7,4,"ng-template",null,1,i.wc)),2&t){const t=i.lc(2);i.cc("ngIf",!e.hasChildrens)("ngIfElse",t)}},directives:[o.k,s.f,o.l,a.a,o.j,t],styles:[""]}),t})();function h(t,e){1&t&&i.Kb(0,"app-menu-item-ng",1),2&t&&i.cc("menuItem",e.$implicit)}let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["app-ngx-bootstrap-menu"]],inputs:{menu:"menu"},decls:1,vars:1,consts:[[3,"menuItem",4,"ngFor","ngForOf"],[3,"menuItem"]],template:function(t,e){1&t&&i.vc(0,h,1,1,"app-menu-item-ng",0),2&t&&i.cc("ngForOf",e.menu)},directives:[o.j,u],styles:[""]}),t})()},pKmL:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var i=n("ofXK"),o=n("tk/3"),s=n("5eHb"),a=n("Vyfh"),r=n("yK//"),c=n("HDdC"),l=n("JIr8"),d=n("fXoL");const u={provide:o.a,useClass:(()=>{class t{intercept(t,e){return e.handle(t).pipe(Object(l.a)(t=>c.a.throw(t.error)))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=d.Fb({token:t,factory:t.\u0275fac}),t})(),multi:!0},h={provide:o.a,useClass:(()=>{class t{intercept(t,e){if("undefined"!=typeof window){const e=JSON.parse(localStorage.getItem("currentUser"));e&&e.token&&(t=t.clone({setHeaders:{Authorization:"Bearer "+e.token}}))}return e.handle(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=d.Fb({token:t,factory:t.\u0275fac}),t})(),multi:!0};var p=n("tyNb"),g=n("PCNd"),b=n("+Cnu");let m=(()=>{class t{}return t.apiURL="https://itsolutionstuff.com/",t.siteTitle="This is example of ItSolutionStuff.com",t})(),f=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}}return t.\u0275mod=d.Hb({type:t}),t.\u0275inj=d.Gb({factory:function(e){return new(e||t)},providers:[m],imports:[[p.g,g.a,b.b]]}),t})();var v=n("dJ3e"),C=n("EG8C");let O=(()=>{class t{static forRoot(){return{ngModule:t,providers:[r.a,v.a,a.a,C.a,a.b,h,u,s.b]}}}return t.\u0275mod=d.Hb({type:t}),t.\u0275inj=d.Gb({factory:function(e){return new(e||t)},imports:[[i.c,o.c,s.a.forRoot(),f],s.a,f]}),t})()}}]);