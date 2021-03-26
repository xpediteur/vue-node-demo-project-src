<template>
    <div class="display-board">
        <h4>Users Created</h4>
        <div class="number">
        {{numberOfUsers}}
        </div>
        <div class="btn">
            <button @click='getAllUsers()' type="button" class="btn btn-warning">Get all Users</button>
            <button @click='getAllAccs()' type="button" class="btn btn-primary ml-2">Accounts</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: ['numberOfUsers', 'numberOfAccounts'],
        methods: {
            getAllUsers() {
                this.$emit('getAllUsers')
            },
            getAllAccs() {
                this.$emit('getAllAccounts')
            }
        }
    }
</script>