/* ------------------------------TASK------------------------------
-> e em hash pode ser md5 
-> se palindromo, mostrar imagem aleatória
 */
var input = document.getElementById('name')
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
  if (reverse_str === input.value) {
    showPalindrome.innerHTML = 'Yes'
  } else {
    showPalindrome.innerHTML = 'No'
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
  input.value = ''
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
