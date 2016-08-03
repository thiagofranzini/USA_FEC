function validarCelular(value) {
    var valido = true;
    value = value.replace("(", "");
    value = value.replace(")", "");
    value = value.replace("-", "");
    value = value.replace(" ", "").trim();
    if (value == '000000000') {
        valido = false;
    } else if (value == '0000000000') {
        valido = false;
    }
    if (["00", "01", "02", "03", , "04", , "05", , "06", , "07", , "08", "09", "10"].indexOf(value.substring(0, 2)) != -1) {
        valido = false;
    }
    if (value.length != 9) {
        valido = false;
    }
    if (["6", "7", "8", "9"].indexOf(value.substring(2, 3)) == -1) {
        valido = false;
    }

    return valido;
}


function exibirModal(texto, header, callback) {
    var html = '';

    html = '<div id="modalGeral" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static">';

    html += '<div class="modal-dialog">';
    html += '<div class="modal-content">';
    html += '<div class="modal-header">';
    //html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    html += '<h4 class="modal-title">' + header + '</h4>';
    html += '</div>';

    html += '<div class="modal-body">';
    html += texto;
    html += '</div>';

    html += '<div class="modal-footer">';
    html += '<button type="button" class="btn btn-danger" data-dismiss="modalGeral" id="btnFechar">Fechar</button>';
    html += '<button type="button" class="btn btn-success" id="btnOkModal">Ok</button>';
    html += '</div>';

    html += '</div> <!-- /.modal-content -->';
    html += '</div> <!-- /.modal-dialog -->';
    html += '</div> <!-- /.modal -->';

    if (jQuery('#modalGeral').length > 0) {
        jQuery('#modalGeral').modal('hide');
        jQuery('#modalGeral').remove();
    }

    jQuery('body').prepend(html);

    jQuery('#btnOkModal').click(function() {
        if (callback != undefined) {
            callback();
        }
    });

    jQuery('#btnFechar').click(function() {
        jQuery('#modalGeral').modal('hide');
    });

    jQuery('#modalGeral').modal('show');
}

function msgError(msg) {
    jQuery('#divModalErro').remove();

    var html = '<div id="divModalErro" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static">';
    html += '<div class="modal-dialog" style="width:50%;">';
    html += '<div class="alert alert-danger alert-dismissible text-center" role="alert">';
    html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true" onclick="esconderModalError();">&times;</span></button>';
    html += '<strong>Obrigatório: </strong>' + msg;
    html += '</div>';
    html += '</div>';
    html += '</div>';

    jQuery('body').append(html);
    jQuery('#divModalErro').modal('show');
}

function esconderModalError() {
    jQuery('#divModalErro').modal('hide');
}

function removerModalError() {
    jQuery('#divModalErro').remove();
}

function msgSuccess(msg, callback) {

    jQuery('#divModalSuccess').remove();

    var html = '<div id="divModalSuccess" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static">';
    html += '<div class="modal-dialog" style="width:50%;">';
    html += '<div class="alert alert-success alert-dismissible text-center" role="alert">';
    html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true" onclick="esconderModalSuccess(' + callback + ');">&times;</span></button>';
    html += '<strong>Sucesso! </strong>' + msg;
    html += '</div>';
    html += '</div>';
    html += '</div>';

    jQuery('body').append(html);
    jQuery('#divModalSuccess').modal('show');
}

function esconderModalSuccess(callback) {
    jQuery('#divModalSuccess').modal('hide');

    if (callback != undefined)
        callback();
}
