/* Selection class */

function Select(name) {
  this.name = name;
}

Select.prototype.pairs = {
  rock: {scissors: 'crushes', lizard: 'crushes'},
  paper: {rock: 'covers', spock: 'disproves'},
  scissors: {paper: 'cut', lizard: 'decapitates'},
  lizard: {spock: 'poisons', paper: 'eats'},
  spock: {scissors: 'smashes', rock: 'vaporizes'}
}

Select.prototype.winner = function(otherSelection) {
  var method = this.pairs[this.name][otherSelection.name];

  if(method) {
      return [this.name, method, otherSelection.name].join(' ');
  } 
  
  else {
      return false;
  }

}

/* Player class */

function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(playerSelection) {
  this.pick = new Select(playerSelection)
}


/* Game class */

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}


Game.prototype.winner = function() {
  var player1Wins = this.player1.pick.winner(this.player2.pick);
  var player2Wins = this.player2.pick.winner(this.player1.pick)

  if(player1Wins) return player1Wins;
  if(player2Wins) return player2Wins;

  return 'Draw';

}

