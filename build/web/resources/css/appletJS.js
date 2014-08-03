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
    alertMsg(appletECF.vendeItem());
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
    alertMsg(appletECF.ativar());
}
function appletLoaded(){
    document.getElementById('formVenda:panelErroApplet').style.display= 'none';
}
