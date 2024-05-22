document.addEventListener("DOMContentLoaded", function () {
  var showMoreButtons = document.querySelectorAll(".show-more-button");
  showMoreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var text = this.previousElementSibling;
      text.classList.toggle("collapsed");
      if (text.classList.contains("collapsed")) {
        this.textContent = "Show more";
      } else {
        this.textContent = "Show less";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.querySelector(".modal-body__next");
  const prevButton = document.querySelector(".modal-body__prev");
  const reviews = document.querySelectorAll(".stay");

  let currentReviewIndex = 0;

  for (let i = 1; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }

  function showNextReview() {
    reviews[currentReviewIndex].style.display = "none";
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    reviews[currentReviewIndex].style.display = "block";
  }

  function showPrevReview() {
    reviews[currentReviewIndex].style.display = "none";
    currentReviewIndex =
      (currentReviewIndex - 1 + reviews.length) % reviews.length;
    reviews[currentReviewIndex].style.display = "block";
  }

  nextButton.addEventListener("click", showNextReview);
  prevButton.addEventListener("click", showPrevReview);
});
