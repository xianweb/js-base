(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{63:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"date对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date对象","aria-hidden":"true"}},[t._v("#")]),t._v(" Date对象")]),a("p",[a("code",[t._v("Date")]),t._v("对象是 JavaScript 原生的时间库。它以1970年1月1日00:00:00作为时间的零点，可以表示的时间范围是前后各1亿天（单位为毫秒）。")]),a("h2",{attrs:{id:"普通函数的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通函数的用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 普通函数的用法")]),a("p",[a("code",[t._v("Date")]),t._v("对象可以作为普通函数直接调用，返回一个代表当前时间的字符串。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"')]),t._v("\n")])]),a("p",[t._v("注意，即使带有参数，"),a("code",[t._v("Date")]),t._v("作为普通函数使用时，返回的还是当前时间。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"')]),t._v("\n")])]),a("p",[t._v("上面代码说明，无论有没有参数，直接调用"),a("code",[t._v("Date")]),t._v("总是返回当前时间。")]),a("h2",{attrs:{id:"构造函数的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造函数的用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 构造函数的用法")]),a("p",[a("code",[t._v("Date")]),t._v("还可以当作构造函数使用。对它使用"),a("code",[t._v("new")]),t._v("命令，会返回一个"),a("code",[t._v("Date")]),t._v("对象的实例。如果不加参数，实例代表的就是当前时间。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" today "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[a("code",[t._v("Date")]),t._v("实例有一个独特的地方。其他对象求值的时候，都是默认调用"),a("code",[t._v(".valueOf()")]),t._v("方法，但是"),a("code",[t._v("Date")]),t._v("实例求值的时候，默认调用的是"),a("code",[t._v("toString()")]),t._v("方法。这导致对"),a("code",[t._v("Date")]),t._v("实例求值，返回的是一个字符串，代表该实例对应的时间。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" today "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntoday\n"),a("span",{attrs:{class:"token comment"}},[t._v('// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"')]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 等同于")]),t._v("\ntoday"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"')]),t._v("\n")])]),a("p",[t._v("上面代码中，"),a("code",[t._v("today")]),t._v("是"),a("code",[t._v("Date")]),t._v("的实例，直接求值等同于调用"),a("code",[t._v("toString")]),t._v("方法。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'2013-2-15'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'2013/2/15'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'02/15/2013'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'2013-FEB-15'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'FEB, 15, 2013'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'FEB 15, 2013'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Feberuary, 15, 2013'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Feberuary 15, 2013'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'15 Feb 2013'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'15, Feberuary, 2013'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Fri Feb 15 2013 00:00:00 GMT+0800 (CST)")]),t._v("\n")])]),a("p",[t._v("上面多种日期字符串的写法，返回的都是同一个时间。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2013")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2013")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2013")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2013")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)")]),t._v("\n")])]),a("p",[t._v("上面代码中，不管有几个参数，返回的都是2013年1月1日零点。")]),a("p",[t._v("最后，各个参数的取值范围如下。")]),a("ul",[a("li",[t._v("年：使用四位数年份，比如"),a("code",[t._v("2000")]),t._v("。如果写成两位数或个位数，则加上"),a("code",[t._v("1900")]),t._v("，即"),a("code",[t._v("10")]),t._v("代表1910年。如果是负数，表示公元前。")]),a("li",[t._v("月："),a("code",[t._v("0")]),t._v("表示一月，依次类推，"),a("code",[t._v("11")]),t._v("表示12月。")]),a("li",[t._v("日："),a("code",[t._v("1")]),t._v("到"),a("code",[t._v("31")]),t._v("。")]),a("li",[t._v("小时："),a("code",[t._v("0")]),t._v("到"),a("code",[t._v("23")]),t._v("。")]),a("li",[t._v("分钟："),a("code",[t._v("0")]),t._v("到"),a("code",[t._v("59")]),t._v("。")]),a("li",[t._v("秒："),a("code",[t._v("0")]),t._v("到"),a("code",[t._v("59")])]),a("li",[t._v("毫秒："),a("code",[t._v("0")]),t._v("到"),a("code",[t._v("999")]),t._v("。")])]),a("p",[t._v("注意，月份从"),a("code",[t._v("0")]),t._v("开始计算，但是，天数从"),a("code",[t._v("1")]),t._v("开始计算。另外，除了日期的默认值为"),a("code",[t._v("1")]),t._v("，小时、分钟、秒钟和毫秒的默认值都是"),a("code",[t._v("0")]),t._v("。")]),a("p",[t._v("这些参数如果超出了正常范围，会被自动折算。比如，如果月设为"),a("code",[t._v("15")]),t._v("，就折算为下一年的4月。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2013")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Tue Apr 01 2014 00:00:00 GMT+0800 (CST)")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2013")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Mon Dec 31 2012 00:00:00 GMT+0800 (CST)")]),t._v("\n")])]),a("p",[t._v("上面代码的第二个例子，日期设为"),a("code",[t._v("0")]),t._v("，就代表上个月的最后一天。")]),a("p",[t._v("参数还可以使用负数，表示扣去的时间。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2013")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Sat Dec 01 2012 00:00:00 GMT+0800 (CST)")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2013")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Sun Dec 30 2012 00:00:00 GMT+0800 (CST)")]),t._v("\n")])]),a("p",[t._v("上面代码中，分别对月和日使用了负数，表示从基准日扣去相应的时间。")]),a("h2",{attrs:{id:"静态方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 静态方法")]),a("h3",{attrs:{id:"date-now"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-now","aria-hidden":"true"}},[t._v("#")]),t._v(" Date.now()")]),a("p",[a("code",[t._v("Date.now")]),t._v("方法返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数，相当于 Unix 时间戳乘以1000。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Date"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("now")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 1364026285194")]),t._v("\n")])]),a("h2",{attrs:{id:"实例方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例方法")]),a("p",[a("code",[t._v("Date")]),t._v("的实例对象，有几十个自己的方法，除了"),a("code",[t._v("valueOf")]),t._v("和"),a("code",[t._v("toString")]),t._v("，可以分为以下三类。")]),a("ul",[a("li",[a("code",[t._v("to")]),t._v("类：从"),a("code",[t._v("Date")]),t._v("对象返回一个字符串，表示指定的时间。")]),a("li",[a("code",[t._v("get")]),t._v("类：获取"),a("code",[t._v("Date")]),t._v("对象的日期和时间。")]),a("li",[a("code",[t._v("set")]),t._v("类：设置"),a("code",[t._v("Date")]),t._v("对象的日期和时间。")])]),a("h3",{attrs:{id:"date-prototype-valueof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-prototype-valueof","aria-hidden":"true"}},[t._v("#")]),t._v(" Date.prototype.valueOf()")]),a("p",[a("code",[t._v("valueOf")]),t._v("方法返回实例对象距离时间零点（1970年1月1日00:00:00 UTC）对应的毫秒数，该方法等同于"),a("code",[t._v("getTime")]),t._v("方法。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nd"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 1362790014817")]),t._v("\nd"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getTime")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 1362790014817")]),t._v("\n")])]),a("p",[t._v("预期为数值的场合，"),a("code",[t._v("Date")]),t._v("实例会自动调用该方法，所以可以用下面的方法计算时间的间隔。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" start "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" end "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elapsed "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" end "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("h3",{attrs:{id:"to-类方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-类方法","aria-hidden":"true"}},[t._v("#")]),t._v(" to 类方法")]),a("p",[a("strong",[t._v("（1）Date.prototype.toString()")])]),a("p",[a("code",[t._v("toString")]),t._v("方法返回一个完整的日期字符串。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2013")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nd"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('// "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"')]),t._v("\nd\n"),a("span",{attrs:{class:"token comment"}},[t._v('// "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"')]),t._v("\n")])]),a("p",[t._v("因为"),a("code",[t._v("toString")]),t._v("是默认的调用方法，所以如果直接读取"),a("code",[t._v("Date")]),t._v("实例，就相当于调用这个方法。")]),a("h3",{attrs:{id:"get-类方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-类方法","aria-hidden":"true"}},[t._v("#")]),t._v(" get 类方法")]),a("p",[a("code",[t._v("Date")]),t._v("对象提供了一系列"),a("code",[t._v("get*")]),t._v("方法，用来获取实例对象某个方面的值。")]),a("ul",[a("li",[a("code",[t._v("getTime()")]),t._v("：返回实例距离1970年1月1日00:00:00的毫秒数，等同于"),a("code",[t._v("valueOf")]),t._v("方法。")]),a("li",[a("code",[t._v("getDate()")]),t._v("：返回实例对象对应每个月的几号（从1开始）。")]),a("li",[a("code",[t._v("getDay()")]),t._v("：返回星期几，星期日为0，星期一为1，以此类推。")]),a("li",[a("code",[t._v("getYear()")]),t._v("：返回距离1900的年数。")]),a("li",[a("code",[t._v("getFullYear()")]),t._v("：返回四位的年份。")]),a("li",[a("code",[t._v("getMonth()")]),t._v("：返回月份（0表示1月，11表示12月）。")]),a("li",[a("code",[t._v("getHours()")]),t._v("：返回小时（0-23）。")]),a("li",[a("code",[t._v("getMilliseconds()")]),t._v("：返回毫秒（0-999）。")]),a("li",[a("code",[t._v("getMinutes()")]),t._v("：返回分钟（0-59）。")]),a("li",[a("code",[t._v("getSeconds()")]),t._v("：返回秒（0-59）。")]),a("li",[a("code",[t._v("getTimezoneOffset()")]),t._v("：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。")])]),a("p",[t._v("所有这些"),a("code",[t._v("get*")]),t._v("方法返回的都是整数，不同方法返回值的范围不一样。")]),a("ul",[a("li",[t._v("分钟和秒：0 到 59")]),a("li",[t._v("小时：0 到 23")]),a("li",[t._v("星期：0（星期天）到 6（星期六）")]),a("li",[t._v("日期：1 到 31")]),a("li",[t._v("月份：0（一月）到 11（十二月）")]),a("li",[t._v("年份：距离1900年的年数")])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'January 6, 2013'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nd"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getDate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 6")]),t._v("\nd"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getMonth")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nd"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getYear")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 113")]),t._v("\nd"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getFullYear")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 2013")]),t._v("\nd"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getTimezoneOffset")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// -480")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);