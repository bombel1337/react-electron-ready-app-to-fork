const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    const minimizeButton = document.getElementsByClassName('topbar-minimize-app-button')[0];
    const maximizeButton = document.getElementsByClassName('topbar-maximize-app-button')[0];
    const closeButton = document.getElementsByClassName('topbar-close-app-button')[0];

    console.log(minimizeButton, maximizeButton, closeButton);
    minimizeButton.addEventListener('click', (e) => {

        ipcRenderer.send('minimize-app');
    });

    maximizeButton.addEventListener('click', (e) => {

        ipcRenderer.send('maximize-app');
    });

    closeButton.addEventListener('click', (e) => {

        ipcRenderer.send('close-app');
    });



});