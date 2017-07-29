'use strict';
describe('fizbuzzwhizz', () => {

  // write your tests here...
  it('normal a', () => {
    //GIVEN
    let a=3;
    let b=5;
    let c=7;
    let d=6;
    //WHEN
    let result=fizbuzzwhizz(a,b,c,d);
    //THEN
    expect(result).toEqual("Fizz");
  });
  it('b', () => {
    //GIVEN
    let a=3;
    let b=5;
    let c=7;
    let d=20;
    //WHEN
    let result=fizbuzzwhizz(a,b,c,d);
    //THEN
    expect(result).toEqual("Buzz");
  });
  it('c', () => {
    //GIVEN
    let a=3;
    let b=5;
    let c=14;
    let d=28;
    //WHEN
    let result=fizbuzzwhizz(a,b,c,d);
    //THEN
    expect(result).toEqual("Whizz");
  });
  it('special a is ab the same time', () => {
    //GIVEN
    let a=3;
    let b=5;
    let c=7;
    let d=30;
    //WHEN
    let result=fizbuzzwhizz(a,b,c,d);
    //THEN
    expect(result).toEqual("Fizz");
  });
  it('normal ab', () => {
    //GIVEN
    let a=3;
    let b=5;
    let c=7;
    let d=45;
    //WHEN
    let result=fizbuzzwhizz(a,b,c,d);
    //THEN
    expect(result).toEqual("FizzBuzz");
  });
  it('normal ac', () => {
    //GIVEN
    let a=3;
    let b=5;
    let c=7;
    let d=21;
    //WHEN
    let result=fizbuzzwhizz(a,b,c,d);
    //THEN
    expect(result).toEqual("FizzWhizz");
  });
  it('special a is ac the same time', () => {
    //GIVEN
    let a=3;
    let b=5;
    let c=7;
    let d=63;
    //WHEN
    let result=fizbuzzwhizz(a,b,c,d);
    //THEN
    expect(result).toEqual("Fizz");
  });
  it('normal bc', () => {
    //GIVEN
    let a=3;
    let b=5;
    let c=7;
    let d=140;
    //WHEN
    let result=fizbuzzwhizz(a,b,c,d);
    //THEN
    expect(result).toEqual("BuzzWhizz");
  });
  it('normal abc', () => {
    //GIVEN
    let a=3;
    let b=5;
    let c=7;
    let d=105;
    //WHEN
    let result=fizbuzzwhizz(a,b,c,d);
    //THEN
    expect(result).toEqual("FizzBuzzWhizz");
  });
  it('special a is abc the same time', () => {
    //GIVEN
    let a=3;
    let b=5;
    let c=7;
    let d=315;
    //WHEN
    let result=fizbuzzwhizz(a,b,c,d);
    //THEN
    expect(result).toEqual("Fizz");
  });
});
