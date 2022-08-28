import golfVitalsFile from './golfVitals.csv';
import { csvToTArray } from '../../utils/csv';

export interface GolfVital {
  name: string,
  value: string
};

function stringArrToGolfVital(vital: string[]): GolfVital {
  return {
    name: vital[0],
    value: vital[1]
  }
};

export async function getGolfVitals(): Promise<GolfVital[]> {
  const golfVitalsRaw = await fetch(golfVitalsFile);
  const golfVitalsText = await golfVitalsRaw.text();
  return csvToTArray(golfVitalsText, stringArrToGolfVital);
}

