// Function to show trailer when clicked
function showTrailer(movie) {
  let trailerUrl = "";

  switch(movie) {
    case "Oppenheimer":
      trailerUrl = "https://www.youtube.com/embed/8f2uJq1h6uM";
      break;
    case "Barbie":
      trailerUrl = "https://www.youtube.com/embed/pK2z4vG8fS4";
      break;
    case "Mission Impossible":
      trailerUrl = "https://www.youtube.com/embed/ci-1xhZElxI";
      break;
    default:
      trailerUrl = "#";
  }

  window.open(trailerUrl, "_blank");
}
