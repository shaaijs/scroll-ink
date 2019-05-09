import template from './template'
import './style.css'

console.log('Hello, Shaai!')

const init = () => {
    let root = document.createElement('div')
    root.id = 'shaai_root'
    document.body.appendChild(root)

    template().then(nodes => {
        nodes.forEach(node => {
            document.getElementById('shaai_root').appendChild(node)
        });
    })
}

init()

