(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),i=n.n(a),s=(n(11),n(3)),o=n.n(s),d=n(6),h=n(4),l=(n(13),n.p+"static/media/sun.6ed9d284.png"),j=n.p+"static/media/cloud.3629814e.png",u=n.p+"static/media/rain.61161ae0.png",m=(n(14),n(0)),p=function(e){var t=["Sunny","Clear"],n=["Cloudy","Partly cloud","Mist","Overcast","Partly cloudy"];return Object(m.jsx)(c.Fragment,{children:Object(m.jsxs)("div",{className:"principalCard",children:[Object(m.jsxs)("div",{className:"contentOne",children:[Object(m.jsx)("div",{className:"imgWeather",children:Object(m.jsx)("img",{src:t.find((function(t){return t===e.description}))?l:n.find((function(t){return t===e.description}))?j:u,alt:"CloudStates",width:"110px"})}),Object(m.jsxs)("div",{className:"infoWeather",children:[Object(m.jsxs)("h1",{className:"infoTemp",children:[" ",e.temp," "]}),Object(m.jsxs)("h3",{className:"infoSecond",children:[" Wind: ",e.wind," "]}),Object(m.jsxs)("h3",{className:"infoSecond",children:[" ",e.description," "]})]})]}),Object(m.jsxs)("div",{className:"contentTwo",children:[Object(m.jsxs)("h3",{className:"infoLocal",children:[" ",e.city,", ",e.region," "]}),Object(m.jsxs)("h3",{className:"infoSecond",children:[" ",e.day," "]})]})]})})},w=(n(16),function(e){var t=["Sunny","Clear"],n=["Cloudy","Partly cloud","Mist","Overcast","Partly cloudy"];return Object(m.jsx)(c.Fragment,{children:Object(m.jsxs)("div",{className:"secundaryCard",children:[Object(m.jsx)("div",{className:"secundaryCard_img",children:Object(m.jsx)("img",{src:t.find((function(t){return t===e.description}))?l:n.find((function(t){return t===e.description}))?j:u,alt:"Cloud State",width:"110px"})}),Object(m.jsxs)("div",{className:"secundaryCard_Data",children:[Object(m.jsxs)("h1",{className:"Data_Temp",children:[" ",e.temp," "]}),Object(m.jsxs)("h3",{className:"Data_Other",children:[" Wind: ",e.wind," "]}),Object(m.jsxs)("h3",{className:"Data_Other",children:[" ",e.description," "]}),Object(m.jsxs)("h3",{className:"Data_Other",children:[" ",e.day," "]})]})]})})});var O=function(){var e=Object(c.useState)("Weather"),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({city:"None",region:"None",day:"None",temp:"None",wind:"None",description:"None",tomorrow:{day:"None",temp:"None",wind:"None",description:"None"},afterTomorrow:{day:"None",temp:"None",wind:"None",description:"None"}}),i=Object(h.a)(a,2),s=i[0],l=i[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://get.geojs.io/v1/ip/geo.json").then((function(e){return e.json()})).catch((function(e){return alert("No se puede reconocer tu ubicaci\xf3n ip")}));case 2:return t=e.sent,e.next=5,fetch("https://wttr.in/".concat(t.city,"?format=j1")).then((function(e){return e.json()})).catch((function(e){return alert("No se puede cargar la informaci\xf3n, intenta m\xe1s tarde")}));case 5:n=e.sent;try{l({city:n.nearest_area[0].areaName[0].value,region:n.nearest_area[0].region[0].value,day:n.weather[0].date,temp:"".concat(n.current_condition[0].temp_C,"\xb0C"),wind:"".concat(n.current_condition[0].windspeedKmph," km/h"),description:n.current_condition[0].weatherDesc[0].value,tomorrow:{day:n.weather[1].date,temp:"".concat(n.weather[1].avgtempC,"\xb0C"),wind:"".concat(n.weather[1].hourly[0].windspeedKmph," km/h"),description:n.weather[1].hourly[0].weatherDesc[0].value},afterTomorrow:{day:n.weather[2].date,temp:"".concat(n.weather[2].avgtempC,"\xb0C"),wind:"".concat(n.weather[2].hourly[0].windspeedKmph," km/h"),description:n.weather[2].hourly[0].weatherDesc[0].value}})}catch(c){console.log(c)}r("Weather opacity");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{e()}catch(t){console.log(t)}}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"Head",children:[Object(m.jsx)("h1",{children:" Weather Knows "}),Object(m.jsx)("h3",{children:" know your wheather "})]}),Object(m.jsxs)("div",{className:n,children:[Object(m.jsx)("div",{children:Object(m.jsx)(p,{temp:s.temp,wind:s.wind,description:s.description,city:s.city,region:s.region,day:s.day})}),Object(m.jsxs)("div",{children:[Object(m.jsx)(w,{temp:s.tomorrow.temp,wind:s.tomorrow.wind,description:s.tomorrow.description,day:s.tomorrow.day}),Object(m.jsx)(w,{temp:s.afterTomorrow.temp,wind:s.afterTomorrow.wind,description:s.afterTomorrow.description,day:s.afterTomorrow.day})]})]}),Object(m.jsx)("div",{className:"Foot",children:Object(m.jsxs)("h5",{children:[" Made by ",Object(m.jsx)("a",{href:"https://github.com/CarlosDanielEspinoza",children:"Carlos Espinoza"})," "]})})]})};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.da1c6b03.chunk.js.map