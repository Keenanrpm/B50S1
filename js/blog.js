//let namaSiswa1 = "Bagus";
//let namaSiswa2 = "Guswandi";
//let namaSiswa3 = "Arsya";

//console.log(namaSiswa1);
//console.log(namaSiswa2);
//console.log(namaSiswa3);

// Array
// tabungan value dimana kita bisa memiliki lebih dari satu value dalam satu variable
//let namaSiswa = ["Bagus", "Guswandi", "Arsya"];
//console.log(namaSiswa);
//console.log(namaSiswa[0]);
//console.log(namaSiswa[1]);
//console.log(namaSiswa[2]);

//let nama = "Bagus";
//let alamat = "Tanggerang";
//let umur = 24;

//console.log(nama);
//console.log(alamat);
//console.log(umur);

// Object
// tabungan variable dimana bisa memiliki lebih dari satu key value adlam satu variable
// contoh = nama: "Bagus", alamat: "Tanggerang"
// dimana nama sebagai key dan "Bagus" sebagai value
//let dataPersonal1 = {
//    nama: "Bagus",
//    alamat: "Tanggerang",
//    umur: 24,
//};

//let dataPersonal2 = {
//    nama : "Guswandi",
//    alamat : "Padang",
//    umur : 20,
//};

//let dataPersonal3 = {
//    nama : "Arsya",
//    alamat : "Karawang",
//    umur : 17,
//};

//console.log(dataPersonal1);
//console.log(dataPersonal2.nama);
//console.log(dataPersonal2.umur);

// Array of object
// memperbolehkan kita menyimpan lebih dari satu object dalam satu variable

//let dataPersonal = [
//    {
//        nama: "Bagus",
//        alamat: "Tanggerang",
//        umur : 24,
//    },
//    {
//        nama : "Guwandi",
//        alamat : "Padang",
//        umur : 20,
//    },
//    {
//        nama : "Arsya",
//        alamat : "Karawang",
//        umur : 17,
//    },
//];

//console.log(dataPersonal);
//console.log(dataPersonal[1]);
//console.log(dataPersonal[2].nama);

//-------//

//let data = [];

//console.log(data);

//function addData() {
//    let person = {
//        nama: "Maulana",
//        alamat: "Bandung",
//        umur: 24,
//    };

    // fungsi push memasukan data baru di dalam sebuah array
    // sebagai contoh data person akan dimasukan ke dalam array data
//    data.push(person);

//    console.log(data);
//}

//addData();

// let blogs = [];

// // Define the firstBlogContent function
// function firstBlogContent() {
//     // Define the initial content for the blog container
//     return `
//     `;
//   }

// function addBlog(event) {
//   event.preventDefault();

//   let title = document.getElementById('input-blog-title').value;
//   let content = document.getElementById('input-blog-content').value;
//   let image = document.getElementById('input-blog-image');

//   console.log(image);
//   if (title == '' || image == '' || content == '') {
//     return alert('All input fields must be not empty');
//   }
//   image = URL.createObjectURL(image.files[0]);

//   document.getElementById('input-blog-title').value = '';

//   let blog = {
//     author: 'Keenan',
//     title: title,
//     image: image,
//     content: content,
//     postedAt: new Date(),
//   };

//   blogs.push(blog);

//   renderBlog();
// }

// function renderBlog() {
//   console.table(blogs);

//   let blogContainer = document.getElementById('contents');

//   blogContainer.innerHTML = firstBlogContent();

//   for (let i = 0; i < blogs.length; i++) {
//     console.log(blogs[i]);

//     blogContainer.innerHTML += `
//     <div id="${i}" class="blog-list-item">
//       <div class="blog-image">
//         <img src="${blogs[i].image}" alt="" />
//       </div>
//       <div class="blog-content">
//         <div class="btn-group">
//           <button class="btn-edit">Edit Post</button>
//           <button class="btn-post">Post Blog</button>
//         </div>
//         <h1>
//           <a href="blog-detail.html" target="_blank"
//             >${blogs[i].title}</a
//           >
//         </h1>
//         <div class="detail-blog-content">
//           12 Jul 2021 22:30 WIB | ${blogs[i].author}
//         </div>
//         <p>${blogs[i].content}</p>
//       </div>
//     </div>
//     `;
//   }
// }

// js

// let newBlog = [];
// function addBlog(event) {
//   event.preventDefault();

//   let projectName = document.getElementById("project-name").value;
//   let startDate = document.getElementById("start-date").value;
//   let endDate = document.getElementById("end-date").value;
//   let description = document.getElementById("description").value;
//   let technologies = document.getElementById("technologies").value;
//   let fileUpload = document.getElementById("file-upload").files;

//   fileUpload = URL.createObjectURL(fileUpload[0]);

//   let blog = { projectName, startDate, endDate, description, technologies, fileUpload };
//   newBlog.push(blog);
//   console.log(newBlog);

//   renderBlog();
// }

// function renderBlog() {
//   document.getElementById("card-one").innerHTML = "";

//   for (let i = 0; i < newBlog.length; i++) {
//     console.log(newBlog[i]);
//     document.getElementById("card-one").innerHTML += `
//         <div class="card" id="card">
//             <img src="${newBlog[i].fileUpload}" alt="project" />
//             <h4>${newBlog[i].projectName}</h4>
//             <h5>durasi : 3 bulan</h5>
//             <p>${newBlog[i].description}</p>
//             <i class="${newBlog[i].technologies}"></i>
//             <div class="btn">
//               <button class="edit">edit</button>
//               <button class="delete">delete</button>
//             </div>
            
//           </div>
//         `;
//   }
// }

let projects = []



function addProjects(event){
    event.preventDefault()

    let getImage = document.getElementById('upload')
    let getProjectName = document.getElementById('project').value
    let getDesc = document.getElementById('description').value
    let getStartDate = document.getElementById('start-input').value
    let getEndDate = document.getElementById('end-input').value
    let getIcon1 = document.getElementById('node')
    let getIcon2 = document.getElementById('react')
    let getIcon3 = document.getElementById('next')
    let getIcon4 = document.getElementById('type')
    
    var printIcon = ""

    if(getIcon1.checked == true){
        printIcon += '<img value="node" id="node" src="img/node.png" alt="">'
    }

    if(getIcon2.checked == true){
        printIcon += '<img value="react" id="react" src="img/react.png" alt="">'
    }

    if(getIcon3.checked == true){
        printIcon += '<img value="next" id="next" src="img/next.png" alt="">'
    }

    if(getIcon4.checked == true){
        printIcon += '<img value="type" id="type" src="img/type.png" alt="">'
    }
    
    getImage = URL.createObjectURL(getImage.files[0])
    getEndDate = new Date(getEndDate)
    getStartDate = new Date(getStartDate)

    let projectDetail = {
        getImage,
        getProjectName,
        getDesc,
        getStartDate,
        getEndDate,
        printIcon
    }

    projects.push(projectDetail)

    displayProject()

    console.log(projects);

}



function displayProject(){
    

    let projectContainer = document.getElementById('project-list')

    projectContainer.innerHTML = firstProjectDisplay()

    let lengthProject = projects.length

    for(i = 0 ; i < lengthProject ; i++){
        console.log(projects);
        projectContainer.innerHTML += `
        <div class="project-list-item">
        <a href="blog-detail.html">
            <div class="card-img">
                <img src="${projects[i].getImage}" alt="">
            </div>                    
            <div class="card-title">
                <h3>${projects[i].getProjectName}</h3>
            </div>    
            <div class="card-drt">
                <p>${monthDuration(projects[i].getEndDate, projects[i].getStartDate)}</p>
            </div>
            <div class="card-desc">
                <p>${projects[i].getDesc}</p>
            </div>
            <div class="card-icon">
                ${projects[i].printIcon}        
            </div>
        </a>
        <div class="card-btn">
            <div class="edit-btn">
                <button>edit</button>
            </div>
            <div class="del-btn">
                <button>delete</button>
            </div>
        </div>
    </div>
        `
    }
    alert("Your project successfully added!")
}



function monthDuration(endDate, startDate){
    let month
    let year
    let monthDistance
    let endMonth = endDate.getMonth()
    let startMonth = startDate.getMonth()
    let endYear = endDate.getFullYear()
    let startYear = startDate.getFullYear()

    if(startYear == endYear){
        if(startMonth == endMonth){
            month = 1
            return 'durasi ' + month + ' bulan'
        }else{
            month = endMonth - startMonth
            return 'durasi ' + month + ' bulan'
        }
    } 
  
    
    if(endYear > startYear){
        if(endYear - startYear == 1){
            if(startMonth == endMonth){
                return 'durasi 1 tahun'
            }else if(startMonth > endMonth){
                month = (startMonth - endMonth - 12) * -1
                return 'durasi ' + month + ' bulan'
            }else if(startMonth < endMonth){
                month = endMonth - startMonth
                return 'durasi 1 tahun ' + month + ' bulan'
            }
        }else{
            year = endYear - startYear
            if(startMonth == endMonth){
                return 'durasi ' + year + ' tahun '
            }else if(startMonth > endMonth){
                year -= 1
                month = (startMonth - endMonth - 12) * -1
                return 'durasi ' + year + ' tahun ' + month + ' bulan'
            }else if(startMonth < endMonth){
                month = endMonth - startMonth
                return 'durasi ' + year + ' tahun ' + month + ' bulan'
            }
        }
    }

}


function firstProjectDisplay(){
    return `
    <div class="project-list-item">
    <a href="blog-detail.html">
        <div class="card-img">
            <img src="img/ry-cloze-enforcer-v002.jpg" alt="">
        </div>                    
        <div class="card-title">
            <h3>Dumbways Mobile App - 2021</h3>
        </div>    
        <div class="card-drt">
            <p>durasi 3 bulan</p>
        </div>
        <div class="card-desc">
            <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat corporis magni 
            suscipit libero exercitationem! Aperiam 
            excepturi natus ad nihil cum!</p>
        </div>
        <div class="card-icon">
            <img id="next" src="img/next.png" alt="">
            <img id="node" src="img/node.png" alt="">
            <img id="react" src="img/react.png" alt="">
            <img id="type" src="img/type.png" alt="">
        </div>
    </a>
    <div class="card-btn">
        <div class="edit-btn">
            <button>edit</button>
        </div>
        <div class="del-btn">
            <button>delete</button>
        </div>
    </div>
</div>
    `
}