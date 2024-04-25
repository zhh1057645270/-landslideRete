## 项目运行规范

### 主要功能目录

| 目录            | 描述             |
| --------------- | ---------------- |
| /src/api        | 定义 api 请求    |
| /src/assets     | 静态资源目录     |
| /src/components | 公共组件目录     |
| /src/router     | 系统路由目录     |
| /src/stores     | 全局状态管理     |
| /src/utils      | 系统工具目录     |
| /src/views      | 业务功能页面目录 |

### 样式工程化 /src/css/common.scss

#### padding, margin { 0, 50 }; font-size, line-height { 1, 100 }; width, height { 1, 500 }

```scss
each $p,
$m in (p: padding, m: margin) {
	@each $d, $fd in (t: top, r: right, b: bottom, l: left, '': '') {
		@for $i from 1 through 50 {
			@if $d == '' {
				.#{$p}-#{$i} {
					#{$m}: $i * 1px;
				}
			} @else {
				.#{$p}#{$d}-#{$i} {
					#{$m}-#{$fd}: $i * 1px;
				}
			}
		}
	}
}
@for $i from 1 through 100 {
	.font-#{ $i } {
		font-size: $i * 1px;
	}
}
@for $i from 1 through 100 {
	.lh-#{ $i } {
		line-height: $i * 1px;
	}
}
@for $i from 1 through 500 {
	.w-#{ $i } {
		width: $i * 1px;
	}
	.h-#{ $i } {
		height: $i * 1px;
	}
}
```

> p-10 => padding: 10px <br/>
> pr-10 => padding-right: 10px <br/>
> m-10 => margin: 10px <br/>
> mr-10 => margin-right: 10px <br/>
> .....

#### svg 图标

> 将 svg 文件置于/src/assets/icons

```vue
<svg-icon name="svgfilename"></svg-icon>
```

### 代码提交

参考 项目内 commitlint.config.js 文件中的代码提交规则
如: 提交新功能

```powershell
git add .
git commit -m 'feat: 新增 xx 功能'
```
