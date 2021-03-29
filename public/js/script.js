  async function storeEnq(id) {
  let lecturer = await getLecturer();
  let period = await getPeriod();
  let grade = await getGrade();
  let material = await getMaterial();
  let content = await getContent();
  let learning = await getLearning();
  let comments = document.getElementsByName("comments")[0].value;
  
  let obj = {
      lecturer: lecturer,
      period: period,
      grade: grade,
      material: material,
      content: content,
      learning: learning,
      comments: comments
  }
  
  localStorage.setItem(id, JSON.stringify(obj));
  }
  

  function getInputs() {
  let inputs = document.querySelectorAll("input");
  return inputs;
  }
  
  function getLecturer() {
  let lecturers = document.querySelectorAll("input[name='lecturer']");
  for (lecturer of lecturers) {
      if (lecturer.checked) {
          return lecturer.value;
      } 
  }
  }
  
  function getGrade(){
  let grades = document.querySelectorAll("input[name='grade']")
  for (grade of grades){
      if(grade.checked){
          return grade.value;
      }
  }
  }
  
  function getPeriod() {
  let periods = document.querySelectorAll("input[name='period']");
  for (period of periods) {
      if (period.checked) {
          return period.value;
      }
  }
  }
  
  function getMaterial() {
  let materials = document.querySelectorAll("input[name='material']");
  for (material of materials) {
      if (material.checked) {
          return material.value;
      }
  }
  }
  
  function getContent() {
  let contents = document.querySelectorAll("input[name='content']");
  for (content of contents) {
      if (content.checked) {
          return content.value;
      }
  }
  }
  
  function getLearning() {
  let learnings = document.querySelectorAll("input[name='learning']");
  for (learning of learnings) {
      if (learning.checked) {
          return learning.value;
      }
  }
  }
  
  async function pushEnqData(id) {
    if (localStorage.getItem(id)) {
        let data = JSON.parse(localStorage.getItem(id));
        let inputs = await getInputs();
        let comments = document.querySelector("textarea");
        for (let key of Object.keys(data)) {
            if (key === 'comments') {
                comments.innerHTML = data[key];
            }
    
            inputs.forEach(input => {
                if (input.value === data[key] && input.type == "radio") {
                    document.getElementById("een").style.display = "block";
                    document.getElementById("twee").style.display = "block";
                    document.getElementById("drie").style.display = "block";
                    document.getElementById("vier").style.display = "block";
                    document.getElementById("vijf").style.display = "block";
                    document.getElementById("zes").style.display = "block";
                    input.checked = true;
                } 
            })
    
            
        }
    
    }
    }
    
  

  let enqId = document.getElementById('tagname')
  let enq = document.getElementById('form')
  
  
  if (enqId) {
      pushEnqData(enqId.innerHTML);
  
      enq.addEventListener('input', () => {
          storeEnq(enqId.innerHTML);
          console.log(storeEnq)
      })
  } else {
  console.log("localstorage is not available")
  }

  

  


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






