class Html {
    set(html, cb) {
        this.currentHtml = html
        cb(html)
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