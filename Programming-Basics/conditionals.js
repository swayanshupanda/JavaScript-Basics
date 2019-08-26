/* 
var itemPurchased = window.prompt("Please enter the number of items purchased")
if (itemPurchased > 3){
    alert("You have got a promo code")
} else if (itemPurchased == 3) {
    alert("purchase 1 more item to unlock a promo code")
} else {
    alert("You are not eligible for promo codes")
}  */

var isTopper = false;
var marksObtained = window.prompt('Please enter the marks')
if (marksObtained == undefined || marksObtained == null || marksObtained == ''){
    alert('Please enter a valid mark')
} else if (marksObtained > 100 || marksObtained < 0) {
    alert('Please enter a number between 0 to 100')
} else {
    marksObtained = Number.parseInt(marksObtained)
    var totalMarks = 100

    var percentageOfMarks = (marksObtained / totalMarks) * 100

    if (percentageOfMarks >= 90){
        isTopper = true
    } else {
        isTopper = false
    }

    alert(isTopper)

}