document.getElementById('question-email-btn').addEventListener('click', function(e) {
    e.preventDefault(); // ページが一番上に飛ぶのを防ぐ
    
    const email = "oshishishaojieweijingyanzigena@gmail.com"; // 送信先のアドレス
    const subject = "【質問等】配管・鍛冶工の件";
    const body = "お名前：\nお問い合わせ内容：";
    
    // ブラウザが自動で「エンコード」に変換してメールを立ち上げます
    location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById('apply-email-btn').addEventListener('click', function(e) {
    e.preventDefault(); // ページが一番上に飛ぶのを防ぐ
    
    const email = "oshishishaojieweijingyanzigena@gmail.com"; // 送信先のアドレス
    const subject = "【求人応募】配管・鍛冶工の件";
    const body = "お名前：\nお電話番号：\n希望期間：\nメッセージ：";
    
    // ブラウザが自動で「エンコード」に変換してメールを立ち上げます
    location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

function copyEmail() {
    const email = document.getElementById('email-addr').innerText;
    
    // クリップボードにコピー
    navigator.clipboard.writeText(email).then(() => {
        // コピー成功時の通知
        alert("メールアドレスをコピーしました！\nご自身のメールアプリ（Gmail等）に貼り付けて送信してください。");
    }).catch(err => {
        // 万が一失敗した場合の予備
        console.error('コピー失敗', err);
        alert("コピーに失敗しました。お手数ですが手動でコピーしてください： " + email);
    });
}