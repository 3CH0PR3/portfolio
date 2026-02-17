<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const contactLinks = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/',
		icon: 'fa-brands fa-linkedin',
		description: '@andreshmndz'
	},
	{
		name: 'Email',
		url: 'mailto:andreshmndz@gmail.com',
		icon: 'fa-solid fa-at',
		description: 'andreshmndz@gmail.com'
	},
	{
		name: 'WhatsApp',
		url: 'https://wa.me/584146548313',
		icon: 'fa-brands fa-whatsapp',
		description: '+58 414 654 8313'
	}
]

const theme = localStorage.getItem('theme')

const name = ref('');
const email = ref('');
const message = ref('');
const errors = reactive({});
const isProcessing = ref(false)

const validate = () => {
	errors.name = !name.value ? 'El nombre es obligatorio' : null
	errors.email = !email.value ? 'El email es obligatorio' : null
	errors.message = !message.value ? 'El mensaje es obligatorio' : null

	return !errors.name && !errors.email && !errors.message
}

const resetForm = () => {
	name.value = ''
	email.value = ''
	message.value = ''
}

const submit = () => {
	if (!validate()) return

	isProcessing.value = true

	axios.post('https://api.web3forms.com/submit', {
		access_key: 'b1e783bc-51c3-4f7e-b93d-846b393ea8d3',
		name: name.value,
		email: email.value,
		message: message.value
	}).then(() => {
		resetForm();
		isProcessing.value = false

		toast.success("Mensaje enviado con éxito", {
			autoClose: 3000,
			theme: theme,
			style: { fontSize: "13px" },
			progressStyle: { background: "#00f2ff", height: "4px" },
		});
	}).catch(() => {
		toast.error("Hubo un error al enviar el mensaje", {
			autoClose: 3000,
			theme: theme,
			style: { fontSize: "13px" },
			progressStyle: { background: "#00f2ff", height: "4px" },
		});
		isProcessing.value = false
		alert('Hubo un error al enviar el mensaje, por favor intenta de nuevo')
	});
}
</script>

<template>
	<section class="py-20 md:py32" id="contacto">
		<div class="max-w-7xl mx-auto p-8">
			<div class="grid lg:grid-cols-5 gap-16">
				<div class="lg:col-span-2 space-y-10">
					<div>
						<span class="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Hablemos</span>
						<h2 class="text-5xl font-display font-bold dark:text-white leading-tight">Iniciemos tu próximo
							<span class="text-primary">Proyecto</span>
						</h2>
					</div>
					<div class="space-y-6">
						<a :href="contactLink.url" v-for="contactLink in contactLinks" :key="contactLink.name"
							class="flex items-center gap-6">
							<div class="w-10 h-10 glass-card flex items-center justify-center text-primary">
								<span :class="contactLink.icon"></span>
							</div>
							<div>
								<div class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{{ contactLink.name }}</div>
								<div class="text-sm dark:text-white">{{ contactLink.description }}</div>
							</div>
						</a>
					</div>
				</div>
				<div class="lg:col-span-3">
					<div class="double-border">
						<form @submit.prevent="submit" action="#" class="glass-card p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
							<div class="space-y-1">
								<label class="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Nombre</label>
								<input 
									type="text"
									v-model="name"
									:disabled="isProcessing" 
									placeholder="Juan Pérez" 
									:class="['input-base', { '!border-red-500 focus:border-red-500 rounded': errors.name }]" 
								/>
								<p v-if="errors.name" class="text-red-500 text-[11px]">{{ errors.name }}</p>
							</div>
							<div class="space-y-1">
								<label class="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Email</label>
								<input 
									v-model="email" 
									type="email" 
									placeholder="juan@email.com"
									:disabled="isProcessing" 
									:class="['input-base', { '!border-red-500 focus:!border-red-500 rounded': errors.email }]" 
								/>
								<p v-if="errors.email" class="text-red-500 text-[11px]">{{ errors.email }}</p>
							</div>
							<div class="space-y-0 md:col-span-2">
								<label class="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Mensaje</label>
								<textarea 
									rows="4"
									v-model="message" 
									:disabled="isProcessing" 
									:class="['w-full input-base resize-none', { '!border-red-500 focus:border-red-500 rounded': errors.message }]"
									placeholder="Hola, me gustaría conversar sobre..." 
								></textarea>
								<p v-if="errors.message" class="text-red-500 text-[11px]">{{ errors.message }}</p>
							</div>
							<div class="md:col-span-2 pt-4">
								<button :disabled="isProcessing" type="submit" class="btn-premium btn-primary w-full py-4 text-xs">
									<template v-if="isProcessing">
										<svg class="size-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
											<path class="opacity-75" fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
										</svg>
										<span>Procesando…</span>
									</template>

									<template v-else>
										Enviar Mensaje
									</template>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>