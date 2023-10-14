let projects = [];

let monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function showAlert(message) {
  return alert(message);
}

function addProject(event) {
  event.preventDefault();

  const projectName = document.getElementById("project-name").value;
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  const description = document.getElementById("description").value;
  const technologies = document.getElementsByName("technologies");

  if (new Date(startDate) > new Date(endDate)) {
    showAlert("Please choose the correct date");
  }

  let checkedTechs = [];
  for (let index = 0; index < technologies.length; index++) {
    if (technologies[index].checked) {
      checkedTechs.push(technologies[index].value);
    }
  }

  let uploadImage = document.getElementById("upload-image").files;

  if (uploadImage.length <= 0) {
    showAlert("Please upload an image");
  } else {
    uploadImage = URL.createObjectURL(uploadImage[0]);
  }

  let project = {
    projectName,
    startDate,
    endDate,
    description,
    postedAt: new Date(),
    techs: checkedTechs,
    imageUrl: uploadImage,
  };

  projects.push(project);
  renderProject();
}

function getPostedAt(postedAt) {
  const date = postedAt.getDate();
  const monthIndex = postedAt.getMonth();
  const year = postedAt.getFullYear();
  let hours = postedAt.getHours();
  let minutes = postedAt.getMinutes();

  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDuration(date1, date2) {
  const objEndDate = new Date(date1).getTime();
  const objStartDate = new Date(date2).getTime();

  const diff = objEndDate - objStartDate;

  const oneDayInMS = 86400000;

  const day = Math.floor(diff / oneDayInMS);
  const month = Math.floor(day / 30);
  const year = Math.floor(day / 365);

  if (day > 365) {
    return `${year > 1 ? `${year} Years` : `${year} Year`}`;
  } else if (day > 30) {
    return `${month > 1 ? `${month} Months` : `${month} Month`}`;
  } else {
    return `${day > 1 ? `${day} Days` : `${day} Day`}`;
  }
}

function getTimeAfterPosted(time) {
  const latestTime = new Date();
  const postedTime = time;

  const timeDifference = latestTime - postedTime;

  const milisecond = 1000;
  const secondInHours = 3600;
  const hoursInDays = 24;

  const secondDifference = Math.floor(timeDifference / milisecond);
  const minuteDifference = Math.floor(timeDifference / (milisecond * 60));
  const hourDifference = Math.floor(timeDifference / (milisecond * 60 * 60));
  const dayDifference = Math.floor(
    timeDifference / (milisecond * secondInHours * hoursInDays)
  );

  if (dayDifference > 0) {
    return `${
      dayDifference > 1 ? `${dayDifference} day` : `${dayDifference} days`
    } ago`;
  } else if (hourDifference > 0) {
    return `${
      hourDifference > 1 ? `${hourDifference} hour` : `${hourDifference} hours`
    } ago`;
  } else if (minuteDifference > 0) {
    return `${
      minuteDifference > 1
        ? `${minuteDifference} minute`
        : `${minuteDifference} minutes`
    } ago`;
  } else {
    return `${
      secondDifference > 1
        ? `${secondDifference} second`
        : `${secondDifference} seconds`
    } ago`;
  }
}

function getTechnology(value) {
  switch (value) {
    case "Node JS":
      return `<i class="fa-2xl fa-brands fa-node"></i>`;
    case "React JS":
      return `<i class="fa-2xl fa-brands fa-react"></i>`;
    case "Next JS":
      return `<img width="32" src="../images/logo/nextjs.svg" />`;
    case "Typescript":
      return `<img width="32" src="../images/logo/typescript.svg" />`;
    default:
      return false;
  }
}

function getTechnology(value) {
  const icons = {
    "Node JS": '<img width="32" src="../images/logo/nodejs.svg" />',
    "React JS": '<img width="32" src="../images/logo/reactjs.svg" />',
    "Next JS": '<img width="32" src="../images/logo/nextjs.svg" />',
    Typescript: '<img width="32" src="../images/logo/typescript.svg" />',
  };

  return icons[value] || false;
}

function renderProject() {
  let projectsContainerEl = document.getElementById("projects__container");

  projectsContainerEl.innerHTML = "";

  for (let index = 0; index < projects.length; index++) {
    projectsContainerEl.innerHTML += `
    <div class="project__item">
          <a href="../pages/project.html">
            <img class="project__image" src=${projects[index].imageUrl} />
            <div>
              <h3 class="project__title">${projects[index].projectName}</h3>
              <p class="project__duration">Duration: ${getDuration(
                projects[index].endDate,
                projects[index].startDate
              )}</p>
              <p class="project__postedAt">Posted at: ${getPostedAt(
                projects[index].postedAt
              )}</p>
            </div>
            <p class="project__description">
            ${projects[index].description}
            </p>
            <div class="project__technologies">
              ${projects[index].techs
                .map((item) => getTechnology(item))
                .join("")}
            </div>
          </a>
          <div class="project__btns">
            <button class="btn main">Edit</button>
            <button class="btn alt">Submit</button>
          </div>
          <div class="project__timeAfterPosted">
            <p>${getTimeAfterPosted(projects[index].postedAt)}</p>
          </div>
        </div>`;
  }
}

setInterval(() => {
  renderProject();
}, 1000);