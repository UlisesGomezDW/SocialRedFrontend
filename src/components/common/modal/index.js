import React from 'react';
import { Button, Modal, Input } from 'antd';
import { useForm } from './../../../hooks/useForm';
import {addCategory} from './../../../utils/api/category';

export const AddCategory = ({visible, onVisible}) => {
  const [ formValues, handleInputChange ] = useForm({ name: '', description: ''});
  const { name, description } = formValues;  
  
  return(
    <Modal
        title="Agregar categoría"
        visible={visible}
        onCancel={onVisible}
        footer={[
            <Button key="back" onClick={onVisible}>Cancelar</Button>,
            <Button key="submit" type="primary" onClick={()=>addCategory(formValues)}>Agregar</Button>
        ]}
    >
        <Input type="text" name="name" value={name} placeholder="Nombre" onChange={handleInputChange}/>
        <Input type="text" name="description" value={description} placeholder="Descripción" onChange={handleInputChange}/>
    </Modal>
  );
}

export const UpdateCategory = ({visible, onVisible, values}) => {
  const [ formValues, handleInputChange ] = useForm(values);
  const { name, description } = formValues;
  return(
    <Modal
        title="Editar categoría"
        visible={visible}
        onCancel={onVisible}
        footer={[
            <Button key="back" onClick={onVisible}>Cancelar</Button>,
            <Button key="submit" type="primary" onClick={()=>console.log(formValues)}>Agregar</Button>
        ]}
    >
        <Input type="text" name="name" value={name} placeholder="Nombre" onChange={handleInputChange}/>
        <Input type="text" name="description" value={description} placeholder="Descripción" onChange={handleInputChange}/>
    </Modal>
  );
}


