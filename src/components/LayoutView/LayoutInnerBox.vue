<template>
	<div class="layout-inner-box">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.layout-inner-box {
	position: relative;
	height: 65%;
	width: 70%;
	top:0%;
	
	background: #081b29;
	padding: 5px;
	box-sizing: border-box;
}
</style>
