(self.webpackChunktemplate_angular_material=self.webpackChunktemplate_angular_material||[]).push([[301],{4301:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ScrollSpyModule:()=>p});var i=n(8583),o=n(2759),r=n(7716),c=n(4655),s=n(9992);const l=["scrollSpy"],a=function(){return["./"]};function u(t,e){if(1&t&&(r.TgZ(0,"mat-list-item"),r.TgZ(1,"a",9),r._uU(2),r.qZA(),r.qZA()),2&t){const t=e.$implicit,n=r.oxw();r.ekj("anchored",n.currentSection==="section"+t),r.xp6(1),r.Q6J("routerLink",r.DdM(5,a))("fragment","section"+t),r.xp6(1),r.hij("Section ",t,"")}}function m(t,e){1&t&&(r.TgZ(0,"p"),r._uU(1," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar lacus eu sapien fermentum, quis ultricies enim feugiat. Sed laoreet sem ac lacus aliquam, ut vehicula nisl ultricies. Donec at orci non ligula luctus venenatis. Nulla pretium mollis augue quis semper. Donec interdum, est ut condimentum consectetur, turpis sem maximus purus, et eleifend mi purus nec arcu. Etiam in erat mi. Mauris tristique magna ligula, sed volutpat mi sodales vitae. Mauris mollis eget arcu sed placerat "),r.qZA())}function d(t,e){if(1&t&&(r.TgZ(0,"section",10,11),r.TgZ(2,"h2"),r._uU(3),r.qZA(),r.YNc(4,m,2,0,"p",12),r.qZA()),2&t){const t=e.$implicit,n=r.oxw();r.Q6J("id","section"+t),r.xp6(3),r.hij("Heading for Section ",t,""),r.xp6(1),r.Q6J("ngForOf",n.lorems)}}const g=[{path:"",component:(()=>{class t{constructor(t){this.route=t,this.lorems=[1,2,3,4,5,6,7,8,9,10],(0,o.R)(document,"scroll").subscribe(()=>{for(let t of this.sections){const e=window.scrollY,n=t.nativeElement.offsetTop,i=t.nativeElement.offsetHeight,o=t.nativeElement.getAttribute("id");e>=n-i/5&&e<n+i&&(this.currentSection=o)}})}ngOnInit(){}ngAfterViewInit(){this.route.fragment.subscribe(t=>{const e=document.querySelector(`#${t}`);e&&e.scrollIntoView()})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(c.gz))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-scroll-spy"]],viewQuery:function(t,e){if(1&t&&r.Gf(l,5),2&t){let t;r.iGM(t=r.CRH())&&(e.sections=t)}},decls:13,vars:2,consts:[[1,"container","my-3"],[1,"row","justify-content-center"],[1,"position-fixed","end-0","d-none","d-md-block",2,"width","300px"],[1,"container"],[3,"anchored",4,"ngFor","ngForOf"],[1,"col-md-8"],[1,"d-md-none"],["class","container mb-5",3,"id",4,"ngFor","ngForOf"],[1,"col-md-2","d-none","d-md-block"],[3,"routerLink","fragment"],[1,"container","mb-5",3,"id"],["scrollSpy",""],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"h3"),r._uU(4,"Contents"),r.qZA(),r.TgZ(5,"div",3),r.TgZ(6,"mat-list"),r.YNc(7,u,3,6,"mat-list-item",4),r.qZA(),r.qZA(),r.qZA(),r.TgZ(8,"div",5),r.TgZ(9,"h1",6),r._uU(10,"Scrollspy Content Guide will NOT show in smaller devices"),r.qZA(),r.YNc(11,d,5,3,"section",7),r.qZA(),r._UZ(12,"div",8),r.qZA(),r.qZA()),2&t&&(r.xp6(7),r.Q6J("ngForOf",e.lorems),r.xp6(4),r.Q6J("ngForOf",e.lorems))},directives:[s.i$,i.sg,s.Tg,c.yS],styles:["section[_ngcontent-%COMP%]{scroll-margin-top:5rem}p[_ngcontent-%COMP%]{text-indent:1.5rem;text-align:justify}a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}.mat-list-item[_ngcontent-%COMP%]{border-left:2px solid #dbdbdb}.mat-list-item.anchored[_ngcontent-%COMP%]{border-left:3px solid var(--mat-primary)}.mat-list-item.anchored[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--mat-accent)!important}.mat-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--mat-primary)!important}"]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[c.Bz.forChild(g),i.ez,s.ie]]}),t})()}}]);