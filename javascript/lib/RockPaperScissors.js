function Player(name) {
  this.name = name;
  // console.log("New player created")
}

Player.prototype.picks = function(pick) {
  this.pick = pick
}


function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.pairs = { 
    rock: {scissors: 'crushes', lizzard: 'crushes'},
    paper: {rock: 'covers', spock: 'disproves'},
    scissors: {paper: 'cut', lizard: 'decapitates'},
    lizard: {spock: 'poisions', paper: 'eats'},
    spock: {scissors: 'smashes', rock: 'vaporizes'}
}

Game.prototype.winner = function() {
  if(this.samePick()) {
    return null
  };
  if (this.pairs[this.player1.pick][this.player2.pick]) {
    return this.player1
  }
  else {
    return this.player2
  };
}


Game.prototype.samePick = function() {
  return this.player1.pick === this.player2.pick 
 
}