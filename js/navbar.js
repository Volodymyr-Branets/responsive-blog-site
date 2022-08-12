const navbar = `
<section>
    <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand logo-text" href="index.html"><i class="ri-video-line ri-xl text-danger"></i>
                my_vlog</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title text-danger" id="offcanvasDarkNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="blog.html">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacts.html">Contacts</a>
                        </li>
                        <!-- <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        My social networks
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> -->
                    </ul>
                    <!-- <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-success" type="submit">Search</button>
                            </form> -->
                    <div>
                        <hr>
                        <h3 class="text-info nav-link py-2">Social networks:</h3>
                        <a href="https://www.youtube.com/" class="text-decoration-none link-light"><i
                                class="ri-youtube-fill ri-2x"></i></a>
                        <a href="https://www.facebook.com/" class="text-decoration-none link-light"><i
                                class="ri-facebook-box-fill ri-2x"></i></a>
                        <a href="https://www.instagram.com/" class="text-decoration-none link-light"><i
                                class="ri-instagram-fill ri-2x"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</section>
`;
const navbar_section = document.querySelector("#navbar-section");
navbar_section.innerHTML = navbar;
