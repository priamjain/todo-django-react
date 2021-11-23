import axios from 'axios'

const axiosInstance = axios.create({
  baseURL:'https://priam-todo-django.herokuapp.com'
})

export const TodoApi = {
  getTodos: () =>{
    return axiosInstance.get('/api/todos/')
  },
  postTodo: (title) =>{
    return axiosInstance.post('/api/todos/',{title,description:'default',completed:false})
  },
  deleteTodo: (id) =>{
    return axiosInstance.delete('/api/todos/'+id+"/")
  }
}