//i.
function test_chain(input) {
  let stack = []

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      stack.push('(')
    } else if (input[i] === ')') {
      if (stack.length === 0) {
        return false
      }
      stack.pop()
    }
  }

  return stack.length === 0
}

const testInput1 = '()()()()()'
console.log('Test 1 de la fonction test_chain:', test_chain(testInput1))

const testInput2 = ')('
console.log('Test 2 de la fonction test_chain:', test_chain(testInput2))

//ii.
function find_wellformed_subchain(input) {
  let max_length = 0
  let counter = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      counter++
    } else if (input[i] === ')') {
      counter--
      if (counter === 0) {
        max_length = Math.max(max_length, i + 1)
      } else if (counter < 0) {
        counter = 0
      }
    }
  }

  return max_length
}

const subchainTestInput = '(()))('
console.log(
  'Taille de la plus longue sous-chaîne bien formée :',
  find_wellformed_subchain(subchainTestInput)
)
