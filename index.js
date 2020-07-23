document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("wat");
    const video = document.getElementById("wat-video");

    button.addEventListener('mouseenter', () => {
        button.classList.remove('animate');
    })

    button.addEventListener('mouseleave', () => {
        button.classList.add('animate');
    })
    
    button.addEventListener('click', () => {
        button.classList.add('hidden');
        video.classList.remove('hidden');
        setTimeout(() => { video.play() }, 400);
    });

    video.addEventListener('ended', () => {
        button.classList.remove('hidden');
        video.classList.add('hidden');
    });
});

