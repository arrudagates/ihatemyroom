export default class CanvasGFX extends CanvasRenderingContext2D {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  constructor(ctx: CanvasRenderingContext2D) {
    super();
    this.ctx = ctx;
    this.canvas = this.ctx.canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }
}
