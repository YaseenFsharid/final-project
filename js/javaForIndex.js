'use strict';
//this global array will hold the students objects
var Students =[];
 

//this constructors is made to create the students objects
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



// this is the event for the form (login) to check if the admin or parent are authorized to access the admin and the parent page
var userName = document.getElementById('USERNAME');
var password = document.getElementById('PASSWORD');

var loginF =document.getElementById("login");
loginF.addEventListener('submit' , Loging);

function Loging(event){
    event.preventDefault();
    
    if (userName.value  == 'ahlam' && password.value == 'asd122334'){
        window.location.href="Admin.html";
    }
    else if (userName.value =='amal' && password.value =='dsa122334'){
        window.location.href ="parent.html";
    }
    else{
        alert("please enter a valid login information");
    }
}      
