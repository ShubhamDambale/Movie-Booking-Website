// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let moviediv = document.getElementById("movies");
var timerid;

async function searchmovie()
{

    try{
        let searchMovie = document.getElementById("search").value

        // let res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f36f4ba2&t=${searchMovie}');

        let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f36f4ba2&s=${searchMovie}`);

       

        let data = await res.json();
        console.log(data)

        append(data.Search)
        
    }

    catch(err){
        // var image = document.createElement("img")
        // image.src = "https://thumbs.gfycat.com/BewitchedShamefulDobermanpinscher-size_restricted.gif"
        console.log(err)
    }
}




function append(data){
    data.forEach(function(el){

        let divs1 = document.createElement("div");
        divs1.setAttribute("id","div")

        let image = document.createElement("img");
        image.setAttribute("src",el.Poster)

        let title = document.createElement("h3");
        title.innerText = el.Title

        let btn = document.createElement("button")
        btn.setAttribute("id","book_now")
        btn.innerText = "Book_Now";


        btn.addEventListener("click",function(){

            booknow(el)
        })

        divs1.append(image,title,btn)
        movies.append(divs1)
    })

    function booknow(el) {

        let movieArr = [];
        movieArr.push(el);

        console.log(movieArr)
        window.location.href = "Checkout.html"

        localStorage.setItem("movies",JSON.stringify(movieArr))
    }
}

async function pre(){

    try{
        let data= await searchmovie()
        if(data===undefined){
            return false
        }
        append(data)
    }
    catch(error){
        console.log("error:",error)
    }
}
    function debounce(func,delay){

        if(timerid){
            clearTimeout(timerid)
        }

        timerid= setTimeout(function(){
            func()
        },delay)
    }