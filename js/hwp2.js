/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(i=0;i<arr.length;i++){
        i % 2 == 0 ? arr.splice(i,1,"even index") : arr[i]
    }
    console.log(arr)
}
replaceEvens(givenArr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]