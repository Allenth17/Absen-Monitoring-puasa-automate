import { Page } from '@playwright/test';
import { AbsenMonitoringIslamParam } from '../../param/main/absenMonitoringIslam-param';

export async function performAbsenMonitoringIslam(
  page: Page, 
  absenMonitoringIslamParam: AbsenMonitoringIslamParam
) {
  await page.goto("https://forms.gle/Gy89U65zpBdaFe856");
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Login ke Google' }).click();
  const page1 = await page1Promise;
  await page1.getByLabel('Email or phone').click();
  await page1.getByLabel('Email or phone').fill(absenMonitoringIslamParam.getEmail());
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.getByLabel('Enter your password').fill(absenMonitoringIslamParam.getPassword());
  await page1.getByLabel('Enter your password').press('Enter');
  await page1.waitForTimeout(3000);

  await page1.getByLabel('NAMA SISWA *').fill(absenMonitoringIslamParam.getNamaSiswa());
  await page1.getByLabel('NISN *').fill(absenMonitoringIslamParam.getNisnSiswa());
  await page1.getByRole('option', { name: 'FASE F LANJUTAN PPLG' }).click();
  await page1.waitForTimeout(1000);
  await page1.locator('.Uc2NEf').click({delay: 2000});
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(3000);


  await page1.getByLabel('Hour').fill(absenMonitoringIslamParam.getJamBangun());
  await page1.getByLabel('Minute').fill(absenMonitoringIslamParam.getMenitBangun());
  await page1.getByLabel(absenMonitoringIslamParam.getApakahDoaDilakukan()).click();
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(3000);

  /* Untuk Murid Islam
  *  Cara mengisinya yaitu ke csv lalu sesuaikan urutannya
  *  contohnya, misal isian pertama beroa tuk diri sendiri dan orangtua, lalu yang kedua adalah fajar/qablal subuh,
  *  maka jika jawaban 1 Ya, dan kedua Tidak, maka penulisannya seperti ini:
  *  (...isian Sebelumnya),Ya,Tidak,(isian selanjutnya...)
  */
  await page1.getByLabel('Berdoa untuk diri sendiri dan').getByLabel(absenMonitoringIslamParam.getApakahBerdoa()).click();
  await page1.getByLabel('Sholat Fajar/Qablal subuh *').getByLabel(absenMonitoringIslamParam.getApakahShalatFajar()).click();
  await page1.getByLabel('Sholat 5 waktu berjamaah *').getByLabel(absenMonitoringIslamParam.getApakahShalat5Waktu()).click();
  await page1.getByLabel('Zikir dan doa setelah sholat').getByLabel(absenMonitoringIslamParam.getApakahDzikirDanDoa()).click();
  await page1.getByLabel('Sholat Dhuha *').getByLabel(absenMonitoringIslamParam.getApakahShalatDhuha()).click();
  await page1.getByLabel('Sholat sunah rowatib *').getByLabel(absenMonitoringIslamParam.getApakahShalatRowatib()).click();
  await page1.getByLabel('Sholat tarawih dan witir *').getByLabel(absenMonitoringIslamParam.getApakahShalatTarawihDanWitir()).click();
  await page1.getByLabel('Berpuasa di bulan ramadhan *').getByLabel(absenMonitoringIslamParam.getApakahBerpuasaDibulanRamadhan()).click();
  await page1.getByLabel('Membayar zakat, infaq dan').fill(absenMonitoringIslamParam.getNominalZakatAtauInfaqHarian());
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(3000);


  // Untuk Murid Kristen, karena ini untuk kristen, jadi full tidak
  await page1.getByLabel('Bersaat teduh di pagi hari -').getByLabel('Tidak').click();
  await page1.getByLabel('Membaca dan merenungkan Kitab').getByLabel('Tidak').click();
  await page1.getByLabel('Doa Syafaat (Berdoa bagi').getByLabel('Tidak').click();
  await page1.getByLabel('Mengikuti ibadah keluarga/').getByLabel('Tidak').click();
  await page1.getByLabel('Saat teduh malam sebelum').getByLabel('Tidak').click();
  await page1.getByLabel('Mengikuti ibadah hari minggu').getByLabel('Tidak').click();
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(3000);
  
  // Untuk Murid Sikh (case pplg gaada murid sikh, jadi full tidak yh wwwwww)
  await page1.getByLabel('Membaca Japji Sahib di pagi').getByLabel('Tidak').click();
  await page1.getByLabel('Membaca Rehras Sahib di sore').getByLabel('Tidak').click();
  await page1.getByLabel('Simran di sore hari *').getByLabel('Tidak').click();
  await page1.getByLabel('Pergi ibadah setiap hari').getByLabel('Tidak').click();
  await page1.getByLabel('Membaca doa malam sebelum').getByLabel('Tidak').click();
  await page1.getByLabel('Mengikuti kegiatan belajar di').getByLabel('Tidak').click();
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(3000);
  
  // Kolom olahraga, disini kubuat olahraga lain, 
  // tinggal isi aja berdasarkan teks karena aku malas mengatur banyak pilihan wwwww
  await page1.getByLabel('Other:').click();
  await page1.waitForTimeout(1000);
  await page1.getByLabel('Other response').click();
  await page1.waitForTimeout(1000);
  await page1.getByLabel('Other response').fill(absenMonitoringIslamParam.getOlahraga());
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(3000);

  // Makan sehat, diisi yang sering orang makan aja dah
  await page1.waitForTimeout(1000);
  await page1.getByLabel('Makan sahur').click();
  await page1.waitForTimeout(1000);
  await page1.getByLabel('Makan lauk (telor, daging,').click();
  await page1.waitForTimeout(1000);
  await page1.getByLabel('Makan Sayur').click();
  await page1.waitForTimeout(1000);
  await page1.getByLabel('Makan Buah').click();
  await page1.waitForTimeout(1000);
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(5000);

  // Baca buku, versi islam bisa diisi surah dan ayatnya
  await page1.getByLabel('Membaca kitab suci (Sesuai').getByLabel(absenMonitoringIslamParam.apakahMembacaKitabSuci()).click();
  await page1.getByLabel('Tulis surat dan ayat berapa').fill(absenMonitoringIslamParam.getSuratDanAyat());
  await page1.getByLabel('Membaca buku bacaan/novel dsb').getByLabel(absenMonitoringIslamParam.getApakahBacaBacaan()).click();
  await page1.getByLabel('Membaca buku mata pelajaran *').getByLabel(absenMonitoringIslamParam.getApakahMembacaBukuMapel()).click();
  await page1.getByLabel('Mengerjakan Tugas/PR *').getByLabel(absenMonitoringIslamParam.getApakahMengerjakanTugas()).click();
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(3000);

  // kolom kegiatan bermasyarakat, disini pakai yang umum aja, 
  // buang sampah udah termasuk membersikan jalanan umum
  await page1.waitForTimeout(1000);
  await page1.getByLabel('Membersihkan got/jalanan umum').click();
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.waitForTimeout(3000);

  // kolom waktu tidur,
  // bebas inimah isinya apa
  await page1.getByLabel('Hour').fill(absenMonitoringIslamParam.getJamtidur());
  await page1.getByLabel('Minute').fill(absenMonitoringIslamParam.getMenitTidur());
  await page1.getByText('AM').click();
  await page1.getByRole('option', { name: 'PM' }).click();
  await page1.getByLabel('Ya').click();
  await page1.waitForTimeout(3000);

  await page1.getByLabel("Submit").click();
  await page1.waitForTimeout(5000);
}


