import React from 'react';
import { Popconfirm } from 'antd';

export default function Confirm({children, confirm, tittle}) {
  return (
    <Popconfirm
        title={tittle}
        onConfirm={confirm}
        okText="Aceptar"
        cancelText="Cancelar"
    >
    {children}
    </Popconfirm>
  );
};
