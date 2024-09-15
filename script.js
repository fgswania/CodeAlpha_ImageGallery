const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-content');
const closeLightbox = document.querySelector('.close');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Open lightbox on image click
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.querySelector('img').src;
    lightbox.classList.remove('hidden');
    currentImageIndex = index;
    updateFilteredItems();
  });
});

// Close lightbox
closeLightbox.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

// Previous/Next buttons in lightbox
prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : filteredItems.length - 1;
  lightboxImage.src = filteredItems[currentImageIndex].querySelector('img').src;
});

nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex < filteredItems.length - 1) ? currentImageIndex + 1 : 0;
  lightboxImage.src = filteredItems[currentImageIndex].querySelector('img').src;
});

function updateFilteredItems() {
  const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
  filteredItems = Array.from(galleryItems).filter(item => 
    activeFilter === 'all' || item.getAttribute('data-category') === activeFilter);
}

