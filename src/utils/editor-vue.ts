import { NodeEditor, GetSchemes, ClassicPreset } from 'rete';
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin';
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin';
import { VuePlugin, Presets, VueArea2D } from 'rete-vue-plugin';
import { AutoArrangePlugin, Presets as ArrangePresets, ArrangeAppliers } from 'rete-auto-arrange-plugin';
import { ContextMenuPlugin, Presets as ContextMenuPresets, ContextMenuExtra } from 'rete-context-menu-plugin';
import { easeInOut } from 'popmotion';
import { insertableNodes } from '@/utils/index';
// import CustomButton from '@/components/Rete-vue/reteButton.vue';
import DYselect from '@/components/Rete-vue/select1.vue';
import reteRadio from '@/components/Rete-vue/reteRadio.vue';
const socket = new ClassicPreset.Socket('socket');

class ButtonControl extends ClassicPreset.Control {
	vueComponent: any;
	constructor() {
		super();
		this.vueComponent = CustomButton;
	}
}

class select1Control extends ClassicPreset.Control {
	vueComponent: any;
	constructor() {
		super();
		this.vueComponent = DYselect;
	}
}
class radioControl extends ClassicPreset.Control {
	constructor(public label: string, public onClick: () => void) {
		super();
	}
}
const inputControl = new ClassicPreset.InputControl('number', {
	initial: 0,
	change(value) {
		// select1Control.percent = value;
		// area.update("control", select1Control.id);
	},
});

class Node extends ClassicPreset.Node {
	width = 210;
	height = 180;

	constructor() {
		super('单元类型选择');
		this.addInput('port', new ClassicPreset.Input(socket, 'DEM栅格'));
		// this.addControl('myControl1', new ButtonControl());
		this.addControl('myControl2', new select1Control());
		this.addOutput('port', new ClassicPreset.Output(socket, '单元划分矢量/栅格'));
	}
}

class Node1 extends ClassicPreset.Node {
	width = 210;
	height = 180;
	// 方框长宽
	constructor() {
		super('单元大小设定'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, 'DEM栅格'));
		this.addControl('Node1', new ClassicPreset.InputControl('text', { initial: '划分面积阈值' }));
		this.addControl('Node2', new ClassicPreset.InputControl('text', { initial: '合并面积阈值' }));
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '单元划分矢量'));
	}
}
class Node2 extends ClassicPreset.Node {
	width = 210;
	height = 160;
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
	height = 160;
	// 方框长宽
	constructor() {
		super('影响因子AIN'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '影响因子栅格'));
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Node4 extends ClassicPreset.Node {
	width = 210;
	height = 160;
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
	height = 160;
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
	height = 160;
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
	height = 160;
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
	height = 160;
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
	height = 200;
	// 方框长宽
	constructor() {
		super('栅格重分类'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '输入栅格'));
		this.addControl('Node9', new ClassicPreset.InputControl('text', { initial: '栅格类型' }));
		this.addControl('Node10', new ClassicPreset.InputControl('text', { initial: '分类方法' }));
		this.addControl('Node11', new ClassicPreset.InputControl('text', { initial: '分类数' }));
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '输出栅格'));
	}
}
class Node10 extends ClassicPreset.Node {
	width = 210;
	height = 200;
	// 方框长宽
	constructor() {
		super('GNN模型'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));
		this.addControl('CFL1', new ClassicPreset.InputControl('text', { initial: 'GNN层数' }));
		this.addControl('CFL2', new ClassicPreset.InputControl('text', { initial: '潜在特征维度' }));
		this.addControl('CFL3', new ClassicPreset.InputControl('text', { initial: '使用GPU与否' }));
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Node11 extends ClassicPreset.Node {
	width = 210;
	height = 200;
	// 方框长宽
	constructor() {
		super('ANN模型'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));
		this.addControl('ANN1', new ClassicPreset.InputControl('text', { initial: '潜在特征维度' }));
		this.addControl('ANN2', new ClassicPreset.InputControl('text', { initial: '使用GPU与否' }));
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Node12 extends ClassicPreset.Node {
	width = 210;
	height = 200;
	// 方框长宽
	constructor() {
		super('SVM模型'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));
		this.addControl('SVM1', new ClassicPreset.InputControl('text', { initial: '核函数' }));
		this.addControl('SVM2', new ClassicPreset.InputControl('text', { initial: '使用GPU与否' }));
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Node13 extends ClassicPreset.Node {
	width = 210;
	height = 200;
	// 方框长宽
	constructor() {
		super('RF模型'); //方框名称
		this.addInput('port', new ClassicPreset.Input(socket, '特征值表格'));
		this.addControl('RF1', new ClassicPreset.InputControl('text', { initial: '树的数量' }));
		this.addControl('RF2', new ClassicPreset.InputControl('text', { initial: '使用GPU与否' }));
		// this.addInput("port", new ClassicPreset.Input(socket1));
		this.addOutput('port', new ClassicPreset.Output(socket, '特征值表格'));
	}
}
class Connection<N extends Node> extends ClassicPreset.Connection<N, N> {}

type Schemes = GetSchemes<Node, Connection<Node>>;
type AreaExtra = VueArea2D<Schemes> | ContextMenuExtra;

export async function createEditor2(container: HTMLElement) {
	const editor = new NodeEditor<Schemes>();
	const area = new AreaPlugin<Schemes, AreaExtra>(container);
	const connection = new ConnectionPlugin<Schemes, AreaExtra>();
	const render = new VuePlugin<Schemes, AreaExtra>({});
	const arrange = new AutoArrangePlugin<Schemes>();
	const contextMenu = new ContextMenuPlugin<Schemes>({
		items: ContextMenuPresets.classic.setup([
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
	AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
		accumulating: AreaExtensions.accumulateOnCtrl(),
	});
	render.addPreset(
		Presets.classic.setup({
			customize: {
				control(data: any) {
					if (data.payload instanceof ButtonControl) {
						return CustomButton;
					}
					if (data.payload instanceof select1Control) {
						return DYselect;
					}
					if (data.payload instanceof radioControl) {
						return reteRadio;
					}
					if (data.payload instanceof ClassicPreset.InputControl) {
						return Presets.classic.Control;
					}
				},
			},
		})
	);
	render.addPreset(Presets.contextMenu.setup());

	connection.addPreset(ConnectionPresets.classic.setup());
	arrange.addPreset(ArrangePresets.classic.setup());
	editor.use(area);
	area.use(connection);
	area.use(render);
	area.use(arrange);
	area.use(contextMenu);

	//节点插入
	AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
		accumulating: AreaExtensions.accumulateOnCtrl(),
	});

	const animatedApplier = new ArrangeAppliers.TransitionApplier<Schemes, never>({
		duration: 500,
		timingFunction: easeInOut,
	});

	AreaExtensions.simpleNodesOrder(area);

	insertableNodes(area, {
		async createConnections(node: any, connection: any) {
			await editor.addConnection(new Connection(editor.getNode(connection.source), connection.sourceOutput, node, 'port'));
			await editor.addConnection(new Connection(node, 'port', editor.getNode(connection.target), connection.targetInput));
			arrange.layout({
				applier: animatedApplier,
			});
		},
	});

	await arrange.layout();
	AreaExtensions.zoomAt(area, editor.getNodes());

	return {
		destroy: () => area.destroy(),
	};
}
