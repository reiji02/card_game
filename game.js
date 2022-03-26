const WIDTH = 947
const HEIGHT = 766
var scale = 1

function resizeWindow(){
    console.log('Resize');
    window.resizeTo(WIDTH*scale, HEIGHT*scale)
    panels = document.getElementsByClassName("panel")
    for (let i = 0; i < panels.length; i++) {
        panels[i].style.width = 620*scale+"px";
        panels[i].style.height = 340*scale+"px";
    }
    card_spaces = document.getElementsByClassName("card_space")
    for (let i = 0; i < card_spaces.length; i++) {
        card_spaces[i].style.width = 60*scale+"px";
        card_spaces[i].style.height = 80*scale+"px";
    }
    cards = document.getElementsByClassName("card")
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.width = 50*scale+"px";
        cards[i].style.height = 70*scale+"px";
    }
}

window.addEventListener('resize', resizeWindow);

// div要素を格納
var card_spaces = [];

window.onload = function(){
    // 数字格納 一時配列
    var arr = [];

    var player1_panel = document.getElementById('player1_panel');
    var player1_hand_panel = document.getElementById('player1_hand_panel');
    var player1_monster_panel = document.getElementById('player1_monster_panel');
    var player1_magic_panel = document.getElementById('player1_magic_panel');
    var player2_panel = document.getElementById('player2_panel');
    
    // div要素作成
    for (i = 0; i < 5; i++){
        var div = document.createElement('div');
        div.id = 'player1_hand_panel_card_space_'+(i+1)
        div.className = 'card_space';
        div.index = i;
        div.number = arr[i];
        div.innerHTML = '';
        div.onclick = select;
        player1_hand_panel.appendChild(div);
        card_spaces.push(div);

        var card = document.createElement('div');
        card.id = 'player1_hand_panel_card_'+(i+1)
        card.className = 'card';
        card.onclick = select;

        setCard(div, card)
    }
    for (i = 0; i < 5; i++){
        var div = document.createElement('div');
        div.id = 'card_space_'+(i+1)
        div.className = 'card_space';
        div.index = i;
        div.number = arr[i];
        div.innerHTML = '';
        div.onclick = select;
        player1_monster_panel.appendChild(div);
        card_spaces.push(div);
    }
    // for (i = 0; i < 5; i++){
    //     var div = document.createElement('div');
    //     div.className = 'card_space';
    //     div.index = i;
    //     div.number = arr[i];
    //     div.innerHTML = '';
    //     div.onclick = select;
    //     player1_magic_panel.appendChild(div);
    //     card_spaces.push(div);
    // }
    
    window.resizeTo(WIDTH*scale, HEIGHT*scale)
}

// カードクリック時の処理
function select(){
    
}

function setCard(space, card){
    space.appendChild(card);
}


