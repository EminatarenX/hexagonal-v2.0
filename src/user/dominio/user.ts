export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public id?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
    ){}

    update(name: string) {
        this.name = name;
    }
    
}