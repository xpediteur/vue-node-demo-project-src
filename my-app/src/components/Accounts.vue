<template>
    <div class="container">
        <h2>Accounts</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>User Id</th>
                <th>Firstname</th>
                <th>md5</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in accounts" :key="item.ID">
                  <td>{{ item.UserID }}</td>
                  <td>{{ item.Name1 }}</td>
                  <td>{{ item.md5string }}</td>
                  <td>{{ item.Email }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Accounts',
        props: ['accounts']
     }
</script>