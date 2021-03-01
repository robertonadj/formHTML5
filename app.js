
// ação para salvar o formulário em navegadores mais antigos
(function() {
    var init = function() {
    var orderForm = document.forms.order, 
    saveBtn = document.getElementById('saveOrder'),
    saveBtnClicked = false;

    var saveForm = function() {
        
        // quando os usuários clicarem no save, verifique se seus navegadores dão suporte ao atributo formaction.
        if(!('formAction' in document.createElement('input'))) {

            // se o navegador não ser suporte a formaction, configure manualmente o atributo action do form usando o método setAttribute.
            var formAction = saveBtn.getAttribute('formaction');
            orderForm.setAttribute('action', formAction);
        }
        
        saveBtnClicked = true;
    };
    
    saveBtn.addEventListener('click', saveForm, false);

    // função para cálculo de valores totais.
    var qtyFields = orderForm.quantity,
    totalFields = document.getElementsByClassName('item_total'),
    orderTotalField = document.getElementById('order_total');

    var formatMoney = function(value) {
        return value.toString().replace(/\B(?=(\d{3}) + (?!\d))/g, ",");
    }

    var calculateTotals = function() {
        var i = 0,
        ln = qtyFields.length,
        itemQty = 0,
        itemPrice = 0.00,
        itemTotal = 0.00,
        itemTotalMoney = '$0.00',
        orderTotal = 0.00,
        orderTotalMoney = '$0.00';

        for(; i<ln; i++) {
            if(!!qtyFields[i].valueAsNumber) {
                itemQty = qtyFields[i].valueAsNumber || 0;
            } else {
                itemQty = parseFloat(qtyFields[i].value) || 0;
            }
    }
};

calculateTotals();

var qtyListeners = function() {
    var i = 0,
    ln = qtyFields.length;

    for(; i<ln; i++) {
        qtyFields[i].addEventListener('input', calculateTotals, false);
        qtyFields[i].addEventListener('keyup', calculateTotals, false);
    }
};

qtyListeners();

}

window.addEventListener('load', init, false);

})();