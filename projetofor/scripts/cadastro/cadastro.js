jQuery(function(){
	obj.acao();
});

var obj = {

	acao:function(){
		jQuery('#btnVoltar').click(function(){
			location.href="login.html";
		});
		
		jQuery('#btnSalvar').click(function(){
			var arrCampoObrigatorio = [];
			
			if(jQuery.trim(jQuery('#txtNome').val()) == '')
				arrCampoObrigatorio.push('Nome do Projeto');
				
			if(jQuery.trim(jQuery('#txtDescricao').val()) == '')
				arrCampoObrigatorio.push('Breve descrição');
				
			if(jQuery('#fileProjeto').val() == '')
				arrCampoObrigatorio.push('Foto do Projeto');
			
			if(arrCampoObrigatorio.length > 0)
                msgError(arrCampoObrigatorio.join(', ') + '.');
		});
		
		jQuery('#fileProjeto').change(function(event){
			var extesaoValida = ['jpg', 'jpeg', 'png'];
			if(jQuery.inArray(event.target.value.split('.')[1], extesaoValida)  == -1){
                jQuery('#fileProjeto').next().find(':text').val('');
                msgError('Formato de arquivo inválido');
			}else{
				var tmppath = URL.createObjectURL(event.target.files[0]);
				jQuery('#imgProjetos').attr("src",tmppath);
			}
		});
	}
};