import React, { Component } from 'react';

class TOC extends Component {
    // shouldComponentUpdate가 true를 리턴하면 render가 호출되고, false를 리턴하면 호출되지 않는다.
    // shouldComponentUpdate 함수 내에서는 바뀌기 전 Props와 바뀐 후 Props에 모두 접근할 수 있다.
    shouldComponentUpdate(newProps, newState) {
        if (newProps.data === this.props.data) {
            return false;
        }
        return true;
    }
    render() {
        var data = this.props.data;
        var lists = [];
        var i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={"/content/"+data[i].id}
                        data-id = {data[i].id}
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                        // 밑의 방법은 위의 onClick 함수와 똑같은 동작을 함
                        // onClick={function(id, e){
                        //     e.preventDefault();
                        //     this.props.onChangePage(id);
                        // }.bind(this, data[i].id)}
                        >{data[i].title}
                    </a>
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