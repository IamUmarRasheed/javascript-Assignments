var ordernumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordernumber.length; i++)
  if (ordernumber[i] == 1) {
    console.log("1st");
  } else if (ordernumber[i] == 2) {
    console.log("2nd");
  } else if (ordernumber[i] == 3) {
    console.log("3rd");
  } else {
    console.log(ordernumber[i] + "th");
  }
