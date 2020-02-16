import React from 'react';
import '../../css/movieItem.scss';
import { Rate } from 'antd';

export default class MovieItem extends React.Component {
    render() {
        return <div className="box" onClick={ this.click }>
            <img className="img" src={this.getImages(this.props.images.small)} alt=""/>
            <h4>电影名称：{ this.props.title }</h4>
            <h4>上映年份：{ this.props.year }年</h4>
            <h4>电影类型：{ this.props.genres.join(', ') }</h4>
            <Rate disabled defaultValue={this.props.rating.average / 2}></Rate>
        </div>;
    }

    getImages(_url) {
        if (_url !== undefined) {
            let _u = _url.substring(7);
            return 'https://images.weserv.nl/?url=' + _u;
        }
    }

    click = () => {
        this.props.history.push('/movie/detail/' + this.props.id);
    }
}