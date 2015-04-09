$(document).ready(function () {
    //your jquery code goes here
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });
});