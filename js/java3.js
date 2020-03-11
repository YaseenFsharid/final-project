
'use strict';

var clicks = 0;
var student1String = localStorage.getItem("studentinfo");

if (student1String) {
  var sT = JSON.parse(student1String);
}
console.log(sT);

// the submit event handler for the status table 
var form = document.getElementById("parentForm");

var p = document.getElementById("parent");

form.addEventListener("submit", getVaildation);

function getVaildation() {
  event.preventDefault()
  for (var k = 0; k < sT.length; k++) {
    if (p.value == sT[k].parentId) {
      clicks++;
      createHeader();


      if (clicks > 1) {
        console.log("clicks", clicks);
        form.removeEventListener("submit", getVaildation);
        console.log(form.removeEventListener("submit", getVaildation));

      }
      console.log("true");


      var STDtable = document.getElementById("tableInfo");
      // this is student table data
      var data1 = document.createElement("tr");
      STDtable.appendChild(data1);
      var td = document.createElement('td');
      data1.appendChild(td);
      td.textContent = sT[k].studentName;
      var td2 = document.createElement('td');
      data1.appendChild(td2);
      td2.textContent = sT[k].studentId;
      var td3 = document.createElement('td');
      data1.appendChild(td3);
      td3.textContent = sT[k].gender;
      var td4 = document.createElement('td');
      data1.appendChild(td4);
      td4.textContent = sT[k].parentId;
      var total = 0;
      //this is the for loop to get each mark in math subject

      for (var j = 0; j < sT[k].mathMark.length; j++) {
        var td5 = document.createElement('td');
        data1.appendChild(td5);
        td5.textContent = sT[k].mathMark[j];
        // mathTotal += parseInt(sT[k].mathMark[j]);
        // total = total + parseInt(sT[k].mathMark[j]);
      }
      //this is the for loop to get each mark in english subject
      for (var d = 0; d < sT[k].englishMark.length; d++) {
        var td6 = document.createElement('td');
        data1.appendChild(td6);
        // total = total + parseInt(sT[k].englishMark[d]);
        td6.textContent = sT[k].englishMark[d];
      }
      //this is the for loop to get each mark in science subject
      for (var n = 0; n < sT[k].scienceMark.length; n++) {
        var td7 = document.createElement('td');
        data1.appendChild(td7);
        td7.textContent = sT[k].scienceMark[n];
        // total = total + parseInt(sT[k].scienceMark[k]);
        
      }
      // console.log(total, "total");
      var td8 = document.createElement("td");
      td8.textContent = sT[k].avg;
      data1.appendChild(td8);
      console.log(sT[k].avg);
      // STDtable.deleteRow(-1);
      var td9 = document.createElement("td");
      data1.appendChild(td9);
      td9.setAttribute("border-collapse", " collapse");
      td9.textContent = sT[k].feedBack;
      //this is the chart of the grades of each student 
      
      
      // STDtable.reset();


      AddChart();
      function AddChart() {
        console.log('yaseenasac', sT[k].mathMark);
        var ctx2 = document.getElementById('gradesChart').getContext('2d');
        var gradesChart = new Chart(ctx2, {
          type: 'line',
          data: {
            labels: "",
            labels: "Math,Science,English",
            datasets: [{
              label: "Math",
              label: ["Math Marks"],
              data: sT[k].mathMark,
              backgroundColor:
                'rgba(57,116,162,0.2)',


              borderColor:

                'rgb(57,116,162)',

              borderWidth: 1
            },
            {
              label: 'science',
              data: sT[k].scienceMark,
              backgroundColor:
                'rgba(174,174,174,0.2)',


              borderColor:

                'gray',

              borderWidth: 1
            },
            {
              label: 'english',
              data: sT[k].englishMark,
              backgroundColor:
                'rgba(64,13,22,0.2)',


              borderColor:

                '#400d16',

              borderWidth: 1
            }
            ]
          },
          options: {
            scales: {
              yAxes: [{
                display: true,
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });


      }

    }

  }


}

// makingHeader();

// renderTable();


function createHeader() {
  var STDtable = document.getElementById("tableInfo");
  var tr = document.createElement('tr');
  STDtable.appendChild(tr);
  var th = document.createElement("th");
  tr.appendChild(th);
  th.textContent = "Student Name";
  console.log(th);
  var th1 = document.createElement("th");
  tr.appendChild(th1);
  th1.textContent = "Student ID";
  var th2 = document.createElement("th");
  tr.appendChild(th2);
  th2.textContent = "Gender";
  var th3 = document.createElement("th");
  tr.appendChild(th3);
  th3.textContent = "Parent ID";
  var th4 = document.createElement("th");
  th4.setAttribute("colspan", "3");
  tr.appendChild(th4);
  th4.textContent = "Math";
  var th5 = document.createElement("th");
  th5.setAttribute("colspan", "3");
  tr.appendChild(th5);
  th5.textContent = "English";
  var th6 = document.createElement("th");
  th6.setAttribute("colspan", "3");
  tr.appendChild(th6);
  th6.textContent = "Science ";
  var th7 = document.createElement("th");
  tr.appendChild(th7);
  th7.textContent = "Averge";
  var th8 = document.createElement("th");
  tr.appendChild(th8);
  th8.textContent = "FeedBack";
}



