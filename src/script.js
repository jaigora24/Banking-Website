function sendMoney()
{
  
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    var enterSName = document.getElementById("enterSName").value;
    var findSenderBankAccount = enterSName + "BankBalance";
    var enterSAmount =parseInt(document.getElementById(findSenderBankAccount).innerHTML);
  
    if (enterAmount > enterSAmount) {
       alert("Sorry you don't have sufficient balance to make this transaction :(")
    }
    else {
       var findUserBankAccount = enterName + "BankBalance";
      
       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
       var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
       document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
       document.getElementById(findUserBankAccount).innerHTML = finalAmount;
       alert(`Transaction Successfully Done !! Thank You For Using Our Service :)`)
 
       
       var createPTag = document.createElement("li");
       var textNode = document.createTextNode(`₹ ${enterAmount} transaction is successfully made from the sender ( ${enterSName}@gmail.com)
       to recepient (${enterName}@gmail.com) on ${Date()}.`);
       createPTag.appendChild(textNode);
       var element = document.getElementById("transaction-history-body");
       element.insertBefore(createPTag, element.firstChild);
    }
  
 }
