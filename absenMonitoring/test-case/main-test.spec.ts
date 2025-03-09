import { test, expect, BrowserContext, chromium, Page } from "@playwright/test";
import { performAbsenMonitoringIslam } from "../helper/main/absenMonitoring-helper";
import { readCSVFile } from "../utils/csvReader";
import { parse } from "../utils/parse";
import path from "path";
import { AbsenMonitoringIslamParam } from "../param/main/absenMonitoringIslam-param";
import { getCurrentTime, getTanggalSekarang } from "../utils/dynamicDate";
import { performAbsenMonitoringKristen } from "../helper/main/absenMonitoringKristen-helper";
import { AbsenMonitoringKristenParam } from "../param/main/absenMonitoringKristen-param";
import { clearBrowser } from "../utils/clearBrowser";

test('Main test suite', async () => {
  test.setTimeout(12000000);
  const userDataDir = path.resolve(__dirname, "../chrome-profile");
  const context: BrowserContext = await chromium.launchPersistentContext(
    userDataDir,
    {
      args: ["--test-type"],
      ignoreDefaultArgs: ["--enable-automation"],
      acceptDownloads: true,
    }
  );

  
  await clearBrowser(context);
  const page: Page = context.pages()[0];
  const filePath = path.resolve(__dirname, '../test-data/isian-data-murid.csv'); 
  const csvData = readCSVFile(filePath);
  const rowsParams = parse(csvData);

  for (const rowParams of rowsParams) {

    for (const param of rowParams) {
      switch (param.getCode()) {
        case 1:
          await performAbsenMonitoringIslam(page, param as AbsenMonitoringIslamParam);
          console.log(`\nAbsen Monitoring untuk Islam passed for param: ${JSON.stringify(param)}`);
          break;
        case 2:
          await performAbsenMonitoringKristen(page, param as AbsenMonitoringKristenParam);
          console.log(`\nAbsen Monitoring untuk Islam passed for param: ${JSON.stringify(param)}`);
          break;
        default:
          console.error(`Unknown parameter code: ${param.getCode()}`);
      }
    }
    console.log(
      "\n<-------------------------------------------------------------------------------------------------------------------------------------------------->\n"
    );
  }
  await context.close();
  console.log(`Dikerjakan jam: ${getTanggalSekarang().formattedDate}, ${getCurrentTime()}.`);
});
