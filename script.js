const acceskey = "dsm0rhe6SFvie7r9FcNtic1w25fdmbRYdUEQGJOoIHY";

const searchform = document.getElementById("searchform");
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const Showmorebtn = document.getElementById("Show-more-btn");


let keyword = "";

let page = 1;

async function searchImage(){
    keyword = searchbox.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acceskey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchresult.innerHTML = "";
    }
    
    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);
    })
   
    Showmorebtn.style.display = "block";
    
}
searchform.addEventListener("submit", (e)=>{
    e.preventDefault();
    page  = 1;
    searchImage();
});

Showmorebtn.addEventListener("click", () =>{
  page++;
  searchImage();
})