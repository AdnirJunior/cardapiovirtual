function seupedido(){
    var ped01 = document.getElementById("ped01").value;
    var pedTot01 = document.getElementById("pedtot01").value;

    pedTot01 += ped01;

    alert(`Voce pediu ${pedTot01}`);

}