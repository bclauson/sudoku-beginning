import Sudoku from './../src/sudoku.js';

describe('sudoku', () => {
  let reusableSudoku;

  beforeEach(() => {
    reusableSudoku = new Sudoku();
  });

  test('Should construct sudoku object', () => {
    console.log(reusableSudoku);
  })

});

