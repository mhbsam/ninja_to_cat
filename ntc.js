$(document).ready(function(){
    //
    // $('img').click(function(){
    //     $(this).hide();
    // });
    var counter=1;
    $('img').click(function(){

        if (counter % 2 !=0){
            $(this).attr('src',$(this).attr('data-alt-src'));
            counter = counter + 1;

            console.log(counter);
        }

        else {
            $(this).attr('src',$(this).attr('src1'));
            counter--;
            console.log(counter);
        }

    });
    $('button').click(function(){
        location.reload();
    })
});
