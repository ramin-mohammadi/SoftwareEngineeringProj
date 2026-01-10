This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Resume Summary

**Full-Stack E-Commerce Web Application - "Critter Collectibles"**

Developed a comprehensive pet products e-commerce platform utilizing modern web technologies and demonstrating proficiency across the full development stack. Built with Next.js 13 and TypeScript, the application features server-side rendering, API routes, and a responsive UI designed with Tailwind CSS.

**Key Technical Achievements:**
- **Frontend Development:** Implemented a dynamic, responsive user interface using React 18, Next.js 13 App Router, and TypeScript with 25+ reusable components including shopping cart, product catalog, search functionality, and interactive carousels
- **Backend Architecture:** Designed and developed RESTful API endpoints using Next.js API routes for user authentication, product management, order processing, and discount code validation
- **Database Design:** Architected a relational PostgreSQL database with Prisma ORM, implementing normalized schemas for users, products, orders, categories, pets, and discounts with proper foreign key relationships
- **Authentication & Security:** Integrated NextAuth.js for session management and implemented bcrypt password hashing to ensure secure user authentication and authorization with role-based access control (admin/user roles)
- **Cloud Integration:** Leveraged cloud services including AWS S3 and Cloudinary for scalable image storage and management, and Vercel for deployment and hosting
- **Admin Dashboard:** Built a complete admin panel with product CRUD operations, user management, order history tracking, and discount code creation/management
- **E-Commerce Features:** Implemented full shopping cart functionality, checkout process with order form validation, discount code application with stacking capability, and order history for users
- **Code Quality:** Maintained code quality with ESLint, Prettier for formatting, and implemented structured logging using Winston

**Technologies Used:**
- **Frontend:** Next.js 13, React 18, TypeScript, Tailwind CSS, Bootstrap, React Icons, Tiptap Editor
- **Backend:** Next.js API Routes, NextAuth.js, Prisma ORM
- **Database:** PostgreSQL (Vercel Postgres)
- **Cloud Services:** AWS S3, Cloudinary, Vercel Blob/KV
- **Security:** Bcrypt for password hashing, NextAuth.js for session management
- **Development Tools:** ESLint, Prettier, Winston (logging)

This project demonstrates strong full-stack development capabilities, including UI/UX design, RESTful API development, database architecture, authentication implementation, cloud service integration, and production deployment.

## Getting Started

After pulling repo, make sure nodeJS is installed.
Install dependencies in package.json:
**npm install**

Prisma

```
-npx prisma generate  : Create Prisma client
-npx prisma migrate dev  : apply changes made to prisma schema
-npx prisma studio  : browse prisma db
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
