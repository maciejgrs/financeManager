let transName;
let category;
let amount;
let localIncArr = [];
let localExpArr = [];
let idNumber 
let str;
const object = {
  transName: transName,
  amount: amount,
  category: category,
  income: true,
  idNumber: idNumber,
};
const checkLocal = () => {
  if (localStorage.getItem("localIncArr") === null) {
    localIncArr = [];
  } else {
    localIncArr = JSON.parse(localStorage.getItem("localIncArr"));
  }

  if (localStorage.getItem("localExpArr") === null) {
    localExpArr = [];
  } else {
    localExpArr = JSON.parse(localStorage.getItem("localExpArr"));
  }
};

const saveLocal = (newTrans, inputAmount, id) => {
  checkLocal();
  let x = newTrans.children[0].innerHTML;
  let y = "></i>";
  let z = x.split(">")[0];
  object.category = z + y;

  object.transName = newTrans.children[0].textContent.trim(); 
  
  object.amount = newTrans.children[1].textContent;
  object.idNumber = id-1
  console.log(`object id number to ${object.idNumber}`)

  if (inputAmount.value > 0) {
    incomeArea.appendChild(newTrans);

    localIncArr.push(object);
  
  } else {
    object.income = false;

    expenseArea.appendChild(newTrans);

    localExpArr.push(object);
 
  }
  localStorage.setItem("localIncArr", JSON.stringify(localIncArr));
  localStorage.setItem("localExpArr", JSON.stringify(localExpArr));
 
};

const getLocalItems = () => {
  checkLocal();

  creatingNewList(incomeArea, localIncArr);
  creatingNewList(expenseArea, localExpArr);
 
};
const deleteLocalItems = (toDelete, transactionAmount, idNumber) => {
  checkLocal();

  let positionOfInc;
  let positionOfExp;
  str = toDelete.children[0].textContent.trim();
  console.log(`id w local to ${idNumber}`);

  if (transactionAmount > 0) {
    positionOfInc = localIncArr.findIndex((object) => object.idNumber.toString() === idNumber.toString())
    console.log(positionOfInc)
    localIncArr.splice(positionOfInc, 1);
  } else {
    positionOfExp = localExpArr.findIndex((object) => object.idNumber.toString() === idNumber.toString())
   
    localExpArr.splice(positionOfExp, 1);
  }
  localStorage.setItem("localIncArr", JSON.stringify(localIncArr));
  localStorage.setItem("localExpArr", JSON.stringify(localExpArr));
 
};

const creatingNewList = (area, array) => {
  array.forEach((object) => {
    buildingItem(object.category, object.transName, object.amount, true, true, false, object.idNumber);
    area.appendChild(newTrans);
    countMoney(moneyArray, availableMoney);
  });
};



