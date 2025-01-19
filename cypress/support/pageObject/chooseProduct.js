class chooseProduct{
    // Selector 
    dashboard=".base"
    categoryMenu ='#ui-id-4 > :nth-child(2)'
    subcategory="dd > .items > :nth-child(1) > a"
    productLink ="https://magento.softwaretestingboard.com/breathe-easy-tank.html"

    btnAddToCart ="#product-addtocart-button"
    sizeOption = "#option-label-size-143-item-167";
    colorOption = "#option-label-color-93-item-57";
    quantityField = ".input-text.qty";
    cartButton = ".showcart";
    removeItemButton = ":nth-child(4) > .item-actions > td > .actions-toolbar > .action-delete";
    updateButton = ".update";
    editItem =":nth-child(4) > .item-actions > td > .actions-toolbar > .action-edit"
    editCart=":nth-child(7) > .secondary > .action > span"
    btnUpCart="#product-updatecart-button >span"
    checkOutCartURL="https://magento.softwaretestingboard.com/checkout/cart/"
    }
export default new chooseProduct();
