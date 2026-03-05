// Load Header
fetch("partials/header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });

// Load Footer
fetch("partials/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });



fetch('partials/book-demo-form.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('book-demo-form-container').innerHTML = data;
    });

fetch('partials/about-sections.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('about-sections').innerHTML = data;
    });


fetch('partials/services-sections.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('services-sections').innerHTML = data;
    });


fetch('partials/contact-sections.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('contact-sections').innerHTML = data;
    });