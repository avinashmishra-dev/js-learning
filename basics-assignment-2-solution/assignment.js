const task2Element = document.getElementById('task-2');

function greet() {
  alert('Hi there!');
}

function greetUser(userName) {
  alert('Hi ' + userName);
}

function combine(a, b, c) {
  const combinedText = `${a} ${b} ${c}`;
  return combinedText;
}

greetUser('Max');

task2Element.addEventListener('click', greet);

const combinedString = combine('Hi', 'myself', 'avinash');
alert(combinedString);