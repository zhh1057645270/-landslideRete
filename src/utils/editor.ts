import CustomProgress from '@/components/Rete-vue/reteProgress.vue';
import { NodeEditor, GetSchemes, ClassicPreset } from 'rete';
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin';
import { ConnectionPlugin } from 'rete-connection-plugin';
import { VuePlugin, Presets, VueArea2D } from 'rete-vue-plugin';
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin';
import { ContextMenuPlugin, Presets as ContextMenuPresets, ContextMenuExtra } from 'rete-context-menu-plugin';
import DYselect from '@/components/Rete-vue/Rampselect.vue';
// import CustomButton from '@/components/Rete-vue/reteButton.vue';
import unitThreshold from '@/components/Rete-vue/unitThreshold.vue';
import reclassification from '@/components/Rete-vue/reclassification.vue';
import factorAIN from '@/components/Rete-vue/factorAIN.vue';
import modelGNN from '@/components/Rete-vue/modelGNN.vue';
import modelANN from '@/components/Rete-vue/modelANN.vue';
import modelSVM from '@/components/Rete-vue/modelSVM.vue';
import modelRF from '@/components/Rete-vue/modelRF.vue';
import newDEM from '@/components/Rete-vue/newDEM.vue';

const socket = new ClassicPreset.Socket('socket');

class Node extends ClassicPreset.Node {
	width = 210;
	height = 240;

	constructor() {
		super('单元类型选择');
		this.addInput('port', new ClassicPreset.Input(socket, 'DEM栅格'));
		// this.addControl('myControl1', new ButtonControl());
		this.addControl('myControl55', new select1Control());
		// this.addControl('myControl11', new ButtonControl());
		this.addOutput('port', new ClassicPreset.Output(socket, '单元划分矢量/栅格'));
	}
}
class Node0 extends ClassicPreset.Node {
	width = 210;
	height = 240;

	constructor() {
		super('输入栅格单元');
		// this.addControl('myControl1', new ButtonControl());
		this.addControl('myControl5', new FileopenControl());
		this.addOutput('port', new ClassicPreset.Output(socket, 'DEM数据'));
	}
}
class Node1 extends ClassicPreset.Node {
	width = 210;
	height = 240;
	// 方框长宽
	constructor() {
		super('单元大小设定'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, 'DEM栅格'));
		this.addControl('myControl33', new unitThresholdControl());
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '单元划分矢量'));
	}
}
class Node2 extends ClassicPreset.Node {
	width = 210;
	height = 240;
	// 方框长宽
	constructor() {
		super('影响因子筛选'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '影响因子栅格'));
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}

class Node3 extends ClassicPreset.Node {
	width = 210;
	height = 240;
	// 方框长宽
	constructor() {
		super('影响因子AIN'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '影响因子栅格'));
		this.addControl('myControl34', new factorAINControl());
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Node4 extends ClassicPreset.Node {
	width = 210;
	height = 240;
	// 方框长宽
	constructor() {
		super('模型类型'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}

class Node5 extends ClassicPreset.Node {
	width = 210;
	height = 240;
	// 方框长宽
	constructor() {
		super('超参数设置'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Node6 extends ClassicPreset.Node {
	width = 210;
	height = 240;
	// 方框长宽
	constructor() {
		super('样本选取方法'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Node7 extends ClassicPreset.Node {
	width = 210;
	height = 240;
	// 方框长宽
	constructor() {
		super('标记指数阈值设置'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));

		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Node8 extends ClassicPreset.Node {
	width = 210;
	height = 240;
	// 方框长宽
	constructor() {
		super('易发性指数区划设置'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '易发性栅格'));
	}
}
class Node9 extends ClassicPreset.Node {
	width = 210;
	height = 260;
	// 方框长宽
	constructor() {
		super('栅格重分类'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '输入栅格'));
		this.addControl('myControl31', new reclassificationControl());
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '输出栅格'));
	}
}
class Node10 extends ClassicPreset.Node {
	width = 210;
	height = 300;
	// 方框长宽
	constructor() {
		super('GNN模型'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));
		this.addControl('myControl37', new modelGNNControl());
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Node11 extends ClassicPreset.Node {
	width = 210;
	height = 260;
	// 方框长宽
	constructor() {
		super('ANN模型'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));
		this.addControl('myControl38', new modelANNControl());
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Node12 extends ClassicPreset.Node {
	width = 210;
	height = 260;
	// 方框长宽
	constructor() {
		super('SVM模型'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));
		this.addControl('myControl39', new modelSVMControl());
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Node13 extends ClassicPreset.Node {
	width = 210;
	height = 260;
	// 方框长宽
	constructor() {
		super('RF模型'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));
		this.addControl('myControl40', new modelRFControl());
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Connection<A extends Node> extends ClassicPreset.Connection<A, A> {}

type Schemes = GetSchemes<Node, Connection<Node>>;
type AreaExtra = VueArea2D<Schemes>;

class ButtonControl extends ClassicPreset.Control {
	constructor() {
		super();
	}
}

class FileopenControl extends ClassicPreset.Control {
	constructor() {
		super();
	}
}

class select1Control extends ClassicPreset.Control {
	vueComponent: any;
	constructor() {
		super();
		this.vueComponent = DYselect;
	}
}

class unitThresholdControl extends ClassicPreset.Control {
	vueComponent: any;
	constructor() {
		super();
		this.vueComponent = unitThreshold;
	}
}

class reclassificationControl extends ClassicPreset.Control {
	vueComponent: any;
	constructor() {
		super();
		this.vueComponent = reclassification;
	}
}

class factorAINControl extends ClassicPreset.Control {
	vueComponent: any;
	constructor() {
		super();
		this.vueComponent = factorAIN;
	}
}

class modelGNNControl extends ClassicPreset.Control {
	vueComponent: any;
	constructor() {
		super();
		this.vueComponent = modelGNN;
	}
}

class modelANNControl extends ClassicPreset.Control {
	vueComponent: any;
	constructor() {
		super();
		this.vueComponent = modelANN;
	}
}

class modelSVMControl extends ClassicPreset.Control {
	vueComponent: any;
	constructor() {
		super();
		this.vueComponent = modelSVM;
	}
}

class modelRFControl extends ClassicPreset.Control {
	vueComponent: any;
	constructor() {
		super();
		this.vueComponent = modelRF;
	}
}

export async function createEditor(container: HTMLElement) {
	const socket = new ClassicPreset.Socket('socket');
	const editor = new NodeEditor<Schemes>();
	const area = new AreaPlugin<Schemes, AreaExtra>(container);
	const connection = new ConnectionPlugin<Schemes, AreaExtra>();
	const render = new VuePlugin<Schemes, AreaExtra>();
	const contextMenu = new ContextMenuPlugin<Schemes>({
		items: ContextMenuPresets.classic.setup([
			['输入栅格单元', [['输入栅格单元', () => new Node0()]]],
			[
				'评价单元划分',
				[
					['单元类型选择', () => new Node()],
					['单元大小设定', () => new Node1()],
				],
			],
			[
				'属性特征提取',
				[
					['影响因子筛选', () => new Node2()],
					['栅格重分类', () => new Node9()],
					['影响因子AIN', () => new Node3()],
				],
			],
			[
				'训练模型选择',
				[
					['GNN模型', () => new Node10()],
					['ANN模型', () => new Node11()],
					['SVM模型', () => new Node12()],
					['RF模型', () => new Node13()],
					['超参数设置', () => new Node5()],
				],
			],
			[
				'样本选择',
				[
					['样本选取方法', () => new Node6()],
					['标记指数阈值设置', () => new Node7()],
				],
			],
			['预测结果', [['易发性指数区划设置', () => new Node8()]]],
		]),
	});
	render.addPreset(
		Presets.classic.setup({
			customize: {
				control(data) {
					if (data.payload instanceof unitThresholdControl) {
						return unitThreshold;
					}
					if (data.payload instanceof ClassicPreset.InputControl) {
						return Presets.classic.Control;
					}
					if (data.payload instanceof select1Control) {
						return DYselect;
					}
					if (data.payload instanceof reclassificationControl) {
						return reclassification;
					}
					if (data.payload instanceof factorAINControl) {
						return factorAIN;
					}
					if (data.payload instanceof modelGNNControl) {
						return modelGNN;
					}
					if (data.payload instanceof modelANNControl) {
						return modelANN;
					}
					if (data.payload instanceof modelSVMControl) {
						return modelSVM;
					}
					if (data.payload instanceof modelRFControl) {
						return modelRF;
					}
					if (data.payload instanceof FileopenControl) {
						return newDEM;
					}
				},
			},
		})
	);
	render.addPreset(Presets.contextMenu.setup());
	connection.addPreset(ConnectionPresets.classic.setup());

	editor.use(area);
	area.use(connection);
	area.use(render);
	area.use(contextMenu);

	AreaExtensions.zoomAt(area, editor.getNodes());

	return () => area.destroy();
}
