function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const cells = document.querySelectorAll("tbody tr")
      const input = document.getElementById("searchField");
      
      for (let iterator of cells) {
         if (iterator.textContent.includes(input.value) && input.value !== "") {
            // iterator.classList.add("select");
            iterator.className = "select";
         } else {
            iterator.classList.remove("select");
         }
      }

      input.value = "";
   }
}