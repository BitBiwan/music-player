var songs = [{ title: "Prayas", duration: "3.30", image: "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=" },
{ title: "Rabba janda", duration: "5.30", image: "https://media.istockphoto.com/id/487764186/photo/never-ending-peace-and-love.jpg?s=612x612&w=0&k=20&c=nBau5nlbXTk11ln_0csVYS-FUavFEE0QmoAjvzZu5co=" }]



var clutter = ""




songs.forEach(function (elem) {
    clutter += `<div class="card">
    <div class="first">
        <img src="${elem.image}" alt="animal ">
        <h3>
        ${elem.title}
        </h3>
    </div>
    <div class="second">
        <h3>${elem.duration}</h3>
    </div>
</div>`
})


document.querySelector(".list").innerHTML=clutter;


