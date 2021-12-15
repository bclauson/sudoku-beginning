import Sudoku from './../src/sudoku.js';

describe('sudoku', () => {
  let reusableSudoku;

  beforeEach(() => {
    reusableSudoku = new Sudoku();
  });

  test('Should construct sudoku object', () => {
    console.log(reusableSudoku);
  })

  test('Should see if checkRow returns true and false', () => {
    let checkTest = reusableSudoku.checkRow(reusableSudoku.board[0],1);
    expect(checkTest).toEqual(true);
  });

});

