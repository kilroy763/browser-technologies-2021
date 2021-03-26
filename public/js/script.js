console.log("het werkt")



window.onload = function onzichtbaar() {

  document.getElementById("een").style.display = "none";
  document.getElementById("twee").style.display = "none";
  document.getElementById("drie").style.display = "none";
  document.getElementById("vier").style.display = "none";
  document.getElementById("vijf").style.display = "none";
  document.getElementById("zes").style.display = "none";





  document.getElementById("submitEnquete").disabled = true;

  var lecturerRadioButtons = document.querySelectorAll('input[name="lecturer"]');
  lecturerRadioButtons.forEach(function (lecturerRadioButton) {
    lecturerRadioButton.addEventListener("change", toggleCheckbox)
  })

  function toggleCheckbox() {
    document.getElementById("een").style.display = "block";
    console.log(lecturerRadioButtons)
  }


  var periodRadioButtons = document.querySelectorAll('input[name="period"]');
  periodRadioButtons.forEach(function (periodRadioButton) {
    periodRadioButton.addEventListener("change", toggleCheckbox2)
  })

  function toggleCheckbox2() {
    document.getElementById("twee").style.display = "block";
  }


  var gradeRadioButtons = document.querySelectorAll('input[name="grade"]');
  gradeRadioButtons.forEach(function (gradeRadioButton) {
    gradeRadioButton.addEventListener("change", toggleCheckbox3)
  })


  function toggleCheckbox3() {
    document.getElementById("drie").style.display = "block";
  }


  var materialRadioButtons = document.querySelectorAll('input[name="material"]');
  materialRadioButtons.forEach(function (materialRadioButton) {
    materialRadioButton.addEventListener("change", toggleCheckbox4)
  })

  function toggleCheckbox4() {
    document.getElementById("vier").style.display = "block";
  }

  var contentRadioButtons = document.querySelectorAll('input[name="content"]');
  contentRadioButtons.forEach(function (contentRadioButton) {
    contentRadioButton.addEventListener("change", toggleCheckbox5)
  })

  function toggleCheckbox5() {
    document.getElementById("vijf").style.display = "block";
  }

  var learningRadioButtons = document.querySelectorAll('input[name="learning"]');
  learningRadioButtons.forEach(function (learningRadioButton) {
    learningRadioButton.addEventListener("change", toggleCheckbox6)
  })

  function toggleCheckbox6() {
    document.getElementById("zes").style.display = "block";
    document.getElementById("submitEnquete").disabled = false;
  }

}