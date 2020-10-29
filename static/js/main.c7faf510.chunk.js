(this["webpackJsonproisy.github.io"]=this["webpackJsonproisy.github.io"]||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(8),i=t.n(o),r=(t(15),t(1)),c=t(2),s=t(3),m=t(4),d=t(6),p=t(5),u=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={width:0,height:0},l.updateWindowDimensions=l.updateWindowDimensions.bind(Object(d.a)(l)),l}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){return n.a.createElement("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navbar-header"},n.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}," ",n.a.createElement("span",{className:"sr-only"},"Toggle navigation")," ",n.a.createElement("span",{className:"icon-bar"})," ",n.a.createElement("span",{className:"icon-bar"})," ",n.a.createElement("span",{className:"icon-bar"})," "),n.a.createElement("a",{className:"navbar-brand page-scroll",href:"#page-top"},"ROISY")," "),n.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},this.state.width>this.state.height?n.a.createElement("ul",{className:"nav navbar-nav navbar-right",style:{marginLeft:"7%"}},n.a.createElement("li",null,n.a.createElement("a",{className:"git",href:"https://github.com/roisy/"},n.a.createElement(p.a,{className:"fa",size:24}))),n.a.createElement("li",null,n.a.createElement("a",{class:"youtube",href:"https://www.youtube.com/channel/UCnob9ZsHJMc_JS1JkveE5bA/"},n.a.createElement(p.c,{className:"fa",size:24}))),n.a.createElement("li",null,n.a.createElement("a",{className:"insta",href:"https://www.instagram.com/roisy.sa/"},n.a.createElement(p.b,{size:24})))):n.a.createElement("div",null),n.a.createElement("ul",{className:"nav navbar-nav navbar-right"},n.a.createElement("li",null,n.a.createElement("a",{href:"#about",className:"page-scroll"},"Nosotros")),n.a.createElement("li",null,n.a.createElement("a",{href:"#services",className:"page-scroll"},"Proyectos")),n.a.createElement("li",null,n.a.createElement("a",{href:"#portfolio",className:"page-scroll"},"Galer\xeda")),n.a.createElement("li",null,n.a.createElement("a",{href:"#team",className:"page-scroll"},"Equipo")),n.a.createElement("li",null,n.a.createElement("a",{href:"#contact",className:"page-scroll"},"Contacto"))))))}}]),t}(l.Component),g=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{id:"header"},n.a.createElement("div",{className:"intro"},n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 intro-text"},n.a.createElement("h1",{id:"ROISY-name"},this.props.data?this.props.data.title:"Loading",n.a.createElement("span",null)),n.a.createElement("p",null,this.props.data?this.props.data.paragraph:"Loading"),n.a.createElement("a",{href:"#contact",className:"btn btn-custom btn-lg page-scroll"},"Contacta con nosotros")," "))))))}}]),t}(l.Component),E=(l.Component,function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"about"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-12 col-md-6"}," ",n.a.createElement("img",{src:"img/roisy_team.jpg",className:"img-responsive",alt:""})," "),n.a.createElement("div",{className:"col-xs-12 col-md-6"},n.a.createElement("div",{className:"about-text"},n.a.createElement("h2",null,"Sobre nosotros"),n.a.createElement("p",null,this.props.data?this.props.data.paragraph:"loading..."),n.a.createElement("h3",null,"Experiencia"),n.a.createElement("div",{className:"list-style"},n.a.createElement("div",{className:"col-lg-6 col-sm-6 col-xs-12"},n.a.createElement("ul",null,this.props.data?this.props.data.Why.map((function(e,a){return n.a.createElement("li",{key:"".concat(e,"-").concat(a)},e)})):"loading")),n.a.createElement("div",{className:"col-lg-6 col-sm-6 col-xs-12"},n.a.createElement("ul",null,this.props.data?this.props.data.Why2.map((function(e,a){return n.a.createElement("li",{key:"".concat(e,"-").concat(a)}," ",e)})):"loading"))))))))}}]),t}(l.Component)),v=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"services",className:"text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,"Nuestros proyectos")),n.a.createElement("div",{className:"row"},this.props.data?this.props.data.map((function(e,a){return n.a.createElement("div",{key:"".concat(e.name,"-").concat(a),className:"col-md-4"}," ",n.a.createElement("i",{className:e.icon}),n.a.createElement("div",{className:"service-desc"},n.a.createElement("h3",null,e.name),n.a.createElement("p",null,e.text)))})):"loading")))}}]),t}(l.Component),h=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"portfolio",className:"text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,"Gallery")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"portfolio-items"},n.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-4"},n.a.createElement("div",{className:"portfolio-item"},n.a.createElement("div",{className:"hover-bg"}," ",n.a.createElement("a",{href:"img/portfolio/proyectos/IMG_20201017_163004.jpg",title:"Project Title","data-lightbox-gallery":"gallery1"},n.a.createElement("div",{className:"hover-text"},n.a.createElement("h4",null,"Eevaa")),n.a.createElement("img",{src:"img/portfolio/proyectos/IMG_20201017_163004.jpg",className:"img-responsive",alt:"Project Title"})," ")," "))),n.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-4"},n.a.createElement("div",{className:"portfolio-item"},n.a.createElement("div",{className:"hover-bg"}," ",n.a.createElement("a",{href:"img/portfolio/proyectos/IMG_20201017_163146.jpg",title:"Project Title","data-lightbox-gallery":"gallery1"},n.a.createElement("div",{className:"hover-text"},n.a.createElement("h4",null,"M\xe1scara de silicona de Eevaa")),n.a.createElement("img",{src:"img/portfolio/proyectos/IMG_20201017_163146.jpg",className:"img-responsive",alt:"Project Title"})," ")," "))),n.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-4"},n.a.createElement("div",{className:"portfolio-item"},n.a.createElement("div",{className:"hover-bg"}," ",n.a.createElement("a",{href:"img/portfolio/proyectos/IMG_20201017_163336.jpg",title:"Project Title","data-lightbox-gallery":"gallery1"},n.a.createElement("div",{className:"hover-text"},n.a.createElement("h4",null,"Robot esf\xe9rico")),n.a.createElement("img",{src:"img/portfolio/proyectos/IMG_20201017_163336.jpg",className:"img-responsive",alt:"Project Title"})," ")," "))),n.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-4"},n.a.createElement("div",{className:"portfolio-item"},n.a.createElement("div",{className:"hover-bg"}," ",n.a.createElement("a",{href:"img/portfolio/proyectos/IMG_20201017_163352.jpg",title:"Project Title","data-lightbox-gallery":"gallery1"},n.a.createElement("div",{className:"hover-text"},n.a.createElement("h4",null,"Electr\xf3nica robot esf\xe9rico")),n.a.createElement("img",{src:"img/portfolio/proyectos/IMG_20201017_163352.jpg",className:"img-responsive",alt:"Project Title"})," ")," "))),n.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-4"},n.a.createElement("div",{className:"portfolio-item"},n.a.createElement("div",{className:"hover-bg"}," ",n.a.createElement("a",{href:"img/portfolio/proyectos/IMG_20201017_163753.jpg",title:"Project Title","data-lightbox-gallery":"gallery1"},n.a.createElement("div",{className:"hover-text"},n.a.createElement("h4",null,"Dron")),n.a.createElement("img",{src:"img/portfolio/proyectos/IMG_20201017_163753.jpg",className:"img-responsive",alt:"Project Title"})," ")," "))),n.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-4"},n.a.createElement("div",{className:"portfolio-item"},n.a.createElement("div",{className:"hover-bg"}," ",n.a.createElement("a",{href:"img/portfolio/proyectos/eevaa.png",title:"Project Title","data-lightbox-gallery":"gallery1"},n.a.createElement("div",{className:"hover-text"},n.a.createElement("h4",null,"Modelado en 3D y renderizado de Eevaa")),n.a.createElement("img",{src:"img/portfolio/proyectos/eevaa.png",className:"img-responsive",alt:"Project Title"})," ")," "))),n.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-4"},n.a.createElement("div",{className:"portfolio-item"},n.a.createElement("div",{className:"hover-bg"}," ",n.a.createElement("a",{href:"img/portfolio/proyectos/IMG_20201017_162900.jpg",title:"Project Title","data-lightbox-gallery":"gallery1"},n.a.createElement("div",{className:"hover-text"},n.a.createElement("h4",null,"Eevaa")),n.a.createElement("img",{src:"img/portfolio/proyectos/IMG_20201017_162900.jpg",className:"img-responsive",alt:"Project Title"})," ")," "))),n.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-4"},n.a.createElement("div",{className:"portfolio-item"},n.a.createElement("div",{className:"hover-bg"}," ",n.a.createElement("a",{href:"img/portfolio/proyectos/IMG_20201017_162702.jpg",title:"Project Title","data-lightbox-gallery":"gallery1"},n.a.createElement("div",{className:"hover-text"},n.a.createElement("h4",null,"Zambi")),n.a.createElement("img",{src:"img/portfolio/proyectos/IMG_20201017_162702.jpg",className:"img-responsive",alt:"Project Title"})," ")," "))),n.a.createElement("div",{className:"col-sm-6 col-md-4 col-lg-4"},n.a.createElement("div",{className:"portfolio-item"},n.a.createElement("div",{className:"hover-bg"}," ",n.a.createElement("a",{href:"img/portfolio/proyectos/IMG_20201017_163515.jpg",title:"Project Title","data-lightbox-gallery":"gallery1"},n.a.createElement("div",{className:"hover-text"},n.a.createElement("h4",null,"Oculus GO")),n.a.createElement("img",{src:"img/portfolio/proyectos/IMG_20201017_163515.jpg",className:"img-responsive",alt:"Project Title"})," ")," ")))))))}}]),t}(l.Component),f=(l.Component,function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"team",className:"text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"col-md-8 col-md-offset-2 section-title"},n.a.createElement("h2",null,"Equipo")),n.a.createElement("div",{id:"row"},this.props.data?this.props.data.map((function(e,a){return n.a.createElement("div",{key:"".concat(e.name,"-").concat(a),className:"col-md-4 col-sm-6 team"},n.a.createElement("div",{className:"thumbnail"}," ",n.a.createElement("div",{class:"overlay"},n.a.createElement("img",{src:e.img,alt:"...",className:"team-img"})),n.a.createElement("div",{className:"caption"},n.a.createElement("h4",null,e.name),n.a.createElement("p",null,e.job))))})):"loading")))}}]),t}(l.Component)),b=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{id:"contact"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,"Contacta con nosotros"),n.a.createElement("p",null,"Por favor rellena el siguiente formulario para mandarnos un email y le responeremos los antes posible.")),n.a.createElement("form",{action:"https://docs.google.com/forms/d/e/1FAIpQLSdMvl0i4vwy0LZVQkv5Aw17eeaxzrIYCU-m_Z0y9RqrXM5PVA/formResponse",target:"_self",name:"sentMessage",id:"contactForm",method:"POST"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{id:"2005620554",type:"text",name:"entry.2005620554",className:"form-control",placeholder:"Name",required:!0}),n.a.createElement("p",{className:"help-block text-danger"}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{id:"emailAddress",type:"email",name:"emailAddress",className:"form-control",placeholder:"Email",required:!0}),n.a.createElement("p",{className:"help-block text-danger"})))),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{id:"1288428869",name:"entry.1288428869",className:"form-control",rows:"4",placeholder:"Message",required:!0}),n.a.createElement("p",{className:"help-block text-danger"})),n.a.createElement("div",{id:"success"}),n.a.createElement("button",{type:"submit",className:"btn btn-custom btn-lg"},"Send Message")))),n.a.createElement("div",{className:"col-md-3 col-md-offset-1 contact-info"},n.a.createElement("div",{className:"contact-item"},n.a.createElement("h3",null,"Informaci\xf3n de contacto"),n.a.createElement("p",null,n.a.createElement("span",null,n.a.createElement("i",{className:"fa fa-map-marker"})," Direcci\xf3n"),this.props.data?this.props.data.address:"loading")),n.a.createElement("div",{className:"contact-item"},n.a.createElement("p",null,n.a.createElement("span",null,n.a.createElement("i",{className:"fa fa-envelope-o"})," Email")," ",this.props.data?this.props.data.email:"loading"))),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"social"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"git",href:"https://github.com/roisy/"},n.a.createElement(p.a,{className:"fa",size:30}))),n.a.createElement("li",null,n.a.createElement("a",{class:"youtube",href:"https://www.youtube.com/channel/UCnob9ZsHJMc_JS1JkveE5bA/"},n.a.createElement(p.c,{className:"fa",size:30}))),n.a.createElement("li",null,n.a.createElement("a",{className:"insta",href:"https://www.instagram.com/roisy.sa/"},n.a.createElement(p.b,{size:30}))))))))),n.a.createElement("div",{id:"footer"},n.a.createElement("div",{className:"container text-center"},n.a.createElement("p",null,"\xa9 2020 ROISY. Design by"," ",n.a.createElement("a",{href:"http://www.templatewire.com",rel:"nofollow"},"TemplateWire")))))}}]),t}(l.Component),N=t(9),y=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={landingPageData:{}},e}return Object(c.a)(t,[{key:"getlandingPageData",value:function(){this.setState({landingPageData:N})}},{key:"componentDidMount",value:function(){this.getlandingPageData()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(u,null),n.a.createElement(g,{data:this.state.landingPageData.Header}),n.a.createElement(E,{data:this.state.landingPageData.About}),n.a.createElement(v,{data:this.state.landingPageData.Services}),n.a.createElement(h,null),n.a.createElement(f,{data:this.state.landingPageData.Team}),n.a.createElement(b,{data:this.state.landingPageData.Contact}))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e){e.exports=JSON.parse('{"Header":{"title":"Roisy","paragraph":"Open source intelligent robots made for research and education"},"About":{"paragraph":"Somos una asociaci\xf3n de ingenieros inform\xe1ticos multidisciplinar los cuales nos dedicamos al dise\xf1o y construcci\xf3n de prototipos y de proyectos tanto de hardware, comprendiendo as\xed el dise\xf1o mec\xe1nico y electr\xf3nico, como dise\xf1o y  desarrollo de software. Dentro de nuestra especialidad inform\xe1tica abarcamos varios campos como lo son:","Why":["Visi\xf3n artificial","Machine learning","Desarrollo de aplicaciones multiplataforma","Desarrollo de videojuegos"],"Why2":["Dise\xf1o 3d","Programaci\xf3n de microcontroladores","Sens\xf3rica","Programaci\xf3n de chatbots y asistentes virtuales"]},"Services":[{"icon":"fa fa-wordpress","name":"Robot esf\xe9rico","text":"Dise\xf1o, construcci\xf3n y programaci\xf3n de un robot esf\xe9rico OpenSource."},{"icon":"fa fa-cart-arrow-down","name":"Drones","text":"Dise\xf1o, construcci\xf3n y programaci\xf3n de drones y microdrones."},{"icon":"fa fa-cloud-download","name":"Zambi","text":"Construcci\xf3n de un prototipo de robot orientado a la educaci\xf3n."},{"icon":"fa fa-plane","name":"Aplicaciones AR/VR","text":"Dise\xf1o y programaci\xf3n de aplicaciones y juegos de realidad virtual y realidad aumentada."},{"icon":"fa fa-language","name":"Dise\xf1o y renderizado 3D","text":"Dise\xf1o y renderizado 3D en blender."},{"icon":"fa fa-pie-chart","name":"Eevaa","text":"Robot humanoide con visi\xf3n artificial y funci\xf3n de asistente virtual integrada."}],"Testimonials":[{"img":"img/testimonials/01.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/02.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"},{"img":"img/testimonials/03.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/04.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"},{"img":"img/testimonials/05.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/06.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"}],"Team":[{"img":"img/team/01.jpg","name":"Juan Andr\xe9s Herrera Rodr\xedguez","job":"Ingeniero Inform\xe1tico"},{"img":"img/team/fm.jpg","name":"Fernando M. Quintana Vel\xe1zquez","job":"Ingeniero Inform\xe1tico"},{"img":"img/team/jf.jpg","name":"Juan Francisco Cabrera S\xe1nchez","job":"Ingeniero Inform\xe1tico"}],"Contact":{"address":"C\xe1diz, Espa\xf1a ","phone":"+34 690257211","email":"roisy.sa@gmail.com","instagram":"https://www.instagram.com/roisy.sa","twitter":"twitter.com","youtube":"https://www.youtube.com/channel/UCnob9ZsHJMc_JS1JkveE5bA/"},"Features":[{"icon":"fa fa-comments-o","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-bullhorn","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-group","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-magic","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."}]}')}},[[10,1,2]]]);
//# sourceMappingURL=main.c7faf510.chunk.js.map