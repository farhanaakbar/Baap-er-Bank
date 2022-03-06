document.getElementById('deposite-submit').addEventListener('click', function(){
    // get deposite amount

    const depoInput = document.getElementById('deposite-amount');
    const newDepoAmountText = depoInput.value;
    const newDepoAmount = parseFloat(newDepoAmountText);
    // console.log(depoAmount);

// update deposite total
    const depositTotal = document.getElementById('depo-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepoAmount;
   
    depositTotal.innerText = newDepositTotal;


    // update account balance
 const balanceTotal = document.getElementById('balance-total');
 const balanceTotalText = balanceTotal.innerText;
 const previousBalanceTotal = parseFloat(balanceTotalText);
 const newBalanceTotal = previousBalanceTotal + newDepoAmount;
 balanceTotal.innerText = newBalanceTotal;

// clear deposite input field
depoInput.value = '';
});


    

// handel withdraw event handler
document.getElementById('withdraw-submit').addEventListener('click', function(){
   const withDrawInput = document.getElementById('withdraw-amount');
   const withDrawAmountText = withDrawInput.value;
   const newWithDrawAmount = parseFloat(withDrawAmountText);
   console.log(newWithDrawAmount);

// set withdraw total

const withDrawTotal = document.getElementById('withdraw-total');
const preWithDrawText = withDrawTotal.innerText;
const preWithDrawTotal = parseFloat(preWithDrawText);

const newWithDrawTotal = preWithDrawTotal + newWithDrawAmount;
withDrawTotal.innerText = newWithDrawTotal;

// update balance
const balanceTotal = document.getElementById('balance-total');
const previousBalanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalText);
const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
balanceTotal.innerText = newBalanceTotal;

// clear deposite input field
withDrawInput.value = '';
});