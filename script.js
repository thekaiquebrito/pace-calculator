function calculateTime(event) {
    event.preventDefault()

    let inputs = []
    document.querySelectorAll(".form-time input").forEach(element => inputs.push(element))

    //verifications
    let inputEmpty = inputs.some(element => element.value === "");
    let inputMore59
    inputs.map(input => {
        if (!input.classList.contains("dist") && input.value > 59) {
            inputMore59 = true
        }
    })

    if (inputEmpty) {
        alert("Preencha todos os campos")
    }
    else if (inputMore59) {
        alert("Minutos ou segundos no máximo 59")
    }
    else {
        let distance = document.querySelector(".form-time .dist").value
        let paceMin = parseInt(document.querySelector(".form-time .min").value)
        let paceSeg = parseInt(document.querySelector(".form-time .seg").value)

        let totalTime = (((paceMin * 60) + paceSeg) * distance) / 60 / 60
        let avarageSpeed = distance / totalTime

        //format time
        let hour = Math.floor(totalTime)
        let minute = Math.floor((totalTime - hour) * 60)
        let second = Math.floor(((totalTime - hour) * 60 - minute) * 60)


        hour = hour < 10 ? "0" + hour : hour
        minute = minute < 10 ? "0" + minute : minute
        second = second < 10 ? "0" + second : second


        document.querySelector(".form-time .result").style.display = "block"
        document.querySelector(".form-time span.vM").textContent = avarageSpeed.toFixed(1)
        document.querySelector(".form-time span.tT").textContent = `${hour}:${minute}:${second}`

    }

}

function calculatePace(event) {
    event.preventDefault()

    let inputs = []
    document.querySelectorAll(".form-pace input").forEach(element => inputs.push(element))

    let inputEmpty = inputs.some(element => element.value === "");

    if (inputEmpty) {
        alert("Preencha todos os campos")
    } else {

        let distance = document.querySelector(".form-pace .dist").value
        let timeH = parseInt(document.querySelector(".form-pace .hour").value)
        let timeM = parseInt(document.querySelector(".form-pace .min").value)
        let timeS = parseInt(document.querySelector(".form-pace .seg").value)

        let pace = (((((timeH * 60) + timeM) * 60) + timeS) / distance) / 60

        //format time
        let minute = Math.floor(pace)
        let second = Math.floor((pace - minute) * 60)

        document.querySelector(".form-pace .result").style.display = "block"
        document.querySelector(".form-pace span.pace").textContent = `${minute}'${second}''`
    }
}
