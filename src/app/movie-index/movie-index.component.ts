import { Component, OnInit } from '@angular/core';

interface Movie {
  sNo: number;
  movieName: string;
  starRating: number;
  year: number;
  isFeatured: number;
}

@Component({
  selector: 'app-movie-index',
  templateUrl: './movie-index.component.html',
  styleUrls: ['./movie-index.component.scss'],
})
export class MovieIndexComponent implements OnInit {
  movieData: Movie[] = [
    {
      sNo: 73,
      movieName: 'Captain Marvel',
      starRating: 3,
      year: 2019,
      isFeatured: 0,
    },
    { sNo: 64, movieName: 'Frozen', starRating: 4, year: 2013, isFeatured: 0 },
    {
      sNo: 14,
      movieName: 'Harry Potter and the Chamber of Secrets',
      starRating: 3,
      year: 2002,
      isFeatured: 1,
    },
    {
      sNo: 93,
      movieName: 'Harry Potter and the Deathly Hallows - Part 1',
      starRating: 3,
      year: 2010,
      isFeatured: 0,
    },
    {
      sNo: 11,
      movieName: 'Harry Potter and the Goblet of Fire',
      starRating: 2,
      year: 2005,
      isFeatured: 0,
    },
    {
      sNo: 8,
      movieName: 'Harry Potter and the Half-Blood Prince',
      starRating: 4,
      year: 2009,
      isFeatured: 0,
    },
    {
      sNo: 31,
      movieName: 'Ice Age: The Meltdown',
      starRating: 4,
      year: 2006,
      isFeatured: 0,
    },
    {
      sNo: 66,
      movieName: 'Incredibles 2',
      starRating: 1,
      year: 2018,
      isFeatured: 0,
    },
    {
      sNo: 54,
      movieName: 'Jurassic World',
      starRating: 5,
      year: 2015,
      isFeatured: 0,
    },
    {
      sNo: 47,
      movieName: 'King Kong',
      starRating: 4,
      year: 2005,
      isFeatured: 0,
    },
    {
      sNo: 40,
      movieName: 'Madagascar: Escape 2 Africa',
      starRating: 4,
      year: 2008,
      isFeatured: 0,
    },
    {
      sNo: 46,
      movieName: 'Night at the Museum',
      starRating: 4,
      year: 2006,
      isFeatured: 0,
    },
    {
      sNo: 43,
      movieName: 'Quantum of Solace',
      starRating: 1,
      year: 2008,
      isFeatured: 0,
    },
    {
      sNo: 81,
      movieName: 'Rogue One: A Star Wars Story',
      starRating: 3,
      year: 2016,
      isFeatured: 0,
    },
    {
      sNo: 89,
      movieName: 'Star Wars: The Rise of Skywalker',
      starRating: 1,
      year: 2019,
      isFeatured: 0,
    },
    {
      sNo: 77,
      movieName: 'The Dark Knight Rises',
      starRating: 4,
      year: 2012,
      isFeatured: 0,
    },
    {
      sNo: 67,
      movieName: 'The Fate of the Furious',
      starRating: 3,
      year: 2017,
      isFeatured: 0,
    },
    {
      sNo: 95,
      movieName: 'The Hobbit: The Battle of the Five Armies',
      starRating: 3,
      year: 2014,
      isFeatured: 0,
    },
    {
      sNo: 35,
      movieName: 'The Incredibles',
      starRating: 1,
      year: 2004,
      isFeatured: 0,
    },
    {
      sNo: 38,
      movieName: 'The Passion of the Christ',
      starRating: 3,
      year: 2004,
      isFeatured: 0,
    },
    {
      sNo: 100,
      movieName: 'The Secret Life of Pets',
      starRating: 5,
      year: 2016,
      isFeatured: 0,
    },
    {
      sNo: 87,
      movieName: 'Zootopia',
      starRating: 3,
      year: 2016,
      isFeatured: 0,
    },
    {
      sNo: 86,
      movieName: 'Alice in Wonderland',
      starRating: 1,
      year: 2010,
      isFeatured: 0,
    },
    {
      sNo: 53,
      movieName: 'Avengers: Infinity War',
      starRating: 2,
      year: 2018,
      isFeatured: 0,
    },
    {
      sNo: 84,
      movieName: 'Despicable Me 3',
      starRating: 1,
      year: 2017,
      isFeatured: 0,
    },
    {
      sNo: 16,
      movieName: 'Finding Nemo',
      starRating: 1,
      year: 2003,
      isFeatured: 0,
    },
    {
      sNo: 59,
      movieName: 'Frozen II',
      starRating: 1,
      year: 2019,
      isFeatured: 0,
    },
    {
      sNo: 57,
      movieName: 'Furious 7',
      starRating: 5,
      year: 2015,
      isFeatured: 0,
    },
    {
      sNo: 68,
      movieName: 'Iron Man 3',
      starRating: 5,
      year: 2013,
      isFeatured: 0,
    },
    { sNo: 79, movieName: 'Joker', starRating: 4, year: 2019, isFeatured: 0 },
    {
      sNo: 50,
      movieName: 'Madagascar',
      starRating: 3,
      year: 2005,
      isFeatured: 0,
    },
    {
      sNo: 83,
      movieName: 'Pirates of the Caribbean: On Stranger Tides',
      starRating: 3,
      year: 2011,
      isFeatured: 0,
    },
    {
      sNo: 32,
      movieName: 'Pirates of the Caribbean: The Curse of the Black Pearl',
      starRating: 3,
      year: 2003,
      isFeatured: 0,
    },
    {
      sNo: 98,
      movieName: 'Spider-Man: Homecoming',
      starRating: 1,
      year: 2017,
      isFeatured: 0,
    },
    {
      sNo: 52,
      movieName: 'Star Wars: The Force Awakens',
      starRating: 2,
      year: 2015,
      isFeatured: 1,
    },
    {
      sNo: 49,
      movieName: 'The Day After Tomorrow',
      starRating: 1,
      year: 2004,
      isFeatured: 0,
    },
    {
      sNo: 91,
      movieName: 'The Jungle Book',
      starRating: 1,
      year: 2016,
      isFeatured: 0,
    },
    {
      sNo: 30,
      movieName: 'The Twilight Saga: New Moon',
      starRating: 3,
      year: 2009,
      isFeatured: 0,
    },
    {
      sNo: 28,
      movieName: 'Transformers',
      starRating: 1,
      year: 2007,
      isFeatured: 0,
    },
    {
      sNo: 74,
      movieName: 'Transformers: Dark of the Moon',
      starRating: 3,
      year: 2011,
      isFeatured: 0,
    },
    { sNo: 29, movieName: 'Up', starRating: 2, year: 2009, isFeatured: 1 },
    {
      sNo: 44,
      movieName: 'I Am Legend',
      starRating: 4,
      year: 2007,
      isFeatured: 0,
    },
    {
      sNo: 22,
      movieName: 'Indiana Jones and the Kingdom of the Crystal Skull',
      starRating: 4,
      year: 2008,
      isFeatured: 0,
    },
    {
      sNo: 92,
      movieName: 'Jumanji: Welcome to the Jungle',
      starRating: 5,
      year: 2017,
      isFeatured: 0,
    },
    {
      sNo: 63,
      movieName: 'Jurassic World: Fallen Kingdom',
      starRating: 3,
      year: 2018,
      isFeatured: 0,
    },
    {
      sNo: 33,
      movieName: 'Star Wars: Episode II � Attack of the Clones',
      starRating: 1,
      year: 2002,
      isFeatured: 0,
    },
    {
      sNo: 17,
      movieName: 'Star Wars: Episode III � Revenge of the Sith',
      starRating: 2,
      year: 2005,
      isFeatured: 0,
    },
    {
      sNo: 56,
      movieName: 'The Avengers',
      starRating: 2,
      year: 2012,
      isFeatured: 0,
    },
    {
      sNo: 25,
      movieName: 'The Chronicles of Narnia',
      starRating: 3,
      year: 2005,
      isFeatured: 0,
    },
    {
      sNo: 88,
      movieName: 'The Hobbit: An Unexpected Journey',
      starRating: 3,
      year: 2012,
      isFeatured: 0,
    },
    {
      sNo: 80,
      movieName: 'Toy Story 3',
      starRating: 3,
      year: 2010,
      isFeatured: 0,
    },
    {
      sNo: 18,
      movieName: 'Transformers: Revenge of the Fallen',
      starRating: 2,
      year: 2009,
      isFeatured: 0,
    },
    {
      sNo: 58,
      movieName: 'Avengers: Age of Ultron',
      starRating: 1,
      year: 2015,
      isFeatured: 0,
    },
    {
      sNo: 51,
      movieName: 'Avengers: Endgame',
      starRating: 5,
      year: 2019,
      isFeatured: 0,
    },
    {
      sNo: 65,
      movieName: 'Beauty and the Beast',
      starRating: 1,
      year: 2017,
      isFeatured: 0,
    },
    {
      sNo: 70,
      movieName: 'Captain America: Civil War',
      starRating: 3,
      year: 2016,
      isFeatured: 1,
    },
    {
      sNo: 90,
      movieName: 'Despicable Me 2',
      starRating: 4,
      year: 2013,
      isFeatured: 0,
    },
    {
      sNo: 85,
      movieName: 'Finding Dory',
      starRating: 4,
      year: 2016,
      isFeatured: 0,
    },
    { sNo: 36, movieName: 'Hancock', starRating: 3, year: 2008, isFeatured: 0 },
    {
      sNo: 7,
      movieName: 'Harry Potter and the Order of the Phoenix',
      starRating: 3,
      year: 2007,
      isFeatured: 0,
    },
    {
      sNo: 5,
      movieName: "Harry Potter and the Philosopher's Stone",
      starRating: 4,
      year: 2001,
      isFeatured: 0,
    },
    {
      sNo: 21,
      movieName: 'Harry Potter and the Prisoner of Azkaban',
      starRating: 5,
      year: 2004,
      isFeatured: 0,
    },
    {
      sNo: 99,
      movieName: 'Ice Age: Continental Drift',
      starRating: 5,
      year: 2012,
      isFeatured: 0,
    },
    {
      sNo: 39,
      movieName: 'Mamma Mia!',
      starRating: 5,
      year: 2008,
      isFeatured: 0,
    },
    {
      sNo: 3,
      movieName: "Pirates of the Caribbean: Dead Man's Chest",
      starRating: 2,
      year: 2006,
      isFeatured: 0,
    },
    {
      sNo: 20,
      movieName: 'Shrek the Third',
      starRating: 4,
      year: 2007,
      isFeatured: 0,
    },
    { sNo: 75, movieName: 'Skyfall', starRating: 1, year: 2012, isFeatured: 0 },
    {
      sNo: 23,
      movieName: 'Spider-Man 2',
      starRating: 4,
      year: 2004,
      isFeatured: 0,
    },
    {
      sNo: 72,
      movieName: 'Spider-Man: Far From Home',
      starRating: 1,
      year: 2019,
      isFeatured: 0,
    },
    {
      sNo: 24,
      movieName: 'The Da Vinci Code',
      starRating: 5,
      year: 2006,
      isFeatured: 0,
    },
    {
      sNo: 4,
      movieName: 'The Dark Knight',
      starRating: 5,
      year: 2008,
      isFeatured: 0,
    },
    {
      sNo: 15,
      movieName: 'The Lord of the Rings: The Fellowship of the Ring',
      starRating: 4,
      year: 2001,
      isFeatured: 0,
    },
    {
      sNo: 2,
      movieName: 'The Lord of the Rings: The Return of the King',
      starRating: 4,
      year: 2003,
      isFeatured: 0,
    },
    {
      sNo: 78,
      movieName: 'Toy Story 4',
      starRating: 5,
      year: 2019,
      isFeatured: 0,
    },
    {
      sNo: 76,
      movieName: 'Transformers: Age of Extinction',
      starRating: 3,
      year: 2014,
      isFeatured: 0,
    },
    { sNo: 27, movieName: '2012', starRating: 3, year: 2009, isFeatured: 0 },
    { sNo: 82, movieName: 'Aladdin', starRating: 3, year: 2019, isFeatured: 0 },
    { sNo: 71, movieName: 'Aquaman', starRating: 5, year: 2018, isFeatured: 0 },
    { sNo: 1, movieName: 'Avatar', starRating: 3, year: 2009, isFeatured: 0 },
    {
      sNo: 60,
      movieName: 'Black Panther',
      starRating: 5,
      year: 2018,
      isFeatured: 0,
    },
    {
      sNo: 96,
      movieName: 'Bohemian Rhapsody',
      starRating: 4,
      year: 2018,
      isFeatured: 0,
    },
    {
      sNo: 41,
      movieName: 'Casino Royale',
      starRating: 5,
      year: 2006,
      isFeatured: 0,
    },
    {
      sNo: 61,
      movieName: 'Harry Potter and the Deathly Hallows � Part 2',
      starRating: 3,
      year: 2011,
      isFeatured: 0,
    },
    {
      sNo: 13,
      movieName: 'Ice Age: Dawn of the Dinosaurs',
      starRating: 3,
      year: 2009,
      isFeatured: 0,
    },
    {
      sNo: 45,
      movieName: 'Iron Man',
      starRating: 4,
      year: 2008,
      isFeatured: 0,
    },
    {
      sNo: 34,
      movieName: 'Kung Fu Panda',
      starRating: 2,
      year: 2008,
      isFeatured: 0,
    },
    { sNo: 69, movieName: 'Minions', starRating: 3, year: 2015, isFeatured: 0 },
    {
      sNo: 48,
      movieName: 'Mission: Impossible 2',
      starRating: 2,
      year: 2000,
      isFeatured: 0,
    },
    {
      sNo: 6,
      movieName: "Pirates of the Caribbean: At World's End",
      starRating: 4,
      year: 2007,
      isFeatured: 1,
    },
    {
      sNo: 37,
      movieName: 'Ratatouille',
      starRating: 2,
      year: 2007,
      isFeatured: 0,
    },
    { sNo: 10, movieName: 'Shrek 2', starRating: 4, year: 2004, isFeatured: 0 },
    { sNo: 97, movieName: 'Spectre', starRating: 2, year: 2015, isFeatured: 0 },
    {
      sNo: 19,
      movieName: 'Spider-Man',
      starRating: 3,
      year: 2002,
      isFeatured: 0,
    },
    {
      sNo: 12,
      movieName: 'Spider-Man 3',
      starRating: 1,
      year: 2007,
      isFeatured: 0,
    },
    {
      sNo: 62,
      movieName: 'Star Wars: The Last Jedi',
      starRating: 1,
      year: 2017,
      isFeatured: 0,
    },
    {
      sNo: 94,
      movieName: 'The Hobbit: The Desolation of Smaug',
      starRating: 5,
      year: 2013,
      isFeatured: 0,
    },
    {
      sNo: 55,
      movieName: 'The Lion King',
      starRating: 1,
      year: 2019,
      isFeatured: 0,
    },
    {
      sNo: 9,
      movieName: 'The Lord of the Rings: The Two Towers',
      starRating: 1,
      year: 2002,
      isFeatured: 0,
    },
    {
      sNo: 26,
      movieName: 'The Matrix Reloaded',
      starRating: 3,
      year: 2003,
      isFeatured: 0,
    },
    {
      sNo: 42,
      movieName: 'War of the Worlds',
      starRating: 4,
      year: 2005,
      isFeatured: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}