(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{34606:function(e,t,r){Promise.resolve().then(r.bind(r,2359))},2359:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(57437),o=r(86087),c=r.n(o);r(97757),r(52445);var i=r(79686),s=r(294),a=r(58329),u=r(55431);let l=()=>(0,i.xC)({reducer:{house:s.z5.reducer,stock:a.VI.reducer,ui:u.dV.reducer}});var d=r(2265),f=r(93046),k=r(54960),h=r(96653);function S(e){let{children:t}=e,r=(0,d.useRef)();return r.current||(r.current=l()),(0,n.jsxs)("html",{lang:"en",children:[(0,n.jsx)("head",{children:(0,n.jsx)(k.ColorSchemeScript,{})}),(0,n.jsx)("body",{className:c().className,children:(0,n.jsx)(h.MantineProvider,{children:(0,n.jsx)(f.zt,{store:r.current,children:t})})})]})}},294:function(e,t,r){"use strict";r.d(t,{h0:function(){return o},z5:function(){return n}});let n=(0,r(79686).oM)({name:"house",initialState:{Id:0,DateListed:"",Title:"",Description:"","Sale Price":0,ThumbnailURL:"",PictureURL:"",Location:"",Sqft:0,Bedrooms:0,Bathrooms:0,Parking:0,YearBuilt:0},reducers:{setHouse:(e,t)=>t.payload}}),{setHouse:o}=n.actions;n.reducer},58329:function(e,t,r){"use strict";r.d(t,{NJ:function(){return u},R1:function(){return l},VI:function(){return c},WL:function(){return f},d3:function(){return s},sx:function(){return a},x_:function(){return k},y:function(){return i}});var n=r(79686),o=r(28742);let c=(0,n.oM)({name:"stock",initialState:{stock:[],filteredStock:[],savedStock:[],resetFilter:!1},reducers:{setStock:(e,t)=>{e.stock=t.payload},setFilterStock:(e,t)=>{e.filteredStock=[];let{bedrooms:r,bathrooms:n,parking:o,price_range:c}=t.payload;e.stock.filter(t=>{t.Bedrooms>=r&&t.Bathrooms>=n&&t.Parking>=o&&t["Sale Price"]>=c&&(e.filteredStock=[...e.filteredStock,t])})},setSavedStock:(e,t)=>{e.savedStock=[...e.savedStock,t.payload]},removeSavedStock:(e,t)=>{e.savedStock=e.savedStock.filter(e=>e.Title!==t.payload.Title)},resetFilter:e=>{e.filteredStock=[...e.stock],e.resetFilter=!0}}}),{setStock:i,setFilterStock:s,resetFilter:a,setSavedStock:u,removeSavedStock:l}=c.actions,d=e=>e.stock.stock,f=(0,o.P1)([d],e=>0===e.length?0:Math.min(...e.map(e=>e["Sale Price"]))),k=(0,o.P1)([d],e=>0===e.length?0:Math.max(...e.map(e=>e["Sale Price"])));c.reducer},55431:function(e,t,r){"use strict";r.d(t,{$J:function(){return c},Gp:function(){return o},dV:function(){return n}});let n=(0,r(79686).oM)({name:"ui",initialState:{showAlert:!1,showModal:!1},reducers:{toggleAlert:(e,t)=>{e.showAlert=!e.showAlert},toggleModal:(e,t)=>{e.showModal=!e.showModal}}}),{toggleAlert:o,toggleModal:c}=n.actions;n.reducer},52445:function(){},97757:function(){},86087:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}}},function(e){e.O(0,[640,511,971,938,744],function(){return e(e.s=34606)}),_N_E=e.O()}]);