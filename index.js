function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride<=400){
    return 'This one is on me!'
    //console.log("This one is on me")
  }
  else if (ride > 2000 && ride<=2500){
    return 'I will gladly take your thirty bucks.'
  }
  else {
    console.log('No can do.');
    return 'No can do.'
  }
}


function ternaryCheckCity(city){
  // Write your code here!
return (city === "NYC"?("Ok, sounds good."):("No go."));
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (true){
    case tip === "generous":
      return 'Thank you so much.';
      break
    case tip === 'not as generous':
      return "Thank you.";
      break
    default:
      return 'Bye.';
  }

}



scuberGreetingForFeet(2600) 

ternaryCheckCity('NYC')