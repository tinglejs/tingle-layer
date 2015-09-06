# tingle-layer [![npm version](https://badge.fury.io/js/tingle-layer.svg)](http://badge.fury.io/js/tingle-layer)

## Simple Usage

```javascript
<Layer/>
```


## 可用配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|onClick|optional|Tingle.noop|点击之后的响应事件|
|onHide|optional|Tingle.noop| 关闭时的响应事件|
|zIndex|optional|1001| zIndex|
|mask|optional|true| 是有遮罩层 |
|show|optional|false| 是否直接展示|

## API接口

### .loading()

加载锁，防止重复触发 `onLoadMore` 事件。

### .loaded()

加载完成时调用的函数。

### .noMore()

没有更多了。

## Links 相关链接

- [Fire a bug/Issues 提Bug](http://github.com/tinglejs/tingle-load-more/issues)