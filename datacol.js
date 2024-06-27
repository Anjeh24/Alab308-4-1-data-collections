
let arrs = []; //empty array assigned so multiple elements could be entered into it.
let rows = 5; //for number of rows to be                                           ==========part 1======================
let cols = 4; // for creating number of columns
let c = 0; //setting counter for number of elements in all sub arrays within arrs

let arry1 = ["ID", "name", "occupation", "age"];
let arry2 = [42, "Bruce", "Knight", 41];              //saving rows in arrays to insert in 2d set-up.
let arry3 = [57, "Bob", "Fry Cook", 19];
let arry4 = [63, "Blaine", "Quiz Master", 58];
let arry5 = [98, "Bill", "Doctor's Assistant", 26];



//credits geeksforgeeks


for (let i = 0; i < rows; i++){                                  //======Part two===========================
    arrs[i] = [];
    for (let j = 0; j < cols; j++) {
        arrs[i][j] = c++;
    }
}

arrs[0] = arry1; //checked to see if heading elements would be inserted in index[0] and it does.
arrs[1] = arry2;
arrs[2] = arry3;
arrs[3] = arry4;
arrs[4] = arry5;

console.log(arrs); // set up for 2d array is working
//finally, all arrays saved in parent array 'arrs'

//===============part 3===============================

let newarrs = [{
    id: 42,
    name: "Bruce",
    occupation: "Knight",
    age: 41
},
{
    id: 57,
    name: "Bob",
    occupation: "Fry Cook",
    age: 19
},
{
    id : 63,
    name: "Blaine",
    occupation: "Quiz Master",
    age: 58
},
{
    id: 98,
    name: "Bill",
    occupation: "Doctor's Assistant",
    age: 26
},
]

console.log(newarrs);

//==============part 4 sorting and manipulating data====================

//removing last element from array

newarrs.pop([3]);
console.log(newarrs);

// inserting new data to index 1 using splice

let obj = {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25"
};

newarrs.splice(1, 0, obj);

console.log(newarrs);

//adding object to the end of an array using push

let obj1 = {
    id: "7",
    name: "Bilbo",
    occupation: "none",
    age: "111"
};

newarrs.push(obj1);
console.log(newarrs);

//calculating average age using loops  

//extracting ages
let age1 = arry2[3];
console.log(age1);
let age2 = arry3[3];
console.log(age2);
let age3 = arry4[3];
console.log(age3);
let age4 = arry5[3];
console.log(age4);

let arrAges = [];
arrAges.push(age1, age2, age3, age4); //creating new array with just ages
console.log(arrAges);
let sumAges = 0;
let avgAge = 0;
 for (let i = 0; i < arrAges.length; i++) {
  sumAges += arrAges[i];
  
 }
  avgAge = sumAges / arrAges.length;
  console.log(avgAge + ' ' + 'years');


// let age1 = arr1[3];
// console.log(age1);
// let age2 = (newarrs[1][3]);
// let age3 = (newarrs[2][3]);
// let age4 = (newarrs[3][3]);

// let ageArray = [ ];
 




//==========part 5 Full circle==================================
//converting newarrs array back to csv using join()

//credits, geeksforgeeks.


function objToCvs(newarrs) {
    let tocsv = ' ';

    //extracting first row with keys
    const firstRow = Object.keys(newarrs[0]);
    tocsv += firstRow.join(',') + '\n';

    //extracting the remaining values from the object
    newarrs.forEach(objkt => {
        const vals = firstRow.map(firstRow => objkt[firstRow]);
        tocsv += vals.join(',') + '\n';
        
    });
    return tocsv;
}

//converting the object to csv

const obtoCsv = objToCvs(newarrs);
console.log(obtoCsv);





// newarrs.flat();
// console.log(newarrs);

// newarrs.toString();
// console.log(newarrs);


// let emparr = [];

// for (var i = 0; i < arrs.length; i++){
//     if (arrs[i][i] !== " ");
//     emparr = [i];

// }
// console.log(emparr);
