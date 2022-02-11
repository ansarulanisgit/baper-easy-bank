
document.getElementById('deposit-btn').addEventListener('click', function(){
    //Get the current deposit and make it floating number
    const depositBtn = document.getElementById("deposit");
    const currentDepositText = depositBtn.innerText;
    let currentDeposit = parseFloat(currentDepositText);
    
    //Get the current balance and make it floating 
    const balanceBtn = document.getElementById("balance");
    const currentBalanceText = balanceBtn.innerText;
    let currentBalance = parseFloat(currentBalanceText);

    //Get the new deposit and make it floating number
    const newDepositBtn = document.getElementById("deposit-money");
    const newDepositText = newDepositBtn.value;
    let newDeposit = parseFloat(newDepositText);

    //Increasing the deposit and balance
    currentDeposit = currentDeposit + newDeposit;
    currentBalance = currentBalance + newDeposit;
    
    //updating new deposit and balance 
    depositBtn.innerText = currentDeposit;
    balanceBtn.innerText = currentBalance;

    //clearing the input 
    newDepositBtn.value = "";

})


document.getElementById('withdraw-btn').addEventListener('click', function(){
    //Get the current Withdrawn and make it floating number
    const withdrawBtn = document.getElementById("withdrawn");
    const currentWithdrawText = withdrawBtn.innerText;
    let currentWithdraw = parseFloat(currentWithdrawText);
    
    //Get the current balance and make it floating 
    const balanceBtn = document.getElementById("balance");
    const currentBalanceText = balanceBtn.innerText;
    let currentBalance = parseFloat(currentBalanceText);

    //Get the new withdrawn and make it floating number
    const newWithdrawBtn = document.getElementById("withdraw-money");
    const newWithdrawText = newWithdrawBtn.value;
    let newWithdraw = parseFloat(newWithdrawText);

    //Increasing the withdrawn and decreasing balance
    currentWithdraw = currentWithdraw + newWithdraw;
    currentBalance = currentBalance - newWithdraw;
    
    //updating new widthdrawn and balance 
    withdrawBtn.innerText = currentWithdraw;
    balanceBtn.innerText = currentBalance;

    //clearing withdrawn button
    newWithdrawBtn.value = "";

})

