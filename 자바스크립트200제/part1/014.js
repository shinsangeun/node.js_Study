var store = {snack: 1000, flower: 5000, beverage: 2000};

for(var item in store){
    if (!store.hasOwnProperty(item)) continue;
    console.log(item + ' 의 가격은 ' +store[item] + ' 입니다');
}