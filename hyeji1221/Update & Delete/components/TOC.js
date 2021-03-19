import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState){ // 바뀐값, 현재값
        if(this.props.data === newProps.data) {
            return false;
        }
        return true; // render 호출
    }
    render() {
        var data = this.props.data;
        var lists = [];
        var i = 0;
        while (i < data.length) {
            lists.push(
            <li key={data[i].id}>
                <a href={"/content/"+data[i].id}
                data-id = {data[i].id}
                onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id); // 클릭한 항목의 아이디값 주기
                }.bind(this)}
                >{data[i].title}</a>
                </li>);
            i++;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;