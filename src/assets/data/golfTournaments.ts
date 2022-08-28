import moment from 'moment'
import golfTournamentsFile from './golfTournaments.csv';
import { csvToArray } from 'utils/csv';

export interface GolfTournament {
  dates: {
    start: moment.Moment;
    end?: moment.Moment;
  };
  event: {
    title: string;
    course?: string;
    location?: string;
  }
  scores: number[];
  result: string;
}

function stringArrToGolfTournament(tournament: string[]): GolfTournament {
  const [
    eventTitle,
    eventCourse,
    eventLocation,
    startDate,
    endDate,
    scores,
    result
  ] = tournament;

  return {
    dates: {
      start: moment(startDate, 'MM/DD/YYYY'),
      end: endDate ? moment(endDate, 'MM/DD/YYYY') : undefined
    },
    event: {
      title: eventTitle,
      course: eventCourse,
      location: eventLocation
    },
    scores: scores.split(',').map(score => parseInt(score)),
    result
  };
}

export async function getGolfTournaments(): Promise<GolfTournament[]> {
  const golfTournamentsRaw = await fetch(golfTournamentsFile);
  const golfTournamentsText = await golfTournamentsRaw.text();
  return csvToArray(golfTournamentsText, stringArrToGolfTournament);
}
