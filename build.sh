## markdown 生成HTML
generate-md --layout github --input ./docs/ --output ./web

# 生成nav
node ./frame/generatenav.js

# cp frame
cp -rf ./frame/ web/

## 开启server
cd web
node server.js
cd ../
