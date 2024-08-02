const api_key = "90433053f2385c755ec2556a85a0ad29";
const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDQzMzA1M2YyMzg1Yzc1NWVjMjU1NmE4NWEwYWQyOSIsInN1YiI6IjY2MDQ4NmUxZDdjZDA2MDE2NDg3YjhjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQkHylGyHF4h1hKeTmfQ-B9VDnlOBesJlfggapESSMQ";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDQzMzA1M2YyMzg1Yzc1NWVjMjU1NmE4NWEwYWQyOSIsInN1YiI6IjY2MDQ4NmUxZDdjZDA2MDE2NDg3YjhjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQkHylGyHF4h1hKeTmfQ-B9VDnlOBesJlfggapESSMQ'
    }
  };
const base_url = "https://api.themoviedb.org/3"
const base_img = "https://image.tmdb.org/t/p/w500"
// https://api.themoviedb.org/3/discover/movie

async function get_movies(){
    const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=90433053f2385c755ec2556a85a0ad29")
    const movies1 = await res.json()
    getmovieDetails(movies1.results);
    print_movies(movies1.results)
}
get_movies()

async function print_movies(movies){
    const moviescontainer = document.getElementById("moviescontainer")

    
    await movies.map(movie => {
        moviescontainer.innerHTML +=`<div class="owl-carousel-info-wrap item">
        <img src="${base_img}/${movie.poster_path}" class="owl-carousel-image img-fluid" alt="">

        <div class="owl-carousel-info">
            <h4 class="mb-2">
                ${movie.title}
                <img src="images/verified.png" class="owl-carousel-verified-image img-fluid" alt="">
            </h4>

            <span class="badge">${movie.id}</span>

            
        </div>

        <div class="social-share">
            <ul class="social-icon">
                <li class="social-icon-item">
                    <a href="#" class="social-icon-link bi-twitter"></a>
                </li>

                <li class="social-icon-item">
                    <a href="#" class="social-icon-link bi-facebook"></a>
                </li>
            </ul>
        </div>
    </div>`
    })
    
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2,
            },
            767:{
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    });
  
      
      
}

print_movies()
function getmovieDetails(movies){
    const details = document.getElementById("details")
    movies.map(movie=>{
        const url = `${base_url}/movie/${movie.id}`
        fetch(url , options)
         .then(response => response.json())
         .then(response => {
            console.log(response);
            details.innerHTML +=` <div class="col-lg-6 col-12 mb-4 mb-lg-0">
            <div class="custom-block d-flex">
                <div class="">
                    <div class="custom-block-icon-wrap">
                        <div class="section-overlay"></div>
                        <a href="detail-page.html" class="custom-block-image-wrap">
                            <img src="${base_img}/${movie.backdrop_path}" width="100" alt="">

                           
                        </a>
                    </div>

                </div>

                <div class="custom-block-info">
                    <div class="custom-block-top d-flex mb-1">
                        <small class="me-4">
                            <i class="bi-clock-fill custom-icon"></i>
                            ${response.release_date}
                        </small>

                        <small>Budget <span class="badge">${response.budget}</span></small>
                    </div>

                    <h5 class="mb-2">
                        <a href="detail-page.html">
                            ${response.title}
                        </a>
                    </h5>

                    <div class="profile-block d-flex">
                        <img src="${base_img}/${movie.poster_path}" width="200" class="profile-block-image img-fluid" alt="">

                        <p>
                            ${response.homepage}
                            <img src="images/verified.png" class="verified-image img-fluid" alt="">
                            <strong>${response.tagline}</strong></p>
                    </div>

                    <p class="mb-0">${response.overview}</p>

                    
                </div>

                <div class="d-flex flex-column ms-auto">
                    <a href="#" class="badge ms-auto">
                        <i class="bi-heart"></i>
                    </a>

                    <a href="#" class="badge ms-auto">
                        <i class="bi-bookmark"></i>
                    </a>
                </div>
            </div>
        </div>`
         })

  
        
    })

}

/*  */
// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDQzMzA1M2YyMzg1Yzc1NWVjMjU1NmE4NWEwYWQyOSIsInN1YiI6IjY2MDQ4NmUxZDdjZDA2MDE2NDg3YjhjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQkHylGyHF4h1hKeTmfQ-B9VDnlOBesJlfggapESSMQ'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/movie/45678/images', options)
//     .then(response => response.json())
//     .then(response => 

async function get_topmovies(){
    const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=90433053f2385c755ec2556a85a0ad29")
    const movies2 = await res.json()
   
    const topmovies = document.getElementById("topmovies")
    movies2.results.map(movie2=>{
        topmovies.innerHTML += `<div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
        <div class="custom-block custom-block-overlay">
            <a href="detail-page.html" class="custom-block-image-wrap">
                <img src="${base_img}/${movie2.poster_path}" class="custom-block-image img-fluid" alt="">
            </a>

            <div class="custom-block-info custom-block-overlay-info">
                <h5 class="mb-1">
                    <a href="listing-page.html">
                       ${movie2.title}
                    </a>
                </h5>

                <p class="badge mb-0">${movie2.release_date}</p>
            </div>
        </div>
    </div>`

    })
}
get_topmovies()

const search_form = document.getElementById("search_form")
search_form.addEventListener("submit", function(e){
    e.preventDefault()
   const search_res = document.getElementById("search_res")
    const url = `https://api.themoviedb.org/3/search/movie?query=${this.search.value}`
   fetch(url , options)
  .then(response => response.json())
  .then(response => {
    console.log(response.results);
         search_res.innerHTML="";
    (response.results).map(result =>{
        search_res.innerHTML += `<div value=""> ${result.title} id: ${result.id} <img src="${base_img}${result.poster_path}" width="100"> ${result.overview}</div>`

    })
    
    
  })
})
