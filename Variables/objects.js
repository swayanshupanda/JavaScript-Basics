// food item in a menu

var foodItem = {

    "itemType" : "Coffee",
    "itemName" : "Espresso",
    "cost" : 230,
    "itemQuantity" : "large",
    "isAvailable" : true,
    "quantityAvailable" : 20

}

var costOfTheItem = foodItem.cost
alert(costOfTheItem)

var nameOfTheItem = foodItem["itemName"]
alert(nameOfTheItem)


var cabRideForSwayanshu = {

    "pickupLocation" : "<some co-ordinate>",
    "dropLocation" : "<some co-ordinate>",
    "fare" : 200,
    "driverId" : 342567,
    "bookingTime" : "23-08-2019 13:57:02.23 (IST)"

}

alert(cabRideForSwayanshu.fare + 100)