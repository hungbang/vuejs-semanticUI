<template>
	<div class="ui vertical green item inverted menu ">
		<router-link :to="{ name : 'app' }" class="item active">Home</router-link>
		<router-link :to="{ name : 'user' }" class="item">Users</router-link>
		<router-link :to="{ name : 'adduser' }" class="item">Add User</router-link>
	</div>
</template>