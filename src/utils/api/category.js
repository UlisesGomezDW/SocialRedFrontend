import axios from 'axios';
import {message} from 'antd';
import {URL_CATEGORY} from './../../constants';

export function addCategory(data){
    axios.post(URL_CATEGORY, data)
    .then(response=>{
        message.success("Categoría agregada!");
    })
    .catch(error=>message.error(error));
}

export function updateCategory(data, _id){
    if(_id.length>0){
        axios.put(URL_CATEGORY+_id, data)
        .then(response=>{
            message.success("Categoría editada!");
        })
        .catch(error=>message.error(error));
    }
    else{
        message.error("Error!");
    }
}

export function deleteCategory(_id){
    axios.delete(URL_CATEGORY+_id)
    .then(response=>{
        message.success("Categoría eliminada!");
    })
    .catch(error=>message.error(error));
}

export async function getCategories(){
    let response = await axios.get(URL_CATEGORY)
    return response.status === 200 ? response.data : []
}

export async function getCategory(_id){
    let response = await axios.get(URL_CATEGORY+_id)
    return response.data[0]
}
