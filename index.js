
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
# Hi there! <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Hi.gif" width="35" /> I am Manjeet Chugh  <a href="linkedin.com/manjeetchugh" target="_blank"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" height="30" /></a>

<p align="center">
  <img src="./assets/profile-views.svg" alt="" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://img.shields.io/github/followers/manjeetchugh?style=flat-square&color=blue&label=Followers" alt="Followers" />
</p>
<br>
Meet **Typo**, my pixel-sized mischief-maker, prowling through my README and leaving a little chaos in his wake.
<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="https://raw.githubusercontent.com/manjeetchugh/manjeetchugh/master/dist/pet.svg"
  >
  <source
    media="(prefers-color-scheme: light)"
    srcset="https://raw.githubusercontent.com/manjeetchugh/manjeetchugh/master/dist/pet-light.svg"
  >
  <img
    alt="my github pet"
    src="https://raw.githubusercontent.com/manjeetchugh/manjeetchugh/master/dist/pet.svg"
    width="100%"
  >
</picture>
<br>

### <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Developer.gif" width="40" /> About Me

-🎓 B.Tech student in **Electronics and Communication** Engineering (AI & IoT)  
-🤖 Exploring **AI**, embedded systems, and open source  
-🌱 Learning **C** and **Python** by building projects <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="35" alt="Developer animation" />
---

### 🛠️ Languages & Tools

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=c,python,html,css,js,git,github,vscode" alt="Languages and tools" />
  </a>
</p>

---

### <img src="https://media1.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" width="25" /> My GitHub Stats
<table cellspacing="0"> <tr> <td align="center" valign="middle">
  <p>
    <img
      src="https://github-stats-extended.vercel.app/api?username=manjeetchugh&rank_icon=percentile&show_icons=true&include_all_commits=true&theme=transparent"
      alt="GitHub Stats"
    />

  <br>

  <img
      src="https://streak-stats.demolab.com?user=manjeetchugh&theme=transparent&timezone=Asia%2FKolkata&mode=weekly"
      alt="GitHub Streak Stats"
    />
  </p>

</td>

<td align="center" valign="middle">

  <p>
    <img
      src="./output/bonsai-growth.gif"
      width="300"
      alt="My git-bonsai"
    />

  <br>

  <a href="https://github.com/egorthinks/git-bonsai">
      <img
        src="https://img.shields.io/badge/🌳_grown_with-git--bonsai-2ea44f"
        alt="Grown with git-bonsai"
      />
    </a>
  </p>

</td>

</tr> </table>
---

### ⏳ Year Progress

**${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)}%**

As of ⏰ ${(new Date().getDate()) + "-" + monthNames[new Date().getMonth()] + "-" + new Date().getFullYear()}

---

###  My Contribution Graph

<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="https://raw.githubusercontent.com/manjeetchugh/manjeetchugh/master/dist/graph.svg"
  >
  <source
    media="(prefers-color-scheme: light)"
    srcset="https://raw.githubusercontent.com/manjeetchugh/manjeetchugh/master/dist/pet-light.svg"
  >
  <img
    alt="my github pet"
    src="https://raw.githubusercontent.com/manjeetchugh/manjeetchugh/master/dist/pet.svg"
    width="100%"
  >
</picture>
<br>

---

### <img alt="GIF" src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/hmm.gif" width="25" /> A Quote to Think About

<a href="https://github.com/marketplace/actions/quote-readme">
<!--STARTS_HERE_QUOTE_README-->
<i>❝The important thing is to never stop questioning.❞</i>
<!--ENDS_HERE_QUOTE_README-->
</a>
---


### 🎮 Outside of Coding

I enjoy playing table tennis, chess, and 8-ball pool. Feel free to connect for a game of chess!  
<img src="https://media.giphy.com/media/ms3yqSf67KQjnXm6kN/giphy.gif" width="35" alt="Spinning Chess Board" />



---

<p align="center">
  <b>Thanks for stopping by! ✨</b>
</p>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=00FF41&height=100&section=footer" alt="Footer" />
</p>
`;

console.log(readme);
