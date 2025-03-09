
import { StringColorFormat } from '@faker-js/faker';
import { Param } from '../../utils/param';

export class AbsenMonitoringIslamParam extends Param {
  private email: string;
  private password: string;

  private nama: string;
  private nisn: string;
  private jamBangun: string;
  private menitBangun: string;
  private doaDilakukan: string;

  private apakahBerdoa: string;
  private apakahShalatFajar: string;
  private apakahShalat5Waktu: string;
  private apakahDzikirDanDoa: string;
  private apakahShalatDhuha: string;
  private apakahShalatRowatib: string;
  private apakahShalatTarawihDanWitir: string;
  private apakahBerpuasaDibulanRamadhan: string;
  private nominalZakatAtauInfaqHarian: string;

  private olahraga: string;

  private membacaKitabSuci: string;
  private suratDanAyat: string;
  private apakahBacaBacaan: string;
  private apakahMembacaBukuMapel: string;
  private apakahMengerjakanTugas:string;
  
  private jamtidur: string;
  private menitTidur: string;

  constructor(index: number, columnValues: string[]) {
    super(1, index, columnValues);
    this.email = this.getParamValue(columnValues[++index]);
    this.password = this.getParamValue(columnValues[++index]);

    this.nama = this.getParamValue(columnValues[++index]);
    this.nisn = this.getParamValue(columnValues[++index]);
    this.jamBangun = this.getParamValue(columnValues[++index]);
    this.menitBangun = this.getParamValue(columnValues[++index]);
    this.doaDilakukan = this.getParamValue(columnValues[++index]);

    this.apakahBerdoa = this.getParamValue(columnValues[++index]);
    this.apakahShalatFajar = this.getParamValue(columnValues[++index]);
    this.apakahShalat5Waktu = this.getParamValue(columnValues[++index]);
    this.apakahDzikirDanDoa = this.getParamValue(columnValues[++index]);
    this.apakahShalatDhuha = this.getParamValue(columnValues[++index]);
    this.apakahShalatRowatib = this.getParamValue(columnValues[++index]);
    this.apakahShalatTarawihDanWitir = this.getParamValue(columnValues[++index]);
    this.apakahBerpuasaDibulanRamadhan = this.getParamValue(columnValues[++index]);
    this.nominalZakatAtauInfaqHarian = this.getParamValue(columnValues[++index]);

    this.olahraga = this.getParamValue(columnValues[++index]);

    this.membacaKitabSuci = this.getParamValue(columnValues[++index]);
    this.suratDanAyat = this.getParamValue(columnValues[++index]);
    this.apakahBacaBacaan = this.getParamValue(columnValues[++index]);
    this.apakahMembacaBukuMapel = this.getParamValue(columnValues[++index]);
    this.apakahMengerjakanTugas = this.getParamValue(columnValues[++index]);

    this.jamtidur = this.getParamValue(columnValues[++index]);
    this.menitTidur = this.getParamValue(columnValues[++index]);
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getNamaSiswa(): string {
    return this.nama;
  }
  public getNisnSiswa(): string {
    return this.nisn;
  }
  public getJamBangun(): string {
    return this.jamBangun;
  }
  public getMenitBangun(): string {
    return this.menitBangun;
  }
  public getApakahDoaDilakukan(): string {
    return this.doaDilakukan;
  }

  public getApakahBerdoa(): string {
    return this.apakahBerdoa;
  }
  public getApakahShalatFajar(): string {
    return this.apakahShalatFajar;
  }
  public getApakahShalat5Waktu(): string {
    return this.apakahShalat5Waktu;
  }
  public getApakahDzikirDanDoa(): string {
    return this.apakahDzikirDanDoa;
  }
  public getApakahShalatDhuha(): string {
    return this.apakahShalatDhuha;
  }
  public getApakahShalatRowatib(): string {
    return this.apakahShalatRowatib;
  }
  public getApakahShalatTarawihDanWitir(): string {
    return this.apakahShalatTarawihDanWitir;
  }
  public getApakahBerpuasaDibulanRamadhan(): string {
    return this.apakahBerpuasaDibulanRamadhan;
  }
  public getNominalZakatAtauInfaqHarian(): string {
    return this.nominalZakatAtauInfaqHarian;
  }

  public getOlahraga(): string {
    return this.olahraga;
  }

  public apakahMembacaKitabSuci(): string {
    return this.membacaKitabSuci;
  }
  public getSuratDanAyat(): string {
    return this.suratDanAyat;
  }
  public getApakahBacaBacaan(): string {
    return this.apakahBacaBacaan;
  }
  public getApakahMembacaBukuMapel(): string {
    return this.apakahMembacaBukuMapel;
  }
  public getApakahMengerjakanTugas(): string {
    return this.apakahMengerjakanTugas;
  }

  public getJamtidur(): string {
    return this.jamtidur;
  }
  public getMenitTidur(): string {
    return this.menitTidur;
  }
  public toString(): string {
    return `${this.email},${this.password}`;
  }
}
