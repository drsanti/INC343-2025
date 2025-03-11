import { config } from './config';
import { TCanvas } from './TCanvas';
import { TColor } from './TColor';

export class TGrids extends TCanvas {
  public ngx: number = 22;
  public ngy: number = 10;
  public lineWidth: number = 2.5;
  public lineColor: string = TColor.rgb(50, 255, 50).alpha(0.5).hex(); // 'rgba(255, 255, 255, 0.1)';

  constructor(ngx?: number, ngy?: number) {
    super(config.board.width, config.board.height);

    this.ngx = ngx ?? this.ngx;
    this.ngy = ngy ?? this.ngy;
  }

  public getCx() {
    return this.cvs.width / 2;
  }

  public getCy() {
    return this.cvs.height / 2;
  }

  public getGx() {
    return this.cvs.width / this.ngx;
  }

  public getGy() {
    return this.cvs.height / this.ngy;
  }

  public getNx() {
    return this.ngx;
  }

  public getNy() {
    return this.ngy;
  }

  public setColor(color: string) {
    this.lineColor = color;
    return this;
  }

  public draw() {
    const ngx = this.ngx;
    const ngy = this.ngy;
    const width = this.cvs.width;
    const height = this.cvs.height;

    // Set line width and color
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.strokeStyle = this.lineColor;

    // Draw horizontal grids
    for (let i = 1; i < ngy + 0; i++) {
      const y = Math.floor((i * height) / ngy);
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(width, y);
      this.ctx.stroke();
    }

    // Draw vertical grids
    for (let i = 1; i < ngx + 0; i++) {
      const x = Math.floor((i * width) / ngx);
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, height);
      this.ctx.stroke();
    }

    return this;
  }
}
