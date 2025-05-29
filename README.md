# 🧩 React Dashboard with User Management

This is a clean and scalable **React + TypeScript** dashboard application featuring user management functionality. It demonstrates strong frontend engineering practices and is optimized for real-world portfolio use.

## 🚀 Features

- 🔐 **Authentication** (mocked login with Zustand)
- 👥 **User Management** (add, remove, list users)
- 🧠 **Global State with Zustand**
- 📋 **Form validation** with React Hook Form + Zod
- ⚛️ **Typed API layer** with mock persistence
- 🎯 **Unit tested** (React Testing Library)
- 🧪 **Type-safe** with full TypeScript coverage
- 🎨 **UI Library:** Mantine
- 🌐 **SEO-ready** with `react-helmet-async`
- 💫 **Motion Ready** (`framer-motion` ready to plug in)

## 📂 Folder Structure

```
src/
├── components/       # Reusable components
├── context/          # Zustand stores
├── pages/            # Route-based pages
├── types/            # TypeScript interfaces
├── utils/            # API abstraction
└── App.tsx
```

## 🧪 Test Coverage

This project includes tests for key components (e.g. UserForm) using **React Testing Library**. More tests can be easily added using the same structure.

## 🛠️ Technologies

- Vite
- React 18
- TypeScript
- Zustand
- React Hook Form + Zod
- Mantine UI
- React Router
- React Helmet Async
- Testing Library
- ESLint / Prettier

## 🖥️ Setup & Run Locally

```bash
# Clone repository via SSH
git clone git@github.com:your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Run dev server
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 🔑 Demo Credentials

Login is mocked in the frontend. Use:

```
Username: admin
Password: 1234
```

## 📦 Build for Production

```bash
npm run build
```

## ✅ Deployment Ideas

- Vercel / Netlify (simple Vite support)
- Docker + NGINX
- Firebase Hosting

## 🧠 Author's Note

This project is built with care to reflect **middle-level frontend developer** skills: from architecture to typing, global state, tests, and UX. It can serve as a base for more complex admin panels or client dashboards.

---

_You're welcome to fork, extend, or contact me for collaboration._