var id;
function start(){
    document.getElementById("city1").style.animation='city1 8s infinite linear reverse';
    document.getElementById("city2").style.animation='city2 8s infinite linear reverse';
    document.getElementById("track1").style.animation='road1 8s infinite linear reverse';
    document.getElementById("track2").style.animation='road2 8s infinite linear reverse';
    document.getElementById("car_wheel_left").style.animation='wheel 1s infinite linear';
    document.getElementById("car_wheel_right").style.animation='wheel 1s infinite linear';

    document.getElementById("car_body").style.animation='car_body_animation 3s infinite ease-in-out';

    audio.play();

    id=setInterval(() => {
        document.getElementById("audio").play();
    }, 800);
}

function stop(){
    document.getElementById("city1").style.animationPlayState='paused';
    document.getElementById("city2").style.animationPlayState='paused';
    document.getElementById("track1").style.animationPlayState='paused';
    document.getElementById("track2").style.animationPlayState='paused';
    document.getElementById("car_wheel_left").style.animationPlayState='paused';
    document.getElementById("car_wheel_right").style.animationPlayState='paused';

    clearInterval(id);
    document.getElementById('audio').pause();

}

