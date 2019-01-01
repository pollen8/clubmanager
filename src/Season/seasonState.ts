import Parse from 'parse';
import {
  useEffect,
  useState,
} from 'react';

export interface ISeason {
  id: string;
  createdAt?: Date,
  updatedAt?: Date,
  startDate: Date,
  endDate: Date,
  visitorFee: Number | String;
}

const SeasonConnection = Parse.Object.extend('Season');
const query = new Parse.Query(SeasonConnection);

export const seasonState = () => {
  const [seasons, setSeasons] = useState<ISeason[]>([]);


  useEffect(() => {
    (async () => {
      const query = new Parse.Query('Season')
      const res = await query.find();
      const ses = res.map((r) => ({
        createdAt: r.createdAt,
        startDate: r.get('startDate'),
        endDate: r.get('endDate'),
        visitorFee: r.get('visitorFee'),
        id: r.id,
        updatedAt: r.updatedAt,
      }));
      setSeasons(ses);
    })()
  }, []);

  return {
    seasons,
    addSeason: async (season: ISeason) => {
      try {
        season.visitorFee = parseFloat(String(season.visitorFee));
        const seasonConnection = new SeasonConnection();
        const newSeason = await seasonConnection.save(season);
        season.id = newSeason.id;
        setSeasons([...seasons, season]);
      } catch (error) {
        alert('Failed to create new object, with error code: ' + error.message);
      }
    },
    deleteSeason: async (id: string) => {
      try {
        const season = await query.get(id);
        season.destroy();
        const newSeasons = seasons
          .filter((season) => season.id !== id);
        setSeasons(newSeasons);
      } catch (error) {
        alert('Failed to delete: ' + error.message);
      }
    },
    editSeason: async (season: ISeason) => {
      try {
        season.visitorFee = parseFloat(String(season.visitorFee));
        const seasonConnection = new SeasonConnection();
        await seasonConnection.save(season);
        const newSeasons = seasons.map((s) => {
          if (s.id === season.id) {
            return season;
          }
          return s;
        })
        setSeasons(newSeasons);
      } catch (error) {
        alert('Failed to create new object, with error code: ' + error.message);
      }

    },
  };
};