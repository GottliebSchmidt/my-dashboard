import React, { useState } from 'react';
import { useAuthStore } from '../context/authStore';
import { TextInput, PasswordInput, Button, Alert } from '@mantine/core';

export function LoginForm() {
    const login = useAuthStore((state) => state.login);
    const loading = useAuthStore((state) => state.loading);
    const error = useAuthStore((state) => state.error);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: 'auto' }}>
            {error && <Alert color="red" mb="sm">{error}</Alert>}

            <TextInput
                label="Логин"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                required
            />
            <PasswordInput
                label="Пароль"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                required
                mt="sm"
            />
            <Button type="submit" fullWidth mt="md" loading={loading}>
                Войти
            </Button>
        </form>
    );
}