<template>
    <form>
        <!-- 2 column grid layout with text inputs for the first and last names -->
        <div class="row mb-4">
            <div class="col">
                <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" />
                    <label class="form-label" for="form3Example1">First name</label>
                </div>
            </div>
            <div class="col">
                <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" />
                    <label class="form-label" for="form3Example2">Last name</label>
                </div>
            </div>
        </div>

        <!-- Email input -->
        <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control" />
            <label class="form-label" for="form3Example3">Email address</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
            <input type="password" id="form3Example4" class="form-control" />
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