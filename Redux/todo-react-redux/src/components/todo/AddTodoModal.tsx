
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";



const AddTodoModal = () => {

  const [task,setTask] = useState('')
  const [description,setDescription] = useState('')


  const onSubmit = (e : FormEvent) =>{
    e.preventDefault()
    console.log(task,description)
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