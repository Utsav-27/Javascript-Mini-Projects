console.log("hello")

//creating an news parameter
let country = 'in';
let apiKey = '21570b04baa742c2822cb040c45b4dd1';
//grab the news container
newsAccordian = document.getElementById('newsaccordian');

//create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true)

//what to do when response is ready
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        console.log(articles)
        let newsHtml = ""
        articles.forEach(function(element, index){
            
            let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                   <b>Breaking news${index+1} :</b> ${element['title']}
                                            </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                            data-parent="#newsaccordian">
                            <div class="card-body">${element['content']}. <a href = '${element['url']}' target = "_blank">Read more here</a></div>
                        </div>
                    </div>`
            newsHtml+=news;
        })
        newsAccordian.innerHTML = newsHtml;
    } else {
        console.log("some error occured")
    }
}

xhr.send()


