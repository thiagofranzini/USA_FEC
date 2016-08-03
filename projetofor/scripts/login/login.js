jQuery(function() {
    objLogin.acao();
});


var objLogin = {

    validarCampoObrigatorio: function() {
        var jqValidar = jQuery('.jq-validar');
        var campoObrigatorio = [];
        var validacaoCampo = []
        var msg = [];
        var valido = true;

        if (jQuery.trim(jQuery('#txtNome').val()) == "")
            campoObrigatorio.push('Nome');

        if (jQuery.trim(jQuery('#txtIdade').val()) == "")
            campoObrigatorio.push('Idade');

        if (jQuery('[name="sexo"]').filter(':checked').length == 0)
            campoObrigatorio.push('Sexo');

        if (jQuery('#txtWhats').is(':visible')) {

            if (jQuery.trim(jQuery('#txtWhats').val()) == "")
                campoObrigatorio.push('WhatsApp');

            if (jQuery.trim(jQuery('#txtWhats').val()) != "" && !validarCelular(jQuery('#txtWhats').val()))
                validacaoCampo.push('Informe um celular válido');
        }

        if (campoObrigatorio.length > 0) {
            msg.push(campoObrigatorio.join(', ') + '.');
        }

        if (validacaoCampo.length > 0) {
            msg.push(validacaoCampo.join('\n'));
        }

        if (msg.length > 0) {
            msgError(msg.join('\n'));
            valido = false;
        }

        return valido;

    },
    acao: function() {
        jQuery('#txtWhats').mask('(00) 00000-0000');
        
        jQuery('#btnEntrar').click(function() {
            if (objLogin.validarCampoObrigatorio())
                window.location.href = 'projetos.html';
            else
                console.log('erro');
        });

        jQuery('[name="sexo"]').change(function() {
            jQuery('#txtWhats').val('');

            if (this.value == 'M')
                jQuery('#divWhats').hide();
            else
                jQuery('#divWhats').show();
        });

        jQuery('#btnInserirProjeto').click(function() {
            //var login = window.prompt("Usuario");
            exibirModal('<input type="password" id="txtAutorizacao" class="form-control" placeholder="Password"/>', 'Solicitação', function() {
                if (jQuery('#txtAutorizacao').val() == 'admfec') 
                    location.href = "cadastroProjetos.html";
                else 
                    msgError('Senha incorreta');
            });

        });
    }

};