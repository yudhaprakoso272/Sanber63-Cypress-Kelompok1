class AddToCart {
    searchField = "#search"
    productName = 'Fusion Backpack'
    productUrl = "https://magento.softwaretestingboard.com/tristan-endurance-tank.html"
    
    btnAddToCart = "#product-addtocart-button"
    itemSize = "#option-label-size-143-item-169"
    itemColor = "#option-label-color-93-item-59"
    btnCart = ".counter-number"
    btnCart2 = ".showcart"
    qtyField = "#qty"
    btnRemoveItem = ".product > .secondary > .action"
    btnConfirmRemove = "OK"
    btnProceedCheckout = "#top-cart-btn-checkout"
  
    cartInfo = ".block-minicart"
    addMsg = "You added Tristan Endurance Tank to your shopping cart."
    removeMsg = "You have no items in your shopping cart."
    invalidQtyMsg = "Please enter a quantity greater than 0."
    urlCheckout = "/checkout/#shipping"
    checkoutTitle = "Shipping Address"
  }

  export default new AddToCart()