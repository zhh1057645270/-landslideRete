export const getRoutesFiles = () => {
	const modules = import.meta.glob('../views/**/index.vue');
	const components: {
		path: string;
		component: any;
	}[] = [];
	Object.keys(modules).forEach((key) => {
		const matches = key.match(/\.\.\/views\/(.+)(\/index.vue)$/i);
		if (matches) {
			const path = matches[1];
			components.push({
				path,
				component: modules[key],
			});
		}
	});
	return {
		modules,
		components,
	};
};

export const getMapRoutesFiles = () => {
	const modules = import.meta.glob('../views/mapView/**/index.vue');
	const components: {
		path: string;
		component: any;
	}[] = [];
	Object.keys(modules).forEach((key) => {
		const matches = key.match(/\.\.\/views\/(.+)(\/index.vue)$/i);
		if (matches) {
			const path = matches[1];
			components.push({
				path,
				component: modules[key],
			});
		}
	});
	return {
		modules,
		components,
	};
};

export const getCommonRoutesFiles = () => {
	const modules = import.meta.glob('../views/commonView/**/index.vue');
	const components: {
		path: string;
		component: any;
	}[] = [];
	Object.keys(modules).forEach((key) => {
		const matches = key.match(/\.\.\/views\/(.+)(\/index.vue)$/i);
		if (matches) {
			const path = matches[1];
			components.push({
				path,
				component: modules[key],
			});
		}
	});
	return {
		modules,
		components,
	};
};

export const getFileStatisticRoutes = (
	componentFiles: {
		path: string;
		component: any;
	}[]
) => {
	return componentFiles.map((item) => {
		return {
			name: item.path,
			path: '/' + item.path,
			component: item.component,
		};
	});
};
