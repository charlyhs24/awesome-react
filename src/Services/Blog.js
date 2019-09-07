import ApiAdapter from '../Helper/APIAdapter'
import config from './congfig'
export default {
    postBlog : (data) => {
        const target = 'tutorial'
        return ApiAdapter.post(config.BASE_URL, target, data, config.TOKEN)
    },
    getBlog : () => {
        const target = 'tutorial'
        return ApiAdapter.get(config.BASE_URL, target, null)
    },
    updateBlog : (data, id) => {
        const target = `tutorial/${id}`
        return ApiAdapter.get(config.BASE_URL, target, data, config.TOKEN)
    },
    deleteBlog : (data, id) => {
        const target = `tutorial/${id}`
        return ApiAdapter.destroy(config.BASE_URL, target, config.TOKEN)
    }
}