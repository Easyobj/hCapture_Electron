const Electron = require("electron");
const { app, BrowserWindow } = Electron;

app.on("ready", () => {
  const display = Electron.screen.getAllDisplays()[0];
  const { x, y, width, height } = display.bounds;
  const win = new BrowserWindow({
    fraome: false,
    transparent: true,
    alwaysOnTop: true,
    x,
    y,
    width,
    height
  });
  console.log(display);
});
