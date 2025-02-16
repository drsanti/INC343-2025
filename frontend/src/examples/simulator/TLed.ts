import { TCanvas } from './TCanvas';

export type LedType = 'red' | 'green' | 'orange' | 'yellow' | 'blue' | 'white';

export class LedColors {
  // Red
  public static readonly lightRed = '#fa3232';
  public static readonly darkRed = '#611818';

  // Green
  public static readonly lightGreen = '#6ef575';
  public static readonly darkGreen = '#214a23';

  // Orange
  public static readonly lightOrange = '#f78d3b';
  public static readonly darkOrange = '#4a2b12';

  // Yellow
  public static readonly lightYellow = '#fffa6b';
  public static readonly darkYellow = '#42411b';

  // Blue
  public static readonly lightBlue = '#68c5f7';
  public static readonly darkBlue = '#113769';

  // White
  public static readonly lightWhite = '#e8eaeb';
  public static readonly darkWhite = '#8b8c8f';

  public static getColor(type: LedType, state: boolean): string {
    if (state) {
      switch (type) {
        case 'red':
          return LedColors.lightRed;
        case 'green':
          return LedColors.lightGreen;
        case 'orange':
          return LedColors.lightOrange;
        case 'yellow':
          return LedColors.lightYellow;
        case 'blue':
          return LedColors.lightBlue;
        case 'white':
          return LedColors.lightWhite;
      }
    } else {
      switch (type) {
        case 'red':
          return LedColors.darkRed;
        case 'green':
          return LedColors.darkGreen;
        case 'orange':
          return LedColors.darkOrange;
        case 'yellow':
          return LedColors.darkYellow;
        case 'blue':
          return LedColors.darkBlue;
        case 'white':
          return LedColors.darkWhite;
      }
    }
  }
}

export class TLed {
  public cvs: TCanvas;
  public type: LedType;
  public state: boolean = false;

  public width: number; // led width
  public height: number; // led height
  public px: number; // led x position
  public py: number; // led y position

  constructor(
    cvs: TCanvas,
    ledType: LedType,
    width: number,
    height: number,
    px: number,
    py: number,
  ) {
    this.cvs = cvs;
    this.type = ledType;
    this.width = width;
    this.height = height;
    this.px = px;
    this.py = py;
  }

  public update(state: boolean) {
    this.state = state;
    const ctx = this.cvs.getCtx();
    const width = this.width;
    const height = this.height;
    const px = this.px;
    const py = this.py;
    const type = this.type;
    ctx.beginPath();
    ctx.lineWidth = this.width * 0.2;
    ctx.strokeStyle = `#ccc`;
    ctx.fillStyle = LedColors.getColor(type, state);
    ctx.strokeRect(px, py, width, height);
    ctx.fillRect(px, py, width, height);
    ctx.stroke();
    return this;
  }

  public goggle() {
    this.state = !this.state;
    this.update(this.state);
  }

  public off() {
    this.state = false;
    this.update(this.state);
  }

  public on() {
    this.state = true;
    this.update(this.state);
  }

  private timer: number | null = null;
  public blink() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.timer = setInterval(() => {
        this.state = !this.state;
        this.update(this.state);
      }, 500);
    }
  }
}
