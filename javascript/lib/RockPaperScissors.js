
/* Player class */

function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(playerPick) {
  this.pick = new Pick(playerPick)
}


/* Selection class */

function Pick(name) {
  this.name = name;
}

Pick.prototype.pairs = {
  rock: {scissors: 'crushes', lizard: 'crushes'},
  paper: {rock: 'covers', spock: 'disproves'},
  scissors: {paper: 'cut', lizard: 'decapitates'},
  lizard: {spock: 'poisons', paper: 'eats'},
  spock: {scissors: 'smashes', rock: 'vaporizes'}
}

Pick.prototype.beats = function(otherPick) {
  var action = this.pairs[this.name][otherPick.name];
  if(action) {
      return [this.name, action, otherPick.name].join(' ');
  }  
  else {
      return false;
  }
}


/* Game class */

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winner = function() {
  var p1Wins = this.player1.pick.beats(this.player2.pick);
  var p2Wins = this.player2.pick.beats(this.player1.pick);
  if(p1Wins) return p1Wins;
  if(p2Wins) return p2Wins;
  return 'Draw';
}

