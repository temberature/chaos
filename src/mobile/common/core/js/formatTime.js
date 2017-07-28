define([], function() {
    return function(timeNum, tmpl) {
        //转化为数字
        var num = /^\d+$/i.test(timeNum + "") ? +timeNum : Date.parse(timeNum);
        //如果数据不能转化为日期，则直接返回不处理
        if (isNaN(num)){
            return timeNum;
        }
        //转化日期
        var D = new Date(num),
            zz = function(a) {
                return ("0" + a).slice(-2);
            },
            yyyy = D.getFullYear(),
            M = D.getMonth() + 1,
            MM = zz(M),
            d = D.getDate(),
            dd = zz(d),
            h = D.getHours(),
            hh = zz(h),
            m = D.getMinutes(),
            mm = zz(m),
            s = D.getSeconds(),
            ss = zz(s);
        return (tmpl || "yyyy-MM-dd hh:mm:ss")
            .replace(/yyyy/g, yyyy)
            .replace(/MM/g, MM).replace(/M/g, M)
            .replace(/dd/g, dd).replace(/d/g, d)
            .replace(/hh/g, hh).replace(/h/g, h)
            .replace(/mm/g, mm).replace(/m/g, m)
            .replace(/ss/g, ss).replace(/s/g, s);
    };
});
