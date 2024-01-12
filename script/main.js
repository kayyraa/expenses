document.addEventListener("DOMContentLoaded", function() {
    const new_expense_button = document.getElementById("new_expense");
    const del_expense_button = document.getElementById("del_expense")

    const total = document.getElementById("total");
    const currency = document.getElementById("currency");
    const body = document.body;

    let PosY = 10;
    let expense_count = 0;
    let expenses = [];

    del_expense_button.addEventListener("click", function() {
        expenses.pop();
        const expense = document.getElementById(`expense${expense_count}`);
        if (expense_count !== 0) {
            expense_count -= 1;
        }
        if (PosY !== 10) {
            PosY -= 34;
        }
        expense.remove();
    })

    new_expense_button.addEventListener("click", function() {
        expense_count += 1;

        let new_expense = document.createElement("input");
        new_expense.type = "number";
        new_expense.style.position = "fixed";
        new_expense.style.fontFamily = "Consolas";
        new_expense.style.borderRadius = "16px";
        new_expense.style.fontSize = "26px";
        new_expense.style.display = "block";
        new_expense.style.top = PosY + "px";
        new_expense.style.left = "410px";
        new_expense.style.width = "710px";
        new_expense.style.border = "none";
        new_expense.style.color = "white";
        new_expense.style.backgroundColor = "rgb(50, 50, 50)";
        new_expense.style.textAlign = "center";
        new_expense.value = 1;
        new_expense.id = "expense" + expense_count;

        body.appendChild(new_expense);
        expenses.push(new_expense);
        PosY += 34;
    })

    function refresh() {
        let totalExpense = expenses.reduce(function (sum, expense) {
            return sum + parseFloat(expense.value) || 0;
        }, 0);

        total.innerHTML = "Total: " + totalExpense.toFixed(2) + currency.value;

        setTimeout(() => {
            refresh();
        }, 50);
    }

    refresh();
})