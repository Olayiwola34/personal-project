//initialize the buttons
document.getElementById("pause-btn").disabled=true;
document.getElementById("stop-btn").disabled=true;

//declare global variable
var timer=null;
var h=0;// initialize hour to be 0
var m=0;//initialize minute to be 0
var s=0;//initialize seconds to be 0
//start function
function startCounting(){
   

    //assign the hour,minutes and seconds variables
    h=document.getElementById("input-hour").value || h;
    m=document.getElementById("input-minutes").value || m;
    s=document.getElementById("input-seconds").value ||s;

    //check for illegal values

    if((h==0 & m==0 &s==0)||(h<0 & m==0 & s<0)){
        alert("The time is not correct");
        return;
    }


    timer=setInterval(counting,1000);


     // initialize the button element
     document.getElementById("start-btn").disabled=true;
     document.getElementById("pause-btn").disabled=false;
     document.getElementById("stop-btn").disabled=false;

     //change the state of input element
     document.getElementById("input-hour").disabled=true;
     document.getElementById("input-minutes").disabled=true;
     document.getElementById("input-seconds").disabled=true;
}

//pause timer function
function pauseCounting(){
//initialize the button element
document.getElementById("start-btn").disabled=false;
document.getElementById("pause-btn").disabled=true;
document.getElementById("stop-btn").disabled=false;

//change the state of the input element
document.getElementById("input-hour").disabled=false;
document.getElementById("input-minutes").disabled=false;
document.getElementById("input-seconds").disabled=false;


clearInterval(timer);


}

//stop timer function
function stopCounting(){
    //initialize the button element

    document.getElementById("start-btn").disabled=false;
    document.getElementById("pause-btn").disabled=true;
    document.getElementById("stop-btn").disabled=true;

    //change the state of the input element
document.getElementById("input-hour").disabled=false;
document.getElementById("input-minutes").disabled=false;
document.getElementById("input-seconds").disabled=false;

//reset the time
h=0;
m=0;
s=0;
//stop timer
clearInterval(timer);
 document.getElementById("currentTime").innerHTML="Timer stopped";


}
//counting function
function counting(){
    if(s==0){

        if(m==0){
            h--;
            m=59;
            s=59;
        }else{
            m--;
            s=59;
        }
       }else{
        s--
       }


//display current time
document.getElementById("currentTime").innerHTML="current time  : " + h  +  "h"  +m +  "m"  + s +   "s";


document.getElementById("input-hour").value=h;
document.getElementById("input-minutes").value=m;
document.getElementById("input-seconds").value=s;


//check if the seconds is 0

if(s==0){
    if(m==0){
        if(h==0){
            stopCounting();
           
            setTimeout(function(){
                alert("The time is up")
            },0);
            return

        }
    }
}
}
//restrict user input value

var inputh=document.getElementById("input-hour");
inputh.addEventListener("input",function(){
    inputh.value=parseInt(inputh.value||0);
    if(inputh.value >24)
    inputh.value=24
    if(inputh.value <0)
    inputh.value=0
});

var inputm=document.getElementById("input-minutes");
inputm.addEventListener("input",function(){
    inputm.value=parseInt(inputm.value||0);
    if(inputm.value >59)
    inputm.value=59;
    if(inputm.value <0)
    inputm.value=0;
});
var inputs=document.getElementById("input-seconds");
inputs.addEventListener("input",function(){
inputs.value=parseInt(inputs.value||0);
if(inputs.value>59)
inputs.value=59;
if(inputs.value<0)
inputs.value=0;

});


//optimize the format of the hours,seconds and minutes

h=h.toString();
m=m.toString();
s=s.toString();
if(h.match(/^\d$/)){
    //if hour is a single digit
    h="0"+h;
}
if(m.match(/^\d$/)){
    //if the minute is a single digit add 0 in front
    m="0"+m;
}if (s.match(/^\d$/)){
    s="0"+s;
}
