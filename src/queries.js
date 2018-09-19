import gql from 'graphql-tag';

export const HOME_PAGE = gql `
  query {
    movies(limit: 50, rating: 7) {
      id
      title
      genres
      rating
      medium_cover_image
    }
  }
`;

// apollo에서만 제공하는 형태.. 변수를 전달하기 위함
export const MOVIE_DETAILS = gql `
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      medium_cover_image
      title
      rating
    }
  }
`;