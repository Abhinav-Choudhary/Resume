import controller from "../images/xboxController.jpg";
import shuriken from "../images/shuriken.jpg";
import diwali from "../images/diwaliCandles.JPG";

const hobbiesData = [
    {
        key: "gaming",
        title: "Gaming",
        body: [
            "I really love playing videogames. I try to squeeze atleast 1 hour of gameplay every day.",
            "Although I am okay with all the genres but my preferred ones are: FPS (First Person Shooter), Open-World, RPG (Role-Playing Games), and Action Adventure style games.",
            "I mostly game on my PC. Although, I have gamed on console as well and still use controller for fighting games and RPG's, my preferred input method are keyboard and mouse. A big push for computers in my books is the fact that I can modify the settings according to my needs and I have build sort of muscle memory with keyboard & mouse."
        ],
        imageClass: "panel-image-right",
        imageAlt: "Top view of green Xbox controller.",
        imageSrc: controller
    },
    {
        key: "anime",
        title: "Anime",
        body: [
            "I have been a fan of anime since childhood, watching Pokemon, Beyblade, Dragonball everyday are some of my fondest memories. But, my true craze began when I was 14 and started watching Naruto.",
            "Since then, I have watched a lot of anime and have even read a few manga. Some of my favorite animes are Naruto, Demon Slayer, Attack on Titan, My Hero Academia, One Punch Man, Full Metal Alchemist: Brotherhood, HunterxHunter, Code Geass, Death Note, and Sword Art Online.",
            "Currently, I am watching the latest season of My Hero Academia, Boruto, and Pokemon Journeys.",
            "I am planning to start One Piece, Black Clover, Jujutsu Kaizen, MobPsycho 100, Tokyo Ghoul, and SpyxFamily. But will probably watch one at a time, so, may take some time to get to all of them especially when some of the anime like One Piece are so huge."
        ],
        imageClass: "panel-image-left",
        imageAlt: "Top view of rubber toy shuriken.",
        imageSrc: shuriken
    },
    {
        key: "photography",
        title: "Photography",
        body: [
            "The genre of photography, I am the most interested in is Landscape Photography. Landscape photography is style where one tries to capture the never-ending beauty and vastness of the nature. Imagine, vast green hillside with maybe a castle or cottage at far side or sprawling sea shot captured from a pier.",
            "I click most of my shots using my smartphone, since I don't have a lot of knowledge about using a DSLR. I have briefly used a DSLR but don't have enough experience to be confident, but would like to learn.",
            "Want to see some of my shots? Just head down to checkout some of the pics clicked by me."
        ],
        imageClass: "panel-image-right",
        imageAlt: "Picture of candles taken at night.",
        imageSrc: diwali
    }
];

export default hobbiesData;