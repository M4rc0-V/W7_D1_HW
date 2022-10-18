/* Write a function to check to see if all numbers in the list are 
consecutive numbers. For example, [2,3,4,5,6,7] are consecutive numbers, 
but [1,2,4,5] are not consecutive numbers. 
The return should be boolean Type. def is_consecutive(a_list): */

function consecutive(list){
    for(i=0;i<list.length-1;i++){
        list[i] + 1 != list[i + 1] ? console.log(false) : i == list.length -2 ? console.log(true) : ''
    }
}

let list1 = [1,2,3,4,5]
let list2 = [1,2,3,4,4389207002358665]
let list3 = [45,46,47,450000]



consecutive(list1)
consecutive(list2)
consecutive(list3)

