const phrases = {
  greeting: [
    ":wave: Good evening!",
    ":wave: Howdy!",
    "Hey hey hey!",
    ":wave: What's up, crew?",
    "It's that time of evening again!",
    ":wave: Whatup peeps?",
    "Drumroll please...:drum_with_drumsticks:"
  ],
  request: [
    "Please click the button below as soon as they're done.",
    "After you're done, click the \"Done!\" button!",
    "Please be so kind as to hit that button below once everything is done :hugging_face:",
    "Live, laugh, love...but most of all, make sure that get's done or you'll have a very upset vice president!",
    "Do us a flavor and click that ol' button there when you're done!"
  ],
  no_chore: [
    ":+1: There are no chores tonight! Have fun on crew!",
    "Wow! You lucked out! No chores tonight :simple_smile:",
    "Have an awesome night! There are no chores to do."
  ]
};

const randomPhrase = type => {
  const potentialPhrases = phrases[type];
  if (type === 'request') {
    const currentMonth = (new Date()).getMonth() + 1;
    if (4 <= currentMonth && currentMonth <= 9) {
      potentialPhrases.push("After you go to the Snowman :icecream: or something, make sure that gets done! And then click the \"Done!\" button!");
    }
  }
  return potentialPhrases[Math.floor(Math.random() * potentialPhrases.length)];
};

module.exports = { randomPhrase };
