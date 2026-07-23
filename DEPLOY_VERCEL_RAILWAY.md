# DEPLOY VERCEL + RAILWAY - 5 MENIT LIVE TANPA VPS

## STEP 1: Push ke GitHub
git init
git add .
git commit -m "servitron.id ready vercel+railway"
git branch -M main
git remote add origin https://github.com/USERNAME/servitron.id.git
git push -u origin main

## STEP 2: Backend -> Railway (2 menit)
1. Buka railway.app -> Login GitHub
2. New Project -> Deploy from GitHub repo -> servitron.id
3. Add Service -> PostgreSQL -> Copy DATABASE_URL
4. Add Service -> Redis -> Copy REDIS_URL
5. Pilih service API -> Settings:
   - Root Directory: /
   - Dockerfile Path: apps/api/Dockerfile
   - Build Command: (kosong, pakai Dockerfile)
6. Variables (dari .env):
   DATABASE_URL=postgresql://...
   REDIS_URL=redis://...
   JWT_SECRET=...
   R2_ENDPOINT=https://...r2.cloudflarestorage.com
   R2_ACCESS_KEY=...
   R2_SECRET_KEY=...
   R2_BUCKET=servitron-prod
7. Settings -> Domains -> Generate Domain -> Custom Domain: api.servitron.id
   -> Di Cloudflare tambah CNAME api -> xxx.up.railway.app
8. Deploy -> Tunggu 2 menit -> https://api.servitron.id/api/health harus 200 OK

## STEP 3: Frontend -> Vercel (2 menit)
1. Buka vercel.com -> Login GitHub
2. Add New -> Project -> Import servitron.id
3. Framework: Next.js, Root Directory: apps/web
4. Env Variables:
   NEXT_PUBLIC_API_URL=https://api.servitron.id
   NEXT_PUBLIC_SITE_URL=https://servitron.id
5. Deploy -> 2 menit jadi https://servitron-id.vercel.app
6. Domains -> Add servitron.id -> Cloudflare CNAME www -> cname.vercel-dns.com

## STEP 4: Test Anti-Link-Mati
curl https://api.servitron.id/download/resolve?uuid=TEST-UUID
Harus return { token: ... }

Buka https://servitron.id/download/TEST-UUID -> Redirect ke R2 Signed URL 5 menit

## Biaya:
Vercel Hobby: $0 (100GB bandwidth gratis)
Railway: $5 free credit -> cukup 1 bulan, setelah itu $5/bulan
R2: $0 (10GB gratis)
Total awal: GRATIS!

## Kelebihan vs VPS:
+ Auto SSL, auto scale, CDN global, deploy git push
- Tidak bisa WebSocket persistent (Live Chat pakai polling aja di Vercel)

Jika mau Live Chat WS tetap, pakai Fly.io untuk backend (support WS):
flyctl launch --dockerfile apps/api/Dockerfile
