

document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD

    document.querySelectorAll(".info-input").forEach(card => {
        card.onclick = (e) => {

            axios.post('/home/api', { id: e.target.name })
                .then((res) => console.log(res))
                .catch(err => console.log(err))

        }
    })

}, false)

// function sendEvent() {

// }
=======
    // console.log('HOLAAAAAAAA')
}, false)
>>>>>>> 0e8c676837fa8aa93dc9f29535d3a4d535b6cad3
