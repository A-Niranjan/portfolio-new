        // Preloader Logic (10 staggered white bars opening up)
        window.addEventListener('DOMContentLoaded', () => {
            const bars = document.querySelectorAll('.preloader-bar');
            bars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.transition = 'transform 0.8s cubic-bezier(0.85, 0, 0.15, 1)';
                    bar.style.transform = 'scaleY(0)';
                }, 300 + (index * 50));
            });

            // Remove preloader from DOM after animation
            setTimeout(() => {
                const preloader = document.getElementById('preloader');
                if (preloader) preloader.remove();
            }, 300 + (bars.length * 50) + 800);
        });

        // Scroll Reveal Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(el => {
            observer.observe(el);
        });

        // Work card scroll-in animation with settled state
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    card.classList.add('visible');
                    
                    // After scroll-in animation completes, add settled state for hover
                    setTimeout(() => {
                        card.classList.add('settled');
                    }, 850); // matches transition duration
                    
                    cardObserver.unobserve(card);
                }
            });
        }, { threshold: 0.12 });

        // Cursor-following overlay with smooth interpolation
        document.querySelectorAll('.work-card').forEach(card => {
            cardObserver.observe(card);
            
            const overlay = card.querySelector('.work-card-overlay');
            if (!overlay) return;
            
            let currentX = 0, currentY = 0;
            let targetX = 0, targetY = 0;
            let isHovering = false;
            let animationId = null;
            
            const smoothFollow = () => {
                // Smooth interpolation for butter-like motion
                currentX += (targetX - currentX) * 0.2;
                currentY += (targetY - currentY) * 0.2;
                
                overlay.style.left = currentX + 'px';
                overlay.style.top = currentY + 'px';
                
                if (isHovering) {
                    animationId = requestAnimationFrame(smoothFollow);
                }
            };
            
            card.addEventListener('mouseenter', () => {
                isHovering = true;
                if (!animationId) {
                    animationId = requestAnimationFrame(smoothFollow);
                }
            });
            
            card.addEventListener('mousemove', (e) => {
                targetX = e.offsetX;
                targetY = e.offsetY;
            }, { passive: true });
            
            card.addEventListener('mouseleave', () => {
                isHovering = false;
                if (animationId) {
                    cancelAnimationFrame(animationId);
                    animationId = null;
                }
            }, { passive: true });
        });

        // Navbar scroll background toggle
        const navbar = document.querySelector('.navbar');
        const hero = document.querySelector('.hero') || document.querySelector('.hero-section');

        function updateNavbar() {
            const heroBottom = hero.offsetTop + hero.offsetHeight;
            if (window.scrollY > heroBottom - 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', updateNavbar, { passive: true });
        updateNavbar();
