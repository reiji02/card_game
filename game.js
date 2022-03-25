// div要素を格納
var cards = [];

window.onload = function(){
    // 数字格納 一時配列
    var arr = [];

    var paneplayer1_panell = document.getElementById('player1_panel');
    var paneplayer2_panell = document.getElementById('player2_panel');
    
    // div要素作成
    for (i = 0; i < 10; i++){
        var div = document.createElement('div');
        div.className = 'card back';
        div.index = i;
        div.number = arr[i];
        div.innerHTML = '';
        div.onclick = select;
        paneplayer1_panell.appendChild(div);
        cards.push(div);
    }
    for (i = 0; i < 10; i++){
        var div = document.createElement('div');
        div.className = 'card back';
        div.index = i;
        div.number = arr[i];
        div.innerHTML = '';
        div.onclick = select;
        paneplayer2_panell.appendChild(div);
        cards.push(div);
    }
}

// カードクリック時の処理
function select(){
    
}



