/* Please write a Python function, max_num_in_list to return the 
max number of a given list. The first line of the code has 
been defined as below. def max_num_in_list(a_list): */

function findMax(list){
    console.log(Math.max(...list))
}

let list1 = [100,2,3,4,5]
let list2 = [1,2,100,4,5]
let list3 = [1,2,3,4,100]

findMax(list1)
findMax(list2)
findMax(list3)



