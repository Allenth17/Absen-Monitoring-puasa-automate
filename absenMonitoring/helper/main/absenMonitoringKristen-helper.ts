import { Page } from '@playwright/test';
import { AbsenMonitoringKristenParam } from '../../param/main/absenMonitoringKristen-param';

export async function performAbsenMonitoringKristen(
    page: Page, 
    absenMonitoringKristenParam: AbsenMonitoringKristenParam
) {
    await page.goto("https://forms.gle/Gy89U65zpBdaFe856");
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Login ke Google' }).click();
    const page1 = await page1Promise;
    await page1.getByLabel('Email or phone').click();
    await page1.getByLabel('Email or phone').fill(absenMonitoringKristenParam.getEmail());
    await page1.getByRole('button', { name: 'Next' }).click();
    await page1.getByLabel('Enter your password').fill(absenMonitoringKristenParam.getPassword());
    await page1.getByLabel('Enter your password').press('Enter');
    await page1.waitForTimeout(5000);

    await page1.getByLabel('NAMA SISWA *').fill(absenMonitoringKristenParam.getNamaSiswa());
    await page1.getByLabel('NISN *').fill(absenMonitoringKristenParam.getNisnSiswa());
    await page1.getByRole('option', { name: 'FASE F LANJUTAN PPLG' }).click();
    await page1.locator('.Uc2NEf').click({delay: 2000});
    await page1.getByRole('button', { name: 'Next' }).click();
    await page1.waitForTimeout(3000);

    await page1.getByLabel('Hour').fill(absenMonitoringKristenParam.getJamBangun());
    await page1.getByLabel('Minute').fill(absenMonitoringKristenParam.getMenitBangun());
    await page1.getByLabel(absenMonitoringKristenParam.getApakahDoaDilakukan()).click();
    await page1.getByRole('button', { name: 'Next' }).click();
    await page1.waitForTimeout(3000);


    // Untuk murid islam, karena untuk islam, maka full tidak
    await page1.getByLabel('Berdoa untuk diri sendiri dan').getByLabel('Tidak').click();
    await page1.getByLabel('Sholat Fajar/Qablal subuh *').getByLabel('Tidak').click();
    await page1.getByLabel('Sholat 5 waktu berjamaah *').getByLabel('Tidak').click();
    await page1.getByLabel('Zikir dan doa setelah sholat').getByLabel('Tidak').click();
    await page1.getByLabel('Sholat Dhuha *').getByLabel('Tidak').click();
    await page1.getByLabel('Sholat sunah rowatib *').getByLabel('Tidak').click();
    await page1.getByLabel('Sholat tarawih dan witir *').getByLabel('Tidak').click();
    await page1.getByLabel('Berpuasa di bulan ramadhan *').getByLabel('Tidak').click();
    await page1.getByLabel('Membayar zakat, infaq dan').fill("0");
    await page1.getByRole('button', { name: 'Next' }).click();
    await page1.waitForTimeout(3000);

    /* Untuk Murid Kristen
    *  Cara mengisinya yaitu ke csv lalu sesuaikan urutannya
    *  contohnya, misal isian pertama bersaat teduh, lalu yang kedua adalah membaca merenungkan kitab,
    *  maka jika jawaban 1 Ya, dan kedua Tidak, maka penulisannya seperti ini:
    *  (...isian Sebelumnya),Ya,Tidak,(isian selanjutnya...)
    */
    await page1.getByLabel('Bersaat teduh di pagi hari -').getByLabel(absenMonitoringKristenParam.getApakahBersaatTeduhPagi()).click();
    await page1.getByLabel('Membaca dan merenungkan Kitab').getByLabel(absenMonitoringKristenParam.getApakahMembacaMerenungkanKitab()).click();
    await page1.getByLabel('Doa Syafaat (Berdoa bagi').getByLabel(absenMonitoringKristenParam.getApakahBerdoaSyafaat()).click();
    await page1.getByLabel('Mengikuti ibadah keluarga/').getByLabel(absenMonitoringKristenParam.getApakahMengikutiIbadahKeluarga()).click();
    await page1.getByLabel('Saat teduh malam sebelum').getByLabel(absenMonitoringKristenParam.getApakahbersaatTeduhSebelumTidur()).click();
    await page1.getByLabel('Mengikuti ibadah hari minggu').getByLabel(absenMonitoringKristenParam.getIbadahHariMinggu()).click();
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
  await page1.getByLabel('Other response').fill(absenMonitoringKristenParam.getOlahraga());
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
  await page1.getByLabel('Membaca kitab suci (Sesuai').getByLabel(absenMonitoringKristenParam.getApakahMembacaKitabSuci()).click();
  await page1.getByLabel('Tulis surat dan ayat berapa').fill(absenMonitoringKristenParam.getSuratDanAyat());
  await page1.getByLabel('Membaca buku bacaan/novel dsb').getByLabel(absenMonitoringKristenParam.getApakahBacaBacaan()).click();
  await page1.getByLabel('Membaca buku mata pelajaran *').getByLabel(absenMonitoringKristenParam.getApakahMembacaBukuMapel()).click();
  await page1.getByLabel('Mengerjakan Tugas/PR *').getByLabel(absenMonitoringKristenParam.getApakahMengerjakanTugas()).click();
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
  await page1.getByLabel('Hour').fill(absenMonitoringKristenParam.getJamtidur());
  await page1.getByLabel('Minute').fill(absenMonitoringKristenParam.getMenitTidur());
  await page1.getByText('AM').click();
  await page1.getByRole('option', { name: 'PM' }).click();
  await page1.getByLabel('Ya').click();
  await page1.waitForTimeout(3000);

  await page1.getByLabel("Submit").click();
  await page1.waitForTimeout(5000);
}


