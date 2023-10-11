const getEle = (selector) => document.querySelector(selector);

const renderTabPill = (data) => {
  let htmlContent ="";
  data.map((item) => {
  htmlContent += `
  <li class="nav-item">
    <button class="nav-type active" onclick="filterItem('${item.type}')">${item.showName}</button>
  </li>
  `;
  });
  getEle(".nav-pills").innerHTML = htmlContent;
};


const filterItem = (type) => {
  const itemFilter = datatabPanes.filter((item) => item.type === type);
  renderListItem(itemFilter);
};

const renderListItem = (data) => {
  let htmlContent="";
  data.map((item) => {
    htmlContent +=`
      <div class="card">
        <img src="${item.imgSrc_jpg}" alt="...">
        <div class="card-body"> 
          <h3 class="card-title">${item.name}</h3>
            <button class="btn btn-success" onclick="tryItem('${item.id}')">Thử đồ</button>
        </div>
      </div>
      
    `;
  });
  getEle(".tab-content").innerHTML= htmlContent
}

const tryItem = (id) => {
  const item = datatabPanes.find((item) => item.id === id) 
  switch(item.type) {
    case "topclothes":
      getEle(".topCloth").innerHTML = `
        <img src="${item.imgSrc_png}" alt="..." />
      `;
      break;
    case "botclothes":
      getEle(".botCloth").innerHTML = `
        <img src="${item.imgSrc_png}" alt="..." />
      `;
      break;
    case "shoes":
      getEle(".feet").innerHTML = `
        <img src="${item.imgSrc_png}" alt="..." />
      `;
      break;
    case "handbags":
      getEle(".handbag").innerHTML = `
        <img src="${item.imgSrc_png}" alt="..." />
      `;
      break;
    case "necklaces":
      getEle(".necklace").innerHTML = `
        <img src="${item.imgSrc_png}" alt="..." />
      `;
      break;
    case "hairstyle":
      getEle(".hairstyle").innerHTML = `
        <img src="${item.imgSrc_png}" alt="..." />
      `;
      break;
    case "background":
      getEle(".background").innerHTML = `
        <img src="${item.imgSrc_png}" alt="..." />
      `;
      break;
    default:
      break;
  }
}