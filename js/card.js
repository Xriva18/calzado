$(document).ready(function () {
    function createCard(imgSrc, title, desc, price, linkHref) {
        let cardTemplate = $('#cardTemplate').clone();
        cardTemplate.removeAttr('id');
        cardTemplate.find('#imgCardImg1Crd').attr('src', imgSrc);
        cardTemplate.find('#h5CardTitle1Crd').text(title);
        cardTemplate.find('#pCardDesc1Crd').text(desc);
        cardTemplate.find('#lblPrice1Crd').text(price);
        cardTemplate.find('#aCardLink1Crd').attr('href', linkHref);
        cardTemplate.show();
        return cardTemplate;
    }

    // Llamar a la función createCard para diferentes contenedores
    $('#firstContainer').append(createCard('./img/crdImg1.jpg', 'Puma Caven 2.0 Unisex', 'Se inspiran en la vida universitaria de los años 90 para crear un diseño que evoca con nostalgia la estética retro.', '50.25$', 'pagina1.html'));
    $('#secondContainer').append(createCard('./img/crdImg2.jpg', 'Nike Air Max', 'La comodidad y estilo de los años 90 con la tecnología moderna.', '75.50$', 'pagina2.html'));
    $('#thirdContainer').append(createCard('./img/crdImg3.jpg', 'Adidas Retro', 'Un tributo a los clásicos con un toque contemporáneo.', '65.00$', 'pagina3.html'));
});