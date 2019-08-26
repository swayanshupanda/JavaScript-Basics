var grade = window.prompt('What is your grade?')
var result = ''

switch (grade){
    case 'A' : 
        result = "You have excellent marks"
        break
    case 'B' : 
        result = "You have performed good"
        break
    case 'C' :
        result = "You have just passed"
        break
    case 'D' :
        result = "You have failed"
        break
    default :
        result = "This is not a valid input"

}

alert(result)