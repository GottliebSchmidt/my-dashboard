import type { User } from '../types/user-interface.ts';

let usersDB: User[] = [
    { id: 1, name: 'Иван Иванов', email: 'ivan@example.com' },
    { id: 2, name: 'Мария Петрова', email: 'maria@example.com' },
];

export const userApi = {
    fetchUsers: (): Promise<User[]> =>
        new Promise((resolve) => {
            setTimeout(() => resolve([...usersDB]), 800);
        }),

    addUser: (user: User): Promise<User> =>
        new Promise((resolve) => {
            setTimeout(() => {
                usersDB.push(user);
                resolve(user);
            }, 800);
        }),

    removeUser: (id: number): Promise<void> =>
        new Promise((resolve) => {
            setTimeout(() => {
                usersDB = usersDB.filter(u => u.id !== id);
                resolve();
            }, 800);
        }),
};