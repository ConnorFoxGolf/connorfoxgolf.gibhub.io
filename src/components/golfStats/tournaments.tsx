import React, { useEffect, useState } from 'react';
import { GolfTournament, getGolfTournaments } from 'assets/data/golfTournaments';
import Table from 'components/shared/table';
import SectionHeader from 'components/shared/sectionHeader';

export default function Tournaments() {
  const [golfTournaments, setGolfTournaments] = useState<GolfTournament[]>([]);
  useEffect(() => {
    getGolfTournaments().then((tournaments) => {
      setGolfTournaments(tournaments);
    });
  }, []);

  const tournamentsTableheaders = [
    'Date', 'Tournament', 'Scores', 'Result'
  ];
  
  const tournamentTableData = golfTournaments.map(tournament => {
    const month = tournament.dates.start.format('MMMM');
    let day = tournament.dates.start.format('D');
    if (tournament.dates.end && !tournament.dates.start.isSame(tournament.dates.end)) {
      day += ` - ${tournament.dates.end.format('D')}`;
    }
    const year = tournament.dates.start.format('YYYY');
    const dateRange = `${month} ${day}, ${year}`;

    const eventDetails = [tournament.event.title];
    if (tournament.event.course) {
      eventDetails.push(tournament.event.course)
    }
    if (tournament.event.location) {
      eventDetails.push(tournament.event.location)
    }

    return {
      key: `${tournament.dates.start.format('YYYY')} ${tournament.event.title}`,
      columnValues: [
        dateRange,
        eventDetails.join(' | '),
        tournament.scores.join(', '),
        tournament.result
      ]
    }
  });

  const tournamentsTable = tournamentTableData.length ?
    <Table 
      data={tournamentTableData} 
      headers={tournamentsTableheaders}
    /> :
    <p>Fetching tournaments data...</p>;

  return (
    <div className='golf-achievements-container'>
      <div className='container'>
        <SectionHeader header='Recent Tournaments' />
        {tournamentsTable}
      </div>
    </div>
  )
}
