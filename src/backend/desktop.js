import { app, BrowserWindow } from 'electron';
import { EventEmitter } from 'events';
import Backend from './index';
import path from 'path';

let window;

export default class DesktopBackend extends Backend {
  constructor(opts = {}) {
    super(opts);
    app.on('window-all-closed', this.quit.bind(this));
  }

  open() {
    this.emit('pre-window-open');
    app.on('ready', this.launch.bind(this));
  }

  launch() {
    window = new BrowserWindow({
      width: 800,
      height: 600,
    });
    window.loadURL(`file://${path.resolve(__dirname, '../app.html')}`);
    window.webContents.openDevTools();
    this.emit('window-open', ({ app, window }));
    window.on('closed', () => {
      window = null;
      this.emit('window-close');
    });
  }

  quit() {
    this.emit('pre-quit');
  }
}
