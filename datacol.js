
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