function plotPoint(x0, y0, input, result) {

    console.log(x0, y0, input, result);

    document.getElementById('in1').innerHTML = x0 + " " + y0 + " " + input + " " + result;

    var point = document.createElement('div');
    point.className = 'point';

    point.style.position = "absolute";
    point.style.left = (input - x0 + 200 - 5) + 'px';
    point.style.bottom = (result - y0 + 200 - 5) + 'px';

    const plane = document.getElementById('coordinatePlane');

    const oldPoints = plane.getElementsByClassName('point');
    while(oldPoints.length > 0) oldPoints[0].remove();

    plane.appendChild(point);

    const out1 = document.getElementById('out1');
    if (input === x0 || result === y0) {
      out1.innerHTML = "divisa";
    } else if (input > x0 && result > y0) {
      out1.innerHTML = "NE";
    } else if (input < x0 && result < y0) {
      out1.innerHTML = "SO";
    } else if (input > x0 && result < y0) {
      out1.innerHTML = "SE";
    } else if (input < x0 && result > y0) {
      out1.innerHTML = "NO";
    }
}

function handlePlot() {
    const x0 = Number(document.getElementById('x0').value);
    const y0 = Number(document.getElementById('y0').value);
    const input = Number(document.getElementById('input').value);
    const result = Number(document.getElementById('result').value);
    plotPoint(x0, y0, input, result);
}