window.onscroll = () => show()
const show = () => document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? button.style.display = "block" : button.style.display = "none"

const button = document.getElementById('buttonUp')
button.onclick = () => scrollTo(document.documentElement, 0, 2000);

const scrollTo = (element, to, duration) => {
  let start = element.scrollTop
  change = to - start,
    currentTime = 0,
    increment = 20

  const animateScroll = () => {
    currentTime += increment
    let val = Math.easeInOutQuad(currentTime, start, change, duration)
    element.scrollTop = val
    currentTime < duration ? setTimeout(animateScroll, increment) : null
  }
  animateScroll()
}

Math.easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1)
    return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}