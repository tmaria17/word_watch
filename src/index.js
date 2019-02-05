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
      }
    });
  });

  function popWord(wordData){
    $("#pop-word").append(
      `<h1>${wordData.key}</h1>`
    );
  }
