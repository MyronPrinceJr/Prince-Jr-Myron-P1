function buy(name) 
{
    debugger;
    // find me the element that matches this conditions (i.e a tbody child element of another element with id='cart')
    let cart = document.querySelector('#cart tbody');
    // appends a row to the tbody element
    let newItem = cart.insertRow();

    let itemName = newItem.insertCell(0);
    itemName.innerHTML = name;

    let elementId = '#' + name.replace(' ', '');
    
    let itemPrice = newItem.insertCell(1);
    itemPrice.innerHTML = document.querySelector(elementId + ' .price').innerHTML;

    let itemQuantity = newItem.insertCell(2);
    itemQuantity.innerHTML = document.querySelector(elementId + ' td .quantity').value;

   itemQuantity = itemQuantity.innerHTML.replace('NaN', 'td .quantity');
    itemPrice = itemPrice.innerHTML.replace('$', '');

    itemPrice = parseFloat(itemPrice);
    itemQuantity = parseInt(itemQuantity);

    let itemSubtotal = newItem.insertCell(3);
    itemSubtotal.innerHTML = itemPrice*itemQuantity;

    let total = 0;
    document.querySelectorAll('#cart tbody tr').forEach(row => total=total+parseInt(row.cells[3].innerHTML));
    document.querySelector('#Total').innerHTML = total

    






    //resets the input value so the quantity of the original order doesn't "stick"
    document.querySelector(elementId + ' td .quantity').value = '';
}
function checkout()
{
    document.querySelectorAll('#cart tbody tr').forEach(row => row.remove());
    document.querySelector('#Total').innerHTML = '';
    alert("thanks for buyin")
}

var itemquantity = 0, CoconutWateramount, CoconutWatertotalamount = 0, PassionfruitJuiceamount, Passionfruittotalamount = 0, 
TamarindJuiceamount, TamarindJuicetotalamount = 0, PeanutPunchamount, PeanutPunchtotalamount = 0, FruitPunchamount, FruitPunchtotalamount = 0,
subtotal, total

function CoconutWater()
{
  var itemquantity = document.getElementById("CoconutWater");
  var CoconutWateramount = document.getElementById("CoconutWatertotal");
  CoconutWatertotalamount = itemquantity.value * 3;
  CoconutWateramount.value = CoconutWatertotalamount;
  subtotal();
}

function PassionfruitJuice()
{
  var itemquantity = document.getElementById("PassionfruitJuice");
  var PassionfruitJuiceamount = document.getElementById("PassionfruitJuicetotal");
  PassionfruitJuicetotalamount = itemquantity.value * 3;
  PassionfruitJuiceamount.value = PassionfruitJuicetotalamount;
  subtotal();
}

function TamarindJuice()
{
    var itemquantity = document.getElementById("TamarindJuice");
    var TamarindJuiceamount = document.getElementById("TamarindJuicetotal");
    TamarindJuicetotalamount = itemquantity.value * 3;
    TamarindJuiceamount.value = TamarindJuicetotalamount;
    subtotal();
  }

  function PeanutPunch()
  {
    var itemquantity = document.getElementById("PeanutPunch");
    var PeanutPunchamount = document.getElementById("PeanutPunchtotal");
    PeanutPunchtotalamount = itemquantity.value * 3;
    PeanutPunchamount.value = PeanutPunchtotalamount;
    subtotal();
  }

  function FruitPunch()
  {
    var itemquantity = document.getElementById("FruitPunch");
    var FruitPunchamount = document.getElementById("FruitPunchtotal");
    FruitPunchtotalamount = itemquantity.value * 3;
    FruitPunchamount.value = FruitPunchtotalamount;
    subtotal();
  }

function subtotal()
{
  var subtotal = document.getElementById("subtotal");
  var subtotal = CoconutWatertotalamount + PassionfruitJuicetotalamount + TamarindJuicetotalamount + PeanutPunchtotalamount + FruitPunchtotalamount;
  subtotal.value = subtotal;
}