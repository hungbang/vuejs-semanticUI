<template>
	<div>
		<h3 class="ui top attached header green">
			Add User
		</h3>
		<div class="ui attached segment">
			<form class="ui form">
				<div class="field">
					<label>Name</label>
					<input type="text" placeholder="name" v-model="name" v-validate="'required'" name="name">
					<span class="has-error">{{ errors.first('name') }}</span>
				</div>
				<div class="field">
					<label>Birthday</label>
					<input type="date" placeholder="birthday" v-model="birthday" v-validate="'required'" name="birthday">
					<span class="has-error">{{ errors.first('birthday') }}</span>
				</div>
				<div class="field">
					<label>Gender</label>
					<select class="ui dropdown" v-model="gender" name="gender" v-validate="'required'">
						<option value="">Gender</option>
						<option value="1">Male</option>
						<option value="0">Female</option>
					</select>
					<span class="has-error">{{ errors.first('gender') }}</span>
				</div>
				<div class="field">
					<label>Phone</label>
					<input type="text" placeholder="phone" v-model="phone" v-validate="'required|numeric'" name="phone">
					<span class="has-error">{{ errors.first('phone') }}</span>
				</div>
				<div class="field">
					<div class="ui checkbox">
						<input type="checkbox" v-model="checked">
						<label>I agree</label>
					</div>
				</div>
				<button class="ui button primary" type="button" v-on:click="submit" v-if="flag">Submit</button>
				<button disabled class="ui primary loading button" type="button" v-else>Loading</button>
			</form>
		</div>

	</div>			
</template>

<script>

import Vue from 'vue'
import { db } from '../db.js'

export default {
	firebase: {
		items: db.ref('items')
	},
	data() {
		return {
			name : '',
			birthday : '',
			gender : '',
			phone : '',
			checked : false,
			flag : true
		}
	},
	methods: {
		submit() {
			this.$validator.validate().then(result => {
				if (!result) {
					Vue.swal('Thông báo','Vui lòng nhập đủ thông tin bắt buộc','error')
					return
				}
				if(!this.checked) {
					Vue.swal('Thông báo','Vui lòng chấp nhận điều khoản','error')
					return
				}
				console.log(this)
				this.flag = false
				this.$firebaseRefs.items.push({
					name: this.name,
					birthday: this.birthday
				})
				this.name = '';
				this.birthday = '';
				this.$router.push('/user')
			});
		},
	}
}

</script>