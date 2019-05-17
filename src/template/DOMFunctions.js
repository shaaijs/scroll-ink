import config from '../../shaai.config'
let d = window.document

export const appendToRoot = (nodes, rootId = config.root) => {
    let rootDiv = d.getElementById(rootId || 'shaai_root')
    nodes.forEach(node => {
        rootDiv.appendChild(node)
    });
}

export const flushRoot = () => {
    let root = document.getElementById(config.root);
    let title
    while (root.firstChild) {
        if(root.firstChild.id === 'blogTitle')
            title = root.removeChild(root.firstChild);
        else root.removeChild(root.firstChild);
    }

    root.appendChild(title)
}