<template>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 fw-normal">📝 Task App 📝 </h1>
            <p class="lead fw-normal">An excellent application to manage your tasks and pendings activities</p>
            <p class="lead fw-normal">The easiest way for you to plan your time</p>
            <p class="lead fw-normal"> What are you waiting for to sign up?</p>
            <RouterLink to="/signUp" class="btn btn-dark secondary">Sign up</RouterLink>
        </div>
        <div class="cta-footer_logos">
            <div class="logos-component">
                <img src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png" class="w-25" alt="...">
                <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png"
                    class="w-25" alt="...">
                <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png"
                    class="w-25" alt="...">
                <img src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg" class="w-25" alt="...">
            </div>
        </div>
    </div>
</template>


<style >
.logos-component {
    filter: grayscale(90%);
    margin-bottom: 10rem;
    padding: 30px;
}

.col-lg-6 {
    margin: 30px;
}
</style> 

