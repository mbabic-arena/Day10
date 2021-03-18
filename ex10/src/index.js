function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      id: 002,
      artist: "Freddie Mercury",
      title: "Bohemian Rhapsody",
      release_year: 1975,
      formats: {
        1: "LP",
        2: "CD",
        3: "8T",
      },
    },
  };
  return myMusic;
}
myFunction()[2];
module.exports = myFunction;
