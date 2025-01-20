class Checkout{
    companyField = '[name="company"]'
    addressField = 'fieldset.field.street [name="street[0]"]'
    cityField = '[name="city"]'
    stateField = '[name="region_id"]'
    zipField = '[name="postcode"]'
    countryField = '[name="country_id"]'
    phoneField = '[name="telephone"]'
    shippingField = 'tr.row input[type="radio"][value="tablerate_bestway"]'
    flatShipField = 'tr.row input[type="radio"][value="flatrate_flatrate"]'
    nextBtn = 'Next'
    orderBtn = 'Place Order'
    shipBtn = 'Ship here'
    successUrl = '/checkout/onepage/success/'
    addressEmptyMsg = 'This is a required field.'

}

export default new Checkout()