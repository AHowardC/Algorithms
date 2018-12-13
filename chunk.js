const letters = [
  'a',
  'b',
  'c',
  'd',
  'e'
];


function chunk(arr, size){
  const chunked = [];
  let index = 0;
  
  while(index< arr.length){
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  return console.log(chunked);
}

chunk(letters, 2);