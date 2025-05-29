import { Container, Title } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export function Dashboard() {
    return (
        <Container>
            <Helmet>
                <title>Дашборд — Мой проект</title>
                <meta name="description" content="Основная панель управления проектом и пользователями." />
                <meta name="keywords" content="дашборд, управление, пользователи, проект" />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Title order={2} my="md">Основная панель</Title>
                <p>Здесь будет контент дашборда.</p>
            </motion.div>
        </Container>
    );
}