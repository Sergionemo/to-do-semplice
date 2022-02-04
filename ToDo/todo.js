$(()=>{
    let compiti=[];
    $('#aggiungi').on('click', function(){
        let nuovoPunto =$('#puntoLista').val(); //controlla le parentesi????????????????????????????????????????
        if(nuovoPunto != ''){
        compiti.push(nuovoPunto);
        console.log(compiti);
        $('#puntoLista').val('');
        aggiungiLista();}
        else {
            alert('Non hai scritto nulla!');
        }
    })
    function aggiungiLista(){
        $('#lista').text('');
        for(i=0;i<compiti.length;i++){
            $('#lista').append(`<li class="list-group-item"> ${compiti[i]} <button type="button" id="cancella" class="${i}">X</button> </li>`);

        }
    }
    $('#lista').on('click', '#cancella', function () {
        $(this).closest('li').remove();
        var classe = $(this).attr("class");
        console.log(classe);
        compiti.splice(classe);
        console.log(compiti);
    });
});

