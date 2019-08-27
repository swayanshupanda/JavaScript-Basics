/* 
function multiply (x,y){
    return x*y
}
alert(multiply(10,20))

function generateEmail (name,message){
    var emailMessage = "Hi " +name+ ",\n"+ "This is the message for you that we have for you. "+ "\n"+message+"\n"+ "copyright@EdWisor.com"
    return emailMessage
}

var welcomeEmail = generateEmail('Aditya',"Welcome to EdWisor")
alert(welcomeEmail)

var supportEmail = generateEmail('Sid',"Aditya wants your help regarding a discussion.")
alert(supportEmail)
 */

var usersDatabase = [{

    "email" : "someemail@somedomain.com",
    "firstName" : "Amit",
    "age" : 23,
    "password" : "ghgh@123",
    "isVerifiedUser" : true,
    "isPaidUser" : false,
},{
    
        "email" : "patel@somedomain.com",
        "firstName" : "Patel",
        "age" : 23,
        "password" : "ghgh@subham@123",
        "isVerifiedUser" : true,
        "isPaidUser" : true,
    },
    {
    
        "email" : "vithal@somedomain.com",
        "firstName" : "vithal",
        "age" : 23,
        "password" : "ghgh@vithal@123",
        "isVerifiedUser" : false,
        "isPaidUser" : false,
    }
]

function logInUser (userEmail,userPassword,database){
    var loginData = {
        "verifyEmail":false,
        "verifyPassword":false
    }
    for(currentUser in database){
        if(database[currentUser]["email"] == userEmail){
            loginData.verifyEmail = true
            if(database[currentUser]["password"] == userPassword){
                loginData.verifyPassword = true
                break
            } else { 

            }
        } else {

        }
    }
    return loginData
}

var currentEmail = window.prompt("Please enter your email")
var currentPassword = window.prompt("Please enter your password")

var currentLoginData = logInUser(currentEmail,currentPassword,usersDatabase)
//console.log(currentLoginData)

if(currentLoginData.verifyPassword == true && currentLoginData.verifyEmail == true){
    alert("You are logged in")
} else if (currentLoginData.verifyEmail == false && currentLoginData.verifyPassword == false){
    alert("User is not registered")
} else if (currentLoginData.verifyEmail == true && currentLoginData.verifyPassword == false){
    alert("Incorrect password")
} else {
    alert("Invalid Cedential")
}
