//Function to make getting id's easier
const getId = id => {
  let constant = document.getElementById(id)
  return(constant)
}

//Function to make getting classes easier
const getClass = className => {
  let constants = document.getElementsByClassName(className)
  return(constants)
}

//Allows calculator to listen to and append items
const ael = element => {
  var eq = getId('equation')
  element.addEventListener('click', () => {
  eq.value += (element.textContent)

  })
}

//Color changing function
const colorChange = number => buttons[number].style.backgroundColor = scheme[scheme.indexOf(buttons[number].style.backgroundColor) +1]

//Function to evaluate equations
const evaluate = () => {
  if (eq.value.includes('²√')) {
    answer = Math.sqrt(eq.value.replace('²√',''))

  } else if (eq.value.includes('³√')) {
    answer = Math.cbrt(eq.value.replace('³√',''))

  } else if (eq.value.includes('^')) {
    exp2 = eval(eq.value.substr((explen.length), (eq.value.length - 1)));
    answer = Math.pow(exponent, exp2)

  } else if (eq.value.includes('!')) {
    let i =0
    answer = 1

    while(i < eval(eq.value.charAt(0))) {
      i += 1
      answer *= i
    }
  } else {
    answer = eval(eq.value)
  }

  ans.push(answer)
  return(answer)

}

// Selects all buttons
const buttons = document.querySelectorAll('button')

// Numbers and Operators
const nums = getClass('num');
const ops = getClass('op');
const other = getClass('other2')

//Other items on calculator
const equals = getId('equals')
const clears = getId('clears')
const deletes = getId('del')
const ansButton = getId('ans')
const sqrt = getId('sqrt')
const cbrt = getId('cbrt')
const excl = getId('excl')
const round = getId('round')
const exp = getId('exp')
const changeColor = getId('changecolor')
const eq = getId('equation')

//Other items to be used later in program
let ans = [];
let scheme = ['darkorange', 'yellow', 'green', 'blue', 'darkblue', 'purple', 'red', 'darkorange'];
let answer;
let exponent;
let exp2;
let explen;

//Uses 'ael' function to work on numbers
for (let i=0; i < nums.length; i +=1) {
  ael(nums[i])
}

//Uses 'ael' function to work on operators
for (let i=0; i < ops.length; i +=1) {
  ael(ops[i])
  ops[i].style.backgroundColor = scheme[0]
}

//Adds event listeners to all other buttons
ael(sqrt)
ael(cbrt)
ael(exp)
ael(excl)

// Specifies background color so it can be changed later on
for (let i =0; i < other.length; i += 1) {
  other[i].style.backgroundColor = scheme[0]
}

//Event listeners for evaluation buttons

deletes.addEventListener('click', () => { eq.value = eq.value.slice(0, -1) })

clears.addEventListener('click', () => { eq.value = eq.value.slice(0, -eq.value.length) })

ansButton.addEventListener('click', () => { eq.value += ans[ans.length-1] })

equals.addEventListener('click', () => { eq.value += ' = ' + evaluate() })

round.addEventListener('click', () => { eq.value += ' ≈ ' + Math.round(evaluate()) })

exp.addEventListener('click', () => {
  exponent = eval(eq.value.slice(0, eq.value.length -1));
  explen = (eq.value.slice(0, (eq.value.length - (exponent.toString())).length))

})

changeColor.addEventListener('click', () => {

  colorChange(22)
  colorChange(25)
  colorChange(26)

  for(let i = 3; i < 24; i += 4) {
    colorChange(i)
  }
})
