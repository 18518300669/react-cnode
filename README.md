
### 技术栈
```
"react": "^16.2.0",
"react-dom": "^16.2.0",
"react-router-dom": "^4.2.2",
"mobx": "^3.4.1",
"mobx-react": "^4.3.5",
"antd": "^3.1.6",
"axios": "^0.17.1",
"moment": "^2.20.1",
"webpack": "3.8.1",
"simplemde": "^1.11.2",
```

### 开发目录
```
.
├── LICENSE
├── README.md
├── config
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── paths.js
│   ├── polyfills.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── package-lock.json
├── package.json
├── public                       # 静态资源目录
│   ├── images
│   │   ├── 11.png
│   │   ├── 22.png
│   │   ├── 33.png
│   │   └── 44.png
│   ├── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
└── src                          # 开发目录，源码文件
    ├── App.jsx                  # views入口文件
    ├── api                      # API配置
    │   └── index.js
    ├── assets                   # 资源目录，跟public不同的是assets会被webpack处理
    │   ├── images
    │   │   ├── app-qrcode.png
    │   │   ├── github.svg
    │   │   └── not-match.gif
    │   └── scss
    │       ├── _variable.scss
    │       ├── media.scss
    │       └── style.scss
    ├── components               # 组件目录
    │   ├── footer               # 底部组件
    │   │   ├── Footer.jsx
    │   │   └── footer.scss
    │   ├── header               # 头部组件
    │   │   ├── Header.jsx
    │   │   └── header.scss
    │   ├── sidebar              # 侧边栏组件
    │   │   ├── Sidebar.jsx
    │   │   └── sidebar.scss
    │   └── topics-list          # 话题列表组件
    │       ├── TopicsList.jsx
    │       └── topicsList.scss
    ├── index.js                 # 程序主入口
    ├── registerServiceWorker.js # 这个文件的作用是缓存，下次打开会更快
    ├── router                   # 路由配置
    │   └── index.jsx
    ├── store                    # 状态管理
    │   └── index.jsx
    ├── utils                    # 封装的一些公用方法
    │   └── index.js
    └── views                    # 视图目录
        ├── 404                  # 404页
        │   ├── 404.jsx
        │   └── 404.scss
        ├── collections          # 用户话题收藏页
        │   ├── Collections.jsx
        │   └── collections.scss
        ├── index                # 首页
        │   ├── Index.jsx
        │   └── style.scss
        ├── login                # 登录页
        │   ├── Login.jsx
        │   └── login.scss
        ├── messages             # 未读消息
        │   ├── Messages.jsx
        │   └── messages.scss
        ├── release              # 发布/编辑话题
        │   ├── Release.jsx
        │   └── release.scss
        ├── topic                # 主题详情页
        │   ├── Topic.jsx
        │   └── topic.scss
        └── user                # 用户详情页/个人主页
            ├── User.jsx
            └── user.scss
```


### API清单 x 15
- [√] 主题首页
- [√] 主题详情
- [√] 新建主题
- [√] 编辑主题
- [√] 收藏主题
- [√] 取消收藏主题
- [√] 用户所收藏的主题
- [√] 新建评论
- [√] 为评论点赞
- [√] 用户详情/个人主页
- [√] 登录
- [√] 获取未读消息数
- [√] 获取已读和未读消息
- [√] 标记全部已读
- [√] 标记单个消息为已读



----

启动程序
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8888
npm start

# build for production with minification
npm run build

```


