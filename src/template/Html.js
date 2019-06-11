class Html {
    set(html, cb) {
        this.currentHtml = html
        let temp = document.createElement('div')
        temp.appendChild(this.currentHtml)
        cb(html, temp.innerHTML)
    }

    get() {
        return this.currentHtml
    }
}

let html

export default (() => {
    if(html) return html
    else {
        html = new Html()
        return html
    }
})()