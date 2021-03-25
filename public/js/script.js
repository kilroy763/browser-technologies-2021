

console.log("het werkt")



window.onload = function onzichtbaar(){

    document.getElementById("een").style.display = "none";
    document.getElementById("twee").style.display = "none";
    document.getElementById("drie").style.display = "none";
    document.getElementById("vier").style.display = "none";
    document.getElementById("vijf").style.display = "none";
    document.getElementById("zes").style.display = "none";



    

    document.getElementById("submitEnquete").disabled = true;
    document.querySelector('input[name="lecturer"]').onclick = toggleCheckbox;

    function toggleCheckbox() {
        var lfckv = document.querySelector('input[name="lecturer"]').checked;
        if (lfckv) {
          document.getElementById("een").style.display = "block";

        } else {
          document.getElementById("een").style.display = "none";
        }
      }

      document.querySelector('input[name="period"]').onclick = toggleCheckbox2;

      function toggleCheckbox2() {
          var lfckv = document.querySelector('input[name="period"]').checked;
          if (lfckv) {
            document.getElementById("twee").style.display = "block";
          } else {
            document.getElementById("twee").style.display = "none";
          }
        }

        document.querySelector('input[name="grade"]').onclick = toggleCheckbox3;

        function toggleCheckbox3() {
            var lfckv = document.querySelector('input[name="grade"]').checked;
            if (lfckv) {
              document.getElementById("drie").style.display = "block";
            } else {
              document.getElementById("drie").style.display = "none";
            }
          }

          document.querySelector('input[name="material"]').onclick = toggleCheckbox4;

          function toggleCheckbox4() {
              var lfckv = document.querySelector('input[name="material"]').checked;
              if (lfckv) {
                document.getElementById("vier").style.display = "block";
              } else {
                document.getElementById("vier").style.display = "none";
              }
            }


          document.querySelector('input[name="content"]').onclick = toggleCheckbox5;

          function toggleCheckbox5() {
              var lfckv = document.querySelector('input[name="content"]').checked;
              if (lfckv) {
                document.getElementById("vijf").style.display = "block";
              } else {
                document.getElementById("vijf").style.display = "none";
              }
            }

        

            document.querySelector('input[name="learning"]').onclick = toggleCheckbox6;

            function toggleCheckbox6() {
                var lfckv = document.querySelector('input[name="learning"]').checked;
                if (lfckv) {
                  document.getElementById("zes").style.display = "block";
                  document.getElementById("submitEnquete").disabled = false;
                } else {
                  document.getElementById("zes").style.display = "none";
                }
              }

}


