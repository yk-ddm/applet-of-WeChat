import React from 'react';
import { Spin, Alert, Pagination } from 'antd';
import fetchJSONP from 'fetch-jsonp';
import MovieItem from './MovieItem.jsx';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1,
            movieType: props.match.params.type,
            pageSize: 12,
            total: 0,
            isloading: true
        }
    }

    componentWillMount() {
        // const data = require('../data/in_theaters.json');
        const data = require(`../data/${this.state.movieType}.json`);        
        setTimeout(() => {
            this.setState({
                isloading: false,
                movies: data.subjects,
                total: data.total
            });
        }, 3000);
    }

    render() {
        return <div>
            { this.renderList() }
        </div>;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isloading: true,
            nowPage: parseInt(nextProps.match.params.page) || 1,
            movieType: nextProps.match.params.type
        }, function () {
            const data = require(`../data/${this.state.movieType}.json`);
            setTimeout(() => {
                this.setState({
                    isloading: false,
                    movies: data.subjects,
                    total: data.total
                });
            }, 3000);
        });
    }

    renderList() {
        if (this.state.isloading) {
            return <Spin tip="Loading...">
                <Alert message="正在请求电影列表" description="精彩内容，马上呈现..." type="info"></Alert>
            </Spin>;
        } else {
            return <div>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {this.state.movies.map((item, i) => {
                        return <MovieItem key={i} {...item} history={this.props.history}></MovieItem>;
                    })}
                </div>
                <Pagination onChange={ this.pageChanged } defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total}></Pagination>
            </div>;
        }
    }

    pageChanged = (page) => {
        // window.location.href = '/#/movie/' + this.state.movieType + '/' + page;
        this.props.history.push('/movie/' + this.state.movieType + '/' + page);
    }
}