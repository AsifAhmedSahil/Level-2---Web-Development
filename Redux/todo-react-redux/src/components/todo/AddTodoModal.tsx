
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription,  DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import { useAppDispatch } from "@/redux/hook";
// import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodoMutation } from "@/redux/api/api";



const AddTodoModal = () => {

  const [task,setTask] = useState('')
  const [description,setDescription] = useState('')
  // ! For Local data
  // const disPatch = useAppDispatch()
  //* For Server
  const [addTodo,{isLoading,isError,isSuccess,data}] = useAddTodoMutation()
  console.log(isLoading,isError,isSuccess,data)
  


  const onSubmit = (e : FormEvent) =>{
    e.preventDefault()
    // console.log(task,description)
    // const randomString = Math.random().toString(36).substring(2,7)
    const taskDetails = {
      // id:randomString,
      title:task,
      description:description,
      // priority:priority
    }
    // !For Local Data
    // disPatch(addTodo(taskDetails))

    //* For Server
    addTodo(taskDetails)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className='bg-primary-gradient text-xl font-semibold'>Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add task that you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
       

        <div  className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
              id="task"
             onBlur={(e) => setTask(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              onBlur={(e) => setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <DialogClose asChild>

          <Button type="submit">Save changes</Button>
          </DialogClose>
        </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddTodoModal