// class Testimonial {
//     #comment = "";
//     #image = "";
  
//     constructor(comment, image) {
//       this.#comment = comment;
//       this.#image = image;
//     }
  
//     get comment() {
//       return this.#comment;
//     }
  
//     get image() {
//       return this.#image;
//     }
  
//     get author() {
//       throw new error("getAuthor() method must be implemented");
//     }
  
//     get testimonialHTML() {
//       return `
//         <div class="testimonial__card">
//           <img class="testimonial__cardImage" src="${this.image}" />
//           <i class="testimonial__comment">"${this.comment}"</i>
//           <p class="testimonial__name">- ${this.author}</p>
//         </div>
//       `;
//     }
//   }
  
//   class AuthorTestimonial extends Testimonial {
//     #author = "";
  
//     constructor(author, quote, image) {
//       super(quote, image);
//       this.#author = author;
//     }
  
//     get author() {
//       return this.#author;
//     }
//   }
  
//   class CompanyTestimonial extends Testimonial {
//     #company = "";
  
//     constructor(author, quote, image) {
//       super(quote, image);
//       this.#company = author;
//     }
  
//     get author() {
//       return this.#company + " Company";
//     }
//   }
  
//   const testimonial0 = new AuthorTestimonial(
//     "John Doe",
//     "This website is amazing! The user interface is so intuitive, and the design is modern and appealing. I'm really impressed with the attention to detail and the overall experience.",
//     "https://images.unsplash.com/photo-1498609458988-7b2c70d9213a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//   );
  
//   const testimonial1 = new AuthorTestimonial(
//     "Jane Smith",
//     "I've visited many websites, but this one stands out. The content is organized beautifully, and the responsiveness on mobile devices is fantastic. The clean layout makes it a joy to explore.",
//     "https://images.unsplash.com/photo-1524282540044-f375913440a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
//   );
  
//   const testimonial2 = new AuthorTestimonial(
//     "Alex Johnson",
//     "I stumbled upon this website and was blown away by the quality of the content. The visuals are stunning, and the navigation is seamless. It's clear that the creators put a lot of effort into making this a top-notch site.",
//     "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//   );
  
//   const testimonial3 = new CompanyTestimonial(
//     "Emily Williams",
//     "I absolutely love this website! The user experience is smooth, and I appreciate how easy it is to find the information I need. The design choices are modern and visually appealing. Highly recommended!",
//     "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
//   );
  
//   let testimonialData = [testimonial0, testimonial1, testimonial2, testimonial3];
//   let testimonialHTML = "";
  
//   for (let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].testimonialHTML;
//   }
  
//   console.log(testimonialData);
  
//   document.getElementById("testimonial__container").innerHTML = testimonialHTML;

// const testimonialData = [
//   {
//     author: "John Doe",
//     testimonial: "This website is amazing! The user interface is so intuitive, and the design is modern and appealing. I'm really impressed with the attention to detail and the overall experience.",
//     image:
//       "https://images.unsplash.com/photo-1498609458988-7b2c70d9213a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     stars: 5,
//   },
//   {
//     author: "Jane Smith",
//     testimonial: "I've visited many websites, but this one stands out. The content is organized beautifully, and the responsiveness on mobile devices is fantastic. The clean layout makes it a joy to explore.",
//     image:
//       "https://images.unsplash.com/photo-1524282540044-f375913440a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
//     stars: 4,
//   },
//   {
//     author: "Alex Johnson",
//     testimonial: "I stumbled upon this website and was blown away by the quality of the content. The visuals are stunning, and the navigation is seamless. It's clear that the creators put a lot of effort into making this a top-notch site.",
//     image:
//       "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     stars: 5,
//   },
//   {
//     author: "Emily Williams",
//     testimonial: "I absolutely love this website! The user experience is smooth, and I appreciate how easy it is to find the information I need. The design choices are modern and visually appealing. Highly recommended!",
//     image:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
//     stars: 3,
//   },
//   {
//     author: "Alice Johnson",
//     testimonial: "Absolutely amazing! This website exceeded all my expectations. The design is stunning, and the user experience is flawless. I can't recommend it enough!",
//     image:
//       "https://images.unsplash.com/photo-1505075448726-57fe033637a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
//     stars: 4,
//   },
//   {
//     author: "Bob Smith",
//     testimonial: "Meh, it's okay. The website looks fine, but it's not very user-friendly. Navigation could be improved, and the design feels a bit outdated.",
//     image:
//       "https://images.unsplash.com/photo-1591420797434-062352120f8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80",
//     stars: 1,
//   },
//   {
//     author: "Carol Williams",
//     testimonial: "Decent website overall. It has some useful content, but there's room for improvement. The layout is a bit confusing, and I found a few broken links.",
//     image:
//       "https://images.unsplash.com/photo-1475870434835-a633fd526088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     stars: 3,
//   },
//   {
//     author: "David Martinez",
//     testimonial: "Pretty good website! The design is modern and engaging. The content is well-organized, and I appreciate the attention to detail. Some minor glitches here and there, though",
//     image:
//       "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     stars: 4,
//   },
//   {
//     author: "Eve Anderson",
//     testimonial: "Terrible experience. This website is a mess. The design is ugly, and it's difficult to find anything. I encountered errors everywhere. Avoid at all costs!",
//     image:
//       "https://images.unsplash.com/photo-1615241721719-cffa5802f256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     stars: 2,
//   },
// ];

// function renderStars(stars) {
//   let starsArr = [];
//   for (let i = 0; i < stars; i++) {
//     starsArr.push(`<i class="fa-solid fa-star"></i>`);
//   }

//   const starsHTML = starsArr.join("");
//   return starsHTML;
// }

// function renderTestimonial(image, testimonial, stars, author) {
//   return `<div class="testimonial__card">
//             <img class="testimonial__cardImage" src="${image}" />
//             <i class="testimonial__comment">"${testimonial}"</i>
//             <p class="testimonial__stars" id="reviewStars">
//               ${renderStars(stars)}
//             </p>
//             <p class="testimonial__author">- ${author}</p>
//           </div>`;
// }

// function filterTestimonial(stars) {
//   // rating buttons
//   const getAllRatingButtons = document.querySelectorAll(".rating__btn");
//   getAllRatingButtons.forEach((button) => button.classList.remove("active"));

//   // class by stars
//   const activeRatingButtons = document.getElementById(`${stars}-stars`);
//   if (activeRatingButtons) {
//     activeRatingButtons.classList.add("active");
//   }

//   // filter testimonial by stars
//   const filteredTestimonial = testimonialData.filter(
//     (item) => item.stars === stars
//   );

//   let testimonialContainerEL = document.getElementById(
//     "testimonial__container"
//   );

//   // all items
//   if (stars == 0) {
//     const testimonialHTML = testimonialData
//       .map((item) =>
//         renderTestimonial(item.image, item.testimonial, item.stars, item.author)
//       )
//       .join(" ");
//     testimonialContainerEL.innerHTML = testimonialHTML;
//     return;
//   }

//   // show no data when there is no stars selected
//   if (filteredTestimonial.length === 0) {
//     document.getElementById(
//       "testimonial__container"
//     ).innerHTML = `<h2 style="text-align: center; width: 100%;">Data Not Found</h2>`;
//     return;
//   }

  
//   const testimonialHTML = filteredTestimonial
//     .map((item) =>
//       renderTestimonial(item.image, item.testimonial, item.stars, item.author)
//     )
//     .join(" ");
//   testimonialContainerEL.innerHTML = testimonialHTML;
// }

// filterTestimonial(0);

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