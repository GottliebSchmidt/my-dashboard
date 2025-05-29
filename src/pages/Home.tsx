import { Container, Title, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuthStore } from '../context/authStore';
import { LoginForm } from '../components/LoginForm';
import { motion } from 'framer-motion';

export function Home() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return (
        <Container>
            <Helmet>
                <title>Главная — Мой дашборд</title>
                <meta
                    name="description"
                    content={
                        isAuthenticated
                            ? 'Добро пожаловать в мой дашборд. Перейдите к списку пользователей.'
                            : 'Войдите в дашборд для управления пользователями.'
                    }
                />
                <meta
                    name="keywords"
                    content="дашборд, главная, пользователи, управление, вход"
                />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Title order={1} my="md">
                    {isAuthenticated ? 'Добро пожаловать в дашборд' : 'Вход в дашборд'}
                </Title>

                {isAuthenticated ? (
                    <Button component={Link} to="/users">
                        Перейти к пользователям
                    </Button>
                ) : (
                    <LoginForm />
                )}
            </motion.div>
        </Container>
    );
}
