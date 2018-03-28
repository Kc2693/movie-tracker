import { fetchRecentMovies, createMovies } from './apiCall';
import { apiKey } from '../apiKey.js';
import * as mockData from '../mocks/mockMovieData';


describe('Helper', () => {

  describe('Fetch recent movies', () => {
    let response, url;

    beforeEach(() => {
      response = mockData.rawData;
      url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({ok: true, json: () => Promise.resolve(response)})
      ));
    })

    it('should fetch with correct URL', async () => {
      fetchRecentMovies();
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('Should return a clean array with movie objects', async () => {
      const expected = mockData.cleanData
      const movies = await fetchRecentMovies();
      expect(movies).toEqual(expected)
    })

  });

});