import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { UserForm } from '../UserForm';
import { useUserStore } from '../../context/userStore';

describe('UserForm', () => {
    beforeEach(() => {
        useUserStore.setState({ users: [] });
    });

    it('добавляет пользователя при корректном вводе', async () => {
        render(<UserForm />);

        fireEvent.change(screen.getByLabelText(/Имя/i), { target: { value: 'Иван' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'ivan@example.com' } });

        fireEvent.click(screen.getByRole('button', { name: /Добавить пользователя/i }));

        await waitFor(() => {
            const state = useUserStore.getState();
            expect(state.users).toHaveLength(1);
            expect(state.users[0].name).toBe('Иван');
        });
    });

    it('показывает ошибки при неверных данных', async () => {
        render(<UserForm />);

        fireEvent.change(screen.getByLabelText(/Имя/i), { target: { value: 'I' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'wrong-email' } });

        fireEvent.click(screen.getByRole('button', { name: /Добавить пользователя/i }));

        expect(await screen.findByText(/Имя должно быть не менее 2 символов/i)).toBeInTheDocument();
        expect(await screen.findByText(/Неверный формат email/i)).toBeInTheDocument();
    });
});