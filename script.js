window.onload = () => {
let inputs =document.querySelectorAll("input");
    inputs.forEach(element => {
        element.addEventListener('input', calculate);//Used input event instead of change for immediate updates when the input changes. important
    });
};

let calculate = () => {
    let loan = parseFloat(document.querySelector("#loan").value);
    let interest = parseFloat(document.querySelector("#interest").value);
    let tenure = parseFloat(document.querySelector("#tenure").value);

    if (isNaN(loan) || isNaN(interest) || isNaN(tenure)) {
        return;
    }
    let monthlyInterest = (interest / 100) / 12;
    let totalPayments = tenure * 12;

    let monthlyPayment = (loan * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    let totalAmount = monthlyPayment * totalPayments;
    let totalInterest = totalAmount - loan;

    document.querySelector("#emi").innerHTML = `EMI: ₹${monthlyPayment.toFixed(2)}`;
    document.querySelector("#ammount").innerHTML = `Total Amount: ₹${totalAmount.toFixed(2)}`;
    document.querySelector("#total").innerHTML = `Total Interest: ₹${totalInterest.toFixed(2)}`;
};