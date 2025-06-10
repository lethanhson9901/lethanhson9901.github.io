---
title: "Hướng dẫn viết bài cho TSonStack Blog"
excerpt: "Học cách tạo và quản lý bài viết trên blog cá nhân được xây dựng bằng Next.js và Markdown."
publishedAt: "2024-01-16"
category: "Technology"
tags: ["Blog", "Next.js", "Markdown", "Tutorial"]
featured: true
author:
  name: "TSonStack"
  avatar: "/images/avatar.jpg"
seo:
  title: "Cách viết bài blog với Next.js và Markdown - TSonStack"
  description: "Hướng dẫn chi tiết cách tạo, viết và quản lý bài viết cho blog cá nhân với Next.js và Markdown."
---

# Hướng dẫn viết bài cho TSonStack Blog

Chào mừng bạn đến với hướng dẫn viết bài chi tiết cho blog TSonStack! Trong bài viết này, tôi sẽ hướng dẫn bạn cách tạo và quản lý content một cách hiệu quả.

## 📋 Cấu trúc Frontmatter

Mỗi bài viết cần có **frontmatter** ở đầu file, được bao quanh bởi `---`. Đây là thông tin metadata của bài viết:

```yaml
---
title: "Tiêu đề bài viết"
excerpt: "Mô tả ngắn gọn về nội dung bài viết"
publishedAt: "2024-01-16"
category: "Technology"
tags: ["tag1", "tag2", "tag3"]
featured: true
author:
  name: "TSonStack"
  avatar: "/images/avatar.jpg"
seo:
  title: "SEO title cho Google"
  description: "SEO description cho social media"
---
```

### Giải thích các trường:

- **title**: Tiêu đề chính của bài viết
- **excerpt**: Mô tả ngắn hiển thị ở trang chủ và preview
- **publishedAt**: Ngày xuất bản theo format YYYY-MM-DD
- **category**: Danh mục chính (Technology, Life, Tutorial, etc.)
- **tags**: Mảng các từ khóa liên quan
- **featured**: `true` để hiển thị ở trang chủ, `false` để ẩn
- **author**: Thông tin tác giả
- **seo**: Thông tin SEO (optional)

## ✍️ Viết nội dung với Markdown

### Headers (Tiêu đề)

```markdown
# H1 - Tiêu đề chính
## H2 - Tiêu đề phụ
### H3 - Tiêu đề con
#### H4 - Tiêu đề nhỏ
```

### Text Formatting

```markdown
**Bold text** - Chữ đậm
*Italic text* - Chữ nghiêng
~~Strikethrough~~ - Gạch ngang
`inline code` - Code inline
```

### Lists

```markdown
## Danh sách có thứ tự
1. Item đầu tiên
2. Item thứ hai
3. Item thứ ba

## Danh sách không thứ tự
- Item 1
- Item 2
  - Sub item 2.1
  - Sub item 2.2
- Item 3
```

### Links và Images

```markdown
[Text link](https://example.com)

![Alt text](/path/to/image.jpg)
```

### Code Blocks

Để hiển thị code với syntax highlighting:

````markdown
```javascript
function helloWorld() {
  console.log("Hello, World!");
  return true;
}
```

```python
def hello_world():
    print("Hello, World!")
    return True
```

```bash
npm install
npm run dev
```
````

### Blockquotes

```markdown
> Đây là một quote nổi bật
> Có thể viết nhiều dòng
```

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |
```

## 🎨 Tips viết bài hiệu quả

### 1. Cấu trúc bài viết tốt

- **Hook đầu bài**: Câu mở đầu thu hút người đọc
- **Giới thiệu**: Tóm tắt nội dung sẽ trình bày
- **Nội dung chính**: Chia thành các section rõ ràng
- **Kết luận**: Tổng kết và call-to-action

### 2. SEO-friendly

- Sử dụng keywords tự nhiên trong title và content
- Viết meta description hấp dẫn (150-160 ký tự)
- Sử dụng headers (H1, H2, H3) đúng cách
- Thêm alt text cho images

### 3. Readability

- **Đoạn văn ngắn**: Tối đa 3-4 câu
- **Sử dụng bullet points**: Để liệt kê thông tin
- **Highlight keywords**: Bold/italic cho từ khóa quan trọng
- **Thêm images**: Break up text với hình ảnh

## 📂 Tổ chức Content

### Categories được khuyên dùng:

- **Technology**: Lập trình, tools, frameworks
- **Life**: Kinh nghiệm cá nhân, work-life balance
- **Tutorial**: Hướng dẫn step-by-step
- **Review**: Đánh giá sản phẩm, dịch vụ

### Tags suggestions:

```
Technology: React, Next.js, JavaScript, TypeScript, Node.js, Python
Life: Career, Work-Life-Balance, Productivity, Mental-Health
Tools: VS Code, Git, Docker, AWS, Vercel
```

## 🚀 Publish và Deploy

Sau khi viết xong bài:

```bash
# Add file mới
git add .

# Commit với message mô tả
git commit -m "Add new post: Hướng dẫn viết bài"

# Push lên GitHub
git push origin main
```

GitHub Actions sẽ tự động build và deploy blog trong vài phút!

## 📈 Theo dõi Performance

### Analytics

Sau khi có traffic, bạn có thể:

- Cài đặt Google Analytics
- Monitor page views
- Track user engagement
- Optimize content dựa trên data

### SEO Tools

- **Google Search Console**: Monitor search performance
- **Lighthouse**: Check page speed và SEO score
- **GTmetrix**: Detailed performance analysis

## 💡 Content Ideas

### Technology Posts

- Tutorial về công nghệ mới
- So sánh frameworks/tools
- Best practices và patterns
- Problem solving experiences

### Life Posts

- Career journey stories
- Work-life balance tips
- Learning experiences
- Industry insights

## 🎯 Next Steps

Bây giờ bạn đã biết cách viết bài, hãy:

1. **Tạo editorial calendar**: Plan nội dung trước
2. **Consistency**: Đăng bài định kỳ
3. **Engage với readers**: Trả lời comments
4. **Share trên social media**: Tăng reach

## Kết luận

Viết blog là một journey dài hạn. Quan trọng nhất là:

- **Viết về những gì bạn passionate**
- **Provide value** cho readers
- **Consistent** trong việc đăng bài
- **Continuous learning** và cải thiện

Happy blogging! 🎉

---

*Bạn có thắc mắc gì về việc viết bài không? Hãy để lại comment hoặc liên hệ với tôi qua email!* 