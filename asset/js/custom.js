$(document).ready(function() {
    var ielts = $(window);
    var page = $('html, body');
    $('select').niceSelect();

    // name next btn
    $('#nameNext').on('click',function(){
        $('.progress2').addClass('active');
        $('#formPageFormItem1').addClass('hide');
        $('#formPageFormItem2').addClass('showItem2');
    })
    // email next btn
    $('#EmailNext').on('click',function(){
        $('.progress3').addClass('active');
        $('#formPageFormItem2').removeClass('showItem2');
        $('#formPageFormItem3').addClass('showItem3');
    });

    // mobile input
   $('#PhoneNext').on('click',function(){
    $('.progress4').addClass('active');
    $('#formPageFormItem3').removeClass('showItem3');
    $('#formPageFormItem4').addClass('showItem4');
   })

   // check readio
   $('#gridRadios1,#gridRadios2,#gridRadios3,#gridRadios4').on('input', function() {
        $('#SubmitButton').addClass('showSubmit');
    });


    $('#PhoneEdit').on('click',function(){
       $('#phoneEditPopup').addClass('show');
        return false;
    })

    $('#phoneEditClose').on('click',function(){
        $('#phoneEditPopup').removeClass('show');
     })



});