import { Loader as MantineLoader } from '@mantine/core';

export function Loader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <MantineLoader size="lg" variant="dots" />
        </div>
    );
}