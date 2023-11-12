var map = L.map('map').setView([-25.45318843660639, -49.53415404516462], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if(tabMenu.length && tabContent.length)
{
    tabContent[0].classList.add('ativo');

    function activeTab(index){
        tabContent.forEach((section) =>{
            section.classList.remove('ativo');
        });

        tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu,index) =>{
        itemMenu.addEventListener('click', () =>{
            activeTab(index);
        });
    })
}
