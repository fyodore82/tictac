import { player, pc } from './index'

export function GetWinner(board) {
  let winner = 0
  for (let i in board) {
    winner = checkWinner(board[i].reduce((pr, br) => pr + (br ? br : 0), 0))
    if (winner)
      return winner
    if (i == 1) {
      winner = checkWinner(board[i].reduce((pr, br, j) =>
        Math.abs(pr) < 3 ? (br === board[0][j] && br === board[2][j]) ? br * 3 : 0 : pr, 0))
      if (winner)
        return winner
    }
  }
  return checkWinner(board[0][0] === board[1][1] && board[0][0] === board[2][2] ? board[0][0] * 3 :
    board[0][2] === board[1][1] && board[0][2] === board[2][0] ? board[0][2] * 3 : 0)
}


function checkWinner(winner) {
  if (winner === 3) return pc
  if (winner === -3) return player
  return undefined
}

export function GetPCTurn(board) {
  for (let i in board)
    for (let j in board[i])
      if (!board[i][j])
        return [i, j]
}