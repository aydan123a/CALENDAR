let events={};

let date=new Date();

let year=date.getFullYear();
let month=date.getMonth();

let days=new Date(year,month+1,0).getDate();

document.getElementById("month").innerHTML=
date.toLocaleString("en",{month:"long"})+" "+year;


function createCalendar(){

let calendar=document.getElementById("calendar");

calendar.innerHTML="";

for(let i=1;i<=days;i++){

    let day=document.createElement("div");

    day.className="day";

    day.innerHTML=i;

    if(i==date.getDate()&& month==date.getMonth()&& year==date.getFullYear()){
        day.classList.add("today");
    }
    if(events[i]){day.innerHTML+=`<div class="event">${events[i]}</div>`;}


    day.onclick=function(){

    let eventName=prompt("Event:");

    if(eventName){

        events[i]=eventName;

        createCalendar();}
};

calendar.appendChild(day);}
}
function addEvent(){

let name=document.getElementById("event").value;

if(name=="")return;

let day=prompt("Day number:");

events[day]=name;

createCalendar();

}

createCalendar();
