var userObject = {
  money: 100,
  fruit: {
    apples: [0,[],[]],
    bananas: [0,[],[]],
    oranges: [0,[],[]],
    grapes: [0,[],[]]
  }
};

var venderObject = {
  apples: 4.5,
  bananas: 4.5,
  oranges: 4.5,
  grapes: 4.5
}



$(document).ready(function() {
  var time = function() {
    setTimeout(function() {
      time();
      console.log('Time!');
    }, 3000);
  };

  time();

  $('#oranges').click(function(){
    console.log('This works!');
  });
  $('.buyFruit').click(function() {

    fruitType = this.value;
    // fruitOwned = userObject.fruit[fruitType][0];
    // fruitPrice = venderObject[fruitType];
    // fruitBought = userObject.fruit[fruitType][1];
    // userMoney = userObject.money;

    if ( userObject.money < venderObject[fruitType]) {
      alert("Get a job!");
      return;
    } else {
      userObject.fruit[fruitType][0]++;
      console.log(userObject.fruit[fruitType][0]);
      userObject.fruit[fruitType][1].push(venderObject[fruitType]);
      console.log(userObject.fruit[fruitType][1]);
      userObject.money-=venderObject[fruitType];
      console.log(userObject.money);
    }
    console.log(fruitType + ' has been purchased, you now have ' + userObject.fruit[fruitType][0] +
     ' which have cost you ' + userObject.fruit[fruitType][1] + '. You now have ' + userObject.money + ' left!' );
  });

});
