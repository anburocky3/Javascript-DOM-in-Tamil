---
theme: default
title: JS-DOM Interview Questions
titleTemplate: '%s - CyberDude Networks'
exportFilename: Javascript-DOM-Interview-Questions-cyberdude-networks.pdf
class: text-center 
highlighter: shiki
lineNumbers: false
info: >
  ## Javascript DOM Interview Questions

  Learn Javascript DOM in depth and here are the interview questions. Revalidate
  yourself. Give your learning a shake.


  Watch Javascript DOM series at [CyberDude YT
  Channel](https://bit.ly/JS-DOM-Tamil)
favicon: /favicon.png
selectable: true
drawings:
  persist: false

# global
github_url: 'https://github.com/anburocky3/Javascript-DOM-in-Tamil'
video_playlist: 'https://bit.ly/JS-DOM-Tamil'
---


<h1  v-motion
  :initial="{ x: -180 }"
  :enter="{ x: 0 }"><logos-javascript class="pr-5"/> Javascript DOM </h1>  
<p class="text-white" v-motion-fade>Interview Questions with Solution, available on <span class="text-xs"><a :href="$slidev.configs.video_playlist" target="_blank" hover="!text-orange-600">YouTube channel</a></span>.</p>


<div class="pt-5" v-motion
  :initial="{ x: 180 }"
  :enter="{ x: 0 }">
  <span @click="$slidev.nav.next" class="px-4 py-1 rounded cursor-pointer bg-orange-700 text-sm text-white" hover="shadow bg-orange-600"  >
  Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a :href="$slidev.configs.video_playlist" target="_blank" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-youtube />
  </a>
  <a :href="$slidev.configs.github" target="_blank" alt="GitHub"
  class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
  </a>
</div>

<style>
.slidev-page-1 {
  background: linear-gradient(to top, #000000ba, rgba(0, 0, 0, 0.8)), url(/javascript-tamil.png) no-repeat;
}

h1 {
  @apply font-black text-orange-500;
}
</style>


---
src: ./questions/Q1.md
---

---
src: ./questions/Q2.md
---

---
src: ./questions/Q3.md
---

---
src: ./questions/Q4.md
---

---
src: ./questions/Q5.md
---

---
src: ./questions/Q6.md
---

---
src: ./questions/Q7.md
---

---
src: ./questions/Q8.md
---

---
src: ./questions/Q9.md
---

---
src: ./questions/Q10.md
---

---
src: ./questions/Q11.md
---

---
src: ./questions/Q12.md
---

---
src: ./questions/Q13.md
---

---
src: ./questions/Q14.md
---

---
src: ./questions/Q15.md
---

---
src: ./questions/Q16.md
---

---
src: ./questions/Q17.md
---

---
src: ./questions/Q18.md
---

---
src: ./questions/Q19.md
---

---
src: ./questions/Q20.md
---

---
src: ./questions/Q21.md
---

---
src: ./questions/Q22.md
---

---
src: ./questions/Q23.md
---

---
src: ./questions/Q24.md
---

---
src: ./questions/Q25.md
---

---
src: ./questions/Q26.md
---

---
src: ./questions/Q27.md
---

---
src: ./questions/Q28.md
---

---
src: ./questions/Q29.md
---

---
src: ./questions/Q30.md
---

---
src: ./questions/Q31.md
---

---
src: ./questions/Q32.md
---

---
src: ./questions/Q33.md
---

---
src: ./questions/Q34.md
---

---
src: ./questions/Q35.md
---

---
src: ./questions/Q36.md
---

---
src: ./questions/Q37.md
---

---
src: ./questions/Q38.md
---

---
src: ./questions/Q39.md
---

---
src: ./questions/Q40.md
---

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# What's next?

Great, there is still a lot more to learn.

- [thatjsdude.com Interview Questions](https://www.thatjsdude.com/interview/dom.html)
- [gitconnected.com Interview Questions](https://levelup.gitconnected.com/javascript-interview-questions-basic-dom-and-events-7925ce8602ef)
- [wisdomjobs Interview Questions](https://www.wisdomjobs.com/e-university/html-dom-interview-questions.html)
- [sevenmentor Interview Questions](https://www.sevenmentor.com/html-document-object-modeldominterview-questions-and-answers)
- [interviewgig.com Interview Questions](https://www.interviewgig.com/html-dom-interview-questions-and-answers/z)

<div class="my-10">
  <a :href="$slidev.configs.video_playlist" class="bg-slate-100 dark:bg-gray-900 px-4 py-5 text-xs dark:shadow rounded !text-gray-500">
    <mdi-video class="mr-2" /> Watch <span class="font-semibold text-orange-500">Javascript DOM in Tamil</span> on CyberDude YT.
  </a>
</div>