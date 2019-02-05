import $ from 'jquery'

$( document ).ready(function() {
    breakWord();
    $.ajax({
      type: 'GET',
      url: `https://wordwatch-api.herokuapp.com/api/v1/top_word`,
      success: function(result) {
        var wordData= result.word
        console.log(wordData);
        popWord(wordData);
      }
    });
  });

  function popWord(wordData){
    $("#pop-word").append(
      `<h1>${Object.keys(wordData)}: ${Object.values(wordData)}</h1>`
    );
  }


  function breakWord(words){
  $('#word-btn').on('click', function(){
    console.log("This click is clicking!");

    var wordInput = document.getElementById("word-input").value;
    wordInput.split(" ").forEach(function(element){
    $.ajax({
    type: "POST",
    url:`https://wordwatch-api.herokuapp.com/api/v1/words`,
    data: { 'word': { 'value': element } },
    success: function(result) {
      var input = result
      alert(element + ' added');
      console.log(input);
    }
  })
})

});
}
