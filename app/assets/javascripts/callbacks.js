function itemSuccessCallback(result) {
  window.location = `/merchants/${result.attributes.merchant_id}`
  console.log(`Item #${result.id} created/updated successfully`)
}

function itemDeleteCallback() {
  location.reload()
  console.log('Item deleted successfully')
}

function failureCallback() {
  console.warn(`Unknown error occured after successful API call.`)
}


