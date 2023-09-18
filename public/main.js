const { app, BrowserWindow, ipcMain } = require('electron')


const path = require('path')
const isDev = require('electron-is-dev')


function createWindow() {
  // Create the browser window.
  const  win = new BrowserWindow({
    minWidth: 800,
    minHeight: 500,
    width: 800, // Set initial width
    height: 500, // Set initial height
    title: "electron + react by bombel",
    icon: path.join(__dirname, '../img/', 'icon 256x256.png'),
    transparent: true,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDev ? true : false
    }
  })
  
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' })
  } else {
    win.webContents.on('before-input-event', (event, input) => {
      // If the user pressed the DevTools shortcut, prevent the default behavior
      if (input.control && input.shift && input.key.toLowerCase() === 'i') {
        event.preventDefault()
      }
    })
  }

 
  
  ipcMain.on('close-app', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  });
  
  ipcMain.on('maximize-app', () => {
    if (win.isMaximized()) {
      win.setSize(800, 500)
      win.center();
    } else {
        win.maximize();
    }
  });
  
  ipcMain.on('minimize-app', () => {
    win.minimize();
  });

}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
