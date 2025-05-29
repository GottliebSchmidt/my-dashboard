import { useUserStore } from '../context/userStore';
import { Button, Table, ScrollArea } from '@mantine/core';

export function UserList() {
    const users = useUserStore((state) => state.users);
    const removeUser = useUserStore((state) => state.removeUser);

    if (users.length === 0) return <p>Пользователи отсутствуют.</p>;

    return (
        <ScrollArea>
            <Table highlightOnHover>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Email</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {users.map(({ id, name, email }) => (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>
                            <Button color="red" size="xs" onClick={() => removeUser(id)}>
                                Удалить
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </ScrollArea>
    );
}