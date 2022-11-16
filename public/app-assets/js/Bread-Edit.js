"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[669],{7854:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(6455);const o=n.n(l)().mixin({confirmButtonColor:"#5a68fd",denyButtonColor:"#f87171",customClass:"jasmine-swal"})},6831:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var l=n(821),o={class:"breadcrumb-item"},a={class:"d-flex align-items-center p-2"},r={key:0,class:"btn-group btn-group-sm"},i=(0,l.createElementVNode)("div",{class:"mx-3"},null,-1),s=["disabled"],c={key:0,role:"status","aria-hidden":"true",class:"spinner-border spinner-border-sm"},d={class:"card-body"},m=["textContent"],u={class:"row"},p={class:"d-flex flex-column mt-1"},f=["onClick","title"],b=[(0,l.createElementVNode)("i",{class:"bi bi-x-circle fs-6"},null,-1)],v=["title"],h=[(0,l.createElementVNode)("i",{class:"bi bi-arrows-expand fs-6"},null,-1)],k={class:"form-group flex-fill my-2"},g=["for"],V=["textContent"],N={class:"mb-5"},E=["onClick","disabled","title"],x=(0,l.createElementVNode)("i",{class:"bi bi-plus-circle-fill fs-6"},null,-1),y=(0,l.createElementVNode)("span",{class:"px-1"},null,-1),C=["textContent"],w=["for","textContent"],B=["id","textContent"],S={key:1,class:"invalid-feedback",role:"alert"},$=["textContent"];var D=n(9980),z=n.n(D);const _={name:"BreadEdit",components:{Layout:n(5883).Z,draggable:z()},props:{b:{type:Object,required:!0},entId:{type:[String,Number]},ent:{type:Object,required:!0},title:{type:String},locale:{type:String},fm_path:{type:String,default:""}},data:function(){var e=this,t={};return this.b.fields.forEach((function(n){t[n.name]=n.repeats>1?[]:JSON.parse(JSON.stringify({v:n.default})).v,e.entId&&void 0!==e.ent[n.name]&&(t[n.name]=JSON.parse(JSON.stringify({v:e.ent[n.name]})).v)})),{form:this.$inertia.form(t)}},methods:{repeatField:function(e){this.form[e.name].push(JSON.parse(JSON.stringify({v:e.default})).v)},removeRepeatedField:function(e,t){this.form[e].splice(t,1)}},computed:{isLocaleRtl:function(){return["ar","dv","fa","ha","he","ks","ku","ps","sd","ur","yi"].indexOf(this.locale)>-1}},provide:function(){return{fm_path:this.fm_path}}};const L=(0,n(3744).Z)(_,[["render",function(e,t,n,D,z,_){var L=(0,l.resolveComponent)("Head"),O=(0,l.resolveComponent)("inertia-link"),F=(0,l.resolveComponent)("draggable"),M=(0,l.resolveComponent)("Layout");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(L,{title:n.entId?e.$t("Edit")+" "+n.title:e.$t("New")},null,8,["title"]),(0,l.createVNode)(M,null,{breadcrumbs:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("li",o,[(0,l.createVNode)(O,{href:e.route("jasmine.bread.index",{breadableName:n.b.key}),textContent:(0,l.toDisplayString)(e.$t(n.b.plural))},null,8,["href","textContent"])])]})),pageActions:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("div",a,[n.locale?((0,l.openBlock)(),(0,l.createElementBlock)("div",r,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.$globals.locales,(function(e){return(0,l.openBlock)(),(0,l.createBlock)(O,{href:"",data:{_locale:e},textContent:(0,l.toDisplayString)(e),class:(0,l.normalizeClass)(["btn btn-outline-primary text-uppercase",{active:e===n.locale}])},null,8,["data","textContent","class"])})),256))])):(0,l.createCommentVNode)("",!0),i,(0,l.createElementVNode)("button",{onClick:t[0]||(t[0]=function(t){return e.$refs.form.reportValidity()&&z.form.post("")}),type:"button",class:(0,l.normalizeClass)(["btn btn-sm px-5",{"btn-primary":z.form.isDirty,"btn-secondary":!z.form.isDirty}]),disabled:z.form.processing},[z.form.processing?((0,l.openBlock)(),(0,l.createElementBlock)("span",c)):(0,l.createCommentVNode)("",!0),(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.$t("Save")),1)],10,s)])]})),default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("form",{ref:"form",onSubmit:t[1]||(t[1]=(0,l.withModifiers)((function(e){return z.form.post("")}),["prevent"]))},[(0,l.createElementVNode)("div",{class:(0,l.normalizeClass)(["bread-edit row",{"writing-rtl":_.isLocaleRtl}])},[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.b.manifest,(function(t,o){return(0,l.openBlock)(),(0,l.createElementBlock)("div",{key:o,class:(0,l.normalizeClass)(o)},[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(t,(function(t,o){return(0,l.openBlock)(),(0,l.createElementBlock)("div",{key:o,class:"card mb-4"},[(0,l.createElementVNode)("div",d,["_"!==o[0]?((0,l.openBlock)(),(0,l.createElementBlock)("h4",{key:0,class:"mb-2 h5",textContent:(0,l.toDisplayString)(o)},null,8,m)):(0,l.createCommentVNode)("",!0),(0,l.createElementVNode)("div",u,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(t,(function(t,o){return(0,l.openBlock)(),(0,l.createElementBlock)("div",{key:o,class:(0,l.normalizeClass)(["field p-1 pt-2 form-group",t.width])},[t.repeats>1?((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:0},[(0,l.createVNode)(F,{modelValue:z.form[t.name],"onUpdate:modelValue":function(e){return z.form[t.name]=e},"ghost-class":"ghost",handle:".dnd-handler_"+t.id,class:"row","item-key":"id"},{item:(0,l.withCtx)((function(o){o.element;var a=o.index;return[(0,l.createElementVNode)("div",{class:(0,l.normalizeClass)(["d-flex",t.repeatsWidth])},[(0,l.createElementVNode)("div",p,[(0,l.createElementVNode)("button",{type:"button",class:"btn btn-sm",onClick:function(e){return _.removeRepeatedField(t.name,a)},title:e.$t("Remove")+" "+t.label+" ("+(a+1)+")"},b,8,f),(0,l.createElementVNode)("button",{class:(0,l.normalizeClass)(["btn btn-sm","dnd-handler_"+t.id]),type:"button",title:e.$t("Reorder")+" "+t.label},h,10,v)]),(0,l.createElementVNode)("div",k,[(0,l.createElementVNode)("label",{for:t.id+a,class:"form-label"},[(0,l.createElementVNode)("span",{class:"fw-semibold",textContent:(0,l.toDisplayString)(t.label)},null,8,V),(0,l.createTextVNode)(" "+(0,l.toDisplayString)(a+1),1)],8,g),((0,l.openBlock)(),(0,l.createBlock)((0,l.resolveDynamicComponent)(t.component),{id:t.id+a,name:t.name+"["+a+"]",invalid:!!z.form.errors[t.name],modelValue:z.form[t.name][a],"onUpdate:modelValue":function(e){return z.form[t.name][a]=e},label:t.label,options:t.options,validation:t.validation,locale:n.locale,"is-locale-rtl":_.isLocaleRtl},null,8,["id","name","invalid","modelValue","onUpdate:modelValue","label","options","validation","locale","is-locale-rtl"]))])],2)]})),_:2},1032,["modelValue","onUpdate:modelValue","handle"]),(0,l.createElementVNode)("div",N,[(0,l.createElementVNode)("button",{style:{"--bs-btn-disabled-border-color":"transparent"},class:"btn text-primary fw-semibold d-flex align-items-center",onClick:function(e){return _.repeatField(t)},disabled:z.form[t.name].length>=t.repeats,type:"button",title:e.$t("Add")+" "+t.label},[x,y,(0,l.createElementVNode)("span",{textContent:(0,l.toDisplayString)(e.$t("Add")+" "+t.label)},null,8,C)],8,E)])],64)):((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:1},[(0,l.createElementVNode)("label",{class:"form-label fw-semibold",for:t.id,textContent:(0,l.toDisplayString)(t.label)},null,8,w),((0,l.openBlock)(),(0,l.createBlock)((0,l.resolveDynamicComponent)(t.component),{id:t.id,name:t.name,invalid:!!z.form.errors[t.name],modelValue:z.form[t.name],"onUpdate:modelValue":function(e){return z.form[t.name]=e},label:t.label,options:t.options,validation:t.validation,locale:n.locale,"is-locale-rtl":_.isLocaleRtl},null,8,["id","name","invalid","modelValue","onUpdate:modelValue","label","options","validation","locale","is-locale-rtl"])),t.description?((0,l.openBlock)(),(0,l.createElementBlock)("small",{key:0,id:t.id+"Help",class:"form-text text-muted",textContent:(0,l.toDisplayString)(t.description)},null,8,B)):(0,l.createCommentVNode)("",!0),z.form.errors[t.name]?((0,l.openBlock)(),(0,l.createElementBlock)("div",S,[(0,l.createElementVNode)("strong",{textContent:(0,l.toDisplayString)(z.form.errors[t.name][0])},null,8,$)])):(0,l.createCommentVNode)("",!0)],64))],2)})),128))])])])})),128))],2)})),128))],2)],544)]})),_:1})],64)}]])},5883:(e,t,n)=>{n.d(t,{Z:()=>se});var l=n(821),o={class:"sb-topnav navbar navbar-expand navbar-dark bg-dark"},a=(0,l.createElementVNode)("div",{class:"px-2"},null,-1),r=[(0,l.createElementVNode)("i",{class:"fs-4 bi bi-list"},null,-1)],i=(0,l.createElementVNode)("div",{class:"mx-auto"},null,-1),s={class:"navbar-nav h-100 mx-2"},c=["textContent"],d=["onClick","title"],m=["textContent"],u=["src","alt"],p=(0,l.createElementVNode)("li",null,[(0,l.createElementVNode)("hr",{class:"dropdown-divider"})],-1),f={id:"wrapper"},b={id:"sidebar"},v={class:"sb-sidenav accordion sb-sidenav-dark",id:"sidenavAccordion"},h={class:"sb-sidenav-menu"},k={class:"nav"},g=["aria-expanded","aria-controls","onClick"],V={class:"sb-nav-link-icon"},N=(0,l.createElementVNode)("div",{class:"sb-sidenav-collapse-arrow"},[(0,l.createElementVNode)("i",{class:"fas fa-angle-down"})],-1),E=["id"],x={class:"sb-sidenav-menu-nested nav"},y={class:"sb-nav-link-icon"},C={class:"sb-nav-link-icon"},w=(0,l.createElementVNode)("div",{class:"sb-sidenav-footer d-none"},null,-1),B={id:"content"},S={class:"d-flex flex-column flex-grow-1"},$={style:{"z-index":"999",position:"sticky",top:"56px"},class:"bg-white"},D={class:"d-flex justify-content-between align-items-center border-bottom",style:{"min-height":"48px"}},z={style:{"--bs-breadcrumb-divider":"'/'"},"aria-label":"breadcrumb"},_={class:"breadcrumb mx-3 mb-0"},L={class:"breadcrumb-item"},O=(0,l.createElementVNode)("i",{class:"bi bi-house"},null,-1),F=["textContent"],M=(0,l.createElementVNode)("div",{class:"py-2"},null,-1),j={class:"container-fluid d-flex flex-grow-1"},T={class:"h-100 w-100"},R={class:"py-2 bg-light mt-auto"},J={class:"container-fluid px-4"},Z={class:"d-flex align-items-center justify-content-between small"},A={class:"d-flex"},I={href:"https://github.com/JasmineCMS/jasmine",target:"_blank",class:"text-decoration-none text-black"},U=(0,l.createElementVNode)("i",{class:"fa-brands fa-github"},null,-1),q=(0,l.createElementVNode)("div",{class:"mx-3"},null,-1),H=(0,l.createElementVNode)("div",{class:"mx-3"},null,-1),P=(0,l.createElementVNode)("div",null,null,-1);var K=n(4952),G=n.n(K),W=n(7854),Q=n(8664),X={class:"nav-item dropdown"},Y=["id","aria-expanded"],ee=["aria-labelledby"];const te={name:"NavItemDropdown",props:{id:{required:!0,type:String},menuClass:{required:!1,type:String}},data:function(){return{open:!1}},methods:{clickOut:function(e){for(var t=e.target;t&&t!==this&&!this.$refs.btn.contains(t);t=t.parentNode)this.open=!1}},watch:{open:function(e){e?document.addEventListener("click",this.clickOut):document.removeEventListener("click",this.clickOut)}}};var ne=n(3744);const le=(0,ne.Z)(te,[["render",function(e,t,n,o,a,r){return(0,l.openBlock)(),(0,l.createElementBlock)("li",X,[(0,l.createElementVNode)("a",{class:(0,l.normalizeClass)(["nav-link dropdown-toggle h-100",{show:a.open}]),id:n.id,href:"#",role:"button",ref:"btn","data-bs-toggle":"dropdown",onClick:t[0]||(t[0]=(0,l.withModifiers)((function(e){return a.open=!a.open}),["prevent"])),onKeydown:t[1]||(t[1]=(0,l.withKeys)((function(e){return a.open=!1}),["esc"])),"aria-expanded":a.open?"true":"false"},[(0,l.renderSlot)(e.$slots,"default")],42,Y),(0,l.createElementVNode)("ul",{class:(0,l.normalizeClass)(["dropdown-menu",[{show:a.open},n.menuClass]]),"aria-labelledby":n.id,"data-bs-popper":""},[(0,l.renderSlot)(e.$slots,"menu")],10,ee)])}]]);var oe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 6668.49 6668.49"},ae=[(0,l.createStaticVNode)('<path fill="#fff" d="M2086.2 3925.27c-1.86 46.46 0 92.92 3.71 141.24 50.18 531.51 327.08 1014.7 676.46 1375.23 185.32 192.95 600.06 168.3 1024.95 27.03-10.26-77.56-15.55-161.35 14.57-245.59l.28.1.2-.59c48.5-132.55 221.97-117.62 401.92-101.39l3.29.25c81.65 7.37 165.12 14.9 211.77 8.91l3.65-.66c9.82-1.62 60.51-29.82 117.51-61.53 37.11-20.65 76.01-42.29 115.27-61.84 224.3-180.82 374.65-382.33 375.72-570.1 3.72-399.56-13.01-958.94-328.94-1233.99-180.27-156.11-420.01-260.18-656.02-306.64-157.97-31.59-330.81-46.46-496.21-40.88-635.58 24.16-1440.27 341.95-1468.15 1070.45zm1945.09 1451.85c28.75-12.41 57.38-25.2 85.76-38.49-41.22-27.87-66.99-61.63-78.22-32.32l.25.09c-6.98 19.51-8.75 44.05-7.79 70.72z"></path><path fill="#fff" d="M1290.79 1319.77c247.17-133.81 522.21 24.16 680.18 191.41 403.28 427.44 893.9 1772.94 905.06 1828.69 26.02 146.82-180.27 289.91-336.38 282.48-65.04-3.72-107.78-48.32-150.53-83.63-63.19-55.75-124.51-109.65-185.84-165.4-126.38-113.37-252.75-228.59-375.4-345.67-74.33-72.48-152.39-143.1-228.59-213.72-271.32-252.75-561.24-561.24-564.96-986.82-1.86-174.69 79.91-410.71 256.46-507.35z"></path><path fill="#fff" d="M1274.06 1635.7c-109.65 170.98-87.34 410.71-42.75 579.83 16.73 61.33 39.03 122.65 63.19 182.12-118.93-165.4-202.56-353.1-202.56-576.1-1.86-159.83 74.33-366.12 221.15-444.16 39.02-22.3 83.63-35.31 128.23-39.03 76.2-7.43 150.53 9.3 219.29 39.03-156.1 35.31-297.35 120.79-386.55 258.31z"></path><path fill="#fff" d="M3838.68 3128.01c-48.32-5.57-94.78-18.58-137.52-37.16-40.88-18.58-70.62-55.75-78.06-92.92-59.47-301.06-118.93-661.6-170.97-984.96-33.45-221.15-83.63-453.46-68.76-695.05 13.01-234.16 98.5-559.38 362.4-654.16 198.85-70.62 433.01 46.46 537.08 198.85 464.61 691.33-102.21 1956.92-152.39 2198.51-16.73 89.2-210 78.06-291.77 66.9z"></path><path fill="#fff" d="M3862.85 777.11c-66.91-14.87-137.52-16.73-206.28-5.58 27.88-22.29 61.33-40.88 96.64-53.89 48.32-14.87 98.49-18.58 154.24-7.43 102.21 22.3 210 91.06 282.48 182.13 27.88 35.31 52.04 70.62 74.34 109.65-115.23-109.65-250.89-193.28-401.42-224.86z"></path><path d="M4126.75 4666.78c81.77 1.86 204.42-46.46 262.04-104.07 57.61-57.61-128.24-61.33-143.1-57.61-14.87 3.72-200.71 157.96-118.93 161.69z"></path><path d="M3922.86 5514.47c9.68 79.35 44.54 316.59 177.09 275.31 104.24-31.48 195.15-173.24 271.56-247.76 11.53-11.07 136.11-80.32 130.97-83.17 89.03 39.41 439.33 228.13 486.43 47.89 22.98-92.13 5.31-199.45-19.08-291.01-8.33-26.15-21.89-94.87-49.28-130.27 1.03-5.48-1.6-11.66-6.73-14.5-77.27-61.79-381.13 166.66-466.98 180.79-148.08 23.22-497.16-61.25-524.35 13.06-27.88 77.96-11.13 169.98.37 249.67z"></path><path d="M4279.13 4962.27c-65.04-1.86-104.06-16.73-161.68-39.02-13.01-5.57-26.02 11.15-18.58 22.29 40.88 55.75 156.1 135.67 278.76 66.91 85.49-39.03 157.96-115.23 183.99-200.71 7.43-26.02-20.44-29.74-44.61-18.58-98.5 46.46-115.22 172.83-237.88 169.11z"></path><path d="M3959.49 4125.98c7.43-3.71 13.01-7.43 20.44-11.15 94.78-46.47 187.7-96.64 280.62-150.54 16.73-11.15 33.45-20.44 50.18-31.59 224.86-137.52 425.57-288.05 589.12-442.3 13.01-13.01 33.45-16.73 52.03-11.15 16.73 7.43 31.6 24.16 35.31 44.6l42.75 198.85c35.31 169.12-16.73 353.1-118.94 418.15l-265.75 170.97c-35.31 22.3-72.48 33.45-111.51 33.45-104.07-5.57-197-98.49-236.02-241.59l-9.3-37.16c-96.64 59.47-196.99 113.36-297.35 163.54-1.86 0-1.86 1.86-3.71 1.86l27.88 98.49c52.03 178.42-7.43 362.4-133.81 421.86l-323.36 152.39c-35.31 16.73-74.33 26.02-113.37 26.02-137.52 0-271.33-107.79-328.94-267.62l-40.88-118.93-1.86-5.58c-11.15-27.88-9.3-57.61 3.71-83.63 14.87-24.16 37.17-42.74 66.91-50.17 265.75-65.05 581.69-167.26 815.85-278.77z"></path>',9)];const re={},ie={name:"Layout",components:{BunnyHead:(0,ne.Z)(re,[["render",function(e,t){return(0,l.openBlock)(),(0,l.createElementBlock)("svg",oe,ae)}]]),NavItemDropdown:le,InlineSvg:G(),CollapseTransition:Q.Z},methods:{toggleSb:function(){document.body.classList.toggle("sb-sidenav-toggled")},handleSwal:function(){var e=this;this.$page.props.swal&&!this.$page.props.swal.fired&&(this.$page.props.swal.title&&(this.$page.props.swal.title=this.$t(this.$page.props.swal.title)),this.$page.props.swal.text&&(this.$page.props.swal.text=this.$t(this.$page.props.swal.text)),W.Z.fire(this.$page.props.swal).then((function(t){e.$page.props.swal.fired=!0})))},len:function(e){return(Array.isArray(e)?e:Object.keys(e)).length},changeLocale:function(e){var t=this;this.$inertia.get(document.location.href,{locale:e},{preserveScroll:!0,preserveState:!0,onSuccess:function(n){setTimeout((function(){fetch(document.head.querySelector('meta[name="locale"]').content).then((function(e){return e.json()})).then((function(l){t.$i18n.locale=e,t.$i18n.setLocaleMessage(e,l),document.dir=["ar","dv","fa","ha","he","ks","ku","ps","sd","ur","yi"].indexOf(e)>-1?"rtl":"ltr",t.$root.loadGlobals(),t.$root.$el.dispatchEvent(new CustomEvent("locale-changed",{detail:{locale:e,p:n}}))}))}),1)}})},isRoute:function(e){if(!e)return null;var t={},n="";return"string"==typeof e?n=e:(n=e.r,t=e.p),this.route().current(n,t)}},mounted:function(){this.handleSwal()},updated:function(){this.handleSwal()}},se=(0,ne.Z)(ie,[["render",function(e,t,n,K,G,W){var Q,X,Y,ee=(0,l.resolveComponent)("BunnyHead"),te=(0,l.resolveComponent)("inertia-link"),ne=(0,l.resolveComponent)("nav-item-dropdown"),le=(0,l.resolveComponent)("CollapseTransition");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createElementVNode)("header",o,[a,(0,l.createVNode)(te,{class:"navbar-brand h-100",href:e.route("jasmine.dashboard")},{default:(0,l.withCtx)((function(){return[(0,l.createVNode)(ee,{class:"h-100"}),(0,l.createTextVNode)(" Jasmine ")]})),_:1},8,["href"]),(0,l.createElementVNode)("button",{class:"btn btn-link btn-sm order-1 order-lg-0",id:"sidebarToggle",type:"button",onClick:t[0]||(t[0]=(0,l.withModifiers)((function(){return W.toggleSb&&W.toggleSb.apply(W,arguments)}),["prevent"]))},r),i,(0,l.createElementVNode)("ul",s,[(0,l.createVNode)(ne,{id:"langDd","menu-class":"dropdown-menu-dark dropdown-menu-end"},{menu:(0,l.withCtx)((function(){return[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.$globals.interface_locales,(function(t){return(0,l.openBlock)(),(0,l.createElementBlock)("li",null,[e.$i18n.locale!==t?((0,l.openBlock)(),(0,l.createElementBlock)("button",{key:0,type:"button",onClick:function(e){return W.changeLocale(t)},title:t,class:"dropdown-item"},[(0,l.createElementVNode)("span",{textContent:(0,l.toDisplayString)(t),class:"text-uppercase"},null,8,m)],8,d)):(0,l.createCommentVNode)("",!0)])})),256))]})),default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("span",{textContent:(0,l.toDisplayString)(e.$i18n.locale),class:"text-uppercase"},null,8,c)]})),_:1}),(0,l.createVNode)(ne,{id:"profileDd","menu-class":"dropdown-menu-dark dropdown-menu-end"},{menu:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("li",null,[(0,l.createVNode)(te,{class:"dropdown-item",href:e.route("jasmine.profile")},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)((0,l.toDisplayString)(e.$t("Profile")),1)]})),_:1},8,["href"])]),p,(0,l.createElementVNode)("li",null,[(0,l.createVNode)(te,{class:"dropdown-item",as:"button",href:e.route("jasmine.logout"),method:"post"},{default:(0,l.withCtx)((function(){return[(0,l.createTextVNode)((0,l.toDisplayString)(e.$t("Logout")),1)]})),_:1},8,["href"])])]})),default:(0,l.withCtx)((function(){var t,n;return[(0,l.createElementVNode)("img",{class:"rounded-circle h-100",src:null===(t=e.$globals.user)||void 0===t?void 0:t.avatar_url,alt:null===(n=e.$globals.user)||void 0===n?void 0:n.name},null,8,u)]})),_:1})])]),(0,l.createElementVNode)("div",f,[(0,l.createElementVNode)("div",b,[(0,l.createElementVNode)("nav",v,[(0,l.createElementVNode)("div",h,[(0,l.createElementVNode)("div",k,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.$globals.sb_menu||{},(function(t,n){return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:n},[t.children&&W.len(t.children)?((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:0},[(0,l.createElementVNode)("a",{class:(0,l.normalizeClass)(["nav-link",{collapsed:t.open,active:t.active}]),href:"#",role:"button","aria-expanded":t.open?"true":"false","aria-controls":"collapse_"+n,onClick:function(e){return t.open=!t.open}},[(0,l.createElementVNode)("div",V,[t.icon.indexOf("fa-")>-1?((0,l.openBlock)(),(0,l.createElementBlock)("i",{key:0,class:(0,l.normalizeClass)(["fs-4 fas",t.icon])},null,2)):t.icon.indexOf("bi-")>-1?((0,l.openBlock)(),(0,l.createElementBlock)("i",{key:1,class:(0,l.normalizeClass)(["fs-4 bi",t.icon])},null,2)):(0,l.createCommentVNode)("",!0)]),(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.$t(t.title))+" ",1),N],10,g),(0,l.createVNode)(le,null,{default:(0,l.withCtx)((function(){return[(0,l.withDirectives)((0,l.createElementVNode)("div",{id:"collapse_"+n,"aria-labelledby":"headingOne"},[(0,l.createElementVNode)("nav",x,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(t.children,(function(t,n){return(0,l.openBlock)(),(0,l.createBlock)((0,l.resolveDynamicComponent)("_blank"===t.target?"a":"inertia-link"),{key:n,class:(0,l.normalizeClass)(["nav-link",{active:W.isRoute(t["is-route"]||null)}]),target:t.target||"_self",href:t.href},{default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("div",y,[t.icon.indexOf("fa-")>-1?((0,l.openBlock)(),(0,l.createElementBlock)("i",{key:0,class:(0,l.normalizeClass)(["fs-5 fas",t.icon])},null,2)):t.icon.indexOf("bi-")>-1?((0,l.openBlock)(),(0,l.createElementBlock)("i",{key:1,class:(0,l.normalizeClass)(["fs-5 bi",t.icon])},null,2)):(0,l.createCommentVNode)("",!0)]),(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.$t(t.title)),1)]})),_:2},1032,["class","target","href"])})),128))])],8,E),[[l.vShow,t.open]])]})),_:2},1024)],64)):((0,l.openBlock)(),(0,l.createBlock)((0,l.resolveDynamicComponent)("_blank"===t.target?"a":"inertia-link"),{key:1,class:(0,l.normalizeClass)(["nav-link",{active:W.isRoute(t["is-route"]||null)}]),target:t.target||"_self",href:t.href},{default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("div",C,[t.icon.indexOf("fa-")>-1?((0,l.openBlock)(),(0,l.createElementBlock)("i",{key:0,class:(0,l.normalizeClass)(["fs-4 fas",t.icon])},null,2)):t.icon.indexOf("bi-")>-1?((0,l.openBlock)(),(0,l.createElementBlock)("i",{key:1,class:(0,l.normalizeClass)(["fs-4 bi",t.icon])},null,2)):(0,l.createCommentVNode)("",!0)]),(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.$t(t.title)),1)]})),_:2},1032,["class","target","href"]))],64)})),128))])]),w])]),(0,l.createElementVNode)("div",B,[(0,l.createElementVNode)("main",S,[(0,l.createElementVNode)("div",$,[(0,l.createElementVNode)("div",D,[(0,l.createElementVNode)("nav",z,[(0,l.createElementVNode)("ol",_,[(0,l.createElementVNode)("li",L,[(0,l.createVNode)(te,{href:e.route("jasmine.dashboard")},{default:(0,l.withCtx)((function(){return[O]})),_:1},8,["href"])]),(0,l.renderSlot)(e.$slots,"breadcrumbs"),(0,l.createElementVNode)("li",{class:"breadcrumb-item active","aria-current":"page",textContent:(0,l.toDisplayString)(e.$fixed.title)},null,8,F)])]),(0,l.renderSlot)(e.$slots,"pageActions")])]),M,(0,l.createElementVNode)("div",j,[(0,l.createElementVNode)("div",T,[(0,l.renderSlot)(e.$slots,"default")])])]),(0,l.createElementVNode)("footer",R,[(0,l.createElementVNode)("div",J,[(0,l.createElementVNode)("div",Z,[(0,l.createElementVNode)("div",A,[(0,l.createElementVNode)("a",I,[(0,l.createTextVNode)(" JasmineCMS "+(0,l.toDisplayString)(null===(Q=e.$globals.info)||void 0===Q?void 0:Q.jasmine)+" ",1),U]),q,(0,l.createElementVNode)("div",null," Laravel "+(0,l.toDisplayString)(null===(X=e.$globals.info)||void 0===X?void 0:X.laravel),1),H,(0,l.createElementVNode)("div",null," PHP "+(0,l.toDisplayString)(null===(Y=e.$globals.info)||void 0===Y?void 0:Y.php),1)]),P])])])])])],64)}]])}}]);