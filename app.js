import { device, game, loader, NineSliceSprite, Stage, state, timer, Vector2d, video } from 'melonjs'

class TestStage extends Stage {
  onResetEvent () {
    const settings = {
      image: '9slice',
      width: 4, // sprite.width always resets to this value
      height: 4, // sprite.height always resets to this value
      insetx: 1,
      insety: 1,
      framewidth: 3,
      frameheight: 3,
      anchorPoint: new Vector2d(0, 0)
    }

    const sprite1 = new NineSliceSprite(4, 4, settings)
    const sprite2 = new NineSliceSprite(4, 30, settings)

    const frames = [0, 1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 2, 1, 0]

    sprite1.addAnimation('pulse', frames)
    sprite1.setCurrentAnimation('pulse')

    sprite2.addAnimation('pulse', frames)
    sprite2.setCurrentAnimation('pulse')

    game.world.addChild(sprite1)
    game.world.addChild(sprite2)

    timer.setInterval(() => {
      const width = Math.round(Math.random() * 50 + 2)
      const height = Math.round(Math.random() * 25 + 2)

      sprite1.width = width
      sprite1.height = height

      sprite2.nss_width = width
      sprite2.nss_height = height
    }, 1000)
  }
}

device.onReady(() => {
  video.init(64, 64, { parent: 'Main', scale: 'auto' })

  loader.preload([{
    name: '9slice',
    src: './9slice.png',
    type: 'image'
  }], () => {
    state.set(state.DEFAULT, new TestStage(), true)
  })
})
