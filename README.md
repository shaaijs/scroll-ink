![Scroll](https://i.imgur.com/xhwr9Il.png)
# Ink

#### Scrolls
Scrolls _(aka templates)_ are a pre-defined way of displaying data from Shaai.

#### Usage

```js
import ScrollInk from '@shaai/scroll-ink'
import config from './shaai.config'

const s = new ScrollInk(config)

// define your own templates
const templates = [/* template array discussed below */]

const init = () => {
    // if no templates are sent, Ink uses its default templates
    s.load(templates)
}

// call init whenever ready
init()
```
#### Templates
A template object can look as below
```js
const templates = [
    {
        path: '/',
        name: 'Posts',
        template: (data) => s.list(data, { minimiseContent: true, viewFilter: ['title', 'content', 'publishData'] }),
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
```
TODO

#### Development
Run `npm run start:dev` for starting the Webpack dev server.
