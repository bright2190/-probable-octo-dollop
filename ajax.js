/*let resultData = new XMLHttpRequest();

resultData.onload = function () {
  console.log(JSON.parse(this.responseText));

  let data = JSON.parse(this.responseText);

  console.log(data.articles)

  function displayData() {
    for (let i = 0; i < data.articles.length; i++) {
      let globalDiv = document.createElement("div");

      let first_div = document.createElement("div");
      
      // i want to create a section for first div
      let first_img = document.createElement("img");

      first_img.src = data.articles[i].urlToImage;

      first_img.style.width = "100%";

      first_div.appendChild(first_img);

      // add title
      let first_title = document.createElement("h1");

      first_title.innerHTML = data.articles[i].title;

      first_div.appendChild(first_title);

      // add content

      let first_content = document.createElement("p");

      first_content.innerText = data.articles[i].content;

      first_div.appendChild(first_content)
      



      let second_div = document.createElement("div");

      // i want to create a section for second div
      let second_img = document.createElement("img");

      second_img.src = data.articles[i].urlToImage;

      second_img.style.width = "100%";

      second_div.appendChild(second_img);

      // add title
      let second_title = document.createElement("h1");

      second_title.innerHTML = data.articles[i].title;

      second_div.appendChild(second_title);

      // add content

      let second_content = document.createElement("p");

      second_content.innerText = data.articles[i].content;

      second_div.appendChild(second_content)


      globalDiv.style.display = "flex";

      first_div.style.flexBasis = "50%";

      second_div.style.flexBasis = "50%";

      globalDiv.appendChild(first_div);

      globalDiv.appendChild(second_div);


      document.getElementsByClassName("container")[0].appendChild(globalDiv);
    }

  }

  displayData();

};

resultData.open(
  "GET",
  
  "https://newsapi.org/v2/top-headlines?country=ng&apiKey=91386c9e7b2941f0a05dbcd939f18f0f");

resultData.send();*/



let currentNews = new XMLHttpRequest();
currentNews.onload = function(){
    if(currentNews.readyState==4) {
    

    let data = JSON.parse(currentNews.responseText);
    // console.log(data.articles);
    let dataArticles = data.articles;
    console.log(dataArticles)
    
    let sub_container = document.getElementsByClassName("sub_container")[0];
    for(let i = 0; i < data.articles.length; i++){
        
        let imageDiv = document.createElement("div");
        imageDiv.id = `imageDiv${i}`;
        imageDiv.className = `imageDiv`;

        let image = document.createElement("img");
        image.id = `image${i}`;

        imageDiv.appendChild(image);




        let newsHeading = document.createElement("div");
        newsHeading .id = `newsHeading${i}`;
        newsHeading.className = `newsHeading`;


        let datePosted = document.createElement("div");
        datePosted.id = `datePosted${i}`;
        datePosted.className = `datePosted`;

        
        let contentText = document.createElement("div");
        contentText.id = `contentText${i}`;
        contentText.className = `contentText`;

        let readMore = document.createElement("div");
        readMore.id = `readMore${i}`;
        readMore.className = `readMore`;

        

        let readMoreLinkTag = document.createElement("a");
        

        readMoreLinkTag.id = `readMoreLink${i}`;
        readMoreLinkTag.className = `readMoreLink`;

        let readMoreText = document.createTextNode("Read more...")


        readMoreLinkTag.append(readMoreText)
        readMore.append(readMoreLinkTag);







        let newDiv = document.createElement("div");
        newDiv.id = `news${i}`;
        newDiv.className = 'news';
        newDiv.appendChild(imageDiv);
        newDiv.appendChild(newsHeading);
        newDiv.appendChild(datePosted);


        newDiv.appendChild(contentText);
        newDiv.appendChild(readMore);


        sub_container.appendChild(newDiv);

        document.getElementById(`readMoreLink${i}`).href = data.articles[i].url;
        document.getElementById(`image${i}`).src = data.articles[i].urlToImage;
        document.getElementById(`newsHeading${i}`).innerText = data.articles[i].title;
        document.getElementById(`datePosted${i}`).innerText = data.articles[i].publishedAt;

        // document.getElementById(`contentText${i}`).innerText = data.articles[i].content.substr(0, 200);m

        let currentImage = document.getElementById(`image${i}`);
        let currentNewsDiv = document.getElementById(`news${i}`);
        if(data.articles[i].content){
            document.getElementById(`contentText${i}`).innerText = data.articles[i].content.substr(0, 200);
            if ( !currentImage.complete ){
                console.log(currentImage.src);
                currentNewsDiv.remove();
            }
           
            if (typeof currentImage.naturalWidth != "undefined" && currentImage.naturalWidth == 0) {
                currentNewsDiv.remove();
            }
            
        }
        else{
            if ( !currentImage.complete ){
                console.log(currentImage.src);
                currentNewsDiv.remove();
            }
           
            if (typeof currentImage.naturalWidth != "undefined" && currentImage.naturalWidth == 0) {
                currentNewsDiv.remove();
            }
            
            
        }
    
    }
    };

};
currentNews.open( "GET", "https://newsapi.org/v2/top-headlines?country=ng&apiKey=91386c9e7b2941f0a05dbcd939f18f0f")
currentNews.send()