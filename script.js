//const base_url="https://api.unsplash.com/search/photos?page=1&query=office&client_id=aafNirz_Y3dBwppwFYJEkW0zXaf8mCXeUyavQvbSW-8";

let SearchText= document.getElementById("search_text");
let button= document.getElementById("button");
let imageDiv =document.getElementById("images");
let loadMore =document.getElementById("more");
let page = 1;
button.addEventListener("click",()=>
{
    let userTypeValue = SearchText.value;
    searchImage(page, SearchText.value);
});

loadMore.addEventListener("click",() => {
    let userTypeValue = SearchText.value;
    page++;
    searchImage(page,userTypeValue);
})

async function searchImage(page, SearchText){
    let response= await fetch(`https://api.unsplash.com/search/photos?page=1&query=${page}&client_id=aafNirz_Y3dBwppwFYJEkW0zXaf8mCXeUyavQvbSW-8`);
    let data = await response.json();
    let result = data.results;

    result.map((items,index) => {
        let imageItem = document.createElement("img");
        imageItem.src = data.results[index].urls['small'];
        imageDiv.appendChild(imageItem);
    })
}  