import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { List, Avatar, Button, Skeleton } from 'antd';
import {PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import Confirm from './../../common/confirm';
import {getPosts, deletePost} from './../../../utils/api/posts';

const ListPost = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function resolvePromise() {
      let response = await getPosts();
      setData(response)
    };
    resolvePromise();
  }, [data]);

  return (
    <div className="home">
      <Button type="primary" icon={<PlusCircleOutlined />} shape="round" onClick={()=>history.push('/new-post/')}>Agregar</Button>
      {data.length > 0 ?
      <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={item => (
        <List.Item
          key={item._id}
          actions={[
            <Confirm tittle="¿Deseas eliminar esta Publicación?" confirm={()=>deletePost(item._id)}>
              <Button type="danger" icon={<CloseCircleOutlined />} shape="round" key="list-vertical-star-o">Borrar</Button>
            </Confirm>
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src={item.img}
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src="https://img5.goodfon.com/wallpaper/nbig/4/42/colorful-lines-figures-fon-linii-figury-krasochnyi-fon.jpg" />}
            title={<a href="https://ant.design">{item.tittle}</a>}
            description={'Autor: '+item.author}
          />
          {item.description}
        </List.Item>
      )}
    />
      : <Skeleton/>}
    </div>
  );
};

export default ListPost;