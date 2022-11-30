
const IP = 'localhost';
const PORT = 50541;

const moves = {
  'w' : 'Move: up',
  'a' : 'Move: left',
  's' : 'Move: down',
  'd' : 'Move: right',

}

const messages = {
  'q' : "Say: Thanks for playing!",
  'z' : "Say: Good Job!"
}



module.exports = {
  IP,
  PORT,
  messages,
  moves
};