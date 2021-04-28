(this["webpackJsonpthe-food-compendium"]=this["webpackJsonpthe-food-compendium"]||[]).push([[0],{146:function(e,t,r){},177:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),i=r(55),o=r.n(i),s=r(211),c=r(21),l=(r(146),r(42)),d=r(19),b=r(193),u=r(6),p=r(194),g=r(195),j=r(214),x=r(86),h=r(58),m=r.n(h),O=r(87),f=r(11),y=r(88),C=r.n(y),v=function(e,t){var r=e.meals;return Object(f.a)({},t,r)},w=function(e,t){var r=/[.]/g,n=e.meals,a=Object(f.a)({},t,{});a[t].steppedInstructions=n[0].strInstructions.replace(/\n/g,"").split(r).map((function(e,t){return{instructionId:t+1,instruction:e.trim(),isDone:!1}}));for(var i=[],o=1;o<=20;o+=1){var s="strIngredient".concat(o),c="strMeasure".concat(o),l=n[0][s],d=n[0][c];if((1===d.length||d.match(/^\d+$/g))&&(d="".concat(d," units")),""===l||""===d)break;var b={id:o,ingredient:l,measure:d,isDone:!1};i.push(b)}return a[t].ingredients=i,a[t].dateModified=n[0].dateModified,a[t].idMeal=n[0].idMeal,a[t].strArea=n[0].strArea,a[t].strCategory=n[0].strCategory,a[t].strCreativeCommonsConfirmed=n[0].strCreativeCommonsConfirmed,a[t].strDrinkAlternate=n[0].strDrinkAlternate,a[t].strImageSource=n[0].strImageSource,a[t].strMeal=n[0].strMeal,a[t].strMealThumb=n[0].strMealThumb,a[t].strSource=n[0].strSource,a[t].strTags=n[0].strTags,a[t].strYoutube=n[0].strYoutube,a},I="CREATE_CATEGORIES",k="CATEGORIES_LOADING",E="CATEGORIES_LOADING_FALSE",R="CATEGORIES_QUERY_ERROR",S="CREATE_MEAL_CATEGORY",_="MEAL_CATEGORY_LOADING",A="MEAL_CATEGORY_QUERY_ERROR",D="MEAL_CATEGORY_LOADING_FALSE",M="CREATE_RECIPE",T="RECIPE_LOADING_TRUE",z="RECIPE_LOADING_FALSE",L="RECIPE_QUERY_ERROR",G="CARD_SHOW_RECIPE",F="CARD_SHOW_INGREDIENTS",P="CARD_SHOW_TOOLS",N="TOGGLE_RECIPE_STEP",B="TOGGLE_RECIPE_INGREDIENT",Y=function(e){return{type:I,payload:e}},H=function(e,t,r){return function(n,a){var i,o=a().recipes.byId[e];o.steppedInstructions[t.instructionId-1].isDone=!r,n((i=Object(f.a)({},e,o),{type:N,payload:i}))}},W=function(e,t,r){return function(n,a){var i,o=a().recipes.byId[e];o.ingredients[t.id-1].isDone=!r,n((i=Object(f.a)({},e,o),{type:B,payload:i}))}},U=r(4);var Q=function(){var e=Object(c.c)(),t=Object(c.d)((function(e){return e.categories})),r=t.allCategories,a=t.error,i=t.loading,o=Object(n.useState)(!1),s=Object(u.a)(o,2),d=s[0],h=s[1];return Object(n.useEffect)((function(){return e(null===r?function(){var e=Object(O.a)(m.a.mark((function e(t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){return e.data}));case 3:r=e.sent,t(Y(r.categories)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t((n=e.t0.message,{type:R,payload:n}));case 10:case"end":return e.stop()}var n}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}():{type:E}),function(){e({type:k})}}),[]),a?"Error: ".concat(a," "):Object(U.jsxs)(b.a,{overflowY:"scroll",children:[Object(U.jsx)(p.a,{backgroundColor:"rgb(254,180,0)",size:"lg",fontFamily:"'Advent Pro', sans-serif;",textAlign:"center",position:"sticky",top:"0",zIndex:"12",w:"100%",transition:"all .5s ease-in-out",children:"What would you like to eat today?"}),Object(U.jsx)(g.a,{isLoaded:!i,startColor:"rgba(1,1,1,1)",endColor:"rgba(205,205,205,1)",px:{base:0,md:3,xl:"10%"},py:{base:0,lg:6},position:"relative",margin:{base:"0",lg:"0 auto"},minWidth:"100%",minHeight:i?{base:"calc(100vh - 88px)",lg:"calc(100vh - 144px)"}:{lg:"calc(100vh - 144px)"},background:"linear-gradient(0deg, rgba(1,1,1,1) 0%, rgba(117,117,117,1) 100%)",children:Object(U.jsx)(x.a,{breakpointCols:{768:1,2e3:3},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:r?r.map((function(e){return Object(U.jsx)(b.a,{minWidth:["100%","100%","50%"],backgroundColor:"rgb(127,127,127,0.2)",color:"white",position:"relative",alignSelf:"center",boxShadow:"dark-lg",transition:"all .4s ease-in-out",_hover:{transform:"scale(1.05)",zIndex:"10"},borderY:{base:"2px solid black",lg:"none"},marginBottom:{base:0,lg:6},role:"group",children:Object(U.jsxs)(l.b,{to:"/the-food-compendium/categories/".concat(e.strCategory),children:[d?null:Object(U.jsx)(g.a,{isLoaded:d,display:"block",minH:"400px",minW:"400px"}),Object(U.jsx)(j.a,{display:d?"block":"none",src:"".concat("/the-food-compendium","/images/").concat(e.strCategory,".jpg"),alt:e.strCategory,w:"100%",onLoad:r.length===Number(e.idCategory)?function(){return h(!0)}:null}),Object(U.jsx)(b.a,{backgroundColor:{base:"rgb(96,135,135,0.9)",lg:"initial"},position:"absolute",bottom:{base:"20px",lg:"0"},left:{base:"none",lg:"0"},right:{base:"0",lg:"none"},w:{base:"40%",lg:"100%"},p:[2,4],_groupHover:{lg:{backgroundColor:"rgb(96,135,135,0.95)"}},transition:"all .5s ease-in-out",children:Object(U.jsx)(p.a,{size:"xl",fontSize:{base:"md",lg:"3xl"},fontFamily:"'Advent Pro', sans-serif;",children:"".concat(e.strCategory)})})]})},e.idCategory)})):""})})]})},J=r(210),V=r(200),X=r(209),K=r(196),$=r(197),q=r(198),Z=r(199),ee=r(212),te=r(53),re=r(120);r(171),r(172),r(173),r(174),r(175),r(176);X.a.use([K.a,$.a,q.a,Z.a]);var ne=function(e){var t=e.arrayOfMeals,r=Object(n.useRef)(null);return Object(U.jsx)(J.a,{ref:r,effect:"flip",spaceBetween:10,observer:!0,observeParents:!0,slidesPerView:1,lazy:!0,preloadImages:!1,style:{height:"100%"},children:t.map((function(e){return Object(U.jsxs)(V.a,{children:[Object(U.jsxs)(b.a,{minHeight:"80%",position:"relative","data-background":e.strMealThumb,alt:e.strMeal,className:"swiper-lazy",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderTopRadius:"5%",zIndex:"12",boxShadow:{lg:"lg"},children:[Object(U.jsx)("div",{className:"swiper-lazy-preloader swiper-lazy-preloader-white"}),Object(U.jsx)(b.a,{backgroundColor:"rgb(96,135,135,0.9)",position:"absolute",bottom:"5%",w:"100%",p:[2,4,6,8],children:Object(U.jsx)(p.a,{size:"lg",fontFamily:"'Advent Pro', sans-serif;",textAlign:"end",children:"".concat(e.strMeal)})})]}),Object(U.jsxs)(ee.a,{spacing:1,display:{base:"flex"},justifyContent:"space-between",backgroundColor:"rgb(231,102,102)",height:"20%",px:{base:6,lg:12},py:2,borderBottomRadius:"20px",boxShadow:{lg:"md"},children:[Object(U.jsx)(b.a,{onClick:function(e){return function(e){r&&r.current.swiper.navigation.onNextClick(e)}(e)},boxShadow:"dark-lg",p:"3",rounded:"100%",bg:"white",transition:"all .2s ease-in-out",cursor:"pointer",_hover:{transform:"scale(1.2)"},children:Object(U.jsx)(re.a,{fontSize:"30px",color:"rgb(253,107,107)"})}),Object(U.jsx)(b.a,{alignSelf:"flex-end",boxShadow:"md",p:"2",rounded:"100%",bg:"white",as:l.b,transition:"all .2s ease-in-out",to:"/the-food-compendium/",_hover:{transform:"scale(1.2)"},children:Object(U.jsx)(te.c,{fontSize:"20px",color:"rgb(46,178,201)"})}),Object(U.jsx)(b.a,{as:l.b,"data-testid":"link-to-recipe",to:"/the-food-compendium/recipes/".concat(e.idMeal),boxShadow:"dark-lg",p:"3",rounded:"100%",bg:"white",cursor:"pointer",transition:"all .2s ease-in-out",_hover:{transform:"scale(1.2)"},children:Object(U.jsx)(te.b,{fontSize:"30px",color:"rgb(78,203,147)"})})]})]},e.idMeal)}))})},ae=function(e){var t=Object(c.c)(),r=Object(c.d)((function(e){return e.mealByCategory})),a=r.loading,i=r.error,o=r.byCategory,s=e.match.params.category;return Object(n.useEffect)((function(){var e;return Object.keys(o).includes(s)?t({type:D}):t((e=s,function(){var t=Object(O.a)(m.a.mark((function t(r){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get((o=e,"https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(o))).then((function(e){return e.data}));case 3:if(null!==(n=t.sent).meals){t.next=6;break}throw new Error("".concat(e," is an invalid Category URL"));case 6:r((i=v(n,e),{type:S,payload:i})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r((a=t.t0.message,{type:A,payload:a}));case 12:case"end":return t.stop()}var a,i,o}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())),function(){t({type:_})}}),[]),i?"Error: ".concat(i," "):Object(U.jsx)(b.a,{background:"linear-gradient(0deg, rgba(1,1,1,1) 0%, rgba(117,117,117,1) 100%)",children:Object(U.jsxs)(g.a,{overflow:"hidden",isLoaded:!a,height:{base:"calc(100vh - 88px)",lg:"calc(100vh - 144px)"},margin:{base:"0"},px:{base:3,lg:6},py:{base:3,lg:6},display:{base:"flex"},justifyContent:{base:"center"},alignItems:{base:"center"},position:{lg:"relative"},startColor:"rgba(1,1,1,1)",endColor:"rgba(205,205,205,1)",children:[Object(U.jsx)(b.a,{w:{base:"100%",md:"60%",lg:"35%"},h:{base:"100%"},children:o[s]?Object(U.jsx)(ne,{arrayOfMeals:o[s]}):""}),Object(U.jsx)(b.a,{display:{base:"none",lg:"block"},position:"absolute",top:"20px",left:"0",bgGradient:"linear(to-r, yellow.600, red.500)",borderRightRadius:"50px",opacity:"85%",boxShadow:"dark-lg",children:Object(U.jsx)(p.a,{size:"lg",fontFamily:"'Advent Pro', sans-serif;",color:"rgb(242,242,242)",px:"20px",_disabled:!0,children:"Meal Category: ".concat(s)})})]})})},ie=r(129),oe=r(181),se=r(201),ce=r(203),le=r(121),de=r(202),be=r(66);function ue(e){var t=e.text;return Object(U.jsx)(b.a,{display:"flex",alignItems:"center",textAlign:"center",_before:{content:"''",flex:1,borderBottom:"1px solid #fff",marginRight:".5em",marginLeft:".5em"},_after:{content:"''",flex:1,borderBottom:"1px solid #fff",marginLeft:".5em",marginRight:".5em"},children:t})}var pe=function(e){var t=e.currentRecipe,r=Object(c.c)(),n=["rgba(141,212,178,0.5)","rgba(156,225,168,0.5)","rgba(185,234,170,0.5)","rgba(216,244,175,0.5)"];return Object(U.jsxs)(b.a,{h:{base:"",lg:1},top:{base:"",lg:"0"},position:{base:"static",lg:"sticky"},children:[Object(U.jsx)(p.a,{textAlign:"center",borderRadius:"20px",color:"white",fontFamily:"'Advent Pro', sans-serif;",textDecor:"underline",mb:{base:6},children:"Ingredients"}),Object(U.jsx)(x.a,{breakpointCols:2,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:t.ingredients.map((function(e){return Object(U.jsxs)(se.b,{border:e.isDone?"1 px solid rgb(185,234,170)":"1px solid white",borderRadius:e.isDone?"xl":"",transition:"border-radius 0.5s 0s ease",position:"relative",color:"white",marginBottom:"10px",whiteSpace:"pre-wrap",fontFamily:"'Open Sans', sans-serif;",onClick:function(){return r(W(t.idMeal,e,e.isDone))},children:[Object(U.jsx)(le.a,{visibility:e.isDone?"visible":"hidden",as:be.a,position:"absolute",top:"-14px",right:"-9px",w:8,h:8,zIndex:"10",transition:"fill 3s 3s ease",fill:"white",fontWeight:"bold"}),Object(U.jsxs)(b.a,{boxShadow:e.isDone?"0 0 1rem 0 rgba(0, 0, 0, .5)":"",backgroundColor:e.isDone?"".concat(n[Math.floor(Math.random()*n.length)]):"",style:e.isDone?{backdropFilter:"blur(2px)"}:{},borderRadius:e.isDone?"xl":"",transition:"background 0.5s 0s ease, border-radius 0.5s 0s ease",children:[Object(U.jsx)(ue,{text:e.measure}),Object(U.jsx)(de.a,{textAlign:"center",fontSize:"xl",children:"".concat(e.ingredient)})]})]},e.id)}))})]})},ge=function(e){var t=e.mealTitle;return Object(U.jsx)(p.a,{textAlign:"center",borderRadius:"20px",color:"white",fontFamily:"'Advent Pro', sans-serif;",textDecor:"underline",mb:{base:6,lg:4},children:t})},je=a.a.memo(ge),xe=function(e){var t=e.area;return Object(U.jsx)(p.a,{fontSize:{base:"md",lg:"lg"},textAlign:"center",borderRadius:"20px",color:"white",fontFamily:"'Cedarville Cursive', cursive",mb:{base:6},opacity:"0.6",children:"".concat(t," Cuisine")})},he=a.a.memo(xe),me=function(e){var t=e.currentRecipe,r=e.isDesktop,n=Object(c.c)();return r?Object(U.jsxs)(b.a,{h:"100%",position:"sticky",top:"0",children:[Object(U.jsx)(p.a,{textAlign:"center",borderRadius:"20px",color:"white",fontFamily:"'Advent Pro', sans-serif;",textDecor:"underline",mb:{base:8},children:"Steps"}),Object(U.jsx)(ee.d,{spacing:3,align:"stretch",justify:"space-between",children:t.steppedInstructions.map((function(e){return Object(U.jsx)(se.b,{position:"relative",borderRadius:e.isDone?"xl":"",transition:"border-radius 0.5s 0s ease",px:"5%",color:"white",backgroundColor:e.isDone?"rgb(185,234,170, 0.3)":null,marginBottom:"10px",whiteSpace:"pre-wrap",fontFamily:"'Open Sans', sans-serif;",onClick:function(){return n(H(t.idMeal,e,e.isDone))},children:e.instruction.length>1?Object(U.jsxs)(b.a,{py:6,children:[Object(U.jsxs)(de.a,{display:"inline-block",paddingLeft:4,children:["Step ".concat(e.instructionId),e.isDone?Object(U.jsx)(le.a,{as:be.a,position:"absolute",top:"-15px",right:"-20px",w:12,h:12,zIndex:"10",transition:"background 1.5s 0s ease"}):null]}),Object(U.jsx)(de.a,{whiteSpace:"pre-wrap",fontFamily:"'Open Sans', sans-serif;",fontSize:24,fontWeight:"medium",paddingLeft:10,children:e.instruction})]}):null},e.instructionId)}))})]}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(je,{mealTitle:t.strMeal}),Object(U.jsx)(he,{area:t.strArea}),Object(U.jsx)(ee.d,{divider:Object(U.jsx)(ee.c,{borderColor:"gray.200"}),spacing:6,align:"stretch",justify:"space-between",children:t.steppedInstructions.map((function(e){return Object(U.jsxs)(b.a,{color:"white",position:"relative",onClick:function(){return n(H(t.idMeal,e,e.isDone))},px:{base:6,md:6},_first:{marginTop:6},children:[e.isDone?Object(U.jsx)(le.a,{as:be.a,position:"absolute",bottom:"-20px",right:"0",w:8,h:8,zIndex:"10",transition:"background 3s 0s ease"}):null,Object(U.jsx)(de.a,{whiteSpace:"pre-wrap",fontFamily:"'Open Sans', sans-serif;",textDecor:e.isDone?"line-through":"none",transition:"all .4s ease-in-out",children:e.instruction.length>1?"".concat(e.instructionId,". ").concat(e.instruction):null})]},e.instructionId)}))})]})};me.defaultProps={isDesktop:!0};var Oe=me,fe=function(e){var t=e.currentRecipe,r=e.mobileCards,n=Object(oe.a)({base:!1,lg:!0});return n?Object(U.jsxs)(b.a,{px:{xl:"10%"},children:[Object(U.jsx)(je,{mealTitle:t.strMeal}),Object(U.jsx)(he,{area:t.strArea}),Object(U.jsxs)(se.a,{templateColumns:"60% 40%",gap:{md:6,lg:10},position:"relative",children:[Object(U.jsx)(Oe,{currentRecipe:t,isDesktop:n}),Object(U.jsx)(pe,{currentRecipe:t})]})]}):r.recipe?Object(U.jsx)(ce.a,{in:r.recipe,unmountOnExit:!0,children:Object(U.jsx)(b.a,{h:"100%",children:Object(U.jsx)(Oe,{currentRecipe:t,isDesktop:n})})}):r.ingredients?Object(U.jsx)(ce.a,{in:!!r.ingredients,children:Object(U.jsx)(pe,{currentRecipe:t})}):r.tools?"Tools":"Something went terribly wrong. :'("},ye=function(e){var t=Object(c.c)(),r=Object(c.d)((function(e){return e.recipes})),a=r.loading,i=r.error,o=r.byId,s=r.mobileCards,l=e.match.params.id;return Object(n.useEffect)((function(){var e;return Object.keys(o).includes(l)?t({type:z}):t((e=l,function(){var t=Object(O.a)(m.a.mark((function t(r){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get((o=e,"https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(o))).then((function(e){return e.data}));case 3:if(null!==(n=t.sent).meals){t.next=6;break}throw new Error("".concat(e," is an invalid Recipe URL"));case 6:r((i=w(n,e),{type:M,payload:i})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r((a=t.t0.message,{type:L,payload:a}));case 12:case"end":return t.stop()}var a,i,o}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())),function(){t({type:T})}}),[]),i?"Something went wrong. Error: ".concat(i):Object(U.jsxs)(b.a,{overflowY:"scroll",children:[Object(U.jsx)(g.a,{isLoaded:!a,minWidth:"100%",minHeight:a?{base:"calc(100vh - 88px)",lg:"calc(100vh - 144px)"}:{base:"calc(100vh - 96px)",lg:"calc(100vh - 144px)"},margin:{base:"0"},px:{base:3,lg:6},paddingTop:{base:3,lg:6},paddingBottom:{base:6,lg:6},display:{lg:"flex"},justifyContent:{lg:"center"},position:"relative",background:"linear-gradient(0deg, rgba(1,1,1,1) 0%, rgba(84,84,84,1) 100%)",children:o[l]?Object(U.jsx)(fe,{mobileCards:s,currentRecipe:r.byId[l]}):""}),Object(U.jsxs)(ee.b,{display:{base:"flex",lg:"none"},width:"100vw",direction:"row",position:"absolute",bottom:{base:8,lg:12},zIndex:"11",children:[Object(U.jsx)(ie.a,{flex:"1 1 0",colorScheme:"orange",isActive:!!s.recipe,onClick:function(){return t({type:G})},_focus:{outline:0},children:"Steps"}),Object(U.jsx)(ie.a,{flex:"1 1 0",colorScheme:"orange",isActive:!!s.ingredients,onClick:function(){return t({type:F})},_focus:{outline:0},children:"Ingredients"}),Object(U.jsx)(ie.a,{display:"none",flex:"1 1 0",colorScheme:"orange",isActive:!!s.tools,onClick:function(){return t({type:P})},_focus:{outline:0},children:"Tools"})]})]})},Ce=r(213),ve=r(204),we=r(205),Ie=r(208),ke=r(215),Ee=r(41),Re=r(206),Se=r(207),_e=Object(c.b)((function(e){return{categories:e.categories}}))((function(){var e=Object(Ce.a)(),t=e.isOpen,r=e.onOpen,n=e.onClose;return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(b.a,{bgGradient:"linear(to-r, red.500, yellow.500)",px:4,position:"fixed",w:"100%",zIndex:"100",color:"white",top:"0",children:[Object(U.jsxs)(ve.a,{h:{base:16,lg:24},alignItems:"center",justifyContent:"space-between",children:[Object(U.jsx)(we.a,{size:"md",backgroundColor:"inherit",outline:"none",icon:t?Object(U.jsx)(Re.a,{}):Object(U.jsx)(Se.a,{}),"aria-label":"Open Menu",display:{md:t?"inherit":"none"},onClick:t?n:r}),Object(U.jsxs)(ee.a,{spacing:8,alignItems:"center",children:[Object(U.jsxs)(b.a,{children:[Object(U.jsx)(p.a,{display:{base:"none",md:"block"},fontFamily:"'Butterfly Kids', cursive",size:"2xl",children:"The food compendium"}),Object(U.jsx)(p.a,{display:{base:"block",md:"none"},letterSpacing:"3px",fontFamily:"'Cedarville Cursive', cursive",size:"2xl",children:"t.f.c."})]}),Object(U.jsxs)(ee.a,{as:"nav",spacing:4,display:{base:"none",md:"flex"},children:[Object(U.jsxs)(l.b,{to:"/the-food-compendium/",size:"lg",children:[Object(U.jsx)(te.c,{style:{display:"inline",margin:"0 5px"}}),"Home"]}),Object(U.jsxs)(Ie.a,{href:"https://github.com/Bismarck-GM/",isExternal:!0,children:[Object(U.jsx)(te.a,{style:{display:"inline",margin:"0 5px"}}),"My Github"]})]})]})]}),t?Object(U.jsx)(ke.a,{onClose:n,isOpen:t,size:"full",placement:"bottom",children:Object(U.jsx)(Ee.e,{children:Object(U.jsxs)(ke.b,{bgGradient:"linear(to-r, red.500, yellow.500)",children:[Object(U.jsx)(Ee.d,{children:Object(U.jsx)(Re.a,{onClick:t?n:r})}),Object(U.jsxs)(Ee.b,{display:"flex",flexDir:"column",justifyContent:"center",alignItems:"center",children:[Object(U.jsx)(l.b,{to:"/the-food-compendium/",onClick:t?n:r,children:Object(U.jsxs)(de.a,{fontSize:"40px",textDecor:"underline",children:[Object(U.jsx)(te.c,{style:{display:"inline",margin:"0 5px"}}),"Home"]})}),Object(U.jsx)(Ie.a,{href:"https://github.com/Bismarck-GM/",isExternal:!0,children:Object(U.jsxs)(de.a,{fontSize:"40px",textDecor:"underline",children:[Object(U.jsx)(te.a,{style:{display:"inline",margin:"0 5px"}}),"My Github"]})})]})]})})}):null]})})})),Ae=function(){return Object(U.jsx)(ve.a,{justifyContent:"center",height:{base:8,lg:12},backgroundColor:"black",color:"white",position:"fixed",bottom:"0",w:"100vw",fontFamily:"'Advent Pro', sans-serif;",children:Object(U.jsx)(j.a,{src:"".concat("/the-food-compendium","/BismarckGMLogowhite-04.png"),alt:"footer-logo"})})},De=a.a.memo(Ae),Me=function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(l.a,{children:[Object(U.jsx)(_e,{}),Object(U.jsx)(b.a,{d:"flex",flexDir:"column",alignItems:"stretch",justifyContent:"center",height:"100vh",paddingTop:{base:16,lg:24},paddingBottom:{base:8,lg:"48px"},children:Object(U.jsxs)(d.c,{children:[Object(U.jsx)(d.a,{path:"/the-food-compendium/",exact:!0,component:Q}),Object(U.jsx)(d.a,{path:"/the-food-compendium/categories/:category",exact:!0,component:ae}),Object(U.jsx)(d.a,{path:"/the-food-compendium/recipes/:id",exact:!0,component:ye})]})}),Object(U.jsx)(De,{})]})})},Te=r(50),ze=r(124),Le=r(27),Ge={loading:!0,error:null,allCategories:null},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{loading:!1,error:null,allCategories:t.payload};case k:return{loading:!0,error:null,allCategories:Object(Le.a)(e.allCategories)};case E:return{loading:!1,error:null,allCategories:Object(Le.a)(e.allCategories)};case R:return{loading:!1,error:t.payload,allCategories:Object(Le.a)(e.allCategories)};default:return e}},Pe=r(14),Ne={loading:!1,error:null,byCategory:{}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!1,error:null,byCategory:Object(Pe.a)(Object(Pe.a)({},e.byCategory),t.payload)};case _:return{loading:!0,error:null,byCategory:Object(Pe.a)({},e.byCategory)};case D:return{loading:!1,error:null,byCategory:Object(Pe.a)({},e.byCategory)};case A:return{loading:!1,error:t.payload,byCategory:Object(Pe.a)({},e.byCategory)};default:return e}},Ye={loading:!0,error:null,mobileCards:{recipe:!0,ingredients:!1,tools:!1},byId:{}},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{loading:!1,error:null,mobileCards:Object(Pe.a)({},e.mobileCards),byId:Object(Pe.a)(Object(Pe.a)({},e.byId),t.payload)};case T:return{loading:!0,error:null,mobileCards:Object(Pe.a)({},e.mobileCards),byId:Object(Pe.a)({},e.byId)};case z:return{loading:!1,error:null,mobileCards:Object(Pe.a)({},e.mobileCards),byId:Object(Pe.a)({},e.byId)};case L:return{loading:!1,error:"".concat(t.payload," is not a valid URL"),mobileCards:Object(Pe.a)({},e.mobileCards),byId:Object(Pe.a)({},e.byId)};case G:return{loading:!1,error:null,mobileCards:{recipe:!0,ingredients:!1,tools:!1},byId:Object(Pe.a)({},e.byId)};case F:return{loading:!1,error:null,mobileCards:{recipe:!1,ingredients:!0,tools:!1},byId:Object(Pe.a)({},e.byId)};case P:return{loading:!1,error:null,mobileCards:{recipe:!1,ingredients:!1,tools:!0},byId:Object(Pe.a)({},e.byId)};case N:case B:return Object(Pe.a)(Object(Pe.a)({},e),{},{byId:Object(Pe.a)(Object(Pe.a)({},e.byId),t.payload)});default:return e}},We=Object(Te.c)({categories:Fe,mealByCategory:Be,recipes:He}),Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Te.d,Qe=Object(Te.e)(We,Ue(Object(Te.a)(ze.a)));o.a.render(Object(U.jsx)(a.a.StrictMode,{children:Object(U.jsx)(c.a,{store:Qe,children:Object(U.jsx)(s.a,{children:Object(U.jsx)(Me,{})})})}),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.6ddc2005.chunk.js.map