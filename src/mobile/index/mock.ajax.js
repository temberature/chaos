require(['jquery', 'mockjax'], function($) {
	// 假数据接口 $.mockjax / Mock.mock
	$.mockjax({
		url: "/mockjax/list",
		responseText: Mock.mock({

		})
	});
})
