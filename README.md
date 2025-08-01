<p align="center">
  <img src="/public/logo.png" alt="KOSU Logo" />
</p>

<h1 align="center">KOSU Frontend — Digital Kost Management Platform</h1>

<p align="center">
  A <strong>modern, fast, and intuitive</strong> frontend for the KOSU ecosystem, built using <a href="https://nextjs.org" target="_blank">Next.js</a> and <a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a>.
  <br />
  Designed with scalability, user experience, and clean UI in mind.
</p>

---

## 🧱 Tech Stack

- <strong>Framework:</strong> Next.js (App Router)
- <strong>Styling:</strong> Tailwind CSS + Shadcn UI
- <strong>Font:</strong> Plus Jakarta Sans
- <strong>Integration:</strong> Supabase (Auth & DB - planned)

---

## 🛠️ Quick Start

### 📥 1. Clone & Install

```bash
git clone https://github.com/kosu-id/kosu-frontend.git
cd kosu-frontend
npm install
````

### ⚙️ 2. Run Development Server

```bash
npm run dev
```

Akses app di `http://localhost:3000`

---

## 🌐 Project Structure

```
app/
  ├─ login/
  ├─ register/
  └─ layout.jsx, page.jsx
components/
  └─ layout/, ui/
lib/
  └─ api.js, utils.js
public/
  └─ logo.png
```

---

## 🔄 Branch Workflow

* `main` → production
* `dev` → pengembangan utama
* `feat/*` → branch per fitur → merge ke `dev`

---

## 📌 Commit Convention

Gunakan [Conventional Commit](https://www.conventionalcommits.org/):

```bash
feat(auth): add login form and validation
fix(register): fix validation bug
chore: update dependencies
```

---

## Project Roadmap (Frontend)

* [ ] Project Setup (Next.js, Tailwind, Shadcn)
* [ ] Landing Page
* [ ] Login & Register Pages
* [ ] Supabase Auth Integration
* [ ] Owner & Tenant Dashboards
* [ ] Payment & Notification Pages
* [ ] PWA support

---

## License

Licensed under **MIT License**
© 2025 KOSU Team

---