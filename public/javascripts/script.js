document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll(".info-input").forEach(card => {
        card.onclick = (e) => {

            axios.post('/home/api', {
                    id: e.target.name
                })
                .then(res => {
                    // if (res.data.redirect) {
                    // window.location.replace(
                    //     `http://localhost:3000${res.data.redirect}`
                    // );
                    // }
                    console.log(res)
                })
                .catch(err => console.log(err))
        }

    })

}, false)