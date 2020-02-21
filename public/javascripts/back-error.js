const fun = (num, time) => {
  let str = document.getElementsByTagName("code")[num].innerHTML.toString()
  let i = 0
  document.getElementsByTagName("code")[num].innerHTML = ""

  setTimeout(() => {
    let interval = setInterval(() => {
      i++
      document.getElementsByTagName("code")[num].innerHTML = str.slice(0, i) + "|"
      if (i == str.length) {
        clearInterval(interval)
        document.getElementsByTagName("code")[num].innerHTML = str
      }
    }, 10)
  }, time)
}

fun(0, 0)
fun(1, 600)
fun(2, 1300)