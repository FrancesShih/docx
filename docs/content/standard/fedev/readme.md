# 前端开发流程 & 规范

@shiyongxin 2015-9-24

## 写在前面的话

那个～ 确认已经按照新人指导配置好环境。。。

## Fork ME

> DOCX: 文档平台 "时间仓促还有点不智能。。。等我以后升级"

地址： https://github.com/FrancesShih/docx

vim nav.json 添加文件夹 & readme.md

不熟悉markdown语法的同学 建议安装 Mou 这款软件

git commit 之前。。。需要你手动执行下sh build.sh (容我后续优化。。。。表吐槽。。。。)


> WebSite：官网 "买不起私有。。。记得这都是开放的。。。密码神马的不要写。。。还有一些功能我后续优化。。。"

地址：https://github.com/FrancesShih/workspace.git

目录说明：

1.  widget－组建目录：要包含同名模版.ejs 同名样式.scss 同名脚本.js (样式 & 脚本可选)

2.  template- 模版目录：请写模版XXX.html 如需includefile 参见ejs语法

3.  assets- 资源目录：script脚本（lib 基础库），style样式，img图片 （js采用requirejs进行依赖管理 & 加载）

4.  output- 编译后生成目录

开发说明：

1. widget组建引用：`<!--widget[组建名]-->` (编译帮你处理表操心)

2. 执行gulp dev
   
   访问localhost:8888

3. 修改文件后，直接refresh页面即可，不需要每次执行gulp命令







