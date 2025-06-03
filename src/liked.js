
            // Función para alternar entre "Me gusta" y "No me gusta"
            function toggleHeart() {
                const heart = document.getElementById('heart');
                if (heart.classList.contains('unliked')) {
                    heart.classList.remove('unliked');
                    heart.classList.add('liked');
                } else {
                    heart.classList.remove('liked');
                    heart.classList.add('unliked');
                }
            }
