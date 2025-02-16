export class TernionSimulator {
  private _div: HTMLDivElement;
  private _cvs: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _width: number = 2048 / 1;
  private _height: number = 730 / 1;

  private _cvsPsw: HTMLCanvasElement;
  private _ctxPsw: CanvasRenderingContext2D;

  constructor(container: HTMLDivElement) {
    this._div = container;
    this._cvs = document.createElement('canvas');
    this._cvs.style.position = 'absolute'; // Make it overlap
    this._cvs.style.top = '50%';
    this._cvs.style.left = '50%';
    this._cvs.style.transform = 'translate(-50%, -50%)'; // Center it
    this._cvs.style.zIndex = '1'; // Lower layer
    this._cvs.width = this._width;
    this._cvs.height = this._height;
    this._ctx = this._cvs.getContext('2d') as CanvasRenderingContext2D;
    this._div.appendChild(this._cvs);

    this._cvsPsw = document.createElement('canvas');
    this._cvsPsw.style.position = 'absolute'; // Same positioning logic
    this._cvsPsw.style.top = '50%';
    this._cvsPsw.style.left = '50%';
    this._cvsPsw.style.transform = 'translate(-50%, -50%)'; // Center it
    this._cvsPsw.style.zIndex = '2';

    this._cvsPsw.width = this._width;
    this._cvsPsw.height = this._height;
    this._ctxPsw = this._cvsPsw.getContext('2d') as CanvasRenderingContext2D;
    this._div.appendChild(this._cvsPsw);
  }

  private _img: HTMLImageElement | null = null;

  public stop() {
    if (this._img) {
      this._img.onload = null;
      this._img = null;
    }
    this._div.innerHTML = '';
    return this;
  }

  public start() {
    this._cvs.width = this._width;
    this._img = new Image();
    this._img.src = `ternion.png`;
    this._img.onload = () => {
      this._ctx.drawImage(this._img!, 0, 0, this._width, this._height);
      // this.drawGrids();
      this.drawAllLeds();
    };

    return this;
  }

  private _ngx = 20;
  private _ngy = 10;

  public getGx = () => this._width / this._ngx;
  public getGy = () => this._height / this._ngy;
  public getNx = () => this._ngx;
  public getNy = () => this._ngy;
  public getCx = () => this._width / 2;
  public getCy = () => this._height / 2;

  private getLedGap = () => this.getGx() * 0.195;

  private getLedWidth = () => this.getGx() * 0.15;
  private getLedHeight = () => this.getGy() * 0.31;

  private drawGrids() {
    // Set line width and color
    this._ctx.lineWidth = 2;
    this._ctx.strokeStyle = 'rgba(0, 255, 0, 0.4)';

    // Draw horizontal grids
    for (let i = 0; i < this.getNy() + 1; i++) {
      const y = Math.floor((i * this._height) / this.getNy());
      this._ctx.beginPath();
      this._ctx.moveTo(0, y);
      this._ctx.lineTo(this._width, y);
      this._ctx.stroke();
    }

    // Draw vertical grids
    for (let i = 0; i < this.getNx() + 1; i++) {
      const x = Math.floor((i * this._width) / this.getNx());
      this._ctx.beginPath();
      this._ctx.moveTo(x, 0);
      this._ctx.lineTo(x, this._height);
      this._ctx.stroke();
    }
  }

  private _getUsbLedOffset() {
    const gx = this.getGx();
    const gy = this.getGy();
    const x = gx * 1 + gx * 0.4; // USB led offsetX
    const y = gy * 3 + gy * 0.02; // USB led offsetY
    return {
      x,
      y,
    };
  }

  private usbStatusLeds: LedSimulator[] = [];
  private usbIoLeds: LedSimulator[] = [];
  private pic24Leds: LedSimulator[] = [];
  private esp32Leds: LedSimulator[] = [];

  private _drawUsbStatusLeds() {
    const w = this.getLedWidth();
    const h = this.getLedHeight();
    const gap = this.getLedGap();
    const { x, y } = this._getUsbLedOffset();

    const usbStatusTypes: LedType[] = [
      'green',
      'yellow',
      'white',
      'blue',
      'white',
      'green',
      'blue',
      'yellow',
    ];
    usbStatusTypes.map((t, i) => {
      const px = x + (w + gap) * i;
      const py = y;
      const led = new LedSimulator(this._ctx, t, px, py, w, h);
      led.blink();
      this.usbStatusLeds.push(led);
    });
  }

  private _drawUsbIoLeds() {
    const w = this.getLedWidth();
    const h = this.getLedHeight();
    const gap = this.getLedGap();
    const { x, y } = this._getUsbLedOffset();

    const usbIoTypes: LedType[] = [
      'blue',
      'green',
      'white',
      'yellow',
      'blue',
      'green',
      'white',
    ];

    usbIoTypes.map((t, i) => {
      const px = x + (w + gap) * i;
      const py = y + this.getGy() * 3.66;
      const led = new LedSimulator(this._ctx, t, px, py, w, h);
      led.blink();
      this.usbIoLeds.push(led);
    });
  }

  public _drawPic24Leds() {
    const w = this.getLedWidth();
    const h = this.getLedHeight();
    const gap = this.getLedGap();
    const x = this.getCx() + this.getGx() * 0.018;
    const y = this.getCy() + this.getGy() * 1.39;

    const pic24LedTypes: LedType[] = ['white', 'blue', 'green', 'yellow'];

    pic24LedTypes.map((t, i) => {
      const px = x + (w + gap) * i;
      const py = y;
      const led = new LedSimulator(this._ctx, t, px, py, w, h);
      led.blink();
      this.pic24Leds.push(led);
    });
  }

  public _drawEsp32Leds() {
    const w = this.getLedWidth();
    const h = this.getLedHeight();
    const gap = this.getLedGap();
    const x = this.getCx() + this.getGx() * 6.16;
    const y = this.getCy() + this.getGy() * 1.188;

    const esp32LedTypes: LedType[] = ['yellow', 'white', 'blue', 'green'];

    esp32LedTypes.map((t, i) => {
      const ox = i < 2 ? 0 : -this.getGx() * 0.62;
      const px = x + ox;
      const py = y + (h + gap * 0.33) * (i % 2);
      const led = new LedSimulator(this._ctx, t, px, py, h, w);
      led.blink();
      this.esp32Leds.push(led);
    });
  }

  public _drawPowerLed() {
    const w = this.getLedWidth();
    const h = this.getLedHeight();
    const x = this.getGx() * 4.47;
    const y = this.getGy() * 4;

    const px = x;
    const py = y;
    const led = new LedSimulator(this._ctx, 'red', px, py, h, w);
    led.blink();
    this.esp32Leds.push(led);
  }

  public drawAllLeds() {
    this._drawUsbStatusLeds();
    this._drawUsbIoLeds();
    this._drawPic24Leds();
    this._drawEsp32Leds();
    this._drawPowerLed();

    this._createSwitch();
  }

  private switches: SwitchSimulator[] = [];

  private _createSwitch() {
    const x = this.getGx() * 6.325;
    const y = this.getGy() * 1.54;
    const w = this.getGx() * 0.4;
    const h = w;
    const ctx = this._ctxPsw;

    for (let i = 0; i < 4; i++) {
      const px = x - w / 2 + (i % 2) * this.getGx() * 0.99 - w / 2;
      const py = y - h / 2 - h / 2;
      const oy = i > 1 ? this.getGy() * 7.43 : 0;
      const ox = i === 2 ? this.getGx() * -0.02 : 0;
      const psw = new SwitchSimulator(ctx, px + ox, py + oy, w, h);
      this.switches.push(psw);
    }

    // Local: Helper
    const _update = (evType: 'move' | 'down' | 'up', e: PointerEvent) => {
      this._cvsPsw.width = this._width;
      this.switches.map((s) => {
        s.update(evType, e);
      });
    };

    this._cvsPsw.addEventListener('pointermove', (e) => {
      _update('move', e);
    });
    this._cvsPsw.addEventListener('pointerdown', (e) => {
      _update('down', e);
    });
    this._cvsPsw.addEventListener('pointerup', (e) => {
      _update('up', e);
    });
  }
}

class SwitchSimulator {
  private _ctx: CanvasRenderingContext2D;
  private _width: number = 20;
  private _height: number = 20;
  private _px: number = 10;
  private _py: number = 10;
  private _state: boolean = false;

  constructor(
    ctx: CanvasRenderingContext2D,
    px: number,
    py: number,
    width: number,
    height: number,
  ) {
    this._ctx = ctx;
    this._px = px;
    this._py = py;
    this._width = width;
    this._height = height;

    this.update('move', null);
  }

  public update(evType: 'move' | 'down' | 'up', e: PointerEvent | null) {
    const ctx = this._ctx;
    const onColor = 'rgba(255,0,0,0.7)';
    const offColor = 'rgba(0,0,0,0.4)';
    ctx.beginPath();

    const isInside =
      e &&
      e.offsetX > this._px &&
      e.offsetX < this._px + this._width &&
      e.offsetY > this._py &&
      e.offsetY < this._py + this._height;

    if (isInside) {
      if (evType === 'down') this._state = true;
      if (evType === 'up') this._state = false;
    }
    ctx.fillStyle = this._state ? onColor : offColor;

    ctx.roundRect(this._px, this._py, this._width, this._height, this._width);
    ctx.fill();
  }
}

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

export class LedSimulator {
  private _ctx: CanvasRenderingContext2D;
  private _state: boolean = false;
  private _type: LedType = 'green';
  private _width: number = 10;
  private _height: number = 20;
  private _px: number = 10;
  private _py: number = 10;
  constructor(
    ctx: CanvasRenderingContext2D,
    ledType: LedType,
    px: number,
    py: number,
    width: number,
    height: number,
    state: boolean = false,
  ) {
    this._ctx = ctx;
    this._type = ledType;
    this._state = state;
    this._px = px;
    this._py = py;
    this._width = width;
    this._height = height;

    this.update(state);
  }

  public update(state: boolean) {
    this._state = state;
    const ctx = this._ctx;
    ctx.beginPath();
    ctx.lineWidth = this._width * 0.2;
    ctx.strokeStyle = `#ccc`; //LedColors.getColor(this._type, this._state);
    ctx.fillStyle = LedColors.getColor(this._type, this._state);
    ctx.strokeRect(this._px, this._py, this._width, this._height);
    ctx.fillRect(this._px, this._py, this._width, this._height);
    ctx.stroke();
    return this;
  }

  private timer: number | null = null;
  public blink() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.timer = setInterval(() => {
        this._state = !this._state;
        this.update(this._state);
      }, 500);
    }
  }
}
