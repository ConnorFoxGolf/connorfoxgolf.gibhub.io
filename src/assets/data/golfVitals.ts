import golfVitalsFile from './golfVitals.csv';
import { csvToArray } from '../../utils/csv';

export interface GolfVital {
  name: string,
  value: string
};

function stringArrToGolfVital(vital: string[]): GolfVital {
  const [name, value] = vital;
  return { name, value };
}

export async function getGolfVitals(): Promise<GolfVital[]> {
  const golfVitalsRaw = await fetch(golfVitalsFile);
  const golfVitalsText = await golfVitalsRaw.text();
  return csvToArray(golfVitalsText, stringArrToGolfVital);
}

