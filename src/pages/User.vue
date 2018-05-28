<template>
	<div>
		<div class="ui teal labeled icon button tiny" v-on:click="create">
			<i class="add icon"></i>Create
		</div>
		<div class="ui red labeled icon button tiny" v-on:click="create">
			<i class="times icon"></i>Delete
		</div>
		<div class="ui action input mini float-right">
			<input type="text" placeholder="Search...">
			<button class="ui icon button">
				<i class="search icon"></i>
			</button>
		</div>
		<table class="ui selectable celled table">
			<thead>
				<tr class="center aligned">
					<th width="5%">#</th>
					<th width="5%"><input type="checkbox" class="checkall"></th>	
					<th width="25%">Name</th>
					<th width="20%">Birthday</th>
					<th width="15%">Gender</th>
					<th width="15%">Phone</th>
					<th width="15%">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item, index in users" class="center aligned" v-if="users.length > 0">
					<td>{{ index + 1 }}</td>
					<td><input type="checkbox" name=""></td>
					<td>{{ item.name }}</td>
					<td>{{ item.birthday }}</td>
					<td>{{ item.gender }}</td>
					<td>{{ item.phone }}</td>
					<td>
						<span class="block-button">
							<button class="ui primary button mini">V</button>
							<button class="ui red button mini" v-on:click="deleteItem(item.id, index)">X</button>
						</span>
					</td>
				</tr>
				<tr v-else>
					<td colspan="7">không có dữ liệu</td>
				</tr>		
			</tbody>
		</table>
	</div>
	
</template>

<script>

import Vue from 'vue'

export default {
	data() {
		return {
			users: [
				{id : 1, name : 'Vũ Đức Hồng', birthday : '06/06/1993', gender : 'male', phone : '0987654321'},
				{id : 2, name : 'Vũ Đức Hải', birthday : '20/01/2000', gender : 'male', phone : '0985720482'},
				{id : 3, name : 'Hà Thị Mai', birthday : '01/10/1994', gender : 'female', phone : '01692482942'},
				{id : 4, name : 'Phạm Thị Hà', birthday : '08/12/1997', gender : 'female', phone : '0981842752'}
			]
		}
	},
	created() {
		console.log(this.users)
	},
	methods: {
		create() {
			Vue.swal('Hello Vue world!!!')
		},
		deleteItem(id, index) {
			let self = this
			Vue.swal({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.value) {
					Vue.swal(
						'Deleted!',
						'Your file has been deleted.',
						'success'
					)
					Vue.delete(self.users, index)
				}
			})
		}

	}
}
</script>