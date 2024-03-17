// 变量
const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

// 清除匹配字符串
function cleanInputString(str) {
  // 全局匹配 任何加号、减号或空格字符
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

// 输入是否非法
function isInvalidInput(str) {
  // 匹配任何形式的科学计数法表示的数字
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

// 增加条目
function addEntry() {
  // 1. 定位输入容器
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  // 2. 计算填入个数：开始没有输入框为0，+1表示目前的输入框（HTML String中的第一个input）
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  // 3. 生成HTML
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />

  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  // 4. 将一个 HTML 字符串动态地插入到指定元素的末尾。
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

// 计算卡路里
function calculateCalories(e) {
  // 防止事件的默认行为发生（提交表单不刷新）
  e.preventDefault();
  isError = false;
  // NodeList
  const breakfastNumberInputs = document.querySelectorAll(
    "#breakfast input[type=number]"
  );
  const lunchNumberInputs = document.querySelectorAll(
    "#lunch input[type=number]"
  );
  const dinnerNumberInputs = document.querySelectorAll(
    "#dinner input[type=number]"
  );
  const snacksNumberInputs = document.querySelectorAll(
    "#snacks input[type=number]"
  );
  const exerciseNumberInputs = document.querySelectorAll(
    "#exercise input[type=number]"
  );
  // number
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  if (isError) {
    return;
  }
  // 计算每部分卡路里
  const consumedCalories =
    breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;

  const remainingCalories =
    budgetCalories - consumedCalories + exerciseCalories;
  // 多了还是少了
  const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
  // 生成输出结果
  output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(
    remainingCalories
  )} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;
  // 修改css样式，使结果显示
  output.classList.remove("hide");
}

// 将传入的NodeList计算为数值
function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const item of list) {
    // 当前值是否合法
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    // 合法则计入
    calories += Number(currVal);
  }
  return calories;
}

// 清除表单内容
function clearForm() {
  // 选中所有输入框
  const inputContainers = Array.from(
    document.querySelectorAll(".input-container")
  );
  // 清除输入框的所有内容
  for (const container of inputContainers) {
    container.innerHTML = "";
  }

  budgetNumberInput.value = "";
  // 修改css，让输出部分消失
  output.innerText = "";
  output.classList.add("hide");
}

// 添加监听事件 （任何地方都行）
addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener("click", clearForm);
