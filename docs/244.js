(self.webpackChunktemplate_angular_material=self.webpackChunktemplate_angular_material||[]).push([[244],{6244:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ScrollSpyContainerModule:()=>h});var i=n(8583),o=n(7716),r=n(4655),c=n(7746),s=n(2759);const a=["scrollSpy"],l=["*"];let u=(()=>{class t{constructor(){this.sectionChange=new o.vpe,(0,s.R)(document,"scroll").subscribe(()=>{for(let t of this.sections){const e=window.scrollY,n=t.nativeElement.offsetTop,i=t.nativeElement.offsetHeight,o=t.nativeElement.getAttribute("id");e>=n-i/5&&e<n+i&&this.sectionChange.emit(o)}})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-scroll-spy"]],contentQueries:function(t,e,n){if(1&t&&o.Suo(n,a,4),2&t){let t;o.iGM(t=o.CRH())&&(e.sections=t)}},outputs:{sectionChange:"sectionChange"},ngContentSelectors:l,decls:1,vars:0,template:function(t,e){1&t&&(o.F$t(),o.Hsn(0))},styles:["section{scroll-margin-top:5rem}"],encapsulation:2}),t})();const m=function(){return["./"]};function p(t,e){if(1&t&&(o.TgZ(0,"mat-list-item"),o.TgZ(1,"a",11),o._uU(2),o.qZA(),o.qZA()),2&t){const t=e.$implicit,n=o.oxw();o.ekj("anchored",n.currentSection==="section"+t),o.xp6(1),o.Q6J("routerLink",o.DdM(5,m))("fragment","section"+t),o.xp6(1),o.hij("Section ",t,"")}}function d(t,e){1&t&&(o.TgZ(0,"p"),o._uU(1," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar lacus eu sapien fermentum, quis ultricies enim feugiat. Sed laoreet sem ac lacus aliquam, ut vehicula nisl ultricies. Donec at orci non ligula luctus venenatis. Nulla pretium mollis augue quis semper. Donec interdum, est ut condimentum consectetur, turpis sem maximus purus, et eleifend mi purus nec arcu. Etiam in erat mi. Mauris tristique magna ligula, sed volutpat mi sodales vitae. Mauris mollis eget arcu sed placerat "),o.qZA())}function g(t,e){if(1&t&&(o.TgZ(0,"section",12,13),o.TgZ(2,"h2"),o._uU(3),o.qZA(),o.YNc(4,d,2,0,"p",14),o.qZA()),2&t){const t=e.$implicit,n=o.oxw();o.Q6J("id","section"+t),o.xp6(3),o.hij("Heading for Section ",t,""),o.xp6(1),o.Q6J("ngForOf",n.lorems)}}const f=[{path:"",component:(()=>{class t{constructor(t){this.route=t,this.lorems=[1,2,3,4,5,6,7,8,9,10]}ngOnInit(){}ngAfterViewInit(){this.route.fragment.subscribe(t=>{const e=document.querySelector(`#${t}`);e&&e.scrollIntoView()})}updateCurrentSection(t){this.currentSection=t}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-scroll-spy-container"]],decls:16,vars:3,consts:[[1,"container","my-3"],[1,"row","justify-content-center"],[1,"w-25","h-100","position-fixed","end-0","d-none","d-md-block",2,"overflow-y","auto"],[1,"mat-caption"],[1,"container"],[3,"anchored",4,"ngFor","ngForOf"],[1,"col-md-8"],[1,"d-md-none"],[3,"sectionChange"],["class","container mb-5",3,"id",4,"ngFor","ngForOf"],[1,"col-md-2","d-none","d-md-block"],[3,"routerLink","fragment"],[1,"container","mb-5",3,"id"],["scrollSpy",""],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h3"),o._uU(4,"Contents"),o.qZA(),o.TgZ(5,"p",3),o._uU(6),o.qZA(),o.TgZ(7,"div",4),o.TgZ(8,"mat-list"),o.YNc(9,p,3,6,"mat-list-item",5),o.qZA(),o.qZA(),o.qZA(),o.TgZ(10,"div",6),o.TgZ(11,"h1",7),o._uU(12,"Scrollspy Content Guide will NOT show in smaller devices"),o.qZA(),o.TgZ(13,"app-scroll-spy",8),o.NdJ("sectionChange",function(t){return e.updateCurrentSection(t)}),o.YNc(14,g,5,3,"section",9),o.qZA(),o.qZA(),o._UZ(15,"div",10),o.qZA(),o.qZA()),2&t&&(o.xp6(6),o.hij("Current section: #",e.currentSection,""),o.xp6(3),o.Q6J("ngForOf",e.lorems),o.xp6(5),o.Q6J("ngForOf",e.lorems))},directives:[c.i$,i.sg,u,c.Tg,r.yS],styles:["p[_ngcontent-%COMP%]{text-indent:1.5rem;text-align:justify}a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}.mat-list-item[_ngcontent-%COMP%]{border-left:2px solid #dbdbdb}.mat-list-item.anchored[_ngcontent-%COMP%]{border-left:3px solid var(--mat-primary)}.mat-list-item.anchored[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--mat-accent)!important}.mat-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--mat-primary)!important}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.Bz.forChild(f),i.ez,c.ie]]}),t})()}}]);