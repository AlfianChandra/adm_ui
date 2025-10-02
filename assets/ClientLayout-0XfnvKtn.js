import{l as v,C as Z}from"./ClientTopNavigation-CIHQSj3q.js";import{s as H}from"./index-hut-CSFC.js";import{s as _}from"./index-BRvtBi4u.js";import{s as R,r as K}from"./request-hJgE7wVb.js";import{t as g,e as z}from"./emitter-D5Wayz47.js";import{B as F,s as U,c as L,o as f,r as I,m as d,d as $,u as M,a as O,b as W,e as P,w as u,n as h,f as i,g as s,h as l,i as y,j as S,k as q,C as E,l as j,Y as J,D as Q,K as D,p as X,W as ee,x as T,q as te,T as ne,t as oe,v as V,F as B,y as N,z as ie,A as C,E as G}from"./index-DBMEVp1H.js";import{u as re}from"./userStore-DHvrrwQG.js";import{F as ae,O as le,C as se}from"./index-BApbaFuV.js";import"./index-BQyn2uZA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";var ce=`
    .p-iftalabel {
        display: block;
        position: relative;
    }

    .p-iftalabel label {
        position: absolute;
        pointer-events: none;
        top: dt('iftalabel.top');
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-size: dt('iftalabel.font.size');
        font-weight: dt('iftalabel.font.weight');
        inset-inline-start: dt('iftalabel.position.x');
        color: dt('iftalabel.color');
        transition-duration: dt('iftalabel.transition.duration');
    }

    .p-iftalabel .p-inputtext,
    .p-iftalabel .p-textarea,
    .p-iftalabel .p-select-label,
    .p-iftalabel .p-multiselect-label,
    .p-iftalabel .p-autocomplete-input-multiple,
    .p-iftalabel .p-cascadeselect-label,
    .p-iftalabel .p-treeselect-label {
        padding-block-start: dt('iftalabel.input.padding.top');
        padding-block-end: dt('iftalabel.input.padding.bottom');
    }

    .p-iftalabel:has(.p-invalid) label {
        color: dt('iftalabel.invalid.color');
    }

    .p-iftalabel:has(input:focus) label,
    .p-iftalabel:has(input:-webkit-autofill) label,
    .p-iftalabel:has(textarea:focus) label,
    .p-iftalabel:has(.p-inputwrapper-focus) label {
        color: dt('iftalabel.focus.color');
    }

    .p-iftalabel .p-inputicon {
        top: dt('iftalabel.input.padding.top');
        transform: translateY(25%);
        margin-top: 0;
    }
`,pe={root:"p-iftalabel"},ue=F.extend({name:"iftalabel",style:ce,classes:pe}),de={name:"BaseIftaLabel",extends:U,style:ue,provide:function(){return{$pcIftaLabel:this,$parentInstance:this}}},k={name:"IftaLabel",extends:de,inheritAttrs:!1};function fe(t,e,n,p,a,r){return f(),L("span",d({class:t.cx("root")},t.ptmi("root")),[I(t.$slots,"default")],16)}k.render=fe;const me={style:{display:"flex","flex-flow":"column",gap:"0.5rem"}},be={style:{padding:"0",margin:"0"}},ve=$({__name:"LoginDialog",setup(t){const e=M(),n=O({username:"",password:""}),p=O(!1),a=()=>{z.on("showLogin",()=>{p.value=!0})},r=()=>{if(n.value.username.trim()===""||n.value.password.trim()===""){e.add({severity:"warn",summary:"Kesalahan",detail:"NIP / ID atau sandi tidak boleh kosong",life:3e3});return}K.post("auth/login",n.value).then(b=>{p.value=!1,re.setToken(b.payload.token),e.add({severity:"success",summary:"Berhasil",detail:"Login Berhasil",life:3e3}),window.location.href="/"}).catch(b=>{e.add({severity:"error",summary:"Gagal",detail:"Akun tidak diketahui",life:3e3})})},w=()=>{p.value=!1,z.emit("showRegister")};return W(()=>{a()}),(b,o)=>{const m=S("fasicon");return f(),P(i(H),{modal:"",visible:p.value,"onUpdate:visible":o[2]||(o[2]=c=>p.value=c),header:i(v).getText("LOGIN_DIALOG_MODAL_HEADER"),draggable:!0,style:h([{background:`${i(g).isDark?"rgba(0,0,0,0.7)":"rgba(255,255,255,0.7)"}`},{"backdrop-filter":"blur(4px)","-webkit-backdrop-filter":"blur(4px)",width:"30vw"}])},{default:u(()=>[s("div",me,[l(i(k),null,{default:u(()=>[o[3]||(o[3]=s("label",null,"NIP / ID",-1)),l(i(R),{modelValue:n.value.username,"onUpdate:modelValue":o[0]||(o[0]=c=>n.value.username=c),style:{width:"100%"},placeholder:"Masukkan NIP / ID Anda"},null,8,["modelValue"])]),_:1,__:[3]}),l(i(k),null,{default:u(()=>[o[4]||(o[4]=s("label",null,"Sandi",-1)),l(i(R),{modelValue:n.value.password,"onUpdate:modelValue":o[1]||(o[1]=c=>n.value.password=c),style:{width:"100%"},type:"password",placeholder:"Masukkan Sandi Anda"},null,8,["modelValue"])]),_:1,__:[4]}),l(i(_),{onClick:r,style:{"margin-bottom":"1rem"}},{default:u(()=>o[5]||(o[5]=[y("Masuk",-1)])),_:1,__:[5]}),s("p",be,[l(m,{icon:"plus-circle"}),o[6]||(o[6]=y(" Belum punya akun? Buat akun ",-1)),s("a",{onClick:w,href:"javascript:;",style:h([{"text-decoration":"none","font-weight":"bold"},{color:`${i(g).activePrimaryColor}`}])},"disini",4)])])]),_:1},8,["visible","header","style"])}}});var ge=`
    .p-confirmpopup {
        position: absolute;
        margin-top: dt('confirmpopup.gutter');
        top: 0;
        left: 0;
        background: dt('confirmpopup.background');
        color: dt('confirmpopup.color');
        border: 1px solid dt('confirmpopup.border.color');
        border-radius: dt('confirmpopup.border.radius');
        box-shadow: dt('confirmpopup.shadow');
    }

    .p-confirmpopup-content {
        display: flex;
        align-items: center;
        padding: dt('confirmpopup.content.padding');
        gap: dt('confirmpopup.content.gap');
    }

    .p-confirmpopup-icon {
        font-size: dt('confirmpopup.icon.size');
        width: dt('confirmpopup.icon.size');
        height: dt('confirmpopup.icon.size');
        color: dt('confirmpopup.icon.color');
    }

    .p-confirmpopup-footer {
        display: flex;
        justify-content: flex-end;
        gap: dt('confirmpopup.footer.gap');
        padding: dt('confirmpopup.footer.padding');
    }

    .p-confirmpopup-footer button {
        width: auto;
    }

    .p-confirmpopup-footer button:last-child {
        margin: 0;
    }

    .p-confirmpopup-flipped {
        margin-block-start: calc(dt('confirmpopup.gutter') * -1);
        margin-block-end: dt('confirmpopup.gutter');
    }

    .p-confirmpopup-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-confirmpopup-leave-to {
        opacity: 0;
    }

    .p-confirmpopup-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-confirmpopup-leave-active {
        transition: opacity 0.1s linear;
    }

    .p-confirmpopup:after,
    .p-confirmpopup:before {
        bottom: 100%;
        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirmpopup:after {
        border-width: calc(dt('confirmpopup.gutter') - 2px);
        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.background');
    }

    .p-confirmpopup:before {
        border-width: dt('confirmpopup.gutter');
        margin-left: calc(-1 * dt('confirmpopup.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.border.color');
    }

    .p-confirmpopup-flipped:after,
    .p-confirmpopup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirmpopup-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.background');
    }

    .p-confirmpopup-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.border.color');
    }
`,he={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},ye=F.extend({name:"confirmpopup",style:ge,classes:he}),Le={name:"BaseConfirmPopup",extends:U,props:{group:String},style:ye,provide:function(){return{$pcConfirmPopup:this,$parentInstance:this}}},Y={name:"ConfirmPopup",extends:Le,inheritAttrs:!1,data:function(){return{visible:!1,confirmation:null,autoFocusAccept:null,autoFocusReject:null,target:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted:function(){var e=this;this.confirmListener=function(n){n&&n.group===e.group&&(e.confirmation=n,e.target=n.target,e.confirmation.onShow&&e.confirmation.onShow(),e.visible=!0)},this.closeListener=function(){e.visible=!1,e.confirmation=null},E.on("confirm",this.confirmListener),E.on("close",this.closeListener)},beforeUnmount:function(){E.off("confirm",this.confirmListener),E.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(T.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&(this.accept(),j(this.target),e.preventDefault())},onRejectKeydown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&(this.reject(),j(this.target),e.preventDefault())},onEnter:function(e){this.autoFocusAccept=this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept",this.autoFocusReject=this.confirmation.defaultFocus==="reject",this.target=this.target||document.activeElement,this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),T.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterEnter:function(){this.focus()},onLeave:function(){this.autoFocusAccept=null,this.autoFocusReject=null,j(this.target),this.target=null,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave:function(e){T.clear(e)},alignOverlay:function(){Q(this.container,this.target,!1);var e=D(this.container),n=D(this.target),p=0;e.left<n.left&&(p=n.left-e.left),this.container.style.setProperty(X("confirmpopup.arrow.left").name,"".concat(p,"px")),e.top<n.top&&(this.container.setAttribute("data-p-confirmpopup-flipped","true"),!this.isUnstyled&&ee(this.container,"p-confirmpopup-flipped"))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.visible&&e.container&&!e.container.contains(n.target)&&!e.isTargetClicked(n)?(e.confirmation.onHide&&e.confirmation.onHide(),e.visible=!1):e.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new se(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!J()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus({preventScroll:!0})},isTargetClicked:function(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef:function(e){this.container=e},onOverlayClick:function(e){le.emit("overlay-click",{originalEvent:e,target:this.target})},onOverlayKeydown:function(e){e.code==="Escape"&&(E.emit("close",this.closeListener),j(this.target))}},computed:{message:function(){return this.confirmation?this.confirmation.message:null},acceptLabel:function(){if(this.confirmation){var e,n=this.confirmation;return n.acceptLabel||((e=n.acceptProps)===null||e===void 0?void 0:e.label)||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var e,n=this.confirmation;return n.rejectLabel||((e=n.rejectProps)===null||e===void 0?void 0:e.label)||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var e;return this.confirmation?this.confirmation.acceptIcon:(e=this.confirmation)!==null&&e!==void 0&&e.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var e;return this.confirmation?this.confirmation.rejectIcon:(e=this.confirmation)!==null&&e!==void 0&&e.rejectProps?this.confirmation.rejectProps.icon:null}},components:{Button:_,Portal:q},directives:{focustrap:ae}},ke=["aria-modal"];function we(t,e,n,p,a,r){var w=S("Button"),b=S("Portal"),o=te("focustrap");return f(),P(b,null,{default:u(function(){return[l(ne,d({name:"p-confirmpopup",onEnter:r.onEnter,onAfterEnter:r.onAfterEnter,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave},t.ptm("transition")),{default:u(function(){var m,c,x;return[a.visible?oe((f(),L("div",d({key:0,ref:r.containerRef,role:"alertdialog",class:t.cx("root"),"aria-modal":a.visible,onClick:e[2]||(e[2]=function(){return r.onOverlayClick&&r.onOverlayClick.apply(r,arguments)}),onKeydown:e[3]||(e[3]=function(){return r.onOverlayKeydown&&r.onOverlayKeydown.apply(r,arguments)})},t.ptmi("root")),[t.$slots.container?I(t.$slots,"container",{key:0,message:a.confirmation,acceptCallback:r.accept,rejectCallback:r.reject}):(f(),L(B,{key:1},[t.$slots.message?(f(),P(N(t.$slots.message),{key:1,message:a.confirmation},null,8,["message"])):(f(),L("div",d({key:0,class:t.cx("content")},t.ptm("content")),[I(t.$slots,"icon",{},function(){return[t.$slots.icon?(f(),P(N(t.$slots.icon),{key:0,class:ie(t.cx("icon"))},null,8,["class"])):a.confirmation.icon?(f(),L("span",d({key:1,class:[a.confirmation.icon,t.cx("icon")]},t.ptm("icon")),null,16)):V("",!0)]}),s("span",d({class:t.cx("message")},t.ptm("message")),C(a.confirmation.message),17)],16)),s("div",d({class:t.cx("footer")},t.ptm("footer")),[l(w,d({class:[t.cx("pcRejectButton"),a.confirmation.rejectClass],autofocus:a.autoFocusReject,unstyled:t.unstyled,size:((m=a.confirmation.rejectProps)===null||m===void 0?void 0:m.size)||"small",text:((c=a.confirmation.rejectProps)===null||c===void 0?void 0:c.text)||!1,onClick:e[0]||(e[0]=function(A){return r.reject()}),onKeydown:r.onRejectKeydown},a.confirmation.rejectProps,{label:r.rejectLabel,pt:t.ptm("pcRejectButton")}),G({_:2},[r.rejectIcon||t.$slots.rejecticon?{name:"icon",fn:u(function(A){return[I(t.$slots,"rejecticon",{},function(){return[s("span",d({class:[r.rejectIcon,A.class]},t.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","text","onKeydown","label","pt"]),l(w,d({class:[t.cx("pcAcceptButton"),a.confirmation.acceptClass],autofocus:a.autoFocusAccept,unstyled:t.unstyled,size:((x=a.confirmation.acceptProps)===null||x===void 0?void 0:x.size)||"small",onClick:e[1]||(e[1]=function(A){return r.accept()}),onKeydown:r.onAcceptKeydown},a.confirmation.acceptProps,{label:r.acceptLabel,pt:t.ptm("pcAcceptButton")}),G({_:2},[r.acceptIcon||t.$slots.accepticon?{name:"icon",fn:u(function(A){return[I(t.$slots,"accepticon",{},function(){return[s("span",d({class:[r.acceptIcon,A.class]},t.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","onKeydown","label","pt"])],16)],64))],16,ke)),[[o]]):V("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3})}Y.render=we;const Ce=()=>({validateEmail:a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)&&a.length>8&&a.length<40,validatePassword:a=>/^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/.test(a),validatePhone:a=>/^62\d{8,14}$/.test(a),validateName:a=>/^[A-Za-z\s]{3,20}$/.test(a)}),Re=Ce(),Ae={style:{display:"flex","flex-flow":"column",gap:"1rem"}},Ee={style:{margin:"0",padding:"0"}},Ie={style:{padding:"0",margin:"0"}},Se=$({__name:"RegisterDialog",setup(t){const e=M(),n=O({nip:"",name:"",title:"",password:""}),p=O(!1),a=()=>{z.on("showRegister",()=>{p.value=!0})},r=()=>{if(n.value.nip.trim()===""){e.add({severity:"error",summary:"NIP tidak valid",detail:"",life:3e3});return}if(n.value.name.trim()===""){e.add({severity:"error",summary:"Nama tidak valid",detail:"",life:3e3});return}if(n.value.title.trim()===""){e.add({severity:"error",summary:"Gelar tidak valid",detail:"",life:3e3});return}if(!Re.validatePassword(n.value.password)){e.add({severity:"error",summary:"Password tidak valid",detail:"",life:3e3});return}K.post("user/register",n.value).then(b=>{n.value={nip:"",name:"",title:"",password:""},e.add({severity:"success",summary:"Berhasil",detail:"Akun berhasil didaftarkan!",life:3e3}),p.value=!1}).catch(b=>{e.add({severity:"error",summary:"Gagal",detail:"Pendaftaran akun gagal!",life:3e3})})},w=()=>{p.value=!1,z.emit("showLogin")};return W(()=>{a()}),(b,o)=>{const m=S("fasicon");return f(),L(B,null,[l(i(H),{modal:"",visible:p.value,"onUpdate:visible":o[5]||(o[5]=c=>p.value=c),draggable:!0,header:i(v).getText("REGISTER_DIALOG_HEADER"),style:h([{background:`${i(g).isDark?"rgba(0,0,0,0.7)":"rgba(255,255,255,0.7)"}`},{"backdrop-filter":"blur(4px)","-webkit-backdrop-filter":"blur(4px)",width:"30vw"}])},{default:u(()=>[s("div",Ae,[s("p",Ee,C(i(v).getText("REGISTER_DIALOG_SUBHEADER")),1),l(i(k),null,{default:u(()=>[o[7]||(o[7]=s("label",null,"NIP",-1)),l(i(R),{modelValue:n.value.nip,"onUpdate:modelValue":o[0]||(o[0]=c=>n.value.nip=c),style:{width:"100%"},placeholder:"Masukkan NIP"},null,8,["modelValue"]),s("span",{style:h([{color:`${i(g).activePrimaryColor}`},{"font-size":"12px"}])},[l(m,{icon:"info-circle"}),o[6]||(o[6]=y(" NIP",-1))],4)]),_:1,__:[7]}),l(i(k),null,{default:u(()=>[o[9]||(o[9]=s("label",null,"Nama Lengkap",-1)),l(i(R),{modelValue:n.value.name,"onUpdate:modelValue":o[1]||(o[1]=c=>n.value.name=c),style:{width:"100%"},placeholder:"Masukkan Nama Lengkap (Termasuk gelar depan)"},null,8,["modelValue"]),s("span",{style:h([{color:`${i(g).activePrimaryColor}`},{"font-size":"12px"}])},[l(m,{icon:"info-circle"}),o[8]||(o[8]=y(" Nama Lengkap",-1))],4)]),_:1,__:[9]}),l(i(k),null,{default:u(()=>[o[11]||(o[11]=s("label",null,"Gelar",-1)),l(i(R),{modelValue:n.value.title,"onUpdate:modelValue":o[2]||(o[2]=c=>n.value.title=c),style:{width:"100%"},placeholder:"Contoh: S.Kom. | S.Kom., M.Kom"},null,8,["modelValue"]),s("span",{style:h([{color:`${i(g).activePrimaryColor}`},{"font-size":"12px"}])},[l(m,{icon:"info-circle"}),o[10]||(o[10]=y(" Gelar",-1))],4)]),_:1,__:[11]}),l(i(k),null,{default:u(()=>[s("label",null,C(i(v).getText("REGISTER_DIALOG_INPUT_PASSWORD_LABEL")),1),l(i(R),{modelValue:n.value.password,"onUpdate:modelValue":o[3]||(o[3]=c=>n.value.password=c),style:{width:"100%"},type:"password",placeholder:i(v).getText("REGISTER_DIALOG_INPUT_PASSWORD_PLC")},null,8,["modelValue","placeholder"]),s("span",{style:h([{color:`${i(g).activePrimaryColor}`},{"font-size":"12px"}])},[l(m,{icon:"info-circle"}),y(" "+C(i(v).getText("REGISTER_DIALOG_PASSWORD_HINT")),1)],4)]),_:1}),l(i(_),{onClick:o[4]||(o[4]=c=>r())},{default:u(()=>[y(C(i(v).getText("REGISTER_DIALOG_BUTTON_REGISTER")),1)]),_:1}),s("p",Ie,[o[12]||(o[12]=y("Sudah punya akun? ",-1)),s("a",{onClick:w,href:"javascript:;",style:h([{"text-decoration":"none","font-weight":"bold"},{color:`${i(g).activePrimaryColor}`}])},C(i(v).getText("REGISTER_DIALOG_TO_LOGIN")),5)])])]),_:1},8,["visible","header","style"]),l(i(Y))],64)}}}),je={style:{width:"100%","box-sizing":"border-box","padding-top":"3.5rem"}},Ne=$({__name:"ClientLayout",setup(t){return(e,n)=>{const p=S("RouterView");return f(),L(B,null,[l(Z),s("div",je,[l(p)]),l(ve),l(Se)],64)}}});export{Ne as default};
