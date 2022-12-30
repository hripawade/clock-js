function clock(){
    const date =new Date();
console.log(date);

let hours = date.getHours();
console.log(hours);
hrs = hours;
let mins = date.getMinutes();
console.log(mins);

let secs = date.getSeconds();
console.log(secs);

let meridian ;
if(hours>12){
    meridian = "PM";
    hours-=12;
}
else{
    meridian ="AM";
}
if(hours<10){
    hours = "0"+hours;
}
if(mins<10){
    mins = "0"+mins;
}
if(secs<10){
    secs = "0"+secs;
}
const hoursSlot =document.getElementById('hours');
hoursSlot.innerHTML = `${hours}` + "\n Hours";

const minsSlot =document.getElementById('mins');
minsSlot.innerHTML = `${mins}` + "\n Mins";

const secsSlot =document.getElementById('secs');
secsSlot.innerHTML = `${secs}` + "\n Secs";

const meridianSlot =document.getElementById('meridian');
meridianSlot.innerHTML = meridian;
}

setInterval(() =>{
clock();
},1000);

function setAlarm() {
   let w = document.getElementById("wake").value
   if(w== hrs){
    document.getElementById('imgM').src = './morning.jpg';
    document.getElementById('text').innerHTML = "GOOD MORNING!! WAKE UP !!"
    document.getElementById('grabText').innerHTML = "GRAB SOME HEALTHY BREAKFAST"
   }

   let l = document.getElementById("lunch").value;
   if(l == hrs){
    document.getElementById("imgM").src = "./afternoon.jpg";
    document.getElementById('text').innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP!!"
    document.getElementById('grabText').innerHTML = "LET'S HAVE SOME LUNCH !!"
   }

   let na = document.getElementById("nap").value;
   if(na == hrs){
    document.getElementById("imgM").src = "./evening.jpg";
    document.getElementById('text').innerHTML = "GOOD EVENING!!"
    document.getElementById('grabText').innerHTML = "STOP YAMING, GET SOME TEA ITS JUST EVENING"
   }

   let n = document.getElementById("night").value;
   if(n == hrs){
    document.getElementById("imgM").src = "./night.jpg";
    document.getElementById('text').innerHTML = "GOOD NIGHT!!"
    document.getElementById('grabText').innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
  }

  let update = document.getElementsByClassName("updata");
  update[0].innerText =  " Wake up time :" + " " + wake.options[wake.selectedIndex].text;
  update[1].innerText =  " Lunch time :" + " " + lunch.options[lunch.selectedIndex].text;
  update[2].innerText =  " Nap time :" + " " + nap.options[nap.selectedIndex].text;
  update[3].innerText =  " Night time :" + " " + night.options[night.selectedIndex].text;
}