'use strict'
let obj = {}
window.onkeydown = function () {
  let events = Object.keys(obj)
  for (let value of events) {
    let func = obj[value]
    func(event)
  }
}
export default obj
