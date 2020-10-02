document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let displayCurrentPlayer = 1

    for (let i = 0, len = squares.length; i < len; i ++)

    (function( index){
    // aggiungiamo un onclick ad ogni quadrato in griglia di gioco
        squares[i].onclick = function(){           
             //se il quadrato sotto di me e' preso posso posizionare il mio gettone sopra quel quadrato(contenente l'altro gettone)
                if(squares[index + 7].classList.contains('taken')){
                    if (currentPlayer === 1) {
                        squares[index].classList.add('taken')
                        squares[index].classList.add('player-one')
                    }
                }

        }

    })
})