(function () {
  'use strict'
    // フォームのIDなどを取得
    const typeWindow = document.getElementById("select_type");
    const nameWindow = document.getElementById("select_name");
    const messageWindow = document.getElementById("select_message");
    const nextType = document.getElementById("next_type");
    const nextName = document.getElementById("next_name");
    const backName = document.getElementById("back_name");
    const backMessage = document.getElementById("back_message");

    nextType.onclick = () => {
        changeWindow("next_type");
    }
    nextName.onclick = () => {
        changeWindow("next_name");
    }
    backName.onclick = () => {
        changeWindow("back_name");
    }
    backMessage.onclick = () => {
        changeWindow("back_message");
    }


    function changeWindow(flag){
//        flag0ならカードのウィンドウを消す。1ならネームのウィンドウを消す。
        switch(flag){
            case "next_type":
//              ココでカードのウィンドウ消す
                typeWindow.style.display = "none";
                nameWindow.style.display = "block";
                break;
            case "next_name":
//              ネームのウィンドウを消す
                nameWindow.style.display = "none";
                messageWindow.style.display = "block";
                break;
            case "back_name":
                typeWindow.style.display = "block";
                nameWindow.style.display = "none";
                break;
            case "back_message":
                nameWindow.style.display = "block";
                messageWindow.style.display = "none";
                break;
            default:
                break;
        }
    }

})();
