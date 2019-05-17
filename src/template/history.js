import { createBrowserHistory } from 'history'
let history
export default (() => {
    if(history) return history
    else {
        history = createBrowserHistory()
        return history
    }
})()