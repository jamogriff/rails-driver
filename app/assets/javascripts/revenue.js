// format currency
function formatCurrency(number) {
  let currency = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' }).format(number)
  return currency
}

// pretty sure object is a hash in JS, so this may be confusing
function revenueListItem(object) {
  let week = object.attributes.week
  let revenue = object.attributes.revenue
  let revenue_element = `
    <li><b>${week}:</b> ${formatCurrency(revenue)}</li>
  `
  return revenue_element
}

