import React, { ErrorInfo } from 'react';

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends React.Component<{}, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('ErrorBoundary caught error:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Что-то пошло не так.</h1>;
        }
        return this.props.children;
    }
}