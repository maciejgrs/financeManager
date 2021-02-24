const addButton = document.querySelector(".add-transaction");
const addPanel = document.querySelector(".add-transaction-panel");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const inputName = document.querySelector("#name");
const inputAmount = document.querySelector("#amount");
const categorySelect = document.querySelector("#category");
const incomeArea = document.querySelector(".income-area");
const availableMoney = document.querySelector(".available-money");
const expenseArea = document.querySelector(".expenses-area");
const deleteAll = document.querySelector(".delete-all");
let expenseArray = [];
const moneyArray = [];
let incomeArray = [];
let newTrans;
let categoryIcon;
let newTransName;
let newAmount;
let toDelete;
const wydatki = ` <h3>Wydatki:</h3>`;
const przychod = ` <h3>Przychód:</h3>`;

let id = 0;

const funkcja = () => {
  checkLocal();

  checkCategory(categorySelect.value);

  addPanel.style.display = "none";

  buildingItem(
    categoryIcon,
    inputName.value,
    inputAmount.value,
    true,
    true,
    true
  );

  saveLocal(newTrans, inputAmount, id);
  countMoney(moneyArray, availableMoney);
};

addButton.addEventListener("click", () => {
  addPanel.style.display = "flex";
});
saveBtn.addEventListener("click", () => {
  if (
    categorySelect.value !== "none" &&
    inputName.value !== "" &&
    inputAmount.value !== ""
  ) {
    funkcja();
  } else {
    alert("Musisz wypełnić wszystkie pola");
  }
});

cancelBtn.addEventListener("click", () => {
  addPanel.style.display = "none";
});

const deleteTransaktcion = (e) => {
  const deleted = e.target.closest("div").id;
  const toDelete = document.getElementById(deleted);
  console.log(`toDelete: ${deleted}`);

  const transactionAmount = parseFloat(toDelete.childNodes[1].innerText);

  const indexOfTransaction = moneyArray.indexOf(transactionAmount);

  moneyArray.splice(indexOfTransaction, 1);
  idNumber = deleted;
  console.log(`idnumber w script to ${idNumber}`);

  deleteLocalItems(toDelete, transactionAmount, idNumber);
  if (transactionAmount > 0) {
    incomeArea.removeChild(toDelete);
  } else {
    expenseArea.removeChild(toDelete);
  }
  countMoney(moneyArray, availableMoney);
};

const countMoney = (money, available) => {
  let sum = money.reduce(function (a, b) {
    return a + b;
  }, 0);
  available.innerText = sum;
};

const checkClick = (e) => {
  if (e.target.closest("button").classList.contains("deleting")) {
    deleteTransaktcion(e);
  }
};
const checkCategory = (transaction) => {
  switch (transaction) {
    case "income":
      categoryIcon = '<i class="fas fa-money-bill-wave"></i> ';
      break;
    case "shopping":
      categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
      break;
    case "food":
      categoryIcon = '<i class="fas fa-hamburger"></i>';
      break;
    case "cinema":
      categoryIcon = '<i class="fas fa-film"></i>';
      break;
  }
};

const buildingItem = (category, inName, amount, bool, money, idE, idN) => {
  newTrans = document.createElement("div");
  newTransName = document.createElement("p");
  newAmount = document.createElement("p");
  newTransName.innerHTML = `${category} ${inName}`;

  newAmount.innerText = amount;
  newTrans.classList.add("transaction");
   

  newTrans.appendChild(newTransName);
  newTrans.appendChild(newAmount);

  if (bool) {
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleting");
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    newTrans.appendChild(deleteBtn);
  }
  if (money) {
    moneyArray.push(parseFloat(amount));
  }
  if (idE) {
    newTrans.setAttribute("id", id);
    id++;
  } else {
    newTrans.setAttribute("id", idN);
  }
};


incomeArea.addEventListener("click", checkClick);
expenseArea.addEventListener("click", checkClick);

const addDesc = document.querySelector(".add-description");
const addDescBtn = document.querySelector(".opis")
const cancelButton = document.querySelector(".canceling")
addDescBtn.addEventListener("click", () => {
  addDesc.style.display = "flex";
});
cancelButton.addEventListener("click", () => {
  addDesc.style.display = "none";
});
document.addEventListener("DOMContentLoaded", getLocalItems);
