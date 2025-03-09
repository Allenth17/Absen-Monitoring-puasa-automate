import { getLaterDate, getTanggalSekarang } from "./dynamicDate";
import * as fs from 'fs';
function handleOperation(variableValue: any, operator: string, operand: any, value: string, flag: string, varName: string) {
  let finalValue: string;

  switch (operator) {
    case '+':
      finalValue = (Number(variableValue) + Number(operand)).toString();
      break;
    case '-':
      finalValue = (Number(variableValue) - Number(operand)).toString();
      break;
    case '*':
      finalValue = (Number(variableValue) * Number(operand)).toString();
      break;
    case '/':
      finalValue = Math.floor(Number(variableValue) / Number(operand)).toString();
      break;
    default:
      console.log(`Operator ${operator} not found!`);
      finalValue = variableValue;
      break;
      finalValue = variableValue;
      break;
  }
  
  if (flag === 'in') {
    variableStore[varName] = finalValue;
  }
  
  return finalValue;
  return finalValue;
}

export const variableStore: { [key: string]: string } = {};
export function varFunction(value: string): string {
  let match: any;
  let newValue: string;
  let stringType: string;
  let fixParam: string;
  let groupParams1: string, groupParams2: string;
  let minLength: string, maxLength: string, minFracLength: string, maxFracLength: string, minRange: string, maxRange: string;

  // Pola untuk mencari variabel dengan nilai baru, contoh: $password($$rand_pass)
  const variableWithValuePattern = /\$(\w+)\{([^\+\-\*\/]+)\}/;
  // Pola untuk mencari variabel yang sudah disimpan, contoh: $password
  const variablePattern = /\$\{(\w+)\}/;
  // Pola untuk mencari variabel yang bisa dimodifikasi di dalam
  const operationInVariabel = /\$(\w+)\{([^\+\-\*\/]+)([\+\-\*\/])(.+)\}/;
  // Pola untuk mencari variabel yang bisa dimodifikasi di luar
  const operationOutVariabel = /\$(\w+)([\+\-\*\/])(.+)\|/;

  switch (true) {
    case variableWithValuePattern.test(value):
      match = value.match(variableWithValuePattern);
      const variableName = match[1];
      let variableValue: string = varFunction(match[2]);
      const existingVar = match[2].replace(/\$/g, '');
      const isVariableExist = variableStore[existingVar];
      if (isVariableExist) {
        variableValue = isVariableExist;
      }
      variableStore[variableName] = variableValue;
      newValue = value.replace(variableWithValuePattern, variableValue);
      return newValue;
    case variablePattern.test(value):
      match = value.match(variablePattern);
      const variableNameOnly = match[1];
      if (variableStore[variableNameOnly]) {
        newValue = variableStore[variableNameOnly];
        newValue = value.replace(variablePattern, newValue);
        return newValue;
      } else {
        console.error(`Variabel ${variableNameOnly} tidak ditemukan.`);
        newValue = value;
        return newValue;
      }
    case operationInVariabel.test(value):
      match = value.match(operationInVariabel);
      const variableNameIn = match[1];
      let variableValueIn: any;
      if (variableStore[variableNameIn]) {
        variableValueIn = variableStore[variableNameIn];
      } else {
        const existingVarIn = match[2].replace(/\$/g, '');
        const isVariableExistIn = variableStore[existingVarIn];
        if (isVariableExistIn) {
          variableValueIn = variableStore[existingVarIn];
        } else {
          variableValueIn = varFunction(match[2]);
        }
      }
      const operatorIn = match[3];
      const operandIn = match[4];
      newValue = value.replace(operationInVariabel, handleOperation(variableValueIn, operatorIn, operandIn, value, 'in', variableNameIn));
      return newValue
    case operationOutVariabel.test(value):
      match = value.match(operationOutVariabel);
      const variableNameOut = match[1];
      let variableValueOut: any;
      if (variableStore[variableNameOut]) {
        variableValueOut = variableStore[variableNameOut];
      } else {
        console.error(`Variabel ${variableNameOut} tidak ditemukan.`);
      }
      const operatorOut = match[2];
      const operandOut = match[3];
      newValue = value.replace(operationOutVariabel, handleOperation(variableValueOut, operatorOut, operandOut, value, 'out', variableNameOut));
      return newValue;

    case /\$\$LowerCase\((.+)\)|\$\$LowerCaseNdisableSpace\((.+)\)/.test(value):
      if (value.match(/\$\$LowerCaseNdisableSpace\((.+)\)/)) {
        match = value.match(/\$\$LowerCaseNdisableSpace\((.+)\)/);
        fixParam = match[1];
        fixParam = fixParam.replace(/\$/g, '');
        if (variableStore[fixParam]) {
          fixParam = variableStore[fixParam];
        }
        fixParam = fixParam.replace(/\s*/g, '');
      } else {
        match = value.match(/\$\$LowerCase\((.+)\)/);
        fixParam = match[1];
        fixParam = fixParam.replace(/\$/g, '');
        if (variableStore[fixParam]) {
          fixParam = variableStore[fixParam];
        }
      }
      newValue = fixParam.toLowerCase();
      newValue = value.replace(/\$\$LowerCase\((.+)\)|\$\$LowerCaseNdisableSpace\((.+)\)/, newValue);
      return newValue;
    default:
      newValue = value;
      return newValue;
  }
}

