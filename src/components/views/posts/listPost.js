import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { Card, Row, Col, Button, Skeleton } from 'antd';
import {PlusCircleOutlined, EditOutlined, CloseCircleOutlined } from '@ant-design/icons';
import Confirm from './../../common/confirm';
import {getPosts, deletePost} from './../../../utils/api/posts';

const { Meta } = Card;

const ListPost = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
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
      <Row>
      {data.length > 0 ?
      data.map((post, i)=>(
        <Col span={6} key={i}>
        <Card style={{ width: 300 }}
        cover={<img alt="example" src={post.img}/>}
        actions={[
          <EditOutlined key="edit" onClick={()=>setVisible(!visible)} />,
          <Confirm tittle="¿Deseas eliminar esta publicación?" confirm={()=>deletePost(post._id)}>
            <CloseCircleOutlined key="delete" />
          </Confirm>
        ]}
        ><Meta title={post.tittle} description={post.description} /></Card>
      </Col>
      ))
      : <Skeleton/>}
      </Row>
    </div>
  );
};

export default ListPost;