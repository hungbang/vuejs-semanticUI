<template>
	<div>
		<h4>USER PAGE</h4>
		<hr>
		<input type="text" class="form-control" placeholder="tìm kiếm...">
		<table class="table table-hover table-striped table-name">
			<thead>
				<tr>
					<th width="5%" class="text-center">#</th>
					<th width="5%" class="text-center"><input type="checkbox" class="checkall"></th>
					<th width="20%">Name</th>
					<th width="20%">Birthday</th>
					<th width="15%">Gender</th>
					<th width="15%">Phone</th>
					<th width="20%">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user, index in users">
					<td class="text-center">{{ index + 1 }}</td>
					<td class="text-center"><input type="checkbox" class=""></td>
					<td>{{ user.name }}</td>
					<td>{{ user.birthday }}</td>
					<td>{{ user.gender}}</td>
					<td>{{ user.phone}}</td>
					<td>
						<span class="button">
							<button type="button" class="btn btn-primary btn-xs">V</button>
							<button type="button" class="btn btn-danger btn-xs">X</button>
						</span>
					</td>
				</tr>
				
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				users: [
					{name : 'Vũ Đức Hồng', birthday : '06/06/1993', gender : 'male', phone : '0987654321'},
					{name : 'Vũ Đức Hải', birthday : '20/01/2000', gender : 'male', phone : '0985720482'},
					{name : 'Nguyễn Mạnh Tùng', birthday : '01/10/1994', gender : 'male', phone : '01692482942'},
					{name : 'Phạm Thị Hà', birthday : '08/12/1997', gender : 'female', phone : '0981842752'},
				]
			}
		}
	}
</script>