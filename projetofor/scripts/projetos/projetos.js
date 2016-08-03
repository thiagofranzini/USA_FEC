var objProjeto = {

    avaliar: function(id) {

        var html = '<div class="estrelas">';
        html += '<input type="radio" id="cm_star-empty" name="fb" value="" checked/>';
        html += '<label for="cm_star-1"><i class="fa"></i></label>';
        html += '<input type="radio" id="cm_star-1" name="fb" value="1" />';
        html += '<label for="cm_star-2"><i class="fa"></i></label>';
        html += '<input type="radio" id="cm_star-2" name="fb" value="2" />';
        html += '<label for="cm_star-3"><i class="fa"></i></label>';
        html += '<input type="radio" id="cm_star-3" name="fb" value="3" />';
        html += '<label for="cm_star-4"><i class="fa"></i></label>';
        html += '<input type="radio" id="cm_star-4" name="fb" value="4" />';
        html += '<label for="cm_star-5"><i class="fa"></i></label>';
        html += '<input type="radio" id="cm_star-5" name="fb" value="5" />';
        html += ' </div>';

        exibirModal(html, 'Avaliação', function() {
            if (jQuery('[name="fb"]').filter(':checked').attr('id') != 'cm_star-empty') {
                msgSuccess('Operação realizada com sucesso.', function() { jQuery('#modalGeral').modal('hide'); });
            } else {
                msgError('Selecione uma nota!');
            }
        });

    }

}