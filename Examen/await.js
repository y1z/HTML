const getWithAsync = async() => {
    try {        
        const resp = await fetch(`https://api.thecatapi.com/v1/images/search`);    
        const text = await resp.json();
        console.log(text);     
        const arr = document.getElementById("gatos");
        text.map(({url}) =>
        {
          const li = document.createElement("li")
          arr.append(li);
          const img = document.createElement("img");
          img.src = url;
          li.append(img);
        })
    } catch (error) {
        console.error(error);
    }
  }
  
  getWithAsync();