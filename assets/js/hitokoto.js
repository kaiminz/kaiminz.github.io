// hitokoto.js

$.getJSON('https://v1.hitokoto.cn', function (data) {
    $('#hitokoto').attr({
        'href': `//hitokoto.cn?id=${data.id}`,
        'target': '_blank'
    }).append(data.hitokoto).append(
        $('<div>').addClass('detail').text(data.from)
    );
}).fail(function () {
    $('#hitokoto').attr({
        'href': 'https://www.zanmeishi.com/',
        'target': '_blank'
    }).html('<i class="lightbulb icon"></i>Nearer My God, to Thee<div class="detail">以马内利</div>');
});
