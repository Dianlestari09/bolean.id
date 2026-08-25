export const allProjects = [
  {
    title: "E-Commerce Web Template",
    slug: "ecommerce-web-template",
    category: "Software - Web",
    serviceId: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Template toko online interaktif dengan fitur keranjang belanja dan checkout dinamis.",
    features: ["Sistem Keranjang Belanja", "Integrasi Payment Gateway", "Dashboard Admin Lengkap", "SEO Optimized"],
    benefits: [
      { icon: 'zap', title: 'Akses Super Cepat', desc: 'Dioptimalkan untuk performa tinggi dan waktu muat instan.' },
      { icon: 'smartphone', title: 'Desain Responsif', desc: 'Tampil sempurna di berbagai perangkat, dari layar sentuh hingga desktop.' },
      { icon: 'trending-up', title: 'Skalabilitas Tinggi', desc: 'Siap menangani lonjakan pengunjung tanpa menurunkan performa.' }
    ],
    technologies: ['Astro', 'React', 'Next.js', 'Node.js', 'Tailwind CSS']
  },
  {
    title: "Company Profile Starter",
    slug: "company-profile-starter",
    category: "Software - Web",
    serviceId: "web",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Template profil perusahaan yang profesional, responsif, dan siap untuk SEO.",
    features: ["Desain Elegan", "Galeri Portofolio", "Integrasi Peta Digital", "Form Kontak Terhubung Email"],
    benefits: [
      { icon: 'zap', title: 'Akses Super Cepat', desc: 'Dioptimalkan untuk performa tinggi dan waktu muat instan.' },
      { icon: 'smartphone', title: 'Desain Responsif', desc: 'Tampil sempurna di berbagai perangkat, dari layar sentuh hingga desktop.' },
      { icon: 'trending-up', title: 'Skalabilitas Tinggi', desc: 'Siap menangani lonjakan pengunjung tanpa menurunkan performa.' }
    ],
    technologies: ['Astro', 'React', 'Next.js', 'Node.js', 'Tailwind CSS']
  },
  {
    title: "Mobile Banking UI",
    slug: "mobile-banking-ui",
    category: "Software - Mobile",
    serviceId: "mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Desain antarmuka aplikasi perbankan modern yang mengutamakan keamanan dan kemudahan.",
    features: ["Autentikasi Biometrik", "Transfer Cepat", "Riwayat Transaksi Visual", "Mode Gelap (Dark Mode)"],
    benefits: [
      { icon: 'activity', title: 'Performa Setara Native', desc: 'Transisi halus dan interaksi cepat tanpa lag atau jeda.' },
      { icon: 'shield-check', title: 'Keamanan Tingkat Lanjut', desc: 'Enkripsi data dan standar keamanan transaksi yang ketat.' },
      { icon: 'star', title: 'UX Modern', desc: 'Desain antarmuka intuitif yang disukai oleh pengguna aktif.' }
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    title: "Enterprise ERP System",
    slug: "enterprise-erp-system",
    category: "Software - Enterprise",
    serviceId: "enterprise",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sistem manajemen perusahaan (ERP) kustom untuk melacak keuangan dan sumber daya manusia.",
    features: ["Modul HR & Payroll", "Modul Keuangan & Akuntansi", "Manajemen Inventaris", "Laporan Analitik Tersuai"],
    benefits: [
      { icon: 'settings', title: 'Otomatisasi Proses', desc: 'Hilangkan input manual dan percepat alur kerja departemen.' },
      { icon: 'link', title: 'Terintegrasi Penuh', desc: 'Menghubungkan data SDM, Keuangan, dan Operasional dalam satu sistem.' },
      { icon: 'lock', title: 'Keamanan Level Bank', desc: 'Hak akses bertingkat dan audit log untuk setiap perubahan data.' }
    ],
    technologies: ['Python', 'Django', 'Go', 'PostgreSQL', 'Docker']
  },
  {
    title: "High-Performance Server Architecture",
    slug: "server-architecture",
    category: "Hardware - Server",
    serviceId: "server",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Struktur setup server skala menengah untuk menjamin uptime aplikasi hingga 99.9%.",
    features: ["Load Balancing", "Clustering Database", "Keamanan Firewall Ketat", "Backup Otomatis"],
    benefits: [
      { icon: 'clock', title: 'Uptime 99.9%', desc: 'Arsitektur andal yang memastikan aplikasi bisnis Anda selalu aktif.' },
      { icon: 'database', title: 'Redundansi Data', desc: 'Sistem pencadangan berlapis untuk mencegah kehilangan data kritis.' },
      { icon: 'cpu', title: 'Kinerja Maksimal', desc: 'Konfigurasi perangkat keras khusus untuk beban komputasi berat.' }
    ],
    technologies: ['Linux', 'Windows Server', 'Dell EMC', 'HPE', 'Nginx/Apache']
  },
  {
    title: "Secure Enterprise Network",
    slug: "secure-enterprise-network",
    category: "Hardware - Networking",
    serviceId: "networking",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Implementasi jaringan aman dengan router dan firewall enterprise untuk kantor skala besar.",
    features: ["Enterprise Firewall", "VPN Site-to-Site", "Segmentasi VLAN", "Sistem Pencegahan Intrusi (IPS)"],
    benefits: [
      { icon: 'globe', title: 'Koneksi Stabil', desc: 'Pemerataan sinyal dan bandwidth ke setiap sudut kantor.' },
      { icon: 'shield', title: 'Keamanan Jaringan Tinggi', desc: 'Proteksi dari ancaman cyber internal maupun eksternal.' },
      { icon: 'bar-chart', title: 'Manajemen Bandwidth', desc: 'Prioritaskan kecepatan untuk aplikasi dan divisi krusial perusahaan.' }
    ],
    technologies: ['Cisco', 'MikroTik', 'Ubiquiti', 'Fortinet', 'pfSense']
  },
  {
    title: "Professional Creator Workstation",
    slug: "creator-workstation",
    category: "Hardware - Workstation",
    serviceId: "workstation",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Setup PC high-end khusus untuk desainer grafis dan editor video dengan kalibrasi layar presisi.",
    features: ["Prosesor & GPU High-End", "Sistem Pendingin Cair", "Kalibrasi Warna Monitor", "Penyimpanan NVMe Super Cepat"],
    benefits: [
      { icon: 'monitor', title: 'Kinerja Kelas Kreator', desc: 'Mampu merender video 4K dan desain 3D tanpa kendala.' },
      { icon: 'hard-drive', title: 'Komponen Tahan Banting', desc: 'Perangkat kelas workstation yang didesain untuk menyala 24 jam.' },
      { icon: 'award', title: 'Garansi & Dukungan', desc: 'Jaminan penggantian suku cadang dan pemeliharaan rutin.' }
    ],
    technologies: ['Intel Core/Xeon', 'AMD Ryzen', 'NVIDIA Quadro/RTX', 'SSD NVMe', 'Windows 11 Pro']
  },
  {
    title: "Industrial Environment Sensors",
    slug: "industrial-sensors",
    category: "IoT Integration - Sensors",
    serviceId: "sensors",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Pemasangan sensor suhu, kelembaban, dan gas untuk memantau kondisi gudang secara real-time.",
    features: ["Sensor Kualitas Industri", "Tahan Cuaca & Debu (IP67)", "Transmisi Jarak Jauh (LoRa)", "Daya Baterai Tahan Lama"],
    benefits: [
      { icon: 'radio', title: 'Pemantauan Real-time', desc: 'Data kondisi lapangan masuk ke sistem setiap detiknya.' },
      { icon: 'target', title: 'Akurasi Presisi', desc: 'Sensor skala industri dengan kalibrasi presisi tinggi.' },
      { icon: 'battery', title: 'Hemat Daya', desc: 'Protokol nirkabel hemat daya yang bisa bertahan bertahun-tahun.' }
    ],
    technologies: ['Arduino', 'Raspberry Pi', 'LoRaWAN', 'ESP32', 'MQTT']
  },
  {
    title: "Smart Home IoT Dashboard",
    slug: "smart-home-iot",
    category: "IoT Integration - Dashboards",
    serviceId: "dashboards",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Dashboard kontrol perangkat rumah pintar untuk memantau suhu dan penggunaan daya.",
    features: ["Real-time Monitoring", "Kontrol Perangkat Jarak Jauh", "Notifikasi Pintar", "Manajemen Energi"],
    benefits: [
      { icon: 'pie-chart', title: 'Keputusan Berbasis Data', desc: 'Visualisasi grafik membantu pemimpin membuat keputusan instan.' },
      { icon: 'bell', title: 'Peringatan Dini', desc: 'Sistem langsung memberi tahu via Telegram/Email saat ada anomali.' },
      { icon: 'wifi', title: 'Akses Kapan Saja', desc: 'Pantau aset perusahaan dari HP Anda di mana pun berada.' }
    ],
    technologies: ['Grafana', 'InfluxDB', 'Node-RED', 'Vue.js', 'WebSocket']
  },
  {
    title: "Automated Smart Factory",
    slug: "automated-smart-factory",
    category: "IoT Integration - Automation",
    serviceId: "automation",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Otomatisasi mesin pabrik menggunakan logika kontrol berbasis sensor untuk efisiensi produksi.",
    features: ["Pemrograman PLC", "Integrasi Robotik Lengan", "Analisis Penghentian Mesin (Downtime)", "Peringatan Pemeliharaan Otomatis"],
    benefits: [
      { icon: 'cpu', title: 'Efisiensi Tenaga Kerja', desc: 'Biarkan sistem menangani tugas repetitif secara konsisten.' },
      { icon: 'alert-triangle', title: 'Tanpa Human-Error', desc: 'Mengurangi risiko kelalaian manusia pada operasional kritis.' },
      { icon: 'zap', title: 'Respon Super Cepat', desc: 'Sistem bereaksi terhadap pemicu lingkungan dalam hitungan milidetik.' }
    ],
    technologies: ['PLC Siemens', 'SCADA', 'Edge Computing', 'Python', 'C++']
  }
];
