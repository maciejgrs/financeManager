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