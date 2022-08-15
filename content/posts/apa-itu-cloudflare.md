---
tags:
- Cloudflare
- Web
- Linux
title: Apa itu Cloudflare?
description: Cloudflare adalah penyedia infrastruktur Internet, yang idenya adalah
  untuk meningkatkan keamanan, kinerja, dan kendalan untuk apa pun yang terhubung
  ke Internet.
date: 2022-08-15T17:00:00+07:00
image: "/images/cara-kerja-cloudflare.webp"
categories:
- Web
authors:
- Ozi Saputra
draft: false

---
Perkembagan situs web dan aplikasi web telah menjadi hal yang umum akhir-akhir ini. Sebagian besar situs web dan aplikasi web dibuat seaman mungkin, tetapi banyak juga website yang memiliki keamanan rendah. Dalam hal tersebut, Cloudflare membantu memberikan keamanan dan kinerja untuk semua jenis situs web.

Cloudflare adalah penyedia infrastruktur Internet, yang idenya adalah untuk meningkatkan keamanan, kinerja, dan kendalan untuk apa pun yang terhubung ke Internet. Sebagian besar fitur di Cloudflare dapat diakses dengan gratis dan dapat digunakan dengan mudah. Cloudflare memiliki UI atau tampilan yang sederhana dan mudah dipahami oleh orang awam sekalipun.

Cloudflare bekerja pada model Freemium tetapi sebagian besar fitur intinya dapat diakses secara gratis dengan beberapa batasan yang telah ditentukan.

**Fitur gratis  Cloudflare**

* **Hosting DNS**  
  DNS bertanggung jawab untuk menerjemahkan nama domain menjadi alamat IP, Cloudflare menyediakan hosting DNS untuk mengelola DNS Records, dan Cloudflare records bekerja sangat cepat dalam banyak kasus.
* **CDN**  
  Content Delivery Network (CDN) atau Jaringan Pengiriman Konten adalah layanan yang menyimpan situs web Anda dan melayani situs web dari server terdekat secara geografis yang pada gilirannya meningkatkan kecepatan pemuatan situs web.
* **SSL/TLS**  
  Cloudflare menyediakan SSL gratis untuk nama domain dan subdomain wildcard untuk level 3 di nama host secara gratis
* **Firewall**  
  Firewall Cloudflare menyediakan cara untuk memblokir lalu lintas menggunakan alamat IP, nama host, bot yang dikenal, URI, dan banyak lagi.
* **Page Rules**  
  Page Rules menyediakan fungsi yang berbeda seperti pengalihan, penulisan ulang HTTPS, dan banyak lagi.
* **Aplikasi**  
  Dibuat oleh pengembang, aplikasi Cloudflare menyediakan fungsionalitas yang berbeda hanya dengan mengklik satu tombol.
* **Analytics**  
  Cloudflare menyediakan analisis sederhana untuk situs web Anda.
* **Registrar**  
  Cloudflare menyediakan pendaftaran domain dengan harga grosir dengan Whois gratis.
* **Worker**  
  Fungsi tanpa server atau serverless yang berjalan dalam bahasa seperti JavaScript, C, C++, dan Rust.
* **Pages**

  Memberikan web hosting statis gratis dengan akses yang sangat cepat.

**Cara Kerja Cloudflare :**

Secara teknis Cloudflare bertindak sebagai _reverse proxy_ atau proxy terbalik yang berarti lalu lintas lengkap akan dialihkan melalui server Cloudflare yang tersebar di lebih dari 200 kota di seluruh dunia. Cloudflare merupakan layanan pertama yang menggabungkan keamanan dengan kinerja. Server Cloudflare yang disebut server "Edge" oleh perusahaan men-cache konten halaman web dan berfungsi kemudian bertindak sebagai CDN dan karena lalu lintas harus menyentuh server Edge sebelum server web asli, Cloudflare dapat memblokir bot jahat apa pun, melindungi dari DDoS, dan juga dapat memblokir lalu lintas sesuai dengan aturan firewall.

![Cara Kerja Cloudflare](/images/posts/cara-kerja-cloudflare.png "Cara Kerja Cloudflare")

**Keunggulan Cloudflare :**  
Keunggulan utama Cloudflare adalah memberikan keamanan dan performa secara gratis dalam skala yang lebih besar, beberapa keunggulan lainnya adalah :

* Cloudflare memiliki paket gratis dengan sebagian besar fitur intinya yang bisa digunakan.
* Cloudflare bertindak sebagai CDN yang meningkatkan kecepatan memuat situs web.
* Cloudflare melindungi dari bot jahat dan serangan DDoS.
* Ini menyediakan DNS Terkelola dengan waktu TTL pendek.
* Cloudflare memberikan sertifikat SSL gratis yang sepenuhnya dikelola oleh Cloudflare, diperbarui setiap tahun.
* Cloudflare Menyediakan aturan penerusan dan fungsi tanpa server.
* Cloudflare memiliki add-on independen yang berbeda untuk layanan yang berbeda.
* Cloudflare menyediakan layanan Pendaftar Domain.
* Menyediakan API untuk mengelola sebagian besar layanan.

**Kekurangan Cloudflare :**  
Masalah utama Cloudflare adalah jika ada server Cloudflare yang down disalah satu wilayah, situs web Anda mungkin akan terkena dampaknya. Namun bukan berarti situs anda tidak dapat diakses, situs anda akan di routing ke wilayah terdekat yang berjalan normal. Ada juga beberapa kelemahan lainnya adalah:

* Paket gratis hadir dengan banyak batasan, dan paket berbayar tidak murah.
* Zona DNS dikelola yang mungkin tidak berguna untuk beberapa pengguna.
* Tidak dapat menggunakan server Nama Kustom dalam paket gratis.
* Sertifikat SSL hanya akan diterima jika Cloudflare aktif di domain tersebut.
* Sertifikat SSL hanya sedalam satu tingkat dan dikeluarkan ke sni.cloudflaressl.com dengan domain Anda di bidang SAN.
* Aturan halaman dan situs Pekerja sangat terbatas dalam paket Gratis.

Terlepas dari kekurangannya, Cloudflare memberikan banyak keunggulan dengan banyak fitur gratis yang dapat mempercepat performa dan keamanan situs web. Jadi menggunakan Cloudflare bukanlah pilihan yang buruk, apalagi untuk usaha kecil yang mungkin memerlukan keamanan dan kecepatan. Anda bisa mencoba terlebih dahulu paket gratis sebelum beralih yang ke yang berbayar untuk menikmati fitur lainnya. Sekian saja post kali ini tentang Cloudflare, Apakah ada yang ingin ditanyakan tentang Cloudflare? Silahkan komentar dibawah ya, Terimakasih.