document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.profile-image');
    var currentIndex = 0;
    
    function showImage(index) {
      images.forEach(function(image, i) {
        if (i === index) {
          image.classList.remove('hidden');
        } else {
          image.classList.add('hidden');
        }
      });
    }
    
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
    
    setInterval(nextImage, 3000); // Change image every 3 seconds
  });
  