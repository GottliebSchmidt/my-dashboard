import { create } from 'zustand';

interface AuthState {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
    error: string | null;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    loading: false,
    error: null,

    login: async (username, password) => {
        set({ loading: true, error: null });

        // Мок имитация API входа
        await new Promise((res) => setTimeout(res, 1000));

        // Пример проверки
        if (username === 'admin' && password === '1234') {
            set({ isAuthenticated: true, loading: false, error: null });
        } else {
            set({ error: 'Неверный логин или пароль', loading: false });
        }
    },

    logout: () => set({ isAuthenticated: false }),
}));