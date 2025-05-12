// Use dynamic import for node-fetch (ESM)
import("node-fetch").then(({ default: fetch }) => {
  const fs = require("fs");
 
  const url = "https://api.github.com/users/HUNTER-SIDDIK";
 
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const readmeContent = `
      
<img align="center" src="https://readme-typing-svg.herokuapp.com?font=Helvetica&pause=1000&color=F7D400&random=true&width=435&lines=Welcome+To+My+Profile¢er=true"/>
 
<p align="center">
  <img src="https://graph.facebook.com/100059026788061/picture?type=large&width=500&height=500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662" alt="Profile Picture" width="200" height="200" style="border-radius: 50%;">
</p>
 
# 👋 Hi, I'm [${data.login}](https://www.facebook.com/TERA.PAPPA.IS.BUSY)
 
<h2 align="center">🌏 I am a student from <b>BANGLADESH</b>.</h2>
<h3 align="center">Welcome to my GitHub profile! Here's a quick overview of my activities and stats.</h3>
 
---
 
<p align="center">
  GitHub has been part of my journey since <b>${new Date(data.created_at).getFullYear()}</b>, and I'm always learning and sharing new projects.
</p>
 
<p align="center">
  🚀 <b>Exploring Technology</b> | 💡 <b>Building Solutions</b> | 📚 <b>Continuously Learning</b>
</p>
 
---
</h3>
 
<p align="center"> 
  <img src="https://komarev.com/ghpvc/?username=HUNTER-SIDDIK&label=Profile%20Views&color=blue&style=plastic" alt="Profile views" width="400" /> 
</p>
 
<p align="center">
  </a>
  <a href="https://github.com/HUNTER-SIDDIK">
    <img alt="GitHub" width="40" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
  </a>
  <a href="https://www.facebook.com/TERA.PAPPA.IS.BUSY">
    <img alt="Facebook" width="40" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg" />
  </a>
</p>
 
<br/><br/>
 
<!-- ![Profile Picture](${data.avatar_url}) -->
 
---
<!-- email -->
**✉️ Email:** siddik143@gmail.com
 
[![Follow](https://img.shields.io/badge/Follow-GitHub-black?logo=github&style=for-the-badge)](https://github.com/HUNTER-SIDDIK) ${data.followers}
---
 
### 🛠️ Technologies & Tools:
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"></code>
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"></code>
 
**Other Tools:**
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"></code>
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"></code>
<code><img height="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"></code>
 
---
 
### 📈 GitHub Activity
<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=HUNTER-SIDDIK">
  <br>
  <br>
<a href="https://github.com/HUNTER-SIDDIK">
    <img align="center" src="https://github-readme-stats.vercel.app/api?username=HUNTER-SIDDIK&show_icons=true&theme=github_dark&line_height=27" alt="HUNTER-SIDDIK's github stats" style="margin-top: 10px;"/>
  </a>
 
  <a href="http://www.github.com/HUNTER-SIDDIK"><img src="https://github-readme-streak-stats.herokuapp.com/?user=HUNTER-SIDDIK&stroke=ffffff&background=1c1917&ring=0891b2&fire=0891b2&currStreakNum=ffffff&currStreakLabel=0891b2&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true" /></a>
  <br>
  <br>
  
 
### 🌐 Most Used Languages
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=HUNTER-SIDDIK&langs_count=10&layout=compact&theme=radical)
 
---
 
### 🌟 About Me
- **Username:** [${data.login}](${data.html_url})
- **GitHub ID:** ${data.id}
- **Member Since:** ${new Date(data.created_at).toDateString()}
- **Last Active:** ${new Date(data.updated_at).toDateString()}
 
---
 
### 🚀 My GitHub Stats
- **Public Repositories:** ${data.public_repos}
- **Public Gists:** ${data.public_gists}
- **Followers:** ${data.followers}
- **Following:** ${data.following}
- **Stars:** ${data.starred_at} ⭐ (This is a placeholder for your stars)
 
---
 
### 🎓 Achievements:
- **[Certificate Name](https://example.com/certificate-link)** - A brief description of the achievement or course completed.
- **[Another Achievement](https://example.com/another-link)** - Another cool accomplishment or certification.
 
---
 
`;
 
      // Write the updated README.md file
      fs.writeFileSync("README.md", readmeContent, "utf8");
 
      console.log("README.md file updated!");
    })
    .catch((error) => console.error("Error fetching data:", error));
})
.catch((error) => console.error("Error importing node-fetch:", error));
