//VARIABLES
const button = document.getElementById('new-quote')
const text = document.getElementById('text')
const quote = document.getElementById('quote')
const quoteSection = document.getElementsByClassName('quote-section')
const authorName = document.getElementById('name')
const colorsArr = ['#4e4f50', '#154472', '#643292', '#265828', '#9e6e07', '#a05a3f']
let quotesObj;

//API
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(data => quotesObj = data)
  .then(data => {
      let initialNumber = Math.floor(Math.random() * data.length);
      quote.innerHTML = data[initialNumber].text;
      authorName.innerHTML = data[initialNumber].author;
  })

//BUTTON FUNCTION
function refreshQuote() {
  let number = Math.floor(Math.random() * quotesObj.length);
  quote.innerHTML = quotesObj[number].text;
  authorName.innerHTML = quotesObj[number].author;
}

$('#new-quote').click(function() {
  $('.quote-section').fadeOut('slow')
  
  $('body').animate({backgroundColor: `${colorsArr[Math.floor(Math.random() * colorsArr.length)]}`}, 1800)

  $('#new-quote').attr('disabled', 'disabled')
  setTimeout(function() {
    $('#new-quote').removeAttr('disabled')
  }, 1600)

  setTimeout(refreshQuote, 1000)

  setTimeout(function() {$('.quote-section').fadeIn('slow')}, 1500)
});
