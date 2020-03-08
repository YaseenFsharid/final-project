'use strict';


var Students =[];
function Student (studentName,studentId,gender,parentId,grades ){
    this.studentName=studentName;
    this.studentId=studentId;
    this.gender=gender;
    this.parentId=parentId;
    this.grades=grades;
    //this total will holds the total of each subject
    this.CourseTotal=0;
    Students.push(this);
    }

// this is the array that contains each student that is added by the form


var STD=[];
var adminForm = document.getElementById("addStudent");
 adminForm.addEventListener("submit", addstudent);
   
 function addstudent(event){
 event.preventDefault();

 var stdname = event.target.stdname.value;
 console.log(stdname);
 var gender =event.target.gender.value;
 console.log(gender);
 var studentId = event.target.stdID.value;
 console.log(studentId);
 var parentId =event.target.prntID.value;
 console.log(parentId);
  STD = new Student (stdname,gender,studentId,parentId); 
  //this is the table 
  console.log('rrrrrrr',STD.studentName);
  var STDtable =document.getElementById("studentinfo");
 // this is student table data
  for (let student = 0; student < STD.length; student++) {
  var tr=document.createElement('tr');
  STDtable.appendChild(tr);
  var td=document.createElement('td');
  td.textContent=STD[0];
  
  
  }

}

 