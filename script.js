"use strict"

var hh = 0;
var min = 0;
var seg = 0;

var tempo = 1000; //Qnts milesimos valem 1 segundo
var cron;


function start(){
  cron = setInterval(() => { timer(); }, tempo);
}

function pause(){
  clearInterval(cron);
}

function stop(){
  clearInterval(cron);
  hh = 0;
  min = 0;
  seg = 0;

  document.getElementById('counter').innerHTML = '00:00:00';
}

function timer(){
  seg++;

  if(seg == 59){
    seg = 0;
    min++;

    if(min == 60){
      min = 0;
      hh++;
    }
  }

  var format = (hh < 10 ? '0' + hh : hh) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg)

  document.getElementById('counter').innerHTML = format;

  return format;
}