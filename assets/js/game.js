var playerName = prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = 'Roborto';
var enemyHealth = 10;
var enemyAttack = 12;

var fight = function () {
  alert("Welcome to robot fighters!");
  var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  
  if (promptFight.toLowerCase() === 'fight') {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
      if (enemyHealth <= 0) {
        alert(enemyName + " has died!")
      } else {
        alert(enemyName + " still has " + enemyHealth + " health left.")
      }
  
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )
    if (playerHealth <= 0) {
      alert(playerHealth = " has died!");
    } else {
      alert(playerName = " still has " + playerHealth + " health left.")
    }
  } else if (promptFight.toLowerCase() === 'skip') {
    var confirmSkip = confirm("Are you sure you'd like to quit?")

    if (confirmSkip) {
      alert(playerName + " has chose to skip the fight!");
      playerMoney = playerMoney - 2;
    } else {
      fight()
    }
   
  } else {
    alert("you need to choose a valid option")
  }
  
}

fight();

