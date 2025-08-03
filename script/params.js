const ratingLabel = document.querySelector(".card-notif__header .subtitle");

const params = new URLSearchParams(window.location.search);

if (params.has("rating")) {
  const selectedRating = params.get("rating");
  ratingLabel.innerHTML = `You selected ${selectedRating} out of 5`;
} else {
  ratingLabel.innerHTML = `You still haven't given a rating`;
}
