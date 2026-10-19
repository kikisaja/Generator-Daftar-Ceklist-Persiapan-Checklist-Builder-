# 🎒 Checklist Builder

Aplikasi pembuat daftar ceklist interaktif (*Checklist Builder*) berbasis web yang menghitung persentase penyelesaian tugas atau perlengkapan traveling secara *real-time*.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **State Array Management & Filtering:**
   Mengelola data item ceklist menggunakan larik objek (`Array of Objects`), serta menggunakan metode filter dan map untuk memperbarui status.
2. **Dynamic Progress Bar Calculation:**
   Menghitung rasio ketercapaian $\frac{\text{Item Selesai}}{\text{Total Item}} \times 100\%$ dan mengontrol lebar elemen DOM `style.width`.
3. **DOM Manipulation & Event Binding:**
   Menambahkan dan menghapus elemen item secara dinamis serta mengikat event interaksi centang/hapus.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Bilah progres, form tambah tugas, dan daftar item checklist
├── style.css        # Desain Neobrutalism kuning-pop, indikator progress, dan coretan teks
└── script.js        # Logika array item, kalkulasi persentase, & manipulasi DOM
