export class DragUtils {
	x: number = 0;
	y: number = 0;
	staticZindex: number = 999;
	handlerTarget: HTMLBaseElement | null = null;
	moveTarget: HTMLBaseElement | null = null;
	controller: AbortController = new AbortController();
	constructor(handler: HTMLBaseElement, move: HTMLBaseElement) {
		this.handlerTarget = handler;
		this.moveTarget = move;
		handler.style.cursor = 'move';
	}
	init() {
		this.handlerTarget?.addEventListener('pointerdown', (e) => this.onMouseDown(e), { signal: this.controller.signal });
	}
	//样式设置
	setEleStyle(el: HTMLBaseElement, option: { [x: string]: any; zIndex?: number; position?: string; cursor?: string }) {
		for (const key in option) {
			el.style[key] = option[key];
		}
	}
	//按下ele
	onMouseDown(e: PointerEvent) {
		this.handlerTarget!.setPointerCapture && this.handlerTarget!.setPointerCapture(e.pointerId); //全局捕获
		let zIndex = getComputedStyle(this.moveTarget!).getPropertyValue('z-index');
		//@ts-ignore
		zIndex = isNaN(zIndex) ? 1 : zIndex;
		//@ts-ignore
		this.staticZindex = this.staticZindex > zIndex ? Number(this.staticZindex) + 1 : Number(zIndex) + 1;
		this.setEleStyle(this.moveTarget!, { zIndex: this.staticZindex });
		this.x = e.clientX - this.moveTarget!.offsetLeft;
		this.y = e.clientY - this.moveTarget!.offsetTop;
		this.handlerTarget!.onpointermove = (e) => this.onMouseMove(e);
		this.handlerTarget!.onpointerup = (e) => this.onMouseUp(e);
		return false;
	}
	//移动move
	onMouseMove(e: PointerEvent) {
		let X = e.clientX - this.x;
		let Y = e.clientY - this.y;
		if (X < 10 - this.moveTarget!.offsetWidth) {
			X = 10 - this.moveTarget!.offsetWidth;
		} else if (X > document.documentElement.clientWidth - 10) {
			X = document.documentElement.clientWidth - 10;
		}
		if (Y < 10 - this.moveTarget!.clientHeight) {
			Y = 10 - this.moveTarget!.clientHeight;
		} else if (Y > document.documentElement.clientHeight - 10) {
			Y = document.documentElement.clientHeight - 10;
		}
		this.moveTarget!.style.right = 'auto';
		this.moveTarget!.style.bottom = 'auto';
		this.moveTarget!.style.left = X + 'px';
		this.moveTarget!.style.top = Y + 'px';
	}
	//释放
	onMouseUp(e: PointerEvent) {
		this.handlerTarget!.releasePointerCapture && this.handlerTarget!.releasePointerCapture(e.pointerId); //释放全局捕获
		this.handlerTarget!.onpointermove = null;
		this.handlerTarget!.onpointerup = null;
	}
	destory() {
		this.controller.abort();
	}
}
