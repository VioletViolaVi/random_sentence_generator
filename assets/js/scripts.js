document.addEventListener("DOMContentLoaded", function () {
  //   all possible words
  let randObj = {
    prep: ["A", "The", "Some", "Any"],
    adj: ["tall", "green", "tiny", "ugly", "long", "boring"],
    nouns: ["yogurt", "cat", "soil", "wheat", "hat", "tree"],
    verb: ["sat", "cut", "cried", "ate", "ran", "clapped"],
    adverb: ["quietly", "softly", "happily", "madly", "desperately", "loudly"],
  };

  //   getting the para & btn
  let randomSentencePara = document.getElementById("randomSentencePara");
  let randomSentenceBtn = document.getElementById("randomSentenceBtn");

  //   btn controls para appearance
  randomSentenceBtn.addEventListener("click", function () {
    let randPrep = Math.floor(Math.random() * randObj.prep.length);
    let randAdj = Math.floor(Math.random() * randObj.adj.length);
    let randNouns = Math.floor(Math.random() * randObj.nouns.length);
    let randVerb = Math.floor(Math.random() * randObj.verb.length);
    let randAdverb = Math.floor(Math.random() * randObj.adverb.length);

    //   randomized sentence
    randomSentencePara.innerHTML = `${randObj.prep[randPrep]} ${randObj.adj[randAdj]} ${randObj.nouns[randNouns]} ${randObj.verb[randVerb]} ${randObj.adverb[randAdverb]}.`;
  });
});
