# windows下php环境搭建

@huanglijiao create

@2015-10-19

> 1 下载xampp并安装。

> 2 更新代码后，再修改文件/data/phpconf.js， 如下：

var conf = {
    port: 8889,
    router: "data/root.php",
    bin: 'C:/xampp/php/php.exe',
	ini: 'C:/xampp/php/php.ini'
} 

上述需要根据xampp的安装路径来修改bin和ini，分别是在目录/xampp/php/下的php.exe和php.ini。

> 3 修改文件/xampp/php/php.ini 

auto_prepend_file= D:/workspacenew/ksc-website/data/view.php

将auto_prepend_file修改为工程下data下view.php的路径。

> 4 更新package.json后，执行npm intall 安装php的相关插件。

> 5 完成上述配置，执行命令gulp start:php,使用8889端口号访问，可查看是否成功。







