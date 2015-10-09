#!/bin/sh

### 打包
`zip -r code.zip ./web/*`
scp code.zip www@182.92.111.197:/doc/docx
rm code.zip
ssh www@182.92.111.197 "cd /doc/docx/; mv web webbk; unzip code.zip; rm code.zip;"
echo "done"
