function arrayTranspose(array, lengthOfNewArray){
    let emptyArray = [];
    for(let i = 0; i < 5; i++){
       emptyArray.push([]);
        }
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < 5; j++){
         emptyArray[j].push(array[i][j])
      }
    }
      return emptyArray
    }
 

//    console.log(arrayTranspose([
//         [5, 12, 17, 9, 3],
//         [13, 4, 8, 14, 1],
//         [9, 6, 3, 7, 21],
//       ]));

function isValid(str) {
    str= str.split('');
    let valid= "valid";
    let newArr= [];
    
    for(let i=0; i<str.length; i++){
        let char= str[i];

        switch(char){
            case '(':
            case '{':
            case '[':
                newArr.push(char); // add opening bracket to new array
                break;
            case ')':
            case '}':
            case ']':
                if(newArr.length == 0){
                    valid= "invalid"; // if array is empty (no opening brackets), then invalid
                }else{
                    // remove last item (opening bracket) from array
                    // then compare to current character (closing bracket)
                    let last= newArr.pop();
                    if((char==')' && last != '(') ||
                        (char=='}' && last != '{') ||
                        (char==']' && last != '[')
                    ){
                        valid = "invalid"
                    }
                }
                break;
            default:
                console.log(char);
        }
    }
    
    if(newArr.length > 0){
        valid= "invalid";
    }

    return valid;
}

console.log(isValid("{}{}(())"))