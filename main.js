nGram.unigram = nGram(1)
nGram.bigram = nGram(2)
nGram.trigram = nGram(3)

// Factory returning a function that converts a value string to n-grams.
function nGram(n) {
  if (typeof n !== 'number' || isNaN(n) || n < 1 || n === Infinity) {
    throw new Error('`' + n + '` is not a valid argument for n-gram')
  }

  return grams

  // Create n-grams from a given value.
  function grams(value) {
    var nGrams = []
    var index

    if (value === null || value === undefined) {
      return nGrams
    }

    value = value.slice ? value : String(value)
    index = value.length - n + 1

    if (index < 1) {
      return nGrams
    }

    while (index--) {
      nGrams[index] = value.slice(index, index + n)
    }

    return nGrams
  }
}


let btn = document.getElementById('btn');
let output = document.getElementById('output');

// Create an onclick event to submit the text
btn.addEventListener('click', () => {
    // get the value from input box;
    let message = document.getElementById('message').value;
    let selectOption = document.getElementById('selectOption').value;

    let messageArray;

    if (selectOption == 'unigram') {
        messageArray = nGram.unigram(message);
    }
    else if (selectOption == 'bigram') {
        messageArray = nGram.bigram(message);
    }
    else {
        messageArray = nGram.trigram(message);
    }

    messageArray && messageArray.map(item => {
        let element = `
            <div class="tagContainer">
                <span class="text">${item}</span>
            </div>
        `;

        output.innerHTML += element;
    })

})
