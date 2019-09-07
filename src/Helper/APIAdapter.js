import axios from 'axios'

export default {
    post : (base_url, target, data, token) => {
        let requestToken = ''
        if (token != null){
            requestToken = token
        }
        return axios({
            method : 'post',
            url : `${base_url}/${target}`,
            headers : {'Authorization' : token},
            data : data, 
        })
    },   
    get : (base_url, target, token) => {
        let requestToken = ''
        if (token != null){
            requestToken = token
        }
        return axios({
            method : 'get',
            url : `${base_url}/${target}`,
            headers : {'Authorization' : token},
        })
    },
    put : (base_url, target, data, token) => {
        let requestToken = ''
        if (token != null){
            requestToken = token
        }
        return axios({
            method : 'put',
            url : `${base_url}/${target}`,
            headers : {'Authorization' : token},
            data : data
        })
    },
    destroy : (base_url, target, token) => {
        let requestToken = ''
        if (token != null){
            requestToken = token
        }
        return axios({
            method : 'delete',
            url : `${base_url}/${target}`,
            headers : {'Authorization' : token},
        })
    }
}