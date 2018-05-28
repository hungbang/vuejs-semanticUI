<template>
    <div id="app">
        <div class="container-fluid">
            <div class="row content">
                
                <app-sidebar></app-sidebar>

                <div class="col-sm-9">
                    <router-view />
                </div>
            </div>
        </div>

        <app-footer></app-footer>
    </div>
</template>

<script>
    import Sidebar from './layouts/Sidebar'
    import Home from './layouts/Home'
    import Footer from './layouts/Footer'

    export default {
        name: 'app',
        components : {
            'app-sidebar' : Sidebar,
            'app-home' : Home,
            'app-footer' : Footer
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
