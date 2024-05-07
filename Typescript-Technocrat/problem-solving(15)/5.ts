//5. Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

interface Repository<T>{
    getAll():T[];
    getById():T | undefined;
    create():void;
    update():void
    delete():void
}

