/* DOKUWIKI:include_once jsonTree.js */

(function () {
    const codeblocks = document.querySelectorAll('pre.code:not(.file).json');
    codeblocks.forEach((codeblock) => {
        try {
            const json = JSON.parse(codeblock.innerText);
            const viewer = document.createElement('div');
            jsonTree.create(json, viewer);
            codeblock.innerHTML = '';
            codeblock.style.whiteSpace = 'normal';
            codeblock.append(viewer);
        } catch (e) {
            const err = document.createElement('div');
            err.innerText = e.message;
            err.className = 'error';
            codeblock.append(err);
        }
    });
})();
