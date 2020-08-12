import axios from 'axios';
import {message} from 'antd';
import {URL_POST} from './../../constants';

export function addPost(data, id_category){
    if(id_category.length > 0){
        axios.post(URL_POST + id_category, data)
        .then(response=>{
            message.success("Publicación agregada!");
        })
        .catch(error=>message.error(error));
    }
    else {
        message.error("Agrega una categoría");
    }
}

export function deletePost(_id){
    axios.delete(URL_POST+_id)
    .then(()=>{
        message.success("Publicación eliminada!");
    })
    .catch(error=>message.error(error));
}

export async function getPosts(){
    let response = await axios.get(URL_POST)
    return response.status === 200 ? response.data : []
}

export async function getPost(_id){
    let response = await axios.get(URL_POST+_id)
    return response.data[0]
}