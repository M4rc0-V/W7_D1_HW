/* Write a function to return if the given year is a leap year. 
A leap year is divisible by 4, but not divisible by 100 unless it is 
also divisible by 400. The return should be boolean Type (true/false).
 def is_leap_year(a_year): */

function isLeapYear(year){
    year % 4 == 0 && year % 100 != 0 ? console.log(true) : year % 4 == 0 && year % 100 == 0 && year % 400 ==0? console.log(true) : console.log(false)
}

isLeapYear(2016)
isLeapYear(1997)
isLeapYear(1900)
isLeapYear(2000)