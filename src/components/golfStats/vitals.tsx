import React, { useEffect, useState } from 'react';
import { getGolfVitals, GolfVital } from 'assets/data/golfVitals';
import Table from 'components/shared/table';
import SectionHeader from 'components/shared/sectionHeader';

export default function Vitals() {
  const [golfVitals, setGolfVitals] = useState<GolfVital[]>([]);
  useEffect(() => {
    getGolfVitals().then((vitals) => {
      setGolfVitals(vitals);
    });
  }, []);


  const vitalsTableData = golfVitals.map(vital => {
    return {
      key: `${vital.name}`,
      columnValues: [
        vital.name,
        vital.value
      ]
    }
  });

  const vitalsTable = vitalsTableData.length ? 
    <Table data={vitalsTableData} /> :
    <p>Fetching vitals data...</p>;

  return (
    <div className='golf-achievements-container'>
      <div className='container'>
        <SectionHeader header='Vitals' />
        {vitalsTable}
      </div>
    </div>
  )
}
