// Assignment # 13-15
// JAVASCRIPT

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var ausajaLiteral = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
// var ausajaObject = [];

// 3. Declare and initialize a strings array

// var ausaja =["" , ""]

// 4. Declare and initialize a numbers array.

// var ausaja =[1 , 2]

// 5. Declare and initialize a boolean array.

// var ausaja =[true , false]

// 6. Declare and initialize a mixed array.
// var ausaja =[1 , 2 ,3,"ausaja" , true]

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// var ausaja =["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M", "Phil", "PhD"];

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var namess =["areeb", "ahmed", "ali"];
// var totalNumber =500;
// var numbers =[499,300,100];
// document.write(`score of ${namess[0]} is ${numbers[0]} is ${(numbers [0] * 100 )/ totalNumber }% <br>`) 
// document.write(`score of ${namess[1]} is ${numbers[1]} is ${(numbers [1] * 100 )/ totalNumber }% <br>`)
// document.write(`score of ${namess[2]} is ${numbers[2]} is ${(numbers [2] * 100 )/ totalNumber }%<br>`)

// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete.Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colorss = ["red", "blue", "pink"];
// var userprps = prompt("in start");
// var userprpe = prompt("in end");

// // colorss.unshift(userprps)

// // colorss.push(userprpe)
// colorss.unshift("white","black")

// colorss.shift()
// colorss.pop()

//  var induser = prompt("defined where you want to add color")
//  var coloreee = prompt("define color")
// colorss.splice(induser,0,coloreee)
//   document.write(colorss)

//  var induser = prompt("defined starting index of delete")
//  var coloreee = prompt("define ending index of delete")
// colorss.splice(induser,coloreee)
//   document.write(colorss)

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var studentNumber = [320,230,480,120]
// document.write(`score od student = ${studentNumber} <br> ` ) 
// studentNumber.sort()
// document.write(` sorted score of student = ${studentNumber} <br> `)

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var cityName = ["karachi", "lahore","islamabad", "quetta","peshawar"];
// document.write(`city list <br> ${cityName}`)
// var copy = cityName.slice(2,4)
// document.write(`city list <br> ${copy}`)

// 12. Write a program to create a single string from the
// below mentioned array:
// // (Use array’s join method)
//  var arr = ["This","is","my","cat"];
//  var kuchbhi = arr.join(" ")
//  document.write(kuchbhi)
 
// var CompParts=["keyboard","mouce","printer","monior","cpu","vufu"]
 
// for (i=0; i < CompParts.length ; i++  ){
//     document.write(CompParts[i] + "<br>" )
// }
// for (i=CompParts.length -1;i>=0;i--){
//     document.write(CompParts[i] + "<br>")
// }

