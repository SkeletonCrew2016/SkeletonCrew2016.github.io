var cost; //price per dietcoke
var quantity; //number of dietcoke
var total; //total cost

price = 65;
quantity = 2;

total = price * quantity;

var el = document.getElementById('total');
el.textContent = 'You want '+quantity+' diet coke at ' + price + ' per dietcoke for a total of $' + total;