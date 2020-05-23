(function () {
  'use strict'

    // フォームのIDなどを取得
    const typeWindow = document.getElementById("select_type");
//    const nameWindow = document.getElementById("select_name");
//    const messageWindow = document.getElementById("select_message");
    const inputWindow = document.getElementById("select_input");
    const intro = document.getElementById("intro");
    const selectWindow = document.getElementById("select_window");
    const sukiLink1 = document.getElementById("link1");
    const sukiLink2 = document.getElementById("link2");
    const backType = document.getElementById("back_type");
    const nextType = document.getElementById("next_type");
//    const nextName = document.getElementById("next_name");
//    const backName = document.getElementById("back_name");
    const backInput = document.getElementById("back_input");
    const friends = document.getElementById("friends");
    const fun = document.getElementById("fun");
    const family = document.getElementById("family");
    const longing = document.getElementById("longing");
    const inputName = document.getElementById("input_name");
    const inputMessage = document.getElementById("input_message");
    const resetButton = document.getElementById("reset");
    const nextMessage = document.getElementById("next_message");
    const displayPreview = document.getElementById("display_preview");


    backType.onclick = () => {
        changeWindow("back_type");
    }

    nextType.onclick = () => {
        changeWindow("next_type");
        loadImage(document.getElementById("form_input").type.value + ".svg");
    }
    backInput.onclick = () => {
        changeWindow("back_input");
    }
    friends.onclick = () => {
        loadImage("card_friend.png");
    }
    fun.onclick = () => {
        loadImage("card_fun.png");
    }
    family.onclick = () => {
        loadImage("card_family.png");
    }
    longing.onclick = () => {
        loadImage("card_longing.png");
    }
    sukiLink1.onclick = () => {
        changeWindow("link1");
    }
    sukiLink2.onclick = () => {
        changeWindow("link2");
    }
//    inputName.onkeyup = () => {
//        drawText(0);
//    }
//    inputMessage.onkeyup = () => {
//        drawText(1);
//    }
    reset.onclick = () => {
        loadImage(document.getElementById("form_input").type.value + ".png");
        inputMessage.value = "";
        inputName.value = "";
    }
    nextMessage.onclick = () => {
        let cardType = document.getElementById("form_input").type.value;
        drawText(cardType);
    }
    window.onload = () =>{
        loadImage("card_friend.png");
        drawText(document.getElementById("form_input").type.value);
    }





    function changeWindow(flag){
        switch(flag){

            case "back_type":
                intro.style.display = "block";
                typeWindow.style.display = "none";
                break;

            case "next_type":
//              ココでカードのウィンドウ消す
                typeWindow.style.display = "none";
                inputWindow.style.display = "block";
                break;

            case "back_input":
                typeWindow.style.display = "block";
                inputWindow.style.display = "none";
                break;
            case "link1":
            case "link2":
                intro.style.display = "none";
                selectWindow.style.display = "block";
                inputWindow.style.display = "none";
                break;
            default:
                break;
        }
    }

    //    写真をロードする関数
    function loadImage(file){
        let image = new Image();
        image.src = "image/" + file; //動的生成するがテストのため今はこのままで。
        image.onload = (function(){
//          ロード完了してからキャンバス準備
            let canvas = document.getElementById("preview");
            let ctx = canvas.getContext('2d');
//          サイズを画像サイズに合わせる
            canvas.width = image.width;
            canvas.height = image.height;
//          キャンバスに画像を描画(開始位置0,0)
            ctx.drawImage(image, 0, 0);
        });
    }

    const canvas = document.getElementById("preview");
    const ctx = canvas.getContext('2d');
    function drawText(cardType){
        loadImage(cardType + ".svg");
        let text_name = inputName.value;
        let text_message = inputMessage.value;
//      文字スタイル指定
        ctx.font = '32px serif';
//      座標指定
        let x_name = (canvas.width / 3);
        let y_name = (canvas.height / 3);
        let x_message = (canvas.width / 2);
        let y_message = (canvas.height / 2);
        switch(cardType){
            case "card_friend":
                cardType = "が友達として";
                break;
            case "card_family":
                cardType = "が家族として";
                break;
            case "card_fun":
                cardType = "が推しとして";
                break;
            case "card_longing":
                cardType = "が憧れとして";
                break;
        }
        ctx.fillText(text_name + cardType, x_name, y_name);
        ctx.fillText(text_message, x_message, y_message);
    }
})();
