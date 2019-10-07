var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

it('it should add 1 + 4 to get 5', function(){
  calculator.previousTotal = 1;
  calculator.add("4");
  assert.equal(5, calculator.runningTotal)
  })

  it('it should subtract 4 from 7 to get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract("4");
    assert.equal(3, calculator.runningTotal)
  })

  it('it should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply("5");
    assert.equal(15, calculator.runningTotal)
  })

  it('it should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide("7");
    assert.equal(3, calculator.runningTotal)
  })

  it('it should concatenate multiple number button clicks', function(){
    calculator.previousTotal = 0;
    calculator.numberClick("1");
    calculator.numberClick("2");
    assert.equal(12, calculator.runningTotal)
  })

  it('it should chain multiple operations together', function(){
    calculator.previousTotal = 0;
    calculator.numberClick("2");
    calculator.operatorClick("+");
    calculator.numberClick("3");
    calculator.operatorClick("*");
    calculator.numberClick("5");
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal)
  })

  it('it should clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 5;
    calculator.numberClick("2");
    calculator.operatorClick("+");
    calculator.numberClick("3");
    calculator.operatorClick("*");
    calculator.numberClick("5");
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal)
  })
});
