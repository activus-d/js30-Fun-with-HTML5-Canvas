const canvas = document.querySelector('#draw');
    const contxt = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    contxt.strokeStyle = '#BADA55';
    contxt.lineJOin = 'round';
    contxt.lineCap = 'round';
    contxt.lineWidth = 60;
    contxt.globalCompositeOperation = 'multiply'; //look up property on google
    let = isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;   
    function draw(e) {
      if(!isDrawing) return; //stoop drawing when mouse is up and out
      console.log(e);
      contxt.strokeStyle = `hsl(${hue}, 100%, 50%)`
      contxt.beginPath();
      //start from
      contxt.moveTo(lastX, lastY);
      //go to
      contxt.lineTo(e.offsetX, e.offsetY);
      contxt.stroke();
      lastX = e.offsetX;
      lastY = e.offsetY; // or use destructuring [lastX , lastY] = [e.offsetX, e.offsetY]
      hue++ ;
      hue >= 360 ? hue = 0 : hue++ ;
      (contxt.lineWidth >= 100 || contxt.lineWidth <= 1) ? direction = !direction : '' ;
      direction ? contxt.lineWidth++ : contxt.lineWidth-- ;
    }   
    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);


