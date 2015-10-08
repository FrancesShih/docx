#iconfont图库
@huanglijiao create
@2015-9-29
>使用阿里巴巴的矢量图标库  
##详细介绍如下：
* 1 [矢量图上传](http://www.iconfont.cn/)
* 2 [平台功能介绍](http://www.iconfont.cn/help/platform.html)
* 3 [图标制作说明](http://www.iconfont.cn/help/iconmake.html)
* 4 [图标应用教程](http://www.iconfont.cn/help/iconuse.html)
注意事项：
*图片上传，需要微博的账户和密码，使用的是金山云的新浪微博帐号。
*该字体库兼容ie6以上，包括ie6,还有chrome,firefox等。
*在前端开发中的应用。
a)
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_1444276747_5971632.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/font_1444276747_5971632.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/font_1444276747_5971632.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/font_1444276747_5971632.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_1444276747_5971632.svg#iconfont') format('svg'); /* iOS 4.1- */
}
b)使用样式
.iconfont{font-family:"iconfont";
font-size:16px;font-style:normal;}
c)获取字体编码,应用于页面，“&#33”为自体编码，在图标管理下的图标应用项目中可查看。
<i class="iconfont">&#33</i>


