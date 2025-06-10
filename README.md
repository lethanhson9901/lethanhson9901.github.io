# TSonStack Blog

A modern, performant personal blog built with Next.js 15, TypeScript, and Tailwind CSS. Designed for sharing insights about technology, programming, and life experiences.

## ✨ Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Responsive Design**: Beautiful UI that works on all devices
- **Dark/Light Mode**: Automatic theme switching with system preference
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Markdown Support**: Write blog posts in Markdown/MDX format
- **Categories & Tags**: Organize content with flexible taxonomy
- **Search Functionality**: Find content quickly
- **Performance**: Optimized for speed and Core Web Vitals
- **GitHub Pages Ready**: Automatic deployment with GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lethanhson9901/lethanhson9901.github.io.git
   cd lethanhson9901.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── .github/workflows/     # GitHub Actions for deployment
├── content/posts/         # Blog posts in Markdown format
├── public/               # Static assets (images, icons, etc.)
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components
│   ├── lib/            # Utility functions and helpers
│   ├── styles/         # Global styles
│   └── types/          # TypeScript type definitions
├── .cursorrules        # Cursor editor rules
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## ✍️ Writing Blog Posts

### Creating a New Post

1. **Create a new Markdown file** in `content/posts/`
   ```bash
   touch content/posts/my-new-post.md
   ```

2. **Add frontmatter** at the top of your file:
   ```markdown
   ---
   title: "Your Post Title"
   excerpt: "A brief description of your post"
   publishedAt: "2024-01-15"
   category: "Technology"
   tags: ["Next.js", "React", "Web Development"]
   featured: false
   author:
     name: "TSonStack"
     avatar: "/images/avatar.jpg"
   ---
   
   # Your Post Title
   
   Your content goes here...
   ```

3. **Write your content** using Markdown syntax

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Post title |
| `excerpt` | string | ✅ | Short description for previews |
| `publishedAt` | string | ✅ | Publication date (YYYY-MM-DD) |
| `category` | string | ✅ | Main category |
| `tags` | array | ✅ | List of tags |
| `featured` | boolean | ❌ | Show on homepage (default: false) |
| `author` | object | ❌ | Author information |

### Markdown Features

- **Headers**: `# ## ### ####`
- **Emphasis**: `*italic*` and `**bold**`
- **Lists**: Ordered and unordered
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Code blocks**: Triple backticks with language
- **Tables**: GitHub-flavored markdown tables
- **Blockquotes**: `> text`

## 🎨 Customization

### Branding

1. **Update site metadata** in `src/app/layout.tsx`
2. **Modify colors** in `tailwind.config.js`
3. **Replace logo** and update navigation in `src/components/layout/navigation.tsx`
4. **Update footer** in `src/components/layout/footer.tsx`

### Styling

The blog uses Tailwind CSS with a custom design system:

- **Colors**: Defined in CSS variables for easy theming
- **Typography**: Inter font for readability
- **Components**: Modular component structure
- **Dark mode**: Automatic with `next-themes`

### Adding Pages

Create new pages in the `src/app/` directory:

```
src/app/
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── your-page/
    └── page.tsx
```

## 🚀 Deployment

### GitHub Pages (Recommended)

The blog is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - deployment happens automatically

### Manual Deployment

Build and export static files:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

### Custom Domain

1. **Add CNAME file** to `public/` directory:
   ```
   yourdomain.com
   ```

2. **Configure DNS** with your domain provider:
   ```
   Type: CNAME
   Name: www (or @)
   Value: lethanhson9901.github.io
   ```

## 📊 Analytics & SEO

### Google Analytics

Add your Google Analytics ID in `src/app/layout.tsx`:

```typescript
verification: {
  google: 'your-google-verification-code',
}
```

### SEO Features

- **Meta tags**: Automatic generation from frontmatter
- **Open Graph**: Social media sharing optimization
- **Structured data**: JSON-LD for search engines
- **Sitemap**: Automatic generation
- **RSS feed**: Available at `/feed.xml`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create `.env.local` for local environment variables:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Comments (if using)
NEXT_PUBLIC_GISCUS_REPO=your-repo
NEXT_PUBLIC_GISCUS_REPO_ID=your-repo-id
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/my-feature`
3. **Commit changes**: `git commit -am 'Add some feature'`
4. **Push to branch**: `git push origin feature/my-feature`
5. **Submit a pull request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have questions or need help:

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For general questions and community chat
- **Email**: contact@tsonstack.com

## 🔮 Roadmap

- [ ] Comments system integration
- [ ] Newsletter subscription
- [ ] Advanced search with filters
- [ ] Reading progress indicator
- [ ] Social sharing buttons
- [ ] Related posts algorithm
- [ ] Multi-language support

## 🏆 Acknowledgments

- **Next.js** team for the amazing framework
- **Vercel** for hosting and development tools
- **Tailwind CSS** for the utility-first CSS framework
- **GitHub** for free hosting with GitHub Pages

---

**Built with ❤️ by TSonStack**

*Star this repository if you found it helpful!* 