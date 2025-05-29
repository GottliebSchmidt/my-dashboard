import React, { useEffect } from 'react';
import { UserForm } from '../components/UserForm';
import { UserList } from '../components/UserList';
import { Loader } from '../components/Loader';
import { useUserStore } from '../context/userStore';
import { Container, Title, Alert } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export function Users() {
    const loading = useUserStore((state) => state.loading);
    const error = useUserStore((state) => state.error);
    const fetchUsers = useUserStore((state) => state.fetchUsers);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <>
            <Helmet>
                <title>Пользователи - Дашборд</title>
                <meta
                    name="description"
                    content="Управление пользователями: добавление, удаление и просмотр списка."
                />
                <meta name="keywords" content="dashboard, users, управление, react, zustand" />
            </Helmet>

            <Container>
                <Title order={2} my="md">Управление пользователями</Title>

                {error && <Alert color="red" mb="md">{error}</Alert>}

                {loading ? (
                    <Loader />
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <UserForm />
                        <UserList />
                    </motion.div>
                )}
            </Container>
        </>
    );
}