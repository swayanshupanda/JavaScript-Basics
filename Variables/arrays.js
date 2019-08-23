// declating and array and using it 

var popularSports = [ "Cricket" , "Football" , "Tennis" , "Rugby" , "Atletics" ]

var numbersOnADice = [ 1 , 2 , 3 , 4 , 5 ]

alert(popularSports[0])
alert(popularSports[1])
alert(popularSports[2])
//alert(popularSports[5]) -- undefined

var lengthOfSports = popularSports.length  // length property of arrays 
alert (lengthOfSports)

// Array of objects

var users = [{

    "email" : "someemail@somedomain.com",
    "firstName" : "Amit",
    "age" : 23,
    "password" : "ghgh@123",
    "isVerifiedUser" : true,
    "isPaidUser" : false,
},{
    
        "email" : "someemail@somedomain.com",
        "firstName" : "Patel",
        "age" : 23,
        "password" : "ghgh@subham@123",
        "isVerifiedUser" : true,
        "isPaidUser" : true,
    },
    {
    
        "email" : "someemail@somedomain.com",
        "firstName" : "vithal",
        "age" : 23,
        "password" : "ghgh@vithal@123",
        "isVerifiedUser" : false,
        "isPaidUser" : false,
    }
]

var firstUserName = users[0].firstName
var thirdUserName = users[2].firstName

var firstUser = users[0]

alert(firstUserName)
alert(thirdUserName)

console.log(firstUser)