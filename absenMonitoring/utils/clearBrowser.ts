import { BrowserContext, Page} from "@playwright/test";

// Fungsi untuk membersihkan cookie, session, dan permission dari browser
export async function clearBrowser(context: BrowserContext) {
  const client = await context.newCDPSession(context.pages()[0]);
  await client.send('Network.clearBrowserCache');
  await context.clearCookies();
  await context.clearPermissions();
}

// Fungsi untuk membersihkan browser data
export async function clearBrosData(page: Page) {
  await page.goto('chrome://settings/clearBrowserData');
  await page.waitForTimeout(500);
  await page.getByRole('combobox').selectOption('All time');
  await page.getByRole('checkbox', { name: 'Cookies and other site data' }).click();
  await page.getByRole('checkbox', { name: 'Cached images and files' }).click();
  const delButton = await page.getByRole('button', { name: 'Delete data' });
  if( await delButton.isVisible() ){
    await page.getByRole('button', { name: 'Delete data' }).click();
  }else{
    await page.getByRole('button', { name: 'Clear data' }).click();
  }
  await page.waitForLoadState();
}

// Fungsi untuk menjalankan fungsi membersihkan browser data para hari senin pada pukul 09:00 hingga 10:00 
export async function clearDataOnMondayMorning(page: Page) {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Minggu, 1 = Senin, ..., 6 = Sabtu
  const hour = now.getHours();    // Mengembalikan nilai jam saat ini (0-23)

  if (dayOfWeek === 1 && hour >= 9 && hour < 10) {  
      await clearBrosData(page);
  }
}

export async function loadPage(page: Page) {
  // Tunggu semua state load, domcontentloaded, networkidle selesai
  await page.waitForLoadState('load');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');

  // Inisialisasi counter request
  let pendingRequests = 0;
  let resolvePendingRequests: () => void;
  const pendingRequestsPromise = new Promise<void>((resolve) => {
    resolvePendingRequests = resolve;
  });

  // Monitor request di sisi server (Node.js)
  page.on('request', () => {
    pendingRequests++;
  });

  page.on('requestfinished', () => {
    pendingRequests--;
    if (pendingRequests === 0) {
      resolvePendingRequests();  // Selesaikan promise ketika semua request selesai
    }
  });

  page.on('requestfailed', () => {
    pendingRequests--;
    if (pendingRequests === 0) {
      resolvePendingRequests();  // Selesaikan promise ketika semua request selesai
    }
  });

  // Tunggu sampai tidak ada lagi pending request
  if (pendingRequests > 0) {
    await pendingRequestsPromise;
  }
}
