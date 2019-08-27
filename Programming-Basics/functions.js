
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
