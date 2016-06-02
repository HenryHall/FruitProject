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
};

var secondsElapsed = 0;

function updateClock() {
  secondsElapsed++;
  if ( secondsElapsed % 15 === 0 && secondsElapsed !== 0) {
    updatePrices();
  }
  if (secondsElapsed === 300){
    endGame();
  }
  $('#timer').text("M: " + Math.floor((300 - secondsElapsed)/60) + " S: " + (300 - secondsElapsed)%60)
}
var endGame = function(){
  alert("The game is over, but you can't sell your fruit yet :(");
  // for(fruit in userObject) {
  //   for( var i =0; i < userObject[fruit][0]; i++){
  //     userObject.money += venderObject[fruit];
  //     console.log("selling " + userObject[fruit] + " for " + venderObject[fruit]);
  //   }
  // }
};
function updatePrices() {

  for (fruit in venderObject) {
    var priceChange = Math.floor((Math.random() * 50) + 1) / 100;
    var posNeg = Math.round(Math.random(1, 2));
    if (posNeg == 1) {
      priceChange = -priceChange;
    }

    // console.log(priceChange / 100);
    var update = venderObject[fruit] += Number(priceChange);
    venderObject[fruit] = Number(update.toFixed(2));
    console.log(venderObject[fruit]);
    }
    updateDomPrices();

}

function updateDomPrices () {
  $('#applePrice').text("Current Price: $" + venderObject.apples);
  $('#bananaPrice').text("Current Price: $" + venderObject.bananas);
  $('#orangePrice').text("Current Price: $" + venderObject.oranges);
  $('#grapePrice').text("Current Price: $" + venderObject.grapes);
}

updateDomPrices();

$(document).ready(function() {
  var time = function() {
    setTimeout(function() {
      time();
      updateClock();
      console.log('Time!');
    }, 1000);
  };

  time();

  // priceUpdate();

  $('.buyFruit').click(function() {

    fruitType = this.value;

    if ( userObject.money < venderObject[fruitType]) {
      alert("Get a job!");
      return;
    } else {
      userObject.fruit[fruitType][0]++;
      console.log(userObject.fruit[fruitType][0]);
      userObject.fruit[fruitType][1].push(venderObject[fruitType]);
      console.log(userObject.fruit[fruitType][1]);
      userObject.money-=venderObject[fruitType];

      var total = 0;
      for(var i = 0; i < userObject.fruit[fruitType][1].length; i++) {
        total += userObject.fruit[fruitType][1][i];
      }
      var fruitAvg = total / userObject.fruit[fruitType][1].length;

      $('#userMoney').text('$' + userObject.money.toFixed(2));
      $('#' + fruitType + 'Amount').text(userObject.fruit[fruitType][0]);
      $('#' + fruitType + 'Avg').text(fruitAvg.toFixed(2));
      console.log(userObject.money);
      console.log(fruitType + ' has been purchased, you now have ' + userObject.fruit[fruitType][0] +
       ' which have cost you ' + userObject.fruit[fruitType][1] + '. You now have ' + userObject.money + ' left!' );
    }

  });

  $('.sellFruit').click(function() {

    fruitType = this.value;

    if ( userObject.fruit[fruitType][0] < 1) {
      alert("You don't have any " + fruitType + " to sell!");
      return;
    } else {
      userObject.fruit[fruitType][0]--;
      console.log(userObject.fruit[fruitType][0]);
      userObject.fruit[fruitType][2].push(venderObject[fruitType]);
      console.log(userObject.fruit[fruitType][2]);
      userObject.money+=venderObject[fruitType];

      $('#userMoney').text('$' + userObject.money.toFixed(2));
      $('#' + fruitType + 'Amount').text(userObject.fruit[fruitType][0]);

      console.log(userObject.money);
      console.log(fruitType + ' has been sold, you now have ' + userObject.fruit[fruitType][0] +
       ' which have netted you ' + userObject.fruit[fruitType][2] + '. You now have ' + userObject.money + ' left!' );
    }

  });

});
