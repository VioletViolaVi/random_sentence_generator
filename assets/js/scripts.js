document.addEventListener("DOMContentLoaded", function () {
  //   all possible words
  let prep = ["A", "The", "Some", "Any"];
  let adj = ["tall", "green", "tiny", "ugly", "long", "boring"];
  let nouns = ["yogurt", "cat", "soil", "wheat", "hat", "tree"];
  let verb = ["sat", "cut", "cried", "ate", "ran", "clapped"];
  let adverb = [
    "quietly",
    "softly",
    "happily",
    "madly",
    "desperately",
    "loudly",
  ];

  //   getting the para & btn
  let randomSentencePara = document.getElementById("randomSentencePara");
  let randomSentenceBtn = document.getElementById("randomSentenceBtn");

  //   btn controls para appearance
  randomSentenceBtn.addEventListener("click", function () {
    let randPrep = Math.floor(Math.random() * prep.length);
    let randAdj = Math.floor(Math.random() * adj.length);
    let randNouns = Math.floor(Math.random() * nouns.length);
    let randVerb = Math.floor(Math.random() * verb.length);
    let randAdverb = Math.floor(Math.random() * adverb.length);

    //   randomized sentence
    randomSentencePara.innerHTML = `${prep[randPrep]} ${adj[randAdj]} ${nouns[randNouns]} ${verb[randVerb]} ${adverb[randAdverb]}.`;
  });
});
