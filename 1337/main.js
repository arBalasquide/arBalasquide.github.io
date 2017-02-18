//Help provided by zlr, executive director @ hackclub
//Thanks for the help :)

function typeMsg(msg, element, prefix, delay, callback) {
  var arrMsg = msg.split('')
  var char = arrMsg.shift()
  var prefixToAdd = ""

  // If the element is empty, then it's a new element and we need to add the
  // prefix to it
  if (element.innerHTML === "") {
    prefixToAdd = prefix
  }

  element.innerHTML += prefixToAdd + char

  if (arrMsg.length > 0) {
    var nextMsg = arrMsg.join('')

    setTimeout(function () {
      typeMsg(nextMsg, element, prefix, delay, callback)
    }, delay)
  } else {
    callback()
  }
}

function typeMsgs(msgs, msgsParent, elementType, prefix, delay, callback) {
  var nextMsg = msgs.shift()
  var element = document.createElement(elementType)

  msgsParent.appendChild(element)

  typeMsg(nextMsg, element, prefix, delay, function () {
    if (msgs.length > 0) {
      typeMsgs(msgs, msgsParent, elementType, prefix, delay, callback)
    } else {
      callback()
    }
  })
}

var msgsElementId = "messages"
var msgs = [
  "Hello, stranger. Welcome to Adrian's Website, where his projects can be viewed live."
]

var msgsElement = document.getElementById(msgsElementId)

typeMsgs(msgs, msgsElement, "p", "C:/", 100, function () {
  console.log("Done typing!")
})