// 项目Core的入口模块
define(['./js/core'], function(Core) {
    return Core;
});
// 这里是全站公共初始化逻辑，需要立即执行
require(['./js/core'], function() {});

