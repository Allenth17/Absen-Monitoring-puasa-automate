export function getTanggalSekarang() {
  // Ambil tanggal hari ini
  let now = new Date();

  let midnightDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Ambil hari, bulan, dan tahun
  let day = midnightDate.getDate();
  let month = midnightDate.getMonth() + 1; // Bulan di JavaScript mulai dari 0
  let year = midnightDate.getFullYear();

  // Format menjadi string dengan format hari/bulan/tahun
  let formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

  return {formattedDate, day, month, year};
}

// Fungsi untuk mengambil tanggal yang ditentukan beberapa hari berikutnya
export function getLaterDate(hari: number): string {
    // Ambil tanggal hari ini
    let now = new Date();

    // Tambahkan hari ke tanggal saat ini
    now.setDate(now.getDate() + hari);

    // Ambil hari, bulan, dan tahun yang baru
    let day = now.getDate();
    let month = now.getMonth() + 1; // Bulan di JavaScript mulai dari 0
    let year = now.getFullYear();

    // Format menjadi string dengan format hari/bulan/tahun
    let formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

    return formattedDate;
}

// Fungsi untuk mengambil tanggal jatuh tempo
export function getTanggal_jatuh_tempo(): string {
  // Ambil tanggal hari ini
  let now = new Date();

  // Ambil tahun yang baru
  let year = now.getFullYear();

  // Format menjadi string dengan format hari/bulan/tahun
  let formattedDate = `31/12/${year}`;

  return formattedDate;
}

export function getCurrentTime(): string {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Format jam, menit, dan detik agar selalu 2 digit
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    // Gabungkan semuanya menjadi string waktu
    const time = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    
    return time;
}

// Fungsi untuk mengambil tanggal acak, tahun bisa di tentukan atau ambil tahun terkini
export function getRandomDate(year?: number): string {
  const currentYear = new Date().getFullYear();
  
  // Jika parameter tahun diberikan, gunakan tahun tersebut, jika tidak, pilih secara acak antara 2000 hingga tahun terkini
  const chosenYear = year || Math.floor(Math.random() * (currentYear - 2000 + 1)) + 2000;
  const month = Math.floor(Math.random() * 12) + 1;
  const daysInMonth = new Date(chosenYear, month, 0).getDate();
  const day = Math.floor(Math.random() * daysInMonth) + 1;
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${chosenYear}`;
}