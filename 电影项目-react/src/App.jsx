import React from 'react';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

import {
    Layout,
    Menu
} from 'antd';

const {
    Header,
    Content,
    Footer
} = Layout;

import './css/app.scss';
import Home from './component/Home.jsx';
import Movie from './component/movie/Movie.jsx';
import About from './component/About.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // defaultSelectedKeys: ['home']
        }
    }

    /*componentWillMount() {
        var defaultSelectedKeys = window.location.hash.split('/')[1] === '' ? 'home' : window.location.hash.split('/')[1];
        this.setState({
            defaultSelectedKeys: [defaultSelectedKeys]
        });
    }*/

    render() {
        return <HashRouter>
            <Layout className="layout" style={{height: '100%'}}>
                <Header>
                    <div className="logo"></div>
                    <Menu
                    theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split('/')[1]]} style={{lineHeight: '64px'}}>
                        <Menu.Item key="home">
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="movie">
                            <Link to="/movie/in_theaters/1">电影</Link>                            
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">关于</Link>                            
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{flex: 1, background: '#fff'}}>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/movie" component={Movie}></Route>
                    <Route path="/about" component={About}></Route>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    ddm Design ©2020 Created by yk-ddm
                </Footer>
            </Layout>
        </HashRouter>;
    }
}