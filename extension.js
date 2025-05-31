import { panel } from 'resource:///org/gnome/shell/ui/main.js'

let keyboard = panel.statusArea.keyboard

export default class HideKeyboardLayoutExtension {
  #watching = null

  disable() {
    if (this.#watching) keyboard.disconnect(this.#watching)
    keyboard.show()
  }

  enable() {
    keyboard.hide()
    this.#watching = keyboard.connect('notify::visible', actor => {
      keyboard.hide()
    })
  }
}
