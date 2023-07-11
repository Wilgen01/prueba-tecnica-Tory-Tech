process.stdin.resume();

process.stdin.setEncoding('utf8');



function whoIsOnCall(pStartDate, pDate, pPattern, pGroup) {
  if (pDate < pStartDate) {
    return "Error: Invalid date";
  }

  //   const totalDuration = pPattern.reduce((a, b) => a + b, 0);
  //   if (totalDuration < 7) {
  //     return "Error: The pattern must cover all days of the week (7).";
  //   }
  const daysPassed = Math.floor((pDate - pStartDate) / (1000 * 60 * 60 * 24));
  let currentWeek = daysPassed == 0 ? 1 : Math.ceil((daysPassed + 1) / 7) % 4;
  const dayInTheWeek = (daysPassed % 7) + 1;

  if (daysPassed == 0) {
    return pGroup[0];
  }

  currentWeek = currentWeek == 0 ? 4 : currentWeek;

  let totalDays = 0;
  let indexPerson = 0;

  for (let i = 0; i <= pPattern.length; i++) {

    totalDays += pPattern[i];
    // Valida en que sector del patrón se encuentra el dia consultado
    if (dayInTheWeek <= totalDays) {
        
      const patternLongitude = pPattern.length;
      // obtiene el indice de la persona a la cual le corresponde el turno (i)
      indexPerson =
        ((currentWeek * patternLongitude) - (patternLongitude - (i + 1) )) % pGroup.length;

      if (indexPerson == 0) {
        indexPerson = 4;
      }

      break;
    }
  }

  const result = pGroup[indexPerson - 1];
  return result;
}



 //Main program - do no modify



let vStartDate = new Date(2021, 7, 16);



//myPattern variable is a dynamic variable. We will be testing

//different rotation patterns. Your code should be generic and should

//be able to handle any rotation pattern passed in



let myPattern = [2, 2, 2];





//myGroup variable is a dynamic variable. We will be testing

//different groups, with variable group size. Your code should be generic 

//and should be able to handle any group passed in



let myGroup = ['Max','Paula','Roger','Daniela'];



let vTestDateArr = [new Date(2021, 7, 16),new Date(2021, 7, 23), new Date(2021, 7, 28),new Date(2021, 8, 8),new Date(2021, 8, 12)];



for (let i = 0; i < vTestDateArr.length; i++){



       const onCallName = whoIsOnCall(vStartDate, vTestDateArr[i], myPattern, myGroup);



       console.log(vTestDateArr[i].toLocaleDateString('en-US') + ' On call: ' + onCallName);



}