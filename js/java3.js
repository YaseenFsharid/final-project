    var student1String = localStorage.getItem("studentinfo");
    if (student1String) {
      var sT = JSON.parse(student1String);
    }
    console.log(sT[0].studentName);
   console.log( typeof(sT));
   
// the submit event handler for the status table 
var Form = document.getElementById("parentForm");
var p=document.getElementById("parent");
Form.addEventListener("click",getVaildation );
function getVaildation()
{
    event.preventDefault()
    for (var k=0; k< sT.length ; k++){

    if (p.value  ==sT[k].parentId)
    {
        console.log("true");

          makingHeader();
          renderTable();
        
    }
    }
}


function makingHeader() {
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
    // var th7 = document.createElement("th");
    // tr.appendChild(th7);
    // th7.textContent = "Averge";
    var th8 = document.createElement("th");
    tr.appendChild(th8);
    th8.textContent = "FeedBack";
    // STDtable.remove();
        //   STDtable.remove();

  }



  function renderTable() {
    // addstudent();
    // this is the table
    var STDtable = document.getElementById("tableInfo");
    // this is student table data
      var data1 = document.createElement("tr");
      STDtable.appendChild(data1);
      var td = document.createElement('td');
      data1.appendChild(td);
      td.textContent = sT.studentName;
      var td2 = document.createElement('td');
      data1.appendChild(td2);
      td2.textContent = sT.studentId;
      var td3 = document.createElement('td');
      data1.appendChild(td3);
      td3.textContent = sT.gender;
      var td4 = document.createElement('td');
      data1.appendChild(td4);
      td4.textContent = sT.parentId;
      var total = 0;
      //this is the for loop to get each mark in math subject
      for (let stu = 0;stu< sT.length; stu++) {
          
          
      
      for (var j = 0; j < sT[stu].mathMark.length; j++) {
        var td5 = document.createElement('td');
        data1.appendChild(td5);
        td5.textContent = sT[stu].mathMark[j];
        // mathTotal+=parseInt(sT[0].mathMark[j]);
        // total = total + parseInt(sT[0].mathMark[j]);
      }
      //this is the for loop to get each mark in english subject
      for (var d = 0; d < sT[stu].englishMark.length; d++) {
        var td6 = document.createElement('td');
        data1.appendChild(td6);
        // total = total + parseInt(sT.englishMark[d]);
        td6.textContent =sT[stu].englishMark[d];
      }
      //this is the for loop to get each mark in science subject
      for (var k = 0; k < sT[stu].scienceMark.length; k++) {
        var td7 = document.createElement('td');
        data1.appendChild(td7);
        td7.textContent = sT[stu].scienceMark[k];
        // total = total + parseInt(sT.scienceMark[k]);
      }
      console.log(total, "total");
      var td8 = document.createElement("td");
      data1.appendChild(td8);
      td8.textContent = total / 3;
      // STDtable.deleteRow(-1);
      var td9 = document.createElement("td");
      data1.appendChild(td9);
      td9.setAttribute("border-collapse", " collapse");
      td9.textContent = sT.feedBack;
    // this is to count the number of female students

  }

}
