function Switch1() {
  var switch1rest = document.getElementsByClassName("iSActive");
  var switch1target = document.getElementById("imageSwitch1");
	[].forEach.call(switch1rest, function(el1) {
    el1.classList.remove("iSActive");
    el1.classList.add("iSInactive");
	});
  switch1target.classList.add("iSActive");
  switch1target.classList.remove("iSInactive");

  var button1rest = document.getElementsByClassName("bSActive");
  var button1target = document.getElementById("buttonSwitch1");
	[].forEach.call(button1rest, function(al1) {
    al1.classList.remove("bSActive");
    al1.classList.add("bSInactive");
	});
  button1target.classList.add("bSActive");
  button1target.classList.remove("bSInactive");
}
function Switch2() {
  var switch2rest = document.getElementsByClassName("iSActive");
  var switch2target = document.getElementById("imageSwitch2");
	[].forEach.call(switch2rest, function(el2) {
    el2.classList.remove("iSActive");
    el2.classList.add("iSInactive");
	});
  switch2target.classList.add("iSActive");
  switch2target.classList.remove("iSInactive");

  var button2rest = document.getElementsByClassName("bSActive");
  var button2target = document.getElementById("buttonSwitch2");
	[].forEach.call(button2rest, function(al2) {
    al2.classList.remove("bSActive");
    al2.classList.add("bSInactive");
	});
  button2target.classList.add("bSActive");
  button2target.classList.remove("bSInactive");
}
function Switch3() {
  var switch3rest = document.getElementsByClassName("iSActive");
  var switch3target = document.getElementById("imageSwitch3");
  [].forEach.call(switch3rest, function(el3) {
    el3.classList.remove("iSActive");
    el3.classList.add("iSInactive");
	});
  switch3target.classList.add("iSActive");
  switch3target.classList.remove("iSInactive");

  var button3rest = document.getElementsByClassName("bSActive");
  var button3target = document.getElementById("buttonSwitch3");
	[].forEach.call(button3rest, function(al3) {
    al3.classList.remove("bSActive");
    al3.classList.add("bSInactive");
	});
  button3target.classList.add("bSActive");
  button3target.classList.remove("bSInactive");
}
function Switch4() {
  var switch4rest = document.getElementsByClassName("iSActive");
  var switch4target = document.getElementById("imageSwitch4");
  [].forEach.call(switch4rest, function(el4) {
    el4.classList.remove("iSActive");
    el4.classList.add("iSInactive");
	});
  switch4target.classList.add("iSActive");
  switch4target.classList.remove("iSInactive");

  var button4rest = document.getElementsByClassName("bSActive");
  var button4target = document.getElementById("buttonSwitch4");
	[].forEach.call(button4rest, function(al4) {
    al4.classList.remove("bSActive");
    al4.classList.add("bSInactive");
	});
  button4target.classList.add("bSActive");
  button4target.classList.remove("bSInactive");
}