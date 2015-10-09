# 产品解决方案规范

@shiyongxin 2015-10-08

## Prepare

参考 新人指导 搭建环境

## Git (临时)

https://github.com/FrancesShih/workspace

## 页面规范

> 页面目录：template

> 参考页面: product.ejs

> 页面命名规则：product 前缀，可用下划线连接（不可用中划线）或 全部小写

## 样式规范

> 通用引入产品样式： `<!--resstyle[/assets/style/ext/product.scss]-->`

> 布局：

  两栏，左侧通用固定，<%include inc/pro-col-l.ejs %>

  右侧内容可变，整体框架样式通用不建议调整，可针对不同产品加样式微调

## 图片存放

> 目录： assets/img/static/product/

> 命名规则： 暂无，不重名即可

> 图片尺寸：

  参考页面 - http://182.92.111.197:3000/template/product.html

## 脚本 & 通用组件

> 定位锚点

  页面下方引入： <script type="text/javascript" data-main="/assets/script/product/conf" src="/assets/script/lib/require.js"></script>

  在产品页 /assets/script/product/conf 引入的init js中自动做tab & title 索引对应，不需修改

 
