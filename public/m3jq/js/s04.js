$(() => {
    $('#info').on('click', () => {
        let url = document.getElementById('url').value;
        let target = document.getElementById('target');
    
        $.getJSON(url, json => {
            target.value += json.name + '\n';
            target.value += json.job.title + '\n';
            target.value += json.job.languages + '\n';
        }).fail(
            jqxhr => {
                target.value += "Something bad happened, please check browser log for more details\n";
                if (jqxhr.status == 0) {
                    target.value += "Do you have a CORS problem?\n"
                } else if (jqxhr.readyState == 4) {
                    target.value += "[" + jqxhr.status + "]\n"
                }
            }
        );    
    });
});