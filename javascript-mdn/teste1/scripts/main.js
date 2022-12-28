const clockBox = document.createElement('div')
clockBox.style.cssText = 'position: fixed; bottom: 15px; right: 15px; padding: 3px 7px; background-color: rgba(0 0 0 / .3); color: white; text-align: center; border-radius: .5rem;'
document.body.appendChild(clockBox)

function clockMaker() {
    const clock = new Date();
    const hours = '0' + clock.getHours();
    const minutes = '0' + clock.getMinutes();
    const seconds = '0' + clock.getSeconds();
    const hh = hours.slice(hours.length - 2);
    const mm = minutes.slice(minutes.length - 2);
    const ss = seconds.slice(seconds.length - 2);
    clockBox.textContent = `${hh}:${mm}:${ss}`;
}

setInterval(clockMaker, 100)