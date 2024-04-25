<template>
	<div class="sys-user flex flex-v-c">
		<div class="avatar">
			<img src="" alt="" />
		</div>
		<span class="name pr-6">李晓明</span>
		<el-popconfirm title="退出登录?" confirmButtonText="确定" cancelButtonText="取消" @confirm="handleLogout">
			<template #reference>
				<svg-icon class="icon" name="login-exit"></svg-icon>
			</template>
		</el-popconfirm>
	</div>
</template>

<script lang="ts" setup>
function handleLogout() {
	// store.dispatch("Logout");
}
</script>

<style lang="scss" scoped>
.sys-user {
	position: absolute;
	right: 24px;
	top: 17px;
	padding: 0 12px;
	.avatar {
		height: 26px;
		width: 26px;
		border-radius: 50%;
		overflow: hidden;
		img {
			height: 100%;
			width: 100%;
		}
	}
	.name {
		color: #86cbff;
		font-size: 16px;
		font-weight: 500;
		padding: 0px 12px 4px;
	}
	.icon {
		font-size: 24px;
		color: #86cbff;
		cursor: pointer;
	}
}
</style>
