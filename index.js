process.stdin.resume();

process.stdin.setEncoding('utf8');



function whoIsOnCall (pStartDate, pDate, pPattern, pGroup) {

   //

   // Your code goes here

   //

}



 //Main program - do no modify



let vStartDate = new Date(2021, 7, 16);



//myPattern variable is a dynamic variable. We will be testing

//different rotation patterns. Your code should be generic and should

//be able to handle any rotation pattern passed in



let myPattern = [2, 2, 3];





//myGroup variable is a dynamic variable. We will be testing

//different groups, with variable group size. Your code should be generic 

//and should be able to handle any group passed in



let myGroup = ['Max','Paula','Roger','Daniela'];



let vTestDateArr = [new Date(2021, 7, 16),new Date(2021, 7, 23), new Date(2021, 7, 28),new Date(2021, 8, 8),new Date(2021, 8, 12)];



for (let i = 0; i < vTestDateArr.length; i++){



       const onCallName = whoIsOnCall(vStartDate, vTestDateArr[i], myPattern, myGroup);



       console.log(vTestDateArr[i].toLocaleDateString('en-US') + ' On call: ' + onCallName);



}