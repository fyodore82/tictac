import { player, pc, createGridItems } from './index'

export function OverlayOnOff(on, winner) {
  const overlay = document.getElementById('winner-overlay');
  overlay.style.display = on ? 'flex' : 'none'
  const caption = document.getElementById('winner-caption')
  caption.innerHTML = winner === pc ? 'You loose' : 'Congratulations! You\'re the winner'
  const playAgain = document.getElementById('play-again-button')
  playAgain.onclick = () => { 
    overlay.style.display = 'none'
    createGridItems() 
  }
}