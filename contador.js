const day = document.getElementById("day")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")

const birthday = "30 may 2024"

function countDown(){
    const birthdayDate = new Date(birthday)
    const today = new Date()

    const totalSeconds = (birthdayDate - today)/1000
    
    const endDays = Math.floor(totalSeconds/60/60/24)
    const endHours = Math.floor(totalSeconds/60/60) % 24
    const endMinutes = Math.floor(totalSeconds/60) % 60
    const endSeconds = Math.floor(totalSeconds) % 60

    day.innerHTML = addZero(endDays)
    hour.innerHTML = addZero(endHours)
    minute.innerHTML = addZero(endMinutes)
    second.innerHTML = addZero(endSeconds)
}

function addZero(number){
    if (number < 10) {
        number = '0' + number
    }

    return number
}

countDown()
setInterval(countDown, 1000)