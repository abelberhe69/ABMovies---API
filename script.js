function fun () {
    // var BoxOffice = 'https://imdb-api.com/API/BoxOffice/k_sot1p9i7';
    // var MostPopularMovies = 'https://imdb-api.com/API/MostPopularMovies/k_sot1p9i7';
    // var Top250Movies = 'https://imdb-api.com/API/Top250Movies/k_sot1p9i7';
    // var ComingSoon = 'https://imdb-api.com/API/ComingSoon/k_sot1p9i7';
    //var SearchTitle =  'https://imdb-api.com/API/SearchTitle/k_sot1p9i7';
    

    var search = document.querySelector(".searchNew");
    var src = document.querySelector("#search");

    document.querySelector(".MostPopular").innerHTML = '';
    document.querySelector(".CommingSoon").innerHTML = '';
    document.querySelector(".BoxOffice").innerHTML = '';

    var url = `https://imdb-api.com/en/API/SearchMovie/${key}/${src.value}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < 12; i++) {
            var card =
            `<div id="card" class="card border-0 col-lg-2 col-md-3 col-sm-4 col-6">
            <button onclick="getId(this.value)" src="detail.html" style = "background-color:#211e1f" value="${data.results[i].id} ">
            <img style = "height:300px;object-fit:cover;" class="img-fluid rounded" src="${data.results[i].image}" alt="">
            </button>
            <p style="margin:10px 10px 10px 0px;font-size:18px">${Newdata.results[i].title}</p>
            </div> `

            search.innerHTML += card;
        }
    })
    .catch(error => console.error(error))
}

    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         for(var i=0; i<10; i++) {
    //             var card = `
    //             <div class="container"
    //             <div class="row">
    //             <div class="card border-0 col-lg-2 col-md-3 col-sm-4 col-6">
    //             <div class="card" style="width: 14rem;">
    //             <img src="${data.results[i].image}" class="card-img-top" alt="...">
    //             <h5 class="card-title">${data.results[i].title}</h5>  
    //             </div>
    //             </div>
    //             </div> 
    //             </div> `
              
    //             document.body.innerHTML += card;
    //         }
    //     })
    //     .catch(error => console.error(error))}


function pop () {
    var mp = 'https://imdb-api.com/API/MostPopularMovies/k_nbagored';
    const MostPopularMovies = document.querySelector("#MostPopular");

    fetch(mp)
        .then(response => response.json())
        .then(data => {
            for(var i=0; i<12; i++) {
                var card = `
                <div class="card border-0 col-lg-2 col-md-3 col-sm-4 col-6" id="MostPopular" style="width: 23rem;">
                <div class="watchNow">
                <img src="${data.items[i].image}" class="card-img-top" alt="...">
                <div class="middle">
                <div class="text">Watch Now</div>
                </div>
                <h5 class="card-title">${data.items[i].title}</h5>
                </div>
                </div>`;
                
                MostPopularMovies.innerHTML += card;
            }
        })
        .catch(error => console.error(error))

        var cs = 'https://imdb-api.com/API/ComingSoon/k_nbagored';
        const ComingSoon = document.querySelector("#CommingSoon");

        fetch(cs)
            .then(response => response.json())
            .then(data => {
                for(var i=0; i<12; i++) {
                    var card = `
                    <div class="card border-0 col-lg-2 col-md-3 col-sm-4 col-6" id="MostPopular" style="width: 23rem;">
                    <div class="watchNow">
                    <img src="${data.items[i].image}" class="card-img-top" alt="...">
                    <div class="middle">
                    <div class="text">Watch Now</div>
                    </div>
                    <h5 class="card-title">${data.items[i].title}</h5>
                    </div>
                    </div>`;

                    ComingSoon.innerHTML += card;
                }
            })
            .catch(error => console.error(error))

            var bo = 'https://imdb-api.com/API/BoxOffice/k_nbagored';
            const BoxOffice = document.querySelector("#BoxOffice");

            fetch(bo)
                .then(response => response.json())
                .then(data => {
                    for(var i=0; i<12; i++) {
                        var card = `
                        <div class="card border-0 col-lg-2 col-md-3 col-sm-4 col-6" id="MostPopular" style="width: 23rem;">
                        <div class="watchNow">
                        <img src="${data.items[i].image}" class="card-img-top" alt="...">
                        <div class="middle">
                        <div class="text">Watch Now</div>
                        </div>
                        <h5 class="card-title">${data.items[i].title}</h5>
                        </div>
                        </div>`

                        BoxOffice.innerHTML += card;
                }
            })
            .catch(error => console.error(error))
}

