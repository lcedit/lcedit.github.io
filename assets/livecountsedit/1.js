function submit() {
    var n = document.querySelector('#channelSubmitName').value
    var c = document.querySelector('#countSubmit').value
    if (!n) return alert('You must specify a channel name.')
    if (c > 1e12 || c < -1e12) return alert('Count must be between -1 trillion and +1 trillion.')
    document.querySelector('#channelName').innerHTML = n
    document.querySelector('#channelSubs').innerHTML = Math.round(count)
}

document.querySelector('#channelSubs').innerHTML = 404