document.body.addEventListener('onload', initClock())

function updateClock(){
    let now = new Date()
    let dname = now.getDay()
    let mo = now.getMonth()
    let dnum = now.getDate()
    let yr = now.getFullYear()
    let hou = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    let pe = 'AM'

    if(hou == 0){
        hou = 12;
    }
    if(hou > 12){
        hou = hou - 12
        pe = "PM"
    }

    Number.prototype.pad = function(digits){
        //for(let n = this.toString(); n.length < digits; n = 0 + n)
        let st = this.toString()
        if(st.length == 1){
            return '0' + st 
        }
        return st
    }

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December']
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'Saturday']
    let ids = ['dayname', 'month', 'daynum', 'year', 'hour', 'minutes', 'seconds', 'period']
    let values = [week[dname], months[mo], dnum.pad(2), yr.pad(2), hou.pad(2), min.pad(2), sec.pad(2), pe]


    

    for(let i = 0 ; i < ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i]
    }

}

function initClock(){
    updateClock()
    window.setInterval('updateClock()', 1)
}