import React, {Component} from 'react';

// function List(props) {
//     let listItems = props.todoList.map((val) => <h1>{val}</h1>) //Returns a new array
//     return(
//         <div>
//             {listItems}
//         </div>
//     )
// }




 

class List extends Component {
    constructor() {
        super();
    }

    render() {
        let listItems = props.todoList.map((val) => <h1>{val}</h1>) //Returns a new array
        return(
            <div>
                {listItems}
            </div>
        )
    }
}


export default List;