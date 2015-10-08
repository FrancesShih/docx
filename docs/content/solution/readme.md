#解决方案开发规范

@huanglijiao create

@2015-10-08

> HTML文件

* 1 在workspace->template下，存放各页面的模板文件，inc下存放公用的一些模板文件。存放公用模板的目录还有widget下。解决方案页面用到的组件有topbar,topnav,slidebanner,footbar,还有anchor，用于锚点的滚动。

* 2 模板的后缀名为：.ejs, 编译执行后在output->template下生成对应的.html文件。

* 3 在模板中使用指令<%include 文件路径 %>来包含其他模板。

<div id="page-hd">

	在这里包含页面头部的模板

    <%include inc/head.ejs%>

</div> 

<div id="page-bd">

	在这里包含解决方案页面的内容主题

	页面内容需要用<div class="wrap"></div>包裹一层，将内容宽度固定1000px，且居中。

</div>

<div class="page-ft">

	在这里包含页面底部的模板

    <%include inc/foot.ejs%>

</div>

* 4 在body最后引入require.js

<script type="text/javascript" data-main="/assets/script/solution/conf" src="/assets/script/lib/require.js"></script>

> css文件

* 1 对应页面的.scss文件存放在workspace->assets->style->ext下，公用的.scss文件存放在workspace->assets->style->lib下。在widget下的各组件的.scss文件存放在对应目录下。

* 2 在解决方案页面引入公用的.scss文件,@import '../lib/skin.scss';

在公用的.scss中有共用的兼容各浏览器的函数@mixin

* 3 使用指令<!--resstyle[/assets/style/lib/reset.scss]-->来引入.scss文件。

> js文件

* 1 对应页面的js文件存放在workspace->assets->script->对应文件夹->下，用到的框架存放在workspace->assets->script->lib下。各组件的js文件，在widget目录下。

* 2 解决方案目录下包含两个文件，conf.js和init.js。

使用<script type="text/javascript" data-main="/assets/script/solution/conf" src="/assets/script/lib/require.js"></script>在页面中引入conf.js。

在conf.js中用require.config引入基础库文件，在define中引入解决方案页面用到的init.js和一些组件对应的js文件。

在init.js文件中写该页面的交互逻辑。

在widget目录下存放封装的组件，使用指令<!--widget[/helpbar]-->来包含组件。

> 图片

* 1 图片使用.png格式，在workspace->assets->img->common下存放公用的图片，在static中对应文件夹下对方该页面的图片。

* 2 icon类的使用iconfont，具体使用方法见“服务 & 平台”




