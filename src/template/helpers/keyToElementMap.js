import history from './../history'
import store from './../store'

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
                            if(store.getData('currentPath') !== `/post/${data._id}`) history().push(`/post/${data._id}`)
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
        case 'modified':
            return {
                tag: 'div',
                className: 'post-publishedDate',
                transform: (date) => {
                    return new Date(date).toDateString()
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