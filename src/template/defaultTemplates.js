import { list, one } from './NodeGenerators'
export default [
    {
        path: '/',
        name: 'Posts',
        template: (data) => list(data, { minimiseContent: true, viewFilter: ['title', 'modified', 'subtitle'] }),
        fetch: (shaai, store, params) => {
            return new Promise(res => {
                if(store.getData('posts')) {
                    res(store.getData('posts'))
                }
                shaai.getBlogs().then(data => {
                    store.setData({ posts: data.items })
                    res(data.items)
                })
            })
        }
    },
    {
        path: '/post/:id',
        name: 'Single Post',
        template: (data) => one(data, { minimiseContent: false, viewFilter: ['title', 'content', 'publishData'] }),
        fetch: (shaai, store, params) => {
            if(store.getData('posts')) {
                return new Promise(res => res(store.getData('posts').filter(p => p._id === params[1])))
            } else return new Promise(res => shaai.getBlogs().then(data => res(data.items.filter(p => p._id === params[1]))))
        }
    },
    {
        path: '/about',
        name: 'About',
        template: () => {
            let html = `
                <div>
                    <h4 class="about-heading">About me</h4>
                    <p class="about-content">Hello there! I am <a href="https://github.com/mohtik05">@mohitk05</a></p>
                </div>
            `
            let about = document.createElement('div')
            about.className = 'about'
            about.innerHTML = html

            return about
        }
    }
]