# JobPortal - Professional Job Board Application

A comprehensive job board application allowing employers to post job listings and job seekers to search and apply for jobs.

## 🌟 Features

### For Job Seekers
- 🔍 Advanced job search with filters
- 📝 Easy application process
- 💼 Profile management
- 📱 Responsive design for all devices
- 🔔 Real-time notifications

### For Employers
- ✨ Post and manage job listings
- 👥 Review applications
- 📊 Analytics dashboard
- 🏢 Company profile management
- 📈 Featured job listings

### For Admins
- 🛡️ Content moderation
- 👥 User management
- 📊 Platform analytics
- ⚙️ System configuration
- 🎯 Featured listings management

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **State Management**: React Context
- **UI Components**: Custom components with Tailwind
- **Icons**: Lucide React
- **Notifications**: React Toastify
- **Routing**: React Router DOM
- **Date Handling**: date-fns

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/jobportal.git
   cd jobportal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 👤 Demo Credentials

For testing purposes, use these credentials:

🧑‍💼 **Job Seeker**
```
Email: jobseeker@example.com
Password: password123
```

👔 **Employer**
```
Email: employer@example.com
Password: password123
```

👑 **Admin**
```
Email: admin@example.com
Password: password123
```

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimization
- Desktop enhancement
- Cross-browser compatibility

## 🔒 Security Features

- Protected routes
- Role-based access control
- Secure authentication
- Input validation
- XSS protection

## 🎨 UI/UX Features

- Modern, clean design
- Intuitive navigation
- Smooth animations
- Consistent branding
- Accessibility compliance

## 📂 Project Structure

```
/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── auth/      # Authentication components
│   │   ├── common/    # Shared components
│   │   ├── jobs/      # Job-related components
│   │   └── layout/    # Layout components
│   ├── context/       # React context providers
│   ├── pages/         # Page components
│   ├── services/      # API services
│   └── styles/        # Global styles
└── public/            # Static assets
```

## 🔧 Configuration

The application uses environment variables for configuration:

```env
VITE_API_URL=your_api_url
VITE_AUTH_TOKEN=your_auth_token
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built using React.js and Tailwind CSS
- Icons from Lucide React
- Stock photos from Pexels