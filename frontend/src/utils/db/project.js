import bumble from "../../assets/bumble.png"
import scriptify from "../../assets/scriptify.png"
import soundspace from "../../assets/soundspace.png"
import gamehunter from "../../assets/game-hunter.png"

const PROJECT = [
  {
    img: bumble,
    title: "Bumble Bai",
    hosted: true,
    description: "A unique online market platform that mimics the swipe-based interaction of dating apps like Bumble.",
    link: "https://github.com/silv-error/bumble-bai",
    techstack: ["Node.js", "React", "MongoDB", "Express"]
  },
  {
    img: soundspace,
    title: "Sound Space",
    hosted: false,
    description: `The platform displays basic user’s info, such as: 
              following artists, recently played songs, today's biggest hit artists, and saved albums.`,
    link: "",
    techstack: ["Python", "Flask", "HTML", "CSS", "Boostrap"]
  },
  {
    img: scriptify,
    title: "Scriptify",
    hosted: false,
    description: "PDF to MP3; Users can select their preferred voice options before the conversion, and the resulting audio can be downloaded.",
    link: "",
    techstack: ["Python", "Flask", "HTML", "CSS", "Tailwind"]
  },
  {
    img: gamehunter,
    title: "Game Hunter",
    hosted: false,
    description: "Game Party Finder is a social platform designed to help gamers connect with others and organize gaming sessions.",
    link: "",
    techstack: ["Node.js", "React", "MongoDB", "Express"]
  },
]

export default PROJECT;