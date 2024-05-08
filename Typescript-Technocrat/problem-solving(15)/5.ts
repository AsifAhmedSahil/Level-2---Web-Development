//5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

interface Repository<T>{
    getAll():T[];
    getById(id:number):T | undefined;
    create(items:T):void;
    update(items:T):void
    delete(id:number):void
}

class GenericsRepository<T extends {id:number}> implements Repository<T>{
    private items = [];
    constructor(){
        this.items = []
    }

    create(item: T): void {
        this.items.push(item)
    }
    getAll(): T[] {
        return this.items
    }
    getById(id:number): T | undefined {
        return this.items.find((item:T) => item.id === id)
        
    }

    update(item: T): void {
        const index = this.items.findIndex(
            (existingItem:T) =>existingItem.id === item.id
        )
        if(index !== -1){
            this.items[index] = item
        }
    }

    delete(id: number): void {
        const index = this.items.findIndex(
            (existingItem:T) =>existingItem.id === id
        )
        if(index !== -1){
            this.items.splice(index,1)
        }
    }

}

// create instance

interface IProgrammer {
    id:number;
    name:string;
    email:string;
}

const programmerRepository = new GenericsRepository<IProgrammer>();

programmerRepository.create({
    id:1,
    name:'sahil',
    email:'sahil@gmail.com'
})
programmerRepository.create({
    id:2,
    name:'Asif',
    email:'sahil@gmail.com'
})
programmerRepository.create({
    id:3,
    name:'Ahmed',
    email:'sahil@gmail.com'
})


programmerRepository.update({id:1,name:'sanji',email:"sanji@gmail.com"})

programmerRepository.delete(3)


const allUser = programmerRepository.getAll()
console.log(allUser)

// const oneUser = programmerRepository.getById(1)
// console.log(oneUser)



