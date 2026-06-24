# Bali Trip Website Deployment

This version is a plain static website plus Supabase for shared sync.

## 1. Create Supabase backend

1. Go to https://supabase.com and create a new project.
2. Open the project, then go to SQL Editor.
3. Paste and run everything from `supabase-schema.sql`.
4. Go to Project Settings > API.
5. Copy:
   - Project URL
   - anon public key
6. Open `config.js` and paste those two values:

```js
window.BALI_SUPABASE = {
  url: "https://YOUR-PROJECT-REF.supabase.co",
  anonKey: "YOUR-SUPABASE-ANON-PUBLIC-KEY",
};
```

## 2. Test locally

Open `index.html` in your browser.

If Supabase is configured, the page will show:

`Supabase sync is connected. Updates refresh automatically.`

## 3. Host the website

Upload the whole `bali-trip-website` folder to any static website host.

Easy options:

- Netlify: drag the folder into Netlify Drop.
- Cloudflare Pages: upload/connect the folder as a static site.
- GitHub Pages: push the folder to a repository and enable Pages.

After hosting, share the hosted URL with your friends. Everyone opening that same URL will read and write to the same Supabase tables.

## Korean quick version

1. Supabase 프로젝트 생성.
2. SQL Editor에서 `supabase-schema.sql` 전체 실행.
3. Project URL과 anon public key를 `config.js`에 입력.
4. `index.html`로 테스트.
5. `bali-trip-website` 폴더 전체를 Netlify, Cloudflare Pages, GitHub Pages 등에 업로드.
6. 생성된 URL을 친구들에게 공유.
