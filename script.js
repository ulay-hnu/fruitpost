document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const fruitCards = document.querySelectorAll('.fruit-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Show/hide cards based on filter
            fruitCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const categories = card.getAttribute('data-categories').split(' ');
                    if (categories.includes(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
    
    // Daily recommendation logic - updated with images
    const recommendationContainer = document.getElementById('daily-recommendation');
    const fruitData = [
        {
            name: '苹果',
            icon: '#apple-icon',
            benefit: '今日推荐：促进饱腹感，含丰富膳食纤维',
            image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: '橙子',
            icon: '#orange-icon',
            benefit: '今日推荐：补充维生素C，增强免疫力',
            image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: '蓝莓',
            icon: '#blueberry-icon',
            benefit: '今日推荐：富含抗氧化物质，保护视力',
            image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: '猕猴桃',
            icon: '#kiwi-icon',
            benefit: '今日推荐：维C含量高，促进消化',
            image: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: '香蕉',
            icon: '#banana-icon',
            benefit: '今日推荐：提供能量，富含钾元素',
            image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: '草莓',
            icon: '#strawberry-icon',
            benefit: '今日推荐：低卡路里，维C丰富',
            image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80'
        },
        {
            name: '西瓜',
            icon: '#watermelon-icon',
            benefit: '今日推荐：水分充足，夏日解暑',
            image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80'
        }
    ];
    
    // Get today's date to determine which fruits to recommend
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0-6, where 0 is Sunday
    
    // Recommend 2-3 fruits based on the day
    const numToRecommend = dayOfWeek % 2 === 0 ? 2 : 3;
    const startIndex = dayOfWeek * numToRecommend % fruitData.length;
    
    // Clear existing content
    recommendationContainer.innerHTML = '';
    
    // Add recommendation message based on time of day
    const hour = today.getHours();
    let timeMessage = '';
    
    if (hour < 10) {
        timeMessage = '<p class="text-sm mb-4 text-gray-600">早晨可以搭配一份水果，为身体充能！</p>';
    } else if (hour < 14) {
        timeMessage = '<p class="text-sm mb-4 text-gray-600">中午饭后30分钟是吃水果的好时机。</p>';
    } else if (hour < 18) {
        timeMessage = '<p class="text-sm mb-4 text-gray-600">下午小饿时，用水果代替零食更健康！</p>';
    } else {
        timeMessage = '<p class="text-sm mb-4 text-gray-600">晚饭后适量吃点水果，但不要太晚。</p>';
    }
    
    recommendationContainer.innerHTML = timeMessage;
    
    // Add recommended fruits with images
    for (let i = 0; i < numToRecommend; i++) {
        const fruitIndex = (startIndex + i) % fruitData.length;
        const fruit = fruitData[fruitIndex];
        
        const fruitElement = document.createElement('div');
        fruitElement.className = 'recommendation-fruit';
        fruitElement.innerHTML = `
            <img src="${fruit.image}" alt="${fruit.name}" class="recommendation-img">
            <div class="recommendation-details">
                <h3>${fruit.name}</h3>
                <p>${fruit.benefit}</p>
            </div>
        `;
        
        recommendationContainer.appendChild(fruitElement);
    }
    
    // Add animation on scroll
    const cards = document.querySelectorAll('.fruit-card, .seasonal-fruit-card, .recipe-card');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});
