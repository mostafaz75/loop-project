
function sum(array){
  let num = 0
  for (let i = 0;i<array.length;i++){
    
    if (typeof(array[i])=== 'string'){

      console.log(array[i]+ ' ');
    }
    if(typeof(array[i])=== 'number'){

      num += array[i];
      
    }
  }
   console.log(num);
}
sum([10,5,"ali",90,9,8,'momo',5,56,23,1]);

  function avg(array) {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
          sum += array[i];
      }
      return sum / array.length
      
  }
  console.log(avg([10,5]))


  function min(array) {

    console.log( Math.min(...array));
  }
  min([10,5])
  function max(array) {

    console.log( Math.max(...array));
  }
  max([10,5])

  