const board = document.getElementById('board')

const pattern = [
    [2, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]

let color = 1

function show() {
    board.innerHTML = ''

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const div = document.createElement('div')
            div.classList.add('cell')
            div.innerText = 
                pattern[i][j] === 2 ? 'x' :
                pattern[i][j] === 1 ? 'o' : ''

            if (pattern[i][j] === 0) {
                div.addEventListener('click', move.bind(null, i, j))
            }
            board.appendChild(div)
        }
        board.appendChild(document.createElement('br'))
    }
}

function move(i, j) {
    pattern[i][j] = color
    if (check()) {
        alert(`${color === 1 ? 'o' : 'x'}赢了`)
    }
    color = 3 - color
    show()
}

function check() {
    // 纵向三个连线
    for (let i = 0; i < 3; i++) {
        let win = true
        for (let j = 0; j < 3; j++) {
            if (pattern[i][j] !== color)
                win = false
        }
        if (win) return win
    }
    // 横向三个连线
    for (let j = 0; j < 3; j++) {
        let win = true
        for (let i = 0; i < 3; i++) {
            if (pattern[i][j] !== color)
                win = false
        }
        if (win) return win
    }
    // 左上到右下连线
    {
        let win = true
        for (let i = 0; i < 3; i++) {
            if (pattern[i][i] !== color) 
                win = false
        }
        if (win) return win
    }
    // 右上到左下
    {
        let win = true
        for (let i = 0; i < 3; i++) {
            if (pattern[i][2 - i] !== color) 
                win = false
        }
        if (win) return win
    }
    return false
}

show()