var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
//Alternative system
// when you know the specific property name, use dot notation to get the property value

var penCount2 = shoppingCart['pen'];

//object propery 
var properties = Object.keys(shoppingCart);
console.log(properties);
//object values
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

// property name with value
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName,propertyValue);