import history from './../history'

export default (key) => {
    switch(key) {
        case 'title':
            return {
                tag: 'h1',
                className: 'post-title',
                events: [
                    {
                        name: 'click', 
                        handler: (e, data) => {
                            console.log(data)
                            history.push(`/post/${data.guid.split('/p/')[1]}`)
                            window.scrollTo(0, 0)
                        }
                    }
                ]
            }
        case 'subtitle':
            return {
                tag: 'p',
                className: 'post-subtitle'
            }
        case 'content':
            return {
                tag: 'div',
                className: 'post-content'
            }
        case 'publishData':
        case 'publishedDate':
            return {
                tag: 'div',
                className: 'post-publishedDate',
                transform: (date) => {
                    return date
                }
            }
        case 'link':
            return {
                tag: 'a',
                className: 'post-a-link'
            }
        case 'image':
            return {
                tag: 'img',
                className: 'post-img'
            }
        default:
            return {
                tag: 'div'
            }
    }
}