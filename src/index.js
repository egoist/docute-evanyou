import evanyou from './evanyou'

export default () => {
  return ({router}) => {
    router.afterEach(to => {
      const isLanding = to.meta && to.meta.name
      if (isLanding) {
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
      } else {
        const canvas = document.getElementById('evanyou-canvas')
        if (canvas) canvas.parentNode.removeChild(canvas)
      }
    })
  }
}
