document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section-title, .page-проблема .section, .page-решения .section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                 entry.target.classList.add('active');
                 observer.unobserve(entry.target); // Отключаем наблюдение после появления
             }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
    
    
      const sectionTexts = document.querySelectorAll('.section-text');
    
     const observerText = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
              entry.target.classList.add('active');
            }
        })
    },{
        threshold: 0.1
    });
    
    sectionTexts.forEach(text => {
        observerText.observe(text)
    })
    
     const swiper = new Swiper('.swiper-container', {
    loop: true,
     pagination: {
        el: '.swiper-pagination',
         clickable: true,
        }
    });
    
  
    const chartCanvas = document.getElementById('myChart');
     if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'pie',
           data: {
               labels: ['Перелов', 'Недостаток квот', 'Незаконный промысел'],
              datasets: [{
                   label: 'Статистика перелова',
                    data: [40, 30, 30],
                   backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                       'rgba(255, 206, 86, 0.6)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                     'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                   ],
                    borderWidth: 1
               }]
          },
        });
     }
    
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
   const icon3 = document.getElementById('icon3');
   const icon4 = document.getElementById('icon4');
   const icon5 = document.getElementById('icon5');
    const icon6 = document.getElementById('icon6');
    
    const cleanupImage = document.querySelector('.cleanup-image');
    
     if(cleanupImage) {
        cleanupImage.addEventListener('mouseover', function(){
           icon1.style.display = 'none';
           icon2.style.display = 'block';
        });
         cleanupImage.addEventListener('mouseout', function(){
            icon1.style.display = 'block';
           icon2.style.display = 'none';
        })
    }
    
     const sustainableImage = document.querySelector('.sustainable-image');
        if (sustainableImage){
        sustainableImage.addEventListener('mouseover', function(){
           icon3.style.display = 'none';
           icon4.style.display = 'block';
          
        });
        sustainableImage.addEventListener('mouseout', function(){
             icon3.style.display = 'block';
            icon4.style.display = 'none';
          
        });
    }
        const energyImage = document.querySelector('.energy-image');
        
    if(energyImage){
         energyImage.addEventListener('mouseover', function(){
           icon5.style.display = 'none';
           icon6.style.display = 'block';
        });
        energyImage.addEventListener('mouseout', function(){
              icon5.style.display = 'block';
            icon6.style.display = 'none';
       });
     }
     
     const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const image = item.getAttribute('data-image');
            const description = item.getAttribute('data-description');
            const location = item.getAttribute('data-location');

            const overlay = document.createElement('div');
             overlay.classList.add('overlay');
            
            const imageElement = document.createElement('img');
              imageElement.src = image;
              imageElement.style.maxWidth = '100%';
              imageElement.style.maxHeight = '400px';
             overlay.appendChild(imageElement)
              
             const descriptionElement = document.createElement('p');
             descriptionElement.textContent = description;
              overlay.appendChild(descriptionElement);

             const locationElement = document.createElement('p');
            locationElement.textContent = `Место: ${location}`;
             overlay.appendChild(locationElement);
            

           document.body.appendChild(overlay)
          
            overlay.addEventListener('click', function (e) {
                if(e.target === overlay){
                      document.body.removeChild(overlay)
                   }
                
            })
        });
    });
    
    
    
});