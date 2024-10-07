let currentIndex = 0;
const totalItems = 3;

document.querySelector('.next-button').addEventListener('click', () => {

    currentIndex = (currentIndex + 1) % totalItems;
    rearrangeImages();
});

document.querySelector('.prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    rearrangeImages();
});

// Add the "View Images" button logic
document.querySelector('.view-images-button').addEventListener('click', () => {
    // Show navigation buttons
    document.querySelector('.prev-button').style.display = 'block';
    document.querySelector('.next-button').style.display = 'block';

    // Rearrange images
    rearrangeImages();

    // Hide the "View Images" button after clicking
    document.querySelector('.view-images-button').style.display = 'none';
});


function getResponsivePositions() {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 800) {
        // Small screens
        return [
            { angle: 0, x: 0, y: -100 },    // 12 o'clock (active image, center)
            { angle: -60, x: -100, y: 0 },  // 9 o'clock (left image)
            { angle: 60, x: 100, y: 0 }     // 3 o'clock (right image)
        ];
    } else
        if (screenWidth <= 1000) {
            // Medium screens
            return [
                { angle: 0, x: 0, y: -150 },    // 12 o'clock (active image, center)
                { angle: -60, x: -250, y: 0 },  // 9 o'clock (left image)
                { angle: 60, x: 250, y: 0 }     // 3 o'clock (right image)
            ];
        } else {
            // Large screens
            return [
                { angle: 0, x: 0, y: -200 },    // 12 o'clock (active image, center)
                { angle: -60, x: -300, y: 0 },  // 9 o'clock (left image)
                { angle: 60, x: 300, y: 0 }     // 3 o'clock (right image)
            ];
        }
}


function rearrangeImages() {
    const items = document.querySelectorAll('.carousel-item');
    const positions = getResponsivePositions();  // Get positions based on screen size


    items.forEach((item, index) => {

        const positionIndex = (index - currentIndex + totalItems) % totalItems;
        const { x, y, angle } = positions[positionIndex];

        // Apply the translation and rotation
        item.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;

        // Adjust zIndex to bring the center item to the front
        item.style.zIndex = positionIndex === 0 ? '1' : '0';

        // Set opacity: 1 for center image, 0.3 for left and right
        item.style.opacity = positionIndex === 0 ? '1' : '0.3';
    });
}

// Initially, stack all images on top of each other but keep the rotation and opacity
document.querySelectorAll('.carousel-item').forEach((item, index) => {
    const initialPositions = [
        { angle: 0, opacity: 1 },    // Center image (full opacity)
        { angle: -20, opacity: 1 },  // Left image (lower opacity)
        { angle: 20, opacity: 1 }   // Right image (lower opacity)
    ];
    const { angle, opacity } = initialPositions[index];
    item.style.transform = `translate(0, 0) rotate(${angle}deg)`;
    item.style.opacity = opacity;

});
