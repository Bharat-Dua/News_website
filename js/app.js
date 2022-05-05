console.log("this is the news website");

//  Your API key is: 208b23d1d7224243a2bfa75819af38c2
let source = "bbc-news";
let apiKey = "208b23d1d7224243a2bfa75819af38c2";
let url =
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=208b23d1d7224243a2bfa75819af38c2";
let newsAccordian = document.getElementById("newsAccordian");
const xhr = new XMLHttpRequest();
xhr.open("GET", `${url}`, true);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    console.log(articles);
    let newsHTML = "";
    articles.forEach((element, index) => {
      let news = `
     <div class="accordion-item">
                
               <h2 class="accordion-header" id="newsAccordian">
                 <button
                   class="accordion-button collapsed"
                   type="button"
                   data-bs-toggle="collapse"
                   data-bs-target="#collaps${index}"
                   aria-expanded="true"
                   aria-controls="collaps${index}"
                 >
                 <span> <b>Breaking news ${index + 1} -</span>&nbsp; </b> ${
        element["title"]
      } &nbsp;&nbsp;&nbsp;&nbsp;<b>published at: ${element["publishedAt"]}</b>
                 </button>
               </h2>
               <div
                 id="collaps${index}"
                 class=" collapse"
                 aria-labelledby="heading${index}"
                 data-bs-parent="#newsAccordian"
               >
                 <div class="accordion-body">
                   <strong> ${element["content"]}</strong>. <a href = "${
        element["url"]
      }" target = "_blank">Read more here...</a> 
                
                 </div>
               </div>
             </div>
             `;
      newsHTML += news;
    });
    newsAccordian.innerHTML = newsHTML;
  } else {
    console.log("some error occured");
  }
};

xhr.send();
