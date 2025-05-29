import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Users } from '../pages/Users';
import { Home } from '../pages/Home'; // будет страница логина
import { Dashboard } from '../pages/Dashboard';
import { PrivateRoute } from './PrivateRoute';

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Страница логина */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/users"
                    element={
                        <PrivateRoute>
                            <Users />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}