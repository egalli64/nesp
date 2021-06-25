const colors = [["white", "black"], ["black", "white"], ["yellow", "blue"], ["blue", "yellow"]];

function setText(pos) {
    $("#back").text(colors[pos][0]);
    $("#fore").text(colors[pos][1]);
}

// when ready ...
$(() => {
    let cur = 0;
    setText(cur);

    $("#change").on('click', () => {
        cur = cur < colors.length - 1 ? cur + 1 : 0;
        $("#text").css("background-color", colors[cur][0]).css("color", colors[cur][1]);
        setText(cur);
    });
});