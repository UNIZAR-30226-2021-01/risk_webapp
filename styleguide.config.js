module.exports = {
	/*
	updateExample(props, exampleFilePath) {
		// props.settings are passed by any fenced code block, in this case
		const { settings, lang } = props
		// "../mySourceCode.js"
		if (typeof settings.file === 'string') {
			// "absolute path to mySourceCode.js"
			const filepath = path.resolve(exampleFilePath, settings.file)
			// displays the block as static code
			settings.static = true
			// no longer needed
			delete settings.file
			return {
				content: fs.readFileSync(filepath, 'utf8'),
				settings,
				lang,
			}
		}
		return props
	},
	*/
	styleguideDir: 'docs',
	title: 'Documentación de la aplicación web del proyecto.',
	usageMode: 'expand',
	ignore: ['**/partidaEstados.js'],
	sections: [
		{
			name: 'Introducción',
			content: 'docs/introduccion.md',
		},
		{
			name: 'Componentes de la aplicación',
			description:
				'En esta sección se describirán los componentes de la aplicación de react.',
			//exampleMode: 'expand',
			components: 'src/components/*.js',
			sections: [
				{
					name: 'App',
					description: 'Componente raíz de la aplicación.',
					components: 'src/App.js',
				},
				{
					name: 'Menú principal',
					description: 'Componentes básicos del menú principal.',
					components: 'src/components/menuPrincipal/*.js',
				},
				{
					name: 'Menú de salas',
					description: 'Componentes del menú de salas.',
					components: 'src/components/menuSala/*.js',
				},
				{
					name: 'Panel de amigos',
					description: 'Componentes del panel de amigos.',
					components: 'src/components/panelAmigos/*.js',
				},
				{
					name: 'Panel de notificaciones',
					description: 'Componentes del panel de notificaciones.',
					components: 'src/components/panelNotificaciones/*.js',
				},
				{
					name: 'Panel de partidas',
					description: 'Componentes del panel de partidas.',
					components: 'src/components/panelPartidas/*.js',
				},
				{
					name: 'Componentes de partida',
					description: 'Componentes de partida.',
					components: 'src/components/partida/*.js',
				},
				{
					name: 'Reglas del juego',
					description: 'Componentes de las reglas de juego.',
					components: 'src/components/Reglas/*.js',
				},
				{
					name: 'Componentes de cuenta y sesión',
					description: 'Componentes de loggeo y sesión.',
					components: 'src/components/sesion/*.js',
					sections: [
						{
							name: 'Componentes de formulario de sesión',
							description:
								'Entradas de formulario para facilitar la creación de formularios usando react-hook-form',
							components: 'src/components/sesion/entradasFormulario/*.js',
						},
					],
				},
				{
					name: 'Componentes de tienda',
					description: 'Componentes correspondientes a la tienda.',
					components: 'src/components/tienda/*.js',
				},
			],
		},
	],
}
