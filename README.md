# 🏋️‍♀️ FitMeet

**FitMeet** is a free online platform for discovering, booking, and joining fitness classes.  
Built with **Next.js**, **Supabase**, and **Google Meet**, it connects users with trainers, supports seamless class scheduling, and builds a community around fitness.  

---

## 🚀 Features
- 🔍 **Discover Fitness Classes** – Browse local and online classes
- 📅 **Easy Booking** – Book sessions instantly with trainers
- 🎥 **Google Meet Integration** – Join live fitness classes via Meet
- 👩‍🏫 **Trainer Dashboard** – Trainers can create, manage, and schedule classes
- 🧑‍🤝‍🧑 **Community Driven** – Connect with trainers and fitness enthusiasts
- 🔐 **Authentication & Profiles** – Secure login with Supabase Auth

---

## 🛠️ Tech Stack
- **Frontend:** Next.js, React, TailwindCSS  
- **Backend:** Supabase (Database + Auth + Storage)  
- **Video Calls:** Google Meet Integration  
- **Deployment:** Vercel (Frontend) / Supabase (Backend)  

---

## Installation

###  Clone the repository
```bash
git clone https://github.com/yourusername/fitmeet.git
cd fitmeet
````

### Install dependencies

```bash
pnpm install
```

(or `npm install` / `yarn install`)

### Setup environment variables

Create a `.env.local` file in the root folder and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GOOGLE_MEET_API_KEY=your_google_meet_api_key
```

### Run the app

```bash
pnpm dev
```

App will be live at **[http://localhost:3000](http://localhost:3000)**

---

## Screenshots

### Landing Page 

![Landing Page Preview](./assests/images/landing)

---

## 📌 Roadmap
* [ ] Ratings & reviews for trainers

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch (`feature/awesome-feature`)
3. Commit your changes
4. Push to your fork and create a PR

---

## 📜 License

MIT License © 2025 \ Ikenna Iheanaetu

