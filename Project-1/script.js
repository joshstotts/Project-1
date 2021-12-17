
const URL ='http://api.marketstack.com/v1/eod/latest?access_key=d0a68a8ab8225bfd3318c00e6cabeb72&symbols=';



const $ticker = $('#ticker');
const $date = $('#date');
const $open = $('#open');
const $close = $('#close');
const $form = $('form');
const $input = $('input[type="text"]');

// event listeners
$('form').on('submit', handleGetData);

// functions

function handleGetData(evt) {
    evt.preventDefault();

    const userInput = $input.val();
    $input.val('');
    console.log('test');
    console.log(userInput);

    $.ajax(URL + userInput).then(function(data) {
        let stock = data.data[0];
        console.log(stock);
        render(stock);
    });
  }
  

  function render(data) {
    $ticker.text(data.symbol);
    $open.text(data.open);
    $close.text(data.close);
  }