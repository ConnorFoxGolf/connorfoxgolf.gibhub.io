import moment from 'moment'

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

/* @Connor: replace this data with your own. */
export const golfTournaments:GolfTournament[] = [
  {
    dates: {
      start: moment('05-05-2021', 'MM-DD-YYYY'),
      end: moment('05-11-2021', 'MM-DD-YYYY')
    },
    event: {
      title: 'The Masters',
      course: 'Augusta National Golf Club',
      location: 'Augusta, GA',
    },
    scores: [85, 81],
    result: 'Did not make the cut'
  },
  {
    dates: {
      start: moment('03-11-2021', 'MM-DD-YYYY'),
      end: moment('03-14-2021', 'MM-DD-YYYY')
    },
    event: {
      title: 'The Players Championship',
      course: 'TPC Sawgrass'
    },
    scores: [72, 75],
    result: '28th'
  },
  {
    dates: {
      start: moment('05-24-2021', 'MM-DD-YYYY')
    },
    event: {
      title: 'Champions For Charity',
    },
    scores: [68],
    result: '1st'
  }
];
