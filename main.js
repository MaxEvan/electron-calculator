const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
// Module to call
const remote = require('electron').remote;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 235, height: 320, titleBarStyle: 'hidden', resizable: false})

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/main.html`)
}

app.on('ready', createWindow)
