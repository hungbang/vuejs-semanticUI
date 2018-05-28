<template>
	<div>
		<div class="ui teal labeled icon button">
			Create<i class="add icon"></i>
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
				<tr v-for="item, index in users" class="center aligned">
					<td>{{ index + 1 }}</td>
					<td><input type="checkbox" name=""></td>
					<td>{{ item.name }}</td>
					<td>{{ item.birthday }}</td>
					<td>{{ item.gender }}</td>
					<td>{{ item.phone }}</td>
					<td>
						<span class="block-button">
							<button class="ui primary button mini">V</button>
							<button class="ui red button mini">X</button>
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
			{name : 'Phạm Thị Hà', birthday : '08/12/1997', gender : 'female', phone : '0981842752'}
			]
		}
	}
}
</script>