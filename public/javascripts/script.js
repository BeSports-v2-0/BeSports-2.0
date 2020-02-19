document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll(".info-input").forEach(card => {
        card.onclick = (e) => {

            axios.post('/home/api', {
                    id: e.target.name
                })
                .then((res) => console.log(res))
                .catch(err => console.log(err))

        }
    })

}, false)

// function sendEvent() {

// }