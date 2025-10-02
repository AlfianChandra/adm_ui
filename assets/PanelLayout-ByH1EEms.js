import{C as R}from"./ClientTopNavigation-CIHQSj3q.js";import{B as H,k as B,R as N,s as K,G as T,Y as U,D as Z,H as L,x as O,S as j,l as g,I,J as P,m as l,L as W,q as Y,c as r,v as c,o as a,g as v,t as q,e as h,z as G,y as M,A as z,j as C,w as A,h as b,T as J,r as w,F as p,M as S,i as Q,d as D,a as X,f as $}from"./index-DBMEVp1H.js";import{O as ee,C as te}from"./index-BApbaFuV.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BRvtBi4u.js";import"./emitter-D5Wayz47.js";import"./index-BQyn2uZA.js";import"./userStore-DHvrrwQG.js";var ne=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,ie={root:function(e){var n=e.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var n=e.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},se=H.extend({name:"menu",style:ne,classes:ie}),ae={name:"BaseMenu",extends:K,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:se,provide:function(){return{$pcMenu:this,$parentInstance:this}}},F={name:"Menuitem",hostName:"Menu",extends:K,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,n){return e&&e.item?W(e.item[n]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:l({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:l({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},computed:{dataP:function(){return T({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:N}},oe=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled","data-p"],re=["data-p"],le=["href","target"],de=["data-p"],ue=["data-p"];function ce(t,e,n,s,d,i){var y=Y("ripple");return i.visible()?(a(),r("li",l({key:0,id:n.id,class:[t.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled(),"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1,"data-p":i.dataP},i.getPTOptions("item")),[v("div",l({class:t.cx("itemContent"),onClick:e[0]||(e[0]=function(f){return i.onItemClick(f)}),onMousemove:e[1]||(e[1]=function(f){return i.onItemMouseMove(f)}),"data-p":i.dataP},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(a(),h(M(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):c("",!0):q((a(),r("a",l({key:0,href:n.item.url,class:t.cx("itemLink"),target:n.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[n.templates.itemicon?(a(),h(M(n.templates.itemicon),{key:0,item:n.item,class:G(t.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(a(),r("span",l({key:1,class:[t.cx("itemIcon"),n.item.icon],"data-p":i.dataP},i.getPTOptions("itemIcon")),null,16,de)):c("",!0),v("span",l({class:t.cx("itemLabel"),"data-p":i.dataP},i.getPTOptions("itemLabel")),z(i.label()),17,ue)],16,le)),[[y]])],16,re)],16,oe)):c("",!0)}F.render=ce;function E(t){return he(t)||fe(t)||pe(t)||me()}function me(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(t,e){if(t){if(typeof t=="string")return x(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}function fe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function he(t){if(Array.isArray(t))return x(t)}function x(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=Array(e);n<e;n++)s[n]=t[n];return s}var V={name:"Menu",extends:ae,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&O.clear(this.container),this.container=null},methods:{itemClick:function(e){var n=e.item;this.disabled(n)||(this.overlayVisible&&this.hide(),n.command&&n.command(e),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(g(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)g(this.target),this.hide(),e.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(I(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var n=P(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=n&&P(n,'a[data-pc-section="itemlink"]');this.popup&&g(this.target),s?s.click():n&&n.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var n=I(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=E(n).findIndex(function(d){return d.id===e});return s>-1?s+1:0},findPrevOptionIndex:function(e){var n=I(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=E(n).findIndex(function(d){return d.id===e});return s>-1?s-1:0},changeFocusedOptionIndex:function(e){var n=I(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=e>=n.length?n.length-1:e<0?0:e;s>-1&&(this.focusedOptionIndex=n[s].getAttribute("id"))},toggle:function(e,n){this.overlayVisible?this.hide():this.show(e,n)},show:function(e,n){this.overlayVisible=!0,this.target=n??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){j(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&O.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&g(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&O.clear(e)},alignOverlay:function(){Z(this.container,this.target);var e=L(this.target);e>L(this.container)&&(this.container.style.minWidth=L(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=e.container&&!e.container.contains(n.target),d=!(e.target&&(e.target===n.target||e.target.contains(n.target)));e.overlayVisible&&s&&d?e.hide():!e.popup&&s&&d&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new te(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!U()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){ee.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},dataP:function(){return T({popup:this.popup})}},components:{PVMenuitem:F,Portal:B}},be=["id","data-p"],ve=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],ye=["id"];function ge(t,e,n,s,d,i){var y=C("PVMenuitem"),f=C("Portal");return a(),h(f,{appendTo:t.appendTo,disabled:!t.popup},{default:A(function(){return[b(J,l({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:A(function(){return[!t.popup||d.overlayVisible?(a(),r("div",l({key:0,ref:i.containerRef,id:t.$id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),"data-p":i.dataP},t.ptmi("root")),[t.$slots.start?(a(),r("div",l({key:0,class:t.cx("start")},t.ptm("start")),[w(t.$slots,"start")],16)):c("",!0),v("ul",l({ref:i.listRef,id:t.$id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":d.focused?i.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},t.ptm("list")),[(a(!0),r(p,null,S(t.model,function(o,u){return a(),r(p,{key:i.label(o)+u.toString()},[o.items&&i.visible(o)&&!o.separator?(a(),r(p,{key:0},[o.items?(a(),r("li",l({key:0,id:t.$id+"_"+u,class:[t.cx("submenuLabel"),o.class],role:"none"},{ref_for:!0},t.ptm("submenuLabel")),[w(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:o},function(){return[Q(z(i.label(o)),1)]})],16,ye)):c("",!0),(a(!0),r(p,null,S(o.items,function(m,k){return a(),r(p,{key:m.label+u+"_"+k},[i.visible(m)&&!m.separator?(a(),h(y,{key:0,id:t.$id+"_"+u+"_"+k,item:m,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(m)&&m.separator?(a(),r("li",l({key:"separator"+u+k,class:[t.cx("separator"),o.class],style:m.style,role:"separator"},{ref_for:!0},t.ptm("separator")),null,16)):c("",!0)],64)}),128))],64)):i.visible(o)&&o.separator?(a(),r("li",l({key:"separator"+u.toString(),class:[t.cx("separator"),o.class],style:o.style,role:"separator"},{ref_for:!0},t.ptm("separator")),null,16)):(a(),h(y,{key:i.label(o)+u.toString(),id:t.$id+"_"+u,item:o,index:u,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,ve),t.$slots.end?(a(),r("div",l({key:1,class:t.cx("end")},t.ptm("end")),[w(t.$slots,"end")],16)):c("",!0)],16,be)):c("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}V.render=ge;const Ie={class:"asnav"},ke=D({__name:"PanelAsideNavigaion",setup(t){const e=X([{label:"Dasbor",icon:"pi pi-fw pi-home",command:()=>{window.location.href="/syspanel/home"}},{label:"Inventaris",icon:"pi pi-fw pi-calendar-clock",command:()=>{window.location.href="/syspanel/inventaris"}},{label:"Pengajuan Peminjaman",icon:"pi pi-fw pi-arrow-right-arrow-left",command:()=>{window.location.href="/syspanel/pengajuan"}}]);return(n,s)=>(a(),r("div",Ie,[b($(V),{model:e.value},null,8,["model"])]))}}),Le=_(ke,[["__scopeId","data-v-d6b22a4e"]]),Oe={class:"main-wrapper"},we={class:"body-wrapper"},Ce=D({__name:"PanelLayout",setup(t){return(e,n)=>{const s=C("RouterView");return a(),r(p,null,[b(R),b(Le),v("div",Oe,[v("div",we,[b(s)])])],64)}}}),ze=_(Ce,[["__scopeId","data-v-e8a6404f"]]);export{ze as default};
