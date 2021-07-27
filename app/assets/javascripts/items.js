function itemCard(item) {
  let id = item.id
  let name = item.attributes.name
  let description = item.attributes.description
  let unit_price = item.attributes.unit_price
  let card = `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title"><a href='/items/${id}'>${name}</a></h3>
        <p>Price: ${unit_price}</p>
        <p class="card-text">${description}</p>
      </div>
    </div>
  `
  return card
}

function itemMerchantCard(item) {
  let id = item.id
  let name = item.attributes.name
  let description = item.attributes.description
  let unit_price = item.attributes.unit_price
  let merchant_id = item.attributes.merchant_id
  let card = `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title"><a href='/items/${id}'>${name}</a></h3>
	<a href='/merchants/${merchant_id}/items/${id}/edit'>Update</a>
	<button id='delete-${id}' type='button'>Delete</button>
        <p>Price: ${unit_price}</p>
        <p class="card-text">${description}</p>
      </div>
      <script>
        deleteItemDestroyHandler(${id}, $('#delete-${id}'))
      </script>
    </div>
  `
  return card
}

function loadAllItems(container) {
  let uri = "/api/v1/items"
  loadMultipleResources(uri, function(item){
    card = itemCard(item)
    container.append(card)
  })
}

function loadMerchantItems(merchant_id, container) {
  let uri = `/api/v1/merchants/${merchant_id}/items`
  loadMultipleResources(uri, function(item){
    card = itemMerchantCard(item)
    container.append(card)
    $('#delete').click(function(event){
      event.preventDefault()
      deleteItem(item.id)
    })
  })
}

function loadItem(item_id, itemContainer) {
  let uri = `/api/v1/items/${item_id}`
  loadResource(uri, function(item){
    card = itemCard(item)
    itemContainer.append(card)
  })
}

function addItemCreateHandler(button, input) {
  button.click(function(event){
    event.preventDefault()
    var data = createObjectFromInput(input)
    uri = '/api/v1/items'
    createResource(uri, data, itemSuccessCallback)
  })
}

function editItemUpdateHandler(item_id, button, input) {
  button.click(function(event){
    event.preventDefault()
    var data = createObjectFromInput(input)
    uri = `/api/v1/items/${item_id}`
    updateResource(uri, data, itemSuccessCallback)
  })
}

function deleteItemDestroyHandler(item_id, button) {
  button.click(function(event) {
    event.preventDefault()
    check = confirm("Are you sure you want to delete this item?")
    if (check == true) {
      let uri = `/api/v1/items/${item_id}`
      destroyResource(uri, itemDeleteCallback)
    }
  })
}
