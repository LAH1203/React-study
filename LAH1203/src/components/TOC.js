import React, { Component } from 'react';

class TOC extends Component {
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