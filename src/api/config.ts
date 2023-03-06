const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "92b418e837b833be308bbfb1fb2aca1e",
  originalImage: (imgPath:string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath:string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
