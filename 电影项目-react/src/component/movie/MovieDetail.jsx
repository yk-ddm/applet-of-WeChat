import React from 'react';
import { Button, Spin, Alert, Icon } from 'antd'

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {
                title: '正义联盟',
                images: {
                    large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504027804.webp"
                },
                summary: "超人离去，举世陷入哀悼之中。可是世界并未就此和平，恶势力蠢蠢欲动，犯罪气焰重新抬头。更为糟糕的是，来自远古的可怕威胁正渐渐逼近。在很久很久以前，亚特兰蒂斯人、亚马逊人和神族联合对抗邪恶的荒原狼。历经艰苦的斗争，荒原狼最终战败，被迫流放，而他留在地球上的三个盒子则分别由亚特兰蒂斯人、亚马逊人和普通人类看管。如今荒原狼卷土重来，地球被邪恶的阴影笼罩。值此危急关头，神奇女侠戴安娜（盖尔·加朵 Gal Gadot 饰）、蝙蝠侠布鲁斯·韦恩（本·阿弗莱克 Ben Affleck 饰）、海王（杰森·莫玛 Jason Momoa 饰）、闪电侠（埃兹拉·米勒 Ezra Miller 饰）、钢骨维克多·斯通（雷·费舍尔 Ray Fisher 饰）等五名正义战士走到一起。"
            },
            isloading: false
        }
    }
    render() {
        return <div>
            <Button type="primary" onClick={this.goBack}>
                <Icon type="left" />返回电影列表页面
            </Button>
            { this.renderInfo() }
        </div>;
    }

    goBack = () => {
        this.props.history.go(-1);
    }

    renderInfo = () => {
        if (this.state.isloading) {
            return <Spin tip="Loading...">
                <Alert message="正在请求电影数据" description="精彩内容，马上呈现..." type="info"></Alert>
            </Spin>;
        } else {
            return <div>
                <div style={{ textAlign: 'center'}}>
                    <h1>{ this.state.info.title }</h1>
                    <img width="200" height="300" src={ this.getImages(this.state.info.images.large) } alt=""/>
                </div>
                <p style={{textIndent: '2em', lineHeight: '30px'}}>{ this.state.info.summary }</p>
            </div>;
        }
    }

    getImages(_url) {
        if (_url !== undefined) {
            let _u = _url.substring(7);
            return 'https://images.weserv.nl/?url=' + _u;
        }
    }
}