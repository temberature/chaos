require(['jquery', 'mockjax'], function($) {
	// 假数据接口 $.mockjax / Mock.mock
	$.mockjax({
		url: "/web/bookhero/event/create",
		responseText: Mock.mock({
			retcode: 200
		})
	});
})
