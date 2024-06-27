import TodoContainer from '@/components/todo/TodoContainer'
import Container from '@/components/ui/Container'


const Todo = () => {
  return (
    <Container>
    <h1 className='text-3xl font-semibold text-center pt-6'>My Todos</h1>
    <TodoContainer></TodoContainer>
    </Container>
  )
}

export default Todo