const debugFunc = () => {
  const name = 'Zo';
  let mood = 'happy';
  let time = 'today';
  console.log(`Hello ${name}, are you feeling ${mood} ${time}?`);
  mood = 'sad';
  console.log(`Oh no, I'm sorry you're feeling ${mood} ${time}.`);

};

debugFunc();

module.exports = {
  debugFunc,
};
