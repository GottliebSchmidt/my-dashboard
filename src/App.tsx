import { AppRouter } from './routes/AppRouter';
import { ErrorBoundary } from './components/ErrorBoundary';
import { MantineProvider } from '@mantine/core';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export function App() {
    return (
        <HelmetProvider>
            <MantineProvider>
                <Helmet>
                    <title>My Dashboard - Главная</title>
                    <meta name="description" content="Мой дашборд для управления пользователями и данными" />
                    <meta name="keywords" content="dashboard, react, zustand, seo" />
                    <meta name="author" content="Gottlieb" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Helmet>
                <ErrorBoundary>
                    <AppRouter />
                </ErrorBoundary>
            </MantineProvider>
        </HelmetProvider>
    );
}