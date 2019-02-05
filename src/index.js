import $ from 'jquery'
//
// $(document).ready(() => {
//   // have fun!
// })

$( document ).ready(function() {
    $.ajax({
      type: 'GET',
      url: `https://wordwatch-api.herokuapp.com/api/v1/top_word`,
      success: function(result) {
        var wordData= result.word
        console.log(wordData);
        popWord(wordData);
        breakWord();
      }
    });
  });

  function popWord(wordData){
    $("#pop-word").append(
      `<h1>${Object.keys(wordData)}: ${Object.values(wordData)}</h1>`
    );
  }


  function breakWord(){
    var wordInput = document.getElementById("word-input").value
    $('word-btn').on('click', function(){
      $.ajax({
      type: "POST",
      url:`https://wordwatch-api.herokuapp.com/api/v1/words`,
      data: { word: { value: wordInput } },
      success: function(result) {
        input = result
        console.log(input);
      }
    })
  })
}
