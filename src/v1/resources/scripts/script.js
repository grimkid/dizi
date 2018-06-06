let switch1 = true;
let switch2 = true;
let switch3 = true;
let switch4 = true;
let source1 = true;
let source2 = true;
let source3 = true;
activateCase1();
/**
  * Case 1 is when all switches are accesible from GUI
  */
function activateCase1(){
  $("#switch-1").click(()=>{
    switch1 = !switch1;
    toggle("#switch-1");
    if(switch1){
      activate("#power-line-1");
    } else {
      deactivate("#power-line-1");
    }
  });
  $("#switch-2").click(()=>{
    switch2 = !switch2;
    toggle("#switch-2");
    if(switch2){
      activate("#power-line-2");
    } else {
      deactivate("#power-line-2");
    }
  });
  $("#switch-3").click(()=>{
    switch3 = !switch3;
    toggle("#switch-3");

    if(switch3){
      activate("#power-line-3");
    } else {
      deactivate("#power-line-3");
    }
  });
  $("#switch-4").click(()=>{
    switch4 = !switch4;
    toggle("#switch-4");
  });
}
function toggle(id){
  let color = $(id).css("background-color");
  if(color == "rgb(0, 128, 0)") {
    deactivate(id);
  } else {
    activate(id);
  }
  updatePower();
}
function activate(id){
  $(id).css("background-color", "rgb(0, 128, 0)");
}
function deactivate(id){
  $(id).css("background-color", "rgb(255, 0, 0)");
}
function updateMainPower2(){
  if((switch1 && switch4) || switch3){
    activate("#main-power-line-2");
  } else {
    deactivate("#main-power-line-2");
  }
}
function updateMainPower1(){
  if(switch1 || (switch2 && switch3 && switch4)){
    activate("#main-power-line-1");
  } else {
    deactivate("#main-power-line-1");
  }
}
function updatePower(){
  updateMainPower1();
  updateMainPower2();
}
/**
  * @param id string only, no "#"
  */
function resetElement(id){
  var old_element = document.getElementById(id);
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
}
