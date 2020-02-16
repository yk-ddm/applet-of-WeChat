import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import {
    Layout,
    Menu,
    Icon
} from 'antd';

const {
    Content,
    Sider
} = Layout;

import MovieList from './MovieList.jsx';
import MovieDetail from './MovieDetail.jsx';

export default function Movie(props) {
    return <Layout style={{height: '100%'}}>
        <Sider width={200} style={{backgroundColor: '#fff'}}>
            <Menu mode="inline" defaultSelectedKeys={[window.location.hash.split('/')[2]]} style={{borderRight: 0}}>
                <Menu.Item key="in_theaters">
                    <Link to="/movie/in_theaters/1">正在热映</Link>
                </Menu.Item>
                <Menu.Item key="coming_soon">
                    <Link to="/movie/coming_soon/1">即将上映</Link>                    
                </Menu.Item>
                <Menu.Item key="Top250">
                    <Link to="/movie/Top250/1">Top250</Link>                    
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout style={{paddingLeft: 1}}>
            <Content style={{minHeight: 280, margin: 0, padding: 10, backgroundColor: '#fff'}}>
                <Switch>
                    <Route path="/movie/detail/:id" component={MovieDetail}></Route>
                    <Route path="/movie/:type/:page" component={MovieList}></Route>
                </Switch>
            </Content>
        </Layout>
    </Layout>;
}