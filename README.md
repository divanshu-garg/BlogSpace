# BlogSpace

A modern, full-stack blog platform built with React and Appwrite, featuring user authentication, rich text editing, and image management.

## 🚀 Features

- **User Authentication**: Secure sign up, login, and logout functionality
- **Create & Edit Posts**: Write and manage blog posts with a rich text editor (TinyMCE)
- **Image Upload**: Upload and display featured images for each post
- **Post Management**: Edit and delete your own posts
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Protected Routes**: Authorization checks to ensure users can only modify their own content
- **Real-time Updates**: Dynamic content rendering with React hooks

## 🛠️ Tech Stack

**Frontend:**
- React 18
- React Router DOM (for navigation)
- Redux Toolkit (state management)
- React Hook Form (form handling)
- TinyMCE (rich text editor)
- Tailwind CSS (styling)
- html-react-parser (safe HTML rendering)

**Backend:**
- Appwrite (Backend-as-a-Service)
  - Authentication
  - TablesDB (database)
  - Storage (file management)

**Build Tool:**
- Vite

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher)
- npm or yarn
- An Appwrite account ([Sign up here](https://cloud.appwrite.io/))
- A TinyMCE API key ([Get free key](https://www.tiny.cloud/auth/signup/))

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the sample environment file:

```bash
cp .env.sample .env
```

Fill in your `.env` file with the following values:

```env
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="your-project-id"
VITE_APPWRITE_DATABASE_ID="your-database-id"
VITE_APPWRITE_TABLE_ID="your-table-id"
VITE_APPWRITE_BUCKET_ID="your-bucket-id"
VITE_TINYMCE_API_KEY="your-tinymce-api-key"
```

### 4. Set up Appwrite

**Create a Project:**
1. Go to [Appwrite Console](https://cloud.appwrite.io/console)
2. Create a new project
3. Copy the Project ID

**Create a Database:**
1. Navigate to Databases
2. Create a new database
3. Copy the Database ID

**Create a Collection (Table):**
1. Inside your database, create a new collection
2. Set up the following attributes:
   - `title` (String, required)
   - `content` (String, required)
   - `featuredImage` (String, required)
   - `status` (String, required) - for "active"/"inactive"
   - `userId` (String, required)
3. Copy the Collection ID

**Configure Permissions:**
- Read: `Any`
- Create: `Users`
- Update: `Users`
- Delete: `Users`

**Create a Storage Bucket:**
1. Navigate to Storage
2. Create a new bucket
3. Configure permissions:
   - Read: `Any`
   - Create: `Users`
   - Delete: `Users`
4. Copy the Bucket ID

**Important:** If you're on the free plan, the app uses `getFileView()` instead of `getFilePreview()` to avoid transformation limits.

### 5. Run the application

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── appwrite/          # Appwrite services (auth, database, storage)
├── components/        # Reusable UI components
│   ├── Header/
│   ├── Footer/
│   ├── post-form/
│   └── ...
├── pages/            # Page components
├── store/            # Redux store and slices
├── conf/             # Environment configuration
├── App.jsx           # Main app with routing
└── main.jsx          # Entry point
```

## 🎯 Key Features Explained

### Authentication Flow
- Users can sign up with email and password
- Login creates a session managed by Appwrite
- Redux stores user state across the application
- Protected routes prevent unauthorized access

### Post Management
- Rich text editor powered by TinyMCE for formatted content
- Safe HTML rendering with html-react-parser to display rich content
- Auto-generated slugs from post titles
- Image upload to Appwrite Storage
- Only post authors can edit or delete their posts

### State Management
- Redux Toolkit manages global authentication state
- React Hook Form handles form validation and submission
- Local state manages component-specific data

### Content Rendering
- TinyMCE stores posts as HTML strings in the database
- html-react-parser safely converts HTML strings to React elements for display
- Prevents XSS attacks while maintaining rich formatting

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Live Demo

Check out the live application: [BlogSpace Demo](https://blog-space-eosin.vercel.app/)

**Test Credentials:**
- Name: admin 
- Email: admin@admin.com
- Password: admin123

Feel free to explore and test all features!

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Appwrite](https://appwrite.io/) - Backend-as-a-Service platform
- [TinyMCE](https://www.tiny.cloud/) - Rich text editor
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React](https://react.dev/) - JavaScript library

## 📧 Contact

- Email - Divanshugarg49@gmail.com
- LinkedIn- https://www.linkedin.com/in/itsdivanshugarg/

- Project Link: https://github.com/divanshu-garg/BlogSpace

---

Made with ❤️ using React and Appwrite by Divanshu Garg