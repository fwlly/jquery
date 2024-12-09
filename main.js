$(document).ready(function() {
    
    $('#form-tarefa').submit(function(event) {
      event.preventDefault(); // 
  
  
      var tarefa = $('#nome-tarefa').val().trim();
  

      if (tarefa !== '') {
        var novaTarefa = $('<li></li>').text(tarefa);
 
        $('#lista-tarefas').append(novaTarefa);
  
        $('#nome-tarefa').val('');
      }
    });
  
   
    $('#lista-tarefas').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  
