
const thisYear = new Date().getFullYear();
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime();
const endTimeOfThisYear = new Date(`${thisYear + 1}-01-01T00:00:00+00:00`).getTime();
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear);
const progressBarOfThisYear = generateProgressBar();

const username = "manjeetchugh";
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function generateProgressBar() {
    const progressBarCapacity = 30;
    const passedProgressBarIndex = Math.floor(progressOfThisYear * progressBarCapacity);
    return `{ ${Array(progressBarCapacity)
        .fill("▁")
        .map((value, index) => index < passedProgressBarIndex ? "█" : value)
        .join("")} }`;
}

const readme = `\
# Hi there! <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Hi.gif" width="35" /> I am Manjeet Chugh

<p align="center">
  <a href="linkedin.com/manjeetchugh" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" height="30" />
  </a>
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=manjeetchugh&style=flat-square&color=blue&label=Profile+Views" alt="Profile Views" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://img.shields.io/github/followers/manjeetchugh?style=flat-square&color=blue&label=Followers" alt="Followers" />
</p>




---

### <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Developer.gif" width="40" /> About Me

- 🎓 Pursuing **B.Tech in Electronics and Communication Engineering (AI & IoT)**
- 🤖 Interested in **Artificial Intelligence, emerging technologies and open source**
- 🌱 Currently learning **C and Python** <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="35" alt="Developer animation" />
- 🏁 I like to play Table-Tennis,Chess and 8-ball Pool
- ♟️ We can connect to play some games of chess <img src="https://media.giphy.com/media/ms3yqSf67KQjnXm6kN/giphy.gif" width="35" alt="Spinning Chess Board" />





---

### 🛠️ Languages & Tools

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=c,python,html,css,js,git,github,vscode" alt="Languages and tools" />
  </a>
</p>

---

### <img src="https://media1.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" width="25" /> My GitHub Stats

<p align="center"><img src="https://github-stats-extended.vercel.app/api?username=manjeetchugh&rank_icon=percentile&show_icons=true&include_all_commits=true&theme=transparent" height="200" alt="Github Stats"/>
   <img src="https://github-stats-extended.vercel.app/api/top-langs?username=manjeetchugh&layout=donut-vertical&langs_count=4&theme=transparent" height="300" alt="Programming Languages"/>
</p>
<p align="center">
<img src="https://streak-stats.demolab.com?user=manjeetchugh&theme=transparent&timezone=Asia%2FKolkata&mode=weekly" height="200" alt="Stats"/>
</p>

---

### ⏳ Year Progress

**${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)}%**

As of ⏰ ${(new Date().getDate()) + "-" + monthNames[new Date().getMonth()] + "-" + new Date().getFullYear()}

---

### 🐍 My Contribution Graph

<p align="center">
  <img src="https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake-dark.svg" alt="GitHub Contribution Snake" />
</p>

---

### 💡 Currently Exploring



- 🐍 C and Python programming
- 🤖 Artificial Intelligence and Machine Learning
- 📡 Electronics and the Internet of Things
- 🌐 Web technologies and software development
- 🌍 Open-source projects and developer tools
- 🧠 Always curious about how things work and how technology can be improved


---

### <img alt="GIF" src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/hmm.gif" width="25" /> A Quote to Think About

<a href="https://github.com/marketplace/actions/quote-readme">
<!--STARTS_HERE_QUOTE_README-->
<i>❝The important thing is to never stop questioning.❞</i>
<!--ENDS_HERE_QUOTE_README-->
</a>

---

### <img align="center" src="https://media2.giphy.com/media/UQDSBzfyiBKvgFcSTw/giphy.gif" width="29" /> A Pinch of Humour

<p align="center">
  <img src="https://readme-jokes.vercel.app/api" alt="Random programming joke" />
</p>

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=00FF41&height=100&section=footer" alt="Footer" />
</p>

<p align="center">
  <b>Thanks for visiting my profile! ✨</b>
</p>
`;

console.log(readme);
