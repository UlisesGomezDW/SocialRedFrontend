import axios from 'axios';
import {message} from 'antd';
import {URL_POST} from './../../constants';

export function addPost(data){
    axios.post(URL_POST, data)
    .then(response=>{
        message.success("Publicación agregada!");
    })
    .catch(error=>message.error(error));
}

export function updatePost(data, _id){
    axios.post(URL_POST+_id, data)
    .then(response=>{
        message.success("Publicación actualizada!");
    })
    .catch(error=>message.error(error));
}

export function deletePost(_id){
    axios.post(URL_POST+_id)
    .then(response=>{
        message.success("Publicación eliminada!");
    })
    .catch(error=>message.error(error));
}

export async function getPosts(){
    let response = await axios.get(URL_POST)
    return response.status === 200 ? response.data : []
}

export async function getPost(){
    let response = await axios.get(URL_POST)
    return response.data[0]
}