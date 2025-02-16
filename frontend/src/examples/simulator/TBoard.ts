import { config } from './config';
import { TCanvas } from './TCanvas';
import { TGrids } from './TGrids';
import { LedType, TLed } from './TLed';
import { TPsw } from './TPsw';

/**
 * Class: On-board leds
 */
class Leds extends TCanvas {
  private grid: TGrids;

  public powLed: TLed | null = null;
  public usbStLeds: TLed[] = [];
  public usbIoLeds: TLed[] = [];

  public picLeds: TLed[] = [];
  public espLeds: TLed[] = [];

  constructor(grid: TGrids) {
    super(config.board.width, config.board.height);
    this.grid = grid;
  }
  public drawAllLeds() {
    console.log('drawAllLeds');
    this.drawPicLeds();
    this.drawEspLeds();
    this.drawUsbStLeds();
    this.drawUsbIoLeds();
    this.drawPowerLed();
    return this;
  }

  public drawPowerLed() {
    const g = this.grid;
    const gx = g.getGx();
    const gy = g.getGy();
    const h = gx * 0.15;
    const w = h * 1.5;

    const px = gx * 5.04 - w / 2;
    const py = gy * 4.1 - h / 2;
    const led = new TLed(this, 'red', w, h, px, py);
    this.powLed = led;
    led.update(false);
    led.blink();
  }

  private drawUsbStLeds() {
    const g = this.grid;
    const gx = g.getGx();
    const gy = g.getGy();
    const w = gx * 0.15;
    const h = w * 1.5;
    const gap = gx * 0.23;

    const ledTypes: LedType[] = [
      'green',
      'yellow',
      'white',
      'blue',
      'white',
      'green',
      'blue',
      'yellow',
    ];

    const ox = gx * 1.613;
    const oy = gy * 3.16;
    ledTypes.map((t, i) => {
      const px = ox + (w + gap) * i - w / 2;
      const py = oy - h / 2;
      const led = new TLed(this, t, w, h, px, py);
      led.update(false);
      led.blink();
    });
  }

  private drawUsbIoLeds() {
    const g = this.grid;
    const gx = g.getGx();
    const gy = g.getGy();
    const w = gx * 0.15;
    const h = w * 1.5;
    const gap = gx * 0.23;

    const ledTypes: LedType[] = [
      'blue',
      'green',
      'white',
      'yellow',
      'blue',
      'green',
      'white',
    ];

    const ox = gx * 1.613;
    const oy = gy * 6.78;
    ledTypes.map((t, i) => {
      const px = ox + (w + gap) * i - w / 2;
      const py = oy - h / 2;
      const led = new TLed(this, t, w, h, px, py);
      led.update(true);
      led.blink();
    });
  }

  public drawPicLeds() {
    const g = this.grid;
    const gx = g.getGx();
    const gy = g.getGy();
    const w = gx * 0.15;
    const h = w * 1.5;
    const gap = gx * 0.23;
    const ox = g.getCx() + gx * 0.11;
    const oy = g.getCy() + gy * 1.54;

    const ledTypes: LedType[] = ['white', 'blue', 'green', 'yellow'];

    ledTypes.map((t, i) => {
      const px = ox + (w + gap) * i - w / 2;
      const py = oy - h / 2;
      const led = new TLed(this, t, w, h, px, py);
      led.update(false);
      led.blink();
      this.picLeds.push(led);
    });
  }

  public drawEspLeds() {
    const g = this.grid;
    const gx = g.getGx();
    const gy = g.getGy();
    const h = gx * 0.15;
    const w = h * 1.5;
    const gap = gx * 0.45;
    const ox = g.getCx() + gx * 6.67;
    const oy = g.getCy() + gy * 1.3;

    const ledTypes: LedType[] = ['yellow', 'white', 'blue', 'green'];

    ledTypes.map((t, i) => {
      const px = ox - ((w + gap) * (i % 2) - w / 2);
      const yy = i < 2 ? 0 : gap * 0.68;
      const py = yy + oy - h / 2;
      const led = new TLed(this, t, w, h, px, py);
      led.update(true);
      led.blink();
      this.espLeds.push(led);
    });
  }
}

/**
 * Class Switch
 */

class PSws extends TCanvas {
  private grid: TGrids;
  public switches: TPsw[] = [];
  constructor(grid: TGrids) {
    super(config.board.width, config.board.height);
    this.grid = grid;
  }

  public drawAllSwitches() {
    const g = this.grid;
    const x = g.getGx() * 6.945;
    const y = g.getGy() * 1.52;
    const w = g.getGx() * 0.4;
    const h = w;

    for (let i = 0; i < 4; i++) {
      const px = x - w / 2 + (i % 2) * g.getGx() * 1.08 - w / 2;
      const py = y - h / 2 - h / 2;
      const oy = i > 1 ? g.getGy() * 7.43 : 0;
      const ox = i === 2 ? g.getGx() * -0.03 : 0;
      const psw = new TPsw(this, px + ox, py + oy, w, h);
      this.switches.push(psw);
      console.log(this.switches);
    }

    // Mouse Click Event
    const _update = (evType: 'move' | 'down' | 'up', e: PointerEvent) => {
      this.cvs.width = this.width;
      let isHover = false;
      this.switches.map((psw) => {
        if (psw.update(evType, e)) {
          isHover = true;
        }
      });
      if (isHover) this.cvs.style.cursor = 'pointer';
    };

    this.cvs.addEventListener('pointermove', (e) => {
      _update('move', e);
    });

    this.cvs.addEventListener('pointerdown', (e) => {
      _update('down', e);
    });

    this.cvs.addEventListener('pointerup', (e) => {
      _update('up', e);
    });
  }
}

/**
 * Class: TBoard
 */
export class TBoard extends TCanvas {
  private grid: TGrids;
  private leds: Leds;
  private psws: PSws;
  public container: HTMLDivElement;
  constructor() {
    super(config.board.width, config.board.height);
    this.grid = new TGrids(config.board.ngx, config.board.ngy);
    this.leds = new Leds(this.grid);
    this.psws = new PSws(this.grid);

    this.container = document.createElement('div');
    this.container.style.position = 'relative'; // fit inside it parent container
    this.container.style.top = '0%';
    this.container.style.left = '0%';
    this.container.style.transform = 'translate(-0%, -0%)';

    this.container.style.width = `${config.board.width}px`;
    this.container.style.height = `${config.board.height}px`;

    this.div.style.zIndex = '1';
    this.leds.div.style.zIndex = '2';
    this.psws.div.style.zIndex = '3';
    this.grid.div.style.zIndex = '4';
    this.container.appendChild(this.leds.div);
    this.container.appendChild(this.psws.div);
    this.container.appendChild(this.grid.div);
    this.container.appendChild(this.div);

    // Grid layer: click-through while still being visible,
    this.grid.div.style.pointerEvents = 'none';

    const img = new Image();
    img.src = `ternion.png`;
    img.onload = () => {
      const ctx = this.ctx;
      ctx.drawImage(img!, 0, 0, this.width, this.height);
      this.leds.drawAllLeds();
      this.psws.drawAllSwitches();
      // this.drawGrids();
    };
  }

  public drawGrids() {
    this.grid.draw();
    return this;
  }
}
