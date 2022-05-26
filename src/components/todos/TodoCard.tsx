import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { todoService } from '../../models/todo/service';
import { Todo } from '../../models/todo/Todo';
import Checkbox from '@mui/material/Checkbox';




export default function MediaCard(props: any) {
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const getTodos = () => {
        todoService.listWithCounter().then((r: any) => {
            setTodos(r.results)
        })
    }
    React.useEffect(() => {
        getTodos();
    }, [])
    console.log(todos)
    return (
        <div className='main-container'>
            {
                todos.map((todo: any) => (
                    <Card sx={{ maxWidth: 250 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {todo.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {todo.description}
                            </Typography>
                            <Checkbox defaultChecked={todo.complete}/>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                ))
            }
        </div>

    );
}