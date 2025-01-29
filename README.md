## Next Cal

[![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)  
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://next-cal.vercel.app/)

Next Cal is a scheduling web application that allows users to share their availability for meetings. Once a meeting is scheduled, it automatically creates an event in Google Calendar with a Google Meet link.

### 🚀 Features

- Google Calendar integration  
- Availability management (select weekdays and time slots)  
- Public scheduling page for easy appointment booking  
- Automatic event creation in Google Calendar with Google Meet link  

### 🔗 Live Demo

Try it here: **[Next Cal](https://next-cal.vercel.app/)**

### 🛠️ Tech Stack

- **Next.js** – Server-side rendering and frontend framework  
- **Prisma** – Database ORM  
- **Google Calendar API** – For event scheduling  
- **NextAuth.js** – Authentication  
- **Neon.tech** - Database
- **Vercel** – Deployment  

### 📦 Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/next-cal.git
   cd next-cal
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables in a `.env` file:

   ```env
   DATABASE_URL=your_database_url
   DATABASE_DIRECT_URL=your_database_url (if nescessary)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. Run database migrations:

   ```sh
   npx prisma migrate dev
   ```

5. Start the development server:

   ```sh
   npm run dev
   ```
