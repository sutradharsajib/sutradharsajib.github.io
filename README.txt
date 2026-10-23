SAJIB SUTRADHAR — PORTFOLIO WEBSITE
===================================
A single continuous scrolling page. Dark navy and cyan.
No build step, no framework, no dependencies to install.


FILES
-----
index.html                 The website: layout, styling, behaviour.
data.js                    All your content. This is the only file you edit.
portrait.jpg               Your photo, with the white studio background removed.
Sajib_Sutradhar_CV.pdf     What the "Download CV" button gives people.
bundle.js                  Optional. Squeezes everything into one .html file.
README.txt                 This file.


RUN IT LOCALLY
--------------
Double-click index.html. It opens in your browser and works offline.
Nothing to install.


PUT IT ONLINE, FREE
-------------------
1.  Make a free account at github.com.
2.  Create a new repository named exactly:
        yourusername.github.io
    (use your real GitHub username). Set it to Public.
3.  Click "uploading an existing file". Drag in index.html, data.js,
    portrait.jpg and the PDF. Click Commit changes.
4.  Wait two minutes, then open  https://yourusername.github.io
    That is your live site. Put the link on your CV and LinkedIn.

Netlify and Vercel also work: drag the whole folder onto their upload
page and they host it immediately.

For your own domain, buy it, then set it under
Settings > Pages > Custom domain in the same repository.


HOW TO UPDATE THE CONTENT
-------------------------
Open data.js in Notepad, VS Code, or any text editor.
Find the right list, copy an existing block, change the words.
Keep every comma, quote and brace exactly where it is.

Adding a ninth automation tool. Find "tools", then "items", and add:

    { name: "Eligibility Check Automation", platform: "Availity",
      desc: "Checks patient eligibility before the visit." },

Adding a job. Find "experience" and add a block with role, org,
place, dates, type, current, and a points list.

Everything else works the same way: skillGroups, projects, education,
training, languages, visits, activities.

Save, upload the file to GitHub again, and the site updates itself.


CHANGING YOUR PHOTO
-------------------
Replace portrait.jpg with a new file of the same name. The photo is
shown as a circle, so use a SQUARE image, roughly 560 x 560 pixels,
with your face centred. A rectangular photo will be cropped and may
cut off part of your head. If your new photo has a white background,
remove the background first so it does not show as a bright ring.


CHANGING THE CV FILE
--------------------
Replace Sajib_Sutradhar_CV.pdf with your updated PDF, keeping the
same filename. If you rename it, update the "cv:" line in data.js.


CHANGING CONTACT DETAILS
------------------------
All of them live at the top of data.js under "person": email, phone,
phoneAlt, linkedin, linkedinLabel, location.

Your full street address is deliberately not on the site. Only the
city and country are shown. Your three CV references are not on the
site either, because publishing other people's phone numbers invites
spam and they did not agree to it. Send those privately instead.


A NOTE ON EMPTY DESCRIPTIONS
----------------------------
Any tool left with an empty "desc" in data.js shows with a grey edge
instead of a cyan one, so you can spot unfinished entries at a glance.
All eight tools are filled in at the moment.


ONE SINGLE FILE
---------------
If a host accepts only one file, run:

    node bundle.js

It writes bundled.html with the photo and content built in.
