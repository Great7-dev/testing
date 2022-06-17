
function arrTranspose(arr){
    let n = arr.length;
    let m = arr[0].length;
    let tempArr = [];

    for(let i = 0; i<arr.length;i++){
        tempArr[i] = [];
        for(let j = 0; j<arr[0].length; j++){
            let element = arr[i][j];
            console.log(element);
        }
    }
}


arrTranspose([
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21]
  ]);