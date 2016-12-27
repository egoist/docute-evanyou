import evanyou from './evanyou'

export default ({
  all = false
} = {}) => {
  return ({router}) => {
    router.afterEach(to => {
      const isLanding = to.meta && to.meta.name === 'landing'
      if (isLanding || all) {
        const canvas = document.createElement('canvas')
        canvas.id = 'evanyou-canvas'
        canvas.style.position = 'absolute'
        canvas.style.top = 0
        canvas.style.left = 0
        canvas.style.zIndex = 0
        canvas.style.width = '100%'
        canvas.style.width = '100%'
        canvas.style.pointerEvents = 'none'
        document.body.appendChild(canvas)
        evanyou()
      }
    })
  }
}
