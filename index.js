var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var contract = $('input[name="contract"]').val();
        var tel = $('textarea[name="tel"]').val();

        // var tool = $('input[name="tool"]').val();
        
        //var msg = `${key}\n朝礼/終礼不参加の理由：${reasons}\n返信期限：${date}\n使用ツール：${tool}`;
        var msg = `ご契約有無：${contract}`;
        var msg = `ご契約のお電話番号：${reasons}`;
        sendText(msg);

        return false;
    });
});
