import { panel } from 'resource:///org/gnome/shell/ui/main.js'

let keyboard = panel.statusArea.keyboard

export default class HideKeyboardLayoutExtension {
  watching = null

  disable() {
    if (this.watching) keyboard.actor.disconnect(this.watching)
    keyboard.show()
  }

  enable() {
    keyboard.hide()
    this.watching = keyboard.actor.connect('notify::visible', actor => {
      actor.hide()
    })
  }
}
