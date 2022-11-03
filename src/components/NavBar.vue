<template>
    <div id="app">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <!-- Icono de NAVBAR -->
                <nav class="navbar navbar-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-check-square" viewBox="0 0 16 16">
                                <path
                                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path
                                    d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                            </svg>
                        </a>
                    </div>
                </nav>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/home" class="nav-link active" aria-current="page">Home</router-link>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link to="/ToDoList" class="nav-link">My list </router-link>
                        </li> -->
                        <li class="nav-item">
                            <router-link to="/signIn" class="nav-link">Sign In </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/signUp" class="nav-link">Sign Up </router-link>
                        </li>
                        <ul v-if="user" class="nav-item"></ul>
                        <li @click="logOut" class="nav-link"> <button type="submit" class="btn btn-danger">Log
                                out</button>
                            <!-- Quiero que al clicar este botón me redirija al home -->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from "../stores/user"
import { supabase } from "../supabase";
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const router = useRouter()

const logOut = async () => {
    await supabase.auth.signOut();
    useUserStore().user = null;
    alert("You have been logged out. A bit more to do? Sign in!")
    router.push({ path: '/Home' });
}
</script>

<style>
.contenedor {
    height: 80%;
    width: 80%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    color: antiquewhite;
}

.btn-danger {
    margin: -7px 0px 0px 0px;
}
</style>