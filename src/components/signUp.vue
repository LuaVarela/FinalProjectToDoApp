<template>
    <form @submit.prevent="onSubmit" class="container mt-5">
        <!-- 2 column grid layout with text inputs for the first and last names -->
        <div class="row mb-4">
            <div class="col">
                <div class="form-outline">
                    <input type="text" required id="form3Example1" v-model="firstName" class="form-control" />
                    <label class="form-label" for="form3Example1">First name</label>
                </div>
            </div>
            <div class="col">
                <div class="form-outline">
                    <input type="text" required id="form3Example2" v-model="lastName" class="form-control" />
                    <label class="form-label" for="form3Example2">Last name</label>
                </div>
            </div>
        </div>

        <!-- Email input -->
        <div class="form-outline mb-4">
            <input type="email" required id="form3Example3" v-model="email" class="form-control" />
            <label class="form-label" for="form3Example3">Email address</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
            <input type="password" required id="form3Example4" v-model="password" class="form-control" />
            <label class="form-label" for="form3Example4">Password</label>
        </div>

        <!-- Submit button -->
        <div class="col d-flex justify-content-center">
            <button type="submit" class="btn btn-dark"
                style="--bs-btn-padding-y: .75rem; --bs-btn-padding-x: 1.75rem; --bs-btn-font-size: 1rem;">Sign up
            </button>
        </div>
    </form>
</template>

<script setup >
import { ref } from "vue";
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'


const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

const onSubmit = async () => {
    await userStore.signUp(email.value, password.value)
    router.push({ path: '/signIn' });
}
</script>

<style>
.mt-5 {
    padding-top: 100px;
}
</style>