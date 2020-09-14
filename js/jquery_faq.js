$(document).ready(function () {
    const defList = $('dt');
    defList.click(function(){
        $(this).css({'background-color':'yellow','color':'black'});
    })
    $( "<div class='badge badge-pill badge-info showDD'>See Info</div>" ).insertBefore( $( "dd" ) );
    $(document).on('click','.showDD', function(){
        $(this).html( $(this).html() === 'See Info' ? 'Hide Info':'See Info');
        $(this).next().toggleClass('invisible');
    })

    $( "#lastLi").click(function () {
        $( "ul").each(function () {
            $(this).children().last().toggleClass('bg-warning');
        })
    })

    $( "h3" ).click(function () {
        $(this).next().toggleClass("font-weight-bold");
        $(this).next().slideToggle();
    })

    $( "li" ).click(function () {
        $(this).parent().children().first().toggleClass("text-primary")
    })

    $('.closeDiv').click(function () {
        $(this).parent().hide().toggleClass('d-flex');
    })

    $('h3').next().hide();
    
    setTimeout(()=>{
        $('#myModal').modal('toggle');
    },8000)

    // BONUS PICTURE FRAMES
    $('#frame1, #frame2, #frame3').click(function () { swapImage(this) });

    function swapImage(frame) {
        let idCheck = frame.id;
        if( idCheck === 'frame2'){
            if(Math.round(Math.random()) > 0) idCheck = 'frame3';
        }
        let otherImg = (idCheck === 'frame3') ?
            $(frame).parent().prev().children().first().children():
            $(frame).parent().next().children().first().children();
        let otherImgSrc = otherImg.attr("src");
        let thisImg = $(frame).parent().children().first().children();
        let thisImgSrc = thisImg.attr("src");

        thisImg.attr("src", otherImgSrc);
        otherImg.attr("src", thisImgSrc);
    }
})