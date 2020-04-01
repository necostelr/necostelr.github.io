function calculate() {

  var potatoInput = document.getElementById("potatoInput");
  var potatoOutput = document.getElementById("potatoOutput");
  var waterOutput = document.getElementById("waterOutput");
  var sugarOutput = document.getElementById("sugarOutput");
  var agentOutput = document.getElementById("agentOutput");
  var wheat = (Math.floor(potatoInput.value / 5) * 5) / 5;


  potatoOutput.value = wheat * 5;
  waterOutput.value = wheat * 6;
  sugarOutput.value = wheat;
  agentOutput.value = wheat * 2;
}
