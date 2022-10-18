
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dogString = "Hello Max, my name is Dog, and I have purple eyes!"
let dogNames = ["Max","HAS","PuRple","dog"]

function findWords(string,names){
    let stringOnlyLetters = string.replace(',','').replace(',','').replace('!','')
    let stringListLower = stringOnlyLetters.toLowerCase()
    let stringList = stringListLower.split(' ')
    for(let i = 0;i!=names.length;i++){
        stringList.includes(names[i].toLowerCase()) ? console.log(names[i]) : ''
        
    }
}
findWords(dogString,dogNames)


