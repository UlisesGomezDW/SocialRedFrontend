import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Input, Upload, Select } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {getBase64, beforeUpload} from './../../../utils/upload';
import {addPost} from './../../../utils/api/posts';
import {getCategories} from './../../../utils/api/category';

const { Option } = Select;

const CreatePost = () => {
  const [values, setValues] = useState({tittle: '', description: '', author: '', img: ''});
  const [category, setCategory] = useState('');
  const [loading, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(()=>{
    async function resolvePromise() {
      let response = await getCategories();
      setData(response)
    };
    resolvePromise();
  }, [data]);

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoad(true)
      return;
    };
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl =>{
        setValues({...values, img: imageUrl});
        setLoad(false);
      });
    };
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Imagen</div>
    </div>
  );

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

      <Select defaultValue="Categoría" style={{ width: '40vw' }} onChange={value=>setCategory(value)}>
        {data.length > 0 ?
          data.map(category=>(
            <Option value={category._id} key={category._id}>{category.name}</Option>
          ))
        : null}
      </Select>

      <Button type="primary" onClick={()=>{addPost(values, category); history.push('/posts/');}}>Aceptar</Button>
    </div>
  );
};

export default CreatePost;