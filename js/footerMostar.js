

//Ver css del redes sociales del footer
document.addEventListener("DOMContentLoaded", function () {
    var footer = document.createElement("div");
    footer.innerHTML = `
    <!--Footer)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))-->
        <footer class="bg-dark borde" id="tempaltemo_footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 pt-5">
                        <h2
                            class="h2 text-light border-bottom pb-3 border-light logo">
                            <img src="./img/Logo1.png" class="mr-2 mb-2"
                                alt="Mundo del calzado"
                                width="50" height="50" id="imgLogoNV">
                            Tu Calzado
                            Ideal&nbsp</h2>
                        <ul
                            class="list-unstyled text-light footer-link-list">
                            <li>
                                <i
                                    class="fas fa-map-marker-alt fa-fw"></i>&nbsp
                                Salceo, Cotopaxi, Ecuador
                            </li>
                            <li>
                                <i class="fa fa-phone fa-fw"></i>
                                <a class="text-decoration-none"
                                    href="tel:010-020-0340">&nbsp0987654321</a>
                            </li>
                            <li>
                                <i class="fa fa-envelope fa-fw"></i>
                                <a class="text-decoration-none"
                                    href="mailto:info@company.com">&nbspZapatosSalcedo@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-4 pt-5">
                        <h2
                            class="h2 text-light border-bottom pb-3 border-light">Productos</h2>
                        <ul
                            class="list-unstyled text-light footer-link-list">
                            <li><a class="text-decoration-none"
                                    href="./HDeportivo.html">Deportivo</a></li>
                            <li><a class="text-decoration-none"
                                    href="#">Casual</a></li>
                            <li><a class="text-decoration-none"
                                    href="#">Formal</a></li>

                        </ul>
                    </div>

                    <div class="col-md-4 pt-5">
                        <h2
                            class="h2 text-light border-bottom pb-3 border-light">Desarrolladores</h2>
                        <ul
                            class="list-unstyled text-light footer-link-list">
                            <li><i class="bi bi-github mr-2"></i><a
                                    class="text-decoration-none"
                                    href="https://github.com/Xriva18">&nbspGuanoluisa
                                    Fernando</a></li>
                            <li><i class="bi bi-github mr-2"></i><a
                                    class="text-decoration-none"
                                    href="https://github.com/">&nbspPallango
                                    Brayan</a></li>
                        </ul>
                    </div>

                </div>

                <div class="row text-light mb-4">
                    <div class="col-12 mb-3">
                        <div
                            class="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div class="col-auto me-auto">
                        <h2
                            class="h2 text-light border-bottom pb-3 border-light">Siguenos:</h2>
                        <ul class="list-inline text-left footer-icons">
                            <li
                                class="list-inline-item border border-light rounded-circle text-center">
                                <a
                                    class="text-light text-decoration-none"
                                    target="_blank"
                                    href="http://facebook.com/"><i
                                        class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                            </li>
                            <li
                                class="list-inline-item border border-light rounded-circle text-center">
                                <a
                                    class="text-light text-decoration-none"
                                    target="_blank"
                                    href="https://www.instagram.com/"><i
                                        class="fab fa-instagram fa-lg fa-fw"></i></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div class="w-100 bg-black py-3">
                <div class="container">
                    <div class="row pt-2">
                        <div class="col-12">
                            <p class="text-left text-light">
                                Zapatos | © 2024 Todos los derechos
                                reservados
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!--Footer finish-->

`;
    document.body.appendChild(footer);
});