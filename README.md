# Chat App - Qiscus Web Developer Intern Task

Ini adalah aplikasi chat sederhana yang dibuat sebagai bagian dari proses seleksi untuk posisi **Web Developer Intern** di **Qiscus**. Aplikasi ini mendukung fitur single chat dan group chat, serta dapat menampilkan pesan berupa teks, gambar, video, dan PDF.

## Link Deployment

Aplikasi ini sudah di-deploy menggunakan **Netlify**. Anda dapat mengaksesnya di: 👉 [https://chat-app-fahri.netlify.app/](https://chat-app-fahri.netlify.app/)

## Tugas yang Dikerjakan

### 1. Diagram Sistem Chat
Diagram alur sistem chat yang mendukung single chat dan group chat dapat dilihat di: 📄 chatdiagram.drawio.png

### 2. Entity-Relationship Diagram (ERD)
Struktur database untuk sistem chat dapat dilihat di: 📄 erddiagramm.drawio.png

### 3. Membuat Antarmuka Chat Responsif
* Aplikasi chat ini dibuat menggunakan **React**
* Antarmuka dirancang untuk responsif, sehingga dapat digunakan di perangkat mobile dan desktop
* Data chat diambil dari file `data.json` yang sudah disediakan

### 4. Memperluas Format JSON
* Format JSON sudah diperluas untuk mendukung pesan berupa gambar, video, dan PDF
* Contoh pesan yang didukung:

```json
{
  "id": 885517,
  "type": "image",
  "message": "https://cdn.pixabay.com/photo/2023/03/04/15/53/duck-7829778_640.jpg",
  "sender": "customer@mail.com"
},
{
  "id": 885518,
  "type": "video",
  "message": "https://www.w3schools.com/html/mov_bbb.mp4",
  "sender": "agent@mail.com"
},
{
  "id": 885519,
  "type": "pdf",
  "message": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  "sender": "admin@mail.com"
}
```

### 5. Mengembangkan Antarmuka Chat untuk Menampilkan Pesan Berupa Gambar, Video, atau PDF
* Aplikasi ini dapat menampilkan pesan berupa:
  * **Teks**: Pesan teks biasa
  * **Gambar**: Gambar ditampilkan menggunakan tag `<img>`
  * **Video**: Video ditampilkan menggunakan tag `<video>` dengan kontrol pemutaran
  * **PDF**: Link untuk mengunduh PDF ditampilkan menggunakan tag `<a>`

## Cara Menjalankan Aplikasi di Lokal

1. **Clone Repositori**:
```bash
git clone https://github.com/NaufalNurFahriza/Chat_App.git
cd Chat_App
```

2. **Install Dependencies**:
```bash
npm install
```

3. **Jalankan Aplikasi**:
```bash
npm start
```
Aplikasi akan berjalan di `http://localhost:3000`

4. **Build untuk Produksi**:
```bash
npm run build
```

## Struktur Folder
```
src/
├── components/
│   ├── ChatContainer.jsx
│   ├── Message.jsx
│   └── RoomList.jsx
├── App.js
├── App.css
├── index.js
├── data.json
└── styles.css
```

## Teknologi yang Digunakan
* **React**: Untuk membangun antarmuka pengguna
* **CSS**: Untuk styling dan tampilan responsif
* **Netlify**: Untuk deployment aplikasi
