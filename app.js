
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
};

window.addEventListener('load', init, false);

})();