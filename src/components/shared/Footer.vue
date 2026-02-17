<script setup>
defineProps({
	currentYear: new Date().getFullYear(),
});
</script>

<template>
	<div class="max-w-7xl mx-auto p-8 flex flex-col md:flex-row items-center justify-between gap-8">
		<div class="flex flex-col items-center md:items-start">
			<div class="text-sm font-black tracking-widest text-primary mb-1">ANDRES HERNANDEZ.</div>
			<p class="text-[10px] text-slate-500 uppercase tracking-widest font-bold">© 2024 • Fullstack Developer</p>
		</div>
		<div class="flex gap-8">
			<a class="text-[10px] font-bold text-slate-400 hover:text-primary tracking-widest uppercase transition-colors" href="#">GitHub</a>
			<a class="text-[10px] font-bold text-slate-400 hover:text-primary tracking-widest uppercase transition-colors" href="#">LinkedIn</a>
			<a class="text-[10px] font-bold text-slate-400 hover:text-primary tracking-widest uppercase transition-colors" href="#">Twitter</a>
		</div>
	</div>
</template>