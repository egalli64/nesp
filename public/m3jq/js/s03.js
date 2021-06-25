// when ready ...
$(() => {
    let btn = $('#hiding');
    btn.animate({opacity: 1}, 2000, () => {
        $('#target').text('!');
    });
    btn.on('click', () => btn.hide("slow")); 
});