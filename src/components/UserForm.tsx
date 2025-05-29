import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput, Button, Box, Alert } from '@mantine/core';
import * as z from 'zod';
import { useUserStore } from '../context/userStore';
import { motion } from 'framer-motion';

const schema = z.object({
    name: z.string().min(2, 'Имя должно быть не менее 2 символов'),
    email: z.string().email('Неверный формат email'),
});

type FormData = z.infer<typeof schema>;

export function UserForm() {
    const addUser = useUserStore((state) => state.addUser);
    const error = useUserStore((state) => state.error);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            await addUser({ id: Date.now(), ...data });
            reset();
        } catch {
            // Ошибка уже установлена в Zustand
        }
    };

    return (
        <Box maw={400} mx="auto" mt="md">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <Alert color="red" mb="sm" title="Ошибка">
                            {error}
                        </Alert>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <TextInput
                        label="Имя"
                        placeholder="Введите имя"
                        {...register('name')}
                        error={errors.name?.message}
                        disabled={isSubmitting}
                        mb="sm"
                        styles={(theme) => ({
                            input: {
                                borderColor: errors.name ? theme.colors.red[6] : undefined,
                                transition: 'border-color 0.3s ease',
                            },
                        })}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <TextInput
                        label="Email"
                        placeholder="Введите email"
                        {...register('email')}
                        error={errors.email?.message}
                        disabled={isSubmitting}
                        mb="sm"
                        styles={(theme) => ({
                            input: {
                                borderColor: errors.email ? theme.colors.red[6] : undefined,
                                transition: 'border-color 0.3s ease',
                            },
                        })}
                    />
                </motion.div>

                <motion.div
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Button type="submit" fullWidth loading={isSubmitting} mt="md">
                        Добавить пользователя
                    </Button>
                </motion.div>
            </form>
        </Box>
    );
}