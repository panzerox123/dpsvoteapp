const electron = require('electron')
const {app, BrowserWindow} = electron

let win

function createWindow(){
    win = new BrowserWindow({width:1366,height:768,fullscreen: true})
    win.setMenu(null)
    win.openDevTools();
    win.loadURL(`file://${__dirname}/index.html`)
}

app.on('ready',createWindow);