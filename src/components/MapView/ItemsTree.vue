<!--
 * @ Author: WouRaoyu
 * @ Create Time: 2022-11-29 05:47:07
 * @ Modified by: WouRaoyu
 * @ Modified time: 2022-11-30 00:17:13
 * @ Description:
 -->

<template>
	<div>
		<div class="button-container-top" v-if="!showtree">
			<button @click="controlTree">图层控制</button>
		</div>
		<div class="tree-container" v-if="showtree">
			<div class="header">
				<div class="title">图层控制</div>
				<div class="closeBtn" @click="controlTree">
					<i class="el-icon-close"></i>
				</div>
			</div>
			<div class="tree-right">
				<el-tree
					:data="items"
					show-checkbox
					node-key="id"
					ref="tree"
					:default-expanded-keys="['']"
					:default-checked-keys="controls"
					@check="handleCheck"
					@node-click="handleClick"
					:props="defaultProps"
				></el-tree>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { loadTileMap } from '@/utils/imagery.js';
// import { loadWires } from '../utils/vectors.js'

export default {
	data() {
		return {
			baseurl: undefined,
			showtree: false,
			items: undefined,
			controls: [0, 1],
			defaultProps: {
				children: 'children',
				label: 'label',
			},
		};
	},
	created() {
		this.baseurl = 'http://localhost:5000/';
		this.DTGlobe['layerids'] = {};
		setInterval(() => {
			axios.get(this.baseurl + 'scene').then((res) => {
				if (this.countItems(res.data) == 0) return;
				if (!this.deepEqual(this.items, res.data)) {
					this.items = res.data;
					this.loadScene(this.items);
				}
			});
		}, 500);
	},
	computed: {},
	methods: {
		deepEqual(x, y) {
			if (x === y) return true;
			else if (typeof x == 'object' && x != null && typeof y == 'object' && y != null) {
				if (Object.keys(x).length != Object.keys(y).length) return false;
				for (var prop in x) {
					if (y.hasOwnProperty(prop)) {
						if (!this.deepEqual(x[prop], y[prop])) return false;
					} else return false;
				}
				return true;
			} else return false;
		},

		countItems(items) {
			var count = 0;
			items[0].children.forEach((element) => {
				element.children.forEach((item) => {
					if (item) {
						if (item.url) {
							item.url = this.baseurl + item.url;
							count++;
						}
					}
				});
			});
			return count;
		},

		loadScene(items) {
			items[0].children.forEach((element) => {
				element.children.forEach((item) => {
					if (item.url) {
						if (!this.DTGlobe['layerids'].hasOwnProperty(item.label)) {
							if (element.id === '1') {
								this.DTGlobe['layerids'][item.id] = loadTileMap(this.DTGlobe[0], item);
							} else {
								let promise = loadWires(this.DTGlobe[0], item);
								promise.then((datasource) => {
									this.DTGlobe['layerids'][item.id] = datasource;
								});
							}
						}
					}
				});
			});
		},

		handleCheck(_, nodes) {
			for (const key in this.DTGlobe['layerids']) {
				if (Object.hasOwnProperty.call(this.DTGlobe['layerids'], key)) {
					this.DTGlobe['layerids'][key].show = nodes.checkedKeys.includes(key);
				}
			}
		},

		handleClick: function (data) {
			if (Object.hasOwnProperty.call(this.DTGlobe['layerids'], data.id)) {
				this.DTGlobe[0].flyTo(this.DTGlobe['layerids'][data.id], 1);
			}
		},

		controlTree: function () {
			this.showtree = !this.showtree;
		},
	},
};
</script>

<style lang="scss" scoped>
.button-container-top {
	position: absolute;
	height: 32px;
	right: 50px;
	z-index: 99;
	top: 6px;
}

.tree-container {
	position: absolute;
	overflow-x: hidden;
	background: linear-gradient(-90deg, #0009 0%, rgba(1, 90, 79, 0) 100%);
	border-radius: 5px;
	top: 6px;
	right: 60px;
	z-index: 99;

	.header {
		width: 100%;
		height: 18px;
		overflow-x: hidden;

		.title {
			width: 100%;
			margin-left: 5%;
			position: absolute;
			font-size: 18px;
			font-family: PingFang SC;
			text-align: center;
			top: 6px;
			color: #f5f8ff !important;
			text-shadow: 0 0 1px #fff, 0 0 30px #228dff, 0 0 50px #228dff;
		}

		.closeBtn {
			position: absolute;
			top: 5px;
			right: 10px;
			font-size: 18px;
			cursor: pointer;
			z-index: 99;
		}
	}
}

.tree-right {
	margin-top: 16px;
	right: -18px;
	padding: 0px 32px 15px 15px;
	max-height: 400px;
	overflow-x: hidden;
	position: relative;
}

button {
	top: 0px;
	background-color: #2157eb4b;
	font-family: PingFang SC;
	border-radius: 12px;
	margin-right: 16px;
	padding: 4px 32px;
	font-size: 16px;
	height: 32px;
	right: 20px;
	color: white;
}

.el-scrollbar__wrap {
	overflow-x: hidden;
	z-index: 99;
}

.el-tree {
	// background: linear-gradient(-90deg, #0009 0%, rgba(1, 90, 79, 0) 100%);
	background: #0000;
	color: #f5f5f5;
}

::v-deep {
	.el-tree-node__content:hover {
		background-color: #0000;
	}

	.el-tree-node:focus > .el-tree-node__content {
		background-color: #0000 !important;
	}

	.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
		background-color: #0000;
	}
}
</style>
