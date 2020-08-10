import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Input, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {getBase64, beforeUpload} from './../../../utils/upload';
import {addPost} from './../../../utils/api/posts';

const CreatePost = () => {
  const [ values, setValues] = useState({tittle: '', description: '', author: '', category: '', img: ''});
  const [loading, setLoad] = useState(false)
  const history = useHistory();

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoad(true)
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl =>{
        setValues({...values, img: imageUrl});
        setLoad(false);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Avatar</div>
    </div>
  )

  return (
    <div className="form-post">
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {values.img ? <img src={values.img} alt="avatar" style={{ width: '100%' }} /> : uploadButton }
      </Upload>
      <Input placeholder="Título" onChange={(e)=>setValues({...values, tittle: e.target.value})} value={values.tittle} />
      <Input placeholder="Descripción" onChange={(e)=>setValues({...values, description: e.target.value})} value={values.description} />
      <Input placeholder="Autor" onChange={(e)=>setValues({...values, author: e.target.value})} value={values.author} />
      <Input placeholder="Categoría" onChange={(e)=>setValues({...values, category: e.target.value})} value={values.category} />
      <Button type="primary" onClick={()=>{addPost(values); history.push('/posts/');}}>Aceptar</Button>
    </div>
  );
};

export default CreatePost;