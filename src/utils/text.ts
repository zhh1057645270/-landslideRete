import { NodeEditor, GetSchemes, ClassicPreset } from 'rete';
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin';
import {
    ConnectionPlugin,
    Presets as ConnectionPresets,
} from 'rete-connection-plugin';
import {
    VuePlugin,
    Presets,
    VueArea2D,

} from 'rete-vue-plugin';
import {
    AutoArrangePlugin,
    Presets as ArrangePresets,
    ArrangeAppliers,
} from 'rete-auto-arrange-plugin';
import {
    ContextMenuPlugin,
    Presets as ContextMenuPresets,
    ContextMenuExtra,
} from 'rete-context-menu-plugin';

import CustomButton from '@/components/Rete-vue/reteButton.vue';
import DYselect from '@/components/Rete-vue/select1.vue';
import reteRadio from '@/components/Rete-vue/reteRadio.vue';
const socket = new ClassicPreset.Socket('socket');

class Node extends ClassicPreset.Node<
  Record<string, ClassicPreset.Socket>,
  Record<string, ClassicPreset.Socket>,
  Record<
    string,
    | ClassicPreset.InputControl<"number">
    | ClassicPreset.InputControl<"text">
  >
> { }

class select1Control extends ClassicPreset.Control {
    vueComponent: any;
    constructor() {
      super();
      this.vueComponent = DYselect;
    }
  }





class Node1 extends ClassicPreset.Node {
    width = 210;
    height = 180;
    // 方框长宽
    constructor() {
        super("单元大小设定");//方框名称
        this.addInput("port", new ClassicPreset.Input(socket, "DEM栅格"));
        this.addControl("Node1", new ClassicPreset.InputControl("text", { initial: '划分面积阈值' }));
        this.addControl("Node2", new ClassicPreset.InputControl("text", { initial: '合并面积阈值' }));
        // this.addInput("port", new ClassicPreset.Input(socket1));
        this.addOutput("port", new ClassicPreset.Output(socket, "单元划分矢量"));

    }
}

class Connection<N extends Node> extends ClassicPreset.Connection<N, N> { }

type Schemes = GetSchemes<Node, Connection<Node>>;
type AreaExtra = VueArea2D<Schemes> | ContextMenuExtra;

export async function createEditor1(container: HTMLElement) {
    const editor = new NodeEditor<Schemes>();
    const area = new AreaPlugin<Schemes, AreaExtra>(container);
    const connection = new ConnectionPlugin<Schemes, AreaExtra>();
    const render = new VuePlugin<Schemes, AreaExtra>({});
    const arrange = new AutoArrangePlugin<Schemes>();
    const contextMenu = new ContextMenuPlugin<Schemes>({
        items: ContextMenuPresets.classic.setup([
            ["评价单元划分", [
                ["单元大小设定", () => new Node1()],
            ]],

        ]),
    });
    AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
        accumulating: AreaExtensions.accumulateOnCtrl()
    });
    render.addPreset(Presets.classic.setup({
        customize: {
            control(data: any) {

                if (data.payload instanceof select1Control) {
                    return DYselect;
                }

                if (data.payload instanceof ClassicPreset.InputControl) {
                    return Presets.classic.Control;
                  }
            }
        }
    }));
    render.addPreset(Presets.contextMenu.setup())


    connection.addPreset(ConnectionPresets.classic.setup());
    arrange.addPreset(ArrangePresets.classic.setup());
    editor.use(area);
    area.use(connection);
    area.use(render);
    area.use(arrange);
    area.use(contextMenu);

    const a = new Node("A");
    a.addOutput("a", new ClassicPreset.Output(socket));
  
    const inputControl = new ClassicPreset.InputControl("number", {
      initial: 0,

    });
  
    a.addControl("input", inputControl);
    a.addControl('myControl2', new select1Control());
    await editor.addNode(a);



    AreaExtensions.zoomAt(area, editor.getNodes());
    return {
        destroy: () => area.destroy(),
    };
}