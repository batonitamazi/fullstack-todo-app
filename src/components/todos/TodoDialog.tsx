import React from 'react'


interface TodoFormDialog {
    open: boolean;
    handleDialog: Function;
}



function TodoDialog(props: TodoFormDialog) {
    const { open, handleDialog} = props
    return (
        <div>pirveli div elementi</div>
    )
}

export default TodoDialog