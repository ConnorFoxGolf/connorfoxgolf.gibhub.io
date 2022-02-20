import React from 'react';
import { golfVitals } from 'assets/data/golfVitals';
import Table from 'components/shared/table';
import SectionHeader from 'components/shared/sectionHeader';

export default function Vitals() {
  const vitalsTableData = golfVitals.map(vital => {
    return {
      key: `${vital.name}`,
      columnValues: [
        vital.name,
        vital.value
      ]
    }
  });


  return (
    <div className='golf-achievements-container'>
      <div className='container'>
        <SectionHeader header='Vitals' />
        <Table
          data={vitalsTableData}
        ></Table>
      </div>
    </div>
  )
}
