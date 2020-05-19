(function () {
  'use strict'
  // フォームのIDなどを取得
  const form_id = document.getElementById("form1");
  form_id.onclick = () => {
    // 画面遷移
    // スキの種類を選択されたら値をgetして値を代入する。
    let button_name = document.forms.button1.value;
    location.href("URL?name=" + button_name);

  }

  //フォームの名前をget

  //メッセージをget

  // ツイート機能


})();
