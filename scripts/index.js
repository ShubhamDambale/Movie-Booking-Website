// Store the wallet amount to your local storage with key "amount"

document.getElementById("add_to_wallet").addEventListener("click", added)

var amt = JSON.parse(localStorage.getItem("amount")) || [];





var add = document.getElementById("add_to_wallet");

var book = document.getElementById("book_movies");

var money = document.getElementById("add_money");


function added(event){
    event.preventDefault();

    var amount = document.getElementById("amount").value;

    console.log(amount)

}








