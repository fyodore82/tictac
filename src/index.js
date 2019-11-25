import './index.css'
import { OverlayOnOff } from './overlay'
import { GetPCTurn, GetWinner } from './TicTacLogic'
import Circle from './circle.svg'
import Cross from './cross.svg'

let board = []
export const player = -1
export const pc = 1
let winner = 0;

function turn(i, j, who, target) {
  const img = document.createElement('img');
  img.src = who === player ? Circle : Cross;
  img.alt = who === player ? 'Circle' : 'Cross';
  img.style.width = '100%'
  img.style.color = who === player ? 'blue' : 'red';
  target.appendChild(img);
  board[i][j] = who;
}

function onclick(ci, rj, { target }) {
  if (!board[ci][rj]) {
    turn(ci, rj, player, target)
    winner = GetWinner(board)
    if (winner)
      OverlayOnOff(true, winner)
    else {
      const [i, j] = GetPCTurn(board)
      turn(i, j, pc, document.getElementById(`${i}${j}`))
      winner = GetWinner(board)
      if (winner)
        OverlayOnOff(true, winner)
    }
  }
}

export function createGridItems() {
  const gridRoot = document.getElementById('grid-wrapper')
  while (gridRoot.firstChild)
    gridRoot.removeChild(gridRoot.firstChild)

  board = Array.apply(null, { length: 3 }).map(_ => Array.apply(null, { length: 3 }));
  board.forEach((c, ci) => c.forEach((r, rj) => {
    const element = document.createElement('div');
    element.id = `${ci}${rj}`;
    element.onclick = onclick.bind(null, ci, rj)
    gridRoot.appendChild(element)
  }))
}






createGridItems()