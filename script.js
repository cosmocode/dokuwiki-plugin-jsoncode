/* DOKUWIKI:include_once jsonTree.js */

(function () {
    const codeblocks = document.querySelectorAll('pre.code.json');
    codeblocks.forEach((codeblock) => {
        const json = JSON.parse(codeblock.innerText);
        const viewer = document.createElement('div');
        jsonTree.create(json, viewer);

        codeblock.innerHTML = '';
        codeblock.style.whiteSpace = 'normal';
        codeblock.append(viewer);
    });
})();
