// testimonial Data from npoint
const testimonialJSON = new Promise((resolve, reject) => {
  // make new instance object xhrHTTPRequest object
  const xhr = new XMLHttpRequest();

  // new open method inside xhr
  xhr.open("GET", "https://api.npoint.io/fb4ba2e41d885a628557", true);

  // an events that check status, if 200 return data else reject
  xhr.onload = function () {
    if (xhr.status == 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error Status: " + xhr.status);
    }
  };

  // error event immediately reject
  xhr.onerror = function () {
    reject("Network Error");
  };

  xhr.send();
});

function renderStars(stars) {
  let starsArr = [];
  for (let i = 0; i < stars; i++) {
    starsArr.push(`<i class="fa-solid fa-star"></i>`);
  }

  const starsHTML = starsArr.join("");
  return starsHTML;
}

function renderTestimonial(image, testimonial, stars, author) {
  return `<div class="testimonial__card">
            <img class="testimonial__cardImage" src="${image}" />
            <i class="testimonial__comment">"${testimonial}"</i>
            <p class="testimonial__stars" id="reviewStars">
              ${renderStars(stars)}
            </p>
            <p class="testimonial__author">- ${author}</p>
          </div>`;
}

async function filterTestimonial(stars) {
  // all rating button
  const getAllRatingButtons = document.querySelectorAll(".rating__btn");
  getAllRatingButtons.forEach((button) => button.classList.remove("active"));

  // button active by stars
  const activeRatingButtons = document.getElementById(`${stars}-stars`);
  if (activeRatingButtons) {
    activeRatingButtons.classList.add("active");
  }

  try {
    // json data
    const testimonialData = await testimonialJSON;

    // filter testimonial
    const filteredTestimonial = testimonialData.filter(
      (item) => item.stars === stars
    );

    // get element with an ID testimonial__container
    let testimonialContainerEL = document.getElementById(
      "testimonial__container"
    );

    // 0 get all items
    if (stars == 0) {
      const testimonialHTML = testimonialData
        .map((item) =>
          renderTestimonial(
            item.image,
            item.testimonial,
            item.stars,
            item.author
          )
        )
        .join(" ");
      testimonialContainerEL.innerHTML = testimonialHTML;
      return;
    }

    if (filteredTestimonial.length === 0) {
      testimonialContainerEL.innerHTML = `<h2 style="text-align: center; width: 100%;">Data Not Found</h2>`;
      return;
    }

    // filtered testimonial
    const testimonialHTML = filteredTestimonial
      .map((item) =>
        renderTestimonial(item.image, item.testimonial, item.stars, item.author)
      )
      .join(" ");
    testimonialContainerEL.innerHTML = testimonialHTML;
  } catch (error) {
    throw new Error(error);
  }
}

filterTestimonial(0);