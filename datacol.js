
let arrs = []; //empty array assigned so multiple elements could be entered into it.
let rows = 5; //for number of rows to be 
let cols = 4; // for creating number of columns
let c = 0; //setting counter for number of elements in all sub arrays within arrs

let arry1 = ["ID", "name", "occupation", "age"];
let arry2 = [42, "Bruce", "Knight", 41];              //saving rows in arrays to insert in 2d set-up.
let arry3 = [57, "Bob", "Fry Cook", 19];
let arry4 = [63, "Blaine", "Quiz Master", 58];
let arry5 = [98, "Bill", "Doctor's Assistant", 26];



//credits geeksforgeeks


for (let i = 0; i < rows; i++){
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
