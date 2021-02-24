const detailCategory = document.querySelector("#category-detail");
const detailArea = document.querySelector(".listOfDetails");
const sumMoney = document.querySelector(".sum");

let filteredCat = [];
let filteredMoney = [];
let detailedMoneyArr = [];
let detail

detailCategory.addEventListener("change", (e) => {
  checkDetails(e);
});

function filtering(array, cat) {
  filteredCat = array.filter((object) => {
    if (object.category === cat) {
      return filteredCat;
    }
  });
}

const buildFiltered = () => {
  detailArea.innerHTML = "";
  filteredCat.forEach((object) => {
    buildingItem(
      object.category,
      object.transName,
      object.amount,
      false,
      false
    );
    detailArea.appendChild(newTrans);
    filteredMoney.push(parseFloat(object.amount));
  });
};


const checkDetails = (detail) => {
   detail = detailCategory.value;

  switch (detail) {
    case "income":
      filtering(localIncArr, `<i class="fas fa-money-bill-wave"></i>`);
      filteredMoney = [];
      buildFiltered();
      countMoney(filteredMoney, sumMoney);
      break;
    case "shopping":
      filtering(localExpArr, `<i class="fas fa-cart-arrow-down"></i>`);
      filteredMoney = [];
      buildFiltered();
      countMoney(filteredMoney, sumMoney);
      break;
    case "food":
      filtering(localExpArr, `<i class="fas fa-hamburger"></i>`);
      filteredMoney = [];
      buildFiltered();
      countMoney(filteredMoney, sumMoney);
      break;
    case "cinema":
      filtering(localExpArr, `<i class="fas fa-film"></i>`);
      filteredMoney = [];
      buildFiltered();
      countMoney(filteredMoney, sumMoney);
      break;
  }
};
