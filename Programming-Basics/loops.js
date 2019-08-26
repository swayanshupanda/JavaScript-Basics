var vegitables = ["Carrot","Brinjal","Pumpkin","Brocoli","Tomatoes","Bitter Gaurd"]

/* for(var i = 0; i<vegitables.length; i++){
    alert(vegitables[i])
}
 */

/* var counter = vegitables.length - 1
while(counter >= 0){
    alert(vegitables[counter])
    counter--
} */

/* var findVegitable = window.prompt("Enter the vegitable you want to find")
for(var i = 0; i<vegitables.length; i++){
    //alert(vegitables[i])
    if(vegitables[i] == findVegitable){
        alert(findVegitable + " found at " +(Number.parseInt(i)+1))
        break
    } else { 
        // do nothing
    }
} */

/* for(item in vegitables){
    alert(vegitables[item])
} */

var userDetails = {
    "firstName" : "Aditya",
    "lastName" : "Srivastav",
    "contactNumber" : 9999999999,
    "city" : "Pune"
}

for(property in userDetails){
    alert(userDetails[property])
}

