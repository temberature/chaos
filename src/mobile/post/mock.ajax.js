require(['jquery', 'mockjax'], function($) {
	// 假数据接口 $.mockjax / Mock.mock
	$.mockjax({
		url: "/event",
		responseText: Mock.mock({
			retcode: 200
		})
	});
})
