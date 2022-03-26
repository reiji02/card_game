const WIDTH = 947
const HEIGHT = 766
var scale = 1

function resizeWindow(){
    console.log('Resize');
    window.resizeTo(WIDTH*scale, HEIGHT*scale)
    panels = document.getElementsByClassName("panel")
    for (let i = 0; i < panels.length; i++) {
        panels[i].style.width = 310*scale+"px";
        panels[i].style.height = 340*scale+"px";
    }
    cards = document.getElementsByClassName("card")
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.width = 60*scale+"px";
        cards[i].style.height = 80*scale+"px";
    }
}

window.addEventListener('resize', resizeWindow);

// div要素を格納
var cards = [];

window.onload = function(){
    // 数字格納 一時配列
    var arr = [];

    var paneplayer1_panel = document.getElementById('player1_panel');
    var paneplayer2_panel = document.getElementById('player2_panel');
    
    // div要素作成
    for (i = 0; i < 10; i++){
        var div = document.createElement('div');
        div.className = 'card back';
        div.index = i;
        div.number = arr[i];
        div.innerHTML = '';
        div.onclick = select;
        paneplayer1_panel.appendChild(div);
        cards.push(div);
    }
    for (i = 0; i < 10; i++){
        var div = document.createElement('div');
        div.className = 'card back';
        div.index = i;
        div.number = arr[i];
        div.innerHTML = '';
        div.onclick = select;
        paneplayer2_panel.appendChild(div);
        cards.push(div);
    }
    
    window.resizeTo(WIDTH*scale, HEIGHT*scale)
}

// カードクリック時の処理
function select(){
    
}



