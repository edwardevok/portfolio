var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    deleteSpeed: 2,
});

typewriter.typeString('<span style="color: white">Soy<span> <strong>Desarrollador</strong>')
    .pauseFor(700)
    .deleteChars(13)
    .typeString('<strong>Tester QA</strong>')
    .pauseFor(700)
    .deleteChars(9)
    .typeString('<strong>dedicado</strong>')
    .pauseFor(700)
    .start();