var I18N = {
    'numberToString': function (num) {
        return ('' + num).split('')
            .map(function (c) {
                return '0123456789' [c];
            }).join('');
    },
    'tileText': function (value) {
        var text = "           ";
        var log2 = function (n) {
            var ret = 0;
            while (n > 1) ret++, n >>= 1;
            return ret;
        }
        return text[log2(value)] || '';
    },
    'won': '有空来腾讯面试吧！',
    'lose': '继续刷小火箭吧~',
}