var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    deleteSpeed: 1,
});

typewriter.typeString('<span style="color: white">Soy<span> <strong>Desarrollador Web</strong>')
    .pauseFor(1000)
    .deleteChars(17)
    .typeString('<strong>Tester QA</strong>')
    .pauseFor(1000)
    .deleteChars(9)
    .typeString('<strong>un apasionado por la tecnología</strong>')
    .pauseFor(1000)
    .start();