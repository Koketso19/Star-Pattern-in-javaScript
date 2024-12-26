let n = 5; //row or column count

//defining as empty string
let string = ''

for(let i =0; i < n; i++){ //exterbal loop
    for(let j =0; j < n; j++) { //internal loop

        string += "*";  
     }
     //newline after each row
     string += "\n";
}                                                                                                                                                                                                                   

//printing the string
 
console.log(string)