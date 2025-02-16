export class TCanvas {
  public cvs: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public div: HTMLDivElement;
  public width: number;
  public height: number;

  constructor(width: number = 512, height: number = 288) {
    this.div = document.createElement('div') as HTMLDivElement; // div;

    this.width = width;
    this.height = height;

    this.div.style.position = 'relative';
    this.div.style.overflow = 'hidden';

    this.div.style.position = 'absolute';
    this.div.style.top = '50%';
    this.div.style.left = '50%';
    this.div.style.transform = 'translate(-50%, -50%)';

    this.div.style.width = `${this.width}px`;
    this.div.style.height = `${this.height}px`;
    this.div.style.padding = '0px';
    this.div.style.margin = '0px';
    this.div.style.boxSizing = 'border-box'; //  include padding and border
    this.div.style.boxSizing = 'content-box'; // excluding padding and border.

    this.cvs = document.createElement('canvas');
    this.cvs.width = this.width;
    this.cvs.height = this.height;
    this.ctx = this.cvs.getContext('2d') as CanvasRenderingContext2D;

    this.div.appendChild(this.cvs);
  }

  public getCtx(): CanvasRenderingContext2D {
    return this.ctx;
  }

  public getCanvas(): HTMLCanvasElement {
    return this.cvs;
  }

  public get Div(): HTMLDivElement {
    return this.div;
  }

  public clear() {
    this.cvs.width = this.width = this.width + 0;
  }

  public resize(width: number, height: number) {
    this.cvs.width = this.width = width;
    this.cvs.height = this.height = height;
  }

  public dispose() {
    this.div.removeChild(this.cvs);
  }
}

export class TGridCanvas extends TCanvas {
  drawGrids() {
    // Set line width and color
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = 'rgba(0, 255, 0, 0.4)';
  }
}
