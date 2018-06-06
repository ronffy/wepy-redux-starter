# wepy-redux-starter

## How to run

clone 本项目后，在根目录执行以下命令：

#### 安装 wepy 命令行工具 (如果已安装，则跳过此步)

```
npm install wepy-cli -g
```

#### 安装依赖

``` shell
npm install

# or

cnpm install 

# or

yarn install
```

#### 开发实时编译

```
wepy build --watch
```

#### 开发者工具导入项目

使用`微信开发者工具`新建项目，本地开发选择项目根目录，会自动导入项目配置。

## 说明

### 异步globalData的处理

#### 问题

当在某个页面使用globalData上的数据，而该数据需要通过异步请求时，就会存在使用globalData上的数据时，
该数据还未请求成功的情况

#### 解决方案

使用发布/订阅模式（fbemitter包）处理异步的globalData

具体代码见 `/app.wpy` 和 `/pages/user.wpy`




