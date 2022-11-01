
//предварительно объявим в файле "scripts.js", что весь код написанный в нем должен исполняться после загрузки страницы.
$(function () {
    $('#callback-button').click(function () {
      console.log('Клик!');
    })
  });


  //добавим класс "modal_active" нашему модальному окну, а при клике на кнопку с крестиком удалим его.
  $(function () {
    $('#callback-button').click(function () {
      $('.modal').addClass('modal_active');
    });
   
    $('.modal__close-button').click(function () {
      $('.modal').removeClass('modal_active');
    });
  });

  // Закрытие модального окна при клике вне его контентной области
 $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
    }
  });

 //при открытии модального окна, запретим прокрутку у тега "body" путем добавления класса "hidden"
 //При этом, не забывайте удалять его при закрытии модального окна. В целом все это выглядит так. 	
 $(function () {
    $('#callback-button').click(function () {
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
   
    $('.modal__close-button').click(function () {
      $('.modal').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
   
    $('.modal').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });