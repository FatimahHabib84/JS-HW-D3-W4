// Q1
var title = "Welcom to My JavaScript Lesson"
console.log("length of title is ${title.length}")
console.log(title.substring(0,12))
console.log(title.toUpperCase())
console.log(title.toLocaleLowerCase())
console.log(title.replace("Welcome","Hello"))
console.log(typeof title)
console.log(title.split('').reverse().join('')) //split it then it becomes an array of character then merge them by no space

// Q2
var num1 = 10
var num2 = 20
var num3 = 30
console.log(Math.min(num1,num2,num3))
console.log(Math.max(num1,num2,num3))
console.log(`num1>num3? ${num1>num3}`)

// Q3
var isLeapYear
var year=2023
if(year%4==0 && year%100==0){
    if(year%400==0){
        isLeapYear=true
    } else {
        isLeapYear=false
    }
}else{
    isLeapYear=true
}
console.log(`is ${year} a leap year? ${isLeapYear}`)

// Q4
var number = 500
if(number%2==0){
    console.log(`${number} is Even`)
} else {
    console.log(`${number} is Odd`)
}

// Q5
var height = 1.60
var weight = 49
var MBI = weight/Math.pow(height,2)
MBI<15? console.log("Very severe weight loss")
: MBI>=15 && MBI<16? console.log("Severe weight loss")
: MBI>=16 && MBI<18.5? console.log("Weight loss")
: MBI >=18.5 && MBI < 25? console.log("Normal weight")
: MBI >=25 && MBI <30? console.log("overweight")
: MBI >=30 && MBI <35? console.log("First degree obesity")
: MBI >=35 && MBI <40? console.log("Second degree obesity")
: console.log("Very excessive obesity")

// Q6
var shirtWidth = 23
var shirtLength = 30
var shirtSleeve = 8.71
var expectedSize
if(shirtWidth<20 && shirtLength<29 && shirtSleeve<8.38){
    expectedSize='S'
} else if(shirtWidth>=20 && shirtWidth<22 && shirtLength>=29 && shirtLength<30 && shirtSleeve>=8.38 && shirtSleeve<8.63){
    expectedSize='M'
} else if(shirtWidth>=22 && shirtWidth<24 && shirtLength>=30 && shirtLength<31 && shirtSleeve>=8.63 && shirtSleeve<8.88){
    expectedSize='L'
} else if(shirtWidth>=24 && shirtWidth<26 && shirtLength>=31 && shirtLength<33 && shirtSleeve>=8.88 && shirtSleeve<9.63){
    expectedSize='XL'
} else if(shirtWidth>=26 && shirtWidth<28 && shirtLength>=33 && shirtLength<34 && shirtSleeve>=9.63 && shirtSleeve<10.13){
    expectedSize='2XL'
} else if(shirtWidth>=28 && shirtLength>=34 && shirtSleeve>=9.63){
    expectedSize='3XL'
} else{
    expectedSize='NA'
}
console.log(`shire width is ${shirtWidth}, shirt length is ${shirtLength}, and shirt sleeve is ${shirtSleeve} so the expected size is ${expectedSize}`)