const el = document.getElementById('descc');


const hiddenEl = document.getElementById('hidden');

// ✅ Show hidden DIV on hover
el.addEventListener('mouseover', function handleMouseOver() {
    hiddenEl.style.display = 'block';
});

// ✅ (optionally) Hide element on mouse out

el.addEventListener('mouseout', function handleMouseOut() {
  hiddenEl.style.display = 'none';
});

