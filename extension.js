const Main = imports.ui.main

let keyboard = Main.panel.statusArea.keyboard

let signalId

function enable () {
  keyboard.hide()
  signalId = keyboard.actor.connect('notify::visible', actor => {
    actor.hide()
  })
}

function disable () {
  if (signalId) keyboard.actor.disconnect(signalId)
  keyboard.show()
}
