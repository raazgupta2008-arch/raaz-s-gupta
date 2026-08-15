// --------------------------------
// FIND OUR HTML ELEMENTS
// --------------------------------

const labObjects = document.querySelectorAll(".lab-object");

const experiencePanel = document.getElementById("experiencePanel");

const closePanel = document.getElementById("closePanel");

const panelNumber = document.getElementById("panelNumber");

const panelCategory = document.getElementById("panelCategory");

const panelTitle = document.getElementById("panelTitle");

const panelDescription = document.getElementById("panelDescription");

const panelTags = document.getElementById("panelTags");

const biologyVisual = document.querySelector(".biology-visual");

const researchVisual = document.querySelector(".research-visual");

const technologyVisual = document.querySelector(".technology-visual");

const musicVisual = document.querySelector(".music-visual");

const notebookVisual = document.querySelector(".notebook-visual");

const fuelVisual = document.querySelector(".fuel-visual");


// --------------------------------
// INFORMATION FOR EACH WORLD
// --------------------------------

const worldData = {

    biology: {

        number: "01",

        category: "BIOLOGY",

        title: "The science that started the curiosity.",

        description:
            "I'm fascinated by the complexity of living systems and the possibilities that emerge when biology meets technology.",

        tags: [
            "BIOTECHNOLOGY",
            "BIOINFORMATICS",
            "GENETICS"
        ]

    },


    research: {

    number: "02",

    category: "RESEARCH",

    title: "Questions lead to discoveries.",

    description:
        "Curiosity is often where research begins. I'm interested in understanding how questions become experiments, how experiments become evidence, and how evidence creates new questions.",

    tags: [
        "CURIOSITY",
        "EXPLORATION",
        "DISCOVERY"
    ]

},


    technology: {

    number: "03",

    category: "TECHNOLOGY",

    title: "Learning to build with code.",

    description:
        "I'm beginning my journey with Python and HTML, exploring how technology, data and biology can connect to solve interesting problems.",

    tags: [
        "PYTHON",
        "HTML",
        "BIOINFORMATICS"
    ]

},

    music: {

    number: "04",

    category: "MUSIC",

    title: "Sound is another language.",

    description:
        "Singing and music have become a way for me to express things that words sometimes cannot. From discovering songs to performing them, music is one of the spaces where I feel most myself.",

    tags: [
        "SINGING",
        "MUSIC",
        "PERFORMANCE"
    ]

},


   notebook: {

    number: "05",

    category: "NOTEBOOK",

    title: "Ideas worth keeping.",

    description:
        "A small archive of things I read, write about, think about and carry with me. Some ideas stay for a chapter. Others stay much longer.",

    tags: [
        "READING",
        "WRITING",
        "THOUGHTS"
    ]

},

   fuel: {

    number: "06",

    category: "FUEL",

    title: "Good ideas need good fuel.",

    description:
        "Coffee, music, conversations and the occasional late-night thought. The little rituals that keep curiosity moving.",

    tags: [
        "COFFEE",
        "CONVERSATIONS",
        "LATE NIGHTS"
    ]

},

};


// --------------------------------
// WHEN A LAB OBJECT IS CLICKED
// --------------------------------

labObjects.forEach(function(object) {

    object.addEventListener("click", function() {

        const world = object.dataset.world;

        const data = worldData[world];
        // Show the correct visual environment

/* =================================
   RESET ALL VISUAL WORLDS
================================= */

biologyVisual.style.display = "none";

researchVisual.style.display = "none";

technologyVisual.style.display = "none";

musicVisual.style.display = "none";

notebookVisual.style.display = "none";

fuelVisual.style.display = "none";


/* RESET MODES */

experiencePanel.classList.remove("research-mode");

experiencePanel.classList.remove("technology-mode");

experiencePanel.classList.remove("music-mode");

experiencePanel.classList.remove("notebook-mode");

experiencePanel.classList.remove("fuel-mode");


/* =================================
   BIOLOGY
================================= */

if (world === "biology") {

    biologyVisual.style.display = "flex";

}


/* =================================
   RESEARCH
================================= */

if (world === "research") {

    researchVisual.style.display = "flex";

    experiencePanel.classList.add("research-mode");

}


/* =================================
   TECHNOLOGY
================================= */

if (world === "technology") {
function typeSequence() {
    const seqEl = document.getElementById("seqValue");
    const statusEl = document.getElementById("seqStatus");
    const bar = document.querySelector(".tech-progress span");
    const full = "ATCGGCTAGCTTAGCCGA...";

    seqEl.textContent = "";
    statusEl.textContent = "PROCESSING";
    statusEl.classList.add("processing");
    bar.style.animation = "none";
    bar.style.width = "0%";

    let i = 0;
    const interval = setInterval(() => {
        seqEl.textContent = full.slice(0, i) + "█";
        i++;
        if (i > full.length) {
            clearInterval(interval);
            seqEl.textContent = full;
            statusEl.textContent = "COMPLETE";
            statusEl.classList.remove("processing");
            bar.style.width = "100%";
        }
    }, 55);
}
    technologyVisual.style.display = "flex";

    experiencePanel.classList.add("technology-mode");

    typeSequence();

}


/* =================================
   MUSIC
================================= */

if (world === "music") {

    musicVisual.style.display = "flex";

    experiencePanel.classList.add("music-mode");

}


/* =================================
   NOTEBOOK
================================= */

if (world === "notebook") {

    notebookVisual.style.display = "flex";

    experiencePanel.classList.add("notebook-mode");

}


/* =================================
   FUEL
================================= */

if (world === "fuel") {

    fuelVisual.style.display = "flex";

    experiencePanel.classList.add("fuel-mode");

}


        // Put the correct information into the panel

        panelNumber.textContent = data.number;

        panelCategory.textContent = data.category;

        panelTitle.textContent = data.title;

        panelDescription.textContent = data.description;


        // Remove the old tags

        panelTags.innerHTML = "";


        // Create the new tags

        data.tags.forEach(function(tag) {

            const tagElement = document.createElement("span");

            tagElement.textContent = tag;

            panelTags.appendChild(tagElement);

        });


        // Open the panel

        experiencePanel.classList.add("active");
        document.body.style.overflow = "hidden";

    });

});


// --------------------------------
// CLOSE THE EXPERIENCE PANEL
// --------------------------------

closePanel.addEventListener("click", function() {

    experiencePanel.classList.remove("active");
    document.body.style.overflow = "";

});
/* =================================
   RAAZ MUSIC PLAYER — FINAL
================================= */

const musicPlayer = document.getElementById("musicPlayer");
const songUpload = document.getElementById("songUpload");
const songList = document.getElementById("songList");

let songs = [];
let currentSong = null;


/* ---------------------------------
   CHECK PLAYER
--------------------------------- */

console.log("Music system loaded");

if (!musicPlayer) {
    console.error("Music player not found.");
}

if (!songUpload) {
    console.error("Song upload button not found.");
}

if (!songList) {
    console.error("Song list not found.");
}


/* ---------------------------------
   ADD SONGS
--------------------------------- */

songUpload.addEventListener("change", function(event) {

    const files = Array.from(event.target.files);

    files.forEach(function(file) {

        if (!file.type.startsWith("audio/")) {
            return;
        }

        songs.push(file);

    });

    renderSongs();

    // Reset input so the same file can be selected again
    songUpload.value = "";

});


/* ---------------------------------
   DISPLAY SONGS
--------------------------------- */

function renderSongs() {

    songList.innerHTML = "";

    songs.forEach(function(file, index) {

        const button = document.createElement("button");

        button.className = "song-item";

        button.type = "button";

        button.innerHTML = `
            <span class="song-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="song-info">
                <strong>${file.name}</strong>

                <small>
                    AUDIO FILE
                </small>
            </span>

            <span class="song-play">
                ▶
            </span>
        `;


        /* ---------------------------------
           PLAY SONG
        --------------------------------- */

        button.addEventListener("click", function() {

            playSong(file, button);

        });


        songList.appendChild(button);

    });

}


/* ---------------------------------
   PLAY SONG
--------------------------------- */

function playSong(file, button) {

    console.log("Playing:", file.name);

    // Remove playing state
    document.querySelectorAll(".song-item").forEach(function(item) {

        item.classList.remove("playing");

    });


    // Create browser URL for the file
    const audioURL = URL.createObjectURL(file);

    // Give audio element the file
    musicPlayer.src = audioURL;

    currentSong = file;

    // Load it
    musicPlayer.load();


    // Play it
    musicPlayer.play()
        .then(function() {

            console.log("SUCCESS:", file.name);

            button.classList.add("playing");

        })
        .catch(function(error) {

            console.error("PLAYBACK ERROR:", error);

        });

}


/* ---------------------------------
   SONG ENDED
--------------------------------- */

musicPlayer.addEventListener("ended", function() {

    document.querySelectorAll(".song-item").forEach(function(item) {

        item.classList.remove("playing");

    });

});
const menuButton = document.querySelector(".menu-button");
const navMenu = document.getElementById("navMenu");
const navMenuClose = document.getElementById("navMenuClose");

menuButton.addEventListener("click", () => navMenu.classList.add("open"));
navMenuClose.addEventListener("click", () => navMenu.classList.remove("open"));
document.querySelectorAll(".nav-menu-link").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && experiencePanel.classList.contains("active")) {
        experiencePanel.classList.remove("active");
        document.body.style.overflow = "";
    }
});

experiencePanel.addEventListener("click", (e) => {
    if (e.target === experiencePanel) {
        experiencePanel.classList.remove("active");
        document.body.style.overflow = "";
    }
});