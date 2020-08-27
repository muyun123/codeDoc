# 如何在GitHub找项目

一个开源项目有哪些组成部分：

- name: 项目名
- description: 项目的简要描述
- 项目的源码
- README.md: 项目的详细情况的介绍

那么除了这些要素之外，项目本身的star数和fork数，也是评判一个开源项目是否火热的标准，这同时也是一个很重要的搜索标准。另外我们也要注意观察这个项目的最近更新日期，因为项目越活跃，那么它的更新日期也更加频繁。

## 按照 name 搜索

搜索项目名里面包含React的项目:
>in:name React

再精确到项目的star数大于5000+：
>in:name React stars:>5000

按照fork的数量来进行搜索:
>in:name React stars:>5000 forks:>3000

##按照README来搜索

搜索README.md里面包含React的项目:
>in:readme React

限制一下它的star数和fork数：
>in:readme React stars:>3000 forks:>3000

##按照descriptin搜索

假设我们现在要学习微服务的项目，我们搜索项目描述(description)里面包含微服务的项目:
>in:description 微服务

增加一些筛选条件:
>in:description 微服务 language:python

找到最近才更新的项目，意思是更新时间就在最近，我们可以这样：
>in:description 微服务 language:python pushed:>2020-01-01