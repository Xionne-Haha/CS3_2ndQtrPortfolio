**10 Errors that I found in the codes**
Format: Type of code (either CSS, JS or HTML), Line, Description of Error, Correction Made

1. **Type of Error**: JS, **Line**: 7, **Description of Error**: There was a lack of period in point.styleleft, **Correction Made**: Made into point.style.left

2. **Type of Error**: JS, **Line**: 8, **Description of Error**: There was a lack of period in point.stylebottom, **Correction Made**: Made into point.style.bottom

3. **Type of Error**: JS, **Line**: 1, **Description of Error**: There were 4 arguments defined in HTML but none of those same arguments appeared in the JS File, **Correction Made**: Updated to function plotPoint(x0, y0, x, y)

4. **Type of Error**: JS, **Line**: 2, **Description of Error**: (x0, y0, x, y) were being defined as numbers, **Correction Made**: Used Number() to pass them as explicit constants

5. **Type of Error**: JS, **Line**: 3, **Description of Error**: Using in1.innerHTML is prone to breaking on modern browsers, **Correction Made**: Modified the string of code to document.getElementById('in1').innerHTML = x0 + " " + y0 + " " + input + " " + result;

6. **Type of Error**: CSS, **Line**: 38, **Description of Error**: The space in nav a :hover looks for the child of the anchor instead of the anchor itself. **Correction Made**: Removed the space.

7. **Type of Error**: CSS, **Line**: 24, **Description of Error**: Nav bar was static, it means that it did not fulfill the condition of not scrolling with the rest of the content, **Correction Made**: Added position: fixed; top: 0; width: 100%; to the nav block.

8. **Type of Error**: CSS, **Line**: 24, **Description of Error**: There was a lack of flex properties that caused stacking, **Correction Made**: Applied display: flex; to the nav container.

9. **Type of Error**: CSS, **Line**: 47, **Description of Error**: The .point class lacked position: absolute, rendering the left and bottom values useless, **Correction Made**: Added position: absolute; to the .point CSS definition.

10. **Type of Error**: JS, **Line**: 9, **Description of Error**: The code appended a new point every click without clearing the old one, **Correction Made**: Added a cleanup function to remove existing .point elements before plotting a new one.






