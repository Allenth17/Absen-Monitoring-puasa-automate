
import { Param } from '../../utils/param';

export class AbsenMonitoringKristenParam extends Param {
    private email: string;
    private password: string;

    private namaSiswa: string;
    private nisnSiswa: string;
    private jamBangun: string;
    private menitBangun: string;
    private apakahDoaDilakukan: string;

    private apakahBersaatTeduhPagi: string;
    private apakahMembacaMerenungkanKitab: string;
    private apakahBerdoaSyafaat: string;
    private apakahMengikutiIbadahKeluarga: string;
    private apakahbersaatTeduhSebelumTidur: string;
    private ibadahHariMinggu: string;

    private olahraga: string;

    private apakahMembacaKitabSuci: string;
    private suratDanAyat: string;
    private apakahBacaBacaan: string;
    private apakahMembacaBukuMapel: string;
    private apakahMengerjakanTugas: string;

    private jamtidur: string;
    private menitTidur: string;

    constructor(index: number, columnValues: string[]) {
        super(2, index, columnValues);
        this.email = this.getParamValue(columnValues[++index]);
        this.password = this.getParamValue(columnValues[++index]);

        this.namaSiswa = this.getParamValue(columnValues[++index]);
        this.nisnSiswa = this.getParamValue(columnValues[++index]);
        this.jamBangun = this.getParamValue(columnValues[++index]);
        this.menitBangun = this.getParamValue(columnValues[++index]);
        this.apakahDoaDilakukan = this.getParamValue(columnValues[++index]);

        this.apakahBersaatTeduhPagi = this.getParamValue(columnValues[++index]);
        this.apakahMembacaMerenungkanKitab = this.getParamValue(columnValues[++index]);
        this.apakahBerdoaSyafaat = this.getParamValue(columnValues[++index]);
        this.apakahMengikutiIbadahKeluarga = this.getParamValue(columnValues[++index]);
        this.apakahbersaatTeduhSebelumTidur = this.getParamValue(columnValues[++index]);
        this.ibadahHariMinggu = this.getParamValue(columnValues[++index]);

        this.olahraga = this.getParamValue(columnValues[++index]);

        this.apakahMembacaKitabSuci = this.getParamValue(columnValues[++index]);
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
        return this.namaSiswa;
    }
    public getNisnSiswa(): string {
        return this.nisnSiswa;
    }
    public getJamBangun(): string {
        return this.jamBangun;
    }
    public getMenitBangun(): string {
        return this.menitBangun;
    }
    public getApakahDoaDilakukan(): string {
        return this.apakahDoaDilakukan;
    }
    public getApakahBersaatTeduhPagi(): string {
        return this.apakahBersaatTeduhPagi;
    }
    public getApakahMembacaMerenungkanKitab(): string {
        return this.apakahMembacaMerenungkanKitab;
    }
    public getApakahBerdoaSyafaat(): string {
        return this.apakahBerdoaSyafaat;
    }
    public getApakahMengikutiIbadahKeluarga(): string {
        return this.apakahMengikutiIbadahKeluarga;
    }
    public getApakahbersaatTeduhSebelumTidur(): string {
        return this.apakahbersaatTeduhSebelumTidur;
    }
    public getIbadahHariMinggu(): string {
        return this.ibadahHariMinggu;
    }
    public getOlahraga(): string {
        return this.olahraga;
    }
    public getApakahMembacaKitabSuci(): string {
        return this.apakahMembacaKitabSuci;
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
