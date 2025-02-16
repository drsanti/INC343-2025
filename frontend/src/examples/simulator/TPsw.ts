import chroma from 'chroma-js';
import { TCanvas } from './TCanvas';

export class TPsw {
  public cvs: TCanvas;
  private width: number = 20;
  private height: number = 20;
  private px: number = 10;
  private py: number = 10;
  private state: boolean = false;

  constructor(
    cvs: TCanvas,
    px: number,
    py: number,
    width: number,
    height: number,
  ) {
    this.cvs = cvs;

    this.px = px;
    this.py = py;
    this.width = width;
    this.height = height;

    this.update('move', null);
  }

  public isHover(e: PointerEvent | null) {
    const ctx = this.cvs.getCtx();
    ctx.beginPath();

    const isInside =
      e &&
      e.offsetX > this.px &&
      e.offsetX < this.px + this.width &&
      e.offsetY > this.py &&
      e.offsetY < this.py + this.height;
    return isInside == true;
  }

  public update(evType: 'move' | 'down' | 'up', e: PointerEvent | null) {
    const ctx = this.cvs.getCtx();
    const onColor = chroma.rgb(50, 200, 0).alpha(0.7).css();
    const offColor = 'rgba(0,0,55,0.3)';
    ctx.beginPath();

    const isInside = this.isHover(e);

    if (isInside) {
      if (evType === 'down') this.state = true;
      if (evType === 'up') this.state = false;

      this.cvs.getCanvas().style.cursor = 'pointer';
    } else {
      this.cvs.getCanvas().style.cursor = 'default';
    }
    ctx.fillStyle = this.state ? onColor : offColor;

    ctx.roundRect(this.px, this.py, this.width, this.height, this.width);
    ctx.fill();
    return isInside;
  }
}
