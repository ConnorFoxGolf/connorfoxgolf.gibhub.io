interface CsvToArrayOptions {
  delimiter?: string;
  removeHeader?: boolean;
}

export function csvToStringArray(dataRaw:string, options?: CsvToArrayOptions): string[][]{
  const delimiter = options?.delimiter ? options.delimiter : ',';
  const removeHeader = options?.removeHeader !== undefined ? options.removeHeader : true;
  
  const delimiters = `(\\${delimiter}|\\r?\\n|\\r|^)`;
  const quotedFields = "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|";
  const standardFields = `([^"\\${delimiter}\\r\\n]*))`;
  const regExPattern = `${delimiters}${quotedFields}${standardFields}`;
  const regExFlags = 'gi';
  const objPattern = new RegExp(regExPattern, regExFlags);

  const data: string[][] = [[]];
  let isHeaderRemoved = !removeHeader;
  let arrMatches: RegExpExecArray | null = objPattern.exec(dataRaw);
  while (arrMatches) {
    const [_, foundDelimiter, quotedValue, unquotedValue] = arrMatches;

    const isEndOfRow = foundDelimiter.length && foundDelimiter !== delimiter;
    if (isEndOfRow) {
      if (isHeaderRemoved) {
        data.push([]);
      } else {
        isHeaderRemoved = true
      }
    }

    const value = quotedValue ? 
      quotedValue.replace(new RegExp( "\"\"", "g" ), "\"") : 
      unquotedValue;

    if (isHeaderRemoved) {
      data[data.length - 1].push(value);
    }
    arrMatches = objPattern.exec(dataRaw)
  }

  return data;
}

export function csvToTArray<T>(dataRaw:string, rowToT: (row:string[]) => T, options?: CsvToArrayOptions): T[] {
  const stringData = csvToStringArray(dataRaw);
  return stringData.map(rowToT);
}
