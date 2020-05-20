(function(){
    'use strict'
    window.onload = function() {
        loadImage('preview');
        loadQuery();
    }

//    クエリを読み込む関数
    function loadQuery(){
        let query = decodeURI(window.location.search);
        console.log(query);
//        let queryList = decodeURI(query).slice(1).split("&");
//        console.log(queryList);
        let queryList = [...new URLSearchParams(query).entries()].reduce((obj, e) => ({...obj, [e[0]]: e[1]}), {});
        console.log(queryList);
    }

//    写真をロードする関数
    function loadImage(id){
        let image = new Image();
        image.src = 'image/card_family.png'; //動的生成するがテストのため今はこのままで。
        image.onload = (function(){

//          ロード完了してからキャンバス準備
            let canvas = document.getElementById(id);
            let ctx = canvas.getContext('2d');
//          サイズを画像サイズに合わせる
            canvas.width = image.width;
            canvas.height = image.height;
//          キャンバスに画像を描画(開始位置0,0)
            ctx.drawImage(image, 0, 0);
        });
    }
    function drawText(canvas_id, text_id){
        let canvas = document.getElementById(canvas_id);
        let ctx = canvas.getContext('2d');
        let text = document.getElementById(text_id);
//      文字スタイル指定

//      座標指定
        let x = (canvas.width / 2);
        let y = (canvas.height / 2);
        ctx.fillText(text.value, x, y)
    }




})();