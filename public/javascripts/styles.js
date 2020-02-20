(function () {

  const applyScrollEffects = () => {

    window.scrollY > 100 ?
      document.querySelector('.navigation').classList.add('sticky') :
      document.querySelector('.navigation').classList.remove('sticky')
  }
  document.addEventListener('scroll', applyScrollEffects)
})()