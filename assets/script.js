// name
let yourName = "Laurie Kreger"

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

const credit = document.querySelector('#credit')

// gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinsBtn = document.querySelector('#minus-gb')
const gbQty = document.querySelector('#qty-gb')

//cc
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinsBtn = document.querySelector('#minus-cc')
const ccQty = document.querySelector('#qty-cc')

// ss
const scPlusBtn = document.querySelector('#add-sugar')
const scMinsBtn = document.querySelector('#minus-sugar')
const scQty = document.querySelector('#qty-sugar')

// total
const allTnt = document.querySelector('#qty-total')


// Code to update name display
credit.textContent = `Created by ${yourName}`

// gb
gbPlusBtn.addEventListener('click', function() {
    gbQty.textContent -=-1
    allTnt.textContent -=-1
})

gbMinsBtn.addEventListener('click', function() {
    gbQty.textContent -=1
    allTnt.textContent -=1
})

// cc
ccPlusBtn.addEventListener('click', function() {
    ccQty.textContent -=-1
    allTnt.textContent -=-1
})

ccMinsBtn.addEventListener('click', function() {
    ccQty.textContent -=1
    allTnt.textContent -=1
})

// sugar
scPlusBtn.addEventListener('click', function() {
    scQty.textContent -=-1
    allTnt.textContent -=-1
})

scMinsBtn.addEventListener('click', function() {
    scQty.textContent -=1
    allTnt.textContent -=1
})