import React, {useState, useEffect} from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import Confirm from './../../common/confirm';
import {AddCategory, UpdateCategory} from './../../common/modal';
import {getCategories, deleteCategory} from './../../../utils/api/category';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState({visible: false, values: {}});
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function resolvePromise() {
      let response = await getCategories();
      setData(response)
    };
    resolvePromise();
  }, [data]);

  return (
    <div className="home">
      <Button type="primary" onClick={()=>setVisible(!visible)} icon={<PlusCircleOutlined />} shape="round">Agregar</Button>
      {data.length > 0 ?
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
        <List.Item actions={[<Button type="link" onClick={()=>setVisibleUpdate({visible: !visibleUpdate.visible, values: item})} key="list-loadmore-edit">editar</Button>, 
        <Confirm tittle="¿Deseas eliminar esta categoría?" confirm={()=>deleteCategory(item._id)}>
          <Button type="link" key="list-loadmore-delete">eliminar</Button>
        </Confirm>]}>
          <List.Item.Meta
            avatar={<Avatar src="https://img5.goodfon.com/wallpaper/nbig/4/42/colorful-lines-figures-fon-linii-figury-krasochnyi-fon.jpg" />}
            title={<a href="https://ant.design">{item.name}</a>}
            description={item.description}
          />
        </List.Item>
        )}
      />
      : <Skeleton/>}
      <AddCategory visible={visible} onVisible={()=>setVisible(!visible)}/>
      <UpdateCategory visible={visibleUpdate.visible} values={visibleUpdate.values} onVisible={()=>setVisibleUpdate({...visibleUpdate, visible: !visibleUpdate.visible})}/>
    </div>
  );
};

export default Home;