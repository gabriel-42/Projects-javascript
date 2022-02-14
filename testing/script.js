/* - a pessoa vai digitar num campo e quando apertar enter, vai acontecer isso:
 vai entregar o que ela digitou embaixo de tres formas: 
-> a palavra inversa, escrita ao contrario
-> em uppercase e lowercase
-> e em hash pode ser md5 

só que antes disso, teu programa tem q detectar se é um palindromo 
se for, nao é pra exibir nada, ao inves disso é pra exibir uma imagem qualquer 

e tem q ter botao de limpar tudo, vai limpar as coisa e vai limpar o campo */
var input = document.getElementById('name')
var hash = md5('value')
//palavra inversa
function reverseWord() {
  let word = input.value
  let reverseWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i]
  }
  showReverse.innerHTML = reverseWord
  return reverseWord
}

//if palindrome
function palindrome() {
  let reverse_str = reverseWord(input.value)
  let catImage = document.getElementById('cat-image')
  let displayImage = catImage.style.display
  if (reverse_str === input.value) {
    catImage.style.display = 'block'
  } else {
    alert('This word is not a palindrome!')
  }
}

//uppercase-lowercase
function uppercaseWord() {
  let uppercaseWord = input.value
  uppercaseWord.toUpperCase()
  showUppercase.innerHTML = uppercaseWord.toUpperCase()
}
function lowercaseWord() {
  let lowercaseWord = input.value
  lowercaseWord.toLowerCase()
  showLowercase.innerHTML = lowercaseWord.toLowerCase()
}
//hash

function copyHash() {}

//function to reset what's written inside input and Enter with keyboard
function resetInput() {
  window.location.reload()
}

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    let btn = document.getElementById('enterBtn')
    btn.click()
  }
})
//function to call all functions
function caller() {
  reverseWord()
  palindrome()
  uppercaseWord()
  lowercaseWord()
}
