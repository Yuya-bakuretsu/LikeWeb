(function(){
    'use strict'
    window.onload = function() {
        loadQuery();
        loadImage('preview');
    }
    let queryList;
//    クエリを読み込む関数
    function loadQuery(){
        let query = decodeURI(window.location.search);
//        console.log(query);
//        let queryList = decodeURI(query).slice(1).split("&");
//        console.log(queryList);
        queryList = [...new URLSearchParams(query).entries()].reduce((obj, e) => ({...obj, [e[0]]: e[1]}), {});
    }

//    写真をロードする関数
    function loadImage(id){
        let image = new Image();
        image.src = "img/" + queryList.type + ".svg"; //動的生成するがテストのため今はこのままで。
        image.onload = (function(){
//          ロード完了してからキャンバス準備
            let canvas = document.getElementById(id);
            let ctx = canvas.getContext('2d');
//          サイズを画像サイズに合わせる
            canvas.width = image.width;
            canvas.height = image.height;
//          キャンバスに画像を描画(開始位置0,0)
            ctx.drawImage(image, 0, 0);
            drawText();
        });
    }
    const canvas = document.getElementById("preview");
    const ctx = canvas.getContext('2d');
    function drawText(){
        let text_name = queryList.target;
        let text_message = queryList.message;
//      文字スタイル指定
        ctx.font = '32px serif';
//      座標指定
        let x_name = (canvas.width / 1.5);
        let y_name = (canvas.height / 3);
        let x_message = (canvas.width / 1.6);
        let y_message = (canvas.height / 1.35);
        let cardType = "が友達として";
        switch(queryList.type){
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
//
//        const tweetDivided = document.getElementById("tweet-area");
//        const anchor = document.createElement('a');
//        const hrefValue =　'https://twitter.com/intent/tweet?button_hashtag=suki&ref_src=twsrc%5Etfw';
//        const link = canvas.toDataURL("image/png");
//        anchor.setAttribute('href', hrefValue);
//        anchor.className = 'twitter-hashtag-button';
//        anchor.setAttribute('data-text', link);
//        anchor.innerText = 'Tweet #suki';
//        tweetDivided.appendChild(anchor);
//
//        const script = document.createElement('script');
//        script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
//        tweetDivided.appendChild(script);
     }
     document.getElementById("download").onclick = (event) => {
         let link = document.createElement("a");
         link.href = canvas.toDataURL("image/png");
         link.download = "test.png";
         link.click();
     }
})();