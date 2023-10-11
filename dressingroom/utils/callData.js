fetch('../data/Data.json')
.then((res) => res.json())
.then((json) => {
    datatabPanes = json.tabPanes
    dataNavPills = json.navPills
    console.log("datatabPanes:", datatabPanes);
    console.log("dataNavPills:", dataNavPills)
    renderTabPill(dataNavPills)
    
})
.catch((err) => {console.log(err)})
