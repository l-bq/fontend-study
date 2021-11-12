# HTML第二天

## 复习

1 B/S

2 http

浏览器控制台：

浏览器：ie， chrome， ff， safari， opera

纯文本，

html： 超文本标记语言

编辑器：sublime， vs codehtml

## 一、HTML骨架

### 1.1 DTD

DocType Definition：文档类型定义（DTD），用来定义文档的规范。可以内部声明也可以外部声

明。

- 内部声明：<!DOCTYPE 根元素 [元素声明]>		
    - 例如：<!DOCTYPE html>
- 外部声明：<!DOCTYPE 根元素 类型 文件名>		
    - 例如：<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

作用：规定了html使用的是哪个版本的html书写规范。

html、css、js规范维护更新的组织W3C组织。

​	网址：http://www.w3.org/

​	中文学习网址：http://www.w3school.com.cn/

### 1.2 DTD版本

html4.01版本，结构和样式做了分离。

Xhtml1.0版本，规范做了拓展升级。

​	代码必须用小写字母，属性必须用双引号包裹，结束标签必须写关闭符号/等等。

html4.01 和 Xhtml1.0这两个规范分别包含了3个小规范：

- ​	Strict  		严格版：不能使用font/b/u/i等废弃标签，不能使用框架集（Framesets）。
- ​	Transitional	过渡版（通用版）：可以使用font等废弃标签，不能使用框架集（Framesets）
- ​	Frameset	框架集版：可以使用框架集

严格程度：XHTML1.0 Strict  >  HTML4.01 Strict  >  XHTML1.0 transitionl  > HTML4.01  transitionl

html5 不基于 SGML规范，不再区分3个小规范，所以不需要引用 DTD。<!DOCTYPE html>

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<title>Document</title>
</head>
<body>
	
</body>
</html>
```

### 1.3 html标签

html标签是双标签，表示我们的整个网页。

html标签有两个属性。

​	manifest		定义一个 URL，在这个 URL 上描述了文档的缓存信息（html5 新增）。

​	xmlns		HTML 不支持。只有 XHTML 支持。 规定 XML 的 namespace 属性

​		如：http://www.w3.org/1999/xhtml

​	注意：在html5 规范中，html标签上的lang属性是全局属性。

xmlns表示命名空间：namespace

因为我们制作的网页给不同的用户来浏览，命名空间规定我们的标签代表的含义，必须将命名空间进

行统一。

### 1.4 元素，标签与属性

**元素**：网页实际上就是由许许多多各种各样的HTML元素构成的文本文件，所以说，HTML元素就是构

成HTML文件的基本对象，HTML元素是一个统称。HTML元素就是通过使用HTML标签进行定义的。

**标签**：标签就是<head>、<body>、<title>等被尖括号“<”和“>”包起来的对象，绝大部分的标签都

是成对出现的，如<title></title>、<body></body>。当然还有少部版分不是成对出现的，如

```<br >、<img>```等。

标签就是用来标记HTML元素的。位于起始标签和结束标签之间的文本就是HTML元素的内容。

​	注意：元素是实体，标签是名称（标记），后面的课程中，不再强调区分标签和元素。

**属性**：为HTML元素提供各种附加信息的就是HTML属性，它总是以"属性名=属性值"这种名值对的形

式出现，而且属性总是在HTML元素的开始标签中进行定义。

### 1.5 注释

注释：就是一段用来解释说明的文档，渲染页面的时候会被浏览器忽略，而不会显示在页面中。

​	语法：<!-- 描述的内容 -->

​		快捷键： ctrl + /

​	注：在开始标签中有一个惊叹号，但是结束标签中没有。

浏览器不会显示注释，但是能够说明的 HTML 文档。可以利用注释在 HTML 中定义通知和提醒信

息。

### 1.6 head 标签

```<head>``` 标签用于定义文档的头部，它是所有头部元素的容器。<head> 中的元素可以引用脚本、指

示浏览器在哪里找到样式表、提供元信息等等。文档的头部描述了文档的各种属性和信息，包括文档

的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为

内容显示给读者。

下面这些标签可用在 head 部分：<base>, <link>, <meta>, <script>, <style>, 以及 

```<title>```。	

​	**base** 标签为页面上的所有链接规定默认地址或默认目标。

​			href：规定页面中所有相对链接的基准 URL。

​			target：在何处打开页面中所有的链接（_blank，_parent，_self，_top，framename）

​	**title** 标签内部放的是网页的名字。

​			里面的内容可以帮我们提高搜索引擎优化（SEO）。

​	**link**			定义文档与外部资源的关系。如：引入外部样式，shortcut icon

​	**style**		  定义内嵌样式

​	**script**		引入外部脚本，或定义内嵌脚本等

​	**meta**		 提供页面相关的元信息（meta-information），标签位于文档的头部，不包含任何内容

​		content		定义与 http-equiv 或 name 属性相关的元信息

​		http-equiv	把 content 属性关联到 HTTP 头部（content-type，expires，refresh，set-cookie）

​			如：```<meta http-equiv="Refresh" content="5;url=http://www.icketang.com" />```

​		name		把 content 属性关联到一个名称（author，description，keywords（SEO优化）等）

### 1.7 字符集

字符集：定义了当前文件使用的字库。

中文字库：

​	UTF-8：国际标准字库。包含了人类所有语言的文字。一个汉字3个字节。

​	GBK/gb2312：中国字库，国家标准。包含所有的简体中文，大部分繁体，一些特殊符号，片假

名。一个汉字2个字节。

分情况使用：网页是外文网站，用UTF-8字库。有大量的中文，要求网页加载速度快，用gbk字库。

​	注意：必须保证设置的字符集和软件保存的字符集类型一致。

```html
<!-- 定义文档类型 -->
<!DOCTYPE html>
<!-- 这里定义的是页面 -->
<html lang="en">
<head>
    <!-- 相对地址 -->
    <!-- <base href="https://www.baidu.com/"> -->
    <!-- 在新页面中打开 -->
    <base target="_blank">
    <!-- 设置logo -->
    <link rel="shortcut icon" href="./favicon/favicon.ico" />
    <!-- 字符集 -->
    <meta charset="UTF-8" />
    <!-- 视口 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 关键字 -->
    <meta name="keywords" content="爱创" />
    <!-- 描述 -->
    <meta name="description" content="专业的前端培训学校" />
    <!-- 请求相关的 -->
    <!-- <meta http-equiv="refresh" content="3, https://www.baidu.com/" /> -->
    <!-- 标题 -->
    <title>爱创课堂官网</title>
</head>
<body>
    <!-- <h1>hello</h1> -->
    <!-- 这是定义的标题 -->
    <!-- 不建议：这是一个h1标签 -->
    <!-- 建议：这是新闻的标题 -->
    <h1>爱创课堂</h1>
    <!-- 超链接 -->
    <a href="./demo">demo</a>
    <a href="./demo">demo1</a>
    <a href="./demo" target="_self">demo</a>
</body>
</html>
```



### 1.8 body标签

作用：body部分是我们的网页主体，给客户浏览的区域。

内容：里面放置的是我们的html标签书写的网页结构。

### 1.9 html基本语法

标签之间对空格、缩进、换行不敏感。对我们的标签的嵌套关系敏感。

tab：缩进。		shift+tab：撤销缩进。	

空白折叠现象：文本内容区域内如果有一个或多个空格或者缩进或者换行，在浏览器中显示的时候，

只显示一个空格。即将所有空白区域折叠为一个空格。

标签的语法

​	① 标签必须写在一对尖括号里面，里面写的是我们的标签关键字。

​	② 双标签必须成对儿出现。

​	③ 结束标签必须写关闭符号/。

​	④ 标签分类：容器级标签、文本级标签。

```html
<body>
    <h1>hello 爱创课堂</h1>
    <h1>hello                  
        
        
        
        爱创课堂</h1>
<h1></h1>
<!-- a中嵌套了div，a的下面有一个p -->
<a href="">
    <div></div>
<!-- a标签的闭合标签省略了，原结构出现了问题：div和p都嵌套在a的内部了 -->
<p></p>
</body>
```



### 1.10 标签分类

html中标签的分类：

​	容器级标签：h1-h6  pre  div

​	文本级标签：p  code  span

​	文本级标签一般不能或不建议嵌套容器级标签，但是容器级可以嵌套文本级标签

### 1.11 属性

元素的属性：对元素的描述以及控制信息。

​	语法  <tag att="value"> 文本内容 </tag>

属性分类：

​	必选属性   img 图片标签中的 src   alt

​	可选属性   img 图片的标签 width  height

​	标准(全局)属性   id  class  style  lang

​	事件属性   onclick  onmouseover  onmouseout

必选属性以及可选属性也可以看做是特有属性。

```html 
<body>
    <!-- 必选属性 -->
    <!-- src 引入文件的地址， alt图片加载失败，提示的内容 -->
    <img src="./images/a.png" alt="美女">
    <!-- 可选属性 -->
    <!-- 工作中，建议设置必选属性 -->
    <img src="./images/a.png" width="150" height="200">
    <!-- 全局属性 -->
    <img src="./images/a.png" width="150" height="200" id="demo" style="border: 2px solid red;">
    <!-- 事件属性 -->
    <img src="./images/a.png" alt="美女" onclick="alert('点击图片了')">
</body>
```

## 二、标签介绍

### 2.1 h系列标签

h1-h6标题标签

给文本添加标题语义用，不能互相嵌套

​	默认加粗

​	具有换行符

h1-h6字体逐渐变小

由于 h 标签拥有确切的语义，因此要选择恰当的标签层级来构建文档的结构。

注意：请不要利用标题标签来改变同一行中的字体大小。相反，我们应当使用层叠样式表定义来达到

漂亮的显示效果

### 2.2 p 标签

给文本添加段落语义

具有换行符

注意：

​	p 标签可以嵌套在块级元素内，

​	但 p 标签不能嵌套其它块元素，如 div，h系列标签，p标签等

```html
<body>
    <h1>一级标题</h1>
    <h2>二级标题</h2>
    <h3>三级标题</h3>
    <h4>四级标题</h4>
    <!-- 工作中，不能用h标签相互嵌套 -->
    <!-- <h4>四级<h1>标题</h1></h4> -->
    <h4>四级<span style="font-size: 50px;">标题</span></h4>
    <h5>五级标题</h5>
    <h6>六级标题</h6>
    <p>这是内容</p>
    <!-- p也不能嵌套p -->
    <!-- <p>这是<p>内容</p></p> -->
    <!-- 渲染结果: <p>这是</p><p>内容</p><p></p> -->
    
    
</body>
```



### 2.3 img 标签

img 标签是一个单标签 ，单标签在标签内使用 / 结束，当然目前是可以省略的。

img 标签的属性：

​	src  		添加资源文件的路径

​	alt  		图片加载失败后的文本提示

​	title 		文本提示信息（鼠标悬停）

​	width 	设置图片的宽度

​	height 	设置图片的高度

​	border 	设置图片的边框厚度（默认黑色实线，且不可修改）

### 2.4 路径

绝对路径：目标文件所在的完成的路径（带盘符） 

​	本地文件的绝对路径 D:\素材\其他\a.jpg

​	服务器的绝对路径：https://www.icketang.com/demo.jpg

相对路径：目标文件相对于引用文件所在的位置

​	/   根目录（绝对路径）

​	./  当前目录（相对路径）

​	../  退出当前目录（相对路径）

```html
<body>
    <h1 title="ickt">hello</h1>
    <!-- 图片 -->
    <img src="./images/a.png" alt="美女" title="这是一位漂亮的美女" width="150" height="200" border="10">
    <!-- 工作中，会用css来设置样式 -->
    <img src="./images/a.png" alt="美女" title="这是一位漂亮的美女" width="150" height="200" style="border: 10px dashed red;">

    <!--绝对路径 -->
    <!-- 本地绝对路径 -->
    <img src="D:\class\ickt_33\02 html\example\images\1.jpg" alt="">
    <!-- 线上绝对路径 -->
    <img src="https://www.icketang.com/static/img/banner_news.jpg" alt="">
    <!-- 如果是本地服务器我们可以省略域名，直接以/开头。 -->
    <img src="/images/1.jpg" alt="">
    <!-- 分割线 -->
    <hr>

    <!-- 相对路径 -->
    <img src="./images/1.jpg" alt="">
    <!-- 工作中，建议以./开头，表示当前路径 -->
    <img src="images/1.jpg" alt="">
    <img src="../a.png" alt="">
</body>
```

