# HTML 第四天

a	href	title		target   	_self, _blank, _parent, _top, frameName

div  	span

ul 	li

ol 	li

​	start, reversed

​	type: 	disc, circle, square, A, a, 1, i, I

dl 	dt	dd

table		width, height, border, cellspacing, cellpadding, align

​	tr, td, th

​		rowspan, colspan

​	caption

​	thead

​	tbody

## 一、表单

### 1.1 from 标签

表单用来收集用户数据，并将其提交到对应的地址。

我们的所有表单元素都要写在一个 form 标签内部，form 标签是一个功能性的标签，不是结构性。

form：是表单的语义化标签， 属性如下

- ​	name		定义表单的名称
- ​	action  		设置数据提交的地址
- ​	method  		设置数据提交的方式，如：GET 提交，POST 提交
- ​	target  		页面打开方式，如_self，_blank， _parent， _top，framename

表单中的控件：  textarea 文本域  		select 下拉列表		input 输入框   		button 按钮

### 1.2 textarea 标签

textarea 多行文本域，又可以叫做多行文本输入框，属性如下： 

- ​	rows  	设置行高，属性值是数字
- ​	cols  	 设置列宽，属性值是数字

### 1.3 label 标签

label 标签为 表单控件（textarea，input）定义标注

- ​	for		规定 label 绑定到哪个表单控件（id）。

​			我们还可以将表单控件写在 label 元素内，实现联动。

```html
<body>
    <!-- 表单 -->
        <!-- action      提交数据的地址
        method      提交数据的方式
        target      在哪里查看结果 -->
    <form action="./create" method="GET" target="_blank">
        <!-- 对表单控件的标注 -->
        <!-- 指向表单控件的id -->
        <label for="description">商品描述</label>
        <!-- 多行文本框 -->
        <!-- cols和rows代表的是字节 -->
        <textarea id="description" cols="40" rows="10"></textarea>

        <label>
            简介
            <textarea cols="30" rows="10"></textarea>
        </label>
        <!-- 引入其它位置的 -->
        <label for="demo">介绍</label>
    </form>
    <hr>
    <textarea id="demo" cols="30" rows="10"></textarea>
</body>
```



### 1.4 select 标签

select 标签可以创建单选或多选菜单，属性：

- ​	multiple  		设置多选
- ​	size 			设置显示在页面上的列表的项数

### 1.5 option 标签

option 标签用来定义下拉列表中的一个选项（一个条目），属性：

- ​	selected 		设置默认被选中的列表项（布尔型属性）

​	注意：内容只能是文本，不能出现标签

### 1.6 optgroup

optgroup 标签定义选项组。

- ​	label			为选项组规定描述。

```html
<!-- 表单 -->
<form action="">
    <label for="email">邮箱</label>
    <!-- 下拉框 -->
    <!-- multiple多选：复选 -->
    <!-- <select id="email" size="10" multiple>
        <option>@163.com</option>
        <option>@126.com</option>
        <option>@189.com</option>
        <option>@yeah.com</option>
        <option>@sohu.com</option>
        <option>@icketang.com</option>
        <option>@129.com</option>
        <option>@baidu.com</option>
        <option>@taobao.com</option>
        <option>@jd.com</option>
    </select> -->
    <!-- 单选 -->
    <select id="email" size="10">
        <optgroup label="非弹出选项">
            <option>@163.com</option>
            <option>@126.com</option>
            <option>@189.com</option>
            <option>@yeah.com</option>
            <option>@sohu.com</option>
            <option>@icketang.com</option>
            <option>@129.com</option>
            <option>@baidu.com</option>
            <option>@taobao.com</option>
            <option>@jd.com</option>
        </optgroup>
        <!-- 分组 -->
        <optgroup label="弹出选项">
            <option>支付宝</option>
            <option>登录百度</option>
            <option>QQ邮箱</option>
            <option>QQ空间</option>
            <option>新浪微博</option>
        </optgroup>
    </select>
</form>
```



### 1.7 input 标签

input：表示输入的语义标签。用于搜集用户信息。input是一个单标签，也叫做自封闭标签。

控件的类型由 type 属性确定：

（1）text  		单行文本框，文本输入框(默认的输入框类型)		

- ​	pattern	规定输入字段的值的模式或格式（html5新增）。

（2）password 	密码输入框

（3）radio 		单选框

（4）checkbox 	复选框，多选框

​	单选和复选框name值必须一致，这样才能保证是同一个题干下面的不同选项

- ​	checked  属性，设置默认被选中；布尔型属性

（5）image  		图像域

- ​	src  设置图片的路径	width 与 height 设置图片的宽度和高度

（6）file 		文件

（7）hidden 		隐藏文本

（8）button  	普通按钮

（9）submit  	提交按钮

（10）reset  		重置按钮

```html
<form action="/create" target="_self">
    <label for="username">用户名</label>
    <!-- 1 单行文本框 -->
    <!-- pattern  对输入的内容做校验，有兼容性问题 [0-9]{2,5} 2到5位数字， -->
    <!-- <input type="text" id="username" pattern="[0-9]{2,5}" value="hello"> -->
    <input type="text" id="username" name="username" value="hello">
    <hr>
    <!-- 2 密码框 -->
    <!-- input:password + tab -->
    <input type="password">
    <hr>
    <!-- 3 单选框：只能选择一次 -->
    <label>性别</label>

    <!-- 注意：单选框要统一设置name属性， 通过value设置不同的值， 通常通过label标签来说明input -->
    <label for="man">男</label>
    <!-- 男  -->
    <input type="radio" id="man" name="sex" value="男">

    <label for="woman">女</label>
    <input type="radio" id="woman" name="sex" value="女">

    <hr>
    <!-- 4 多选框 -->
    <label>兴趣爱好</label>

    <!-- <label for="basketball">篮球</label>
    <input type="checkbox" id="basketball" name="intrest" value="篮球"> -->
    <!-- a代表篮球 -->
    <label for="lanqiu">篮球</label>
    <input type="checkbox" id="langqiu" name="intrest" value="篮球">
    <!-- zuball -->
    <label for="football">足球</label>
    <input type="checkbox" id="football" name="intrest" value="足球">

    <label for="pingpang">乒乓球</label>
    <input type="checkbox" id="pingpang" name="intrest" value="乒乓球">

    <hr>
    <!-- 5 图片 -->
    <input type="image" src="./images/1.jpg" width="60" height="100">

    <hr>
    <!-- 6 文件 -->
    <input type="file">

    <hr>
    <!-- 7 隐藏文本 -->
    <input type="hidden" name="color" value="red">

    <hr>
    <!-- 8 按钮 -->
    <input type="button" value="普通按钮">

    <hr>
    <!-- 9 重置按钮 -->
    <input type="reset" value="重置">

    <hr>
    <!-- 10 提交按钮 -->
    <input type="submit" value="提交">

    <hr>
    <!-- <button>提交</button> -->
    <!-- 快捷键 -->
    <!-- +  标签并列关系  div+span -->
    <!-- *  创建多个    div*5 -->
    <!-- :  给input元素设置类型  -->
    <!-- {} 设置内容 -->
    <!-- () 对内部的内容，统一添加功能  (tr>td*3)*3 -->
    <!-- [] 设置属性  div[id=demo class] -->
    <!-- [key=value] 可以为属性赋值-->
    <!-- $  设置起始数字  div{$}*5 -->
    <!-- @  设置$符号起始数字 div{$@5}*5 -->
</form>
```



### 1.8 button 标签

button 标签定义一个按钮，属性：

- ​	type		规定按钮的类型（button，reset，submit）

button 控件 与 input type="button" 控件相比：

- ​	button 标签之间的所有内容都是按钮的内容，比如文本或多媒体内容。

兼容性：IE 的默认类型是 "button"，而其它浏览器中（包括 W3C 规范）的默认值是 "submit"。

```html
<form action="/create">
    <!-- 文本框 -->
    <input type="text" name="username" value="hello">
    <input type="text">
    <!-- 按钮有三种类型：button, submit, reset -->
    <!-- 不设置type，ie低版本行为与button一样，标准浏览器行为与submit一样 -->
    <button>按钮</button>
    <!-- 普通按钮 -->
    <button type="button">普通按钮</button>
    <!-- 提交按钮 -->
    <button type="submit">提交</button>
    <!-- 重置按钮 -->
    <button type="reset">重置</button>

    <!-- 与input比较 -->
    <!-- 1 button在标签之间设置内容，input在value属性中设置内容 -->
    <!-- 2 button内容中可以包含其它的标签，input不能渲染其它的标签。 -->
    <button>
        <a href="www.baidu.com">baidu</a>
    </button>
    <input type="button" value="<a href='www.baidu.com'>baidu</a>">
</form>
```



### 1.9 表单控件的通用属性

- name			   规定文本区的名称。
- value		        定义送往服务器的选项值（表单控件的值）。
- autofocus	   规定在页面加载后文本区域自动获得焦点（html5新增）。
- form		         规定文本区域所属的一个或多个表单（html5新增）。
- placeholder	规定描述文本区域预期值的简短提示（html5新增）。
- disabled		  规定禁用该文本区。
- readonly		 规定文本区为只读。
- maxlength | minlength	规定文本区域的最大|最小字符数（textarea 与 input）。
- required		 规定文本区域是必填的（textarea 与 input）（html5新增）。

```html
<!-- 表单 -->
<form action="/create">
    <!-- ?nickname=ickt123&intro123=213123 -->
    <!-- 在提交的数据中，=前面的代表数据名称(name), =后面的代表数据值(value) -->
    <!-- ?是数据的开始，&链接两组数据 -->
    <!-- 用户名 -->
    <label for="username">昵称</label>
    <!-- name代表字段名称，value代表字段的值 -->
    <!-- placeholder提示文案 -->
    <!-- disabled 禁用表单控件 -->
    <!-- readonly 只读 -->
    <input type="text" disabled name="nickname" value="ickt" placeholder="请输入昵称">
    <input type="text" readonly value="hello">
    <!-- maxlength最大长度，minlength最小长度 -->
    <input type="text" minlength="4" maxlength="8">
    <!-- 必填项 -->
    <input type="text" required>
    <hr>
    <!-- 介绍 -->
    <label for="intro">简介</label>
    <!-- autofocus:自动获取交单 -->
    <textarea autofocus name="intro123" id="intro" cols="30" rows="10" placeholder="请输入描述的信息"></textarea>
    <hr>
    <!-- 提交 -->
    <button>提交</button>
</form>
```



## 二、废弃标签

- font  	 字体标签
- frame	定义框架
- b 		   加粗
- i 		    斜体字
- u 		  下划线
- s 		   删除线

## 三、其它标签

- pre  		 预格式化原样输出	
- code 	   单行代码
- strong 	强调标签，加粗效果
- em 		  强调标签，斜体字效果
- ins 		  下划线
- del 		  删除线
- abbr		定义缩写
- address  定义地址
- iframe	内联框架
- br 		   换行
- hr		    分割线

```html
<!-- 废弃标签 -->
<i>文本</i>
<u>文本</u>
<s>文本</s>
<del>文本</del>
<hr>
<!-- 其它标签 -->
<p>hello               
    
    爱创课堂</p>
<!-- 对内容直接输出 -->
<pre>hello               

    爱创课堂</pre>
<!-- br换行 -->
<p>hello <br>爱创课堂</p>
<!-- iframe框架标签，可以引入其它页面 -->
<iframe src="https://www.baidu.com/" frameborder="0" width="1200" height="600"></iframe>
<iframe src="https://www.taobao.com/" frameborder="0" width="1200" height="600"></iframe>
<iframe src="https://www.jd.com/" frameborder="0" width="1200" height="600"></iframe>
```



## 四、字符实体

```
&nbsp;   		空格
&emsp;   		全角空格
&copy;   		版权符号©
&yen;    		人民币符号￥
&gt;     		大于号>
&lt;		 	小于号<
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- id 驼峰式命名, class 横线风格单词 -->
    <h1 id="pageTitle" class="page-title">&lt;s&nbsp;p&emsp;an&gt;</h1>
</body>
</html>
```



## 五、代码规范

1 标签名必须使用小写字母。

2 属性名必须使用小写字母，属性值必须用双引号包围。

3 使用 4个空格做为一个缩进层级

4 class 必须单词全字母小写，单词间以 - 分隔，

5 id 使用驼峰式命名（从第二个单词开始，首字母大写）