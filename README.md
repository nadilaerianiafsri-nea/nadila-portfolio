# Nadila Eriani Afsri — React Portfolio

Portofolio pribadi dengan pendekatan **editorial developer portfolio**. Dibangun menggunakan **React + Vite + CSS**, konten tersedia dalam bahasa Inggris dan Indonesia.

## Menjalankan di Windows / VS Code

1. Ekstrak ZIP, buka folder **Nadila_Portfolio_React_Editorial** di VS Code.
2. Pastikan Node.js versi **20.19+ atau 22+** tersedia: `node -v`.
3. Jalankan perintah di terminal **dalam folder yang mengandung `package.json`**:

   ```powershell
   npm install
   npm run dev
   ```

4. Buka URL lokal yang muncul, umumnya **http://localhost:5173/**.

> **Catatan:** Ini project React, berbeda dengan ZIP HTML statis sebelumnya. Jangan langsung membuka `index.html` tanpa menjalankan Vite.

## Build produksi

```powershell
npm run build
npm run preview
```

Hasil build tersedia dalam folder `dist/` dan bisa diunggah ke layanan hosting statis. Atur deployment sesuai platform hosting yang dipakai. `base: './'` pada konfigurasi Vite memungkinkan penggunaan jalur relatif.

## Struktur source

```text
Nadila_Portfolio_React_Editorial/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── profile.png
│       ├── sibapak.png
│       └── library.png
└── src/
    ├── main.jsx
    ├── App.jsx
    └── styles.css
```

## Konsep desain

- **Font:** DM Sans untuk teks antarmuka dan Instrument Serif sebagai aksen editorial.
- **Palet:** warm ivory, charcoal, muted olive, dan soft terracotta.
- **Tata letak:** tipografi kuat, whitespace, dokumentasi proyek yang nyata, tanpa testimoni atau metrik yang dibuat-buat.
- **Interaksi:** pilihan bahasa EN/ID, menu mobile, pratinjau screenshot, tautan website publik.
- **Konten:** berdasarkan versi terbaru repository `nadilaerianiafsri-nea/nadila-portfolio` pada 15 November 2026 dan informasi pemilik.

## Proyek

- SiBapak: https://sibapak.pocari.id/
- Portal Perpustakaan Kemenkum Riau: https://portalperpusriau.tech/
- LinkedIn: https://www.linkedin.com/in/nadila-eriani-afsri-a661a6403/

## Catatan aset dan privasi

- Aset gambar disalin dari repository portofolio publik yang telah terverifikasi, tanpa mengambil source code dari repository aplikasi yang private.
- Gambar SiBapak di `main` saat pengemasan berukuran **480×270 px**, jadi teks kecil di screenshot mungkin tidak jelas ketika diperbesar. **Ini batas file sumber, bukan bug CSS.** Gunakan screenshot asli resolusi lebih tinggi di `public/images/sibapak.png` jika tersedia, tanpa perlu mengubah source React.
- Tidak mengandung kunci server, SSH, token, rahasia aplikasi, atau repository private.
- Tidak ada perubahan apa pun yang di-*push* ke GitHub; ZIP ini untuk tinjauan lokal.

## Kustomisasi cepat

- Konten EN/ID dan data proyek: `src/App.jsx` bagian `CONTENT` dan `PROJECTS`.
- Styling semua section dan breakpoint: `src/styles.css`.
- Foto profil dan screenshot proyek: `public/images/`.
- Judul, metadata, dan font: `index.html`.

## Aksesibilitas

Tersedia skip link, label navigasi, state tombol bahasa, menu mobile yang menggunakan atribut `aria-expanded`, popup screenshot dengan tombol tutup serta Esc, dan gaya `prefers-reduced-motion`.

## Penyempurnaan visual terbaru

- Ornamen garis kecil sebelum label section (seperti `01 / PROYEK PILIHAN`) dihapus. Penomoran dan teks section tetap ada.
- Monogram dekoratif `N / 26` di sudut foto hero dihapus agar tidak membingungkan pengunjung.
- Komponen React, data proyek, tautan, foto, pilihan EN/ID, dan tampilan responsif lainnya dipertahankan.
