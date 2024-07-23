document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.createElement("div");
    navbar.innerHTML = `
         <div class="container mt-3" style="z-index: 10; " id="dvContainerNV">
            <nav class="navbar navbar-expand-lg rounded shadow"
                style="background-color: #e3f2fd; " id="nvBarraNV">
                <div class="container-fluid bg-" id="dvFluidNV">
                    <!--Btn con img-->
                    <a class="navbar-brand" href="./index.html" id="aLogoNV">
                        <img src="./img/Logo1.png" alt="Mundo del calzado"
                            width="50" height="50" id="imgLogoNV">
                    </a>
                    <button class="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"
                        id="btnToggleNV">
                        <!--Btn con Hamburguesa-->
                        <span class="navbar-toggler-icon"
                            id="spnIconoNV"></span>
                        <!--Btn con img-->
                    </button>
                    <div class="collapse navbar-collapse"
                        id="navbarSupportedContent" id="dvColapsoNV">
                        <div
                            class="container navbar-collapse justify-content-center"
                            id="dvContenedorInternoNV">
                            <ul class="nav nav-pills" id="ulMenuNV">
                                <li class="nav-item" id="liFormalNV">
                                    <a class="nav-link" aria-current="page"
                                        href="#" id="aFormalNV">Formal</a>
                                </li>
                                <li class="nav-item" id="liDeportivoNV">
                                    <a class="nav-link" href="./HDeportivo.html"
                                        id="aDeportivoNV">Deportivo</a>
                                </li>
                                <li class="nav-item dropdown" id="liDropdownNV">
                                    <a class="nav-link dropdown-toggle" href="#"
                                        role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false" id="aOtrosNV">
                                        Otros
                                    </a>
                                    <ul class="dropdown-menu"
                                        id="ulDropdownMenuNV">
                                        <li><a class="dropdown-item"
                                                href="#">Contáctanos</a></li>
                                        <li><a class="dropdown-item"
                                                href="#">¿Quiénes
                                                somos?</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex" id="carritoNV">
                            <a href="#" class="btn btn-outline-primary d-flex"
                                type="submit" id="btnBuscarNV"><i
                                    class="bi bi-cart3"></i><span class="ml-2"
                                    id="cuenta-carrito">0</span></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    `;
    document.body.insertBefore(navbar, document.body.firstChild);
});