import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {PageHeader, Button} from 'antd';

export default function Navbar() {
  const history = useHistory()
  const location = useLocation()
  return location.pathname !== '/'
  ? <PageHeader className="site-page-header"
    extra={[
      <Button key="1" type="link" block onClick={() => history.push('/')}>Home</Button>,
      <Button key="2" type="link" block onClick={() => history.push('/posts/')}>Posts</Button>
    ]}
    onBack={() => window.history.back()} title="App" />

  : <PageHeader className="site-page-header"
    extra={[
      <Button key="1" type="link" block onClick={() => history.push('/')}>Home</Button>,
      <Button key="2" type="link" block onClick={() => history.push('/posts/')}>Posts</Button>
    ]}
    title="App" />
}
