# TSonStack Blog - Setup Guide

Hướng dẫn chi tiết để thiết lập và deploy blog TSonStack lên GitHub Pages.

## 📋 Yêu cầu hệ thống

- **Node.js**: Version 18.17.0 hoặc mới hơn
- **npm**: Version 9.0.0 hoặc mới hơn
- **Git**: Version 2.0 hoặc mới hơn
- **GitHub Account**: Để host trên GitHub Pages

## 🚀 Hướng dẫn Setup

### Bước 1: Clone Repository

```bash
# Clone repository về máy local
git clone https://github.com/lethanhson9901/lethanhson9901.github.io.git
cd lethanhson9901.github.io

# Hoặc nếu bạn fork repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
cd YOUR-REPOSITORY-NAME
```

### Bước 2: Cài đặt Dependencies

```bash
# Cài đặt tất cả packages cần thiết
npm install

# Kiểm tra cài đặt thành công
npm run dev
```

Sau khi chạy `npm run dev`, mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000) để xem blog.

### Bước 3: Tùy chỉnh thông tin cá nhân

#### 3.1 Cập nhật metadata chính

Chỉnh sửa file `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Your Blog Name - Technology & Life Stories',
    template: '%s | Your Blog Name'
  },
  description: 'Your personal description here',
  // ... cập nhật thông tin khác
}
```

#### 3.2 Cập nhật thông tin navigation

Chỉnh sửa file `src/components/layout/navigation.tsx`:

```typescript
// Thay đổi logo và tên blog
<span className="hidden font-bold sm:inline-block text-xl gradient-text">
  Your Blog Name
</span>
```

#### 3.3 Cập nhật footer

Chỉnh sửa file `src/components/layout/footer.tsx`:

```typescript
// Cập nhật social links và thông tin liên hệ
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/your-username',
    icon: Github,
  },
  // ... các social links khác
]
```

#### 3.4 Cập nhật trang About

Chỉnh sửa file `src/app/about/page.tsx` với thông tin cá nhân của bạn.

### Bước 4: Tạo content đầu tiên

#### 4.1 Tạo bài viết mới

```bash
# Tạo file markdown mới
touch content/posts/my-first-post.md
```

#### 4.2 Thêm nội dung

```markdown
---
title: "My First Blog Post"
excerpt: "This is my first blog post on TSonStack!"
publishedAt: "2024-01-15"
category: "Technology"
tags: ["First Post", "Introduction"]
featured: true
author:
  name: "Your Name"
  avatar: "/images/avatar.jpg"
---

# My First Blog Post

Welcome to my blog! This is my first post...
```

### Bước 5: Tùy chỉnh thiết kế

#### 5.1 Màu sắc

Chỉnh sửa `src/app/globals.css` để thay đổi màu chủ đạo:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Thay đổi màu primary */
  /* ... các màu khác */
}
```

#### 5.2 Fonts

Cập nhật fonts trong `tailwind.config.js` hoặc `src/app/layout.tsx`.

## 🌐 Deploy lên GitHub Pages

### Bước 1: Chuẩn bị Repository

1. **Tạo repository mới** trên GitHub với tên `username.github.io` (thay `username` bằng GitHub username của bạn)

2. **Hoặc sử dụng repository có sẵn** và cấu hình GitHub Pages

### Bước 2: Cấu hình GitHub Pages

1. Vào **Settings** của repository
2. Scroll xuống mục **Pages**
3. Chọn **Source**: GitHub Actions
4. Lưu cài đặt

### Bước 3: Push code lên GitHub

```bash
# Add remote origin (nếu chưa có)
git remote add origin https://github.com/your-username/your-username.github.io.git

# Add tất cả files
git add .

# Commit changes
git commit -m "Initial blog setup"

# Push lên main branch
git push -u origin main
```

### Bước 4: Kiểm tra deployment

1. Vào tab **Actions** trong repository
2. Xem quá trình build và deploy
3. Sau khi thành công, truy cập `https://your-username.github.io`

## 🔧 Cấu hình nâng cao

### Custom Domain

1. **Mua domain** từ nhà cung cấp domain
2. **Thêm CNAME file** vào thư mục `public/`:
   ```
   yourdomain.com
   ```
3. **Cấu hình DNS** tại nhà cung cấp domain:
   ```
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```

### Google Analytics

1. **Tạo GA4 property** tại [Google Analytics](https://analytics.google.com)
2. **Lấy Measurement ID**
3. **Cập nhật** trong `src/app/layout.tsx`:
   ```typescript
   verification: {
     google: 'your-google-verification-code',
   }
   ```

### Search Console

1. **Đăng ký** tại [Google Search Console](https://search.google.com/search-console)
2. **Verify ownership** bằng HTML tag hoặc DNS
3. **Submit sitemap**: `https://yourdomain.com/sitemap.xml`

## 📝 Quản lý Content

### Thêm bài viết mới

1. **Tạo file .md** trong `content/posts/`
2. **Thêm frontmatter** với thông tin bài viết
3. **Viết nội dung** bằng Markdown
4. **Commit và push** lên GitHub

### Cấu trúc frontmatter

```yaml
---
title: "Tiêu đề bài viết"
excerpt: "Mô tả ngắn"
publishedAt: "YYYY-MM-DD"
category: "Technology|Life"
tags: ["tag1", "tag2"]
featured: true|false
author:
  name: "Tên tác giả"
  avatar: "/path/to/avatar"
seo:
  title: "SEO title"
  description: "SEO description"
---
```

### Categories và Tags

- **Categories**: Phân loại chính (Technology, Life, etc.)
- **Tags**: Từ khóa chi tiết (#React, #NextJS, #WorkLife, etc.)

## 🔍 SEO và Performance

### Tối ưu hóa

1. **Images**: Sử dụng Next.js Image component
2. **Metadata**: Đầy đủ meta tags cho mỗi trang
3. **Sitemap**: Tự động generate
4. **RSS Feed**: Available tại `/feed.xml`
5. **Loading**: Lazy loading và code splitting

### Kiểm tra Performance

1. **Lighthouse**: Chạy audit trong Chrome DevTools
2. **PageSpeed Insights**: https://pagespeed.web.dev
3. **Core Web Vitals**: Monitor qua Search Console

## 🛠️ Troubleshooting

### Lỗi thường gặp

#### Build failed
```bash
# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Deployment failed
- Kiểm tra GitHub Actions logs
- Đảm bảo repository settings đúng
- Verify GitHub Pages source là "GitHub Actions"

#### Content không hiển thị
- Kiểm tra frontmatter syntax
- Đảm bảo file .md trong đúng thư mục
- Verify date format: YYYY-MM-DD

### Support

Nếu gặp vấn đề:

1. **Check documentation**: README.md và file này
2. **GitHub Issues**: Tạo issue mới
3. **Community**: Join Discord/Telegram groups
4. **Email**: contact@tsonstack.com

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

**Chúc bạn thành công với blog của mình! 🎉** 