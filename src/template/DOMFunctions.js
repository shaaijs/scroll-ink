import config from '../../shaai.config'
let d = window.document

export const appendToRoot = (nodes, rootId = config.root) => {
    let rootDiv = d.getElementById(rootId || 'shaai_root')
    nodes.forEach(node => {
        rootDiv.appendChild(node)
    });
}

export const flushRoot = (skipThese) => {
    let root = document.getElementById(config.root);
    let temp = []
    while (root.firstChild) {
        if(skipThese && skipThese.indexOf(root.firstChild.id) > -1)
            temp.push(root.removeChild(root.firstChild))
        else root.removeChild(root.firstChild);
    }

    temp.forEach(t => root.appendChild(t))
}