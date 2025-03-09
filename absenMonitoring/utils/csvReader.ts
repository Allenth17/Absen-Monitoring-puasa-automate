import { readFileSync } from 'fs';

export function readCSVFile(filePath: string): string {
  return readFileSync(filePath, 'utf-8');
}