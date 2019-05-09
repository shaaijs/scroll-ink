import { list } from './NodeGenerators'
import shaai from './../../shaai'

export default (template) => {
    //parse template and return corresponding structure
    return shaai.getAll().then(data => {
        return [list(data)]
    })
}