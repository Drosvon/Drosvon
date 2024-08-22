// alert('Luv ya!')

document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}

document.getElementById("shelf").onmousemove = e => {
  for(const book of document.getElementsByClassName("book")) {
    const rect = book.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    book.style.setProperty("--mouse-x", `${x}px`);
    book.style.setProperty("--mouse-y", `${y}px`);
  };
}