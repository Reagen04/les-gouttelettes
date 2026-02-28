# Deploy To Vercel

## 1) Push the project to GitHub

From `my-web-app`:

```powershell
git init
git add .
git commit -m "School website ready for deployment"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 2) Import into Vercel

1. Open https://vercel.com/new
2. Import your GitHub repository
3. In **Root Directory**, choose `frontend`
4. Keep defaults (Vercel detects Vite)
5. Click **Deploy**

## 3) Public URL

After deploy, Vercel gives a public URL like:

`https://your-project-name.vercel.app`

## Notes

- `frontend/vercel.json` is already configured.
- If you update the site later, just push to GitHub again and Vercel redeploys automatically.
