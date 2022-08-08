

const billInput=document.getElementById("billTotalInput") 
const tipInput=document.getElementById("tipInput") 
const numberOfPeopleDiv=document.getElementById("numberOfPeople") 
const perPersonTotalDiv=document.getElementById("perPersonTotal") 
 
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () =>{
 
  const bill = Number(billInput.value) //value gives the input given
  //console.log(bill)
  
  const tipPercentage = Number(tipInput.value)/100
  //console.log(tipPercentage)
  
  const tipAmount = bill*tipPercentage
  //console.log(tipAmount)
  const total = tipAmount+bill
  //console.log(total)
  const perPersonTotal = total / numberOfPeople

  perPersonTotalDiv.innerText=`${perPersonTotal.toFixed(2)}`//fixed to 2 decimal points

  
}
const increasePeople = () =>{
  numberOfPeople += 1
  numberOfPeopleDiv.innerText=numberOfPeople
  calculateBill()
}
const decreasePeople = () =>{
  if(numberOfPeople<=1){
    return
  }
  numberOfPeople -= 1
  numberOfPeopleDiv.innerText=numberOfPeople
  calculateBill()
}