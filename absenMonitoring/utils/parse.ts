import { Param } from "./param";
import { AbsenMonitoringIslamParam } from "../param/main/absenMonitoringIslam-param";
import { AbsenMonitoringKristenParam } from "../param/main/absenMonitoringKristen-param";
import { varFunction } from "./functionVariabel";


export function parse(data: string): Param[][] {
  const result: Param[][] = [];
  const rows = data.trim().split("\n");

  for (const row of rows) {
    if (row.toLowerCase().includes("stop")) {
      break;
    }
    const cleanRow = row.replace(/\r$/, "");
    let columnValues = cleanRow.split(",");
    if (columnValues[columnValues.length - 1].trim() === "skip") continue;
    columnValues = columnValues.map(value => varFunction(value));
    const rowParams: Param[] = [];
    let i = 0;
    let paramEndIndex = -1;
    while (i < columnValues.length) {
      const testCategory = columnValues[i].trim();
      let temp: Param;

      try {
        if (i > paramEndIndex) {
          switch (testCategory) {
            case "1":
              temp = new AbsenMonitoringIslamParam(i, columnValues);
              rowParams.push(temp);
              paramEndIndex = i + temp.getParamCount();
              console.log("Parsed AbsenMonitoringIslamParam: ", temp);
              break;
            case "2":
              temp = new AbsenMonitoringKristenParam(i, columnValues);
              rowParams.push(temp);
              paramEndIndex = i + temp.getParamCount();
              console.log("Parsed AbsenMonitoringKristenParam: ", temp);
              break;
            default:
              i++; // Move to the next column
              break;
          }
        }
        i = paramEndIndex + 1;
      } catch (error) {
        console.error(`Error parsing parameters at index ${i}:`, error);
        i++; // Move to the next column
      }
    }
    result.push(rowParams);
  }
  // saveVariablesToJson('./variable_store.json');
  return result;
}
