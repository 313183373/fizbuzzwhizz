'use strict';

function fizbuzzwhizz(a, b, c, d){
  let ans=-1;
  let ab=a*b;
  let ac=a*c;
  let bc=b*c;
  let abc=a*b*c;
  let i=d;
  if(i.toString().includes(a)){
      ans="Fizz";
  }else{
      if(i%abc===0){
          ans="FizzBuzzWhizz";
      }else if(i%ab===0){
          ans="FizzBuzz";
      }else if(i%ac===0){
          ans="FizzWhizz";
      }else if(i%bc===0){
          ans="BuzzWhizz";
      }else if(i%a===0){
          ans="Fizz";
      }else if(i%b===0){
          ans="Buzz";
      }else if(i%c===0){
          ans="Whizz";
      }else{
          ans=i;
      }
  }
  return ans;
}