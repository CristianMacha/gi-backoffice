export class Role {
    constructor(
        public id: number,
        public name: string,
        public active: boolean,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
};
