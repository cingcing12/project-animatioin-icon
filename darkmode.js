// selector btn all btn darkmode
document.querySelectorAll('.btnDataMode').forEach(item => {
    const darkmode = item.dataset.darkmode;
    // click dark mode start
    item.addEventListener('click', () => {

        // active and remove active btn darkmode
        document.querySelectorAll('.btnDataMode').forEach(item => item.classList.add('active'));
        item.classList.remove('active');

        // body data bs theme = dataset darkmode of btn dark mode
        document.querySelector('body').dataset.bsTheme = darkmode;

        // store dark mode or light mode in local storage
        localStorage.setItem('darkmode', darkmode);
    })
})

// fun update darkmode
const updateDarkMode = () => {
    
    // declare variable darkmode equal local storage getItem
    const darkmode = localStorage.getItem('darkmode') || "dark";
    
    // selector all btn darkmode
    document.querySelectorAll('.btnDataMode').forEach(item => {
        // update active and remove active btn darkmode
        item.dataset.darkmode == darkmode ? item.classList.remove('active') : item.classList.add('active');
        // update data bs theme darkmode or lightmode
        document.querySelector('body').dataset.bsTheme = darkmode;
    })

}

// fun update darkmode call
updateDarkMode();