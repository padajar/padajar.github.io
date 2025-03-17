// code adapted from https://dribbble.com/shots/3649176-FAQ by Katherine Kato

document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll(".accordion button");
  const expandAllButton = document.getElementById('expand-all');
  const collapseAllButton = document.getElementById('collapse-all'); // Add collapse all button

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
      const content = this.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + "px"; // Dynamically set max-height
    } else {
      this.setAttribute('aria-expanded', 'false');
      const content = this.nextElementSibling;
      content.style.maxHeight = null; // Reset max-height
    }
  }

  function expandAll(event) {
    event.preventDefault(); // Prevent default link behavior
    items.forEach(item => {
      item.setAttribute('aria-expanded', 'true');
      const content = item.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + "px"; // Dynamically set max-height
    });
  }

  function collapseAll(event) {
    event.preventDefault(); // Prevent default link behavior
    items.forEach(item => {
      item.setAttribute('aria-expanded', 'false');
      const content = item.nextElementSibling;
      content.style.maxHeight = null; // Reset max-height
    });
  }

  items.forEach(item => item.addEventListener('click', toggleAccordion));
  expandAllButton.addEventListener('click', expandAll); // Add event listener for expand all button
  collapseAllButton.addEventListener('click', collapseAll); // Add event listener for collapse all button
});