# 🟧 项目概览

[TOC]

目录索引： [内容]-[日期]
## 周末！大开发 2023/04/01

 ![登陆界面](https://pic.imgdb.cn/item/6427d301a682492fcc5d4a5f.jpg)

 ![注册界面](https://pic.imgdb.cn/item/6427d31ca682492fcc5d73fc.jpg)

 ![夜间模式切换](https://pic.imgdb.cn/item/6427d350a682492fcc5dbca4.jpg)

 ![夜间模式关闭后](https://pic.imgdb.cn/item/6427d366a682492fcc5dd921.jpg)


## marketplace的进一步实现细节-2023/3/30
 ![展览界面](https://pic.imgdb.cn/item/642540ada682492fcc0c03ce.jpg)
- 目前的基本情况：展览，市场，登录，个人页面，其他的没了，需要再说
## marketplace的实现-2023/03/29
找了一圈的模板，最后还是原来的那个最符合我的预期，需要写的内容不多，但需要仔细阅读源码才能修改以及学习，因此我打算单独写一篇博客记录改写项目的过程，以及顺便学习一下基础用法，包括项目中用到的scss。

## 商城基本框架构建-2023/03/22
- 找到了一个NFT商城的开源项目，我将使用这个项目结合像素世界的主体功能组成**希望像素**的整体框架
- 那么目前的主要框架：
    1. 像素世界的画布功能
    2. 用户系统
    3. 商城的基本功能
    4. 交易的基本功能

## 搁置了好多天-2023/03/20
- 这几天进行了一个开题答辩，老师们没有质疑过我的技术,但是只有一句话: 玩家们买这个像素画的动机是什么呢？确实，相较于r/place的无须化，我必须对我的项目加上一些限制或是前置条件吧，总不能让玩家漫无目的的乱涂乱画那样用户在画完之后就不再感兴趣了。
- 这几天沉淀了几个点子：
    1. 对画布的整体进行控制，对作画内容加以指定
    2. 画布的画幅可以依照用户增长情况逐步放大
    3. 交易的目的————将交易的收入（用户间交易的手续费）捐助给一位癌症患者，比例视情况而定
    4. 收入方面： 如果后续玩家很多，会开一个广告画布，画幅依然有限，以保证广告位的价值
    5. 设定画布的作画生命周期：
        1. 指定空白画布的大小与时间
        2. 指定这段时间主要画什么内容
        3. 指定画布的区域风格，否则很难对画布切割


## 对于数据的进一步优化-2023/03/15
各项数据：用户，画布，市场
1. 用户：
    1. 用户的基本信息
    2. 用户的像素数据
    3. 用户的资产数据
2. 画布：
    1. 画布的基本信息
    2. 画布的像素数据
3. 市场：
    1. 市场的基本信息
    2. 市场的像素数据
    3. 市场的交易数据

- 一些问题
    - 同时在画布时 画布会更新但后续进入时可能没更新
    - 原因：初始化画布的路由和ws不是同一个路由  导致ws的数据没传到前端
## 实时显示更新画布-2023/03/14
后端将数据存到文件代替数据库
定期保存
定期备份

## 整体优化-2023/03/13
1. 优化画布渲染速度
2. 优化后端接数据速度
3. 开拓redis缓存数据库功能


![从r/place中截取下来的数据](https://pic.imgdb.cn/item/640eb292f144a0100710079a.png)


## 继续编写前后端ws功能-2023/03/10
1. 前端：接收后端的数据，将数据显示在画布上。前端放置像素返返回后端（全是bug 电脑被冒烟测试了）
2. 后端：接收前端的数据，将数据存储到数据库中，将数据推送到前端

## 开始编码后端-2023/03/09
- 主要是websocket的功能
    1. 在前端写了一个wscapsule函数，用了柯里化（Currying）编程思想，用来封装websocket的功能，这个柯里化以后会专门写一篇博客
    2. 在后端写了一个websocket的服务，用来接收前端的请求（connection）
    3. 写了几个便于管理的功能（ip拉黑, 将二进制文件推送到GitHub备份）
    todo：
        将数据显示在画布上
        将数据存储到数据库中

## 对于数据的安排-2023/03/08
- 放置的像素的几个数据
    1. x，y坐标
    2. 颜色
    3. 时间戳
    4. 用户id
- 需要对两个逻辑分开存储
    1. 画布上的所有像素数据
    2. 用户个人的像素数据
- 存取数据的几个逻辑
    1. 对于公共画布的数据，需要压缩存储，以便快速渲染到画布上
    2. 公共画布上 同一个点的多次存像素，需要用新的数据覆盖旧的数据
    3. 对于个人的像素数据，需要存储所有的像素数据，以便用户可以查看自己的历史记录
    4. 可以在个人资产中独自显示自己的像素


## 画布bug解决-2023/03/07
- 画布拖动和缩放的bug(解决手机和pc端)
- 完成调色盘显示
    1. 点击显示调色盘的按钮会自动缩放到一个合适的缩放等级并显示调色盘✅
    2. 点击调色盘选择颜色时 选择器上会显示颜色✅
    3. 点击选择器上的颜色时 放置像素✅
- 要完成像素放置的几个功能
    1. 选取颜色时，selecter的颜色要改变✅
    2. 颜色的选取，点击一次就选取，再点击一次就取消选取✅
    3. 像素的放置（包括点击选择器放置，选择颜色后点击任意位置上色）✅
    4. 选取颜色时放大画布✅
    5. 放置动作的解析（对像素数据的操作：压缩数据存取）
- 至此 基本的画布功能基本齐全（可以放像素即可）

## 画布的拖动缩放功能完成-2023/03/06
- 画布的拖动缩放功能完成
- TODO 拖动有个小bug： ~~鼠标松开方向偏移~~ ~~手机端也有这个问题~~ (已解决)
- 完成调色板显示隐藏功能

## 项目架构-2023/02/28
- 准备工作
首先，需要准备好一个Vue 3项目的开发环境，并安装好必要的依赖，例如Vue CLI、axios、socket.io等。同时，还需要获取r/Place的画布数据，可以从GitHub上下载r/Place项目的数据文件，或者使用Reddit API获取数据。

- 创建画布组件
在Vue 3项目中创建一个名为"Canvas"的组件，用来展示r/Place的画布。在这个组件中，需要定义一个二维数组来存储像素块的颜色信息，并将其绑定到画布上。同时，还需要监听用户的鼠标事件，当用户点击画布时，根据鼠标的位置和用户选择的颜色，更新相应像素块的颜色信息。

- 实现用户认证
为了避免未经授权的用户篡改画布数据，需要实现用户认证功能。在Vue 3项目中，可以使用JWT令牌来管理用户的身份验证。当用户登录后，后台服务器会返回一个JWT令牌，该令牌在每个请求中被传递并验证。如果用户身份验证失败，那么用户将无法进行任何修改操作。

- 处理用户请求
用户在画布上进行像素块颜色更改时，需要向后台服务器发送请求。后台服务器需要接收这些请求，并将更改后的数据广播给所有连接的客户端。在Vue 3项目中，可以使用axios库来发送HTTP请求，并使用socket.io来实现实时通信功能。

- 实现协作系统
r/Place的一个重要特点是它是一个协作项目，许多人可以同时在同一个画布上工作。在Vue 3项目中，可以使用socket.io来实现实时通信功能，这样当一个用户修改画布数据时，其他用户就可以立即看到这些更改。

- 部署项目
最后，需要将Vue 3项目部署到一个可访问的服务器上，以便所有用户都可以访问并参与到r/Place的协作中。可以使用Heroku、AWS等云平台来进行部署。
