<template>
	<div class="col-sm-3 sidenav">
		<h4 class="text-center">VueJS App</h4>
		<hr/>
		<ul class="list-group">
			<router-link to="/"><li class="list-group-item">Home</li></router-link>
			<router-link to="/user"><li class="list-group-item">User</li></router-link>
			<li class="list-group-item"><a href="#">Family</a></li>
			<li class="list-group-item"><a href="#">Photos</a></li>
		</ul>
		<br>
		<div class="input-group">
			<input type="text" class="form-control" placeholder="tìm kiếm..">
			<span class="input-group-btn">
				<button class="btn btn-primary" type="button">tìm</button>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>