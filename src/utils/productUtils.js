import { API_BASE_URL_CUSTOM } from '../common/globals.jsx';

const ProductUtils = {
    getProduct : function(){
        let apiUrl = API_BASE_URL_CUSTOM ;
        return fetch(apiUrl,{
            method:'GET',
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
                'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization',
                "Content-Type":"application/json"
            },
        }).then((response) => response.json()).then((res) => {
            console.log("res in food.."+JSON.stringify(res))
            return res;
        });
},
}

module.exports = ProductUtils;