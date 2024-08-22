document.getElementById("shelf").onmousemove = e => {
    for(const book of document.getElementsByClassName("book")) {
      const rect = book.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      book.style.setProperty("--mouse-x", `${x}px`);
      book.style.setProperty("--mouse-y", `${y}px`);
    };
  }