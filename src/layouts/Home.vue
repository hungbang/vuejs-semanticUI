<template>
	<div>
		<button class="ui primary button" v-on:click="showModal">Open modal</button>
		<modal></modal>
	</div>
</template>

<script>

import Modal from './../components/Modal'

export default {
	components : { Modal },
	data() {
		return {

		}
	},
	methods: {
		showModal() {
			$('ui.modal').modal('show')
		}
	}
}
</script>