import React from 'react';
import { connect } from "react-redux";

const renderList = ({ todo, editList, deleteList, listDone }) => (
    <tbody>
        {todo.map((row, index) => {
            return (
                <tr className="row"
                    key={index}
                >
                    <td>{index + 1}.
              <input type="checkbox"
                            checked={row.selected}
                            onChange={() => listDone(index)}
                        />
                    </td>
                    <td className={!row.selected ? "" : "del"}>
                        {!row.selected ? (
                            <div onClick={() => editList(index)}>
                                {row.val}
                            </div>
                        ) : row.val}
                    </td>
                    <td>
                        {!row.selected ? (
                            <button type="button" className="btn btn-edit"
                                onClick={() => editList(index)}
                            >Edit</button>
                        ) : ""}
                        <button type="button" className="btn btn-hapus"
                            onClick={() => deleteList(index)}>Hapus</button>
                    </td>
                </tr>
            )
        }
        )
        }
    </tbody>
)

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 1:
            return todos
        case 2:
            return todos.filter(e => e.selected)
        case 3:
            return todos.filter(e => !e.selected)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todo: getVisibleTodos(state.todo, state.filter)
})

const map = dispatch => ({
    editList: index => dispatch({ type: "EDIT_LIST_ASYNC", value: index }),
    deleteList: index => dispatch({ type: "DELETE_LIST_ASYNC", value: index }),
    listDone: index => dispatch({ type: "LIST_DONE_ASYNC", value: index }),
})

export default connect(
    mapStateToProps,
    map
)(renderList);
