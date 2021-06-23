const animals = ['Hen', 'elephant', 'llama', 'leopard','ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
//const secretMessage = // use .map to get the first letter of every animal name in the arrray animals
const secretMessage = animals.map(firstLetter => {
    return firstLetter[0]
  });
  console.log(secretMessage.join(''));


const bigNumbers = [100, 200, 300, 400, 500];

//Create the smallNumbers array below with map

const smallNumbers = bigNumbers.map(number => number/10);
console.log(smallNumbers);