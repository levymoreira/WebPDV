/**
 * 
 * Levy Moreira - levymoreira.ce@gmail.com
 * 
 */

function alertMsg(msg){
    if(msg != ''){
        alert(msg);
    }                    
}
function cancelaCupom(){
    alertMsg(appletECF.cancelaCupom());
}
function verificarStatus(){
    alertMsg(appletECF.verificarStatus());
}
function vendeItem(){           
    var codigo = document.getElementById('formPDV:tabViewPDV:inputCodigo').value;
    var descricao = document.getElementById('formPDV:tabViewPDV:inputDescricao').value;
    var aliquota = document.getElementById('formPDV:tabViewPDV:inputAliquota').value;
    var quantidade = document.getElementById('formPDV:tabViewPDV:inputQuantidade').value;
    var valorUnitario = document.getElementById('formPDV:tabViewPDV:inputValorUnitario').value;
    var decontoPercentual = document.getElementById('formPDV:tabViewPDV:inputDescontoPercentual').value;
    var unidade = document.getElementById('formPDV:tabViewPDV:inputUnidade').value;
    var tipoDescontoAcrescimo = document.getElementById('formPDV:tabViewPDV:inputTipoDescontoAcrescimo').value;
    var descontoAcrescimo = document.getElementById('formPDV:tabViewPDV:inputDescontoAcrescimo').value;
    var codigoDepartamento = document.getElementById('formPDV:tabViewPDV:inputCodigoDepartamento').value;
    alertMsg(appletECF.vendeItem(codigo, descricao, aliquota, quantidade, valorUnitario, decontoPercentual, unidade, tipoDescontoAcrescimo, descontoAcrescimo, codigoDepartamento));
}
function subtotalizaCupom(){
    alertMsg(appletECF.subtotalizaCupom());
}
function efetuaPagamento(){
    alertMsg(appletECF.efetuaPagamento());
}
function fechaCupom(){                    
    alertMsg(appletECF.fechaCupom());                
    //var xml = appletECF.getXML();
    //if(xml!=''){
        //se houver conexao envia para o servidor                    
        //senao salva local 
   // }
}
function ativar(){
    var modelo = document.getElementById('formPDV:tabViewPDV:inputModelo').value;
    var porta = document.getElementById('formPDV:tabViewPDV:inputPorta').value;
    var velocidade = document.getElementById('formPDV:tabViewPDV:inputVelocidade').value;
    alertMsg(appletECF.ativar(modelo, porta, velocidade));
}