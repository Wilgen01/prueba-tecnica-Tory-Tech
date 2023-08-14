process.stdin.resume();

process.stdin.setEncoding('utf8');



function whoIsOnCall(pStartDate, pDate, pPattern, pGroup) {
  const date = new Date(pStartDate.getTime() + 86400000 * pPattern[0])
  if (date > pDate) return pGroup[0];  
  return whoIsOnCall(date, pDate, [...pPattern.slice(1), pPattern[0]], [...pGroup.slice(1), pGroup[0]]);
}



 //Main program - do no modify



let vStartDate = new Date(2021, 1, 1);



//myPattern variable is a dynamic variable. We will be testing

//different rotation patterns. Your code should be generic and should

//be able to handle any rotation pattern passed in



let myPattern = [2, 2, 3];





//myGroup variable is a dynamic variable. We will be testing

//different groups, with variable group size. Your code should be generic 

//and should be able to handle any group passed in



let myGroup = ['Max','Paula','Roger','Daniela'];



let vTestDateArr = [new Date(2021, 1, 1),new Date(2021, 1, 3), new Date(2021, 1, 8),new Date(2021, 1, 24),new Date(2021, 1, 28)];



for (let i = 0; i < vTestDateArr.length; i++){



       const onCallName = whoIsOnCall(vStartDate, vTestDateArr[i], myPattern, myGroup);



       console.log(vTestDateArr[i].toLocaleDateString('en-US') + ' On call: ' + onCallName);



}