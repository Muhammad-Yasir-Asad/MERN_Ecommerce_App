import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: 'Jhon Doe',
        email: 'jhondoe@gmail.com',
        password: bcrypt.hashSync("12345", 10),
        isAdmin: false,
    }
]

export default users;