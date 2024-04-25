/*
 * @Author: ce
 * @Date: 2022-09-16 10:24:46
 * @LastEditors: ce
 * @LastEditTime: 2022-11-18 09:08:16
 * @FilePath: /dqszlspt-admin/commitlint.config.js
 */
module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'feat', // 新功能
				'upd', // 修改
				'del', // 删除
				'fix', // bug修复
				'test', // 单元测试
				'perf', // 性能优化
				'docs', // 文档更新
				'style', // 样式变动
				'refactor', // 功能重构
				'revert', // 回滚某个更早之前的提交
				'package', // 创建包
			],
		],
		'type-case': [0],
		'type-empty': [0],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [0, 'always', 72],
	},
};
