function solution(genres, plays) {
  var answer = [];
  const map = new Map();
  
  for (let i = 0; i < genres.length; i++) {
    if (!map.has(genres[i])) {
      map.set(genres[i], {totalPlays: plays[i], songs: [{index: i, plays: plays[i]}]});
    } else {
      const genreInfo = map.get(genres[i]);
      genreInfo.totalPlays += plays[i];
      genreInfo.songs.push({index: i, plays: plays[i]});
    }
  }

  const sortedGenres = [...map].sort((a, b) => b[1].totalPlays - a[1].totalPlays);
  
  for (const genreInfo of sortedGenres) {
    const sortedSongs = genreInfo[1].songs.sort((a, b) => b.plays - a.plays);
    answer.push(sortedSongs[0].index);
    if (sortedSongs.length > 1) {
      answer.push(sortedSongs[1].index);
    }
  }

  return answer;
}