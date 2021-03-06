"use strict";

// let isNumber = function(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// };

let  money,  //“Доход за месяц”
  income = 'Курьер', // Дополнительный доход.
  addExpenses =  prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
  deposit = confirm("Есть ли у вас депозит в банке?"), //любое булево значение,
  mission = 50000, //любое число(Какую сумму хотите накопить)
  period = 6; //число от 1 до 12(месяцев)


  function isNumbers(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }


  function start() {
    do {
      money = +prompt("Ваш месячный доход?");
    } while (!isNumbers(money));
  }
   start();

  let showTypeOf = function (data){
		console.log(data, typeof(data));
	};
	
	showTypeOf(money);
	showTypeOf(income);
  showTypeOf(deposit);
  
  
  let items;

  console.log(addExpenses.length , addExpenses.toLowerCase() , addExpenses.split(', ') );
  console.log(mission + ' доллар, за ' + period  + ' месяцев');

  let expenses = [];

  function getExpensesMonth(){
    let sum = 0;//сумма
    
    for(let i = 0; i < 2; i++){
      let item = 0;//временная переменная для хранения введённых данных
      expenses[i] = prompt('Введите обязательную статью расходов?');
        do{
            item = parseFloat(prompt('Во сколько это обойдётся?'));
        } while (!isNumbers(item));//пока пользователь не введёт число
        sum += item;
    }
    return sum;
  }
 
  let expens = getExpensesMonth();
   console.log(expens);


  // console.log(getExpensesMonth());
  
  function getAccumulatedMonth() {
    return  money - expens;
  }
  

  let accumulatedMonth = getAccumulatedMonth();
  console.log(accumulatedMonth);

  function getTargetMonth(){
    if(accumulatedMonth > 0){
        let targetMonth = Math.ceil(mission/accumulatedMonth);
        console.log("Цель будет достигнута через " + targetMonth + " месяцев");
    } else  {
        console.log("Цель не будет достигнута");
    }
  }
  getTargetMonth();

  let budgetDay = Math.floor(accumulatedMonth / 30);
  console.log(budgetDay);


  let getStatusIncome = function () {
    if (budgetDay >= 1200) {
      return("У вас высокий уровень дохода");
    } else if (budgetDay > 600 && budgetDay < 1200) {
      return('У вас средний уровень дохода');
    } else if (budgetDay <=600 && budgetDay  > 0) {
      return('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0) {
      return('Что то пошло не так');
    }
  };
  
  console.log(getStatusIncome());