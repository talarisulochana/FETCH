
async function getData() {
    const data = await fetch("https://fakestoreapi.com/products").then(res => res.json());
    console.log(data);

    
    let colors = ["orange",  "gray","pink", "green", "red", "gray",  "pink", "green", "orange", "red", "pink", "green", "red", "gray", "orange", "pink", "green", "red", "gray","orange",];


    for (let i = 0; i < data.length; i++) {
        let cards = document.createElement("div");
        cards.innerHTML = `
            <img src="${data[i].image}" width="150" style="object-fit: contain;"/>
            <p style="font-size: 14px; font-weight: bold;">${data[i].title}</p>
            <span style="font-size: 16px; color: #333;">$${data[i].price}</span>
        `;
        cards.style.backgroundColor = colors[i % colors.length];
        cards.style.border = "1px solid black";
        cards.style.borderRadius = "10px";
        cards.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        cards.style.margin = "10px";
        cards.style.padding = "10px";
        cards.style.width = "200px";
        cards.style.display = "flex";
        cards.style.flexDirection = "column";
        cards.style.alignItems = "center";
        cards.style.textAlign = "center";

    document.body.style.display = "flex";
    document.body.style.flexWrap = "wrap"; 
    document.body.style.justifyContent = "center";
    document.body.style.gap = "10px";
    document.body.style.padding = "10px";


        document.body.appendChild(cards);
    }

}

getData();
