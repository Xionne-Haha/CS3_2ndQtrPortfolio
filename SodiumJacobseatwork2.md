# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
Answer: Unlike static (the default), relative allows you to move an element without affecting its neighbors. The Sidebar moved 20px down and 20px right, but the space it originally occupied remains eIf you change it to bottom: 20px, it will actually push the element up from where it was supposed to be.

Experiment: If you change it to bottom: 20px, it will actually push the element up from where it was supposed to be.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
Answer: The footer stays glued to the bottom of your screen (the viewport), no matter how far down you scroll. Relative is relative to itself in the document flow. Fixed is relative to the window. It’s effectively removed from the flow of the page.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
Answer: Absolute completely removes the element from the document flow. While fixed sticks to the screen, absolute sticks to its nearest positioned ancestor (in this case, the <body>). If you scroll down, an absolute element will scroll up and away with the rest of the page.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?
Answer: z-index determines what is "closer" to your eyes. Since the .notice has z-index: 2 and .content has z-index: 1, the notice wins the fight for the top spot. It will overlap and potentially hide the notice if you swap the z-index values.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    * What do you observe on about the effect of z-index on .notice and .content boxes?

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?
Static was the default where elements followed the default order of the file.
Relative is moved via top/bottom/left/right relative to its original spot.
Absolute is placed relative to its nearest positioned ancestor.
Fixed is placed relative to the browser window.

    b. How does absolute positioning depend on its parent element?
Absolute positioning looks up the file to find the first parent that has a position value other than static. If it finds one, the cardinal coordinates are computed from the edges of that parent. If it doesn't find one, it keeps looking.

    c. How do you differentiate sticky from fixed (you can research on sticky)?
Fixed is completely detached from the page. It doesn't care about its parent. It is always on top and never moves. Sticky acts like relative until you scroll to a specific point, then acts like fixed.
   
    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
I would place a bright "Buy Tickets" button in the top-right corner using position: fixed; top: 20px; right: 20px;. This ensures that no matter how much someone reads about the event, the desired action is always visible.
