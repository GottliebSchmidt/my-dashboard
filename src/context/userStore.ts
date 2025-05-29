import { create } from 'zustand';
import type { User } from '../types/user-interface';
import { userApi } from '../api/userApi';

interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;

    fetchUsers: () => Promise<void>;
    addUser: (user: User) => Promise<void>;
    removeUser: (id: number) => Promise<void>;

    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
    users: [],
    loading: false,
    error: null,

    fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
            const users = await userApi.fetchUsers();
            set({ users, loading: false });
        } catch (e) {
            set({ error: 'Ошибка при загрузке пользователей', loading: false });
        }
    },

    addUser: async (user) => {
        set({ loading: true, error: null });
        try {
            const newUser = await userApi.addUser(user);
            set((state) => ({ users: [...state.users, newUser], loading: false }));
        } catch (e) {
            set({ error: 'Ошибка при добавлении пользователя', loading: false });
        }
    },

    removeUser: async (id) => {
        set({ loading: true, error: null });
        try {
            await userApi.removeUser(id);
            set((state) => ({
                users: state.users.filter((u) => u.id !== id),
                loading: false,
            }));
        } catch (e) {
            set({ error: 'Ошибка при удалении пользователя', loading: false });
        }
    },

    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
}));
