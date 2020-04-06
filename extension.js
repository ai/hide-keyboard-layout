const Main = imports.ui.main

let keyboard = Main.panel.statusArea.keyboard

let watching

function enable () {
  keyboard.hide()
  watching = keyboard.actor.connect('notify::visible', actor => {
    actor.hide()
  })
}

function disable () {
  if (watching) keyboard.actor.disconnect(watching)
  keyboard.show()
}
