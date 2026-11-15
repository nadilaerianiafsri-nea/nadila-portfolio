# Nadila Eriani Afsri — Portfolio (Local ZIP)

A complete, editable, responsive portfolio website. The design follows the earlier single-page portfolio style and updates the public project information to match the internship and LinkedIn experience supplied by the owner.

## Open locally (no installation required)

1. Extract this ZIP into a folder.
2. Open `index.html` in Chrome, Edge, or Firefox.
3. Switch between **EN** and **ID** in the top-right corner.
4. Edit HTML, CSS, or JS in VS Code as needed.

For a local development server with Python (optional):

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Project structure

```text
Nadila_Portfolio_Revisi/
├── index.html                  # Structure and public content
├── styles.css                  # Responsive visual design
├── app.js                      # Bilingual text, navigation and project modal
├── assets/
│   ├── favicon.svg
│   ├── nadila-profile.png      # Image extracted from owner-supplied LinkedIn PDF
│   ├── sibapak-original.png    # Image extracted from owner-supplied LinkedIn PDF
│   └── library-portal-live.png # Cropped actual public homepage screenshot supplied in chat
└── README.md
```

## Scope of updates

- Changed the internship title to **Full-Stack Developer Intern**.
- Corrected the library portal from frontend-only to full-stack involvement.
- Explicitly reflected Next.js, NestJS, MariaDB, Docker Compose, and Linux VPS work.
- Added a live website link to the Library Portal project detail dialog.
- Replaced illustrative Library Portal UI with an owner-supplied real screenshot.
- Preserved bilingual EN/ID navigation, responsive layout, projects, experience, skills, and contact features.
- Kept SiBapak descriptions conservative and did not claim unsupported individual responsibilities.
- Avoided an "Open to Work" announcement; the header instead indicates ongoing projects and learning.

## Important privacy notes

- This ZIP includes only the **portfolio website** source code, not the private `perpus-portal` project code.
- No SSH hostnames, credentials, API keys, or private repository files are published in this package.
- Confirm that project screenshots are approved for public display before uploading to any public host.

## Links

- LinkedIn: https://www.linkedin.com/in/nadila-eriani-afsri-a661a6403/
- Library Portal (public): https://portalperpusriau.tech/
- SiBapak (listed in existing portfolio): https://sibapak.pocari.id/

## GitHub status

This ZIP is meant for local review. It has **not** been uploaded as a new GitHub commit. The earlier draft branch and pull request created in the previous conversation step are separate from this ZIP, and `main` was not modified by that draft.

## Revisi tampilan dan tautan SiBapak

- Tautan langsung SiBapak: https://sibapak.pocari.id/ (tombol pada kartu dan dialog proyek).
- Tautan langsung Library Portal: https://portalperpusriau.tech/.
- Perbaikan kontras, hirarki teks, warna, tombol proyek, efek hover, serta responsivitas ponsel.
- Label proyek dan tombol tersedia dalam bahasa Inggris/Indonesia.
- Tidak ada perubahan yang dilakukan ke GitHub.


## Perbaikan fokus: kualitas gambar SiBapak (15 November 2026)

- **Penyebab visual:** Screenshot penuh resolusi 1920x1080 di GitHub ditampilkan pada kartu sempit. Tulisan yang seharusnya dibaca pada layar 1920px menjadi terlalu kecil ketika diperkecil ke 400–500px, sehingga tampak buram. Atribut `width`/`height` HTML bukan penyebab penurunan resolusi file aslinya.
- Hanya kartu SiBapak diberi tampilan crop/focal preview agar bagian isi lebih terlihat. Proporsi screenshot tetap 16:9, tanpa meregangkan gambar.
- Klik gambar atau tautan **View full-resolution screenshot / Lihat screenshot resolusi penuh** untuk membuka screenshot asli 1920x1080 di tab baru agar bisa diperbesar secara bebas.
- URL gambar resolusi tinggi: https://raw.githubusercontent.com/nadilaerianiafsri-nea/nadila-portfolio/main/assets/sibapak-original.png (blob SHA 184f2da53c0b530a1ac4b6901788648209c982c9, diperiksa dari cabang `main` pada 15 November 2026).
- Saat ada internet, halaman memuat screenshot resolusi tinggi dari repository GitHub publik. Jika offline/tidak terjangkau, beralih ke gambar lokal `assets/sibapak-original.png` berukuran 480x270 yang dibundel dari ZIP portofolio sebelumnya. Untuk **kualitas penuh offline** silakan ganti aset lokal dengan gambar asli 1920x1080 dari GitHub sebelum membuka halaman.
- Tidak ada perubahan pada kartu proyek Library Portal, konten lain, ataupun repository GitHub. Perbaikan dilakukan hanya dalam paket ZIP lokal.

### Jika ingin semua gambar jernih juga saat offline

Jalankan `python sync_sibapak_image.py` **sekali saat terhubung internet** dari folder hasil ekstrak ZIP. Script mengambil gambar asli beresolusi tinggi dari GitHub milikmu dan mengganti **hanya** `assets/sibapak-original.png` secara lokal setelah memverifikasi format dan resolusinya. Script ini tidak melakukan commit atau perubahan di GitHub.
