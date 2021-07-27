function createObjectFromInput(input) {
  var obj = {}
  // create key:value of input label: user input
  for(let i=0;i<input.length;i++) {
    obj[input[i].name] = input[i].value
  }
  // Remove K:V from submit button
  delete obj[""]
  // not dynamic, but need to convert from string to int
  //parseInt(obj["unit-price"])
  return obj
}

function getIdFromUrl() {
  let path = window.location.pathname.split('/')
  return path[2]
}

function getNestedIdFromUrl() {
  let path = window.location.pathname.split('/')
  return path[4]
}
