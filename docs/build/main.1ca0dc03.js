;(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	{
		100: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'OkServer', function () {
					return n
				})
			r(1)
			var t = r(4),
				a = r(2),
				n = function OkServer(A) {
					var e = A.serverOk
					return Object(a.jsx)(a.Fragment, {
						children:
							'' !== e &&
							Object(a.jsx)(t.b, {
								color: 'success',
								children: Object(a.jsxs)('p', { children: [' ', e] }),
							}),
					})
				}
		},
		1e3: function (A, e, r) {},
		1001: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Reglas',
				description:
					'Componente estático que muestra las reglas de juego, es un\ncontenedor en el que se muestran las reglas del juego\nestructuradas en parrafos.\nLas reglas están basadas en las del juego de mesa "Risk"\ny han sido adaptadas al formato que se pretende diseñar\nde forma que faciliten la jugabilidad en un entorno\nvirtual (web y movil).\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		1002: function (A, e, r) {
			'use strict'
			r.r(e)
			var t = r(6),
				a = r.n(t),
				n = r(9),
				c = r(8),
				o = r(1),
				s = r(215),
				i = r(19),
				g = r(23),
				O = r(12),
				d = r(108),
				u = r.n(d),
				D = r(140),
				l = r.n(D),
				w = r(4),
				C = r(15),
				B = r(103),
				E = (r(1004), r(2))
			e.default = function ActualizacionConfiguracion() {
				var A = Object(o.useContext)(O.default),
					e = Object(i.d)(),
					r = Object(o.useState)(A.auth.usuario),
					t = Object(c.a)(r, 2),
					d = t[0],
					D = t[1]
				var p = (function () {
						var e = Object(n.a)(
							a.a.mark(function _callee(e, r, t) {
								var n, c, o, s, i, O
								return a.a.wrap(function _callee$(a) {
									for (;;)
										switch ((a.prev = a.next)) {
											case 0:
												if (
													((n = ''.concat(
														g.default.BASE_SERVER_URL,
														'personalizarUsuario'
													)),
													(c = t[r]),
													(o = {
														method: 'POST',
														headers: {
															'Content-Type':
																'application/x-www-form-urlencoded',
														},
													}),
													((s = Object(C.obtenerCredenciales)(A)).nuevoDato =
														c),
													(s.tipo = (d = r)
														? d[0].toUpperCase() + d.slice(1)
														: d),
													console.log(e.usuario[r], '=?', c),
													e.usuario[r] === c)
												) {
													a.next = 28
													break
												}
												return (
													(o.body = l.a.stringify(s)),
													console.log(
														'Peticion de cambio de:',
														r,
														':',
														e.usuario[r],
														'=>',
														c
													),
													(a.next = 12),
													fetch(n, o)
												)
											case 12:
												return (i = a.sent), (a.next = 15), i.json()
											case 15:
												if (((O = a.sent), console.log(O), 0 === O.code)) {
													a.next = 21
													break
												}
												return a.abrupt('return', O)
											case 21:
												;(e.usuario[r] = c),
													A.setAuth(e),
													D(e.usuario),
													u.a.set(
														g.default.COOKIE_USER,
														e,
														g.default.OPTIONS_COOKIE
													)
											case 25:
												return a.abrupt('return', O)
											case 28:
												return a.abrupt('return', { code: 0 })
											case 29:
											case 'end':
												return a.stop()
										}
									var d
								}, _callee)
							})
						)
						return function actualizarCampo(A, r, t) {
							return e.apply(this, arguments)
						}
					})(),
					Q = (function () {
						var e = Object(n.a)(
							a.a.mark(function _callee2(e) {
								var r, t, n, c, o
								return a.a.wrap(function _callee2$(a) {
									for (;;)
										switch ((a.prev = a.next)) {
											case 0:
												;(r = A.auth),
													console.log(e),
													(t = [
														'nombre',
														'correo',
														'recibeCorreos',
														'icono',
														'aspecto',
													]),
													(e.icono = parseInt(e.icono)),
													(e.aspecto = parseInt(e.aspecto)),
													(n = 0)
											case 6:
												if (!(n < t.length)) {
													a.next = 15
													break
												}
												return (a.next = 9), p(r, t[n], e)
											case 9:
												if (0 === (c = a.sent).code) {
													a.next = 12
													break
												}
												return a.abrupt('return', c)
											case 12:
												n++, (a.next = 6)
												break
											case 15:
												if (!e.cambioClave) {
													a.next = 21
													break
												}
												return (a.next = 18), p(r, 'clave', e)
											case 18:
												if (0 === (o = a.sent).code) {
													a.next = 21
													break
												}
												return a.abrupt('return', o)
											case 21:
												return (
													Object(B.recargarUsuarioServer)(A),
													a.abrupt('return', { code: 0, err: '' })
												)
											case 23:
											case 'end':
												return a.stop()
										}
								}, _callee2)
							})
						)
						return function actualizarServer(A) {
							return e.apply(this, arguments)
						}
					})()
				return Object(E.jsxs)(w.g, {
					className: 'd-flex align-items-center flex-column',
					children: [
						Object(E.jsx)('h2', { children: ' Actualizar configuración ' }),
						Object(E.jsx)(s.default, {
							defaults: d,
							submitText: 'Actualizar',
							submitData: Q,
							iconos: A.auth.iconos,
							aspectos: A.auth.aspectos,
						}),
						Object(E.jsx)(w.d, {
							onClick: function onClick() {
								e.push('/eliminarCuenta')
							},
							children: 'Eliminar cuenta',
						}),
					],
				})
			}
		},
		1004: function (A, e, r) {},
		1005: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'ActualizacionConfiguracion',
				description:
					'ActualizacionConfiguracion, si la actualización es correcta actualiza las\ncookies de sesión al cliente y el contexto de la aplicación.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		1006: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'EliminarCuenta', function () {
					return B
				})
			var t = r(6),
				a = r.n(t),
				n = r(9),
				c = r(8),
				o = r(1),
				s = r(27),
				i = r(60),
				g = r.n(i),
				O = r(12),
				d = r(18),
				u = r(15),
				D = r(4),
				l = r(52),
				w = r(16),
				C = r(2),
				B = function EliminarCuenta() {
					var A = Object(o.useContext)(O.default),
						e = Object(s.a)({ defaultValues: { clave: '' } }),
						r = e.register,
						t = e.handleSubmit,
						i = e.errors,
						B = Object(o.useState)(!1),
						E = Object(c.a)(B, 2),
						p = E[0],
						Q = E[1],
						h = Object(o.useState)(''),
						j = Object(c.a)(h, 2),
						m = j[0],
						x = j[1]
					return Object(C.jsxs)(D.g, {
						id: 'cont-inicio',
						children: [
							Object(C.jsxs)('p', {
								children: [
									' ',
									'¿Estás seguro de que quieres eliminar tu cuenta? Esta acción es irreversible.',
								],
							}),
							Object(C.jsx)(D.D, {
								className: 'd-flex align-items-center flex-column',
								children: Object(C.jsx)(D.e, {
									md: '6',
									children: Object(C.jsxs)('form', {
										id: 'inicio',
										onSubmit: t(
											(function () {
												var e = Object(n.a)(
													a.a.mark(function _callee(e) {
														var r, t
														return a.a.wrap(function _callee$(a) {
															for (;;)
																switch ((a.prev = a.next)) {
																	case 0:
																		if (!p) {
																			a.next = 2
																			break
																		}
																		return a.abrupt('return', !1)
																	case 2:
																		return (
																			Q(!0),
																			((r = e).idUsuario = Object(
																				u.obtenerIdUsuario
																			)(A)),
																			(r.clave = g.a.sha256(e.clave)),
																			(a.next = 8),
																			Object(d.borrarCuenta)(r)
																		)
																	case 8:
																		;(t = a.sent),
																			Q(!1),
																			0 !== t.code
																				? x(t.err)
																				: (x(''), Object(O.logOut)(A))
																	case 11:
																	case 'end':
																		return a.stop()
																}
														}, _callee)
													})
												)
												return function (A) {
													return e.apply(this, arguments)
												}
											})()
										),
										children: [
											Object(C.jsx)(w.ErroresServer, { serverErrors: m }),
											Object(C.jsx)(l.EntradaClave, {
												titulo: 'Contraseña',
												register: r,
												errors: i,
											}),
											Object(C.jsx)('div', {
												className: 'text-center mt-4',
												children: Object(C.jsx)(D.d, {
													className: 'btn-danger btn-inicio',
													type: 'submit',
													disabled: p,
													children: 'Eliminar',
												}),
											}),
										],
									}),
								}),
							}),
						],
					})
				}
		},
		1007: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'EliminarCuenta',
				description:
					'Formulario para la eliminación de la cuenta. Pide de nuevo la contraseña\r\ndel usuario para verificar la eliminación de esta.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		1008: function (A, e, r) {
			A.exports = {
				doclets: {
					param:
						'{array_objeto} aspectos Lista de aspectos disponibles del usuario',
				},
				displayName: 'FormActualizar',
				description:
					'Representa un formulario de actualización de la cuenta, si algún valor es incorrecto\nno permite enviarlo. Solo envía los cambios de los valores modificados. Para cambiar\nla clave hay que marcar la casilla e introducir la contraseña nueva.\nEl formulario pide que el nombre de usuario sea no vacío, el correo tenga formato de\ncorreo y la contraseña sea no vacía.\n',
				methods: [],
				props: [
					{
						type: {
							name: 'arrayOf',
							value: {
								name: 'shape',
								value: { id: { name: 'number', required: !1 } },
							},
						},
						required: !1,
						description: '',
						tags: {},
						name: 'aspectos',
					},
					{
						type: { name: 'any' },
						required: !1,
						description: 'Valores por defecto del formulario',
						tags: {},
						name: 'defaults',
					},
					{
						type: {
							name: 'arrayOf',
							value: {
								name: 'shape',
								value: { id: { name: 'number', required: !1 } },
							},
						},
						required: !1,
						description: '',
						tags: {},
						name: 'iconos',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: 'Función que se ejecutarla al enviar el formulario.',
						tags: {
							param: [
								{
									title: 'param',
									description: null,
									type: { type: 'NameExpression', name: 'datos_formulario' },
									name: 'formData',
								},
							],
							returns: [
								{ title: 'returns', description: 'code y err', type: null },
							],
						},
						name: 'submitData',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: 'Texto del botón de enviar formulario',
						tags: {},
						name: 'submitText',
					},
				],
				tags: {
					param: [
						{
							title: 'param',
							description: 'Valores por defecto del formulario',
							type: { type: 'NameExpression', name: 'ObjectSesion' },
							name: 'defaults',
						},
						{
							title: 'param',
							description: 'Texto del botón de enviar formulario',
							type: { type: 'NameExpression', name: 'string' },
							name: 'submitText',
						},
						{
							title: 'param',
							description: 'Función ejecutada al enviar el formulario',
							type: { type: 'NameExpression', name: 'función' },
							name: 'submitData',
						},
						{
							title: 'param',
							description: 'Lista de iconos disponibles del usuario',
							type: { type: 'NameExpression', name: 'array_objeto' },
							name: 'iconos',
						},
						{
							title: 'param',
							description: 'Lista de aspectos disponibles del usuario',
							type: { type: 'NameExpression', name: 'array_objeto' },
							name: 'aspectos',
						},
					],
				},
				examples: null,
			}
		},
		1009: function (A, e, r) {},
		101: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'EntradaNumero', function () {
					return n
				})
			r(1)
			var t = r(34),
				a = r(2),
				n = function EntradaNumero(A) {
					var e = A.register,
						r = A.errors,
						n = A.texto,
						c = void 0 === n ? 'Numero' : n,
						o = A.label,
						s = void 0 === o ? 'Tiempo' : o
					return Object(a.jsxs)(a.Fragment, {
						children: [
							Object(a.jsx)('label', {
								htmlFor: s,
								className: 'black-text',
								children: c,
							}),
							Object(a.jsx)('input', {
								type: 'number',
								name: s,
								id: s,
								className: 'form-control',
								placeholder: '0',
								ref: e(),
							}),
							Object(a.jsx)(t.default, { error: r.numero }),
						],
					})
				}
		},
		1010: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'FormInicio',
				description:
					'Representa un formulario de inicio de sesión de la cuenta, si algún\nvalor es incorrecto no permite enviarlo.\nEl formulario pide que el campo de correo o nombre de usuario sea\nno vacío y la contraseña también.\n',
				methods: [],
				props: [
					{
						type: { name: 'any' },
						required: !1,
						description: 'Valores por defecto del formulario',
						tags: {},
						name: 'defaults',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: 'Función llamada al enviar los datos',
						tags: {
							param: [
								{
									title: 'param',
									description: null,
									type: { type: 'NameExpression', name: 'datos_formulario' },
									name: 'formData',
								},
							],
						},
						name: 'makePetition',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: 'Texto del botón de enviar formulario',
						tags: {},
						name: 'submitText',
					},
				],
				tags: {},
				examples: null,
			}
		},
		1011: function (A, e, r) {},
		1012: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'FormRegistro',
				description:
					'Representa un formulario de registro de la cuenta, si algún valor es incorrecto\nno permite enviarlo.\nEl formulario requiere que el nombre de usuario sea no vacío, el correo tenga\nformato de correo y la contraseña sea no vacía.\n',
				methods: [],
				props: [
					{
						type: { name: 'any' },
						required: !1,
						description: 'Valores por defecto del formulario.',
						tags: {},
						name: 'defaults',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: 'Función llamada al enviar el formulario.',
						tags: {
							param: [
								{
									title: 'param',
									description: null,
									type: { type: 'NameExpression', name: 'datos_formulario' },
									name: 'formData',
								},
							],
							returns: [
								{
									title: 'returns',
									description: 'error',
									type: { type: 'NameExpression', name: 'shape_code' },
								},
							],
						},
						name: 'makePetition',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: 'Función llamada si makePetition no devuelve error.',
						tags: {
							param: [
								{
									title: 'param',
									description: null,
									type: { type: 'NameExpression', name: 'datos_formulario' },
									name: 'formData',
								},
							],
						},
						name: 'siValido',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: 'Texto del botón de enviar formulario.',
						tags: {},
						name: 'submitText',
					},
				],
				tags: {},
				examples: null,
			}
		},
		1013: function (A, e, r) {
			'use strict'
			r.r(e)
			r(1)
			var t = r(217),
				a = r(23),
				n = r(18),
				c = r(22),
				o = r(4),
				s = r(2)
			e.default = function InicioSesion() {
				return Object(s.jsxs)(o.g, {
					className: 'd-flex align-items-center flex-column',
					children: [
						Object(s.jsx)('h2', { children: ' Iniciar sesión' }),
						Object(s.jsx)(t.default, {
							defaults: a.default.NULL_VALUES.usuario,
							submitText: 'Aceptar',
							makePetition: n.inicioSesion,
						}),
						Object(s.jsx)(o.g, {
							className: 'cont-estandar d-flex align-items-center flex-column',
							children: Object(s.jsxs)('p', {
								children: [
									'Si no tienes cuenta, ',
									Object(s.jsx)(c.a, {
										to: '/registro',
										children: ' regístrate ',
									}),
									Object(s.jsx)('br', {}),
									'¿Has olvidado tu contraseña?',
									' ',
									Object(s.jsx)(c.a, {
										to: '/solicitarRestablecer',
										children: 'Reestablézcala aquí. ',
									}),
								],
							}),
						}),
					],
				})
			}
		},
		1014: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'InicioSesion',
				description:
					'Inicio de sesion, si el inicio de sesión es correcto añade las cookies\nde sesión al cliente y en el contexto de la aplicación.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		1015: function (A, e, r) {
			'use strict'
			r.r(e)
			r(1)
			var t = r(219),
				a = r(23),
				n = r(12),
				c = r(18),
				o = r(22),
				s = r(4),
				i = r(2)
			e.default = function Registrar() {
				return Object(i.jsxs)(s.g, {
					className: 'd-flex align-items-center flex-column',
					children: [
						Object(i.jsx)('h2', { children: ' Crear cuenta' }),
						Object(i.jsx)(t.default, {
							defaults: a.default.NULL_VALUES.usuario,
							submitText: 'Registrarse',
							makePetition: c.registrarse,
							siValido: n.registrarseLocal,
						}),
						Object(i.jsx)(s.g, {
							className: 'cont-estandar d-flex align-items-center flex-column',
							children: Object(i.jsxs)('p', {
								children: [
									'Si ya tienes cuenta, ',
									Object(i.jsx)(o.a, {
										to: '/inicioSesion',
										children: 'inicia sesión',
									}),
								],
							}),
						}),
					],
				})
			}
		},
		1016: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Registrar',
				description:
					'Crea una cuenta del usuario, si el registro es correcto añade las\ncookies de sesión al cliente y en el contexto de la aplicación.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		1017: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'RestablecerClave', function () {
					return C
				})
			var t = r(6),
				a = r.n(t),
				n = r(9),
				c = r(8),
				o = r(1),
				s = r(4),
				i = r(27),
				g = r(52),
				O = r(16),
				d = r(19),
				u = r(18),
				D = r(60),
				l = r.n(D),
				w = (r(181), r(2)),
				C = function RestablecerClave() {
					var A = Object(d.e)().token,
						e = Object(d.d)(),
						r = Object(i.a)({ clave: '' }),
						t = r.register,
						D = r.handleSubmit,
						C = r.errors,
						B = Object(o.useState)(''),
						E = Object(c.a)(B, 2),
						p = E[0],
						Q = E[1],
						h = Object(o.useState)(!1),
						j = Object(c.a)(h, 2),
						m = j[0],
						x = j[1]
					return Object(w.jsxs)(s.g, {
						id: 'cont-actualizar',
						children: [
							Object(w.jsx)('h3', {
								children: ' Introduzca la nueva contraseña',
							}),
							Object(w.jsxs)('form', {
								id: 'registro',
								onSubmit: D(
									(function () {
										var r = Object(n.a)(
											a.a.mark(function _callee(r) {
												var t, n
												return a.a.wrap(function _callee$(a) {
													for (;;)
														switch ((a.prev = a.next)) {
															case 0:
																return (
																	x(!0),
																	(t = { clave: l()(r.clave), token: A }),
																	(a.next = 4),
																	Object(u.restablecerClave)(t)
																)
															case 4:
																;(n = a.sent),
																	x(!1),
																	0 !== n.code
																		? Q(n.err)
																		: e.push('/inicioSesion')
															case 7:
															case 'end':
																return a.stop()
														}
												}, _callee)
											})
										)
										return function (A) {
											return r.apply(this, arguments)
										}
									})()
								),
								children: [
									Object(w.jsx)(O.ErroresServer, { serverErrors: p }),
									Object(w.jsx)(g.EntradaClave, {
										titulo: 'Nueva contraseña',
										register: t,
										errors: C,
									}),
									Object(w.jsx)('div', {
										className: 'text-center mt-4',
										children: Object(w.jsx)(s.d, {
											type: 'submit',
											disabled: m,
											children: 'Restablecer',
										}),
									}),
								],
							}),
						],
					})
				}
		},
		1018: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'RestablecerClave',
				description:
					'Muestra un formulario para establecer la nueva contraseña en una cuenta\r\ndado un token recibido como parámetro en la URL.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		1019: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'SolicitarRestablecer', function () {
					return l
				})
			var t = r(6),
				a = r.n(t),
				n = r(9),
				c = r(8),
				o = r(1),
				s = r(4),
				i = r(27),
				g = r(78),
				O = r(16),
				d = r(18),
				u = (r(181), r(100)),
				D = r(2),
				l = function SolicitarRestablecer() {
					var A = Object(i.a)({ clave: '' }),
						e = A.register,
						r = A.handleSubmit,
						t = A.errors,
						l = Object(o.useState)(''),
						w = Object(c.a)(l, 2),
						C = w[0],
						B = w[1],
						E = Object(o.useState)(!1),
						p = Object(c.a)(E, 2),
						Q = p[0],
						h = p[1],
						j = Object(o.useState)(''),
						m = Object(c.a)(j, 2),
						x = m[0],
						I = m[1]
					return Object(D.jsxs)(s.g, {
						id: 'cont-actualizar',
						children: [
							Object(D.jsx)('h3', {
								children:
									'Introduca su correo para solicitar el restablecimiento de la contraseña.',
							}),
							Object(D.jsxs)('form', {
								id: 'registro',
								onSubmit: r(
									(function () {
										var A = Object(n.a)(
											a.a.mark(function _callee(A) {
												var e, r
												return a.a.wrap(function _callee$(t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	h(!0),
																	(e = { correo: A.correo }),
																	(t.next = 4),
																	Object(d.solicitarRestablecerClave)(e)
																)
															case 4:
																;(r = t.sent),
																	h(!1),
																	0 !== r.code
																		? (I(''), B(r.err))
																		: (I(
																				'En breve le enviaremos un correo con las instrucciones para restablecer la contraseña.'
																		  ),
																		  B(''))
															case 7:
															case 'end':
																return t.stop()
														}
												}, _callee)
											})
										)
										return function (e) {
											return A.apply(this, arguments)
										}
									})()
								),
								children: [
									Object(D.jsx)(O.ErroresServer, { serverErrors: C }),
									Object(D.jsx)(u.OkServer, { serverOk: x }),
									Object(D.jsx)(g.EntradaCorreo, {
										titulo: 'Introduzca su correo:',
										register: e,
										errors: t,
									}),
									Object(D.jsx)('div', {
										className: 'text-center mt-4',
										children: Object(D.jsx)(s.d, {
											type: 'submit',
											disabled: Q,
											children: 'Restablecer',
										}),
									}),
								],
							}),
						],
					})
				}
		},
		102: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'RecibeCorreos', function () {
					return a
				})
			r(1)
			var t = r(2),
				a = function RecibeCorreos(A) {
					var e = A.register
					return Object(t.jsxs)(t.Fragment, {
						children: [
							Object(t.jsxs)('label', {
								htmlFor: 'recibeCorreos',
								className: 'black-text',
								children: [' ', 'Quiero recibir correo:', ' '],
							}),
							Object(t.jsx)('input', {
								type: 'checkbox',
								name: 'recibeCorreos',
								id: 'recibeCorreos',
								className: 'form-control',
								ref: e(),
							}),
						],
					})
				}
		},
		1020: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'SolicitarRestablecer',
				description:
					'Muestra un formulario para solicitar restablecer una cuenta dado un correo.\r\nNo se permite mediante el nombre de usuario de la cuenta.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		1021: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'EntradaAmigo',
				description:
					'EntradaAmigo es un campo de formulario para el nombre de usuario de un amigo\n',
				methods: [],
				props: [
					{
						type: { name: 'any' },
						required: !1,
						description: 'Errores del formulario correspondiente.',
						tags: {},
						name: 'errors',
					},
					{
						type: { name: 'any' },
						required: !1,
						description: 'Registro del formulario al que pertenece.',
						tags: {},
						name: 'register',
					},
				],
				tags: {},
				examples: null,
			}
		},
		1022: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'EntradaCambioClave',
				description:
					'EntradaCambioClave es un campo de formulario para indicar que se quiere\ncambiar la clave.\n',
				methods: [],
				props: [
					{
						type: { name: 'any' },
						required: !1,
						description: 'Errores del formulario correspondiente.',
						tags: {},
						name: 'errors',
					},
					{
						type: { name: 'any' },
						required: !1,
						description: 'Registro del formulario al que pertenece.',
						tags: {},
						name: 'register',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: 'Etiqueta de título.',
						tags: {},
						name: 'titulo',
					},
				],
				tags: {},
				examples: null,
			}
		},
		1023: function (A, e, r) {
			A.exports = {
				doclets: { param: '{errors_form} errors Errores del registro' },
				displayName: 'EntradaClave',
				description: 'EntradaClave es un campo de formulario para la clave\n',
				methods: [],
				props: [
					{
						type: { name: 'any' },
						required: !1,
						description: 'Errores del formulario correspondiente.',
						tags: {},
						name: 'errors',
					},
					{
						type: { name: 'any' },
						required: !1,
						description: 'Registro del formulario al que pertenece.',
						tags: {},
						name: 'register',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: 'Etiqueta de título.',
						tags: {},
						name: 'titulo',
					},
				],
				tags: {
					param: [
						{
							title: 'param',
							description: 'Etiqueta para la clave',
							type: { type: 'NameExpression', name: 'string' },
							name: 'titulo',
						},
						{
							title: 'param',
							description: 'Formulario al que pertenece',
							type: { type: 'NameExpression', name: 'form' },
							name: 'register',
						},
						{
							title: 'param',
							description: 'Errores del registro',
							type: { type: 'NameExpression', name: 'errors_form' },
							name: 'errors',
						},
					],
				},
				examples: null,
			}
		},
		1024: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'EntradaCorreo',
				description:
					'EntradaCorreo es un campo de formulario para el correo que\nverifica que lo introducido tenga forma de correo.\n',
				methods: [],
				props: [
					{
						type: { name: 'any' },
						required: !1,
						description: 'Errores del formulario correspondiente.',
						tags: {},
						name: 'errors',
					},
					{
						type: { name: 'any' },
						required: !1,
						description: 'Registro del formulario al que pertenece.',
						tags: {},
						name: 'register',
					},
				],
				tags: {},
				examples: null,
			}
		},
		1025: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'EntradaImg',
				description:
					'EntradaImg es un selector de imagen entre una serie de disponibles\nmediante flechas y una lista de disponibles.\n',
				methods: [],
				props: [
					{
						type: {
							name: 'arrayOf',
							value: {
								name: 'shape',
								value: { id: { name: 'number', required: !1 } },
							},
						},
						required: !1,
						description: 'Array de disponibles.',
						tags: {},
						name: 'disponibles',
					},
					{
						type: { name: 'any' },
						required: !1,
						description: 'Errores del formulario correspondiente.',
						tags: {},
						name: 'errors',
					},
					{
						type: { name: 'arrayOf', value: { name: 'any' } },
						required: !1,
						description: 'Array de imágenes correspondientes.',
						tags: {},
						name: 'imagenes',
					},
					{
						type: { name: 'number' },
						required: !1,
						description: 'Valor inicial del formulario.',
						tags: {},
						name: 'inicial',
					},
					{
						type: { name: 'any' },
						required: !1,
						description: 'Registro del formulario al que pertenece.',
						tags: {},
						name: 'register',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: 'Nombre del campo.',
						tags: {},
						name: 'tag',
					},
				],
				tags: {},
				examples: null,
			}
		},
		1026: function (A, e, r) {
			A.exports = {
				doclets: { param: '{errors_form} errors Errores del registro' },
				displayName: 'EntradaNombre',
				description:
					'EntradaNumero es un campo de formulario para un numero.\n',
				methods: [],
				props: [
					{
						type: { name: 'any' },
						required: !1,
						description: 'Errores del formulario correspondiente.',
						tags: {},
						name: 'errors',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: 'Etiqueta del formulario.',
						defaultValue: { value: "'nombre'", computed: !1 },
						tags: {},
						name: 'label',
					},
					{
						type: { name: 'any' },
						required: !1,
						description: 'Registro del formulario al que pertenece.',
						tags: {},
						name: 'register',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: 'Texto de la etiqueta.',
						defaultValue: { value: "'Nombre de usuario'", computed: !1 },
						tags: {},
						name: 'texto',
					},
				],
				tags: {
					param: [
						{
							title: 'param',
							description: 'Formulario al que pertenece',
							type: { type: 'NameExpression', name: 'form' },
							name: 'register',
						},
						{
							title: 'param',
							description: 'Errores del registro',
							type: { type: 'NameExpression', name: 'errors_form' },
							name: 'errors',
						},
					],
				},
				examples: null,
			}
		},
		1027: function (A, e, r) {
			A.exports = {
				doclets: { param: '{errors_form} errors Errores del registro' },
				displayName: 'EntradaNumero',
				description: 'EntradaNombre es un campo de formulario para un numero\n',
				methods: [],
				props: [
					{
						type: { name: 'any' },
						required: !1,
						description: 'Errores del formulario correspondiente.',
						tags: {},
						name: 'errors',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: 'Etiqueta del formulario.',
						defaultValue: { value: "'Tiempo'", computed: !1 },
						tags: {},
						name: 'label',
					},
					{
						type: { name: 'any' },
						required: !1,
						description: 'Registro del formulario al que pertenece.',
						tags: {},
						name: 'register',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: 'Texto de la etiqueta.',
						defaultValue: { value: "'Numero'", computed: !1 },
						tags: {},
						name: 'texto',
					},
				],
				tags: {
					param: [
						{
							title: 'param',
							description: 'Formulario al que pertenece',
							type: { type: 'NameExpression', name: 'form' },
							name: 'register',
						},
						{
							title: 'param',
							description: 'Errores del registro',
							type: { type: 'NameExpression', name: 'errors_form' },
							name: 'errors',
						},
					],
				},
				examples: null,
			}
		},
		1028: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'EntradaOcultaHash', function () {
					return a
				})
			r(1)
			var t = r(2),
				a = function EntradaOcultaHash(A) {
					var e = A.register,
						r = A.value
					return Object(t.jsx)(t.Fragment, {
						children: Object(t.jsx)('input', {
							type: 'hidden',
							name: 'clave',
							id: 'clave',
							value: r,
							ref: e(),
						}),
					})
				}
		},
		1029: function (A, e, r) {
			A.exports = {
				doclets: {
					param: '{int} value Hash de la contraseña del usuario',
					deprecated: 'Usar la api de usuarioVO',
				},
				displayName: 'EntradaOcultaHash',
				description:
					'EntradaOcultaHash es un campo oculto para la clave hasheada\n',
				methods: [],
				tags: {
					param: [
						{
							title: 'param',
							description: 'Formulario al que pertenece',
							type: { type: 'NameExpression', name: 'form' },
							name: 'register',
						},
						{
							title: 'param',
							description: 'Hash de la contraseña del usuario',
							type: { type: 'NameExpression', name: 'int' },
							name: 'value',
						},
					],
					deprecated: [
						{ title: 'deprecated', description: 'Usar la api de usuarioVO' },
					],
				},
				props: [],
				examples: null,
			}
		},
		103: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'recargarUsuarioServer', function () {
					return i
				})
			var t = r(6),
				a = r.n(t),
				n = r(9),
				c = r(12),
				o = r(15),
				s = r(18),
				i = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee(A) {
							var e, r
							return a.a.wrap(function _callee$(t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												console.log(A),
												(e = Object(o.obtenerCredenciales)(A)),
												(t.next = 4),
												Object(s.recargarUsuario)(e)
											)
										case 4:
											;(r = t.sent).err
												? Object(c.logOut)(A)
												: Object(c.registrarseLocal)(A, r)
										case 6:
										case 'end':
											return t.stop()
									}
							}, _callee)
						})
					)
					return function recargarUsuarioServer(e) {
						return A.apply(this, arguments)
					}
				})()
		},
		1030: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'EntradaOcultaId', function () {
					return a
				})
			r(1)
			var t = r(2),
				a = function EntradaOcultaId(A) {
					var e = A.register,
						r = A.value
					return Object(t.jsx)(t.Fragment, {
						children: Object(t.jsx)('input', {
							type: 'hidden',
							name: 'idUsuario',
							id: 'idUsuario',
							value: r,
							ref: e(),
						}),
					})
				}
		},
		1031: function (A, e, r) {
			A.exports = {
				doclets: {
					param: '{int} value Id del usuario',
					deprecated: 'Usar la api de usuarioVO',
				},
				displayName: 'EntradaOcultaId',
				description:
					'EntradaOcultaHash es un campo oculto para el id del usuario.\n',
				methods: [],
				tags: {
					param: [
						{
							title: 'param',
							description: 'Formulario al que pertenece',
							type: { type: 'NameExpression', name: 'form' },
							name: 'register',
						},
						{
							title: 'param',
							description: 'Id del usuario',
							type: { type: 'NameExpression', name: 'int' },
							name: 'value',
						},
					],
					deprecated: [
						{ title: 'deprecated', description: 'Usar la api de usuarioVO' },
					],
				},
				props: [],
				examples: null,
			}
		},
		1032: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'EntradaUsuario',
				description: 'Campo de formulario para nombre de usuario o correo.\n',
				methods: [],
				props: [
					{
						type: { name: 'any' },
						required: !1,
						description: 'Errores del formulario correspondiente.',
						tags: {},
						name: 'errors',
					},
					{
						type: { name: 'any' },
						required: !1,
						description: 'Registro del formulario al que pertenece.',
						tags: {},
						name: 'register',
					},
				],
				tags: {},
				examples: null,
			}
		},
		1033: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'ErroresCampo',
				description: 'Muestra un string como error si error no es vacío.\n',
				methods: [],
				props: [
					{
						type: { name: 'any' },
						required: !1,
						description: 'Error del formulario, si no existe no se muestra.',
						tags: {},
						name: 'error',
					},
				],
				tags: {},
				examples: null,
			}
		},
		1034: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'ErroresServer',
				description:
					'Muestra los errores del servidor si hay como mensaje\nde error.\n',
				methods: [],
				props: [
					{
						type: { name: 'string' },
						required: !1,
						description: 'Error del formulario, si no existe no se muestra.',
						tags: {},
						name: 'serverErrors',
					},
				],
				tags: {},
				examples: null,
			}
		},
		1035: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'OkServer',
				description:
					'Da feedback al usuario si serverOk no es vacío, como\nun mensaje de éxito.\n',
				methods: [],
				props: [
					{
						type: { name: 'string' },
						required: !1,
						description: 'String que se mostrará si no es vacía.',
						tags: {},
						name: 'serverOk',
					},
				],
				tags: {},
				examples: null,
			}
		},
		1036: function (A, e, r) {
			A.exports = {
				doclets: { param: '{form} register Formulario al que pertenece' },
				displayName: 'RecibeCorreos',
				description:
					'RecibeCorreos es un campo de formulario para la recepción de correos.\n',
				methods: [],
				props: [
					{
						type: { name: 'any' },
						required: !1,
						description: 'Registro del formulario al que pertenece.',
						tags: {},
						name: 'register',
					},
				],
				tags: {
					param: [
						{
							title: 'param',
							description: 'Formulario al que pertenece',
							type: { type: 'NameExpression', name: 'form' },
							name: 'register',
						},
					],
				},
				examples: null,
			}
		},
		1037: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'ElementoTienda',
				description:
					'Muestra los datos del elemento recibido como parámetro según su tipo.\n',
				methods: [],
				props: [
					{
						type: {
							name: 'shape',
							value: {
								precio: { name: 'number', required: !1 },
								id: { name: 'number', required: !1 },
							},
						},
						required: !1,
						description: '',
						tags: {},
						name: 'datos',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: '',
						tags: {},
						name: 'tipo',
					},
				],
				tags: {},
				examples: null,
			}
		},
		1038: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'ListaElementos',
				description: 'Muestra la lista de objetos recibidos\n',
				methods: [],
				props: [
					{
						type: {
							name: 'arrayOf',
							value: {
								name: 'shape',
								value: { id: { name: 'number', required: !1 } },
							},
						},
						required: !1,
						description: 'Objetos a mostrar',
						tags: {},
						name: 'objetos',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: 'Tipo del elemento a mostrar',
						tags: {},
						name: 'tipo',
					},
				],
				tags: {},
				examples: null,
			}
		},
		1039: function (A, e, r) {
			'use strict'
			r.r(e)
			var t = r(10),
				a = r(8),
				n = r(1),
				c = r(12),
				o = r(4),
				s = r(142),
				i = (r(1040), r(15)),
				g = r(2)
			e.default = function Tienda() {
				var A = Object(n.useContext)(c.default),
					e = Object(n.useState)({ justified: '1' }),
					r = Object(a.a)(e, 2),
					O = r[0],
					d = r[1]
				console.log(Object(i.obtenerIconosTienda)(A), 'iconos'),
					console.log(Object(i.obtenerAspectosTienda)(A), 'aspectos')
				var u = Object(i.obtenerIconosTienda)(A).filter(function (e) {
						return !A.auth.iconos.some(function (A) {
							return e.id == A.id
						})
					}),
					D = Object(i.obtenerAspectosTienda)(A).filter(function (e) {
						return !A.auth.aspectos.some(function (A) {
							return e.id == A.id
						})
					})
				console.log(u, 'iconosSinComprar'), console.log(D, 'aspectosSinComprar')
				var l = function togglePills(A, e) {
					return function (r) {
						if ((r.preventDefault(), O.justified !== e)) {
							var a = Object(t.a)({}, O)
							;(a[A] = e), d(a)
						}
					}
				}
				return Object(g.jsxs)(o.g, {
					className: 'mt-4 contenedor-pills',
					children: [
						Object(g.jsxs)(o.u, {
							className: 'nav-pills nav-justified ',
							children: [
								Object(g.jsx)(o.v, {
									className: 'my-2',
									children: Object(g.jsx)(o.w, {
										link: !0,
										to: '#',
										active: '1' === O.justified,
										onClick: l('justified', '1'),
										children: 'Iconos',
									}),
								}),
								Object(g.jsx)(o.v, {
									className: 'my-2',
									children: Object(g.jsx)(o.w, {
										link: !0,
										to: '#',
										active: '2' === O.justified,
										onClick: l('justified', '2'),
										children: 'Aspectos',
									}),
								}),
							],
						}),
						Object(g.jsxs)(o.E, {
							activeItem: O.justified,
							children: [
								Object(g.jsx)(o.F, {
									tabId: '1',
									children: Object(g.jsx)(s.default, {
										objetos: u,
										tipo: 'Icono',
									}),
								}),
								Object(g.jsx)(o.F, {
									tabId: '2',
									children: Object(g.jsx)(s.default, {
										objetos: D,
										tipo: 'Aspecto',
									}),
								}),
							],
						}),
					],
				})
			}
		},
		1040: function (A, e, r) {},
		1041: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Tienda',
				description:
					'Componente de tienda de la aplicación, contiene 2 ventanas, una con los\niconos por comprar y otro con los aspectos según los que ya tiene el\nusuario.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		1042: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'AuthApi',
				methods: [],
				props: [],
				examples: null,
			}
		},
		1043: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'AuthServer',
				methods: [],
				props: [],
				examples: null,
			}
		},
		1044: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Constants',
				methods: [],
				props: [],
				examples: null,
			}
		},
		1045: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'FotoPerfil',
				methods: [],
				props: [],
				examples: null,
			}
		},
		1046: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Mapa',
				methods: [],
				props: [],
				examples: null,
			}
		},
		1047: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'RestAPI',
				methods: [],
				props: [],
				examples: null,
			}
		},
		1048: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'SalaApi',
				methods: [],
				props: [],
				examples: null,
			}
		},
		1049: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Tiempo',
				methods: [],
				props: [],
				examples: null,
			}
		},
		1050: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'UsuarioVO',
				methods: [],
				props: [],
				examples: null,
			}
		},
		1052: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'Header', function () {
					return u
				})
			var t = r(8),
				a = r(1),
				n = r(12),
				c = (r(940), r(4)),
				o = r(22),
				s = r(47),
				i = r(59),
				g = r(139),
				O = r.p + 'static/media/titulo.77306b09.png',
				d = r(2),
				u = function Header() {
					var A = Object(a.useContext)(n.default),
						e = Object(a.useState)({ isOpen: !0 }),
						r = Object(t.a)(e, 2),
						u = r[0],
						D = r[1]
					return Object(d.jsxs)(c.x, {
						dark: !0,
						expand: 'md',
						children: [
							Object(d.jsx)(c.y, {
								children: Object(d.jsx)(o.a, {
									to: '/',
									children: Object(d.jsx)('img', { src: O }),
								}),
							}),
							Object(d.jsx)(c.A, {
								onClick: function toggleCollapse() {
									D({ isOpen: !u.isOpen })
								},
							}),
							Object(d.jsxs)(c.f, {
								id: 'navbarCollapse3',
								isOpen: u.isOpen,
								navbar: !0,
								children: [
									Object(d.jsxs)(c.z, {
										left: !0,
										children: [
											A.auth.logged &&
												Object(d.jsx)(d.Fragment, {
													children: Object(d.jsx)(c.v, {
														style: { marginRight: '3rem' },
														children: Object(d.jsx)(o.a, {
															className: 'dropdown-item',
															to: '/tienda',
															children: 'Tienda',
														}),
													}),
												}),
											Object(d.jsx)(c.v, {
												style: { marginRight: '3rem' },
												children: Object(d.jsx)(o.a, {
													className: 'dropdown-item',
													to: '/Reglas',
													children: 'Reglas',
												}),
											}),
										],
									}),
									Object(d.jsx)(c.z, {
										right: !0,
										children:
											A.auth.logged &&
											Object(d.jsxs)(d.Fragment, {
												children: [
													Object(d.jsx)(c.v, {
														children: Object(d.jsxs)('div', {
															className: 'riskos-head',
															children: [
																Object(d.jsx)('img', {
																	src: g.a,
																	className: 'riskos-img',
																}),
																Object(d.jsx)('div', {
																	className: 'd-none d-md-inline',
																	id: 'riskos-num',
																	children: A.auth.usuario.riskos,
																}),
															],
														}),
													}),
													Object(d.jsx)(c.v, {
														style: { marginRight: '3rem' },
														children: Object(d.jsxs)(c.h, {
															children: [
																Object(d.jsxs)(c.k, {
																	nav: !0,
																	caret: !0,
																	children: [
																		Object(d.jsx)('img', {
																			src: s.a[A.auth.usuario.icono].img,
																			className: 'icono',
																		}),
																		Object(d.jsx)('img', {
																			src: i.a,
																			className: 'marco-icono',
																		}),
																		Object(d.jsx)('div', {
																			className: 'd-none d-md-inline',
																			id: 'head-user',
																			children: A.auth.usuario.nombre,
																		}),
																	],
																}),
																Object(d.jsxs)(c.j, {
																	className: 'dropdown-default',
																	children: [
																		Object(d.jsx)(o.a, {
																			className: 'dropdown-item',
																			to: '/actualizarCuenta',
																			children: 'Ajustes de usuario',
																		}),
																		Object(d.jsx)(c.i, {
																			onClick: function onClick() {
																				Object(n.logOut)(A)
																			},
																			href: '#',
																			children: 'Cerrar sesión',
																		}),
																	],
																}),
															],
														}),
													}),
												],
											}),
									}),
								],
							}),
						],
					})
				}
			e.default = u
		},
		1053: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'Partida', function () {
					return I
				})
			var t = r(8),
				a = r(10),
				n = r(1),
				c = r(19),
				o = {
					label: 'Mapa del risk',
					viewBox: '0 0 1024 650',
					locations: [
						{
							id: '0',
							name: 'Europa Occidental',
							conexiones: [1, 2, 4, 7],
							path: 'M428 312c-1,-2 -3,-3 -4,-5 -3,0 -6,0 -9,0 -3,-11 -2,-19 -1,-31 0,0 0,-1 -1,-1 3,-12 15,-7 26,-7 5,-6 0,-16 -1,-22 -4,-1 -4,-1 -8,-4 3,-1 3,-1 4,-4 1,0 2,0 3,0 0,1 0,1 0,2 6,-2 6,-2 7,-3 0,0 -1,0 -2,-1 0,-1 0,-1 0,-2 2,0 5,0 8,0 1,-1 1,-1 2,-5 3,0 3,0 3,-2 3,4 7,6 9,11 3,0 4,1 6,4 -6,5 -9,22 -1,26 -1,1 -1,2 -1,3 -4,0 -8,0 -12,1 -6,11 -7,12 -7,25 -1,3 -4,5 -6,8 -6,1 -10,2 -14,7 0,0 -1,0 -1,0z',
						},
						{
							id: '1',
							name: 'Europa del Norte',
							conexiones: [0, 2, 3, 4, 6],
							path: 'M470 242c-2,-3 -3,-4 -6,-4 -2,-5 -6,-7 -9,-11 0,0 0,-1 0,-1 2,-3 4,-6 7,-7 2,-8 2,-8 4,-9 0,0 0,1 1,1 3,-4 6,-6 1,-10 0,-4 1,-8 2,-12 4,-2 5,-3 7,-7 1,6 3,15 -2,19 5,3 9,4 14,5 0,-1 1,-2 1,-3 1,1 2,2 2,3 4,-4 9,-4 14,-5 0,1 -1,2 -1,3 1,0 1,0 2,1 0,-1 0,-2 0,-3 1,0 3,-1 4,-1 3,2 6,4 9,6 2,8 3,14 3,23 -1,0 -2,0 -3,0 0,2 -1,3 -1,5 -2,5 -2,5 -4,16 -6,4 -8,3 -15,2 -1,-15 2,-14 -12,-15 0,2 -1,3 -1,5 -8,2 -10,2 -17,-1z',
						},
						{
							id: '2',
							name: 'Europa del Sur',
							conexiones: [0, 1, 6, 7, 8, 13],
							path: 'M521 316c-1,-2 -1,-2 -4,-3 0,-1 0,-2 0,-3 10,1 10,1 15,3 0,1 0,2 1,3 -4,0 -8,0 -12,0z M474 288c-1,-3 -1,-6 -2,-10 1,0 2,0 3,0 0,3 0,6 1,9 -1,0 -2,1 -2,1z M527 289c-1,0 -2,0 -3,0 0,0 1,1 1,1 -1,0 -2,0 -2,1 0,-3 0,-3 -2,-3 1,7 4,16 -2,21 0,0 -1,-1 -1,-1 0,0 -1,1 -1,1 -3,-6 -3,-6 -5,-18 -1,0 -1,0 -2,0 -2,-6 -5,-11 -7,-15 -6,-2 -12,-13 -16,-19 -4,6 7,20 12,22 3,4 6,9 8,13 -2,-1 -3,-2 -5,-4 -3,4 -2,6 0,9 -1,0 -2,0 -3,0 -2,3 -4,6 -6,8 -1,1 -2,1 -2,1 -2,-2 -3,-3 -4,-4 1,-1 1,-1 6,-1 1,-3 2,-5 3,-7 -3,-6 -9,-14 -13,-17 0,0 0,0 0,-1 -1,-1 -2,-1 -3,-1 -1,-3 -2,-5 -2,-8 -2,0 -5,0 -7,0 0,1 -1,2 -1,2 -8,-4 -5,-21 1,-26 7,3 9,3 16,1 0,-2 1,-3 1,-5 14,1 11,0 12,15 7,1 9,2 15,-2 2,-11 2,-11 4,-16 4,-2 4,-2 8,-2 0,1 0,2 1,3 1,1 2,1 3,1 2,10 2,17 10,22 -3,4 -4,9 -6,14 -8,15 0,0 -8,15z',
						},
						{
							id: '3',
							name: 'Escandinavia',
							conexiones: [1, 4, 6, 5],
							path: 'M541 95c-9,16 1,39 1,57 -3,4 -6,8 -7,13 0,0 -1,0 -2,0 -8,1 -10,2 -19,2 -5,-7 -3,-12 -3,-20 1,0 2,0 3,0 4,-8 7,-11 7,-20 -2,1 -4,1 -6,2 -4,9 -8,15 -14,23 0,7 3,15 2,21 -1,0 -1,0 -2,0 -1,1 -1,3 -1,4 -1,1 -2,1 -3,1 -1,10 -1,17 -11,18 -2,-8 -7,-13 -6,-22 -1,0 -1,0 -2,0 -1,-1 -1,-1 -1,-2 -1,2 -3,4 -4,7 -5,0 -7,-1 -12,-3 -2,-11 -3,-12 -4,-21 1,-1 2,-1 2,-1 0,-2 0,-2 0,-3 0,-1 1,-1 2,-1 0,-1 -1,-1 -1,-1 3,-4 6,-3 8,-8 0,0 1,0 2,0 1,-1 2,-3 2,-5 5,1 5,-3 6,-7 1,0 2,-1 4,-2 -1,0 -1,-1 -1,-1 3,-4 3,-4 6,-15 1,0 1,1 2,1 0,-1 0,-2 0,-2 1,0 2,0 3,0 0,-4 0,-7 0,-11 3,-1 5,1 7,0 0,-1 -1,-3 -1,-4 4,-1 4,1 8,1 1,-4 1,-5 5,-5 0,-1 -1,-2 -1,-4 3,-3 8,-2 11,-2 0,2 0,2 2,2 0,-2 0,-3 0,-5 1,-1 3,-1 5,-1 -1,5 -1,5 0,6 1,-2 2,-3 3,-5 4,1 7,3 11,4 0,1 0,2 0,3 0,1 -1,2 -2,3 0,1 0,2 1,3z M557 48c1,0 2,0 3,1 0,1 0,2 0,2 -1,0 -2,0 -3,0 -1,5 -1,5 -5,5 -2,2 -4,5 -6,7 -2,-1 -3,-1 -4,-2 0,0 1,-1 1,-1 -1,-1 -2,-1 -3,-2 0,-3 0,-3 1,-4 -2,-1 -3,1 -6,0 0,-4 -2,-4 -3,-8 5,1 10,1 15,-1 1,1 1,3 2,4 1,-2 2,-5 4,-7 0,2 1,4 2,6 0,0 1,0 2,0z M560 61c-1,-1 -2,-2 -3,-3 1,-1 1,-2 1,-4 3,0 5,0 7,-1 -1,1 -1,1 -1,2 0,0 1,1 2,1 -2,3 -2,3 -6,5z M557 48c0,-3 0,-5 0,-7 2,0 4,0 6,0 0,1 0,2 1,3 2,0 4,0 6,0 0,1 -1,3 -1,5 -3,0 -5,0 -8,0 0,0 1,0 1,-1 -1,0 -3,0 -5,0z',
						},
						{
							id: '4',
							name: 'Islas Britanicas',
							conexiones: [0, 1, 3, 5],
							path: 'M455 226c-7,2 -23,9 -30,8 0,-1 -1,-2 -1,-3 4,-2 8,-5 12,-7 -2,0 -4,-1 -6,-1 2,-6 2,-6 3,-12 1,0 3,0 5,0 0,-3 -1,-5 1,-8 -1,0 -2,-1 -3,-1 0,-1 0,-3 0,-4 -1,0 -2,0 -3,0 0,-9 2,-13 3,-21 5,-2 5,-2 8,-2 1,2 1,2 0,6 2,1 4,2 6,3 -8,11 0,20 2,33 1,0 2,0 3,1 0,2 0,5 0,8z M415 226c-1,-5 1,-9 0,-20 1,-1 2,-1 4,-2 -1,-2 -1,-2 0,-5 5,0 8,0 13,2 0,3 0,6 0,9 -1,0 -2,0 -3,0 -1,10 -3,14 -14,16z',
						},
						{
							id: '5',
							name: 'Islandia',
							conexiones: [3, 4, 41],
							path: 'M425 156c-2,-1 -5,-2 -8,-2 0,-2 0,-3 -1,-5 3,0 3,0 3,-1 -1,0 -3,0 -4,0 0,-1 0,-2 0,-3 1,0 3,0 4,0 0,0 0,-1 0,-1 -1,0 -3,0 -4,0 0,-1 1,-2 1,-3 4,-2 4,-2 8,-1 0,0 0,1 0,2 7,0 15,-1 23,-1 1,1 2,1 3,2 -1,1 -1,1 -2,2 1,0 2,0 3,0 -2,12 -17,10 -26,11z',
						},
						{
							id: '6',
							name: 'Rusia',
							conexiones: [1, 2, 3, 13, 15, 16],
							path: 'M583 279c1,-9 -5,-13 -12,-15 0,-2 -1,-4 -1,-6 -1,0 -2,0 -3,0 1,-5 3,-7 6,-10 -5,1 -10,1 -13,5 2,1 2,1 5,1 0,1 0,1 0,2 -1,1 -2,1 -3,1 0,1 -1,2 -1,3 -5,0 -5,0 -10,-3 1,-2 1,-2 1,-4 -1,0 -3,1 -4,1 -1,0 -2,-1 -2,-1 3,-2 3,-2 3,-3 -1,0 -3,0 -5,0 0,2 0,5 0,8 -2,0 -2,0 -2,1 -9,-5 -9,-12 -11,-22 -1,0 -2,0 -3,-1 -1,-1 -1,-2 -1,-3 -4,0 -4,0 -8,2 0,-2 1,-3 1,-5 1,0 2,0 3,0 0,-9 -1,-15 -3,-23 -3,-2 -6,-4 -9,-6 0,-3 -1,-6 -1,-8 1,0 1,0 2,0 1,-4 3,-7 4,-11 1,0 2,-1 3,-1 0,1 -1,3 -1,4 2,0 3,1 5,1 0,-2 0,-4 0,-6 -1,0 -2,0 -3,0 0,-1 1,-2 1,-3 -1,-1 -2,-1 -2,-1 0,-1 0,-2 1,-3 3,-1 3,-1 6,1 6,-3 6,-3 12,-4 -1,-3 -2,-3 -5,-5 1,0 2,0 2,0 1,-5 4,-9 7,-13 0,-18 -10,-41 -1,-57 4,-3 5,-3 11,-3 0,2 0,3 0,4 7,1 32,14 23,23 -5,2 -5,2 -19,3 0,-1 -1,-3 -1,-3 -2,-1 -3,-1 -4,-1 1,6 6,9 11,11 0,3 -1,5 -1,7 6,0 11,-1 17,1 -1,-2 -1,-4 -2,-6 4,-2 5,-2 9,-2 1,-2 3,-4 4,-7 -1,0 -2,-1 -3,-1 0,-4 -2,-9 0,-13 5,1 8,2 10,7 -1,0 -2,0 -3,0 0,2 0,4 1,6 1,0 3,0 4,0 1,-2 1,-3 1,-5 5,0 6,-3 11,-3 0,-2 1,-3 1,-5 5,-2 8,-4 14,-4 -1,0 -3,1 -4,2 0,1 0,1 0,2 5,-1 7,-2 12,-1 0,-1 1,-3 2,-4 0,1 0,2 0,3 2,0 3,0 4,0 -1,-4 -1,-4 -2,-7 0,0 0,-1 1,-1 4,0 6,2 19,4 1,2 1,2 3,4 -1,4 -1,8 -1,13 -7,8 -13,12 -7,22 2,17 1,34 2,50 1,0 3,0 4,1 1,1 1,3 2,5 -1,0 0,13 0,15 -11,7 -14,5 -25,6 0,-1 -1,-2 -1,-3 -9,1 -23,2 -31,7 -7,12 4,19 0,33 -2,5 -6,11 1,13 0,4 0,7 0,11 2,1 5,2 7,2 -1,4 -3,8 -4,12 -5,2 -5,2 -9,2 -1,-2 -3,-5 -4,-7 -1,0 -2,0 -4,0 0,-2 0,-4 -1,-6 -5,-2 -5,-2 -6,-3z M638 98c-1,0 -1,1 -1,1 -2,-1 -3,-1 -5,-2 0,-5 0,-5 1,-6 2,2 3,5 5,7z M615 86c-4,-2 -8,-4 -12,-6 2,-4 3,-7 7,-9 -1,-1 -1,-1 -2,-2 5,-5 5,-5 12,-8 0,-1 0,-2 0,-3 10,-2 10,-2 13,-4 0,2 0,3 0,4 -3,3 -9,6 -16,11 0,1 0,1 0,2 -1,0 -1,0 -2,0 0,7 2,8 4,14 -2,0 -3,0 -4,1z',
						},
						{
							id: '7',
							name: 'Africa Occidental',
							conexiones: [0, 2, 8, 9, 10, 30],
							path: 'M468 473c-1,-4 -1,-6 0,-10 -7,-3 -7,-3 -13,-3 -2,-6 -2,-6 -4,-7 -5,0 -9,1 -14,1 0,1 0,2 0,3 -16,-1 -25,7 -36,-8 -6,-2 -10,-16 -12,-22 0,0 -1,0 -2,0 0,-1 0,-2 0,-3 -1,0 -2,0 -3,0 -2,-9 -2,-16 1,-25 0,-9 -1,-19 2,-28 5,-1 8,-15 10,-20 13,-6 13,-10 17,-25 7,-4 9,-7 14,-14 0,0 1,0 1,0 7,5 16,-1 23,-4 7,0 10,-1 28,-2 0,2 0,3 0,4 -1,1 -1,1 -2,1 2,3 1,6 1,10 -1,0 -3,0 -4,0 0,1 0,1 3,1 0,1 0,2 0,3 2,1 4,2 6,3 -4,0 -4,0 -8,3 0,3 0,5 -1,7 0,1 -1,1 -2,2 1,10 0,18 1,29 9,8 16,9 28,11 1,2 2,4 2,6 7,2 8,7 15,9 -2,13 -5,23 -4,37 -6,4 -10,8 -17,9 0,2 0,3 -1,4 -5,2 -6,5 -10,7 2,7 1,12 0,20 -4,0 -4,0 -13,-2 0,1 0,2 0,3 -2,0 -4,0 -6,0z',
						},
						{
							id: '8',
							name: 'Egipto',
							conexiones: [2, 7, 9, 13],
							path: 'M484 328c8,2 15,10 23,9 0,-4 0,-4 1,-7 12,-3 24,4 35,8 5,0 9,0 14,0 1,5 3,10 4,15 -2,0 -4,-1 -6,-1 2,9 5,17 7,26 -3,1 -3,1 -5,4 -11,0 -22,0 -33,0 -2,6 -2,6 -1,9 -2,0 -3,0 -4,0 0,1 0,3 0,4 -7,-2 -8,-7 -15,-9 0,-2 -1,-4 -2,-6 -12,-2 -19,-3 -28,-11 -1,-11 0,-19 -1,-29 1,-1 2,-1 2,-2 1,-2 1,-4 1,-7 4,-3 4,-3 8,-3z',
						},
						{
							id: '9',
							name: 'Cuerno de Africa',
							conexiones: [7, 8, 10, 11, 12, 13],
							path: 'M532 514c-1,-6 -1,-12 -2,-17 5,-1 6,-8 7,-12 1,0 2,0 4,0 1,-8 11,-8 10,-19 -5,-1 -10,-2 -16,-2 0,-2 -1,-4 -2,-6 0,1 -1,2 -2,3 -7,-10 -12,-18 -16,-29 -1,-14 2,-24 4,-37 0,-1 0,-3 0,-4 1,0 2,0 4,0 -1,-3 -1,-3 1,-9 11,0 22,0 33,0 2,-3 2,-3 5,-4 7,11 9,26 14,38 1,1 2,1 3,1 2,5 3,9 5,14 -1,0 -2,0 -3,0 9,6 21,1 30,-1 0,0 0,1 1,2 -4,12 -9,23 -16,34 -15,12 -22,25 -33,39 0,7 0,14 1,21 -6,1 -11,2 -16,4 -2,6 -2,16 -2,18 -2,-1 -3,-1 -5,-1 0,-7 0,-15 0,-23 -2,-3 -5,-7 -7,-10 -1,0 -2,0 -2,0z',
						},
						{
							id: '10',
							name: 'Congo',
							conexiones: [7, 9, 11],
							path: 'M473 502c-5,-6 -11,-12 -11,-20 4,-3 4,-4 6,-9 2,0 4,0 6,0 0,-1 0,-2 0,-3 9,2 9,2 13,2 1,-8 2,-13 0,-20 4,-2 5,-5 10,-7 1,-1 1,-2 1,-4 7,-1 11,-5 17,-9 4,11 9,19 16,29 1,-1 2,-2 2,-3 1,2 2,4 2,6 6,0 11,1 16,2 1,11 -9,11 -10,19 -2,0 -3,0 -4,0 -1,4 -2,11 -7,12 1,5 1,11 2,17 -1,2 -2,3 -3,5 -1,0 -2,0 -3,0 1,5 1,11 2,16 -2,0 -3,0 -4,0 0,-1 0,-3 0,-4 -23,-5 -15,-2 -21,-20 -2,0 -4,-1 -6,-1 0,1 -1,2 -1,3 -1,0 -3,0 -4,1 -1,-4 -1,-4 -4,-9 -8,-1 -9,-2 -15,-3z',
						},
						{
							id: '11',
							name: 'Sudafrica',
							conexiones: [9, 10, 12],
							path: 'M473 502c6,1 7,2 15,3 3,5 3,5 4,9 1,-1 3,-1 4,-1 0,-1 1,-2 1,-3 2,0 4,1 6,1 6,18 -2,15 21,20 0,1 0,3 0,4 1,0 2,0 4,0 -1,-5 -1,-11 -2,-16 1,0 2,0 3,0 1,-2 2,-3 3,-5 0,0 1,0 2,0 2,3 5,7 7,10 0,8 0,16 0,23 2,0 3,0 5,1 0,-2 0,-12 2,-18 5,-2 10,-3 16,-4 0,13 2,29 -13,33 -1,2 -1,2 -6,7 -1,9 0,19 -10,22 -2,13 -2,13 -3,18 -1,0 -2,0 -3,0 0,1 0,2 0,3 -1,0 -2,0 -3,0 -7,18 -20,18 -39,22 -2,-1 -4,-2 -5,-2 0,-2 0,-3 0,-4 0,0 1,0 2,0 0,-10 -1,-15 -6,-24 -1,-9 -2,-12 -5,-30 -4,-11 -8,-21 -2,-31 1,0 3,-1 4,-1 0,-8 -1,-16 -1,-24 1,0 2,-1 3,-1 0,-3 0,-7 -1,-11 -1,0 -2,0 -3,0 0,0 0,-1 0,-1z',
						},
						{
							id: '12',
							name: 'Madagascar',
							conexiones: [9, 11],
							path: 'M579 589c-5,-6 -4,-15 -1,-22 0,0 1,0 2,0 2,-15 1,-16 14,-21 6,-5 6,-5 7,-8 1,0 2,0 3,0 0,5 0,11 0,17 0,0 -1,0 -2,0 0,1 0,2 0,4 -1,0 -2,0 -3,0 -1,11 -9,26 -20,30z',
						},
						{
							id: '13',
							name: 'Oriente Medio',
							conexiones: [2, 6, 8, 9, 14, 15],
							path: 'M548 321c0,-1 -1,-3 -1,-4 4,-2 6,-2 10,-2 -3,4 -4,5 -9,6z M563 353c-1,-5 -3,-10 -4,-15 7,-8 4,-17 6,-28 -1,0 -1,-1 -2,-1 -3,2 -3,2 -11,3 0,0 -1,-1 -2,-2 -3,1 -6,2 -9,3 0,-1 -1,-2 -1,-3 -1,1 -3,1 -5,1 -2,-10 -5,-15 -5,-21 8,-15 0,0 8,-15 2,2 3,4 5,6 3,0 6,0 8,0 0,-1 0,-2 0,-3 9,0 15,-3 20,4 2,-1 6,0 14,-2 1,1 1,1 5,3 1,2 1,4 1,6 2,0 3,0 4,0 1,2 3,5 4,7 4,0 4,0 9,-2 1,8 1,8 2,11 7,1 11,2 17,0 0,-1 0,-3 0,-4 7,-1 13,-5 16,3 4,2 5,3 8,7 -1,6 -1,11 -1,16 1,0 2,0 3,1 1,6 3,13 4,19 1,0 2,0 3,0 -1,6 -4,10 -4,16 -5,1 -11,1 -16,2 0,-2 0,-4 0,-6 -2,0 -6,1 -15,0 -1,-1 -1,-2 -1,-3 -2,0 -3,0 -4,-1 -4,-12 -3,-15 -15,-12 0,4 2,6 4,10 1,0 2,0 3,0 2,4 4,8 6,12 1,-2 2,-3 3,-4 3,2 0,6 0,9 1,1 2,1 3,2 4,-3 8,-6 13,-10 3,8 7,9 10,15 -1,4 -3,7 -5,10 0,0 -1,-1 -1,-1 -1,3 -1,6 -2,9 -1,1 -3,1 -4,1 -4,14 -34,22 -45,26 0,-16 -6,-29 -16,-42 0,-9 -7,-18 -11,-27l0 0z',
						},
						{
							id: '14',
							name: 'India',
							conexiones: [13, 15, 22, 24],
							path: 'M713 452c-1,-1 -2,-3 -4,-4 0,-3 1,-7 1,-10 1,0 2,0 4,0 3,5 4,6 4,11 -2,1 -3,2 -5,3z M656 363c0,-6 3,-10 4,-16 -1,0 -2,0 -3,0 -1,-6 -3,-13 -4,-19 -1,-1 -2,-1 -3,-1 0,-6 0,-11 1,-17 6,-4 6,-4 9,-5 3,-6 5,-6 11,-5 2,-5 4,-5 9,-4 0,1 0,2 0,3 3,0 4,2 6,5 2,-2 4,-4 7,-5 2,0 5,0 7,0 1,6 4,6 10,7 0,5 0,11 0,16 -2,0 -3,0 -4,0 0,2 0,3 0,4 7,1 21,10 25,14 4,0 7,1 10,1 0,2 0,3 -1,5 3,0 5,-1 8,-1 0,-1 0,-2 0,-3 2,0 5,-1 8,-1 -1,-2 -1,-3 -1,-5 6,-2 8,-7 13,-8 1,2 2,5 3,8 -3,5 -3,7 -4,13 -1,0 -2,0 -2,0 0,3 0,3 -1,7 -1,0 -2,0 -3,1 -2,4 -3,8 -4,12 -7,4 -12,6 -20,7 -3,7 -13,25 -19,27 -1,11 -5,21 -6,32 -2,0 -3,0 -5,0 0,1 0,2 1,3 -1,1 -2,2 -3,3 -1,0 -3,0 -4,0 -5,-13 -10,-26 -15,-39 0,-15 0,-15 -1,-17 2,-5 2,-5 1,-7 0,2 -1,3 -2,4 -4,0 -8,-1 -9,-5 1,-1 2,-2 4,-2 -2,-1 -3,-2 -4,-2 -1,-1 -1,-2 -1,-3 -4,-1 -4,-3 -5,-7 -5,0 -9,0 -13,0z ',
						},
						{
							id: '15',
							name: 'Asia Central',
							conexiones: [6, 13, 14, 16, 22],
							path: 'M651 310c-3,-4 -4,-5 -8,-7 -3,-8 -10,-4 -17,-3 0,-3 0,-5 -1,-7 -1,0 -2,-1 -3,-1 0,-3 0,-5 0,-8 1,0 2,-1 3,-1 0,-3 0,-6 0,-10 -1,0 -2,0 -3,0 1,4 1,4 0,7 -2,-1 -2,-1 -2,-9 -2,-1 -4,-2 -7,-3 1,-6 2,-7 5,-12 0,1 0,2 1,3 0,0 1,0 2,0 0,-3 0,-6 0,-9 -7,0 -11,1 -18,5 4,-14 -7,-21 0,-33 8,-5 22,-6 31,-7 0,1 1,2 1,3 11,-1 14,1 25,-6 0,-2 -1,-15 0,-15 10,0 21,-4 27,7 4,1 15,15 18,19 12,-1 10,9 15,16 -4,4 -5,5 -7,11 -11,3 -5,14 -16,18 0,1 0,2 0,3 -4,1 -7,1 -11,2 0,7 5,19 7,26 -3,1 -5,3 -7,5 -2,-3 -3,-5 -6,-5 0,-1 0,-2 0,-3 -5,-1 -7,-1 -9,4 -6,-1 -8,-1 -11,5 -3,1 -3,1 -9,5z',
						},
						{
							id: '16',
							name: 'Urales',
							conexiones: [6, 15, 17, 22],
							path: 'M720 239c-5,-7 -3,-17 -15,-16 -3,-4 -14,-18 -18,-19 -6,-11 -17,-7 -27,-7 -1,-2 -1,-4 -2,-5 -1,-1 -3,-1 -4,-1 -1,-16 0,-33 -2,-50 -6,-10 0,-14 7,-22 0,-5 0,-9 1,-13 3,-4 3,-10 7,-14 4,3 8,5 12,7 -4,8 -7,12 1,17 0,5 0,10 -1,15 -3,2 -6,4 -9,6 6,0 6,0 13,-2 2,-4 2,-4 2,-11 1,0 3,0 4,0 1,1 2,2 3,3 1,2 1,2 0,4 2,0 4,1 6,1 1,7 1,7 3,13 0,0 1,-1 1,-1 4,6 4,8 5,15 4,1 5,6 8,10 2,13 6,26 18,31 2,6 7,10 13,14 0,3 -1,4 -2,9 15,3 8,15 14,27 -11,8 -28,-8 -38,-11z',
						},
						{
							id: '17',
							name: 'Siberia',
							conexiones: [16, 18, 20, 22],
							path: 'M758 250c-6,-12 1,-24 -14,-27 1,-5 2,-6 2,-9 -6,-4 -11,-8 -13,-14 -12,-5 -16,-18 -18,-31 -3,-4 -4,-9 -8,-10 -1,-7 -1,-9 -5,-15 0,0 -1,1 -1,1 -2,-6 -2,-6 -3,-13 -2,0 -4,-1 -6,-1 1,-2 1,-2 0,-4 0,0 1,0 2,1 1,-3 1,-3 -1,-10 -3,0 -6,0 -9,1 -1,-6 -1,-12 -2,-17 1,-1 2,-2 3,-3 2,6 3,6 9,8 -2,-4 -2,-4 -2,-7 1,0 1,-1 1,-1 8,5 6,11 14,13 0,-1 0,-2 0,-2 -1,0 -2,0 -3,0 0,-1 0,-2 0,-3 -1,0 -1,0 -2,0 0,-3 0,-5 0,-8 0,0 -1,1 -1,1 -3,-3 -4,-4 -4,-9 3,-1 6,-3 9,-4 0,1 0,3 0,4 3,-1 5,-3 7,-5 0,0 -1,-1 -2,-2 8,-3 20,-11 29,-11 3,2 3,2 9,1 1,-2 1,-4 1,-5 9,-4 10,-2 17,3 1,3 1,3 3,3 0,-1 0,-1 0,-2 4,0 9,0 14,1 2,3 1,5 1,9 -5,3 -10,6 -15,9 5,0 8,-4 13,-4 0,1 0,2 1,3 1,0 1,0 2,0 0,-1 0,-2 0,-3 5,1 5,1 7,3 2,-6 9,-4 14,-4 0,1 0,2 1,3 2,1 4,2 6,2 1,6 2,7 2,12 -5,6 -6,12 -8,19 -8,0 -15,0 -23,2 0,1 1,2 1,3 1,1 2,1 3,1 0,1 0,2 0,3 2,1 5,2 8,2 0,1 0,2 0,3 -1,1 -3,2 -4,3 3,8 3,18 4,26 -3,3 -3,3 -8,6 -8,11 -14,35 -3,45 0,4 -1,7 1,11 -1,1 -1,2 -1,4 5,6 5,11 8,18 3,0 5,1 8,1 0,3 0,6 0,9 -14,3 -32,-3 -44,-10z M747 54c1,0 2,0 3,0 1,4 1,4 2,5 1,0 1,0 2,-1 0,2 1,5 2,7 -2,0 -4,0 -6,0 -1,-1 -1,-1 -3,-11z M747 54c-2,3 -2,3 -3,8 -10,-1 -10,-1 -15,-3 1,-12 8,-8 18,-8 0,1 0,2 0,3z M725 53c0,1 1,2 1,4 -4,0 -5,2 -8,2 -1,-2 -1,-2 0,-6 3,0 5,0 7,0z M725 53c-4,-2 -4,-2 -5,-4 1,-1 1,-3 2,-4 6,-1 7,-1 12,3 -3,2 -6,3 -9,5z',
						},
						{
							id: '18',
							name: 'Yakutia',
							conexiones: [17, 19, 20],
							path: 'M797 166c-1,-8 -1,-18 -4,-26 1,-1 3,-2 4,-3 0,-1 0,-2 0,-3 -3,0 -6,-1 -8,-2 0,-1 0,-2 0,-3 -1,0 -2,0 -3,-1 0,-1 -1,-2 -1,-3 8,-2 15,-2 23,-2 2,-7 3,-13 8,-19 0,-5 -1,-6 -2,-12 1,0 2,-1 3,-2 -1,0 -3,0 -4,0 0,-1 0,-2 0,-3 7,0 19,-4 22,4 -1,1 -2,1 -3,1 1,2 1,3 1,4 5,0 8,4 13,4 1,-1 2,-3 3,-5 4,3 8,-1 10,2 3,0 5,-1 8,-1 -2,-1 -3,-2 -5,-2 0,-2 0,-4 -1,-5 3,0 6,0 8,-1 0,1 0,2 0,3 4,-2 4,-2 12,-3 0,1 0,2 0,3 -3,0 -3,0 -3,1 15,2 30,4 44,8 0,0 -1,1 -1,1 1,1 3,1 5,2 0,1 0,2 0,3 -1,1 -2,3 -3,5 -7,1 -12,5 -19,8 0,3 -1,7 -1,10 2,1 5,1 8,2 0,2 0,5 0,8 -2,0 -3,0 -4,0 -1,2 -2,4 -3,7 -2,0 -4,1 -6,2 -1,-1 -1,-2 -1,-3 -2,-1 -4,-1 -6,-2 -1,-2 -1,-4 -2,-5 -3,0 -5,1 -8,2 0,1 -1,2 -1,3 -2,0 -4,1 -7,1 -2,11 -11,13 -14,24 -5,-3 -6,-3 -8,-9 -3,0 -6,0 -8,-1 -1,-1 -1,-2 -1,-2 -19,-1 -21,1 -29,1 -2,2 -3,5 -5,7 -4,1 -8,2 -11,2z M857 87c0,-1 1,-3 2,-4 8,0 8,0 9,1 -5,1 -6,2 -11,3z M857 77c-2,7 -11,2 -15,0 0,-1 0,-2 0,-3 2,0 3,0 5,0 0,-1 0,-2 1,-3 1,1 2,1 3,1 0,1 0,2 1,3 1,1 3,1 5,2z M862 77c0,-2 0,-3 0,-4 4,0 4,0 10,4 -3,0 -7,0 -10,0z',
						},
						{
							id: '19',
							name: 'Kamchatka',
							conexiones: [18, 20, 21, 23, 40],
							path: 'M853 198c1,-10 5,-20 6,-30 3,-11 12,-13 14,-24 3,0 5,-1 7,-1 0,-1 1,-2 1,-3 3,-1 5,-2 8,-2 1,1 1,3 2,5 2,1 4,1 6,2 0,1 0,2 1,3 2,-1 4,-2 6,-2 1,-3 2,-5 3,-7 1,0 2,0 4,0 0,-3 0,-6 0,-8 -3,-1 -6,-1 -8,-2 0,-3 1,-7 1,-10 7,-3 12,-7 19,-8 1,-2 2,-4 3,-5 1,-1 2,-1 3,-1 0,-1 0,-2 1,-3 4,0 24,8 28,4 -1,0 -3,0 -4,0 0,-1 0,-2 0,-3 -1,0 -2,0 -3,0 0,-1 0,-2 0,-3 6,0 12,0 18,0 1,2 1,3 1,4 2,-1 2,-1 6,-2 -1,1 -1,1 -2,2 2,1 2,1 7,1 8,5 8,5 11,6 2,4 4,5 7,8 0,-1 1,-2 1,-3 4,2 4,2 9,8 1,-1 2,-1 4,-1 -2,4 -2,4 -3,9 -1,0 -3,-1 -5,-1 0,1 0,2 0,2 1,1 3,1 4,1 -1,1 -1,1 -9,1 -2,-1 -2,-1 -2,-5 -1,0 -2,0 -3,-1 0,0 0,-1 0,-2 -3,0 -5,1 -8,1 0,-2 -1,-4 -2,-6 0,3 0,6 0,9 -3,0 -5,0 -8,0 0,1 0,2 0,2 2,1 4,1 6,1 0,2 -1,4 -1,6 1,0 2,0 3,0 0,2 0,4 0,5 -2,0 -4,0 -5,0 -1,-1 -1,-1 -1,-2 -5,3 -11,10 -14,15 -7,-1 -8,-2 -14,1 -1,-1 -2,-3 -3,-4 -1,1 -3,2 -4,4 1,0 2,0 2,1 0,3 -4,3 -4,5 1,0 2,0 3,0 -1,3 -2,5 -3,8 1,0 2,0 3,0 0,6 0,10 -5,12 0,7 -1,9 -4,16 -1,0 -2,1 -2,1 -4,-5 -7,-11 -10,-16 -2,-22 13,-23 19,-40 1,0 2,-1 3,-1 -3,0 -4,0 -7,2 0,1 0,1 1,2 -2,2 -4,4 -5,7 -2,0 -4,0 -5,0 -1,-2 -1,-4 -1,-6 -3,1 -6,1 -9,2 -1,3 -1,3 -2,8 1,0 2,1 3,1 0,1 0,2 0,3 -12,0 -40,-6 -44,6 -5,2 -8,8 -11,13 3,1 7,2 10,3 0,1 0,2 1,3 0,-1 1,-3 1,-4 2,0 4,0 6,1 6,13 7,28 5,43 -3,-2 -5,-3 -8,-4 0,-2 -1,-3 -1,-5 -1,0 -3,0 -4,-1 0,-1 0,-1 0,-2 -3,0 -6,0 -9,0 -3,-9 -10,-8 -12,-18 0,0 -1,-1 -2,-1z M962 99c-1,0 -2,-1 -3,-1 0,-1 1,-2 1,-3 3,-2 3,-2 7,-2 -2,2 -2,2 -3,6 -1,0 -2,0 -2,0z',
						},
						{
							id: '20',
							name: 'Irkutsk',
							conexiones: [17, 18, 19, 21],
							path: 'M786 217c-11,-10 -5,-34 3,-45 5,-3 5,-3 8,-6 3,0 7,-1 11,-2 2,-2 3,-5 5,-7 8,0 10,-2 29,-1 0,0 0,1 1,2 2,1 5,1 8,1 2,6 3,6 8,9 -1,10 -5,20 -6,30 -4,0 -9,2 -12,-1 -2,1 -4,2 -5,3 0,4 1,8 -4,9 0,5 -1,8 -3,13 -1,0 -2,0 -3,0 0,-2 -1,-4 -1,-7 -4,1 -4,1 -11,5 -9,-1 -19,0 -28,-3z',
						},
						{
							id: '21',
							name: 'Mongolia',
							conexiones: [17, 19, 20, 22, 23],
							path: 'M836 271c-7,-10 -24,-9 -34,-11 0,-3 0,-6 0,-9 -3,0 -5,-1 -8,-1 -3,-7 -3,-12 -8,-18 0,-2 0,-3 1,-4 -2,-4 -1,-7 -1,-11 9,3 19,2 28,3 7,-4 7,-4 11,-5 0,3 1,5 1,7 1,0 2,0 3,0 2,-5 3,-8 3,-13 5,-1 4,-5 4,-9 1,-1 3,-2 5,-3 3,3 8,1 12,1 1,0 2,1 2,1 2,10 9,9 12,18 3,0 6,0 9,0 0,1 0,1 0,2 1,1 3,1 4,1 0,2 1,3 1,5 3,1 5,2 8,4 -4,5 -8,11 -11,17 -2,0 -3,0 -5,0 0,0 -1,-1 -1,-1 -4,6 -4,10 -9,15 0,1 0,2 0,3 6,3 11,10 11,17 -4,3 -6,5 -11,5 1,-5 1,-6 -2,-10 0,1 -1,1 -1,2 -2,-3 -3,-3 -2,-7 -5,0 -8,0 -12,2 0,-5 1,-5 -1,-9 -3,2 -5,5 -9,8z',
						},
						{
							id: '22',
							name: 'China',
							conexiones: [14, 15, 16, 17, 21, 24],
							path: 'M803 361c1,-2 1,-3 2,-5 2,0 5,0 7,-1 0,2 0,3 0,4 -3,1 -6,1 -9,2z M802 349c-6,-11 -14,-7 -20,3 0,0 -1,0 -2,1 0,-1 0,-2 0,-3 -1,0 -3,0 -4,0 3,-7 3,-8 0,-16 -2,0 -3,1 -5,2 -1,-3 -2,-6 -3,-8 -5,1 -7,6 -13,8 0,2 0,3 1,5 -3,0 -6,1 -8,1 0,1 0,2 0,3 -3,0 -5,1 -8,1 1,-2 1,-3 1,-5 -3,0 -6,-1 -10,-1 -4,-4 -18,-13 -25,-14 0,-1 0,-2 0,-4 1,0 2,0 4,0 0,-5 0,-11 0,-16 -6,-1 -9,-1 -10,-7 -2,0 -5,0 -7,0 -2,-7 -7,-19 -7,-26 4,-1 7,-1 11,-2 0,-1 0,-2 0,-3 11,-4 5,-15 16,-18 2,-6 3,-7 7,-11 10,3 27,19 38,11 12,7 30,13 44,10 10,2 27,1 34,11 -1,1 -1,1 -4,0 1,1 2,3 3,4 1,0 2,1 4,1 -1,1 -1,2 -1,3 3,0 5,-1 14,0 0,1 0,1 0,2 -6,2 -9,3 -13,6 3,3 3,3 4,6 3,1 3,1 5,2 -1,1 -2,1 -3,2 2,0 3,1 4,1 1,2 1,3 1,5 -2,0 -2,0 -2,1 1,0 1,0 2,0 0,1 0,2 0,4 -1,0 -1,0 -2,0 7,14 -23,43 -36,41 0,1 0,3 0,5 -5,-1 -5,-4 -10,-5z M841 345c1,-8 1,-8 3,-12 1,0 2,0 2,0 0,-1 0,-2 0,-3 2,0 3,0 4,0 -2,8 -2,11 -9,15z ',
						},
						{
							id: '23',
							name: 'Japon',
							conexiones: [19, 21],
							path: 'M887 288c0,2 0,3 0,5 0,0 -1,0 -2,0 -1,2 -2,5 -2,7 -2,0 -3,1 -5,1 0,-5 2,-6 2,-10 -1,1 -3,1 -4,2 0,-2 0,-5 0,-8 8,1 8,1 11,3z M887 288c0,-1 -1,-2 -1,-3 4,-6 8,-7 14,-8 0,1 0,2 0,3 -3,5 -6,5 -11,9 0,-1 -1,-1 -2,-1z M900 280c0,-1 0,-2 0,-3 -1,0 -1,-1 -2,-2 -7,2 -13,8 -20,9 0,-1 0,-2 0,-3 5,-2 13,-10 16,-14 2,0 4,1 6,1 -2,-4 -1,-5 0,-9 1,0 2,0 3,0 -1,-7 -2,-9 -1,-15 3,0 3,0 5,1 0,-1 0,-3 0,-5 0,0 1,0 2,0 0,0 -1,-1 -1,-2 -1,0 -2,1 -3,1 0,-1 0,-2 0,-3 -2,2 -2,2 -1,6 -1,0 -3,0 -4,0 0,-2 0,-3 0,-5 2,-4 2,-4 5,-5 0,-1 -1,-3 -1,-5 -1,0 -2,-1 -3,-1 -3,-17 -12,-23 -8,-42 6,3 8,13 8,20 4,3 6,5 7,10 -1,0 -2,-1 -3,-1 0,7 1,13 7,17 0,1 0,2 0,2 1,0 3,0 5,0 0,3 1,5 1,7 -12,2 -3,13 -7,22 1,5 3,8 1,13 -2,0 -4,0 -5,1 0,2 0,3 0,5 -2,1 -5,2 -7,3 0,-1 0,-2 0,-3z ',
						},
						{
							id: '24',
							name: 'Indo-China',
							conexiones: [14, 22, 25],
							path: 'M757 369c1,-4 2,-8 4,-12 1,-1 2,-1 3,-1 1,-4 1,-4 1,-7 0,0 1,0 2,0 1,-6 1,-8 4,-13 2,-1 3,-2 5,-2 3,8 3,9 0,16 1,0 3,0 4,0 0,1 0,2 0,3 1,-1 2,-1 2,-1 6,-10 14,-14 20,-3 -3,1 -5,3 -7,5 0,2 -1,5 -1,8 2,0 3,1 5,1 0,2 1,3 1,4 1,1 2,1 3,2 0,0 0,1 0,2 1,0 2,0 3,0 0,9 0,14 -3,21 -2,0 -4,0 -5,0 -2,4 -2,6 -6,8 -1,-2 -1,-2 -2,-6 -1,0 -2,0 -2,0 0,-2 0,-3 0,-4 -3,-1 -5,-1 -7,-2 0,-1 0,-1 0,-2 -1,0 -2,0 -4,0 0,-2 0,-3 0,-4 0,0 -1,0 -1,0 -1,11 -6,13 2,24 3,1 5,2 7,3 1,6 0,11 1,17 -1,0 -2,0 -4,0 -7,-6 -7,-8 -9,-18 0,0 -1,0 -2,0 -7,-12 2,-31 -14,-35 0,-2 0,-3 0,-4z',
						},
						{
							id: '25',
							name: 'Malaya',
							conexiones: [24, 26, 28],
							path: 'M838 474c0,0 1,-1 2,-1 3,-1 3,-1 6,1 -3,2 -7,4 -11,6 0,-2 0,-3 0,-4 1,-1 2,-1 3,-2z M822 476c0,0 0,0 0,1 -2,-1 -4,-1 -6,-1 0,0 0,1 0,2 -10,-2 -10,-2 -30,-2 0,-1 0,-2 0,-3 -2,-1 -5,-2 -7,-3 0,-2 0,-4 0,-6 -2,0 -3,0 -4,0 -3,-8 -6,-11 -8,-18 -1,0 -2,-1 -2,-1 -1,-4 -1,-4 -4,-10 -1,0 -2,0 -3,0 0,-2 -1,-4 -1,-6 5,1 5,1 13,4 2,6 5,8 7,13 1,0 2,-1 3,-1 1,6 2,7 8,8 0,1 0,2 0,3 -1,0 -2,1 -3,1 1,1 1,3 2,4 0,0 1,-1 1,-1 2,2 0,4 4,6 0,1 0,2 0,3 0,1 1,1 2,1 0,-1 0,-2 0,-2 9,-1 16,3 26,5 0,1 0,2 0,3 0,0 1,0 2,0z M822 476c3,-6 13,-3 18,-3 -1,0 -2,1 -2,1 -2,0 -3,0 -4,0 0,1 0,2 0,3 -4,-1 -8,-1 -12,-1z M821 465c1,-11 4,-16 10,-24 5,0 10,0 15,-2 0,0 0,1 0,2 -4,2 -8,4 -13,3 0,1 0,2 -1,3 3,0 6,0 8,0 -1,2 -1,2 -6,2 0,4 0,8 0,12 -2,0 -4,0 -5,0 0,-2 0,-4 0,-7 -1,0 -1,0 -2,0 -1,4 -1,7 -2,11 -2,0 -3,0 -4,0z M802 460c-2,-4 -4,-5 -3,-9 -1,0 -2,0 -2,0 -1,-5 0,-7 2,-12 2,0 4,-1 7,-2 0,-1 0,-2 0,-3 3,-1 6,-2 8,-3 1,-3 2,-5 3,-7 1,0 2,0 3,0 0,-2 0,-3 1,-4 4,0 5,0 9,1 0,1 0,2 0,3 -1,0 -2,0 -3,1 1,0 1,1 2,2 -3,3 -6,8 -2,13 -7,5 -8,10 -11,17 -3,2 -3,2 -14,3z M841 458c0,-1 0,-1 0,-2 7,-1 11,-2 17,2 -6,0 -11,0 -17,0z M849 445c0,-2 0,-5 0,-8 1,1 2,1 3,1 0,3 1,5 1,7 -1,0 -3,0 -4,0z M875 394c0,-1 0,-1 1,-2 0,0 1,0 2,-1 0,4 0,4 -2,7 -1,0 -3,1 -4,1 1,-2 2,-4 3,-5z M853 396c1,-5 8,-10 12,-14 0,8 -4,13 -12,14z M876 392c-1,1 -1,1 -1,2 -1,0 -2,0 -3,0 0,-6 -3,-8 -4,-12 4,0 8,4 12,6 -2,0 -3,1 -4,2 0,1 0,1 0,2z M881 388c0,-2 -1,-5 -1,-8 -3,0 -5,0 -8,0 -1,-1 -1,-2 -2,-3 0,0 -1,0 -2,0 -2,-1 -3,-1 -4,-4 2,0 3,0 4,0 0,-2 0,-2 -2,-2 -1,-3 -1,-6 -1,-9 1,1 2,3 3,4 -2,-5 -2,-5 -1,-11 3,0 6,0 9,0 0,2 -1,3 -1,5 1,0 1,0 2,1 0,2 -1,4 -2,6 0,0 -1,-1 -1,-1 0,2 0,4 1,7 2,0 4,1 6,2 2,5 3,7 3,12 -1,1 -2,1 -3,1z ',
						},
						{
							id: '26',
							name: 'Papua',
							conexiones: [25, 27, 28],
							path: 'M936 485c-2,-1 -5,-2 -8,-3 -2,-3 -2,-5 -6,-6 0,-1 0,-2 0,-3 -1,0 -2,0 -3,0 -1,8 -12,2 -18,1 1,-2 2,-4 3,-6 -1,-1 -2,-1 -3,-1 0,-1 0,-2 -1,-3 -2,-1 -4,-2 -6,-2 0,-1 1,-1 1,-2 -1,0 -2,0 -4,0 0,1 0,1 0,2 -1,0 -2,0 -3,-1 0,-1 0,-3 -1,-4 3,0 3,0 3,-1 -1,0 -3,0 -4,0 0,-2 0,-3 0,-4 -1,0 -2,-1 -2,-1 4,-4 9,-4 14,-2 -1,2 -2,4 -3,6 1,0 2,0 3,1 0,1 0,1 0,2 2,-1 4,-3 6,-4 0,-1 -1,-1 -1,-2 2,-2 21,8 24,10 1,2 2,4 3,6 1,0 2,0 3,1 0,1 0,2 1,3 -2,0 -3,0 -4,0 1,2 1,3 2,5 1,0 2,0 3,0 0,1 0,3 0,4 1,1 3,1 5,2 -1,0 -3,1 -4,2z M955 461c0,1 0,2 -1,3 -8,3 -8,3 -19,5 -1,-1 -1,-2 -1,-3 7,-2 14,-3 21,-5z M955 461c-4,-3 -4,-3 -7,-4 0,-1 0,-2 0,-3 3,1 6,2 10,3 0,1 0,2 1,3 -1,0 -3,1 -4,1z ',
						},
						{
							id: '27',
							name: 'Austrialia Este',
							conexiones: [26, 28],
							path: 'M875 600c0,-18 0,-35 0,-52 -14,0 -28,0 -41,0 -1,-13 -2,-25 -3,-38 1,0 2,-1 2,-1 0,-8 6,-9 12,-10 0,-1 0,-2 0,-4 1,0 2,0 3,0 0,2 1,3 2,4 1,-1 1,-1 12,0 -1,4 -3,4 -5,6 0,1 0,3 0,5 7,3 11,6 18,5 2,-4 2,-13 4,-21 1,-1 2,-1 3,-1 1,6 2,10 6,14 0,0 1,-1 1,-1 5,8 5,18 15,21 0,1 0,3 0,4 1,0 2,1 3,1 0,1 1,2 1,3 32,8 6,44 3,62 -8,2 -14,5 -22,6 -1,-1 -2,-2 -3,-3 -2,3 -2,5 0,8 3,0 7,1 10,1 -2,8 -3,10 -11,12 -4,-9 -1,-16 -10,-21z M948 594c-8,-10 -19,-5 -11,-21 7,0 12,-6 13,-13 2,0 4,-1 6,-1 1,-4 3,-7 4,-11 1,0 2,0 3,0 0,2 1,4 1,5 4,1 4,1 5,3 0,1 -1,2 -1,3 1,0 2,0 3,0 -2,2 -2,2 -9,20 -1,0 -2,0 -3,0 -3,6 -5,12 -11,15z M972 556c-1,-8 -2,-9 -7,-14 4,-7 -1,-13 -1,-20 3,3 3,7 6,10 0,0 1,-1 1,-1 1,1 2,3 3,4 2,0 5,1 7,1 0,-1 1,-1 1,-2 1,2 2,4 3,6 -2,7 -2,7 -7,15 -2,0 -4,1 -6,1z ',
						},
						{
							id: '28',
							name: 'Australia Oeste',
							conexiones: [25, 26, 27],
							path: 'M831 510c1,13 2,25 3,38 13,0 27,0 41,0 0,17 0,34 0,52 -2,-1 -3,-1 -5,-1 0,-3 -1,-6 -2,-9 -4,0 -4,0 -5,-2 1,0 2,-1 3,-1 0,-1 0,-2 0,-3 -1,2 -1,2 -5,2 1,-1 2,-3 3,-4 -2,0 -5,1 -8,2 -2,-4 -4,-7 -5,-10 -12,-2 -25,-1 -32,9 -5,0 -8,-1 -13,-1 -11,6 -19,10 -30,5 2,-7 2,-11 1,-18 -5,-14 -5,-14 -5,-17 1,0 1,0 2,0 -2,-5 -1,-10 0,-15 1,0 3,0 4,0 0,-1 0,-1 0,-2 7,-4 14,-6 21,-9 0,-1 0,-2 0,-3 9,-3 12,-9 21,-12 0,-1 1,-2 1,-4 1,1 1,1 2,2 0,-1 0,-2 0,-3 1,0 3,-1 4,-1 1,1 2,2 3,3 -1,0 -1,1 -1,1 0,0 1,1 2,1z',
						},
						{
							id: '29',
							name: 'Argentina',
							conexiones: [30, 31],
							path: 'M227 487c1,0 3,-1 5,-2 0,2 1,5 1,8 6,2 5,8 10,10 1,-2 2,-4 3,-5 1,0 2,-1 3,-1 3,4 4,3 9,1 0,1 0,2 0,3 1,0 3,0 5,0 4,7 9,7 16,10 -1,4 -2,7 -4,11 4,-1 8,-1 12,-2 2,-4 2,-4 5,-6 1,1 1,2 2,3 -4,3 -10,8 -11,13 2,0 4,0 7,0 0,2 0,2 0,6 5,1 6,4 10,8 0,2 0,2 -3,2 0,1 0,2 -1,4 -8,3 -12,-1 -19,-1 5,5 5,5 7,8 0,0 1,0 1,-1 0,3 0,6 0,8 -3,2 -13,3 -16,5 -1,6 -1,6 -2,9 -2,0 -4,0 -6,0 0,-1 -1,-1 -1,-2 0,1 0,3 0,4 0,1 1,2 2,3 -3,1 -3,1 -3,2 1,0 2,0 2,0 0,1 0,2 0,3 0,0 -1,0 -2,0 0,1 0,2 1,3 -4,4 -4,4 -4,9 1,0 2,1 3,1 -1,3 -1,5 -1,8 -1,0 -2,1 -3,1 1,3 -2,8 -2,11 1,1 3,3 4,4 0,1 -1,1 -2,2 1,1 1,2 1,3 1,0 2,0 3,0 0,1 0,2 0,3 6,3 12,6 18,10 -14,4 -13,3 -26,0 1,-1 1,-1 1,-2 -1,0 -2,0 -3,0 0,-2 0,-3 0,-4 -2,0 -4,0 -5,0 0,-1 0,-2 0,-3 0,0 -1,1 -2,1 -1,-1 -3,-1 -5,-2 0,-2 0,-3 0,-4 -9,-5 -9,-14 -10,-23 -3,0 -3,0 -4,-2 1,-1 1,-2 1,-3 -1,0 -1,0 -2,0 0,-1 0,-3 0,-4 2,0 2,0 2,-1 -1,0 -1,0 -2,0 0,-2 0,-4 0,-6 1,0 2,0 4,0 0,-4 0,-9 0,-13 -1,0 -2,-1 -3,-1 5,-28 6,-61 4,-89 M309 631c-2,0 -3,-1 -4,-2 -1,-3 -1,-6 -1,-9 7,-7 9,-5 18,-4 0,1 0,3 1,5 -6,2 -7,3 -10,9 -2,1 -3,1 -4,1z M295 630c-1,-2 -1,-2 -4,-3 0,0 0,-1 0,-2 1,0 2,-1 4,-1 -1,-1 -2,-3 -3,-4 3,-2 6,-3 9,-4 0,3 0,7 1,10 -3,3 -3,3 -7,4z',
						},
						{
							id: '30',
							name: 'Brasil',
							conexiones: [7, 29, 31, 32],
							path: 'M292 514c-2,-10 -4,-13 -13,-18 0,-2 -1,-4 -1,-6 1,-1 2,-1 3,-1 -5,-12 -5,-12 -7,-14 -5,-1 -5,-1 -6,-3 1,-1 1,-2 2,-2 -1,-1 -2,-2 -3,-2 0,-2 0,-3 0,-4 -8,-1 -14,-5 -20,-9 -2,-4 -2,-4 -3,-6 -5,3 -11,8 -16,7 -2,-6 -2,-6 -1,-9 -4,0 -5,2 -9,2 -5,-8 -14,-6 -9,-17 1,0 2,0 3,0 0,-7 1,-7 7,-9 0,0 1,1 1,1 3,0 5,0 8,0 4,-7 -1,-11 0,-18 2,-1 5,-2 7,-2 4,3 6,2 11,2 3,-3 3,-4 3,-9 6,-1 7,-3 15,-4 3,7 3,7 4,13 7,-1 14,1 20,-4 7,5 13,-5 16,-11 8,3 7,7 9,16 2,0 5,0 7,0 -1,2 -2,4 -3,5 5,1 10,1 16,3 0,1 0,2 0,2 14,-1 25,9 38,12 -1,14 -3,19 -14,27 0,3 -1,7 -1,10 -1,1 -2,1 -3,1 0,5 0,11 0,16 -12,18 -11,19 -31,23 0,1 0,2 0,3 -2,0 -3,0 -4,0 -5,8 -5,11 -5,20 -6,3 -9,9 -11,15 -1,0 -1,0 -2,0 -4,-4 -5,-7 -10,-8 0,-4 0,-4 0,-6 -3,0 -5,0 -7,0 1,-5 7,-10 11,-13 -1,-1 -1,-2 -2,-3z',
						},
						{
							id: '31',
							name: 'Peru',
							conexiones: [29, 30, 32],
							path: 'M227 487c-4,-1 -7,-3 -10,-5 0,-1 0,-2 0,-2 -4,-3 -8,-5 -12,-7 -5,-7 -17,-29 -25,-34 0,-2 0,-5 0,-7 2,-2 4,-3 4,-7 -1,1 -2,2 -3,3 -4,-7 4,-16 7,-22 6,4 14,4 16,10 14,5 14,5 16,6 0,0 -1,1 -1,1 -6,2 -7,2 -7,9 -1,0 -2,0 -3,0 -5,11 4,9 9,17 4,0 5,-2 9,-2 -1,3 -1,3 1,9 5,1 11,-4 16,-7 1,2 1,2 3,6 6,4 12,8 20,9 0,1 0,2 0,4 1,0 2,1 3,2 -1,0 -1,1 -2,2 1,2 1,2 6,3 2,2 2,2 7,14 -1,0 -2,0 -3,1 0,2 1,4 1,6 9,5 11,8 13,18 -3,2 -3,2 -5,6 -4,1 -8,1 -12,2 2,-4 3,-7 4,-11 -7,-3 -12,-3 -16,-10 -2,0 -4,0 -5,0 0,-1 0,-2 0,-3 -5,2 -6,3 -9,-1 -1,0 -2,1 -3,1 -1,1 -2,3 -3,5 -5,-2 -4,-8 -10,-10 0,-3 -1,-6 -1,-8 -2,1 -4,2 -5,2z',
						},
						{
							id: '32',
							name: 'Colombia',
							conexiones: [30, 31, 33],
							path: 'M219 423c0,0 1,-1 1,-1 -2,-1 -2,-1 -16,-6 -2,-6 -10,-6 -16,-10 1,-7 4,-13 5,-21 -1,0 -2,0 -3,-1 0,-3 1,-7 2,-10 1,0 2,0 3,0 0,-2 0,-4 0,-5 2,2 3,3 3,6 1,1 2,1 3,2 0,-2 -1,-4 -1,-6 4,-2 8,-5 12,-8 4,-2 7,-2 12,-5 2,0 3,0 5,-1 1,1 2,2 3,3 -1,1 -2,3 -4,4 1,2 2,3 3,5 0,-2 0,-2 0,-3 1,-1 1,-1 2,-1 0,-1 0,-2 0,-3 5,-1 8,0 13,2 10,0 18,-2 21,9 0,0 1,0 2,0 1,1 1,2 1,4 6,1 9,3 13,7 1,-1 2,-1 2,-2 5,3 16,7 19,9 -3,6 -9,16 -16,11 -6,5 -13,3 -20,4 -1,-6 -1,-6 -4,-13 -8,1 -9,3 -15,4 0,5 0,6 -3,9 -5,0 -7,1 -11,-2 -2,0 -5,1 -7,2 -1,7 4,11 0,18 -3,0 -5,0 -8,0 0,0 -1,-1 -1,-1z',
						},
						{
							id: '33',
							name: 'Centro-America',
							conexiones: [32, 34, 35],
							path: 'M212 363c-3,-4 -6,-9 -9,-14 0,-7 0,-7 -2,-16 -10,-6 -18,-11 -28,-16 0,-1 0,-2 0,-3 1,0 3,0 4,0 0,-1 -1,-3 -1,-4 -9,-7 -11,-18 -16,-27 -1,0 -1,1 -2,1 4,11 8,20 11,32 -6,-2 -9,-10 -10,-16 -4,-1 -5,-2 -7,-6 0,-1 1,-1 1,-2 -2,-6 -3,-10 -8,-13 -1,-1 -1,-3 -1,-4 4,0 9,0 14,0 8,9 18,0 27,10 2,0 4,1 6,2 2,2 4,4 6,6 -2,8 -2,22 5,26 4,0 8,0 12,0 4,-4 11,-4 14,2 -2,5 -9,8 -13,11 2,1 4,2 6,3 0,2 0,4 0,6 -6,4 -8,5 -11,11 0,1 1,2 1,2 6,1 8,0 13,4 -5,3 -8,3 -12,5z',
						},
						{
							id: '34',
							name: 'EE.UU. Oriental',
							conexiones: [33, 35, 36, 37],
							path: 'M197 293c-2,-2 -4,-4 -6,-6 0,-4 0,-9 0,-13 1,0 3,0 5,-1 1,-4 2,-8 3,-13 2,0 5,-1 8,-1 0,-3 1,-6 2,-9 6,0 12,0 18,0 1,-15 1,-29 2,-43 3,1 6,1 9,1 1,1 2,2 3,3 0,1 0,2 0,3 -1,0 -2,0 -3,0 0,1 0,2 0,3 5,-1 9,-1 13,-2 1,1 2,2 2,3 2,-1 2,-1 6,0 0,1 0,2 0,3 -2,0 -4,0 -5,0 -4,6 -6,9 -7,17 2,-1 4,-1 5,-2 1,-3 1,-7 2,-10 1,0 1,0 2,0 1,-3 2,-4 4,-5 3,3 2,5 0,9 1,0 3,0 4,0 0,0 0,1 0,1 0,2 -1,4 -1,6 7,1 13,-5 20,-7 0,-1 0,-1 0,-2 3,-1 6,-2 9,-3 7,0 7,0 17,-2 0,-2 0,-4 1,-5 5,-2 5,-2 9,-2 0,4 0,8 0,13 -15,1 -18,18 -33,21 -1,1 -2,3 -3,5 -1,0 -1,-1 -2,-1 0,2 0,4 0,6 -4,5 -11,9 -17,11 -1,4 -1,4 -3,8 0,8 0,15 -3,22 -2,1 -4,1 -6,2 -2,-14 -2,-14 -1,-20 -8,0 -10,-1 -20,-2 0,2 1,4 1,6 -10,-5 -19,-4 -30,0 -3,5 -3,5 -5,6z',
						},
						{
							id: '35',
							name: 'EE.UU. Occidental',
							conexiones: [33, 34, 37, 38],
							path: 'M144 275c-15,-24 -15,-33 -9,-61 1,0 2,0 4,0 -1,-5 -1,-5 -3,-9 24,1 49,1 73,2 7,0 14,0 20,0 -1,14 -1,28 -2,43 -6,0 -12,0 -18,0 -1,3 -2,6 -2,9 -3,0 -6,1 -8,1 -1,5 -2,9 -3,13 -2,1 -4,1 -5,1 0,4 0,9 0,13 -2,-1 -4,-2 -6,-2 -9,-10 -19,-1 -27,-10 -5,0 -10,0 -14,0z',
						},
						{
							id: '36',
							name: 'Quebec',
							conexiones: [34, 37, 41],
							path: 'M319 229c0,-5 0,-9 0,-13 -4,0 -4,0 -9,2 -1,1 -1,3 -1,5 -10,2 -10,2 -17,2 -4,-4 -6,-4 -11,-4 0,0 0,1 0,2 -2,0 -3,0 -4,0 0,-8 1,-17 1,-25 1,0 2,0 3,0 2,-5 2,-11 2,-17 5,-1 7,-3 11,-6 0,-7 -1,-9 -3,-15 8,-2 7,-8 8,-16 5,3 10,2 15,2 0,1 1,2 1,3 1,0 3,0 4,0 3,6 3,6 4,9 -1,0 -2,0 -3,0 1,3 3,5 4,7 2,1 3,1 5,1 0,0 0,-1 0,-2 2,-1 4,-2 6,-3 0,-1 0,-3 1,-5 1,-1 3,-2 5,-2 3,7 4,17 6,24 2,2 5,4 8,6 -4,2 -4,2 -4,4 3,0 6,0 9,0 0,3 1,6 1,9 -9,2 -9,2 -15,4 -7,7 -18,1 -22,6 2,1 5,2 7,3 0,1 0,2 1,4 -2,0 -3,0 -4,1 2,1 2,1 2,7 3,0 6,0 10,0 0,1 0,2 0,3 -9,3 -13,9 -21,10 0,-1 0,-2 0,-3 2,-1 3,-2 5,-3 -1,-1 -1,-1 -5,0z M357 219c0,-1 -1,-2 -2,-4 -1,1 -2,2 -4,3 0,-1 0,-2 0,-3 -2,0 -5,0 -7,-1 0,-2 1,-3 2,-5 1,0 2,0 3,0 1,-6 9,-10 15,-11 -1,2 -1,4 -1,5 -2,0 -3,0 -4,0 0,1 0,2 1,3 1,-1 2,-1 3,-1 0,1 1,3 2,4 -1,0 -2,1 -2,1 0,1 0,2 0,3 1,0 2,1 3,1 0,1 0,2 -1,3 -2,1 -5,1 -8,2z',
						},
						{
							id: '37',
							name: 'Ontario',
							conexiones: [34, 35, 36, 38, 39],
							path: 'M264 231c2,-1 2,-1 3,-6 1,1 3,1 4,2 0,-2 -1,-4 -1,-6 -16,-5 -8,-18 -29,-10 -1,-1 -2,-2 -3,-3 -3,0 -6,0 -9,-1 -6,0 -13,0 -20,0 1,-17 3,-35 4,-52 5,0 10,0 15,1 4,0 7,0 10,0 0,2 0,4 0,5 1,1 2,1 3,1 0,2 0,4 1,6 2,2 5,3 8,5 0,1 0,2 0,3 7,2 15,6 23,5 0,8 1,11 5,17 0,8 -1,17 -1,25 1,0 2,0 4,0 0,-1 0,-2 0,-2 5,0 7,0 11,4 -3,1 -6,2 -9,3 0,1 0,1 0,2 -7,2 -13,8 -20,7 0,-2 1,-4 1,-6z',
						},
						{
							id: '38',
							name: 'Columbia Britanica',
							conexiones: [35, 37, 39, 40],
							path: 'M136 205c-1,-1 -2,-3 -4,-4 0,-2 1,-4 1,-6 -3,-3 -6,-6 -8,-8 -1,0 -3,0 -4,0 0,-2 0,-3 0,-5 1,1 1,1 1,2 0,-1 0,-2 0,-3 0,-12 -4,-22 -12,-32 34,2 69,4 103,6 -1,17 -3,35 -4,52 -24,-1 -49,-1 -73,-2z',
						},
						{
							id: '39',
							name: 'Nunavut',
							conexiones: [37, 38, 40, 41],
							path: 'M213 155c-34,-2 -69,-4 -103,-6 -2,0 -5,0 -7,0 0,-16 0,-32 0,-49 2,2 5,3 7,4 1,-1 1,-2 1,-3 4,-1 4,-1 10,-1 0,0 0,1 1,1 -1,0 -2,1 -3,1 7,2 7,2 9,3 5,-3 13,-3 18,-3 0,0 -1,-1 -1,-1 2,0 4,0 6,0 3,-3 4,-3 8,-3 0,1 -1,2 -1,3 2,0 4,-1 10,-2 0,1 0,2 0,3 -1,0 -2,0 -3,0 0,1 0,1 0,2 9,-4 18,2 27,4 0,1 0,2 0,3 -1,0 -2,0 -2,0 0,1 0,2 0,3 6,0 9,-1 15,-2 0,1 0,2 0,3 1,0 2,0 3,0 0,-1 0,-2 0,-3 1,0 2,0 4,0 0,-1 -3,-1 -3,-2 9,-1 13,0 22,2 -1,15 -2,29 -3,44 -5,-1 -10,-1 -15,-1z M228 156c1,-15 2,-29 3,-44 2,0 4,-1 6,-1 -1,-4 -1,-4 -2,-6 3,-1 5,-1 8,-1 0,2 0,3 0,4 2,0 4,0 6,0 0,-1 0,-1 0,-2 -1,0 -2,0 -3,0 3,-17 9,-26 26,-28 -4,6 -5,10 -12,10 -2,10 0,14 3,23 1,-1 2,-3 2,-4 2,1 3,1 4,2 1,2 1,4 1,6 2,0 3,0 4,0 0,-1 0,-2 0,-3 1,0 2,-1 3,-1 0,-1 1,-3 1,-4 3,0 5,0 8,0 0,0 0,-1 0,-1 -3,0 -5,0 -8,0 0,-1 0,-2 -1,-3 0,0 -1,1 -1,1 -4,-6 -3,-7 -2,-15 5,-2 8,-4 14,-4 -1,2 -3,4 -4,6 0,2 1,4 1,5 2,-3 3,-5 6,-7 0,-2 1,-4 1,-6 4,0 8,0 12,0 -2,4 -3,7 -4,11 2,0 4,0 6,0 0,-6 0,-6 1,-7 9,5 9,5 10,6 0,1 0,2 -1,3 8,1 8,1 9,2 0,1 -1,1 -1,2 1,0 3,0 4,0 0,1 -1,2 -1,3 2,1 5,3 7,4 0,1 -1,2 -1,3 -1,0 -3,0 -4,0 0,0 0,1 0,2 1,0 3,0 4,0 0,1 0,2 0,3 2,0 3,0 5,0 1,2 2,5 3,8 1,0 1,0 2,0 -1,2 -2,4 -3,5 -2,1 -3,1 -4,1 -2,-2 -2,-2 -4,-7 -1,1 -1,1 -1,7 1,1 2,2 3,3 -1,3 -1,6 -1,9 -4,0 -5,0 -8,-3 0,2 0,2 2,6 -8,-1 -14,-2 -16,-10 -5,0 -10,0 -15,-1 0,-1 1,-2 1,-3 9,-3 13,-5 18,-6 0,-1 -1,-2 -1,-3 -1,0 -3,0 -4,1 0,-2 -1,-3 -1,-5 -2,0 -4,0 -7,1 1,-1 1,-3 1,-3 1,-1 2,-1 3,-1 0,-1 0,-2 0,-3 -1,0 -2,0 -2,0 -1,-3 -1,-5 -2,-8 -1,0 -1,0 -1,3 -3,0 -5,1 -8,2 0,-1 -1,-2 -1,-2 -1,0 -3,0 -4,1 0,12 -4,20 -18,19 -2,3 -2,4 -5,5 -3,-2 -4,-4 -7,-4 1,2 3,4 5,6 -5,5 -13,8 -20,12 -1,4 -3,7 -5,11 -3,0 -6,0 -10,0z M264 145c1,-5 3,-10 6,-15 2,1 4,1 5,1 0,1 0,2 0,2 1,0 2,0 3,0 1,4 2,4 5,6 -1,2 -1,2 -2,5 -1,0 -2,0 -3,0 0,-1 0,-3 0,-4 -6,1 -8,4 -14,5z M296 124c-1,-6 -1,-6 5,-8 0,2 0,4 0,6 -2,0 -3,1 -5,2z M195 110c-1,-3 -3,-6 -4,-8 -4,-1 -9,-1 -13,-2 -1,-2 -2,-5 -2,-8 2,0 4,-1 6,-2 -1,0 -3,0 -4,-1 1,-1 1,-1 9,-3 -2,0 -4,-1 -5,-1 -1,-1 -1,-2 -1,-3 6,-1 7,-2 14,-2 3,4 5,3 9,5 -1,1 -1,1 -2,1 3,1 6,2 8,2 1,-2 1,-2 3,-3 2,3 2,4 5,5 1,-4 3,-8 4,-12 3,6 3,10 2,17 3,1 5,2 8,3 0,1 0,1 0,2 -1,1 -2,1 -3,1 1,0 1,1 2,1 -2,1 -3,1 -4,2 0,1 1,2 1,3 -4,0 -5,0 -9,-2 -8,2 -16,3 -24,5z M235 95c-1,-3 -2,-6 -2,-9 0,-1 1,-2 2,-3 1,1 1,2 1,3 1,-2 2,-3 3,-4 0,0 1,1 1,1 0,-1 1,-2 1,-2 1,0 2,0 4,0 -1,1 -1,3 -2,5 3,-1 6,-2 8,-2 -3,5 -3,5 -6,6 0,1 0,2 0,2 -4,1 -7,2 -10,3z M160 88c0,-2 -1,-4 -1,-6 2,-1 3,-1 5,-1 0,-2 0,-3 0,-4 6,-1 6,-1 10,-3 0,-1 0,-2 0,-3 2,0 4,0 5,0 1,2 1,3 1,5 3,-1 5,-1 7,-1 0,1 -1,2 -1,3 -4,2 -8,3 -12,5 0,1 -1,2 -1,3 -9,0 -9,0 -13,2z M252 79c0,-2 0,-5 0,-8 1,1 2,1 3,1 1,3 1,5 1,7 -1,0 -2,0 -4,0z M199 78c-2,-1 -3,-1 -4,-2 0,-1 1,-1 1,-1 -2,-1 -3,-1 -5,-1 0,-1 0,-2 0,-3 1,0 3,-1 4,-2 -1,0 -1,-1 -1,-1 -3,1 -6,2 -8,3 -1,-1 -1,-2 -1,-2 -2,0 -3,0 -4,0 2,-8 15,-7 21,-7 0,1 0,2 0,3 -3,0 -3,0 -5,2 3,0 6,0 8,0 1,1 2,2 2,3 2,-1 4,-1 6,-1 -1,-1 -1,-2 -1,-3 4,-3 8,-1 14,-1 0,1 0,2 0,4 -3,0 -3,0 -3,1 1,0 3,0 4,0 -1,1 -1,3 -1,4 -11,1 -16,1 -27,4z M240 75c-3,-2 -6,-2 -9,-2 0,-3 1,-7 1,-10 1,0 3,0 4,0 0,2 1,3 2,4 0,-1 0,-1 0,-2 3,-1 6,-2 8,-3 1,2 2,4 2,6 -5,3 -5,3 -8,7z M268 74c-5,-2 -8,-3 -11,-8 -2,0 -3,0 -5,0 0,-2 0,-5 0,-8 -5,-1 -5,-7 -6,-12 1,0 2,0 3,0 0,1 0,2 0,3 4,2 5,2 7,6 1,0 2,0 3,0 1,4 3,7 5,10 8,0 16,1 24,1 0,2 0,5 -1,7 -6,0 -13,1 -19,1z M290 65c-2,-1 -4,-1 -6,-2 0,-1 0,-1 0,-2 -1,-1 -2,-1 -2,-1 -1,1 -1,1 -1,2 -3,0 -5,-1 -7,-1 0,-1 -1,-2 -1,-3 -1,0 -3,0 -4,0 -1,-1 -1,-2 -1,-3 -4,1 -5,1 -8,-1 -1,-1 -1,-2 -1,-3 3,0 6,0 9,0 1,-1 1,-2 2,-3 1,0 2,0 3,0 0,1 1,2 1,3 1,0 2,0 3,0 0,-1 0,-2 0,-3 -4,-1 -7,-2 -10,-2 1,-2 1,-2 9,-3 0,-1 0,-1 1,-2 -3,0 -7,-1 -10,-1 0,-1 0,-2 0,-3 11,-7 25,-5 38,-6 -13,-5 -27,1 -40,1 -1,-1 -2,-1 -2,-2 1,-1 3,-2 5,-2 0,-2 1,-5 1,-7 3,0 5,1 8,1 1,-1 1,-2 2,-3 10,0 20,-1 30,-2 0,1 0,2 0,3 18,-1 18,-1 27,-3 0,2 0,4 1,5 4,1 18,-1 13,7 -1,1 -4,1 -10,4 0,1 0,2 0,3 -4,0 -6,-1 -8,0 0,1 1,1 1,2 -1,1 -19,6 -21,8 0,1 0,2 1,3 -7,2 -7,2 -10,5 0,1 0,2 0,3 -5,0 -6,-1 -10,-4 0,5 1,6 3,10 -2,1 -4,1 -6,2z M224 57c0,-2 0,-3 0,-5 1,0 3,0 4,0 0,1 0,3 0,4 -1,0 -2,0 -4,1z M241 57c-4,-6 -9,-5 -6,-13 5,3 5,3 7,4 1,4 1,5 -1,9z',
						},
						{
							id: '40',
							name: 'Alaska',
							conexiones: [19, 38, 39],
							path: 'M109 174c1,1 2,2 3,3 0,2 0,4 0,7 -1,-3 -3,-5 -5,-8 1,0 1,-1 2,-2z M105 164c0,-1 0,-2 0,-3 3,0 3,0 3,-1 -3,-1 -6,-3 -8,-4 -1,1 -1,2 -1,2 -2,0 -4,-1 -6,-2 0,-1 0,-2 0,-3 0,-1 -1,-1 -2,-1 0,1 -1,1 -1,2 -1,0 -2,-1 -3,-1 1,-1 1,-1 2,-2 -1,0 -2,-1 -2,-1 0,0 -1,1 -1,2 -3,-1 -3,-2 -5,-5 -3,0 -3,0 -6,-2 -1,0 -1,0 -2,1 1,1 2,3 3,5 -8,2 -13,4 -17,5 0,-1 0,-3 0,-4 3,-2 5,-4 8,-6 -6,1 -10,7 -15,6 0,2 0,4 0,5 -2,2 -5,4 -7,5 0,1 0,2 0,3 -6,3 -24,13 -29,9 5,-4 10,-6 16,-8 0,0 0,-1 0,-2 4,-1 4,-3 5,-7 -2,1 -5,1 -7,1 0,-2 0,-2 -2,-2 0,1 0,2 0,2 -1,1 -3,1 -5,1 0,-3 0,-3 2,-7 -1,0 -2,0 -3,0 -1,-5 -3,-4 -6,-3 -1,-2 -1,-4 -2,-6 2,-1 3,-2 4,-2 -1,-1 -2,-1 -2,-1 0,-2 0,-4 1,-5 5,-3 9,-1 15,0 2,-3 5,-6 4,-9 -7,4 -8,3 -14,-2 1,-1 2,-3 3,-5 1,0 1,1 1,1 0,-2 0,-3 0,-5 3,0 6,0 9,0 -2,-4 -5,-8 -4,-12 1,-1 2,-1 4,-1 0,-1 0,-2 0,-3 9,-2 19,-9 29,-8 0,1 -1,2 -1,3 13,0 26,5 40,6 0,17 0,33 0,49 2,0 5,0 7,0 8,10 12,20 12,32 -4,-2 -11,-12 -13,-17 -1,0 -3,0 -4,0z M44 172c0,-3 2,-8 6,-7 1,1 1,2 1,3 -2,1 -5,2 -7,4z',
						},
						{
							id: '41',
							name: 'Groenlandia',
							conexiones: [5, 36, 39],
							path: 'M373 174c-4,-2 -6,-3 -8,-8 -2,0 -4,0 -7,-1 0,-1 0,-2 -1,-3 -1,0 -2,0 -2,-1 -1,-1 -1,-3 -1,-5 -2,-1 -3,-1 -4,-2 0,-1 1,-1 2,-2 -1,-4 -2,-7 -3,-11 0,0 -1,-1 -2,-1 0,-2 0,-4 0,-5 1,-1 2,-1 3,-1 -4,-3 -2,-5 0,-9 1,1 1,1 2,2 0,-2 1,-5 2,-7 2,0 2,0 2,-1 -2,0 -4,0 -6,0 0,1 1,2 1,4 -1,0 -3,0 -4,0 0,-1 0,-3 0,-4 0,-1 1,-1 1,-2 -1,0 -1,0 -2,-1 1,-4 1,-4 2,-6 6,3 6,3 8,3 -1,-2 -2,-4 -3,-6 -2,1 -3,1 -5,1 0,-10 -2,-22 -12,-25 0,-1 0,-2 0,-4 -1,0 -3,1 -4,1 -2,-2 -2,-2 -3,-5 -7,1 -9,5 -17,3 -1,-3 -1,-3 -2,-3 0,1 0,2 0,3 -5,-1 -5,-1 -8,-2 -1,-4 -1,-7 -2,-10 3,-1 3,-1 10,1 0,-1 0,-2 0,-3 -2,0 -5,0 -8,-1 2,-7 10,-3 16,-7 -2,-1 -3,-2 -4,-3 6,-3 10,-5 17,-7 0,-1 0,-2 0,-2 2,0 4,0 6,0 1,-4 1,-4 4,-5 1,0 2,1 3,2 0,-2 1,-4 2,-5 3,0 5,4 6,4 0,-1 0,-2 0,-3 2,0 3,1 4,1 1,-1 1,-2 1,-2 2,-1 4,-1 6,-1 0,1 1,2 1,3 2,-1 2,-1 10,-3 0,0 -1,-1 -1,-1 1,-2 1,-2 13,-2 -1,-3 -1,-6 -1,-9 3,0 6,0 10,-1 0,1 0,2 0,3 0,0 1,0 2,0 3,-9 19,-7 26,-7 0,1 0,2 0,3 13,3 22,7 36,8 0,1 0,2 0,3 -2,0 -4,1 -6,2 5,-1 10,-3 13,0 -4,4 -6,4 -13,4 0,1 0,2 0,3 4,0 9,-1 12,2 0,-1 1,-1 1,-2 7,-1 14,-1 21,-2 1,1 1,2 2,3 -1,1 -1,1 -10,3 1,0 1,2 1,3 -1,0 -2,0 -4,0 -2,4 -3,9 -7,10 -1,3 -1,6 -1,9 1,0 2,0 3,0 0,2 0,3 0,4 0,1 -1,1 -2,1 0,2 0,4 0,6 -1,0 -2,1 -3,1 0,1 0,2 0,3 2,0 4,0 6,1 0,1 0,3 0,4 -8,1 -7,5 -8,11 -2,0 -2,-3 -3,-3 0,1 0,2 0,3 -3,-1 -6,-4 -9,-1 2,1 4,2 7,3 0,3 1,6 2,9 -2,2 -3,4 -4,6 -2,-1 -2,-1 -5,-1 -3,-4 -4,-8 -5,-8 0,1 0,3 0,5 -2,1 -3,1 -5,2 3,1 6,1 9,2 -1,1 -2,3 -2,4 -10,3 -18,8 -28,10 0,0 0,-1 0,-2 -5,4 -7,6 -12,6 0,1 0,2 0,3 -7,2 -14,2 -20,4 0,7 -4,10 -8,16 -2,8 -4,12 -8,18z',
						},
					],
				},
				s = r(11),
				i = r(4),
				g = r(212),
				O = (r(992), r(208)),
				d = r(205),
				u = r(12),
				D = r(15),
				l = r(23),
				w = r(210),
				C = r(209),
				B = r(222),
				E = r(16),
				p = r(223),
				Q = r(92),
				h = r(68),
				j = r(214),
				m = (r(993), r(221)),
				x = r(2)
			o.locations = o.locations.map(function (A) {
				return Object(a.a)(
					Object(a.a)({}, A),
					{},
					{ coords: Object(Q.obtenerCentro)(A), clase: '' }
				)
			})
			var I = function Partida() {
				var A = Object(n.useContext)(u.default),
					e = Object(c.e)().id,
					r = Object(s.default)(),
					I = Object(t.a)(r, 2),
					M = I[0],
					H = I[1],
					f = Object(n.useState)(!1),
					b = Object(t.a)(f, 2),
					v = b[0],
					N = b[1],
					F = Object(n.useRef)(void 0),
					z = Object(n.useState)(o),
					G = Object(t.a)(z, 2),
					Y = G[0],
					P = G[1]
				Object(n.useEffect)(function () {
					y()
					var A = setInterval(function () {
						Object(h.ping)(F.current)
					}, l.default.TIEMPO_PING)
					return function () {
						console.log('Desmontando ws'),
							F.current &&
								F.current.readyState !== WebSocket.CLOSED &&
								F.current.close(),
							clearInterval(A)
					}
				}, [])
				var U = function sendData(A) {
					F.current.send(JSON.stringify(A))
				}
				Object(n.useEffect)(
					function () {
						console.log(M)
						var A = { tipo: 'Fase' }
						switch (
							((function unirMapas() {
								var A = -1,
									e = -1,
									r = [-1],
									t = [-1],
									n = -1,
									c = []
								if (
									M.estadoInterno ===
									s.ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN
								)
									(n = Object(s.obtenerOrigen)(M)),
										o.locations[n].conexiones.forEach(function (A) {
											M.territorios[n].jugador !== M.territorios[A].jugador &&
												c.push(A)
										})
								else if (
									M.estadoInterno ===
									s.ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN
								)
									(n = Object(s.obtenerOrigen)(M)),
										(c = Object(Q.destinosMovimientos)(
											n,
											M.territorios,
											o.locations
										))
								else if (
									M.estadoInterno ===
									s.ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO
								)
									console.log('e'), (c = [Object(s.obtenerDestino)(M)])
								else if (
									M.estadoInterno ===
										s.ESTADOS.FASE_DE_ATAQUE_SELECCIONADO_DESTINO ||
									M.estadoInterno ===
										s.ESTADOS.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO
								)
									(n = Object(s.obtenerOrigen)(M)),
										(c = [Object(s.obtenerDestino)(M)])
								else if (
									M.estadoInterno !== s.ESTADOS.CARGANDO &&
									'ultimaJugada' in M
								) {
									var i = M.ultimaJugada
									M.ultimaJugada.jugada === s.JUGADAS.REFUERZO
										? (A = i.territorio.id)
										: (i.jugada === s.JUGADAS.ATAQUE &&
												((r = i.dadosOrigen), (t = i.dadosDestino)),
										  (A = i.territorioOrigen.id),
										  (e = i.territorioDestino.id))
								}
								var g = o.locations.map(function (r, t) {
									if (M.estadoInterno !== s.ESTADOS.CARGANDO) {
										var o = M.jugadores[M.territorios[t].jugador],
											i = parseInt(r.id),
											g = ''
										return (
											i === n
												? (g = 'origen')
												: c.includes(i)
												? (g = 'destino')
												: i === A
												? (g = 'origen_antiguo')
												: i === e && (g = 'destino_antiguo'),
											Object(a.a)(
												Object(a.a)({}, r),
												{},
												{
													jugador: M.territorios[t].jugador,
													aspecto: o.aspecto,
													tropas: M.territorios[t].tropas,
													clase: g,
												}
											)
										)
									}
									return r
								})
								g = g.map(function (A) {
									if (M.estadoInterno !== s.ESTADOS.CARGANDO) {
										var e = []
										return (
											A.conexiones.forEach(function (r) {
												'40' === A.id && 19 === r
													? e.push({ x: 0, y: A.coords.y })
													: '19' === A.id && 40 === r
													? e.push({ x: 1024, y: A.coords.y })
													: parseInt(A.id) < r && e.push(g[r].coords)
											}),
											Object(a.a)(
												Object(a.a)({}, A),
												{},
												{ centrosAdyacentes: e }
											)
										)
									}
									return A
								})
								var O = {
									label: o.label,
									viewBox: o.viewBox,
									origenAntiguo: A,
									destinoAntiguo: e,
									origen: n,
									listaDestino: c,
									locations: g,
									dadosOrigen: r,
									dadosDestino: t,
								}
								P(O)
							})(),
							M.estadoInterno)
						) {
							case s.ESTADOS.ESPERANDO_CONFIRMACION_REFUERZO:
								U({
									tipo: 'Refuerzos',
									id: Object(s.obtenerDestino)(M),
									tropas: Object(s.obtenerTropas)(M),
								})
								break
							case s.ESTADOS.ESPERANDO_CONFIRMACION_ATAQUE:
								U({
									tipo: 'Ataque',
									origen: Object(s.obtenerOrigen)(M),
									destino: Object(s.obtenerDestino)(M),
									tropas: Object(s.obtenerTropas)(M),
								})
								break
							case s.ESTADOS.ESPERANDO_CONFIRMACION_MOVIMIENTO:
								U({
									tipo: 'Movimiento',
									origen: Object(s.obtenerOrigen)(M),
									destino: Object(s.obtenerDestino)(M),
									tropas: Object(s.obtenerTropas)(M),
								})
								break
							case s.ESTADOS.CAMBIO_DE_FASE_A_MOVIMIENTO:
							case s.ESTADOS.CAMBIO_DE_FASE_A_ATAQUE:
							case s.ESTADOS.PASAR_TURNO:
								U(A)
						}
					},
					[M]
				)
				var y = function connect() {
						;(F.current = new WebSocket(
							''.concat(l.default.BASER_WS_URL, 'entrarPartida')
						)),
							(F.current.onopen = function () {
								console.log(F.current.readyState, 'Conectado')
								var r = Object(a.a)(
									Object(a.a)({}, Object(D.obtenerCredenciales)(A)),
									{},
									{ idSala: parseInt(e) }
								)
								F.current.send(JSON.stringify(r)), N(!1)
							}),
							(F.current.onclose = function () {
								console.log('Socket cerrado.'), N(!0)
							}),
							(F.current.onerror = function (A) {
								console.error(
									'Socket encountered error: ',
									A.message,
									'Closing socket'
								),
									N(!0),
									F.current.close()
							}),
							(F.current.onmessage = function (e) {
								var r = JSON.parse(e.data),
									t = {
										tipo: s.MAPEO_TIPO_ACCIONES[r._tipoMensaje],
										idJugador: Object(D.obtenerIdUsuario)(A),
										data: r,
									}
								H(t)
							})
					},
					K = Object(n.useCallback)(
						function (A) {
							console.log(M, 'origen'),
								H({
									tipo: s.ACCIONES.SELECCIONAR_TERRITORIO,
									data: { datosExtra: parseInt(A) },
								})
						},
						[M]
					),
					T = function cancelarAccion() {
						H({ tipo: s.ACCIONES.CANCELAR })
					}
				return (
					console.log(M.estadoInterno, 'estado'),
					Object(x.jsxs)(i.g, {
						fluid: !0,
						children: [
							M.estadoInterno === s.ESTADOS.CARGANDO &&
								Object(x.jsx)(E.ErroresServer, { serverErrors: M.error }),
							Object(x.jsx)(w.ModalReconectando, {
								isOpen: v,
								error: M.error ? M.error : '',
							}),
							M.estadoInterno === s.ESTADOS.FIN_PARTIDA &&
								Object(x.jsx)(p.ModalFinPartida, {
									isOpen: M.estadoInterno === s.ESTADOS.FIN_PARTIDA,
									ganador: M.jugadores[M.datosFin.ganador].nombre,
									riskos: M.datosFin.riskos,
								}),
							M.estadoInterno !== s.ESTADOS.CARGANDO &&
								Object(x.jsx)(C.ModalFormNumeroTropas, {
									isOpen: Object(s.tocaNumeroTropas)(M),
									estado: M,
									locations: Y.locations,
									max: (function maxTropas(A) {
										return A.estadoInterno === s.ESTADOS.FASE_DE_REFUERZOS ||
											A.estadoInterno ===
												s.ESTADOS.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO
											? Object(s.refuerzosRestantes)(A)
											: Y.locations[Object(s.obtenerOrigen)(A)].tropas - 1
									})(M),
									onSubmit: function onSubmit(A) {
										!(function seleccionarUnidades(A) {
											H({
												tipo: s.ACCIONES.SELECCIONAR_UNIDADES,
												data: { datosExtra: A },
											})
										})(parseInt(A.n))
									},
									toggle: T,
								}),
							M.estadoInterno !== s.ESTADOS.CARGANDO &&
								Object(x.jsxs)(x.Fragment, {
									children: [
										Object(x.jsx)(i.D, {
											children: Object(x.jsx)(O.default, {
												jugadores: M.jugadores,
												jugadorTurno: M.turnoJugador,
											}),
										}),
										Object(x.jsxs)(i.D, {
											className: 'd-flex justify-content-center',
											children: [
												Object(x.jsx)(i.e, {
													sm: '7',
													className:
														'd-flex justify-content-center align-items-center',
													children: Object(x.jsx)(d.default, { fase: M.fase }),
												}),
												Object(x.jsx)(i.e, {
													sm: '2',
													children: Object(x.jsx)(j.Temporizador, {
														tiempoInicio: M.ultimoTurno,
														tiempoTurno: M.tiempoTurno,
													}),
												}),
											],
										}),
										Object(x.jsxs)(i.D, {
											children: [
												Object(x.jsxs)(i.e, {
													md: '2',
													className:
														'pr-0 d-flex flex-column align-items-center justify-content-center',
													children: [
														Object(x.jsx)(E.ErroresServer, {
															serverErrors: M.error,
														}),
														Object(x.jsx)(m.default, {
															dados_origen: Y.dadosOrigen,
															dados_destino: Y.dadosDestino,
														}),
													],
												}),
												Object(x.jsx)(i.e, {
													md: '9',
													className:
														'd-flex justify-content-center align-items-center',
													children: Object(x.jsx)('div', {
														className: 'mapa',
														children: Object(x.jsx)(g.MemorizedSVGMap, {
															map: Y,
															onLocationClick: K,
														}),
													}),
												}),
												Object(x.jsxs)(i.e, {
													md: '1',
													className:
														'pl-0 d-flex flex-column justify-content-center align-content-center',
													children: [
														Object(x.jsxs)(i.d, {
															onClick: T,
															disabled:
																M.estadoInterno === s.ESTADOS.turnoRival,
															className: 'btn-cancelar',
															children: [' ', 'Cancelar'],
														}),
														Object(x.jsxs)(i.d, {
															onClick: function pasarFase() {
																H({
																	tipo: s.ACCIONES.ENVIAR_MENSAJE_CAMBIO_FASE,
																})
															},
															disabled:
																M.estadoInterno === s.ESTADOS.turnoRival,
															className: 'btn-pasar',
															children: [' ', 'Pasar fase'],
														}),
													],
												}),
											],
										}),
									],
								}),
							M.estadoInterno === s.ESTADOS.CARGANDO &&
								Object(x.jsx)(B.Cargando, {}),
						],
					})
				)
			}
			e.default = I
		},
		11: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'JUGADAS', function () {
					return n
				}),
				r.d(e, 'ACCIONES', function () {
					return c
				}),
				r.d(e, 'MAPEO_TIPO_ACCIONES', function () {
					return o
				}),
				r.d(e, 'FASES', function () {
					return s
				}),
				r.d(e, 'ESTADOS', function () {
					return i
				}),
				r.d(e, 'obtenerOrigen', function () {
					return obtenerOrigen
				}),
				r.d(e, 'obtenerDestino', function () {
					return obtenerDestino
				}),
				r.d(e, 'obtenerTropas', function () {
					return obtenerTropas
				}),
				r.d(e, 'tocaOrigen', function () {
					return tocaOrigen
				}),
				r.d(e, 'tocaDestino', function () {
					return tocaDestino
				}),
				r.d(e, 'tocaNumeroTropas', function () {
					return tocaNumeroTropas
				}),
				r.d(e, 'refuerzosRestantes', function () {
					return refuerzosRestantes
				}),
				r.d(e, 'default', function () {
					return partidaEstado
				})
			var t = r(10),
				a = r(1),
				n = {
					REFUERZO: 'REFUERZO',
					ATAQUE: 'ATAQUE',
					MOVIMIENTO: 'MOVIMIENTO',
				},
				c = {
					ERROR: 'ERROR',
					ERROR_GLOBAL: 'ERROR_GLOBAL',
					CANCELAR: 'CANCELAR',
					DATOS_COMPLETOS_PARTIDA: 'DATOS_COMPLETOS_PARTIDA',
					TOCA_MI_TURNO: 'MI_TURNO',
					ENVIAR_MENSAJE_CAMBIO_FASE: 'MENSAJE_CAMBIO_FASE',
					CONFIRMACION_CAMBIO_FASE: 'CONFIRMACION_CAMBIO_FASE',
					SELECCIONAR_ORIGEN: 'SELECCIONAR_ORIGEN',
					SELECCIONAR_DESTINO: 'SELECCIONAR_DESTINO',
					SELECCIONAR_UNIDADES: 'SELECCIONAR_UNIDADES',
					SELECCIONAR_TERRITORIO: 'SELECCIONAR_TERRITORIO',
					ENVIAR_MENSAJE_REFUERZO: 'ENVIAR_MENSAJE_REFUERZO',
					CONFIRMACION_REFUERZO: 'CONFIRMACION_REFUERZO',
					ENVIAR_MENSAJE_ATAQUE: 'ENVIAR_MENSAJE_ATAQUE',
					CONFIRMACION_ATAQUE: 'CONFIRMACION_ATAQUE',
					ENVIAR_MENSAJE_MOVIMIENTO: 'ENVIAR_MENSAJE_MOVIMIENTO',
					CONFIRMACION_MOVIMIENTO: 'CONFIRMACION_MOVIMIENTO',
					FIN_PARTIDA: 'FIN_PARTIDA',
				},
				o = {
					p: c.DATOS_COMPLETOS_PARTIDA,
					f: c.CONFIRMACION_CAMBIO_FASE,
					r: c.CONFIRMACION_REFUERZO,
					a: c.CONFIRMACION_ATAQUE,
					m: c.CONFIRMACION_MOVIMIENTO,
					e: c.ERROR,
					t: c.FIN_PARTIDA,
				},
				s = { FASE_REFUERZOS: 1, FASE_ATAQUE: 2, FASE_MOVIMIENTO: 3 },
				i = {
					CARGANDO: 'CARGANDO',
					TURNO_RIVAL: 'TURNO_RIVAL',
					FASE_DE_REFUERZOS: 'FASE DE REFUERZOS',
					FASE_DE_REFUERZOS_SELECCIONADO_DESTINO:
						'FASE DE REFUERZOS SELECCIONADO DESTINO',
					ESPERANDO_CONFIRMACION_REFUERZO: 'ESPERANDO CONFIRMACION REFUERZO',
					CAMBIO_DE_FASE_A_ATAQUE: 'CAMBIO DE FASE A ATAQUE',
					FASE_DE_ATAQUE: 'FASE DE ATAQUE',
					FASE_DE_ATAQUE_SELECCIONADO_ORIGEN:
						'FASE DE ATAQUE SELECCIONADO ORIGEN',
					FASE_DE_ATAQUE_SELECCIONADO_DESTINO:
						'FASE DE ATAQUE SELECCIONADO DESTINO',
					ESPERANDO_CONFIRMACION_ATAQUE: 'ESPERANDO CONFIRMACION ATAQUE',
					CAMBIO_DE_FASE_A_MOVIMIENTO: 'CAMBIO DE FASE A MOVIMIENTO',
					FASE_DE_MOVIMIENTO: 'FASE DE MOVIMIENTO',
					FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN:
						'FASE DE MOVIMIENTO SELECCIONADO ORIGEN',
					FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO:
						'FASE DE MOVIMIENTO SELECCIONADO DESTINO',
					ESPERANDO_CONFIRMACION_MOVIMIENTO:
						'ESPERANDO CONFIRMACION MOVIMIENTO',
					PASAR_TURNO: 'PASAR TURNO',
					FIN_PARTIDA: 'FIN PARTIDA',
				},
				g = [
					i.CARGANDO,
					i.FASE_DE_REFUERZOS,
					i.FASE_DE_ATAQUE,
					i.FASE_DE_MOVIMIENTO,
				]
			function obtenerOrigen(A) {
				return A.datosJugadaActual.origen
			}
			function obtenerDestino(A) {
				return A.datosJugadaActual.destino
			}
			function obtenerTropas(A) {
				return A.datosJugadaActual.tropas
			}
			function tocaOrigen(A) {
				return (
					A.estadoInterno === i.FASE_DE_ATAQUE ||
					A.estadoInterno === i.FASE_DE_MOVIMIENTO
				)
			}
			function tocaDestino(A) {
				return (
					A.estadoInterno === i.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN ||
					A.estadoInterno === i.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN ||
					A.estadoInterno === i.FASE_DE_REFUERZOS
				)
			}
			function tocaNumeroTropas(A) {
				return (
					A.estadoInterno === i.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO ||
					A.estadoInterno === i.FASE_DE_ATAQUE_SELECCIONADO_DESTINO ||
					A.estadoInterno === i.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO
				)
			}
			function estadoPrevio(A) {
				switch (A) {
					case i.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO:
					case i.ESPERANDO_CONFIRMACION_REFUERZO:
						return i.FASE_DE_REFUERZOS
					case i.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN:
					case i.FASE_DE_ATAQUE_SELECCIONADO_DESTINO:
					case i.ESPERANDO_CONFIRMACION_ATAQUE:
						return i.FASE_DE_ATAQUE
					case i.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN:
					case i.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO:
					case i.ESPERANDO_CONFIRMACION_MOVIMIENTO:
						return i.FASE_DE_MOVIMIENTO
					case i.CAMBIO_DE_FASE_A_ATAQUE:
						return i.FASE_DE_REFUERZOS
					case i.CAMBIO_DE_FASE_A_MOVIMIENTO:
						return i.FASE_DE_ATAQUE
					case i.PASAR_TURNO:
						return i.FASE_DE_MOVIMIENTO
					default:
						return A
				}
			}
			function estadoSiguienteSeleccionarLocalizacion(A) {
				switch ((console.log('!'), A)) {
					case i.FASE_DE_MOVIMIENTO:
						return i.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN
					case i.FASE_DE_ATAQUE:
						return i.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN
					case i.FASE_DE_REFUERZOS:
						return i.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO
					case i.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN:
						return i.FASE_DE_ATAQUE_SELECCIONADO_DESTINO
					case i.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN:
						return i.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO
					default:
						throw (console.log(A, 'F'), 'No tiene siguiente')
				}
			}
			function estadoSiguienteSeleccionarUnidades(A) {
				switch (A) {
					case i.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO:
						return i.ESPERANDO_CONFIRMACION_REFUERZO
					case i.FASE_DE_ATAQUE_SELECCIONADO_DESTINO:
						return i.ESPERANDO_CONFIRMACION_ATAQUE
					case i.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO:
						return i.ESPERANDO_CONFIRMACION_MOVIMIENTO
					default:
						return A
				}
			}
			function estadoACambioFase(A) {
				switch (A) {
					case i.FASE_DE_REFUERZOS:
					case i.FASE_DE_REFUERZOS_SELECCIONADO_DESTINO:
						return i.CAMBIO_DE_FASE_A_ATAQUE
					case i.FASE_DE_ATAQUE:
					case i.FASE_DE_ATAQUE_SELECCIONADO_ORIGEN:
					case i.FASE_DE_ATAQUE_SELECCIONADO_DESTINO:
						return i.CAMBIO_DE_FASE_A_MOVIMIENTO
					case i.FASE_DE_MOVIMIENTO:
					case i.FASE_DE_MOVIMIENTO_SELECCIONADO_ORIGEN:
					case i.FASE_DE_MOVIMIENTO_SELECCIONADO_DESTINO:
						return i.PASAR_TURNO
					default:
						return A
				}
			}
			function estadoSigCambioFase(A) {
				switch (A) {
					case i.CAMBIO_DE_FASE_A_ATAQUE:
						return i.FASE_DE_ATAQUE
					case i.CAMBIO_DE_FASE_A_MOVIMIENTO:
						return i.FASE_DE_MOVIMIENTO
					default:
						return A
				}
			}
			function refuerzosRestantes(A) {
				return A.jugadores[A.turnoJugador].refuerzos
			}
			function casosLocales(A, e) {
				switch (e.tipo) {
					case c.CONFIRMACION_REFUERZO:
						var r = Object(t.a)({}, A)
						!(function usarRefuerzos(A, e) {
							A.jugadores.map(function (r) {
								r.id === e.idJugador &&
									(r.refuerzos = r.refuerzos - A.datosJugadaActual.tropas)
							}),
								console.log(A.jugadores)
						})(r, e)
						var a = e.data.territorio.id
						return (
							(r.ultimaJugada = Object(t.a)({ jugada: n.REFUERZO }, e.data)),
							(r.territorios[a].tropas = e.data.territorio.tropas),
							r.estadoInterno === i.ESPERANDO_CONFIRMACION_REFUERZO &&
								(r.estadoInterno = i.FASE_DE_REFUERZOS),
							r
						)
					case c.CONFIRMACION_ATAQUE:
						var o = Object(t.a)({}, A),
							s = e.data.territorioOrigen.id,
							g = e.data.territorioDestino.id
						return (
							(o.ultimaJugada = Object(t.a)({ jugada: n.ATAQUE }, e.data)),
							(o.territorios[s] = e.data.territorioOrigen),
							(o.territorios[g] = e.data.territorioDestino),
							o.estadoInterno === i.ESPERANDO_CONFIRMACION_ATAQUE &&
								(o.estadoInterno = i.FASE_DE_ATAQUE),
							o
						)
					case c.CONFIRMACION_MOVIMIENTO:
						var O = Object(t.a)({}, A),
							d = e.data.territorioOrigen.id,
							u = e.data.territorioDestino.id
						return (
							(O.ultimaJugada = Object(t.a)({ jugada: n.MOVIMIENTO }, e.data)),
							(O.territorios[d] = e.data.territorioOrigen),
							(O.territorios[u] = e.data.territorioDestino),
							O.estadoInterno === i.ESPERANDO_CONFIRMACION_MOVIMIENTO &&
								(O.estadoInterno = i.FASE_DE_MOVIMIENTO),
							O
						)
					case c.CANCELAR:
						return Object(t.a)(
							Object(t.a)({}, A),
							{},
							{ estadoInterno: estadoPrevio(A.estadoInterno) }
						)
					case c.ERROR:
						return Object(t.a)(
							Object(t.a)({}, A),
							{},
							{
								estadoInterno: estadoPrevio(A.estadoInterno),
								error: e.data.err,
							}
						)
					case c.SELECCIONAR_TERRITORIO:
						if (tocaOrigen(A) || tocaDestino(A)) {
							var D = Object(t.a)({}, A.datosJugadaActual)
							return (
								tocaOrigen(A)
									? (D.origen = e.data.datosExtra)
									: (D.destino = e.data.datosExtra),
								Object(t.a)(
									Object(t.a)({}, A),
									{},
									{
										datosJugadaActual: D,
										estadoInterno: estadoSiguienteSeleccionarLocalizacion(
											A.estadoInterno
										),
									}
								)
							)
						}
						return console.log('?'), A
					case c.SELECCIONAR_UNIDADES:
						return Object(t.a)(
							Object(t.a)({}, A),
							{},
							{
								datosJugadaActual: Object(t.a)(
									Object(t.a)({}, A.datosJugadaActual),
									{},
									{ tropas: e.data.datosExtra }
								),
								estadoInterno: estadoSiguienteSeleccionarUnidades(
									A.estadoInterno
								),
							}
						)
					case c.ENVIAR_MENSAJE_CAMBIO_FASE:
						return Object(t.a)(
							Object(t.a)({}, A),
							{},
							{ estadoInterno: estadoACambioFase(A.estadoInterno) }
						)
					case c.CONFIRMACION_CAMBIO_FASE:
						return Object(t.a)(
							Object(t.a)({}, A),
							{},
							{
								estadoInterno: estadoSigCambioFase(A.estadoInterno),
								fase: A.fase + 1,
							}
						)
					case c.FIN_PARTIDA:
						return Object(t.a)(
							Object(t.a)({}, A),
							{},
							{ estadoInterno: i.FIN_PARTIDA, datosFin: e.data }
						)
				}
			}
			function maquinaEstados(A, e) {
				return (
					'data' in e && '_tipoMensaje' in e.data && delete e.data._tipoMensaje,
					(A.error = ''),
					console.log(A, 'estado en transicion'),
					console.log(e, 'accion en transicion'),
					e.tipo === c.DATOS_COMPLETOS_PARTIDA
						? (e.idJugador === e.data.jugadores[e.data.turnoJugador].id
								? (e.data.estadoInterno = g[e.data.fase])
								: (e.data.estadoInterno = i.TURNO_RIVAL),
						  Object(t.a)(Object(t.a)({}, A), e.data))
						: A.estadoInterno === i.CARGANDO
						? Object(t.a)(Object(t.a)({}, A), {}, { error: e.data.err })
						: casosLocales(A, e)
				)
			}
			function partidaEstado() {
				return Object(a.useReducer)(maquinaEstados, {
					estadoInterno: i.CARGANDO,
					fase: 0,
					error: '',
					datosJugadaActual: { origen: 0, destino: 0, tropas: 1 },
				})
			}
		},
		12: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'AuthApi', function () {
					return s
				}),
				r.d(e, 'registrarseLocal', function () {
					return i
				}),
				r.d(e, 'logOut', function () {
					return g
				}),
				r.d(e, 'credenciales', function () {
					return O
				})
			var t = r(1),
				a = r.n(t),
				n = r(108),
				c = r.n(n),
				o = r(23),
				s = a.a.createContext(),
				i = function registrarseLocal(A, e) {
					console.log(e),
						(e.logged = !0),
						A.setAuth(e),
						c.a.set(o.default.COOKIE_USER, e, o.default.OPTIONS_COOKIE)
				},
				g = function logOut(A) {
					return (
						A.setAuth(o.default.NULL_VALUES),
						c.a.remove(o.default.COOKIE_USER),
						!1
					)
				},
				O = function credenciales(A) {
					return { idUsuario: A.auth.usuario.id, clave: A.auth.usuario.clave }
				}
			e.default = s
		},
		139: function (A, e, r) {
			'use strict'
			e.a =
				'data:image/png;base64,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'
		},
		141: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'rutaIcono', function () {
					return t
				}),
				r.d(e, 'rutaAspecto', function () {
					return a
				}),
				r.d(e, 'extension', function () {
					return n
				}),
				r.d(e, 'obtenerPrevio', function () {
					return o
				}),
				r.d(e, 'obtenerSiguiente', function () {
					return s
				}),
				r.d(e, 'obtenerRutaAspecto', function () {
					return i
				}),
				r.d(e, 'obtenerRutaIcono', function () {
					return g
				})
			var t = 'assets/iconos/',
				a = 'assets/aspectos/',
				n = '.png',
				c = function obtenerDir(A, e, r) {
					var t = A.findIndex(function (A) {
						if (A.id === e) return !0
					})
					return (
						(t = (t + r) % A.length) < 0 && (t = A.length - 1),
						console.log(t),
						A[t].id
					)
				},
				o = function obtenerPrevio(A, e) {
					return c(A, e, -1)
				},
				s = function obtenerSiguiente(A, e) {
					return c(A, e, 1)
				},
				i = function obtenerRutaAspecto(A) {
					return a + A.toString() + n
				},
				g = function obtenerRutaIcono(A) {
					return t + A.toString() + n
				}
		},
		142: function (A, e, r) {
			'use strict'
			r.r(e)
			r(1)
			var t = r(220),
				a = r(4),
				n = r(2)
			e.default = function ListaElementos(A) {
				var e = A.objetos,
					r = A.tipo
				return Object(n.jsx)(a.g, {
					className: 'mt-9',
					children: e.map(function (A) {
						return Object(n.jsx)(
							t.default,
							{ datos: A, tipo: r },
							A.id.toString()
						)
					}),
				})
			}
		},
		143: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'EntradaImg', function () {
					return g
				})
			var t = r(8),
				a = r(1),
				n = r(141),
				c = r(4),
				o = r(34),
				s = r(59),
				i = r(2),
				g = function EntradaImg(A) {
					var e = A.register,
						r = A.errors,
						g = A.tag,
						O = A.disponibles,
						d = A.inicial,
						u = A.imagenes,
						D = A.fondo,
						l = Object(a.useState)(d),
						w = Object(t.a)(l, 2),
						C = w[0],
						B = w[1],
						E = Object(a.useState)(!1),
						p = Object(t.a)(E, 2),
						Q = p[0],
						h = p[1]
					return Object(i.jsxs)(i.Fragment, {
						children: [
							Object(i.jsxs)(c.e, {
								className: 'selector-avatar',
								children: [
									Object(i.jsx)('img', {
										className: 'flecha sig',
										src: 'data:image/png;base64,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',
										alt: 'Flecha anterior',
										onClick: function avanzarPrevio() {
											if (!Q) {
												h(!0)
												var A = Object(n.obtenerPrevio)(O, C)
												B(A), h(!1)
											}
										},
									}),
									Object(i.jsx)('img', {
										className: 'marco-asset',
										src: s.a,
										alt: 'icono avatar',
									}),
									Object(i.jsx)('img', {
										className: 'flecha sig',
										src: 'data:image/png;base64,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T5/+BQOY8/xvJtwPAAAAQlBMVEUAAACdnZ2SkpKysrKlpaXBwcHR0dH///93d3eAgICXl5fg4OBxcXG4uLiioqJWVlZQUFA+Pj5tbW1PT09lZWUAAAAiR7fKAAAAFnRSTlP///////////////////////////8AAdLA5AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAWlJREFUSEt90g17gjAMBGCxUGblQ538/7+6XJKOgjmPZwPXd0coXrYo8V8lhDNPeEc84VfiWTvxtD32vD30tL0LPeFJeOQJ79V3H561p9jT9jREnrfnDH2an7fnMfCs/eeWx8Bf5NsXpE+3clc/HbzwhDd4PnoZRpKnY7/w3vwkPRPeJnLtjI8Fft8ftNd3gjvvUT7POv+/1/Y0ZEvxMzJouz2v3NW8tduNJfN9xLFHPrXe2oXPtix+kR+7xi/3/ryndomsuwef8Vm/D+q9HetmMAsOXMEv0r5KHmttxzBYXxpd/19ma3TT7sNrn0pPee7aZ9eNLL6NfvaNzKvwqr39pfltT/r4s2jwqq399VaBvKs2XjD3rrVdDA7Yeti7sLkbDR5Fd+s0N9JcNrHdanfQQzjedKC/tA+B/tIead4eatr+CDXj0O1+1xAuzZHm7cEkEt4ertB2suDnYy5EM040437+CF2Ism1/nf19wCyyzcwAAAAASUVORK5CYII=',
										alt: 'Flecha siguiente',
										onClick: function avanzarSiguiente() {
											if (!Q) {
												h(!0)
												var A = Object(n.obtenerSiguiente)(O, C)
												B(A), h(!1)
											}
										},
									}),
									D &&
										Object(i.jsx)('img', {
											className: 'fondo-asset',
											src: D,
											alt: 'fondo avatar',
										}),
									Object(i.jsx)('img', {
										id: 'avatar-ajustes',
										src: u[C].img,
										alt: 'Avatar',
									}),
								],
							}),
							Object(i.jsx)('input', {
								type: 'hidden',
								name: g,
								id: g,
								value: C,
								className: 'form-control',
								ref: e(),
							}),
							Object(i.jsx)(o.default, { error: r[g] }),
						],
					})
				}
		},
		15: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'obtenerInfoUsuario', function () {
					return t
				}),
				r.d(e, 'obtenerCredenciales', function () {
					return a
				}),
				r.d(e, 'obtenerIdUsuario', function () {
					return n
				}),
				r.d(e, 'obtenerIconosDisponibles', function () {
					return c
				}),
				r.d(e, 'obtenerIconosTienda', function () {
					return o
				}),
				r.d(e, 'obtenerAspectosDisponibles', function () {
					return s
				}),
				r.d(e, 'obtenerAspectosTienda', function () {
					return i
				})
			var t = function obtenerInfoUsuario(A) {
					return A.auth.usuario
				},
				a = function obtenerCredenciales(A) {
					return { idUsuario: A.auth.usuario.id, clave: A.auth.usuario.clave }
				},
				n = function obtenerIdUsuario(A) {
					return A.auth.usuario.id
				},
				c = function obtenerIconosDisponibles(A) {
					return A.auth.iconos
				},
				o = function obtenerIconosTienda(A) {
					return A.auth.tiendaIconos
				},
				s = function obtenerAspectosDisponibles(A) {
					return A.auth.aspectos
				},
				i = function obtenerAspectosTienda(A) {
					return A.auth.tiendaAspectos
				}
		},
		16: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'ErroresServer', function () {
					return n
				})
			r(1)
			var t = r(4),
				a = r(2),
				n = function ErroresServer(A) {
					var e = A.serverErrors
					return Object(a.jsx)(a.Fragment, {
						children:
							'' !== e &&
							Object(a.jsx)(t.b, {
								color: 'danger',
								children: Object(a.jsxs)('p', { children: [' Error: ', e] }),
							}),
					})
				}
		},
		18: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'peticionQForm', function () {
					return i
				}),
				r.d(e, 'inicioSesion', function () {
					return g
				}),
				r.d(e, 'registrarse', function () {
					return O
				}),
				r.d(e, 'recargarUsuario', function () {
					return d
				}),
				r.d(e, 'solicitudAmistad', function () {
					return u
				}),
				r.d(e, 'eliminarAmigo', function () {
					return D
				}),
				r.d(e, 'obtenerAmigos', function () {
					return l
				}),
				r.d(e, 'obtenerNotificaciones', function () {
					return w
				}),
				r.d(e, 'decisionPeticion', function () {
					return C
				}),
				r.d(e, 'rechazarPartida', function () {
					return B
				}),
				r.d(e, 'borrarNotiTurno', function () {
					return E
				}),
				r.d(e, 'obtenerPartidas', function () {
					return p
				}),
				r.d(e, 'comprarObjeto', function () {
					return Q
				}),
				r.d(e, 'crearSala', function () {
					return h
				}),
				r.d(e, 'restablecerClave', function () {
					return j
				}),
				r.d(e, 'solicitarRestablecerClave', function () {
					return m
				}),
				r.d(e, 'borrarCuenta', function () {
					return x
				})
			var t = r(6),
				a = r.n(t),
				n = r(9),
				c = r(23),
				o = r(140),
				s = r.n(o),
				i = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee(A, e) {
							var r, t, n, o
							return a.a.wrap(function _callee$(a) {
								for (;;)
									switch ((a.prev = a.next)) {
										case 0:
											return (
												(r = ''.concat(c.default.BASE_SERVER_URL).concat(A)),
												(t = {
													method: 'POST',
													headers: {
														'Content-Type': 'application/x-www-form-urlencoded',
													},
													body: s.a.stringify(e),
												}),
												(a.next = 4),
												fetch(r, t)
											)
										case 4:
											return (n = a.sent), (a.next = 7), n.json()
										case 7:
											return (o = a.sent), a.abrupt('return', o)
										case 9:
										case 'end':
											return a.stop()
									}
							}, _callee)
						})
					)
					return function peticionQForm(e, r) {
						return A.apply(this, arguments)
					}
				})(),
				g = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee2(A) {
							var e
							return a.a.wrap(function _callee2$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return console.log(A), (r.next = 3), i('iniciarSesion', A)
										case 3:
											return (e = r.sent), console.log(e), r.abrupt('return', e)
										case 6:
										case 'end':
											return r.stop()
									}
							}, _callee2)
						})
					)
					return function inicioSesion(e) {
						return A.apply(this, arguments)
					}
				})(),
				O = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee3(A) {
							var e
							return a.a.wrap(function _callee3$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('registrar', A)
										case 2:
											return (e = r.sent), r.abrupt('return', e)
										case 4:
										case 'end':
											return r.stop()
									}
							}, _callee3)
						})
					)
					return function registrarse(e) {
						return A.apply(this, arguments)
					}
				})(),
				d = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee4(A) {
							var e
							return a.a.wrap(function _callee4$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('recargarUsuario', A)
										case 2:
											return (e = r.sent), r.abrupt('return', e)
										case 4:
										case 'end':
											return r.stop()
									}
							}, _callee4)
						})
					)
					return function recargarUsuario(e) {
						return A.apply(this, arguments)
					}
				})(),
				u = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee5(A) {
							var e
							return a.a.wrap(function _callee5$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('enviarSolicitudAmistad', A)
										case 2:
											return (e = r.sent), r.abrupt('return', e)
										case 4:
										case 'end':
											return r.stop()
									}
							}, _callee5)
						})
					)
					return function solicitudAmistad(e) {
						return A.apply(this, arguments)
					}
				})(),
				D = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee6(A) {
							var e
							return a.a.wrap(function _callee6$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (
												(A.decision = 'Borrar'),
												(r.next = 3),
												i('gestionAmistad', A)
											)
										case 3:
											return (e = r.sent), r.abrupt('return', e)
										case 5:
										case 'end':
											return r.stop()
									}
							}, _callee6)
						})
					)
					return function eliminarAmigo(e) {
						return A.apply(this, arguments)
					}
				})(),
				l = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee7(A) {
							var e
							return a.a.wrap(function _callee7$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('amigos', A)
										case 2:
											return (
												null === (e = r.sent).amigos && (e.amigos = []),
												r.abrupt('return', e)
											)
										case 5:
										case 'end':
											return r.stop()
									}
							}, _callee7)
						})
					)
					return function obtenerAmigos(e) {
						return A.apply(this, arguments)
					}
				})(),
				w = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee8(A) {
							var e
							return a.a.wrap(function _callee8$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('notificaciones', A)
										case 2:
											return (
												null === (e = r.sent).notificaciones &&
													(e.notificaciones = []),
												r.abrupt('return', e)
											)
										case 5:
										case 'end':
											return r.stop()
									}
							}, _callee8)
						})
					)
					return function obtenerNotificaciones(e) {
						return A.apply(this, arguments)
					}
				})(),
				C = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee9(A) {
							var e
							return a.a.wrap(function _callee9$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('gestionAmistad', A)
										case 2:
											return (e = r.sent), r.abrupt('return', e)
										case 4:
										case 'end':
											return r.stop()
									}
							}, _callee9)
						})
					)
					return function decisionPeticion(e) {
						return A.apply(this, arguments)
					}
				})(),
				B = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee10(A) {
							var e
							return a.a.wrap(function _callee10$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('rechazarPartida', A)
										case 2:
											return (e = r.sent), r.abrupt('return', e)
										case 4:
										case 'end':
											return r.stop()
									}
							}, _callee10)
						})
					)
					return function rechazarPartida(e) {
						return A.apply(this, arguments)
					}
				})(),
				E = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee11(A) {
							var e
							return a.a.wrap(function _callee11$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('borrarNotificacionTurno', A)
										case 2:
											return (e = r.sent), r.abrupt('return', e)
										case 4:
										case 'end':
											return r.stop()
									}
							}, _callee11)
						})
					)
					return function borrarNotiTurno(e) {
						return A.apply(this, arguments)
					}
				})(),
				p = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee12(A) {
							var e
							return a.a.wrap(function _callee12$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('partidas', A)
										case 2:
											return (
												null === (e = r.sent).partidas && (e.partidas = []),
												r.abrupt('return', e)
											)
										case 5:
										case 'end':
											return r.stop()
									}
							}, _callee12)
						})
					)
					return function obtenerPartidas(e) {
						return A.apply(this, arguments)
					}
				})(),
				Q = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee13(A) {
							var e
							return a.a.wrap(function _callee13$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('comprar', A)
										case 2:
											return (e = r.sent), r.abrupt('return', e)
										case 4:
										case 'end':
											return r.stop()
									}
							}, _callee13)
						})
					)
					return function comprarObjeto(e) {
						return A.apply(this, arguments)
					}
				})(),
				h = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee14(A) {
							var e
							return a.a.wrap(function _callee14$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('crearSala', A)
										case 2:
											return (e = r.sent), r.abrupt('return', e)
										case 4:
										case 'end':
											return r.stop()
									}
							}, _callee14)
						})
					)
					return function crearSala(e) {
						return A.apply(this, arguments)
					}
				})(),
				j = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee15(A) {
							var e
							return a.a.wrap(function _callee15$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('restablecerClave', A)
										case 2:
											return (e = r.sent), r.abrupt('return', e)
										case 4:
										case 'end':
											return r.stop()
									}
							}, _callee15)
						})
					)
					return function restablecerClave(e) {
						return A.apply(this, arguments)
					}
				})(),
				m = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee16(A) {
							var e
							return a.a.wrap(function _callee16$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('olvidoClave', A)
										case 2:
											return (e = r.sent), r.abrupt('return', e)
										case 4:
										case 'end':
											return r.stop()
									}
							}, _callee16)
						})
					)
					return function solicitarRestablecerClave(e) {
						return A.apply(this, arguments)
					}
				})(),
				x = (function () {
					var A = Object(n.a)(
						a.a.mark(function _callee17(A) {
							var e
							return a.a.wrap(function _callee17$(r) {
								for (;;)
									switch ((r.prev = r.next)) {
										case 0:
											return (r.next = 2), i('borrarCuenta', A)
										case 2:
											return (e = r.sent), r.abrupt('return', e)
										case 4:
										case 'end':
											return r.stop()
									}
							}, _callee17)
						})
					)
					return function borrarCuenta(e) {
						return A.apply(this, arguments)
					}
				})()
		},
		180: function (A, e, r) {},
		181: function (A, e, r) {},
		185: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'MenuSalas', function () {
					return D
				})
			var t = r(6),
				a = r.n(t),
				n = r(9),
				c = r(8),
				o = r(1),
				s = r(4),
				i = r(186),
				g = r(18),
				O = r(12),
				d = r(15),
				u = r(2),
				D = function MenuSalas() {
					var A = Object(o.useContext)(O.default),
						e = Object(o.useState)([]),
						r = Object(c.a)(e, 2),
						t = r[0],
						D = r[1]
					return (
						Object(o.useEffect)(function () {
							function _setData() {
								return (_setData = Object(n.a)(
									a.a.mark(function _callee() {
										var e, r
										return a.a.wrap(function _callee$(t) {
											for (;;)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(e = Object(d.obtenerCredenciales)(A)),
															(t.next = 3),
															Object(g.obtenerPartidas)(e)
														)
													case 3:
														;(r = t.sent), D(r.partidas)
													case 5:
													case 'end':
														return t.stop()
												}
										}, _callee)
									})
								)).apply(this, arguments)
							}
							!(function setData() {
								return _setData.apply(this, arguments)
							})()
						}, []),
						Object(u.jsxs)(s.g, {
							className: 'cont-estandar d-flex align-items-center flex-column',
							children: [
								Object(u.jsx)('h2', {
									className: 'text-center mb-1',
									children: ' Partidas en curso ',
								}),
								Object(u.jsx)(i.ListaPartidas, { partidas: t }),
							],
						})
					)
				}
			e.default = D
		},
		186: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'ListaPartidas', function () {
					return o
				})
			r(1)
			var t = r(187),
				a = r(4),
				n = r(19),
				c = (r(948), r(2)),
				o = function ListaPartidas(A) {
					var e = A.partidas,
						r = Object(n.d)()
					return Object(c.jsxs)(c.Fragment, {
						children: [
							Object(c.jsx)(a.d, {
								className: 'btn-crearSala my-0',
								onClick: function onClick() {
									r.push('/sala/undefined')
								},
								children: 'Crear sala',
							}),
							Object(c.jsx)(a.g, {
								className: 'mt-4 fondo-lista-partidas',
								children: Object(c.jsx)(a.o, {
									className: 'lista-partidas',
									children: e.map(function (A) {
										return Object(c.jsx)(
											a.p,
											{
												children: Object(c.jsx)(t.default, { datosPartida: A }),
											},
											A.id.toString()
										)
									}),
								}),
							}),
						],
					})
				}
			e.default = o
		},
		187: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'PartidaMini', function () {
					return i
				})
			var t = r(1),
				a = r(4),
				n = r(12),
				c = r(19),
				o = r(188),
				s = r(2),
				i = function PartidaMini(A) {
					var e,
						r = A.datosPartida,
						i = Object(t.useContext)(n.default),
						g = Object(c.d)(),
						O = '/partida/' + r.id.toString()
					return (
						console.log(r, 'datosPartida'),
						console.log(r.tiempoTurno),
						(e =
							i.auth.usuario.nombre === r.nombreTurno
								? Object(s.jsxs)(a.b, {
										color: 'success',
										className: 'm-0',
										children: [' ', 'Tu turno', ' '],
								  })
								: Object(s.jsxs)('p', {
										className: 'm-0',
										children: [
											' ',
											'Turno de ',
											Object(s.jsx)('strong', { children: r.nombreTurno }),
										],
								  })),
						Object(s.jsxs)(a.g, {
							children: [
								Object(s.jsxs)(a.D, {
									children: [
										Object(s.jsx)(a.e, {
											className: 'd-flex align-items-center',
											children: Object(s.jsx)('h4', { children: r.nombre }),
										}),
										Object(s.jsx)(a.e, {
											className: 'd-flex justify-content-end',
											children: Object(s.jsx)(a.d, {
												className: 'btn-unirsePartida',
												onClick: function onClick() {
													g.push(O)
												},
												children: 'Unirse',
											}),
										}),
									],
								}),
								Object(s.jsx)('hr', {}),
								Object(s.jsx)(a.D, { children: e }),
								Object(s.jsx)(a.D, {
									children: Object(s.jsx)(o.Temporizador, {
										tiempoInicio: r.ultimoTurno,
										tiempoTurno: r.tiempoTurno,
									}),
								}),
							],
						})
					)
				}
			e.default = i
		},
		188: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'Temporizador', function () {
					return o
				})
			var t = r(8),
				a = r(1),
				n = r(98),
				c = r(2),
				o = function Temporizador(A) {
					var e = A.tiempoInicio,
						r = A.tiempoTurno,
						o = Object(a.useState)(0),
						s = Object(t.a)(o, 2),
						i = s[0],
						g = s[1],
						O = function actualizarSegundosRestantes() {
							g(Object(n.calcularSegundosRestantes)(e, r))
						}
					return (
						Object(a.useEffect)(
							function () {
								O()
								var A = setInterval(O, 1e3)
								return function () {
									clearInterval(A)
								}
							},
							[e, r]
						),
						Object(c.jsx)(c.Fragment, {
							children: Object(c.jsxs)('p', {
								children: [
									'Tiempo restante: ',
									'  ',
									Math.floor(i / 3600),
									':',
									Math.floor(Math.floor(i % 3600) / 60),
									':',
									Math.floor(i % 60),
								],
							}),
						})
					)
				}
		},
		189: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'TabAmigosNotificaciones', function () {
					return B
				})
			var t = r(10),
				a = r(6),
				n = r.n(a),
				c = r(9),
				o = r(8),
				s = r(1),
				i = r(12),
				g = r(23),
				O = r(99),
				d = r(194),
				u = r(198),
				D = r(18),
				l = r(15),
				w = (r(954), r(4)),
				C = r(2),
				B = function TabAmigosNotificaciones() {
					var A = Object(s.useContext)(i.default),
						e = Object(s.useState)([]),
						r = Object(o.a)(e, 2),
						a = r[0],
						B = r[1],
						E = Object(s.useState)({ justified: '1' }),
						p = Object(o.a)(E, 2),
						Q = p[0],
						h = p[1],
						j = Object(s.useState)([]),
						m = Object(o.a)(j, 2),
						x = m[0],
						I = m[1],
						M = (function () {
							var e = Object(c.a)(
								n.a.mark(function _callee() {
									var e, r
									return n.a.wrap(function _callee$(t) {
										for (;;)
											switch ((t.prev = t.next)) {
												case 0:
													return (
														(e = Object(l.obtenerCredenciales)(A)),
														(t.next = 3),
														Object(D.obtenerAmigos)(e)
													)
												case 3:
													;(r = t.sent), B(r.amigos)
												case 5:
												case 'end':
													return t.stop()
											}
									}, _callee)
								})
							)
							return function fetchAmigos() {
								return e.apply(this, arguments)
							}
						})(),
						H = (function () {
							var e = Object(c.a)(
								n.a.mark(function _callee2() {
									var e, r
									return n.a.wrap(function _callee2$(t) {
										for (;;)
											switch ((t.prev = t.next)) {
												case 0:
													return (
														(e = Object(l.obtenerCredenciales)(A)),
														(t.next = 3),
														Object(D.obtenerNotificaciones)(e)
													)
												case 3:
													;(r = t.sent), I(r.notificaciones)
												case 5:
												case 'end':
													return t.stop()
											}
									}, _callee2)
								})
							)
							return function fetchNotis() {
								return e.apply(this, arguments)
							}
						})()
					Object(s.useEffect)(function () {
						var A = setInterval(
							Object(c.a)(
								n.a.mark(function _callee3() {
									return n.a.wrap(function _callee3$(A) {
										for (;;)
											switch ((A.prev = A.next)) {
												case 0:
													M(), H()
												case 2:
												case 'end':
													return A.stop()
											}
									}, _callee3)
								})
							),
							g.default.REFRESH_TIME
						)
						return function () {
							return clearInterval(A)
						}
					}, [])
					var f = function togglePills(A, e) {
						return function (r) {
							if ((r.preventDefault(), Q.justified !== e)) {
								var a = Object(t.a)({}, Q)
								;(a[A] = e), h(a)
							}
						}
					}
					return Object(C.jsxs)(w.g, {
						className: 'mt-4 contenedor-pills',
						children: [
							Object(C.jsxs)(w.u, {
								className: 'nav-pills nav-justified ',
								children: [
									Object(C.jsx)(w.v, {
										className: 'my-2',
										children: Object(C.jsx)(w.w, {
											link: !0,
											to: '#',
											active: '1' === Q.justified,
											onClick: f('justified', '1'),
											children: 'Lista de amigos',
										}),
									}),
									Object(C.jsx)(w.v, {
										className: 'my-2',
										children: Object(C.jsxs)(w.w, {
											link: !0,
											to: '#',
											active: '2' === Q.justified,
											onClick: f('justified', '2'),
											children: [
												'Notificaciones',
												' ',
												x.length > 0 &&
													Object(C.jsxs)(w.c, {
														color: 'danger',
														pill: !0,
														children: [' ', x.length, ' '],
													}),
											],
										}),
									}),
								],
							}),
							Object(C.jsxs)(w.E, {
								activeItem: Q.justified,
								children: [
									Object(C.jsx)(w.F, {
										tabId: '1',
										children: Object(C.jsx)(O.default, {
											usuarios: a,
											elemento: Object(C.jsx)(u.default, {}),
										}),
									}),
									Object(C.jsx)(w.F, {
										tabId: '2',
										children: Object(C.jsx)(d.default, { notificaciones: x }),
									}),
								],
							}),
						],
					})
				}
			e.default = B
		},
		190: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'Amigo', function () {
					return O
				})
			var t = r(10),
				a = r(144),
				n = r(1),
				c = r.n(n),
				o = (r(951), r(4)),
				s = r(47),
				i = r(59),
				g = r(2),
				O = function Amigo(A) {
					var e = A.datos,
						r = A.elemento,
						n = Object(a.a)(A, ['datos', 'elemento'])
					return Object(g.jsxs)(o.D, {
						children: [
							Object(g.jsxs)(o.e, {
								md: '2',
								children: [
									Object(g.jsx)('img', {
										src: s.a[e.icono].img,
										className: 'icono-amigo',
									}),
									Object(g.jsx)('img', {
										src: i.a,
										className: 'icono-marco-amigo',
									}),
								],
							}),
							Object(g.jsx)(o.e, {
								md: '6',
								children: Object(g.jsx)('div', {
									className: 'nom-amigo d-block',
									children: e.nombre,
								}),
							}),
							Object(g.jsx)(o.e, {
								md: '4',
								children: c.a.cloneElement(r, Object(t.a)({ amigo: e }, n)),
							}),
						],
					})
				}
			e.default = O
		},
		191: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'AnyadirAmigo', function () {
					return i
				})
			var t = r(8),
				a = r(1),
				n = r(4),
				c = r(192),
				o = r(18),
				s = r(2),
				i = function AnyadirAmigo() {
					var A = Object(a.useState)(!1),
						e = Object(t.a)(A, 2),
						r = e[0],
						i = e[1],
						g = function toggle() {
							i(!r)
						}
					return Object(s.jsxs)(n.g, {
						children: [
							Object(s.jsx)('div', {
								className: 'd-flex justify-content-center',
								children: Object(s.jsx)(n.d, {
									className: 'btn-addfriend',
									onClick: g,
									children: 'Añadir amigo',
								}),
							}),
							Object(s.jsxs)(n.q, {
								isOpen: r,
								children: [
									Object(s.jsx)(n.t, { toggle: g, children: 'Añadir amigo' }),
									Object(s.jsx)(n.e, {
										middle: !0,
										children: Object(s.jsx)(n.r, {
											children: Object(s.jsx)(c.FormAnyadirAmigo, {
												enviarSolicitud: o.solicitudAmistad,
											}),
										}),
									}),
								],
							}),
						],
					})
				}
			e.default = i
		},
		192: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'FormAnyadirAmigo', function () {
					return C
				})
			var t = r(6),
				a = r.n(t),
				n = r(10),
				c = r(9),
				o = r(8),
				s = r(1),
				i = r(27),
				g = r(4),
				O = r(193),
				d = r(16),
				u = r(100),
				D = r(15),
				l = r(12),
				w = r(2),
				C = function FormAnyadirAmigo(A) {
					var e = A.enviarSolicitud,
						r = Object(s.useContext)(l.default),
						t = Object(i.a)({ nombre: '' }),
						C = t.register,
						B = t.handleSubmit,
						E = t.errors,
						p = Object(s.useState)(!1),
						Q = Object(o.a)(p, 2),
						h = Q[0],
						j = Q[1],
						m = Object(s.useState)(''),
						x = Object(o.a)(m, 2),
						I = x[0],
						M = x[1],
						H = Object(s.useState)(''),
						f = Object(o.a)(H, 2),
						b = f[0],
						v = f[1]
					return Object(w.jsx)(g.g, {
						children: Object(w.jsxs)('form', {
							id: 'registro',
							onSubmit: B(
								(function () {
									var A = Object(c.a)(
										a.a.mark(function _callee(A) {
											var t
											return a.a.wrap(function _callee$(a) {
												for (;;)
													switch ((a.prev = a.next)) {
														case 0:
															return (
																j(!0),
																M(''),
																v(''),
																console.log(A, 'amigo'),
																(A = Object(n.a)(
																	Object(n.a)({}, A),
																	Object(D.obtenerCredenciales)(r)
																)),
																(a.next = 7),
																e(A)
															)
														case 7:
															0 === (t = a.sent).code &&
																v('Solicitud enviada correctamente.'),
																j(!1),
																M(t.err)
														case 11:
														case 'end':
															return a.stop()
													}
											}, _callee)
										})
									)
									return function (e) {
										return A.apply(this, arguments)
									}
								})()
							),
							children: [
								Object(w.jsx)(d.ErroresServer, { serverErrors: I }),
								Object(w.jsx)(u.OkServer, { serverOk: b }),
								Object(w.jsx)(O.EntradaAmigo, { register: C, errors: E }),
								Object(w.jsx)('div', {
									className: 'text-center mt-4',
									children: Object(w.jsxs)(g.d, {
										color: 'indigo',
										type: 'submit',
										disabled: h,
										children: ['Enviar solicitud', ' '],
									}),
								}),
							],
						}),
					})
				}
		},
		193: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'EntradaAmigo', function () {
					return n
				})
			r(1)
			var t = r(34),
				a = r(2),
				n = function EntradaAmigo(A) {
					var e = A.register,
						r = A.errors
					return Object(a.jsxs)(a.Fragment, {
						children: [
							Object(a.jsx)('label', {
								htmlFor: 'nombre',
								className: 'grey-text',
								children: 'Nombre de usuario',
							}),
							Object(a.jsx)('input', {
								type: 'text',
								name: 'nombreAmigo',
								id: 'nombreAmigo',
								className: 'form-control',
								placeholder: 'Nombre de usuario',
								ref: e({
									required: 'Este campo no se puede dejar vacío.',
									validate: function validate(A) {
										return (
											[/[^@]/].every(function (e) {
												return e.test(A)
											}) || 'El nombre de usuario no puede contener @'
										)
									},
								}),
							}),
							Object(a.jsx)(t.default, { error: r.nombre }),
						],
					})
				}
		},
		194: function (A, e, r) {
			'use strict'
			r.r(e)
			r(1)
			var t = r(195),
				a = r(4),
				n = r(196),
				c = r(197),
				o = (r(953), r(2))
			e.default = function ListaNotificaciones(A) {
				var e = A.notificaciones
				return Object(o.jsx)(a.g, {
					className: 'mt-3 fondo-lista-notis',
					children: Object(o.jsx)(a.o, {
						className: 'lista-notis',
						children: e.map(function (A) {
							return Object(o.jsxs)(
								a.p,
								{
									children: [
										'Peticion de amistad' === A.tipo &&
											Object(o.jsx)(t.default, { datos: A }),
										'Invitacion' === A.tipo &&
											Object(o.jsx)(n.default, { datos: A }),
										'Notificacion de turno' === A.tipo &&
											Object(o.jsx)(c.default, { datos: A }),
									],
								},
								A.idEnvio.toString()
							)
						}),
					}),
				})
			}
		},
		195: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'NotificacionAmistad', function () {
					return l
				})
			var t = r(6),
				a = r.n(t),
				n = r(10),
				c = r(9),
				o = r(8),
				s = r(1),
				i = (r(180), r(4)),
				g = r(16),
				O = r(12),
				d = r(18),
				u = r(15),
				D = r(2),
				l = function NotificacionAmistad(A) {
					var e = A.datos,
						r = Object(s.useState)(!1),
						t = Object(o.a)(r, 2),
						l = t[0],
						w = t[1],
						C = Object(s.useState)(''),
						B = Object(o.a)(C, 2),
						E = B[0],
						p = B[1],
						Q = Object(s.useContext)(O.default),
						h = function toggle() {
							w(!l)
						},
						j = function decisionAmistad(A, e) {
							return Object(c.a)(
								a.a.mark(function _callee() {
									var r, t
									return a.a.wrap(function _callee$(a) {
										for (;;)
											switch ((a.prev = a.next)) {
												case 0:
													return (
														p(''),
														(r = Object(n.a)(
															{ idAmigo: A.idEnvio, decision: e },
															Object(u.obtenerCredenciales)(Q)
														)),
														(a.next = 4),
														Object(d.decisionPeticion)(r)
													)
												case 4:
													0 === (t = a.sent).code
														? console.log(
																'Amigo con id y nombre: ' +
																	A.idEnvio +
																	' ' +
																	A.infoExtra +
																	' has elegido ' +
																	e
														  )
														: (p(t.err), h())
												case 6:
												case 'end':
													return a.stop()
											}
									}, _callee)
								})
							)
						}
					return Object(D.jsxs)(D.Fragment, {
						children: [
							Object(D.jsxs)(i.D, {
								children: [
									Object(D.jsx)(i.e, {
										md: '8',
										children: Object(D.jsxs)('p', {
											className: 'texto-noti-amistad',
											children: [
												'Solicitud de amistad de ',
												Object(D.jsx)('strong', { children: e.infoExtra }),
											],
										}),
									}),
									Object(D.jsx)(i.e, {
										md: '4',
										children: Object(D.jsxs)(i.D, {
											className: 'mr-1',
											children: [
												Object(D.jsx)(i.e, {
													md: '6',
													children: Object(D.jsx)(i.d, {
														className: 'btn-notis aceptar',
														onClick: j(e, 'Aceptar'),
													}),
												}),
												Object(D.jsx)(i.e, {
													md: '6',
													children: Object(D.jsx)(i.d, {
														color: 'danger',
														className: 'btn-notis rechazar',
														onClick: j(e, 'Rechazar'),
													}),
												}),
											],
										}),
									}),
								],
							}),
							Object(D.jsxs)(i.q, {
								isOpen: l,
								toggle: h,
								children: [
									Object(D.jsx)(i.t, {
										toggle: h,
										children: 'Se ha producido un error:',
									}),
									Object(D.jsx)(i.r, {
										children: Object(D.jsx)(g.ErroresServer, {
											serverErrors: E,
										}),
									}),
									Object(D.jsx)(i.s, {
										className: 'd-flex justify-content-around',
										children: Object(D.jsx)(i.D, {
											children: Object(D.jsxs)(i.d, {
												color: 'primary',
												className: 'btn-modal',
												onClick: h,
												children: [' ', 'Aceptar'],
											}),
										}),
									}),
								],
							}),
						],
					})
				}
			e.default = l
		},
		196: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'NotificacionSala', function () {
					return D
				})
			var t = r(6),
				a = r.n(t),
				n = r(10),
				c = r(9),
				o = r(1),
				s = (r(180), r(4)),
				i = r(19),
				g = r(18),
				O = r(15),
				d = r(12),
				u = r(2),
				D = function NotificacionSala(A) {
					var e = A.datos,
						r = Object(i.d)(),
						t = Object(o.useContext)(d.default),
						D = function decisionSala(A, e) {
							return Object(c.a)(
								a.a.mark(function _callee() {
									var c, o, s
									return a.a.wrap(function _callee$(a) {
										for (;;)
											switch ((a.prev = a.next)) {
												case 0:
													if ('aceptar' !== e) {
														a.next = 5
														break
													}
													;(c = '/sala/'.concat(A.idEnvio)),
														r.push(c),
														(a.next = 11)
													break
												case 5:
													if ('rechazar' !== e) {
														a.next = 11
														break
													}
													return (
														(o = Object(n.a)(
															{ idSala: A.idEnvio },
															Object(O.obtenerCredenciales)(t)
														)),
														(a.next = 9),
														Object(g.rechazarPartida)(o)
													)
												case 9:
													0 != (s = a.sent).code &&
														console.log('ERROR: ' + s.err)
												case 11:
												case 'end':
													return a.stop()
											}
									}, _callee)
								})
							)
						}
					return Object(u.jsx)(u.Fragment, {
						children: Object(u.jsxs)(s.D, {
							children: [
								Object(u.jsx)(s.e, {
									md: '8',
									children: Object(u.jsxs)('p', {
										className: 'texto-noti-sala',
										children: [
											Object(u.jsx)('strong', { children: e.infoExtra }),
											' te ha invitado a una partida',
										],
									}),
								}),
								Object(u.jsx)(s.e, {
									md: '4',
									children: Object(u.jsxs)(s.D, {
										className: 'mr-1',
										children: [
											Object(u.jsx)(s.e, {
												md: '6',
												children: Object(u.jsx)(s.d, {
													className: 'btn-notis aceptar',
													onClick: D(e, 'aceptar'),
												}),
											}),
											Object(u.jsx)(s.e, {
												md: '6',
												children: Object(u.jsx)(s.d, {
													color: 'danger',
													className: 'btn-notis rechazar',
													onClick: D(e, 'rechazar'),
												}),
											}),
										],
									}),
								}),
							],
						}),
					})
				}
			e.default = D
		},
		197: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'NotificacionTurno', function () {
					return w
				})
			var t = r(10),
				a = r(6),
				n = r.n(a),
				c = r(9),
				o = r(8),
				s = r(1),
				i = (r(180), r(4)),
				g = r(16),
				O = r(12),
				d = r(19),
				u = r(18),
				D = r(15),
				l = r(2),
				w = function NotificacionTurno(A) {
					var e = A.datos,
						r = Object(d.d)(),
						a = Object(s.useState)(!1),
						w = Object(o.a)(a, 2),
						C = w[0],
						B = w[1],
						E = Object(s.useState)(''),
						p = Object(o.a)(E, 2),
						Q = p[0],
						h = p[1],
						j = Object(s.useContext)(O.default),
						m = function toggle() {
							B(!C)
						}
					return Object(l.jsxs)(l.Fragment, {
						children: [
							Object(l.jsxs)(i.D, {
								children: [
									Object(l.jsx)(i.e, {
										md: '8',
										children: Object(l.jsxs)('p', {
											className: 'texto-noti-amistad',
											children: [
												'Es tu turno en la partida ',
												Object(l.jsx)('strong', { children: e.infoExtra }),
											],
										}),
									}),
									Object(l.jsx)(i.e, {
										md: '4',
										children: Object(l.jsxs)(i.D, {
											className: 'mr-1',
											children: [
												Object(l.jsx)(i.e, {
													md: '6',
													children: Object(l.jsx)(i.d, {
														className: 'btn-notis aceptar',
														onClick: (function confirmarTurno(A) {
															return Object(c.a)(
																n.a.mark(function _callee() {
																	var e
																	return n.a.wrap(function _callee$(t) {
																		for (;;)
																			switch ((t.prev = t.next)) {
																				case 0:
																					;(e = '/partida/'.concat(A.idEnvio)),
																						r.push(e)
																				case 2:
																				case 'end':
																					return t.stop()
																			}
																	}, _callee)
																})
															)
														})(e),
													}),
												}),
												Object(l.jsx)(i.e, {
													md: '6',
													children: Object(l.jsx)(i.d, {
														color: 'danger',
														className: 'btn-notis rechazar',
														onClick: (function borrarNotiTurnoInterno(A) {
															return Object(c.a)(
																n.a.mark(function _callee2() {
																	var e, r
																	return n.a.wrap(function _callee2$(a) {
																		for (;;)
																			switch ((a.prev = a.next)) {
																				case 0:
																					return (
																						h(''),
																						(e = Object(t.a)(
																							{ idSal: A.idEnvio },
																							Object(D.obtenerCredenciales)(j)
																						)),
																						(a.next = 4),
																						Object(u.borrarNotiTurno)(e)
																					)
																				case 4:
																					0 != (r = a.sent).code &&
																						(h(r.err), m())
																				case 6:
																				case 'end':
																					return a.stop()
																			}
																	}, _callee2)
																})
															)
														})(e),
													}),
												}),
											],
										}),
									}),
								],
							}),
							Object(l.jsxs)(i.q, {
								isOpen: C,
								toggle: m,
								children: [
									Object(l.jsx)(i.t, {
										toggle: m,
										children: 'Se ha producido un error:',
									}),
									Object(l.jsx)(i.r, {
										children: Object(l.jsx)(g.ErroresServer, {
											serverErrors: Q,
										}),
									}),
									Object(l.jsx)(i.s, {
										className: 'd-flex justify-content-around',
										children: Object(l.jsx)(i.D, {
											children: Object(l.jsxs)(i.d, {
												color: 'primary',
												className: 'btn-modal',
												onClick: m,
												children: [' ', 'Aceptar'],
											}),
										}),
									}),
								],
							}),
						],
					})
				}
			e.default = w
		},
		198: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'EliminarAmigo', function () {
					return D
				})
			var t = r(6),
				a = r.n(t),
				n = r(9),
				c = r(8),
				o = r(1),
				s = r(4),
				i = r(12),
				g = r(16),
				O = r(18),
				d = r(15),
				u = r(2),
				D = function EliminarAmigo(A) {
					var e = A.amigo,
						r = Object(o.useState)(!1),
						t = Object(c.a)(r, 2),
						D = t[0],
						l = t[1],
						w = Object(o.useState)(''),
						C = Object(c.a)(w, 2),
						B = C[0],
						E = C[1],
						p = Object(o.useContext)(i.default),
						Q = function toggle() {
							l(!D)
						}
					return Object(u.jsxs)(u.Fragment, {
						children: [
							Object(u.jsx)(s.d, { className: 'btn-borrar', onClick: Q }),
							Object(u.jsxs)(s.q, {
								isOpen: D,
								toggle: Q,
								children: [
									Object(u.jsxs)(s.t, {
										toggle: Q,
										children: [
											'¿Estás seguro de que quieres eliminar a ',
											e.nombre,
											'?',
										],
									}),
									Object(u.jsx)(s.r, {
										className: 'd-flex justify-content-between',
										children: Object(u.jsx)(g.ErroresServer, {
											serverErrors: B,
										}),
									}),
									Object(u.jsxs)(s.l, {
										className: 'd-flex justify-content-around',
										children: [
											Object(u.jsxs)(s.d, {
												color: 'primary',
												onClick: Q,
												children: [' ', 'Cancelar'],
											}),
											Object(u.jsx)(s.d, {
												color: 'danger',
												onClick: (function eliminarAmigoInterno(A) {
													return Object(n.a)(
														a.a.mark(function _callee() {
															var e, r
															return a.a.wrap(function _callee$(t) {
																for (;;)
																	switch ((t.prev = t.next)) {
																		case 0:
																			return (
																				E(''),
																				((e = Object(d.obtenerCredenciales)(
																					p
																				)).idAmigo = A.id),
																				(t.next = 5),
																				Object(O.eliminarAmigo)(e)
																			)
																		case 5:
																			0 === (r = t.sent).code ? Q() : E(r.err)
																		case 7:
																		case 'end':
																			return t.stop()
																	}
															}, _callee)
														})
													)
												})(e),
												children: 'Eliminar',
											}),
										],
									}),
								],
							}),
						],
					})
				}
			e.default = D
		},
		199: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'FormCrearSala', function () {
					return u
				})
			var t = r(6),
				a = r.n(t),
				n = r(9),
				c = r(8),
				o = r(1),
				s = r(27),
				i = r(4),
				g = r(77),
				O = r(101),
				d = (r(289), r(2)),
				u = function FormCrearSala(A) {
					var e = A.enviarSolicitud,
						r = Object(s.a)({ nombre: '' }),
						t = r.register,
						u = r.handleSubmit,
						D = r.errors,
						l = Object(o.useState)(!1),
						w = Object(c.a)(l, 2),
						C = w[0],
						B = w[1]
					return Object(d.jsx)(i.g, {
						id: 'panelSala',
						children: Object(d.jsxs)('form', {
							id: 'crearSala',
							onSubmit: u(
								(function () {
									var A = Object(n.a)(
										a.a.mark(function _callee(A) {
											return a.a.wrap(function _callee$(r) {
												for (;;)
													switch ((r.prev = r.next)) {
														case 0:
															return (
																(A.tiempoTurno = parseInt(A.tiempoTurno)),
																B(!0),
																(r.next = 4),
																e(A)
															)
														case 4:
															B(!1)
														case 5:
														case 'end':
															return r.stop()
													}
											}, _callee)
										})
									)
									return function (e) {
										return A.apply(this, arguments)
									}
								})()
							),
							children: [
								Object(d.jsx)(g.EntradaNombre, {
									register: t,
									errors: D,
									texto: 'Nombre de la sala',
									label: 'nombreSala',
								}),
								Object(d.jsx)(O.EntradaNumero, {
									register: t,
									errors: D,
									texto: 'Tiempo de turno (en minutos)',
									label: 'tiempoTurno',
								}),
								Object(d.jsx)('div', {
									className: 'text-center mt-4',
									children: Object(d.jsx)(i.d, {
										color: 'indigo',
										type: 'submit',
										disabled: C,
										children: 'Crear sala',
									}),
								}),
							],
						}),
					})
				}
		},
		200: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'InvitarAmigo', function () {
					return n
				})
			r(1)
			var t = r(4),
				a = r(2),
				n = function InvitarAmigo(A) {
					var e = A.amigo,
						r = A.ws
					return Object(a.jsx)(t.d, {
						className: 'btn-invitar',
						onClick: function invitarAmigo() {
							var A = { idInvitado: e.id, tipo: 'Invitar' }
							console.log(r, 'Ws cuando invitas'), r.send(JSON.stringify(A))
						},
						children: 'Invitar',
					})
				}
			e.default = n
		},
		201: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'Jugador', function () {
					return i
				})
			r(1)
			var t = r(4),
				a = r(72),
				n = r(47),
				c = r(59),
				o = r(91),
				s = (r(959), r(2)),
				i = function Jugador(A) {
					var e = A.datos,
						r = n.a[e.icono].img,
						i = a.a[e.aspecto].img
					return Object(s.jsxs)(t.D, {
						children: [
							Object(s.jsx)(t.e, {
								md: '4',
								className: 'd-flex justify-content-center align-items-center',
								children: Object(s.jsxs)('div', {
									children: [
										Object(s.jsx)('img', {
											src: c.a,
											className: 'icono-marco-jugador',
										}),
										Object(s.jsx)('img', {
											src: r,
											className: 'icono-jugador',
										}),
									],
								}),
							}),
							Object(s.jsx)(t.e, {
								md: '4',
								className:
									'd-flex justify-content-center align-items-center nombre-jugador',
								children: e.nombre,
							}),
							Object(s.jsx)(t.e, {
								md: '4',
								className: 'd-flex justify-content-center align-items-center',
								children: Object(s.jsxs)('div', {
									children: [
										Object(s.jsx)('img', {
											src: i,
											className: 'aspecto-jugador',
										}),
										Object(s.jsx)('img', {
											src: o.a,
											className: 'aspecto-fondo-jugador',
										}),
									],
								}),
							}),
						],
					})
				}
			e.default = i
		},
		202: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'ListaJugadoresPartida', function () {
					return c
				})
			r(1)
			var t = r(4),
				a = r(201),
				n = r(2),
				c = function ListaJugadoresPartida(A) {
					var e = A.usuarios
					return Object(n.jsx)(t.g, {
						className: 'mt-3 fondo-lista-jugadores',
						children: Object(n.jsx)(t.o, {
							className: 'd-flex align-items-center lista-jugadores-sala',
							style: { width: '18.5rem' },
							children: e.map(function (A) {
								return Object(n.jsx)(
									t.p,
									{
										className: 'jugador-sala',
										children: Object(n.jsx)(a.default, { datos: A }),
									},
									A.id.toString()
								)
							}),
						}),
					})
				}
			e.default = c
		},
		203: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'SalaEncabezado', function () {
					return n
				})
			r(1)
			var t = r(4),
				a = r(2),
				n = function SalaEncabezado(A) {
					var e = A.datos
					return Object(a.jsxs)('div', {
						className: 'd-flex p-2 flex-row justify-content-between ',
						style: { background: '#8e610c', color: '#fff' },
						children: [
							Object(a.jsx)(t.e, {
								className:
									'm-0 d-flex justify-content-start align-items-center',
								children: Object(a.jsx)('h2', {
									className: 'm-0 titulo-sala',
									children: e.nombrePartida,
								}),
							}),
							Object(a.jsx)(t.e, {
								className:
									'm-0 d-flex justify-content-center align-items-center',
								children: Object(a.jsxs)('h2', {
									className: 'm-0 titulo-sala',
									children: ['Tiempo de turno: ', e.tiempoTurno, ' min'],
								}),
							}),
							Object(a.jsx)(t.e, {
								className: 'm-0 d-flex justify-content-end align-items-center',
								children: Object(a.jsxs)('h2', {
									className: 'm-0 titulo-sala',
									children: ['Hay ', e.jugadores.length, ' jugadores activos'],
								}),
							}),
						],
					})
				}
			e.default = n
		},
		204: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'MemorizedAspecto', function () {
					return s
				})
			var t = r(1),
				a = r.n(t),
				n = r(72),
				c = r(2),
				o = function Aspecto(A) {
					var e = A.x,
						r = A.y,
						t = A.numAspecto
					return Object(c.jsx)('image', {
						href: n.a[t].img,
						height: '100px',
						width: '100px',
						x: e - 35,
						y: r - 50,
					})
				}
			function aspectoPropsAreEqual(A, e) {
				return A.x === e.x && A.y === e.y && A.numAspecto === e.numAspecto
			}
			e.default = o
			var s = a.a.memo(o, aspectoPropsAreEqual)
		},
		205: function (A, e, r) {
			'use strict'
			r.r(e)
			r(1), r(980)
			var t = r(2)
			e.default = function FasesPartida(A) {
				var e = ['', '', '']
				switch (A.fase) {
					case 1:
						e = ['activa', '', '']
						break
					case 2:
						e = ['', 'activa', '']
						break
					case 3:
						e = ['', '', 'activa']
						break
					default:
						e = ['', '', '']
				}
				return Object(t.jsx)('div', {
					className: 'fases',
					children: Object(t.jsxs)('svg', {
						xmlns: 'http://www.w3.org/2000/svg',
						version: '1.1',
						id: 'svg2',
						height: '160.36218',
						width: '933.09448',
						children: [
							Object(t.jsx)('defs', { id: 'defs4' }),
							Object(t.jsx)('g', {
								id: 'layer1',
								transform: 'translate(0,-891.98765)',
								children: Object(t.jsxs)('g', {
									transform: 'translate(121.78218,590.09901)',
									id: 'g4197',
									children: [
										Object(t.jsx)('path', {
											className: e[0],
											id: 'path4168',
											d: 'm 149.12106,351.1659 -250,0 0,70.73171 250,0 53.44551,-30.85678 z',
											style: { fill: '#444' },
										}),
										Object(t.jsx)('text', {
											style: { fill: 'white' },
											x: '-10',
											y: '393',
											children: 'REFUERZOS',
										}),
										Object(t.jsx)('path', {
											className: e[1],
											id: 'path4170',
											d: 'm 468.42872,351.64983 53.69458,40.39408 -53.69458,30.54188 -249.7537,-0.49262 55.17241,-30.54187 -55.17241,-40.39409 z',
											style: { fill: '#444' },
										}),
										Object(t.jsx)('text', {
											style: { fill: 'white' },
											x: '340',
											y: '393',
											children: 'ATAQUE',
										}),
										Object(t.jsx)('path', {
											className: e[2],
											id: 'path4168-5',
											d: 'm 789.44927,352.26436 -250,0 53.69458,40.29196 -53.69458,30.43975 250,0 z',
											style: { fill: '#444' },
										}),
										Object(t.jsx)('text', {
											style: { fill: 'white' },
											x: '630',
											y: '393',
											children: 'MOVER TROPAS',
										}),
									],
								}),
							}),
						],
					}),
				})
			}
		},
		206: function (A, e, r) {
			'use strict'
			r.r(e)
			var t = r(47),
				a = r(4),
				n = (r(1), r(2))
			e.default = function JugadorPartida(A) {
				var e = A.jugador
				return Object(n.jsxs)(a.D, {
					className: 'jugador-en-partida',
					children: [
						Object(n.jsx)(a.e, {
							md: '4',
							children: Object(n.jsx)('div', {
								children: Object(n.jsx)('img', {
									src: t.a[e.icono].img,
									className: 'icono-jugador-partida',
								}),
							}),
						}),
						Object(n.jsx)(a.e, {
							md: '7',
							className: 'd-flex justify-content-center align-items-center',
							children: e.nombre,
						}),
					],
				})
			}
		},
		207: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'MemorizedLinea', function () {
					return o
				})
			var t = r(1),
				a = r.n(t),
				n = r(2),
				c = function Linea(A) {
					var e = A.x1,
						r = A.y1,
						t = A.x2,
						a = A.y2
					return Object(n.jsx)('line', {
						x1: e,
						y1: r,
						x2: t,
						y2: a,
						style: {
							stroke: 'rgb(255, 255, 255, 0.400)',
							strokeWidth: '2',
							strokeDasharray: 5,
						},
					})
				}
			function lineaPropsAreEqual(A, e) {
				return A.x1 === e.x1 && A.x2 === e.x2 && A.y1 === e.y1 && A.y2 === e.y2
			}
			e.default = c
			var o = a.a.memo(c, lineaPropsAreEqual)
		},
		208: function (A, e, r) {
			'use strict'
			r.r(e)
			r(1)
			var t = r(4),
				a = r(206),
				n = (r(984), r(2))
			e.default = function ListaJugadores(A) {
				var e = A.jugadores,
					r = A.jugadorTurno
				return Object(n.jsx)(t.o, {
					className:
						'jugadores-en-partida d-flex flex-row justify-content-around',
					children: e.map(function (A, e) {
						var c = 'jugador-en-partida jugador'.concat(e)
						return (
							e === r && (c += ' esSuTurno'),
							Object(n.jsx)(
								t.p,
								{
									className: c,
									children: Object(n.jsx)(a.default, { jugador: A }),
								},
								A.id.toString()
							)
						)
					}),
				})
			}
		},
		209: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'ModalFormNumeroTropas', function () {
					return d
				})
			var t = r(8),
				a = r(1),
				n = r(16),
				c = r(4),
				o = r(27),
				s = r(101),
				i = r(11),
				g = r(92),
				O = r(2),
				d = function ModalFormNumeroTropas(A) {
					var e = A.isOpen,
						r = A.locations,
						d = A.max,
						u = A.estado,
						D = A.onSubmit,
						l = A.toggle,
						w = Object(o.a)({ numero: 1 }),
						C = w.register,
						B = w.handleSubmit,
						E = w.errors,
						p = Object(a.useState)(!1),
						Q = Object(t.a)(p, 2),
						h = Q[0],
						j = Q[1],
						m = Object(a.useState)(''),
						x = Object(t.a)(m, 2),
						I = x[0],
						M = x[1],
						H = !1,
						f = r[Object(i.obtenerOrigen)(u)],
						b = r[Object(i.obtenerDestino)(u)],
						v = Object(g.destinosMovimientos)(parseInt(f.id), u.territorios, r),
						N =
							u.territorios[parseInt(f.id)].jugador == u.turnoJugador &&
							u.territorios[parseInt(b.id)].jugador == u.turnoJugador,
						F = '¿Cuántas tropas se envían de '
							.concat(f.name, ' a ')
							.concat(b.name, '? (máx. ')
							.concat(d, ')'),
						z =
							'Mínimo se necesita mover 1 tropa y como máximo una menos del total de las del continente.'
					return (
						u.fase === i.FASES.FASE_REFUERZOS
							? ((F = '¿Cuántos refuerzos se envían a '
									.concat(b.name, '? (máx. ')
									.concat(d, ')')),
							  (z =
									'Se debe enviar como mínimo 1 refuerzo y como máximo el total de refuerzos restantes ('.concat(
										d,
										')'
									)))
							: u.fase !== i.FASES.FASE_ATAQUE ||
							  f.conexiones.includes(parseInt(b.id))
							? u.fase === i.FASES.FASE_ATAQUE &&
							  !u.territorios[parseInt(f.id)].jugador == u.turnoJugador
								? ((H = !0),
								  (z = 'El país de origen debe pertenecer al jugador'))
								: u.fase !== i.FASES.FASE_MOVIMIENTO ||
								  v.includes(parseInt(b.id))
								? u.fase !== i.FASES.FASE_MOVIMIENTO ||
								  N ||
								  ((H = !0),
								  (z =
										'Los países de origen y destino deben pertenecer al jugador'))
								: ((H = !0),
								  (z =
										'Los países de origen y destino deben estar conectados por países pertenecientes al jugador'))
							: ((H = !0),
							  (z =
									'Los países de origen y destino del ataque deben estar unidos')),
						Object(O.jsxs)(c.q, {
							isOpen: e,
							toggle: l,
							children: [
								Object(O.jsx)(c.t, { children: F }),
								Object(O.jsx)(c.r, {
									children: Object(O.jsxs)('form', {
										id: 'registro',
										onSubmit: B(function (A) {
											var e = parseInt(A.n)
											e > 0 && e <= d && !H ? (M(''), j(!0), D(A), j(!1)) : M(z)
										}),
										children: [
											Object(O.jsx)(s.EntradaNumero, {
												register: C,
												errors: E,
												texto: 'Tropas',
												label: 'n',
											}),
											Object(O.jsx)('div', {
												className: 'text-center mt-4',
												children: Object(O.jsx)(c.d, {
													color: 'indigo',
													type: 'submit',
													disabled: h,
													children: 'Mover tropas',
												}),
											}),
										],
									}),
								}),
								Object(O.jsx)(n.ErroresServer, { serverErrors: I }),
							],
						})
					)
				}
		},
		210: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'ModalReconectando', function () {
					return o
				})
			r(1)
			var t = r(19),
				a = r(4),
				n = r(16),
				c = r(2),
				o = function ModalReconectando(A) {
					var e = A.isOpen,
						r = A.error,
						o = Object(t.d)()
					return Object(c.jsxs)(a.q, {
						isOpen: e,
						toggle: function toggle() {},
						children: [
							Object(c.jsx)(a.t, {
								children:
									'Te has desconectado. Sal y vuelve a entrar o recarga.',
							}),
							Object(c.jsxs)(a.r, {
								children: [
									Object(c.jsx)(n.ErroresServer, { serverErrors: r }),
									Object(c.jsx)(a.d, {
										onClick: function onClick() {
											o.push('/')
										},
										children: 'Volver al menú principal',
									}),
								],
							}),
						],
					})
				}
		},
		211: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'MemorizedNumTropas', function () {
					return o
				})
			var t = r(1),
				a = r.n(t),
				n = r(2),
				c = function NumTropas(A) {
					var e = A.x,
						r = A.y,
						t = A.numTropas
					return Object(n.jsxs)(n.Fragment, {
						children: [
							Object(n.jsx)('foreignObject', {
								x: e + 12,
								y: r - 7,
								width: '160',
								height: '160',
								children: Object(n.jsx)('div', {
									xmlns: 'http://www.w3.org/1999/xhtml',
									className: 'fondo-numTropas',
								}),
							}),
							Object(n.jsx)('text', {
								style: {
									fill: 'white',
									stroke: 'darkslategrey',
									strokeWidth: '0.05rem',
								},
								x: e + 17,
								y: r + 10,
								children: t,
							}),
						],
					})
				}
			function numTropasPropsAreEqual(A, e) {
				return A.x === e.x && A.y === e.y && A.numTropas === e.numTropas
			}
			e.default = c
			var o = a.a.memo(c, numTropasPropsAreEqual)
		},
		212: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'MemorizedSVGMap', function () {
					return g
				})
			var t = r(1),
				a = r.n(t),
				n = r(213),
				c = r(204),
				o = r(211),
				s = r(207),
				i = r(2),
				g = a.a.memo(function SVGMap(A) {
					return Object(i.jsxs)('svg', {
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: A.map.viewBox,
						className: A.className,
						role: A.role,
						'aria-label': A.map.label,
						children: [
							A.childrenBefore,
							A.map.locations.map(function (e, r) {
								return Object(i.jsx)(
									n.MemorizedSVGTerritorio,
									{ location: e, index: r, props: A },
									e.id
								)
							}),
							A.map.locations.map(function (A) {
								return (
									'centrosAdyacentes' in A &&
									A.centrosAdyacentes.map(function (e, r) {
										return Object(i.jsx)(
											s.MemorizedLinea,
											{ x1: A.coords.x, y1: A.coords.y, x2: e.x, y2: e.y },
											''.concat(A.id, '-').concat(r)
										)
									})
								)
							}),
							A.map.locations.map(function (A, e) {
								return Object(i.jsxs)(i.Fragment, {
									children: [
										'aspecto' in A &&
											Object(i.jsx)(
												c.MemorizedAspecto,
												{ x: A.coords.x, y: A.coords.y, numAspecto: A.aspecto },
												'aspecto-'.concat(e)
											),
										'tropas' in A &&
											Object(i.jsx)(
												o.MemorizedNumTropas,
												{ x: A.coords.x, y: A.coords.y, numTropas: A.tropas },
												'tropas-'.concat(e)
											),
									],
								})
							}),
							A.childrenAfter,
						],
					})
				})
			g.defaultProps = {
				className: 'svg-map',
				role: 'none',
				locationClassName: 'svg-map__location',
				locationTabIndex: '0',
				locationRole: 'none',
			}
		},
		213: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'MemorizedSVGTerritorio', function () {
					return o
				})
			var t = r(1),
				a = r.n(t),
				n = r(2),
				c = function SVGTerritorio(A) {
					var e = A.location,
						r = A.index,
						t = A.props
					console.log('rerender territorio')
					var a =
						'function' == typeof t.locationClassName
							? t.locationClassName(e, r)
							: t.locationClassName
					return (
						(a = a + ' jugador'.concat(e.jugador) + ' ' + e.clase),
						Object(n.jsx)('g', {
							name: e.name,
							onClick: function onClick() {
								t.onLocationClick(e.id)
							},
							children: Object(n.jsx)(
								'path',
								{
									id: e.id,
									name: e.name,
									d: e.path,
									className: a,
									tabIndex:
										'function' == typeof t.locationTabIndex
											? t.locationTabIndex(e, r)
											: t.locationTabIndex,
									role: t.locationRole,
									'aria-label':
										'function' == typeof t.locationAriaLabel
											? t.locationAriaLabel(e, r)
											: e.name,
									'aria-checked':
										t.isLocationSelected && t.isLocationSelected(e, r),
									onMouseOver: t.onLocationMouseOver,
									onMouseOut: t.onLocationMouseOut,
									onMouseMove: t.onLocationMouseMove,
									onKeyDown: t.onLocationKeyDown,
									onFocus: t.onLocationFocus,
									onBlur: t.onLocationBlur,
								},
								e.id
							),
						})
					)
				}
			function territorioPropsAreEqual(A, e) {
				var r =
						A.location.aspecto === e.location.aspecto &&
						A.location.conexiones.length === e.location.conexiones.length &&
						A.location.conexiones.every(function (A, r) {
							return A === e.location.conexiones[r]
						}) &&
						A.location.id === e.location.id &&
						A.location.jugador === e.location.jugador &&
						A.location.name === e.location.name &&
						A.location.path === e.location.path &&
						A.location.tropas === e.location.tropas &&
						A.location.clase === e.location.clase,
					t =
						A.props.locationAriaLabel === e.props.locationAriaLabel &&
						A.props.locationRole === e.props.locationRole &&
						A.props.locationTabIndex === e.props.locationTabIndex &&
						A.props.locationClassName === e.props.locationClassName
				return r && t
			}
			e.default = c
			var o = a.a.memo(c, territorioPropsAreEqual)
		},
		214: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'Temporizador', function () {
					return s
				})
			var t = r(8),
				a = r(1),
				n = r(4),
				c = r(98),
				o = r(2),
				s = function Temporizador(A) {
					var e = A.tiempoInicio,
						r = A.tiempoTurno,
						s = Object(a.useState)(0),
						i = Object(t.a)(s, 2),
						g = i[0],
						O = i[1],
						d = function actualizarSegundosRestantes() {
							O(Object(c.calcularSegundosRestantes)(e, r))
						}
					return (
						Object(a.useEffect)(
							function () {
								d()
								var A = setInterval(d, 1e3)
								return function () {
									clearInterval(A)
								}
							},
							[e, r]
						),
						Object(o.jsx)(n.g, {
							className: 'temporizador',
							children: Object(o.jsxs)(n.e, {
								children: [
									Object(o.jsx)(n.D, {
										children: Object(o.jsx)('h4', {
											children: 'Tiempo restante:',
										}),
									}),
									Object(o.jsx)(n.D, {
										children: Object(o.jsxs)('h1', {
											className: 'tiempoRestante',
											children: [
												Math.floor(g / 3600),
												':',
												Math.floor(Math.floor(g % 3600) / 60),
												':',
												Math.floor(g % 60),
											],
										}),
									}),
								],
							}),
						})
					)
				}
		},
		215: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'FormActualizar', function () {
					return j
				})
			var t = r(6),
				a = r.n(t),
				n = r(9),
				c = r(8),
				o = r(1),
				s = r(27),
				i = r(77),
				g = r(78),
				O = r(52),
				d = r(143),
				u = r(216),
				D = r(102),
				l = r(16),
				w = r(60),
				C = r.n(w),
				B = r(4),
				E = (r(181), r(47)),
				p = r(72),
				Q = r(91),
				h = r(2),
				j = function FormActualizar(A) {
					var e = A.defaults,
						r = A.submitText,
						t = A.submitData,
						w = A.iconos,
						j = A.aspectos,
						m = Object(s.a)({
							defaultValues: {
								nombre: e.nombre ? e.nombre : '',
								icono: e.icono ? e.icono : 0,
								aspecto: e.aspecto ? e.aspecto : 0,
								correo: e.correo ? e.correo : '',
								clave: '1',
								recibeCorreos: !!e.recibeCorreos && e.recibeCorreos,
								cambioClave: !!e.cambioClave && e.cambioClave,
							},
						}),
						x = m.register,
						I = m.handleSubmit,
						M = m.errors,
						H = Object(o.useState)(!1),
						f = Object(c.a)(H, 2),
						b = f[0],
						v = f[1],
						N = Object(o.useState)(''),
						F = Object(c.a)(N, 2),
						z = F[0],
						G = F[1]
					return Object(h.jsx)(B.g, {
						id: 'cont-actualizar',
						children: Object(h.jsx)(B.D, {
							className: 'd-flex align-items-center flex-column',
							children: Object(h.jsx)(B.e, {
								md: '6',
								children: Object(h.jsxs)('form', {
									id: 'registro',
									onSubmit: I(
										(function () {
											var A = Object(n.a)(
												a.a.mark(function _callee(A) {
													var e, r
													return a.a.wrap(function _callee$(a) {
														for (;;)
															switch ((a.prev = a.next)) {
																case 0:
																	if (!b) {
																		a.next = 2
																		break
																	}
																	return a.abrupt('return', !1)
																case 2:
																	return (
																		v(!0),
																		G(''),
																		((e = A).clave = C.a.sha256(A.clave)),
																		(a.next = 8),
																		t(e)
																	)
																case 8:
																	;(r = a.sent),
																		console.log(r),
																		0 !== r.code && G(r.err),
																		v(!1)
																case 12:
																case 'end':
																	return a.stop()
															}
													}, _callee)
												})
											)
											return function (e) {
												return A.apply(this, arguments)
											}
										})()
									),
									children: [
										Object(h.jsx)(l.ErroresServer, { serverErrors: z }),
										Object(h.jsx)(d.EntradaImg, {
											register: x,
											errors: M,
											tag: 'icono',
											disponibles: w,
											inicial: e.icono,
											imagenes: E.a,
										}),
										Object(h.jsx)(d.EntradaImg, {
											register: x,
											errors: M,
											tag: 'aspecto',
											disponibles: j,
											inicial: e.aspecto,
											imagenes: p.a,
											fondo: Q.a,
										}),
										Object(h.jsx)(i.EntradaNombre, { register: x, errors: M }),
										Object(h.jsx)(g.EntradaCorreo, { register: x, errors: M }),
										Object(h.jsx)(O.EntradaClave, {
											titulo: 'Contraseña',
											register: x,
											errors: M,
										}),
										Object(h.jsx)(u.EntradaCambioClave, {
											titulo: 'Quiero cambiar mi clave:',
											register: x,
											errors: M,
										}),
										Object(h.jsx)(D.RecibeCorreos, { register: x, errors: M }),
										Object(h.jsx)('div', {
											className: 'text-center mt-4',
											children: Object(h.jsx)(B.d, {
												type: 'submit',
												disabled: b,
												children: r,
											}),
										}),
									],
								}),
							}),
						}),
					})
				}
			e.default = j
		},
		216: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'EntradaCambioClave', function () {
					return a
				})
			r(1)
			var t = r(2),
				a = function EntradaCambioClave(A) {
					var e = A.titulo,
						r = A.register,
						a = A.errors
					return Object(t.jsxs)(t.Fragment, {
						children: [
							Object(t.jsxs)('label', {
								htmlFor: 'cambioClave',
								className: 'black-text',
								children: [' ', e],
							}),
							Object(t.jsx)('input', {
								type: 'checkbox',
								name: 'cambioClave',
								id: 'cambioClave',
								className: 'form-control',
								ref: r(),
							}),
							a.cambioClave
								? Object(t.jsxs)('div', {
										className: 'alert alert-danger',
										children: [' ', a.cambioClave.message],
								  })
								: null,
						],
					})
				}
		},
		217: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'FormInicio', function () {
					return C
				})
			var t = r(6),
				a = r.n(t),
				n = r(9),
				c = r(8),
				o = r(1),
				s = r(27),
				i = r(218),
				g = r(52),
				O = r(16),
				d = r(60),
				u = r.n(d),
				D = r(4),
				l = r(12),
				w = (r(1009), r(2)),
				C = function FormInicio(A) {
					var e = A.defaults,
						r = A.submitText,
						t = A.makePetition,
						d = Object(o.useContext)(l.default),
						C = Object(s.a)({
							defaultValues: { usuario: e.nombre ? e.nombre : '', clave: '' },
						}),
						B = C.register,
						E = C.handleSubmit,
						p = C.errors,
						Q = Object(o.useState)(!1),
						h = Object(c.a)(Q, 2),
						j = h[0],
						m = h[1],
						x = Object(o.useState)(''),
						I = Object(c.a)(x, 2),
						M = I[0],
						H = I[1]
					return Object(w.jsx)(D.g, {
						id: 'cont-inicio',
						children: Object(w.jsx)(D.D, {
							className: 'd-flex align-items-center flex-column',
							children: Object(w.jsx)(D.e, {
								md: '6',
								children: Object(w.jsxs)('form', {
									id: 'inicio',
									onSubmit: E(
										(function () {
											var A = Object(n.a)(
												a.a.mark(function _callee(A) {
													var e, r
													return a.a.wrap(function _callee$(a) {
														for (;;)
															switch ((a.prev = a.next)) {
																case 0:
																	if (!j) {
																		a.next = 2
																		break
																	}
																	return a.abrupt('return', !1)
																case 2:
																	return (
																		m(!0),
																		((e = A).clave = u.a.sha256(A.clave)),
																		(a.next = 7),
																		t(e)
																	)
																case 7:
																	;(r = a.sent),
																		m(!1),
																		r.err
																			? H(r.err)
																			: (H(''),
																			  Object(l.registrarseLocal)(d, r))
																case 10:
																case 'end':
																	return a.stop()
															}
													}, _callee)
												})
											)
											return function (e) {
												return A.apply(this, arguments)
											}
										})()
									),
									children: [
										Object(w.jsx)(O.ErroresServer, { serverErrors: M }),
										Object(w.jsx)(i.EntradaUsuario, { register: B, errors: p }),
										Object(w.jsx)(g.EntradaClave, {
											titulo: 'Contraseña',
											register: B,
											errors: p,
										}),
										Object(w.jsx)('div', {
											className: 'text-center mt-4',
											children: Object(w.jsx)(D.d, {
												className: 'btn-inicio',
												type: 'submit',
												disabled: j,
												children: r,
											}),
										}),
									],
								}),
							}),
						}),
					})
				}
			e.default = C
		},
		218: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'EntradaUsuario', function () {
					return n
				})
			r(1)
			var t = r(34),
				a = r(2),
				n = function EntradaUsuario(A) {
					var e = A.register,
						r = A.errors
					return Object(a.jsxs)(a.Fragment, {
						children: [
							Object(a.jsxs)('label', {
								htmlFor: 'usuario',
								className: 'black-text',
								children: [' ', 'Correo o usuario'],
							}),
							Object(a.jsx)('input', {
								type: 'text',
								name: 'usuario',
								id: 'usuario',
								className: 'form-control',
								placeholder: 'Correo o usuario',
								ref: e(),
							}),
							Object(a.jsx)(t.default, { error: r.usuario }),
						],
					})
				}
		},
		219: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'FormRegistro', function () {
					return E
				})
			var t = r(6),
				a = r.n(t),
				n = r(9),
				c = r(8),
				o = r(1),
				s = r(27),
				i = r(77),
				g = r(78),
				O = r(52),
				d = r(102),
				u = r(16),
				D = r(60),
				l = r.n(D),
				w = r(4),
				C = r(12),
				B = (r(1011), r(2)),
				E = function FormRegistro(A) {
					var e = A.defaults,
						r = A.submitText,
						t = A.makePetition,
						D = A.siValido,
						E = Object(o.useContext)(C.default),
						p = Object(s.a)({
							defaultValues: {
								nombre: e.nombre ? e.nombre : '',
								correo: e.correo ? e.correo : '',
								clave: '',
								recibeCorreos: !!e.recibeCorreos && e.recibeCorreos,
							},
						}),
						Q = p.register,
						h = p.handleSubmit,
						j = p.errors,
						m = Object(o.useState)(!1),
						x = Object(c.a)(m, 2),
						I = x[0],
						M = x[1],
						H = Object(o.useState)(''),
						f = Object(c.a)(H, 2),
						b = f[0],
						v = f[1]
					return Object(B.jsx)(w.g, {
						id: 'cont-registro',
						children: Object(B.jsx)(w.D, {
							className: 'd-flex align-items-center flex-column',
							children: Object(B.jsx)(w.e, {
								md: '6',
								children: Object(B.jsxs)('form', {
									id: 'registro',
									onSubmit: h(
										(function () {
											var A = Object(n.a)(
												a.a.mark(function _callee(A) {
													var e, r
													return a.a.wrap(function _callee$(a) {
														for (;;)
															switch ((a.prev = a.next)) {
																case 0:
																	if (!I) {
																		a.next = 2
																		break
																	}
																	return a.abrupt('return', !1)
																case 2:
																	return (
																		M(!0),
																		((e = A).clave = l.a.sha256(A.clave)),
																		(a.next = 7),
																		t(e)
																	)
																case 7:
																	;(r = a.sent),
																		M(!1),
																		r.err ? v(r.err) : (v(''), D(E, r))
																case 10:
																case 'end':
																	return a.stop()
															}
													}, _callee)
												})
											)
											return function (e) {
												return A.apply(this, arguments)
											}
										})()
									),
									children: [
										Object(B.jsx)(u.ErroresServer, { serverErrors: b }),
										Object(B.jsx)(i.EntradaNombre, { register: Q, errors: j }),
										Object(B.jsx)(g.EntradaCorreo, { register: Q, errors: j }),
										Object(B.jsx)(O.EntradaClave, {
											titulo: 'Contraseña',
											register: Q,
											errors: j,
										}),
										Object(B.jsx)(d.RecibeCorreos, { register: Q, errors: j }),
										Object(B.jsx)('div', {
											className: 'text-center mt-4',
											children: Object(B.jsx)(w.d, {
												className: 'btn-registro',
												type: 'submit',
												disabled: I,
												children: r,
											}),
										}),
									],
								}),
							}),
						}),
					})
				}
			e.default = E
		},
		220: function (A, e, r) {
			'use strict'
			r.r(e)
			var t = r(6),
				a = r.n(t),
				n = r(10),
				c = r(9),
				o = r(8),
				s = r(1),
				i = r(4),
				g = r(12),
				O = r(16),
				d = r(18),
				u = r(47),
				D = r(72),
				l = r(103),
				w = r(139),
				C = r(59),
				B = r(91),
				E = r(15),
				p = r(2)
			e.default = function ElementoTienda(A) {
				var e,
					r = A.datos,
					t = A.tipo,
					Q = Object(s.useContext)(g.default),
					h = Object(s.useState)(''),
					j = Object(o.a)(h, 2),
					m = j[0],
					x = j[1],
					I = Object(s.useState)(!1),
					M = Object(o.a)(I, 2),
					H = M[0],
					f = M[1]
				e = 'Icono' === t ? u.a[r.id].img : D.a[r.id].img
				var b = function toggle() {
					f(!H)
				}
				return Object(p.jsxs)(p.Fragment, {
					children: [
						Object(p.jsxs)('div', {
							className: 'item-tienda',
							children: [
								Object(p.jsxs)('div', {
									className: 'img-item-container',
									children: [
										Object(p.jsx)('img', { src: e, className: 'img-item' }),
										Object(p.jsx)('img', {
											src: C.a,
											className: 'img-item-fondo',
										}),
										'Aspecto' === t &&
											Object(p.jsx)('img', {
												src: B.a,
												className: 'img-tropas-fondo',
											}),
									],
								}),
								Object(p.jsx)('div', {
									className:
										'd-flex justify-content-center align-content-center',
									children: Object(p.jsxs)(i.d, {
										onClick: b,
										children: [
											Object(p.jsx)('img', {
												src: w.a,
												className: 'riskos-img',
											}),
											Object(p.jsx)('div', {
												className: 'd-none d-md-inline',
												children: r.precio,
											}),
										],
									}),
								}),
							],
						}),
						Object(p.jsxs)(i.q, {
							isOpen: H,
							toggle: b,
							children: [
								Object(p.jsxs)(i.t, {
									toggle: b,
									children: [
										'¿Quieres comprar este ',
										t,
										' por ',
										r.precio,
										' riskos?',
									],
								}),
								Object(p.jsx)(i.r, {
									className: 'd-flex justify-content-between',
									children: Object(p.jsx)(O.ErroresServer, { serverErrors: m }),
								}),
								Object(p.jsxs)(i.l, {
									className: 'd-flex justify-content-around',
									children: [
										Object(p.jsxs)(i.d, {
											className: 'cancela-compra',
											onClick: b,
											children: [' ', 'Cancelar'],
										}),
										Object(p.jsx)(i.d, {
											className: 'compra-objeto',
											onClick: (function comprarObjetoInterno() {
												return Object(c.a)(
													a.a.mark(function _callee() {
														var A, e
														return a.a.wrap(function _callee$(a) {
															for (;;)
																switch ((a.prev = a.next)) {
																	case 0:
																		return (
																			console.log('Comprar objeto interno'),
																			x(''),
																			(A = Object(n.a)(
																				Object(n.a)(
																					{},
																					Object(E.obtenerCredenciales)(Q)
																				),
																				{},
																				{ cosmetico: r.id, tipo: t }
																			)),
																			(a.next = 5),
																			Object(d.comprarObjeto)(A)
																		)
																	case 5:
																		0 === (e = a.sent).code
																			? (Object(l.recargarUsuarioServer)(Q),
																			  b())
																			: x(e.err)
																	case 7:
																	case 'end':
																		return a.stop()
																}
														}, _callee)
													})
												)
											})(),
											children: 'Comprar',
										}),
									],
								}),
							],
						}),
					],
				})
			}
		},
		221: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'PanelDados', function () {
					return p
				})
			var t = r(4),
				a =
					(r(1),
					'data:image/png;base64,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'),
				n =
					'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAU1JREFUeNrclkGOhSAMhunErQkbuQDxBN77bT3Fu0C9gW56g382lgj4gkR8mUwTU8TK54+1lgCYb9qP+bJ16QQRNZUMgD4CiQitt3hfkzKgwpZlMY0VRtDoHbaGna1ZTJppmsw0Tc9lqbU2gqVjvV7rT4HWWiMiEcA5Z5xzYU5EQtxV/xGoQWoKSse10KJCa615v9/Z/utcc4Xq53kO13RcC0sVkn7oRIR1XTNV+oTpjTXmnAsVpysF3wH9ieLdDCgiWYI8BhSRUJFK0Aw4DEOVV9ixIolIFhdV8z1TAQDrul72zIy+79H3Pbz38N6Hc2YOcfvaBkCscNs2MwzDZV+qSGncbYUAwMxBnR7MHMUdFUbAWtgZNIXtLUQARpXmTnuhP9pxHM/ajFBpmgELfY3JWgwARESPwF5dR6dd26vrqHWbeIRFW/pvO+/fAQDsu+u7rOivnQAAAABJRU5ErkJggg==',
				c =
					'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAWJJREFUeNrclkGOhiAMhemErYkbuYDxBN7brafwAvUGuOEGbxZjGUBFGcm/mCamBgmfbR9QAqA+aV/qw6bTASKqGjIAugQSEWqneF+TDkCBreuqKkcYQaMavoWN46jGcVS5NauJJgSl0CywbdsiHwKMMcoYE42F8w7Atm2Vc67IiwkofXfOXQNLYeKXZTmkTsaqRHj2c/M8+3XkPZzvd4PsOyICMz+CSX2WZTn9nv68McYfABHQWptVonPuoECB5iwEPt4WISxVY5q2qof3lRqrA3NqvEvpY6Bz7iCEVI0lMH+47sKBtRYAYK0FM6NpGjRNA2b24wDAzGDmaH7O/2B2Tgg8g11BS/wlMIX1fY++719DQ2BUw67rbtW4bZvquq7I39aQmX108pTUrKiGYiFUUvlXC4HR0Zb2M3JbD8Pwtq/5baaEfBZlDVNKYdLaM6KubdKaareJk9Z0ej392877ewBFEwP+c4fEnAAAAABJRU5ErkJggg==',
				o =
					'data:image/png;base64,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',
				s =
					'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAX5JREFUeNrclsGNhiAQhRnD1YSLNGCswL69WoUNjB3ghQ7eHlZYQECSn/yHnQsGH/M58EAIgPhmDOLLIdMOIupaMgAqAokIvaf4zkkPoIOd5yk6VxhBozVMYeu6inVdm5Pn9GnOoTY49/ypfqgN1loLrXXUp5SK2lZ9Fhi+dAPTZ2utUEr5tkVfBLokx3E8qnZ9IaxVX63QJdn33fe7Z/c+V+mb3u8Gt++ICMz8qCD9mHB9juN41SulhNbaHwAR0BhTdaK19uFAB61FCGw+S0NY6sZ02roe3iU3dgfW3Pg2pc1Aa+3DCKkbQ1iqLx6ut3FgjAEAGGPAzBjHEeM4gpl9PwAwM5i5Wf+LuTkhMDe4lKQEy+mLwHTwPM+Y57kKbdGHwGgNp2l6deN1XWKaJt+26Iumua5LLMtSdWMIa9UXTRMGM/spclNTi5o+nNLoaEvvM+5vvSxL0x4r6Yno7zLlyLkqe4QQApuUnhHd2jYpqfc1cZOSsr+nf3vz/hkA6gJ95LtACMcAAAAASUVORK5CYII=',
				i =
					'data:image/png;base64,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',
				g =
					'data:image/png;base64,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',
				O =
					'data:image/png;base64,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',
				d =
					'data:image/png;base64,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',
				u =
					'data:image/png;base64,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',
				D =
					'data:image/png;base64,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',
				l =
					'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAXhJREFUeNrcljFOwzAUhv0ab0hUBDUsuUB3XyEXyBG6hSsw9wrlFtk6VBzBExMXyAKIVEQqk6PHUBzZxg9XjQkSb3Ly58+nlzw/P0BENmXM2MTB3RsAEDVlRAQSCABYcx41IwBAE8pd2EN6GRVYt50Ftf5hbJjvnWTRrLY7ttruomok0DTodY49qZ3iI4H6QSEEE0IM9xpISC3kC2aoDe56jDYUp+40AIDrxZw1kLDN85v10O3N9bD2aTn2P/ruX1rmrdIGEpZjbwH0Wv8LV9OwkI/M0IT7DOdod6/vQ4ZkW/G9bKz2J82bBDaQfCvpsRoJ1HvOt4/O1UigucHNzbvcH0gt5HPPK/ZVqVhlKUopUUqJOvT1GO2IOXIm7zRWhjXnWGUpulFlKa4Xc1IL+cgMn64uWNF23m6y3B+83aRou6CP7DTmeKEPzqLtyEP1VK1Uaug0JDBmmMCZOV2VSv0K7ONxA96preYcSqWijokmzPqk/3by/hwAMPScgrmX3RMAAAAASUVORK5CYII=',
				w = [
					{ img: g, title: 'dado_rojo' },
					{ img: O, title: 'dado_rojo' },
					{ img: d, title: 'dado_rojo' },
					{ img: u, title: 'dado_rojo' },
					{ img: D, title: 'dado_rojo' },
					{ img: l, title: 'dado_rojo' },
				],
				C = [
					{ img: a, title: 'dado_blanco' },
					{ img: n, title: 'dado_blanco' },
					{ img: c, title: 'dado_blanco' },
					{ img: o, title: 'dado_blanco' },
					{ img: s, title: 'dado_blanco' },
					{ img: i, title: 'dado_blanco' },
				],
				B =
					'data:image/png;base64,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',
				E = (r(990), r(2)),
				p = function PanelDados(A) {
					var e = A.dados_origen,
						r = A.dados_destino
					return (
						console.log('Indice', e.indexOf(-1)),
						Object(E.jsxs)(t.g, {
							className:
								'mt-3 fondo-dados-partida pb-4 d-flex flex-column align-items-center',
							children: [
								Object(E.jsx)('h1', { children: 'RESULTADOS' }),
								Object(E.jsx)('h2', { children: 'Origen' }),
								-1 == e.indexOf(-1) &&
									Object(E.jsx)(t.D, {
										children: e.map(function (A, e) {
											return Object(E.jsx)(
												t.e,
												{
													children: Object(E.jsxs)('div', {
														className: 'dado-origen',
														children: [
															Object(E.jsx)('img', {
																src: B,
																className: 'marco-dado-partida',
															}),
															Object(E.jsx)('img', {
																src: C[A - 1].img,
																className: 'dado-partida',
															}),
														],
													}),
												},
												''.concat(e, '-origen')
											)
										}),
									}),
								-1 != e.indexOf(-1) &&
									Object(E.jsx)('p', { children: 'Esperando resultados' }),
								Object(E.jsx)('h2', { children: 'Destino' }),
								-1 == r.indexOf(-1) &&
									Object(E.jsx)(t.D, {
										children: r.map(function (A, e) {
											return Object(E.jsxs)(
												t.e,
												{
													className: 'dado-destino',
													children: [
														Object(E.jsx)('img', {
															src: B,
															className: 'marco-dado-partida',
														}),
														Object(E.jsx)('img', {
															src: w[A - 1].img,
															className: 'dado-partida',
														}),
													],
												},
												''.concat(e, '-destino')
											)
										}),
									}),
								-1 != r.indexOf(-1) &&
									Object(E.jsx)('p', { children: 'Esperando resultados' }),
							],
						})
					)
				}
			e.default = p
		},
		222: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'Cargando', function () {
					return a
				})
			r(1)
			var t = r(2),
				a = function Cargando() {
					return Object(t.jsxs)('div', {
						className: 'loader',
						children: [
							Object(t.jsx)('img', {
								src: 'data:image/png;base64,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',
								id: 'load-spinner',
							}),
							Object(t.jsx)('p', { children: 'Cargando...' }),
						],
					})
				}
		},
		223: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'ModalFinPartida', function () {
					return g
				})
			var t = r(1),
				a = r(19),
				n = [
					'“Appear weak when you are strong, and strong when you are weak.”',
					'“The supreme art of war is to subdue the enemy without fighting.”',
					'“If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.”',
					'“Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.”',
					"“Supreme excellence consists of breaking the enemy's resistance without fighting.”",
					'“Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win”',
					'“In the midst of chaos, there is also opportunity”',
					'“The greatest victory is that which requires no battle.”',
					'“To know your Enemy, you must become your Enemy.”',
					'“There is no instance of a nation benefitting from prolonged warfare.”',
				]
			var c = r(15),
				o = r(4),
				s = r(12),
				i = r(2),
				g = function ModalFinPartida(A) {
					var e = A.isOpen,
						r = A.ganador,
						g = A.riskos,
						O = Object(t.useContext)(s.default),
						d = Object(a.d)()
					return Object(i.jsxs)(o.q, {
						isOpen: e,
						toggle: function toggle() {},
						children: [
							Object(i.jsx)(o.t, {
								children: Object(i.jsx)('h3', {
									children: 'Fin de la partida',
								}),
							}),
							Object(i.jsxs)(o.r, {
								children: [
									Object(c.obtenerInfoUsuario)(O).nombre === r &&
										Object(i.jsxs)(i.Fragment, {
											children: [
												Object(i.jsx)(o.b, {
													color: 'success',
													children: Object(i.jsx)('p', {
														children: Object(i.jsx)('strong', {
															children: '¡Enhorabuena, has dominado el mundo!',
														}),
													}),
												}),
												Object(i.jsx)('p', {
													children: Object(i.jsxs)('strong', {
														children: ['Has ganado ', g, ' riskos.'],
													}),
												}),
											],
										}),
									Object(c.obtenerInfoUsuario)(O).nombre !== r &&
										Object(i.jsx)('p', {
											children: Object(i.jsxs)('strong', {
												children: ['El ganador es: ', r, '.'],
											}),
										}),
									Object(i.jsxs)('em', {
										children: [
											' ',
											n[Math.floor(Math.random() * n.length)],
											' - Sun Tzu',
										],
									}),
									Object(i.jsx)(o.d, {
										onClick: function onClick() {
											d.push('/')
										},
										children: 'Volver al menú principal',
									}),
								],
							}),
						],
					})
				}
			g.defaultProps = { ganador: '', riskos: 0 }
		},
		23: function (A, e, r) {
			'use strict'
			r.r(e)
			e.default = {
				VALUES: {
					nombre: 'Óscar',
					correo: '780378@unizar.es',
					clave: '@#idfa98sfd9',
					logged: !0,
					recibeCorreos: !0,
				},
				NULL_VALUES: {
					usuario: { nombre: '', correo: '', clave: '', recibeCorreos: !0 },
					logged: !1,
				},
				COOKIE_USER: 'user',
				OPTIONS_COOKIE: { expires: 7, sameSite: 'lax' },
				BASE_SERVER_URL: 'https://risk-servidor.herokuapp.com/',
				BASER_WS_URL: 'wss://risk-servidor.herokuapp.com/',
				REFRESH_TIME: 2500,
				TIEMPO_PING: 25e3,
			}
		},
		289: function (A, e, r) {},
		314: function (A, e, r) {
			A.exports = r(1051)
		},
		34: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'ErroresCampo', function () {
					return a
				})
			r(1)
			var t = r(2),
				a = function ErroresCampo(A) {
					var e = A.error
					return Object(t.jsx)(t.Fragment, {
						children: e
							? Object(t.jsxs)('div', {
									className: 'alert alert-danger',
									children: [' ', e.message],
							  })
							: null,
					})
				}
			e.default = a
		},
		47: function (A, e, r) {
			'use strict'
			var t = r.p + 'static/media/3.88b52747.png',
				a = r.p + 'static/media/4.c0bde7f6.png',
				n = r.p + 'static/media/6.e0f3d871.png',
				c = r.p + 'static/media/9.29079d90.png'
			e.a = [
				{
					img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcCAYAAAC9/nd8AAAee0lEQVR42u3dP6hc150H8LmyVtq3wuIteF3HEORO7BYpVBhVQWCHsIUhkGJ3MUoT7NKl2Q0uXXqT6mFIisCCq7DeIFIpLlRsiqBOapwukAQibJy3snFmC+s9vTeauefcmXPPnD+fDxh5rJ9HM3fuvfO75/70fcNyuVwwbhiGC8vl8q+bfu29BgBCLtgEAICGAwDQcAAAaDgAAA0HAKDhAADQcAAAGg4AAA0HADC/i6W/wJhEyzlrQkmbwzBcWCwWi55rztZteqxGzVhNzO+pUaOm7ppBtHl80yPaXLQ5AFY4rHBY4VBjhUONGjVWOKxwWOEAwAqHFQ4rHFY41FjhUKNGjRUOKxxWOACwwmGFwwqHK3g1VjjUqFFjhcMKhxUOAPZF8BcAoOEAAOrnlgoAMDsrHDFd2ZPBl02/9l4DABoOAEDDAQC0zwwHADA7KxwxXZkZDjMcAGg4AICyXbQJYL8e3D1aLhaLxbBcLJbD0/+++rjlmtPfWywWoZu829a8fPP2YG+D/bHCAQDMzgpHhJOfGbLp195r2HkPe3JZvnJdPqy5Tm+1JssaB2CFo3CGRg2NzryHff3P8sy/r3vccs3pP2O/t2sNoOEAADQcAAC7MMMRwQyHGY6Z97CvfzHDsTDDAVY4umaGwwzHzHvYwgyHGQ7QcAAA7MgtFbpTatAWeT73089gke/mjSAysMIBAGg4AAANBwBAhOgZjmEYLiyXy79u+rXljeSvxbb112KHM/8yrPzGsKZYTYaadZ9PhzVghWPRdx6Dvxbb1l+LXT75Z7F8+u/rHqvJV3P6e4vNv9daDWg4AAA0HACAhgMAYIXgL6qROrALStifT/fRhQAx2maFAwDQcAAAGg4AgCDBXxEEf5WRvyKwayH4S40AMdpf4RD8JfhrU022xm8hIEvwlxoBYjTfcAAAaDgAAA0HANAvwV/MTmAXzH98nR4zCwFilMkKBwCg4QAANBwAAEGCvyII/totf0VglxrBXwLEQPBXZLM19mvvNcF9ZyHYSo3gLwFiaDgAADQcAICGAwAgYFgu3b0LbqSIgdkWax7cPVqeBARt+vXpjpQm1EtNnzWnv7fYLrRKTTk1AsSwwgEAaDgAAA0HAMDWBH9F6DXU6+RGbOjXkweCrdQI/lIDO69wCP7qL9TrbEDQpl+FVqkR/KVGgBhJGw4AAA0HAKDhAAD6FR381fPQaIse3j1yuxXYi2vCwbp0Mfanfo41G2efI/Q4tibm93LUaKYAIEHDEfuFOmWFI/Q4tmbKl37OGgBgYsNhhWO8RgMCAAkaDisc02sAgIkNhxWO8RoNCAAkaDiscEyvAQAmNhxWOMZrNCAAkKDhsMIxvQYAmEbwV2UEdgF8TYBYXdxSCdRopgAgQcPhlsr0GgBgYsNhhWO8RgMCAAkaDisc02sAgIkNhxWO8RoNCAAkaDiscEyvAQAmNhxWOMZrNCAAkKDhsMIxvQYAmEbwV0GEegGkJRysHG6pBGo0UwCQoOFwS2V6DQAwseGwwjFeowEBgAQNhxWO6TUAwMSGwwrHeI0GBAASNBxWOKbXAAATGw4rHOM1GhAASNBwWOGYXgMATCP4KxOhXgBlEg6Wh1sqgRrNFAAkaDjcUpleAwBMbDiscIzXaEAAIEHDYYVjeg0AMLHhsMIxXqMBAYAEDYcVjuk1AMDEhsMKx3iNBgQAEjQcVjim1wAA0wj+SkCoF7v47PPjYM3x8eNut8/BweXzFwWLxWI1pen5Kwd2JGYlHGx3bqkEaqx4AECChsMtlek1AMDEhsMKx3iNBgQAEjQcVjim1wAAExsOKxzjNRoQAEjQcFjhmF4DAExsOKxwjNdoQAAgQcNhhWN6DQAwseGwCWA7OQO7Xnn97W6388cfvpdkOwsQgz03HG6pjNdY8QCABA2HWyrTawCAiQ2HFY7xGg0IACRoOKxwTK8BACY2HFY4xms0IACQoOGwwjG9BgCY2HBY4Riv0YAAQIKGwwrH9BoAYJphuVzGFU5oOFry8O7R0m7SlhoDu2KO01/+5sfZtuF//fdRsOZ737k9+XmWy8ViWEnj+umPfpvkNccEiMUQIMYm127eHmyFzS4MwxD1T+iWysk/J83JpsexNTG/l6PGLkJ1loHHCWtiniau6MmFjU8PmuWWSqDm4d0jewl1GSK+xRPVxDxNXNHm1QLACocVDrDCYYUDsMJhhQMrHFY4ACscVjjACocVDrDCYYXDCgdWOKxwAFY4rHCAFQ7ACocVDrDCYYUDeHLo9xz89WAl1GtYc/Hl5FeXVKFerQZ2xZgr1Ctuez0b/PXnP/4lyfv6xU8eJnmemAAx4WBs0nM4WN+3VJ6cBIYzJ4N1/w2yyHgrJOftkgl3VBxz0LCub6k8WLldYoWDvcp4KyTn7ZIJd1TcUgErHFY4wAqHFQ7ACocVDqxwWOEArHBY4QArHFY4wAqHFQ4rHFjhsMIBWOGwwoEVDiscgBUOKxxghcMKBzB2ihP8peGoRc5Qr9ICu3KGcc0V6hVjXfBXTE1MONjf/8PfJXmemAAx4WBs0nXwl48fACim4ThZxdj0a42G5fl/Nv03yjJlJqCU15OsZjn+uMjniag5PSYjrv2GRNeHQ2HXmVZT+xTzQ0JbqbkwdaNs+rXKL67h/D+b/htln5iHCl5Pspoh/KVZ3PNE1MQ0I1Nq4i6iym6k6eQCao8/nDR3jVsqAMDsNBwAQDkNhxkOSmGGY/PjIp/HDEfc63Fod8kMx8j/bIaD0k7MZjgKfx4zHFs1rnRyAWWGAwAg4cVZq8FfMaFe667oWgj+ShWQVSOhXrVf7W0X/BVTIxyMWrQaDmaFAwAop+GobWg0ZiDU0CjB/T7wOGlNYYOcOWtOj9tEQ6MGS2mJodHCh0ZjBkINjTL1BN/MQGhhNTHNSOqauAutshtgOrnwMTQKABBHwwEAlNNwmOGgR2Y48tScHrdmOMZfj0OyS2Y4zHDQw4EeccI3w7F7TUwzkrom7kKr7AaYTi58zHAAAERewAn+Gq8pbZEjVahXTEBWpVcCwZrSQr04v6IwV/BXTE2N4WAvvnBox2mM4C8AgLkbDkOjNHc1HXictKbCQc7Wh0ZbHSylPYZGDY1S+0EceJy0psJBztaHRlsdLKXBiyNDowAAcTQcAEA5DYcZDlpjhqOcmtPj1gwHrNnHzHCY4aDugzjwOGmNGY6oL2gzHLD5gr/2GrdUAIDZXazxRW8T6tWKVKFey4yXZTmDtv7tP/4pWPO979xO8mcJ9WpPqlCvnFbDAJeLZ1fZnr9y4MOtyMOV77h1agwHs8IBAJTTcJQ0NJpqINTQaF5V/uTVVH+WmtGa02O7sKHRGgdCjZ71qYah0YtT3kwpP0tldZhzWIQHPLetcfDOdyKs4ievpvqz1ER9ie/7Z6lsU1NiY++81eEFnaFRAAANBwBQUsNhhoNdmeFQs6nm9Ng2w7H7+dGppktmOOb64jLDUecBEXFiNMPRZ83ZZsQMx+6NvfNWhxd0ZjgAACoN/urZwcHlYM3HH74XXm1IdNn2P//7n9nee0zQllCvTo+LK38bvM4//vz/kvxZqcLBvvvDa8GamBC/mONd8BclsMIBAJTTcBgaZXT/CDxOWmMgtLma02M72SDnkOR5Wh0spT2GRuf6cjM0Wt7OHnG6NxCqJvQFnW6QMzw62fNgKQ1e9BkaBQDQcAAAJTUcZjgY3T8Cj5PWmOForub02DbDAdt9L5rhmOnLzQxHeTt7xOneDIea0Be0GQ7Y8nvRDAcAQIHBXw/uHi2fWXXwOZ1KFeATExYU45VvvRmsiQkHKy3UK+bPEg6WxzahXutWHWoMB0vls8+PA+9cOFhtHq58V65z7ebtotberHAAAOU0HLmGRnMOhBoazavKgdBUz6NmtOb0+M84ENrzYKmRkz4ZGl09OWUcCI2pcWDOd5KrYiA01fOoifryzTkQ2vNgqZ8o2+lFn6FRAKB1Gg4AoJyGwwwHuzLDoWZTzenxb4YjC7dT+mSGY/XkZIaj3Z094qRnhqPPmrPNiBmOPM2/c1uHF31mOACA1l20CdoTE+ATU7MaFrROTIBYTDhYjO99J1yTM9Tr2SCp7aQKm2rVXKFec4aDxYR6xYSDffeH18LH1+tvJzlOBX8xNyscAEA5DYehUUpR2kBoqjFWQ6Pl/bTYdM+zyPY8sHkfMzR6/mRkaJSJXwH7HghNNcZqaLS8nxab7nliLuo0Hcx8sWZoFABonYYDACin4TDDQSnMcLRXc3r8m+GA2ZjhWD05meFg4leAGY76a842I2Y4YKaLNTMcAEDrBH+xUaogoJjQoRipAsQWi6Mkz5IqsCtVgFjO15zTPkO9tl11iAn1igkHg5ZY4QAAymk4DI0yun8EHhf5mosbnEz2c3CDNX5abLrnqfGnxdInQ6OrJydDo3XuyIv6tlt5g5PJfg5usMZPi033PDX+tFg6vTA0NAoAtE7DAQCU03CY4WB0/wg8LvI1m+Eo6L0/Of7McMBszHCsnpzMcNS5Iy/q225mOEp670+bETMcMNdFlhkOAKBxgr/YSUw4WEzNZ58fB2tiAsRee+PdYM1Pf/TbbNvnX//9H4M1OcO4UoWMzRd6tt9Qr22eZ1ulhYOtHoPr1n9ShQHSJyscAEA5DYehUXJINXy6XJlMXC73+2G2OqCaemi0vJ/y2u9gqZGT9hgaXT05GRrt+4BIdNIbVs7ew57P5q0OqKYeGi3vp7z2O1i6XDj/NXdBZ2gUAGidhgMAKKfhMMNBDmY48tSY4TDDsfs7pzZmOFZPTmY4+j4gEp30zHCEvsjMcJjh2PWdU90FnRkOAKD5C8rYpeYUKxwP7h4t1/fOm3vpYRFeVp+zRoefxx/+9ChYExPqdefOnWDNJ598Eqx56aWXkjzP97///STbJyZALKdUAWLbXVfvNxxsnysc24aD/eInD4M1McF6BweXg5+WcLC6XLt5O9vXnBUOAGB20TMcKYZGT4cwh+H8UsLq45UlhiFiaWK2GkscxVkul+dmMlYft/3ez1/hrrvizVkTt1oZv6IZd8C1ORBqsJQiPtOIuxbb1mQdGn06kLl65tq8lmholDX74ujjtt97+Auozp9wG9OMxNfUOBBqsJRCLugMjQIA9dJwAACzM8MRqrFeWBwzHJsf564xw2GGg7aY4TDDwfl9cfRx2+89/AVkhsMMR7YG2DmyxQs6MxwAQL0u2gT0JibUK9Xz3Lt3L1iTM0AsRkzI2GpAVrqrq5jArmfFhHrF2O55yqpZtw2/+8Nrwff+yutvB2tiwsFiXrFwsD5Z4QAAZmdoNFTjBmVxeh4azbudcw6fPj0VRJxJ1IxVGCxll8/L0Gh4hzY02tUBMfqYVNs5/EWW+qfFphr27LnGYCk7XtAZGgUA6qXhAABmZ4YjVGMtsDhmOHJtZzMcZjh258isixkOMxyc3xdHH5NqO4e/yMxwlFdjhoMdL+jMcAAA9RL8RXcODvKFDh0fHwdrYgLEfv7znyd5nhZCxmqMG68h2lw4GHOzwgEAzM7QaKjGzcfiGBptV40/ndVPlE3wudv1CzoGDY0Gd1ZDo10dEKOPqbmZdLskR01xn7tzbUkXdIZGAYB6aTgAgNmZ4QjVWOcrjhmOdpm9yFNT3Odu1y/oGDTDEdxZzXB0dUCMPqbmZtLsRY6a4j5359qSLujMcAAA9RL8RVNiQr0ODw+Les2pwsFi9BwylkpMWFkqf/7jX4p678LB2IUVDgBgdoZGQzVuLBYn1dBozPOkqqFdPQ97Zt3ONkGm/dnQaHBHNDTa1QEx+jjl86SqoeUGuN9hz6zb2fk41wWdoVEAoF4aDgBgdmY4QjXW8IpjhoOSmOHItJ1tgkz7sxmO4I5ohqOrA2L0ccrnMcNBuHE1w5FlOzsf57qgM8MBAFR8sbhcLuMKE6xwPLh7tFzfq27uXYfF5rstOWp01Hn84U+PgjWvvfFusOb+/fvdbsNHj8LbMCZkrDQ3btwI1rz6g28Ga758/FWw5lc/+8TBWIiYcLAXXzi0oXZ07ebtbF9zVjgAgHIajlRDo8NysRgWw9N/X/f4zD/n/r891FCe1VW5dat0PdcAbGsYhgtz1RgaDdS4pVLkATH6uPcagB0u6AyNAgD10nAAAOU0HGY4KIUZjvEagG2Z4TDDwfl9cfRx7zUAO1zQmeEAAOp10SaANhweHiapSSVnENmly88lqYlx7969YM2tW7dWr/aeWY26c+dOkuf56IN3mtyfDw4un3/vCyvOtbPCAQCU03AYGqUUhkbrqiHdrE3PMztWN7Ltq4ZGQzuiodF+T96GRsuuYf2tkH0+T5Xb0Pk4175qaBQAqJeGAwAop+Eww0EpzEzUVYMZjiTv3W6Ua181wxHaEc1w9HvyNjNRdg1mOJJsQ+fjXPuqGQ4AoF6Cv2CNmNCqGKUFbaVSWsjY559+Eaz5m0TBXzV68YVDBzV7Z4UDACin4TA0SilqHHhsdUjTYGnkuc/QKPXsq4ZGR1/bwtBozyfvGgYeWx3SNFga35gZGqWSfdXQKABQLw0HAFBOw2GGg1KY4cjzmnO+r9aZ4aCifdUMx+hrW5jh6PnkbYaj/s+ihybZDAeV7KtmOACAegn+ojs5A7Jy/lmlbcNtwsHmvIK/FBH89c9vvhysuXHjRrDm6tWrDjRYYYUDANBwAAAaDgCAoOgZjiR/LXbNv61/POV389ewHyd/nXIYhnN/tfLs45gayvm8njn+GvmcVt/Dtu8r1fNAVQ1Hkr8We+7fVv5a7GLkr8VGNAlz1WhAynF2mHDTX7WMqaGcz2vdF2wLn9Pqe9j2faV6HiiBWyoAgIYDANBwAAAECf6CPYsJyGo1QCzG7373u3OP180xfOMb3wg+z6s/+Gaw5svHX9khYSZWOAAADQcAoOEAAAgS/LVFDfvRavBXq2FlcwV/1bBdBH/BDg2H4C/2rdXgr1bDyuYK/qoh/ErwFzzLLRUAQMMBAGg4AACCBH/RnVRBWzHPE+Ott94K1rz//vtJ/qyc7yuVVKFnly4/F6xJFfx1584dBxqssMIBAGg4AAANBwBAkOCvLWrYj9TBX7sGbfmz0r8ewVbrPwvbh64aDsFf7NscwV+7BG35s9K/HsFW49vN9qFmbqkAABoOAEDDAQAQlDX46+Wbt4M3Hx/cPTIRxdZSBVuVFn6VSqr3lSqMC5jPtYjv3JyscAAAGg4AQMMBABCUNfgrxhD53/ZZw35MCaRK9Tz7CL9q5TWTbp/3GdBVw5Ei+CvqAFvTAAj+4uRku+7f1z1O+Ty5w69aec2k3edPGhCfAbVySwUA0HAAABoOAICgizYBLYkJtkoVDhbjrbfeCta8++67RW3DnNsnZ4DYF4+/CtZcuXrJQQQzscIBAGg4AAANBwBAkOCvLWrYj5jwq1LDwXK89ymvp7Xt0/o+b9vRVcMh+It9iwm/KjkcbO73PvX1tLR9etjnTxoQ245auaUCAGg4AAANBwBAkOAvupMqtCrG+++/H6xJFQ6W6n3l3D6rf9a6GYVU4WBfRgR/Xbr8XLb3fuvWreB7/+iDd4LPc3Bw+fzzLMyeUSYrHACAhgMA0HAAAAQJ/tqihv1IHfxVWk2O7VP6e+8p2CpVqNc22UVQdMMh+It9myP4q7SaubdP6e+9p2CrVKFew5pzqPMWJXJLBQDQcAAAGg4AgCDBXxRhNbxonZgQpOvXrwdr7t+/X9R7jwkHI48vIsLBvv0vLwVrbty4Eay5evVqktf8/JUDHxxVsMIBAGg4AAANBwBAkOCvLWpIb3lm+y9XPo8pIUath4O1WhPze83t84mCv6C5hkPwF3MaRrb5lM+gh3CwVmtOvoQFf0Gb3FIBADQcAICGAwAgqLjgr5dv3g7exHxw98hkVWNiwouOjx/bUB06PDw893jOWYdLl58L1nwZEQ4Gc7sW8V1ZGiscAICGAwDQcAAABBUX/BVj3+FglEvwV/vBX60EZAn+QsOx+SDPEvwVdaCuaRIEf3Fy0l7372cfC/4qs+bkSzg0ENpKQJbgL3rjlgoAoOEAADQcAABBF20CoGSPHj0K1ty7dy9Yc+PGjWDNqz/4ZrDmytVLSd7XRx+8E6w5OLh87vFyYa6MelnhAAA0HACAhgMAIEjw1xY1lEvwV/vBX13tz2vOT7YOzTccgr+ogeCvemtOmkHhV5vPP4ZGqZlbKgCAhgMA0HAAAARVGfz18s3bwduYD+4ema1qzGoI0joxYUrXr18P1ty/f98GL8Tx8XG2P+vS5eeCNV88/sqHwqyuRXzH1cgKBwCg4QAANBwAAEFVBn/FmDMcjP1YnvmMliuf2ZSBHeFggr9q2+e33dehyoajpOCvuQ5UwV9lG0Y+lymfk3CwMmtOGj3BX5v3a8Ff1MwtFQBAwwEAaDgAAIIu2gTU4vkrB8Ga4+PHNlRFfv/73xf1ej7/9Itgza9+9kmwJmbwNWZW5eMP35v8HtbNecQcOzA3KxwAgIYDANBwAAAECf7aooa6Cf4qN/iLLfbnNecwW5eqGw7BX7RC8FeZNaS5uBIORqncUgEANBwAgIYDACBoiB3eqm2GI8aDu0fn3rwZjvr94U+PgjWvvfFusOb+/fs25ohHj8Lb+fj4ONvruXXr1rnH634I3Keffprkz4o5Z/7yNz8+//9EnEvW1bz6rTeDf1ZMONiLLxzaaQtx7ebtbr9WrHAAABoOAEDDAQAQ1GzwV4xtw8Gom+Cv9gK7Qq89++tZc17ZJgcIumw4WhwajTkpaEDaI/grbU1pn+lJA7LP17pNGJfALlrnlgoAoOEAADQcAABBF20CWnJwcDlY89EH7wRrrl+/Hqz59a9/neQ1Hx4eZts+NQZ2rVpXE/OZvvL628GauUK9ACscAICGAwDQcAAARBD8FfHfqMfyzOe4XPlcp4QqTQn+2vk17yFkrJjPa4vArlZDvQR/oeF4epAL/qKqJnLY4bOcGvy102veU8hYEZ/XFoFdrYZ6GT6ldW6pAAAaDgBAwwEAEDTEDl+1OMMR4+HdI3Ncjfns83Cw1fHx42DNa2+8m+T1xASI7TOMa04xgV0xVgPf1s1DxHymOcPBXv3Wm8Hn+fjD95K89+evHDjwM7h287YxnBFWOAAADQcAoOEAAAjqOviLPu0jHKzGMK6agsi2CePKsY/leD2lvXfYueHodWiU9uwrHKzGMK5agsi2CePKtY/N/XpKe++wiVsqAICGAwDQcAAABAn+SkA4WHtShYPFSBUglkqqMK4YOUOrVj/TOcPBYgj1qotQr91Z4QAANBwAgIYDACBI8Bes29+f/LprOFjksfX1c2cM2ioliExAVnuvGXZuOAyN0pNU4WCRx9baf1/3OHdNzu188gUrIKvu1wybuKUCAGg4AAANBwBAkOCvBAR/sUnOALFUVsOm1mk1bCpVONg221moV9kEf+3OCgcAoOEAADQcAABBgr9gRjkDxHp+zanfe473LNSL3kSvcAzDcGHsV2DNcbN4Ogg4bHjsNZf33oczDcCwZjvU9mdBVQ0HAICGAwDQcAAA/RL8lYlwMIAyCfXKwwoHAKDhAAA0HAAA6RoOwV8AwOwNh+AvAGD2hgMAQMMBAGg4AIB+Cf4qiHAwgLSEepXDCgcAoOEAADQcAADpGg7BXwDA7A2H4C8AYPaGAwBAwwEAaDgAgH4J/qqMcDCArwn1qosVDgBAwwEAaDgAANI1HIK/AIDZGw7BXwDA7A0HAICGAwDQcAAA/RL81SkBYsC+COzqkxUOAEDDAQBoOAAA0jUcgr8AgNkbDsFfAMDsDQcAgIYDANBwAAD9EvzFRsLBgKmEerGJFQ4AQMMBAGg4AADSNRyCvwCA2RsOwV8AwOwNBwCAhgMA0HAAAP0S/MXsBIhB+QR2MTcrHACAhgMA0HAAAKRrOAR/MWY1j0U+CwBbNRyCv4hpSDc9BkDDAQCg4QAANBwAAKMEf1ENAWLwLIFd1MIKBwCg4QAANBwAAOkaDsFfjIkJ/kpVA0DDDYfgL2Ia0k2PU9YA0HDDAQCg4QAANBwAQL8Ef9EdAWKUQGAXvbHCAQBoOAAADQcAQLqGQ/AXY3IGfwkQA2i44RD8RUxDuulxiTUAFNhwAABoOAAADQcA0C/BX7BngsjyELQF+2WFAwDQcAAAGg4AgHQNh+AvxtQY/CWIDKDAhkPwFzEN6abHagSRARoOAAANBwCg4QAAGCX4CwCYnRUOAEDDAQBoOAAA0jUcgr8YI9RLzS41QAffE4ZGAYBiVjgAADQcAICGAwDQcAAAaDgAAA0HAICGAwCooOEQ/MUYwVZqdqkBOvieEPwFABSzwgEAoOEAADQcAICGAwBAwwEAaDgAADQcAEAFDYfgL8YItlKzSw3QwfeE4C8AoJgVDgAADQcAoOEAAPr1/5y0n00sudHwAAAAAElFTkSuQmCC',
					title: 'icono',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'icono',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'icono',
				},
				{ img: t, title: 'icono' },
				{ img: a, title: 'icono' },
				{
					img: 'data:image/png;base64,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',
					title: 'icono',
				},
				{ img: n, title: 'icono' },
				{
					img: 'data:image/png;base64,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',
					title: 'icono',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'icono',
				},
				{ img: c, title: 'icono' },
				{
					img: 'data:image/png;base64,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',
					title: 'icono',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'icono',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'icono',
				},
			]
		},
		495: function (A, e, r) {
			var t = {
				'./Binary_Property/ASCII.js': 496,
				'./Binary_Property/ASCII_Hex_Digit.js': 497,
				'./Binary_Property/Alphabetic.js': 498,
				'./Binary_Property/Any.js': 499,
				'./Binary_Property/Assigned.js': 500,
				'./Binary_Property/Bidi_Control.js': 501,
				'./Binary_Property/Bidi_Mirrored.js': 502,
				'./Binary_Property/Case_Ignorable.js': 503,
				'./Binary_Property/Cased.js': 504,
				'./Binary_Property/Changes_When_Casefolded.js': 505,
				'./Binary_Property/Changes_When_Casemapped.js': 506,
				'./Binary_Property/Changes_When_Lowercased.js': 507,
				'./Binary_Property/Changes_When_NFKC_Casefolded.js': 508,
				'./Binary_Property/Changes_When_Titlecased.js': 509,
				'./Binary_Property/Changes_When_Uppercased.js': 510,
				'./Binary_Property/Dash.js': 511,
				'./Binary_Property/Default_Ignorable_Code_Point.js': 512,
				'./Binary_Property/Deprecated.js': 513,
				'./Binary_Property/Diacritic.js': 514,
				'./Binary_Property/Emoji.js': 515,
				'./Binary_Property/Emoji_Component.js': 516,
				'./Binary_Property/Emoji_Modifier.js': 517,
				'./Binary_Property/Emoji_Modifier_Base.js': 518,
				'./Binary_Property/Emoji_Presentation.js': 519,
				'./Binary_Property/Extended_Pictographic.js': 520,
				'./Binary_Property/Extender.js': 521,
				'./Binary_Property/Grapheme_Base.js': 522,
				'./Binary_Property/Grapheme_Extend.js': 523,
				'./Binary_Property/Hex_Digit.js': 524,
				'./Binary_Property/IDS_Binary_Operator.js': 525,
				'./Binary_Property/IDS_Trinary_Operator.js': 526,
				'./Binary_Property/ID_Continue.js': 527,
				'./Binary_Property/ID_Start.js': 528,
				'./Binary_Property/Ideographic.js': 529,
				'./Binary_Property/Join_Control.js': 530,
				'./Binary_Property/Logical_Order_Exception.js': 531,
				'./Binary_Property/Lowercase.js': 532,
				'./Binary_Property/Math.js': 533,
				'./Binary_Property/Noncharacter_Code_Point.js': 534,
				'./Binary_Property/Pattern_Syntax.js': 535,
				'./Binary_Property/Pattern_White_Space.js': 536,
				'./Binary_Property/Quotation_Mark.js': 537,
				'./Binary_Property/Radical.js': 538,
				'./Binary_Property/Regional_Indicator.js': 539,
				'./Binary_Property/Sentence_Terminal.js': 540,
				'./Binary_Property/Soft_Dotted.js': 541,
				'./Binary_Property/Terminal_Punctuation.js': 542,
				'./Binary_Property/Unified_Ideograph.js': 543,
				'./Binary_Property/Uppercase.js': 544,
				'./Binary_Property/Variation_Selector.js': 545,
				'./Binary_Property/White_Space.js': 546,
				'./Binary_Property/XID_Continue.js': 547,
				'./Binary_Property/XID_Start.js': 548,
				'./General_Category/Cased_Letter.js': 549,
				'./General_Category/Close_Punctuation.js': 550,
				'./General_Category/Connector_Punctuation.js': 551,
				'./General_Category/Control.js': 552,
				'./General_Category/Currency_Symbol.js': 553,
				'./General_Category/Dash_Punctuation.js': 554,
				'./General_Category/Decimal_Number.js': 555,
				'./General_Category/Enclosing_Mark.js': 556,
				'./General_Category/Final_Punctuation.js': 557,
				'./General_Category/Format.js': 558,
				'./General_Category/Initial_Punctuation.js': 559,
				'./General_Category/Letter.js': 560,
				'./General_Category/Letter_Number.js': 561,
				'./General_Category/Line_Separator.js': 562,
				'./General_Category/Lowercase_Letter.js': 563,
				'./General_Category/Mark.js': 564,
				'./General_Category/Math_Symbol.js': 565,
				'./General_Category/Modifier_Letter.js': 566,
				'./General_Category/Modifier_Symbol.js': 567,
				'./General_Category/Nonspacing_Mark.js': 568,
				'./General_Category/Number.js': 569,
				'./General_Category/Open_Punctuation.js': 570,
				'./General_Category/Other.js': 571,
				'./General_Category/Other_Letter.js': 572,
				'./General_Category/Other_Number.js': 573,
				'./General_Category/Other_Punctuation.js': 574,
				'./General_Category/Other_Symbol.js': 575,
				'./General_Category/Paragraph_Separator.js': 576,
				'./General_Category/Private_Use.js': 577,
				'./General_Category/Punctuation.js': 578,
				'./General_Category/Separator.js': 579,
				'./General_Category/Space_Separator.js': 580,
				'./General_Category/Spacing_Mark.js': 581,
				'./General_Category/Surrogate.js': 582,
				'./General_Category/Symbol.js': 583,
				'./General_Category/Titlecase_Letter.js': 584,
				'./General_Category/Unassigned.js': 585,
				'./General_Category/Uppercase_Letter.js': 586,
				'./Script/Adlam.js': 587,
				'./Script/Ahom.js': 588,
				'./Script/Anatolian_Hieroglyphs.js': 589,
				'./Script/Arabic.js': 590,
				'./Script/Armenian.js': 591,
				'./Script/Avestan.js': 592,
				'./Script/Balinese.js': 593,
				'./Script/Bamum.js': 594,
				'./Script/Bassa_Vah.js': 595,
				'./Script/Batak.js': 596,
				'./Script/Bengali.js': 597,
				'./Script/Bhaiksuki.js': 598,
				'./Script/Bopomofo.js': 599,
				'./Script/Brahmi.js': 600,
				'./Script/Braille.js': 601,
				'./Script/Buginese.js': 602,
				'./Script/Buhid.js': 603,
				'./Script/Canadian_Aboriginal.js': 604,
				'./Script/Carian.js': 605,
				'./Script/Caucasian_Albanian.js': 606,
				'./Script/Chakma.js': 607,
				'./Script/Cham.js': 608,
				'./Script/Cherokee.js': 609,
				'./Script/Chorasmian.js': 610,
				'./Script/Common.js': 611,
				'./Script/Coptic.js': 612,
				'./Script/Cuneiform.js': 613,
				'./Script/Cypriot.js': 614,
				'./Script/Cyrillic.js': 615,
				'./Script/Deseret.js': 616,
				'./Script/Devanagari.js': 617,
				'./Script/Dives_Akuru.js': 618,
				'./Script/Dogra.js': 619,
				'./Script/Duployan.js': 620,
				'./Script/Egyptian_Hieroglyphs.js': 621,
				'./Script/Elbasan.js': 622,
				'./Script/Elymaic.js': 623,
				'./Script/Ethiopic.js': 624,
				'./Script/Georgian.js': 625,
				'./Script/Glagolitic.js': 626,
				'./Script/Gothic.js': 627,
				'./Script/Grantha.js': 628,
				'./Script/Greek.js': 629,
				'./Script/Gujarati.js': 630,
				'./Script/Gunjala_Gondi.js': 631,
				'./Script/Gurmukhi.js': 632,
				'./Script/Han.js': 633,
				'./Script/Hangul.js': 634,
				'./Script/Hanifi_Rohingya.js': 635,
				'./Script/Hanunoo.js': 636,
				'./Script/Hatran.js': 637,
				'./Script/Hebrew.js': 638,
				'./Script/Hiragana.js': 639,
				'./Script/Imperial_Aramaic.js': 640,
				'./Script/Inherited.js': 641,
				'./Script/Inscriptional_Pahlavi.js': 642,
				'./Script/Inscriptional_Parthian.js': 643,
				'./Script/Javanese.js': 644,
				'./Script/Kaithi.js': 645,
				'./Script/Kannada.js': 646,
				'./Script/Katakana.js': 647,
				'./Script/Kayah_Li.js': 648,
				'./Script/Kharoshthi.js': 649,
				'./Script/Khitan_Small_Script.js': 650,
				'./Script/Khmer.js': 651,
				'./Script/Khojki.js': 652,
				'./Script/Khudawadi.js': 653,
				'./Script/Lao.js': 654,
				'./Script/Latin.js': 655,
				'./Script/Lepcha.js': 656,
				'./Script/Limbu.js': 657,
				'./Script/Linear_A.js': 658,
				'./Script/Linear_B.js': 659,
				'./Script/Lisu.js': 660,
				'./Script/Lycian.js': 661,
				'./Script/Lydian.js': 662,
				'./Script/Mahajani.js': 663,
				'./Script/Makasar.js': 664,
				'./Script/Malayalam.js': 665,
				'./Script/Mandaic.js': 666,
				'./Script/Manichaean.js': 667,
				'./Script/Marchen.js': 668,
				'./Script/Masaram_Gondi.js': 669,
				'./Script/Medefaidrin.js': 670,
				'./Script/Meetei_Mayek.js': 671,
				'./Script/Mende_Kikakui.js': 672,
				'./Script/Meroitic_Cursive.js': 673,
				'./Script/Meroitic_Hieroglyphs.js': 674,
				'./Script/Miao.js': 675,
				'./Script/Modi.js': 676,
				'./Script/Mongolian.js': 677,
				'./Script/Mro.js': 678,
				'./Script/Multani.js': 679,
				'./Script/Myanmar.js': 680,
				'./Script/Nabataean.js': 681,
				'./Script/Nandinagari.js': 682,
				'./Script/New_Tai_Lue.js': 683,
				'./Script/Newa.js': 684,
				'./Script/Nko.js': 685,
				'./Script/Nushu.js': 686,
				'./Script/Nyiakeng_Puachue_Hmong.js': 687,
				'./Script/Ogham.js': 688,
				'./Script/Ol_Chiki.js': 689,
				'./Script/Old_Hungarian.js': 690,
				'./Script/Old_Italic.js': 691,
				'./Script/Old_North_Arabian.js': 692,
				'./Script/Old_Permic.js': 693,
				'./Script/Old_Persian.js': 694,
				'./Script/Old_Sogdian.js': 695,
				'./Script/Old_South_Arabian.js': 696,
				'./Script/Old_Turkic.js': 697,
				'./Script/Oriya.js': 698,
				'./Script/Osage.js': 699,
				'./Script/Osmanya.js': 700,
				'./Script/Pahawh_Hmong.js': 701,
				'./Script/Palmyrene.js': 702,
				'./Script/Pau_Cin_Hau.js': 703,
				'./Script/Phags_Pa.js': 704,
				'./Script/Phoenician.js': 705,
				'./Script/Psalter_Pahlavi.js': 706,
				'./Script/Rejang.js': 707,
				'./Script/Runic.js': 708,
				'./Script/Samaritan.js': 709,
				'./Script/Saurashtra.js': 710,
				'./Script/Sharada.js': 711,
				'./Script/Shavian.js': 712,
				'./Script/Siddham.js': 713,
				'./Script/SignWriting.js': 714,
				'./Script/Sinhala.js': 715,
				'./Script/Sogdian.js': 716,
				'./Script/Sora_Sompeng.js': 717,
				'./Script/Soyombo.js': 718,
				'./Script/Sundanese.js': 719,
				'./Script/Syloti_Nagri.js': 720,
				'./Script/Syriac.js': 721,
				'./Script/Tagalog.js': 722,
				'./Script/Tagbanwa.js': 723,
				'./Script/Tai_Le.js': 724,
				'./Script/Tai_Tham.js': 725,
				'./Script/Tai_Viet.js': 726,
				'./Script/Takri.js': 727,
				'./Script/Tamil.js': 728,
				'./Script/Tangut.js': 729,
				'./Script/Telugu.js': 730,
				'./Script/Thaana.js': 731,
				'./Script/Thai.js': 732,
				'./Script/Tibetan.js': 733,
				'./Script/Tifinagh.js': 734,
				'./Script/Tirhuta.js': 735,
				'./Script/Ugaritic.js': 736,
				'./Script/Vai.js': 737,
				'./Script/Wancho.js': 738,
				'./Script/Warang_Citi.js': 739,
				'./Script/Yezidi.js': 740,
				'./Script/Yi.js': 741,
				'./Script/Zanabazar_Square.js': 742,
				'./Script_Extensions/Adlam.js': 743,
				'./Script_Extensions/Ahom.js': 744,
				'./Script_Extensions/Anatolian_Hieroglyphs.js': 745,
				'./Script_Extensions/Arabic.js': 746,
				'./Script_Extensions/Armenian.js': 747,
				'./Script_Extensions/Avestan.js': 748,
				'./Script_Extensions/Balinese.js': 749,
				'./Script_Extensions/Bamum.js': 750,
				'./Script_Extensions/Bassa_Vah.js': 751,
				'./Script_Extensions/Batak.js': 752,
				'./Script_Extensions/Bengali.js': 753,
				'./Script_Extensions/Bhaiksuki.js': 754,
				'./Script_Extensions/Bopomofo.js': 755,
				'./Script_Extensions/Brahmi.js': 756,
				'./Script_Extensions/Braille.js': 757,
				'./Script_Extensions/Buginese.js': 758,
				'./Script_Extensions/Buhid.js': 759,
				'./Script_Extensions/Canadian_Aboriginal.js': 760,
				'./Script_Extensions/Carian.js': 761,
				'./Script_Extensions/Caucasian_Albanian.js': 762,
				'./Script_Extensions/Chakma.js': 763,
				'./Script_Extensions/Cham.js': 764,
				'./Script_Extensions/Cherokee.js': 765,
				'./Script_Extensions/Chorasmian.js': 766,
				'./Script_Extensions/Common.js': 767,
				'./Script_Extensions/Coptic.js': 768,
				'./Script_Extensions/Cuneiform.js': 769,
				'./Script_Extensions/Cypriot.js': 770,
				'./Script_Extensions/Cyrillic.js': 771,
				'./Script_Extensions/Deseret.js': 772,
				'./Script_Extensions/Devanagari.js': 773,
				'./Script_Extensions/Dives_Akuru.js': 774,
				'./Script_Extensions/Dogra.js': 775,
				'./Script_Extensions/Duployan.js': 776,
				'./Script_Extensions/Egyptian_Hieroglyphs.js': 777,
				'./Script_Extensions/Elbasan.js': 778,
				'./Script_Extensions/Elymaic.js': 779,
				'./Script_Extensions/Ethiopic.js': 780,
				'./Script_Extensions/Georgian.js': 781,
				'./Script_Extensions/Glagolitic.js': 782,
				'./Script_Extensions/Gothic.js': 783,
				'./Script_Extensions/Grantha.js': 784,
				'./Script_Extensions/Greek.js': 785,
				'./Script_Extensions/Gujarati.js': 786,
				'./Script_Extensions/Gunjala_Gondi.js': 787,
				'./Script_Extensions/Gurmukhi.js': 788,
				'./Script_Extensions/Han.js': 789,
				'./Script_Extensions/Hangul.js': 790,
				'./Script_Extensions/Hanifi_Rohingya.js': 791,
				'./Script_Extensions/Hanunoo.js': 792,
				'./Script_Extensions/Hatran.js': 793,
				'./Script_Extensions/Hebrew.js': 794,
				'./Script_Extensions/Hiragana.js': 795,
				'./Script_Extensions/Imperial_Aramaic.js': 796,
				'./Script_Extensions/Inherited.js': 797,
				'./Script_Extensions/Inscriptional_Pahlavi.js': 798,
				'./Script_Extensions/Inscriptional_Parthian.js': 799,
				'./Script_Extensions/Javanese.js': 800,
				'./Script_Extensions/Kaithi.js': 801,
				'./Script_Extensions/Kannada.js': 802,
				'./Script_Extensions/Katakana.js': 803,
				'./Script_Extensions/Kayah_Li.js': 804,
				'./Script_Extensions/Kharoshthi.js': 805,
				'./Script_Extensions/Khitan_Small_Script.js': 806,
				'./Script_Extensions/Khmer.js': 807,
				'./Script_Extensions/Khojki.js': 808,
				'./Script_Extensions/Khudawadi.js': 809,
				'./Script_Extensions/Lao.js': 810,
				'./Script_Extensions/Latin.js': 811,
				'./Script_Extensions/Lepcha.js': 812,
				'./Script_Extensions/Limbu.js': 813,
				'./Script_Extensions/Linear_A.js': 814,
				'./Script_Extensions/Linear_B.js': 815,
				'./Script_Extensions/Lisu.js': 816,
				'./Script_Extensions/Lycian.js': 817,
				'./Script_Extensions/Lydian.js': 818,
				'./Script_Extensions/Mahajani.js': 819,
				'./Script_Extensions/Makasar.js': 820,
				'./Script_Extensions/Malayalam.js': 821,
				'./Script_Extensions/Mandaic.js': 822,
				'./Script_Extensions/Manichaean.js': 823,
				'./Script_Extensions/Marchen.js': 824,
				'./Script_Extensions/Masaram_Gondi.js': 825,
				'./Script_Extensions/Medefaidrin.js': 826,
				'./Script_Extensions/Meetei_Mayek.js': 827,
				'./Script_Extensions/Mende_Kikakui.js': 828,
				'./Script_Extensions/Meroitic_Cursive.js': 829,
				'./Script_Extensions/Meroitic_Hieroglyphs.js': 830,
				'./Script_Extensions/Miao.js': 831,
				'./Script_Extensions/Modi.js': 832,
				'./Script_Extensions/Mongolian.js': 833,
				'./Script_Extensions/Mro.js': 834,
				'./Script_Extensions/Multani.js': 835,
				'./Script_Extensions/Myanmar.js': 836,
				'./Script_Extensions/Nabataean.js': 837,
				'./Script_Extensions/Nandinagari.js': 838,
				'./Script_Extensions/New_Tai_Lue.js': 839,
				'./Script_Extensions/Newa.js': 840,
				'./Script_Extensions/Nko.js': 841,
				'./Script_Extensions/Nushu.js': 842,
				'./Script_Extensions/Nyiakeng_Puachue_Hmong.js': 843,
				'./Script_Extensions/Ogham.js': 844,
				'./Script_Extensions/Ol_Chiki.js': 845,
				'./Script_Extensions/Old_Hungarian.js': 846,
				'./Script_Extensions/Old_Italic.js': 847,
				'./Script_Extensions/Old_North_Arabian.js': 848,
				'./Script_Extensions/Old_Permic.js': 849,
				'./Script_Extensions/Old_Persian.js': 850,
				'./Script_Extensions/Old_Sogdian.js': 851,
				'./Script_Extensions/Old_South_Arabian.js': 852,
				'./Script_Extensions/Old_Turkic.js': 853,
				'./Script_Extensions/Oriya.js': 854,
				'./Script_Extensions/Osage.js': 855,
				'./Script_Extensions/Osmanya.js': 856,
				'./Script_Extensions/Pahawh_Hmong.js': 857,
				'./Script_Extensions/Palmyrene.js': 858,
				'./Script_Extensions/Pau_Cin_Hau.js': 859,
				'./Script_Extensions/Phags_Pa.js': 860,
				'./Script_Extensions/Phoenician.js': 861,
				'./Script_Extensions/Psalter_Pahlavi.js': 862,
				'./Script_Extensions/Rejang.js': 863,
				'./Script_Extensions/Runic.js': 864,
				'./Script_Extensions/Samaritan.js': 865,
				'./Script_Extensions/Saurashtra.js': 866,
				'./Script_Extensions/Sharada.js': 867,
				'./Script_Extensions/Shavian.js': 868,
				'./Script_Extensions/Siddham.js': 869,
				'./Script_Extensions/SignWriting.js': 870,
				'./Script_Extensions/Sinhala.js': 871,
				'./Script_Extensions/Sogdian.js': 872,
				'./Script_Extensions/Sora_Sompeng.js': 873,
				'./Script_Extensions/Soyombo.js': 874,
				'./Script_Extensions/Sundanese.js': 875,
				'./Script_Extensions/Syloti_Nagri.js': 876,
				'./Script_Extensions/Syriac.js': 877,
				'./Script_Extensions/Tagalog.js': 878,
				'./Script_Extensions/Tagbanwa.js': 879,
				'./Script_Extensions/Tai_Le.js': 880,
				'./Script_Extensions/Tai_Tham.js': 881,
				'./Script_Extensions/Tai_Viet.js': 882,
				'./Script_Extensions/Takri.js': 883,
				'./Script_Extensions/Tamil.js': 884,
				'./Script_Extensions/Tangut.js': 885,
				'./Script_Extensions/Telugu.js': 886,
				'./Script_Extensions/Thaana.js': 887,
				'./Script_Extensions/Thai.js': 888,
				'./Script_Extensions/Tibetan.js': 889,
				'./Script_Extensions/Tifinagh.js': 890,
				'./Script_Extensions/Tirhuta.js': 891,
				'./Script_Extensions/Ugaritic.js': 892,
				'./Script_Extensions/Vai.js': 893,
				'./Script_Extensions/Wancho.js': 894,
				'./Script_Extensions/Warang_Citi.js': 895,
				'./Script_Extensions/Yezidi.js': 896,
				'./Script_Extensions/Yi.js': 897,
				'./Script_Extensions/Zanabazar_Square.js': 898,
				'./index.js': 899,
				'./unicode-version.js': 900,
			}
			function webpackContext(A) {
				var e = webpackContextResolve(A)
				return r(e)
			}
			function webpackContextResolve(A) {
				if (!r.o(t, A)) {
					var e = new Error("Cannot find module '" + A + "'")
					throw ((e.code = 'MODULE_NOT_FOUND'), e)
				}
				return t[A]
			}
			;(webpackContext.keys = function webpackContextKeys() {
				return Object.keys(t)
			}),
				(webpackContext.resolve = webpackContextResolve),
				(A.exports = webpackContext),
				(webpackContext.id = 495)
		},
		52: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'EntradaClave', function () {
					return n
				})
			r(1)
			var t = r(34),
				a = r(2),
				n = function EntradaClave(A) {
					var e = A.titulo,
						r = A.register,
						n = A.errors
					return Object(a.jsxs)(a.Fragment, {
						children: [
							Object(a.jsxs)('label', {
								htmlFor: 'clave',
								className: 'black-text',
								children: [' ', e],
							}),
							Object(a.jsx)('input', {
								type: 'password',
								name: 'clave',
								id: 'clave',
								className: 'form-control',
								placeholder: 'Contraseña',
								ref: r({ required: 'Este campo no se puede dejar vacío.' }),
							}),
							Object(a.jsx)(t.default, { error: n.clave }),
						],
					})
				}
		},
		59: function (A, e, r) {
			'use strict'
			e.a =
				'data:image/png;base64,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'
		},
		68: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'socketAbierto', function () {
					return n
				}),
				r.d(e, 'crearSala', function () {
					return c
				}),
				r.d(e, 'aceptarSala', function () {
					return o
				}),
				r.d(e, 'ping', function () {
					return s
				})
			var t = r(10),
				a = r(15),
				n = function socketAbierto(A) {
					return void 0 !== A && A.readyState === WebSocket.OPEN
				},
				c = function crearSala(A, e, r) {
					;(r = Object(t.a)(
						Object(t.a)({}, r),
						Object(a.obtenerCredenciales)(A)
					)),
						console.log(r, 'Envío crear sala'),
						e.send(JSON.stringify(r))
				},
				o = function aceptarSala(A, e, r) {
					var n = Object(t.a)(
						Object(t.a)({}, Object(a.obtenerCredenciales)(A)),
						{},
						{ idSala: r }
					)
					e.send(JSON.stringify(n))
				},
				s = function ping(A) {
					A &&
						A.readyState !== WebSocket.CLOSED &&
						A.send(JSON.stringify({ tipo: 'Ping' }))
				}
		},
		72: function (A, e, r) {
			'use strict'
			e.a = [
				{
					img: 'data:image/png;base64,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',
					title: 'aspecto',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'aspecto',
				},
				{
					img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcCAYAAAC9/nd8AAATwklEQVR42u3dsYsdxx0H8NlDlQt3BwoY24WEIMaCNC7SXulAcP4Dk+vsWkUCLtxEKI2LQBqLNOlcCBfnzqVNUCNjcwKBi8MYbHOpzp2L2zQ5Id3T2xnfzOyb3fl8QJye/eW9vb09ve/Njn4axnEMTBuGYW8cx/NtH3vPAEDMnlMAACgcAIDCAQCgcAAACgcAoHAAACgcAIDCAQCgcAAA9V1r/QBTJlrWzMQmbQ7DsBdCCD1nns1teywjM5VJ+X8yMjLLzgxGm6eXHqPNjTYHwAqHFQ4rHDJWOGRkZKxwWOGwwgGAFQ4rHFY4rHDIWOGQkZGxwmGFwwoHAFY4rHBY4fATvIwVDhkZGSscVjiscACwKwZ/AQAKBwCwfG6pAADVWeFIaWX/3/iy7WPvGQBQOAAAhQMAWD97OACA6qxwpLQyezjs4QBA4QAAFA4AQOEAAKjLplEAoDorHCmtzKZRm0YBUDgAAIUDAOicPRwAQHVWOFJamT0c9nAAoHAAAAoHAKBwAAAoHACAwgEAMC35r8UOw7A3juP5to9OJQCwTfIKx0Wp2PZx1a3MX4v112IBmKdwAAAoHACAwgEAKBwAAAoHAKBwAAAoHADA7hj8BQBUZ/BXYtma+th7BgCKFQ4AAIUDAFA4AACFAwBA4QAAFA4AAIUDANgdg78AgOoM/kosW1Mfe88AQLHCAQCgcAAACgcAoHAAACgcAIDCAQCgcAAAu2PwFwBQncFfiWVr6mPvGQAoVjgAABQOAEDhAAD6ZdMoAFC/cITEVY6psvHsBsLY49RMyv+bI6NMAUCBwmGFAwCoXjiCFY4QO1aXCQBkFg4rHABA9cIRrHCE2LG6TAAgs3BY4QAAqheOYIUjxI7VZQIAmYXDCgcAUJtJowBAdW6pRDJWbwCgQOFwSwUAqF44ghWOEDtWlwkAZBYOKxwAQPXCEaxwhNixukwAILNwWOEAAKoXjmCFI8SO1WUCAJmFwwoHAFCbwV8AQHVuqUQyVm8AoEDhcEsFAKheOIIVjhA7VpcJAGQWDiscAED1whGscITYsbpMACCzcFjhAACqF45ghSPEjtVlAgCZhcMKBwBQm8FfAEB1bqlEMlZvAKBA4XBLBQCoXjiCFY4QO1aXCQBkFg4rHABA9cIRrHCE2LG6TAAgs3BY4QAAqheOYIUjxI7VZQIAmYXDCgcAUJvBXwBAdW6pRDJWbwCgQOFwSwUAqF44ghWOEDtWlwkAZBYOKxwAQPXCEaxwhNixukwAILNwWOEAAKoXjmCFI8SO1WUCAJmFwwoHAFCbwV8AQHVuqUQyVm8AoEDhcEsFAKheOIIVjhA7VpcJAGQWDiscAED1whGscITYsbpMACCzcFjhAACqF45ghSPEjtVlAgCZhcMKBwBQm8FfAEB1bqlEMlZvAKBA4XBLBQCoXjiCFY4QO1aXCQBkFg4rHABA9cIRrHCE2LG6TAAgs3BY4QAAqheOYIUjxI7VZQIAmYXDCgcAUJvBXwBAdW6pRDJWbwCgQOFwSwUAqF44ghWOEDtWlwkAZBYOKxwAQPXCEaxwhNixukwAILNwWOEAAKoXjmCFI8SO1WUCAJmFwwoHAFCbwV8AgMIBAHRUOC5um2z7CJArts9KRkZmuRl7OACAdlY4AAAUDgBg+YXDHg6gNve8ZWTWm7GHAwBoZ4UDAEDhAAAUDgBA4YiyaRSozSY7GZn1ZmwaBQDaWeEAAFA4AIDlFw57OIDa3POWkVlvxh4OAKCdFQ4AgKu65hQAzxqGYVzaMY/jOPjKQduscAAA7RQOm0aBpbBZT0amvYxNo8Dl73W3VIDdrXAAACgcAMDyC4c9HMBSuHcuI9Nexh4O4PL3uj0cwO5WOAAArsrgL1iJUisTDx48mO2Yb9y4Ec0cHR0V+dytgsBuWeEAANopHDaNAmtiQ5+MzLyZvV/7zbntI8CSpPywJCMjUy6jLAAA1SkcAEA7hcMeDmBN3F+XkZk3Yw8H0CX312Vk5s0oCwBAdQZ/wQIkDraKPs9PP/0UzVy/fj2amXM42K1bt6KZu3fvljqHhoNBJVY4AIB2CodNo7Ael1dDUv8Rx97Y9CcjUy5j0yj0+UY6+Zjnf9CSkZHJzygLAEB1CgcA0E7hsIcD1sMejjTuwcvIlMvYwwF9vpFOPub5H7RkZGTyM8oCAFCdwV+wjJ+0o0sQKYOtfvzxxyLHc+PGjWjm22+/ne21zs/jd3YPDw9DiXNoOBhcjRUOAKCdwmHTKKzH2jaNjuP43K9t/60GGwNlZNIyNo1Ch9a2aXQYhud+bftvlcqOjYEyMgkZZQEAqE7hAADaKRz2cMB62MNRjvv0MjJpGXs4oEP2cBQtO+7Ty8gkZJQFAKA6g79gGT/BR+8JPHjwIPo8169fj2bu3r0bzaQM9So1HOzJkyfRzM2bN10k0DgrHABAO4XDplGgVTaNysjYNApQnU2jMjI2jQIAKBwAQEOFwx4OoFX2cMjI2MMBUJ09HDIy9nAAAIQhdalxGIa9cRzPt310KqHqT/CL+8dOvvnmm2jm6OioyGulDBB79dVXo5kPPvggZUVjcEXCr2eFAwBop3DYNAqwycZAGZm0jE2jABlsDJSRScsoCwBAdQoHANBO4bCHA2CT+/QyMmkZezgAMrhPLyOTllEWAIDqrjkFsIifoqPDplKGg/3zr3+Y7ZjffPPNaObDDz+MZr777rto5vHjx5fP18Y48x9++MGFBDtkhQMAaKdw2DQKKzJGHpfM7EDNf6ztBa9lY6CMTELGplHo0RB5XDKziz41jnO+lo2BMjIJGWUBAKhO4QAA2ikc9nDAitjDUfK13KeXkUnI2MMBPbKHo+RruU8vI5OQURYAgPo/56T+JDAMw944jufbPjqVsONv5oTBX+Pjf8Sf57fvl1lBuH8Yf63D+4s7zylD2IBNVjgAgHYKh02jAJtsDJSRScvYNAqQwcZAGZm0jLIAAFSncAAA7RQOezgANrlPLyOTlrGHAyCD+/QyMmkZZQEAqM7gL/IuoJRhUwYltfO1SBj81Zq//P3flz+LEJ+hvpn527/+E1yrsDtWOACAdgqHTaPAToyXfoVh87+lZK7Apj8ZmXIZm0aBtg2XfoVx87+lZK7SdWz6k5EpllEWAIDqFA4AoJ3CYQ8HsBP2cMjI2MOR+sIAV2YPh4yMPRwAAEk/Oxj8RdYFVGjwV8rzlNLzcKekr9fHf44/0e9/F898+Wi+z+vwvq87NM4KBwDQTuGwaRRYExv6ZGTmzdg0CnTJhj4ZmXkzygIAUJ3CAQC0Uzjs4QDWxP11GZl5M/ZwAF1yf11GZt6MsgAAVHfNKWCbUsO4Up7nnXfeiT7P2dlZNPPyyy/P9nmt9uueMESrNUdHR0W+7oaDQT1WOACAdgqHTaNAb2z6k5Epl7FpFCDyg5aMjEx+RlkAAKpTOACAdgqHPRxAb9yDl5Epl7GHAyDyg5aMjEx+RlkAAKoz+KtTKUOQDg4OirzW6elpNJMy1CvleT7//PNo5vbt20U+r/39/dnOT8prpTxPqc+r1GulfN1PTk6KvNa9e/eKfF8YDgZXY4UDAGincNg0CrDJxkAZmbSMTaMAGWwMlJFJyygLAEB1CgcA0E7hsIcDYJP79DIyaRl7OAAyuE8vI5OWURYAgOoM/ur3p7Lo8KKUIUilpAzj+vrrr+Of1+N/RDPDb993Aczw9So11CtlYBfQPiscAEA7hcOmUYBNNgbKyKRlbBoFyGBjoIxMWkZZAACqUzgAgHYKhz0cAJvcp5eRScvYwwGQwX16GZm0jLIAAFRn8BdTDXWY67VShoylDPUKXz6a7fwcHBxEM6enp9FM0kCzQoPaks5hyter0PC0y+dnHMcwDM9/qg8fPow+z/HxcTRz586dpq556I0VDgCgncJh0yhQ2+XVjQaOx6Y/GZlCGZtGgWaM49ja8dj0JyNTKKMsAADVKRwAQDuFwx4OoDZ7OGRk1puxhwNohj0cMjLrzSgLAEB1Q+pPFMMw7I3jeL7to1NJ9Ys1YbBV4k+tRYZo3b59O/paZ2dn0czJyclsx5x0fj7+czTz3z/ejWZKDex69913L5+LjVsv+/v7Rc4hUI8VDgBA4QAAFA4AgHKFw1+LZcrlv630or+9VCoz5zEv8TzPYRzHp3+j5OL3lx+Xfq2LX8MwbPw3oH3J/1qsTaOkFNJtj0tm5jzmJZ7nmYrPC3//osclX+uigLQ2rwMouMIBAKBwAAAKBwDQr2tOAUtRanBTyoCsg4OD6POcnp7O9rmnHPPR0VH0ed566634ayUM0Tr6zZ+imZShXm+88UY0kzLUC2ifFQ4AQOEAABQOAIByhcPgL6bMOfirtQFiSzLnwC6AKxWOiz+wt32k+zey2QZ/tTZAbGHF8OnQrIvfX34MsNPCAQCgcAAACgcA0K8hdZOYf7yNRVzQMw71Ojs7i2ZOTk6imZSBZimfV8oxP3z4MJp5++23m/qapgw0SznmUoPjgKuxwgEAKBwAgMIBAFCucBj8xRRDveY5h5HvUUO9gOUXDoO/SCmk2x7PnVnrOYx8jxrqBSy/cAAAKBwAgMIBAPTrmlPAmpQaovX6669HX6vUUK9S9vf3ZzvPKcO4jo+Po5k7d+4UeZ4UKV93w8GgHiscAIDCAQAoHAAA5QqHwV9MaW3wV2vDwXoeaAbwqwqHwV+kFNJtj1vMLPH8AKy+cAAAKBwAgMIBAPRrSP0XJIdh2BvH8XzbR6eSVX1jzDgkKuW1UgZtffbZZ9HM999/H818+umn3X7dDf6CeqxwAAAKBwCgcAAAlCscBn8xZYmDv0oN2jLUC6Bg4TD4i5RCuu3xUjNzfu4ACgcAgMIBACgcAEDXrjkFsKm1AVApQ71u3rzZ1PlJGWh279696Gt98cUX0cwrr7xS5POac+Ab9MYKBwCgcAAACgcAQLnCYfAXU9Y6+Ku1IWNL/LoD/KrCYfAXKYV022OZdQ7+MtAMKF44AAAUDgBA4QAA+mXwF+xYqSFan3zyycXzhWEYnn3+p49ThoO99tprocTxlPq8Pvroo+jxpHxex8fH0czh4eFsnzv0xgoHAKBwAAAKBwBAucJh8BdTDPWaJxP5Hn26X+Pi95cft3ptAArHxh8SBn8xVUi3PZapPxxsGIan5eLi95cft3ptAAoHAIDCAQAoHAAABn/BWrz00kvRTMrwq/v37892zKWGgz169Ojy815pz8ovv/wSzbz33nuhxDEbDkZvrHAAAAoHAKBwAACUKxwGfzHFwK55Mmu9NnI9O+jsRcPPdjX0DLhC4TD4i5RCuu2xTP3BX0u+NgqUmq3DznY59Ay4QuEAAFA4AACFAwDo15C6mWoYhr1xHM+3fXQq4YrfhAlDom7dutXUMT958iSamXOwVco5PDw8jD7Pzz//HM189dVXizs/0AIrHACAwgEAKBwAAOUKh8FfTDGwKz/T87UBKBwbf0gY/MVUId32WGadQ71KXRuAwgEAoHAAAAoHAIDBX7Dzb8KEoVVLVGqwlcFosA5WOAAAhQMAUDgAAMoVDoO/mGKoV36m52sDUDg2/pAw+IupQrrtsYzBXz1+7sAVCgcAgMIBACgcAEC/DP4C2v5DymA0WAUrHACAwgEAKBwAAOUKh8FfTDHUSyYnA3TwPmHTKNB4mbVpFHpa4QAAUDgAAIUDAOjXNacAaJm9DrAOVjgAAIUDAFA4AADKFQ6Dv5hisJVMTgbo4H3C4C8AoJkVDgAAhQMAUDgAAIUDAEDhAAAUDgAAhQMAWEDhMPiLKQZbyeRkgA7eJwz+AgCaWeEAAFA4AACFAwBQOAAAFA4AQOEAAFA4AIAFFA6Dv5hisJVMTgbo4H3C4C8AoJkVDgAAhQMAUDgAAIUDAEDhAAAUDgAAhQMAWEDhMPiLKQZbyeRkgA7eJwz+AgCaWeEAAFA4AACFAwBQOAAAFA4AQOEAAFA4AIAFFA6Dv5hisJVMTgbo4H3C4C8AoJkVDgAAhQMAUDgAAIUDAEDhAAAUDgAAhQMAWEDhMPiLKQZbyeRkgA7eJwz+AgCaWeEAAFA4AACFAwBQOAAAFA4AQOEAAFA4AIAFFA6Dv5hisJVMTgbo4H3C4C8AoJkVDgAAhQMAUDgAAIUDAEDhAAAUDgAAhQMAWEDhMPiLKQZbyeRkgA7eJwz+AgCaWeEAAFA4AACFAwBQOAAAFA4AQOEAAFA4AIAFFA6Dv5hisJVMTgbo4H3C4C8AoJkVDgAAhQMAUDgAAIUDAEDhAAAUDgAAhQMAWEDhMPiLKQZbyeRkgA7eJwz+AgCaWeEAAFA4AACFAwBQOAAAFA4AQOEAAFA4AIAFFA6Dv5hisJVMTgbo4H3C4C8AoJkVDgAAhQMAUDgAAIUDAEDhAAAUDgAAhQMAWEDhMPiLKQZbyeRkgA7eJwz+AgCaWeEAAFA4AACFAwBQOAAAFA4AQOEAAFA4AIAFFA6Dv5hisJVMTgbo4H3C4C8AoJkVDgAAhQMAUDgAAIUDAEDhAAAUDgAAhQMAWEDhMPiLKQZbyeRkgA7eJwz+AgCaWeEAAFA4AACFAwBQOAAAFA4AQOEAAFA4AIAFFA6Dv5hisJVMTgbo4H3C4C8AoJkVDgAAhQMAUDgAAIUDAEDhAAAUDgAAhQMAWEDhMPiLKQZbyeRkgA7eJwz+AgCaWeEAAFA4AACFAwBQOAAAFA4AQOEAAFA4AIAFFA6Dv5hisJVMTgbo4H3C4C8AoJkVDgAAhQMAUDgAgH79D77oxY1ZoY4sAAAAAElFTkSuQmCC',
					title: 'aspecto',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'aspecto',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'aspecto',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'aspecto',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'aspecto',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'aspecto',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'aspecto',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'aspecto',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'aspecto',
				},
				{
					img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcCAYAAAC9/nd8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAXi0lEQVR4nO3dPYwd13kG4DsEgVQBXIgOwEhFXCX+kQG6cZHChUEX6lIZDhBQTawmqUSmCiQhHeXGTkNXYoDATZAiBQsTLpRABRvJoCy6i12QZiCTQBircMdJYRGilnv3HO6cd+bM3OcBCGpXb+bOXire95778dthHMcdJxuG4cw4jo/3/X7oGQAoObP0DQAA26dwAABxCgcAEKdwAABxCgcAEKdwAABxCgcAEKdwAABxCgcAEHd26RsoqdlomcyUNm0Ow3Bmt9vtDjnzdG7fxzIyJ2Vq/p2MjMy6M8NotXlRb6vEe8sAQIkTjkKm9A2311OHOTNP5/Z9LCNzUqbm38nIyKw744SjQm8nCr1lAKDECUchU/qG2+upw5yZp3P7PpaROSlT8+9kZGTWnXHCUaG3E4XeMgBQ4oSjkCl9w+311GHOzNO5fR/LyJyUqfl3MjIy68444ajQ24lCbxkAKDmxoQAAtKBwAABx3lIBAOKccFR4Mviy7/dDzwBAiW8aAECcwgEAxJnhAADinHBU6G1morcMAJT4pgEAxCkcAECcwgEAxBkaBQDinHBU6G1Is7cMAJT4pgEAxCkcAECcGQ4AIM4JR4XeZiZ6ywBAiW8aAECcwgEAxCkcAECcwgEAxCkcAEBc9V+LHYbhzDiOj/f9Hr5PAGDFqk84npSKfb9vWW9/DbW3DACU+KYBAMQpHABAnMIBAMQpHABAnMIBAMQpHABAnMIBAMRZ/AUAxFn8VaG3RVu9ZQCgxDcNACBO4QAA4hQOACBO4QAA4hQOACBO4QAA4hQOACDO4i8AIM7irwq9LdrqLQMAJb5pAABxCgcAEKdwAABxCgcAEKdwAABxCgcAEKdwAABxFn8BAHEWf1XobdFWbxkAKPFNAwCIUzgAgDiFAwCIMzQKAMQNu8pTjpPKxtMDhKWPazM1/26OjDIFANM54QAA4pxwFDLKFABM54QDAIhzwlHIKFMAMJ0TDgAgzglHIaNMAcB0TjgAgDibRgGAOG+pFDJObwBgOm+pAABxTjgKGWUKAKZzwgEAxDnhKGSUKQCYzgkHABDnhKOQUaYAYDonHABAnMVfAECct1QKGac3ADCdt1QAgDgnHIWMMgUA0znhAADinHAUMsoUAEznhAMAiHPCUcgoUwAwnRMOACDO4i8AIM5bKoWM0xsAmM5bKgBAnBOOQkaZAoDpnHAAAHFOOAoZZQoApnPCAQDEOeEoZJQpAJjOCQcAEGfxFwAQ5y2VQsbpDQBM5y0VACDOCUcho0wBwHROOACAOCcchYwyBQDTOeEAAOKccBQyyhQATOeEAwCIs/gLAIjzlkoh4/QGAKbzlgoAEOeEo5BRpgBgOiccAECcE45CRpkCgOmccAAAcU44ChllCgCmc8IBAMRZ/AUAxHlLpZBxegMA03lLBQCIc8JRyChTADCdEw4AIM4JRyGjTAHAdE44AIA4JxyFjDIFANM54QAA4iz+AgDivKVSyDi9AYDpvKUCAMQ54ShklCkAmM4JBwAQ54SjkFGmAGA6JxwAQJwTjkJGmQKA6ZxwAABxZ5e+AaCNYRiKrx7GcRzmuJfnUPOKp+aeW10HCLFpFACIqy4cT9422fc7wBxKs1gtryMjI9MuY4YDNsJbKk2uA4R4SwUAiFM4AIA4MxzAqpjhkJFZZ8YMB2yEGY4m1wFCvKUCAMRZ/AUrUHN6ce3yhSbXaXgKUnd8ur7rOCmBU3DCAQDEGRoFmGDpQTwZmbVkqgvHk//jfb8DHKKaF10yMjLeUgEAZqBwAABxZjgAJlj6fXEZmbVkzHAATLD0++IyMmvJKAsAQJzFX7ARt27fbXKdV7/zxeKCrHd++tvi8qthKO/Hqv3RChVarT+vYY06nIITDgAgztAobM7RF+CnfWHf6jrz6222bOlhPRmZHjKGRmFzjp7mn/Z0v9V15tfbC6Glh/VkZHrIKAsAQJzCAQDEmeGAzTHD0dtbvUu/dy4j00PGDAdsjhmO3l4ILf3euYxMDxllAQCIs/gLNuKbX3+pmLl+80GT6wzDUHx/pWapV81ysBqVC8QsB4MFOeEAAOIMjQKb02rwbU5LD/TJyKQzhkaBzWk1+DanpQf6ZGTSGWUBAIhTOACAODMcwOaY4ZCR6S9jhgPYHDMcMjL9ZZQFACDO4i/YiFu37852nQcPygvE7ty589zXGcfxmWVgH3/8cfE6lYvIahZtzbkcrImHDx9+7n6Oew5feOEFS8ZYnBMOACDO0Chsznw/LfboSvHKFeN7tVp1XvlYXQ2WNhzWm/OxZGSqM4ZGYXPm+2mxR7+5TS0MUwvLcz5WV4OlDYf15nwsGZnqjLIAAMQpHABAnBkO2BwzHJWPZYZDRmbGjBkO2BwzHJWPZYZDRmbGjLIAAMQNta8ohmE4M47j432/h+8TNqtmadWli+eK17l+s7yMq5Xe7qeVyuVgNf+jOdt7Qz++8o3i/Xz/6vvF+7FAjDQnHABAnKFRWJVWA6Gt9HY/bbWaUZtzWK/h/bS6jozMbrczNAor02ogtJXe7qetVi+o5hzWa3g/ra4jI7Pb7bylAgDMQOEAAOLMcMCq9DYz0dv9tGWGo8l1ZGR2u50ZDliZ3mYmeruftsxwNLmOjMxut/OWCgAwg7NL3wD0qGYZVyutlmh99NFHxcyHH35YzLz88svFzHv/8jfFzFcv/kMxc/78+WLm/v37xcy9e/c+9/FxS6tefPHF4nVq/tzXuBysxr9f/U4x8/2r789wJ2yVEw4AIM7QKHRj2wOYc+rtp862us6cj9XqOjIyTxgahW5sewBzTr391NlW15nzsVpdR0bmCWUBAIhTOACAODMc0A0zHK2Y4ejnOjIyT5jhgG6Y4WjFDEc/15GReUJZAADiLP7i4NQsd7p2+ULxOrdu321yPzVLvXpT87V/9eIMN9KvJsdTP77yjeJ/q6+9/UHxOq+93ea/eZjCCQcAEGdoFCarGfbc6kBon19Xb0Ojcw6EzmnpIUSZdWUMjcJkNcOeWx0I7fPr6m1odM6B0DktPYQos66MsgAAxCkcAECcGQ6YzAzH/o+XYYZjHkvPBMisK2OGAyYzw7H/42WY4ZjH0jMBMuvKKAsAQNxQ+0pgGIYz4zg+3vd7+D6hSqulXjXLlFoZx7HJsUDN195Kb89hK63+LGrU/Hm99eqXitf5j//6n2Lmb//qL4qZmj+vOZ8ftscJBwAQZ2gUYI/FB0LHI7/2fW4hSw8hyqwrY2gUYI/FB0KHI7/2fW4hSw8hyqwroywAAHEKBwAQZ4YDYA8zHCdbeiZAZl0ZMxwAe5jhONnSMwEy68ooCwBA3NmlbwBqzbnUa6sLjh69+2Yx84VvlTPfv/p+MXPr9heLmes3HxQzNX+mHz98VMy88c6viplWWi1h+/VvPjnymXF3mmONmucH0pxwAABxhkbhAM37M15neLTQcGV/P+X1lAdvnT8/MoeRMTQKB2jen/E6w6OFhiv7+ymvp20Gu66fH5nDyCgLAECcwgEAxJnhgANkhqOOGY7C3axgbkCmn4wZDjhAZjjqmOEo3M0K5gZk+skoCwBAnMVfbMqt23eXvoXVq1kO9n//+VYx882vv1TM1Cz+qlla9ScvfKGYuXTx3JHPPLtEq2ZhV6ulcK2W1NX44L/LS8+2uuyOfjjhAADiDI2yUfOORa5NzbPTKjNZ7CemtnlBv9U5tqUHDGW2lzE0ykbNOxa5NjXPTqvMZLGfmNqmHm31RdfSA4Yy28soCwBAnMIBAMSZ4WCjzHCcxAzHbmeG42RLv98vs72MGQ42ygzHScxw7HZmOE629Pv9MtvLKAsAQJzFX3ShZuFSq0VJW11wVPN11TzPv/jnbxcf66Wv/WUxU7OEreaxvvZ3PytmapZ61SwZa/Uc1vy3WrPQrObretbpvnZIc8IBAMQZGgVOrW5odIkB3hUMhJ5qGLbm65rva5eReZ6MoVHg1OqGRpcY4F3BQOiphmFrvq75vnYZmefJKAsAQJzCAQDEmeEATs0MxwRmOGQOLGOGAzg1MxwTmOGQObCMsgAAxFn8xcGpWdzUagHUGtUs2trtypma5Vd1j1XWarFVqz/TmqVev/7NJ0c+8+zCrj/70z8uXueNd35VzGx12R3r4oQDAIgzNArQWquB0NBPyl16eFDmMDOGRgFaazUQGvpJuUsPD8ocZkZZAADiFA4AIM4MB0BrZjhkZMxwAMSZ4ZCRMcMBAMzP4i8mefjwYfFQ9/Jff3mOW6n26N03i5maBVAfffRR8Toffvhh1T2V3L9/v5g5f/58MfO9732vmLlx40bVPZXcuXOnmLl08e6Rzzy7/OripR8Wr/Pyyy8/x53tV/PnVfMc1izjeuvVLxUzNcvBYC2ccAAAcYZGaWIcxxM//vSzhY/n1dfd8AcH9Oo99tNiy5YeHpQ5zIyhUZoYhuHEjz/9bOHjefV1N/zBAdW+2E+LLVt6eFDmMDPKAgAQp3AAAHFmOGjCDAdtHNAbW2Y4ZA4sY4aDJsxw0MYB1T4zHDIHllEWAIC44fij72OCw3BmHMfH+34P3ycbV7No69LFc8XrXL/5oJipuU5var6uVmoWf9Us9bp3714x8+U/eq+Yee3tD4qZOZew1Sz++sEPflDMvP766y1uZzeOo8M5VsEJBwAQZ2iUFWo17llznd4ycLKlBwNlZPZlDI2yQq3GPWuu01sGTrb0YKCMzL6MsgAAxCkcAECcGQ5WyAwH7LP0+/QyMvsyZjhYITMcsM/S79PLyOzLKAsAQJzFX3ShZvHXtcsXitepWRJVo7dlSq9+54sH8v7KuDt6sjPn0rMarZaM3b9/v8XtVC0Q6+2/Zw6TEw4AIM7QKKxKb0OsrYdhvRCfw9LDgzKHmTE0CqvS2xBr62HYA3nnaGFLDw/KHGZGWQAA4hQOACDODAesSm+zF2Y41mjp9/JlDjNjhgNWpbfZCzMca7T0e/kyh5lRFgCAuLNL3wDUunX7bpPrrHEJ0js//W2Te65ZsHb16tXida5cuVLMtFrU9ujdNz/38bOrwZ51XOYL33rzmOTn/eQnPylm5lzqdf78+SbXgR444QAA4hQOACBO4QAA4vy1WJo4+reVjvvbSzWZk427z/4Ww7jn43qt7nmNmTUZj/wajvlcTQZYlr8WSxNHi+dxRbQmc7Jh99ko4LDn43qt7nmNmTUZjvwaj/lcTQZYlrIAAMQpHABAnMIBAMRZ/EUXapZx1SytunTxXPGxaq6zxuVgNV/XjRs3itd55ZVXipma5/l3575bzOx25cVfNe7+4r0m12m1sOv1119vcp0aa/xvlcPkhAMAiFM4AIA4hQMAiLP4iyb6WVplOdg82j7PNY9kqResm8VfNNHP0irLwebR9nmueSRLvWDdlAUAIE7hAADiFA4AIG4Yx7qRq2EYzozj+Hjf7+H7hKrFVtcuXyhe57W3y8umelum1Gqp1507d4qZr3zlK8XM3Xf/sZipeZ6vXr1azFy5cqWY6U1v//1AD5xwAABxCgcAEKdwAABxFn/RxPYWWx3/+Iex1AugPYu/aGJ7i62Of/zDWOoF0J6yAADEKRwAQJzCAQDEWfzFatQsv7p08VyTx7p+80ExM+dyp5qvvWaJVo1f/uztYubL375czNy7d6+YefHFF6vuaa7HqlkyZqkXnI4TDgAgTuEAAOIUDgAgzuIvmuhn+dX46a+n//m4j0uZev187a20fX4AdjuLv2ikn+VXw6e/nv7n4z4uZer187W30vb5AdjtvKUCAMxA4QAA4hQOACDu7NI3ALVqFi7VLMiqUbNArOaxWt3zjRs3ivfzyiuvFDPXLl8oZmqWnv39n7dZtNXbcjAgxwkHABCncAAAcQoHABBn8RdNzLn8ap4FWfMvBwPYMou/aGLO5VfzLMiafzkYwJYpCwBAnMIBAMQpHABAnMVfbErNoq0aNcu4Wi0Hq3Hnzp1ipuZ+fnfuuxWP9kEx8aMf/ajiOgCfccIBAMQpHABAnMIBAMRZ/EUTvS3+mmeBWNvlYNP1dj8An7H4iyZ6W/w1zwKxtsvBpuvtfgA+oywAAHEKBwAQp3AAAHHDONYNkg3DcGYcx8f7fg/fJ3Sn1XKw6zcfNLmfa5cvFDMvfeufipmaJWNXrlwpZmqWsNU8hzdu3Cg+Vo2ar+v3v/99MfPGG28UM60W0MGWOOEAAOIUDgAgTuEAAOIs/qKJ3hZ2WQ7Wj+nPIbAFFn/RRG8LuywH68f05xDYAmUBAIhTOACAOIUDAIg7u/QNAGU1C8RaLfX65c/errqnFlotB/v5z39+9Lq7YXj++ZhPPvmkeJ2rV68Wr1Nzz5aDcWiccAAAcQoHABCncAAAcRZ/0URvy7i2t/hrzgVibR9rjsVf4zh+7tcwDM98bs7rAM+qHhr102I5SW/LuPpa/HXcPx/38RzXmf+x5lj8dXSw87RDo62uAzzLWyoAQJzCAQDEKRwAQJzFX3BKrZZW1fjm118qZv7th5eaXKc3rZ7nt956q/hYjx49Kmb+986/HvnMuDuEH8IHUznhAADiFA4AIE7hAADiLP6iid6WcfWWmUefS8b6eX5aGY/8Go75HHBU9f/jP/kfiX2/c9h6W8bVW2Yew+6z4cVhz8dzXucP+nl+WhmO/BqP+RxwlLIAAMQpHABAnMIBAMQNtT/90A9vg4xWy8F6U7Owq0bN83Pt8oXidW7dvnvkM88u7KpZjFZznes3HxSv0+r5gbVwwgEAxCkcAECcwgEAxFn8RRO9LdpaY2ar+vnaWy3ssvgLTsPiL5robdHWGjNb1c/X3mphl8VfcBrKAgAQp3AAAHEKBwAQZ/EX0DWL0WAbnHAAAHEKBwAQp3AAAHEWf9FEb0u0ZNaVAbbP0CjQNUOjsA1eaQAAcQoHABCncAAAcWeXvgGAk5h1gG1wwgEAxCkcAECcwgEAxFn8RRO9LZKSWVcG2D6LvwCAOK80AIA4hQMAiFM4AIA4hQMAiFM4AIA4hQMAiFM4AIA4i79oordFUjLrygDbZ/EXABDnlQYAEKdwAABxCgcAEKdwAABxCgcAEKdwAABxCgcAEGfxF030tkhKZl0ZYPss/gIA4rzSAADiFA4AIE7hAADiFA4AIE7hAADiFA4AIE7hAADiLP6iid4WScmsKwNsn8VfAECcVxoAQJzCAQDEKRwAQJzCAQDEKRwAQJzCAQDEKRwAQJzFXzTR2yIpmXVlgO2z+AsAiPNKAwCIUzgAgDiFAwCIUzgAgDiFAwCIUzgAgDiFAwCIs/iLJnpbJCWzrgywfRZ/AQBxXmkAAHEKBwAQp3AAAHEKBwAQp3AAAHEKBwAQp3AAAHEWf9FEb4ukZNaVAbbP4i8AIM4rDQAgTuEAAOIUDgAgTuEAAOIUDgAgTuEAAOIUDgAgzuIvmuhtkZTMujLA9ln8BQDEeaUBAMQpHABAnMIBAMQpHABAnMIBAMQpHABAnMIBAMRZ/EUTvS2SkllXBtg+i78AgDivNACAOIUDAIhTOACAOIUDAIhTOACAOIUDAIhTOACAOIu/aKK3RVIy68oA22fxFwAQ55UGABCncAAAcQoHABCncAAAcQoHABCncAAAcQoHABBn8RdN9LZISmZdGWD7LP4CAOK80gAA4hQOACBO4QAA4hQOACBO4QAA4hQOACBO4QAA4iz+ooneFknJrCsDbJ/FXwBAnFcaAECcwgEAxCkcAECcwgEAxCkcAECcwgEAxCkcAECcxV800dsiKZl1ZYDts/gLAIjzSgMAiFM4AIA4hQMAiFM4AIA4hQMAiFM4AIA4hQMAiLP4iyZ6WyQls64MsH0WfwEAcV5pAABxCgcAEKdwAABxCgcAEKdwAABxCgcAEKdwAABxFn/RRG+LpGTWlQG2z+IvACDOKw0AIE7hAADiFA4AIE7hAADiFA4AIE7hAADiFA4AIM7iL5robZGUzLoywPZZ/AUAxHmlAQDEKRwAQJzCAQDEKRwAQJzCAQDEKRwAQJzCAQDEWfxFE70tkpJZVwbYPou/AIA4rzQAgDiFAwCIUzgAgLj/B9BjUnlh+AGAAAAAAElFTkSuQmCC',
					title: 'aspecto',
				},
				{
					img: 'data:image/png;base64,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',
					title: 'aspecto',
				},
			]
		},
		77: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'EntradaNombre', function () {
					return n
				})
			r(1)
			var t = r(34),
				a = r(2),
				n = function EntradaNombre(A) {
					var e = A.register,
						r = A.errors,
						n = A.texto,
						c = void 0 === n ? 'Nombre de usuario' : n,
						o = A.label,
						s = void 0 === o ? 'nombre' : o
					return Object(a.jsxs)(a.Fragment, {
						children: [
							Object(a.jsx)('label', {
								htmlFor: s,
								className: 'black-text',
								children: c,
							}),
							Object(a.jsx)('input', {
								type: 'text',
								name: s,
								id: s,
								className: 'form-control',
								placeholder: 'Nombre',
								ref: e({
									required: 'Este campo no se puede dejar vacío.',
									validate: function validate(A) {
										return (
											[/[^@]/].every(function (e) {
												return e.test(A)
											}) || 'El {label} no puede contener @'
										)
									},
								}),
							}),
							Object(a.jsx)(t.default, { error: r[s] }),
						],
					})
				}
		},
		78: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'EntradaCorreo', function () {
					return n
				})
			r(1)
			var t = r(34),
				a = r(2),
				n = function EntradaCorreo(A) {
					var e = A.register,
						r = A.errors
					return Object(a.jsxs)(a.Fragment, {
						children: [
							Object(a.jsxs)('label', {
								htmlFor: 'correo',
								className: 'black-text',
								children: [' ', 'Correo electrónico (opcional)'],
							}),
							Object(a.jsx)('input', {
								type: 'text',
								name: 'correo',
								id: 'correo',
								className: 'form-control',
								placeholder: 'Correo',
								ref: e(),
							}),
							Object(a.jsx)(t.default, { error: r.correo }),
						],
					})
				}
		},
		91: function (A, e, r) {
			'use strict'
			e.a =
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcCAYAAAC9/nd8AAAVUUlEQVR42u3dzW7jRhYG0FbDWWWTt+KGj8sN3yqbrAJMxgpGgafTLFaJVcX6OQdoeOxU37HV+vl0dX31+Ouvv74R9ng8vn9eTv85+jj7GQA4891FAAAIHACAwAEAIHAAAAIHACBwAAAIHACAwAEAIHAAAOV9tP4Nxmy0LHnmbNPm8+Pz3Mxnvp47+twZZ0JnYv6bM8440/eZh9Xm8aHHanOrzQHQ4dDh0OFwRofDGWec0eHQ4dDhAECHQ4dDh0OHwxkdDmeccUaHQ4dDhwMAHQ4dDh0Oz+Cd0eFwxhlndDh0OHQ4ALiLxV8AgMABAPTPSyoAQHE6HDGp7H+DL0cfZz8DAAIHACBwAADjM8MBABSnwxGTysxwmOEAQOAAANr24SKAey3L8vfrms+XNz87R/98/evnv/zyy2mdP//889vIdUJi6mzb9nBtg/vocAAAxelwRHi9Z8jRx9nPcPn69ffH57P+r0PcXz8f/czP/tuPl8/VM4AOR/MMjRoaLXz9+ucB8vW/f/b562WI0Oe91gn9/VxnAIEDABA4AACuMcMRwQyHGY7C16+/P5rhMMMBOhyTM8NhhqPw9csMhxkOEDgAAK7ykgrTWdf1tNc++hKt0ZZ6xdRJ+Xev8f3s+67twlR0OAAAgQMAEDgAAPIFjpl/W8Gvxc77a7E//nbDu7/toA4gcGR80B34QcevxU76a7Fn+x7UyVMHEDgAAAQOAEDgAACw+It+LMvy94CAJVpz1gnpsc7r+ny1zrZtJnXR4QAAEDgAAIEDAJgscFj8ZfHX0ZnaLNGasw4wSeCw+Mvir1aCpiVac9YBJgkcAAACBwAgcAAA87L4i+LWdT190d7yq7nrhKiT7/YVsu+7aV50OAAAgQMAQOAAADoJHBZ/Wfx1dCYny6/mrAMIHEkPuqOy+Kte0LT8as46gMABACBwAAACBwDAt4fXXCMupM95heesytHHUc8sy3J65bC0Sp1adXJdD9UpW2fbNpPD6HAAAAIHACBwAAAUDhwWf1nqdZXlV+pcqQNMEjgs/rLUK0NwC36ujjqAwAEAIHAAAAIHADCx6MVfMYuk6EfupV7qlK1DHa6HdepYDjanj9gBwVDY+Frj7PPYMzH/rcYZYQoAMgSO2AfUlA7H2eexZ1Ie9GueAQASA4cOR/iMAAIAGQKHDkf6GQAgMXDocITPCCAAkCFw6HCknwEAEgOHDkf4jAACABkChw5H+hkAII3FX51Z1/X0H8zSoTp14Aq3r+t19n23QKynDoeXVMJnhCkAyBA4vKSSfgYASAwcOhzhMwIIAGQIHDoc6WcAgMTAocMRPiOAAECGwKHDkX4GAEgMHDoc4TMCCABkCBw6HOlnAIA0Fn81xFKv63UA9xtfWQ7WDi+pnJwRpgAgQ+Dwkkr6GQAgMXDocITPCCAAkCFw6HCknwEAEgOHDkf4jAACABkChw5H+hkAIDFw6HCEzwggAJAhcOhwpJ8BANJY/FWJpV7X6wDlWA5GaV5SOTkjTAFAhsDhJZX0MwBAYuDQ4QifEUAAIEPg0OFIPwMAJAYOHY7wGQEEADIEDh2O9DMAQGLg0OEInxFAACBD4NDhSD8DAKSx+CsDS72u1wHaZzkYV3hJ5eSMjgcAZAgcXlJJPwMAJAYOHY7wGQEEADIEDh2O9DMAQGLg0OEInxFAACBD4NDhSD8DACQGDh2O8BkBBAAyBA4djvQzAEBi4HARXGepFy349ddfT8/88ccf6lysMzP3Y1wKHF5SCZ/R8QCADIHDSyrpZwCAxMChwxE+I4AAQIbAocORfgYASAwcOhzhMwIIAGQIHDoc6WcAgMTAocMRPiOAAECGwKHDkX4GAEjz+HyAjTuYEDhGsizL6QVkGQ5HLNGasw5z3h9u2/bwr3vs+zMwxPw5e0nl9ecVTo4+jz0T899qnHEVAYDrvKRycuazw+FaAgA6HDocAKDDocMBADocOhw6HACgw6HDAQA6HDocAIAOhw4HANxu6sVflnrNydIqdUaqMyrLwcYz9Usq8iYAVAocz8AQ8+csdLz+PIuGPo89E/Pfrp7xzw8AOhw6HACgw6HDAQDocOhwAIAOhw4HAOhw6HAAADocOhwA0IuPmX94S73GY0mUOuq4f265ztQdDhcBANBM4Pj6ssTPPgIAaWLmCUc58z31Qjn6CACkufPNSWufERYAgOIEDgCgncBhhgMA8jLDEfjLZjgAIA8zHAAAGT0+U0jcwZNNo639YOu6nv5glnr1xXInddQpV2dUPd7P7/v+GPHfQocDAGgncIw4NPrs7nz9c/Q1ALiLodEBhkY/v/f/+3P0NQC48cmxoVEAgBgCBwDQTuAwwwEA9ZnhMMMBADWeHJvhAACI8THqD2apV18sZVJHnfbr9Mj9fDt0OACAdgJHb0OjBkIBGIGh0caHRg2EAjACQ6MAAJEEDgCgncBhhgMA6jPDYYYDAGo8gTbDAQAQ1QiIfWnh2cl4JpajjzW/6WVZTr9py17aYZlSO3VG5d+9nTqjau3xYtu27tr0OhwAQHHRq81bGhr9sSvznMd4Zwg0Vx0AuFPMqw13n/lI/WFaeEnlZwOf7wyB5qoDAHcyNAoAIHAAADWY4chQBwDuZIaj3AUb9bVadQDgTmY4AAC+JXQ4WmKpVzssQbpeJ9flPLOal7Pr8/U6Hneu1+mRDgcA0E7g8G6xANAm7xZ774Xv3WIBmIKhUQAAgQMAaCpwmOEAgDaZ4bj3wjfDAcAUzHAAADyf9Me+tFBrtfm6rqffkKVedVhedL0Oc3K7uF6nNa097sTU2fe9qVa+DgcAUJx3i81QBwBa591i37vQor5Wqw4AtM7QKAAwPIEDACjODEeGOgDQOjMc711oUV+rVQcAWmeGAwAY3kdr31CPy1V6XA5m6dD1OuB28V6dHnncuU6HAwAorrmhUQOhAJCfodF///9Efa1WHQAYgaFRAGB4AgcAUJwZDgCYgBmOf///RH2tVh0AGIEZDgBgeM0t/rJcpQ5LveBeloONp7XHr9bocAAAxXm32Ax1AKB1hkbfu9CivlarDgC0ztAoADA8gQMAKM4MR4Y6ANA6MxzvXWhRX6tVBwBaZ4YDABhec4u/LPWqw1KvOf3222+nZ37//ffb6jxf0vyxyxhTx+10zjoev/qiwwEAtBM4ar5b7Nc/R1+rVQdG9OP1/93bQ646L2aooJznzOWdZ7xbLMx5x5PltpGrztfA4nYKxZ5oGBoFAMYmcAAA7QQOMxwwDjMcMB8zHBF3OGY4IPsdT5bbhhkO6OqJhhkOAGDwJzqxLdAcHY5lWf762bOYr5/XXIoy6nIVS7360voyrtbqWA6WznKwdrT2+LVtW7WWog4HAFBc1XeLfXVTfnxX1tR3afVusYwo1PlT5/9vp0AZw7xb7OuO4uodkMFSBr2hZ7kujlonV2ABzpsLJc54SQUAKE7gAACKM8ORoQ7kYIYjjpdToBwzHBF3OGY4GOCGnuW6aIYDuHD7MsMBAPTro+b/2WsJSajDYalXmKVefbHUK63Ou0u9Zl4OZqlXX1pbblmTDgcA0E7gyPlusaHXdL1bLCNq7d1ZR3+3WDMe8PZtZ6x3iw29pGIglEFvxFmuiwZC69aBCZ8cGRoFAPolcAAA7QQOMxzwPjMc79033F0HZmOGwwwH/d+Is1wXzXDUrQMTPjkywwEA9Kvq4q/XEpJQh2PmpV4xLPXqi6Ve+etYDtb/7X3m5WAzL7fU4QAA2gkcud4t9vWs4uvw5tfPU+oYCGUkBkvjGCyFcoYZGm3t3WKhsRt6luu0wdK6dWCwJz6GRgGAfgkcAEA7gcMMB5RlhiOOGQ4oxwxHxB2FOw8GuKFnuU6b4ahbBwZ74mOGAwDoV9XFX68lJKEOx8xLUWLMvOSnR5Z6pdW5e6mX5WB91elRzcevmDo16XAAAO0EDu8WC+8zEPrefcModaAX3i3Wu8XS/404y3XRQGifdaCjJ0eGRgGAfgkcAEA7gcMMB7zPDMd79w2j1IFemOEww0H/N+Is10UzHH3WgY6eHJnhAAD6VXXx12sJSajDMfNSrxiWerXDUq976ljq5X4jpU5rZl5uqcMBALQTOLxbLBxfH0Ofq+PdYqEX3i024o7CnQc33kCzXBfViQ8wBkKh2BMoQ6MAQL8EDgCgncBhhgOOr4+hz9UxwwG9MMMRcUfhzoMbb6BZrovqxAcYMxxQ7AmUGQ4AoF9VF3+9lpCEOhwzL0WJMepyntaWg1nGdU+du5d6jboczFKvdtR8/IqpU5MOBwDQTuDwbrHMyCBnnTpH9w2j1IFeeLdY7xbLfTe+LNchdd67bxilDnT0JMvQKADQL4EDAGgncJjhYEZmL+rUObpvGKUO9MIMhxkO7rvxZbkOqfPefcModaCjJ1lmOACAflVd/PVaQhLqcFjqFWapVx2WcbVbx3KwdKPeb/S4HGzm5ZY6HABAO4HDu8XC8fUx9Lk6BkuhF94tNuIG7kbPjTfQLNdFdeIDjMFSKPYEytAoANAvgQMAaCdwmOGA4+tj6HN1zHBAL8xwRNzA3ei58Qaa5bqoTnyAMcMBxZ5AmeEAAPpVdfHXawlJqMMx81KUmZfztLYczDKue+pY6lWGpV7tqPn4FVOnJh0OAEDgAAAEDgCAU9EzHDl+LfYl99Q65Pb61c3Xr2x/va6m/FqnOnF13v37rdYBLgSOHL8W+/VGfeXXYqG0r9fHKwFZnbQnH+/eF7RWB/g3L6kAAAIHACBwAACcqrr467WEJDTDMepSr1ws9arDMq5261jq5X4jpU5rZl5uqcMBAAgcAIDAAQBwyuIveJOlXnXrvPv3c9cBCgcOi7/gODhb6lWnzpX7C0u94F5eUgEABA4AQOAAADhVdfHXawlJaIZj5qUoMUZdzmM5mDo/u2/otY77jTp1elTz8SumTk06HACAwAEACBwAAKcs/oKCLPWKq/Pu32+1DnAhcFj8Beks9Up78nH3Ui/LwaAcL6kAAAIHACBwAACcesQOROWc4QhZ1/X0Gxp1qVculnrVYanXPXUs9Uo36jLAHpeD1Vzqte97UwNIOhwAgMABAAgcAACnbln8BSOw1KtunXf/fu46QOHAUWtoFHphqVf9Oq/gYKkX9MdLKgCAwAEACBwAAKc+WvuGai5F6XE52KjLeXpcDmYZV/46lnqls9TL41cvdDgAAIEDABA4AABOWfwFBVnqFVfn3b+fuw7QQOCw+AvSWeoVX+cVHCz1gjF5SQUAEDgAAIEDAOBUc4u/Zl6KEmPmJT+Wg6nzZKnXHLf3HtV8/Iqp0xodDgBA4AAABA4AgFMWf8HNLAeLq/Pu3wc6CxwWf0EZloPF13kFEEu9oD9eUgEABA4AQOAAADjV3OKvmktRLAebs05rci2tstTL7bSXOqPy+BWmwwEACBwAgMABAHDK4i+YiKVeQPOBw+Iv6J+lXsBdvKQCAAgcAIDAAQBw6hE7oNXSDMeyLKff9MzLVSz1gjFYDtaO1pZ6bdvW3bCTDgcAIHAAAAIHAEC+wGHxFwBQPHA8h0NDHwEALgcOAACBAwAQOACAeX30+E3XXK7S43KwmZcFWQ5GLyz18rhzpU6PdDgAAIEDABA4AADyBQ6LvwCA4oHD4i8AoHjgAAAQOAAAgQMAmNfjc+gz7uDnrMZzQPToY2s/2Lqupz9Yj0u9arIcjNlYmne9zqhqLvXa9/0x4mWowwEACBwAgMABAJAvcFj8BQAUDxwWfwEAxQMHAIDAAQAIHADAvD5G/cFqLmkZdTmYJUh16uD63EsdjxceL67Q4QAABA4AQOAAAMgXOCz+AgCKBw6LvwCA4oEDAEDgAAAEDgBgXo/Poc+4g5+zGs8B0aOPPf7wy7Kc/vCWvVxnmVI7dVrj36udOqNqbanXtm2PWf8tdDgAAIEDABA4AADyBQ6LvwCA4oHD4i8AoHjgAAAQOAAAgQMAmNfHzD98zWUvMy8Hs5RJHXXurTOq1u6fY+rMTIcDABA4AACBAwAgX+Cw+AsAKB44LP4CAIoHDgAAgQMAEDgAgHk9Poc+4w5+zmo8B0SPPo56Aa3renoBWQ5Wh+VO6qgzjx6Xeu37/hArjulwAAACBwAgcAAA5AscFn8BAMUDh8VfAEDxwAEAIHAAAAIHADAvi78yqLkcjDBLotQZqQ517lct9apDhwMAEDgAAIEDACBf4LD4CwAoHjgs/gIAigcOAACBAwAQOACAeX24CK6ruXzGcrAwy6bU6aUO7ldno8MBAAgcAIDAAQCQL3BY/AUAFA8cFn8BAMUDBwCAwAEACBwAwLwen0OfcQc/ZzWeA6JHH12UYcuynF7QltiMx/KrvupQR2tLvbZte/hXKU+HAwAQOAAAgQMAIF/gsPgLACgeOCz+AgCKBw4AAIEDABA4AIB5WfzVEMvBuMIyLq5obRmXpV7j0eEAAAQOAEDgAADIFzgs/gIAigcOi78AgOKBAwBA4AAABA4AYF4Wf3WmteVgloxB+yz1ogU6HACAwAEACBwAAPkCh8VfAEDxwGHxFwBQPHAAAAgcAIDAAQDMy+KvSa3revoPbzkYtK/HpV77vlvYNSEdDgBA4AAABA4AgHyBw+IvAKB44LD4CwAoHjgAAAQOAEDgAADmZfEXhywHg/f0uIzLUi9K0+EAAAQOAEDgAADIFzgs/gIAigcOi78AgOKBAwBA4AAABA4AYF4Wf1HcsiynV7IelyAxp1GXem3bZmEXRelwAAACBwAgcAAA5AscFn8R8uM+FvtZAHgrcFj8RUwgPfocAIEDAEDgAAAEDgCAIIu/6Ma6rqdX1lGXMqmjzpF93y3sogs6HACAwAEACBwAAPkCh8VfhMQs/sp1BoCBA4fFX8QE0qPPc54BYODAAQAgcAAAAgcAMC+Lv5jOsiynV3rLptQpXWfbNgu7mIoOBwAgcAAAAgcAQL7AYfEXITUXf1kgBjBw4LD4i5hAevR5i2cAaDBwAAAIHACAwAEAzMviL7jZuq6nN0JLtK7X2ffdoi24kQ4HACBwAAACBwBAvsBh8RchPS7+sogMoMHAYfEXMYH06HNnLCIDBA4AAIEDABA4AACCLP4CAIrT4QAABA4AQOAAAMgXOCz+IsRSL2eunAEmeJwwNAoANNPhAAAQOAAAgQMAEDgAAAQOAEDgAAAQOACADgKHxV+EWGzlzJUzwASPExZ/AQDNdDgAAAQOAEDgAAAEDgAAgQMAEDgAAAQOAKCDwGHxFyEWWzlz5QwwweOExV8AQDMdDgAAgQMAEDgAgHn9F+hwuXkWkQyCAAAAAElFTkSuQmCC'
		},
		911: function (A, e, r) {
			var t = { react: r(1) },
				a = r(912).default.bind(null, t)
			r(913).default.bind(
				null,
				"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);",
				a
			)
			A.exports = [
				{
					type: 'markdown',
					content:
						'Esta documentación corresponde a la aplicación web de un proyecto de Risk de la asignatura Proyecto Software. Se pueden consultar los repositorios en https://github.com/UNIZAR-30226-2021-01.',
				},
			]
		},
		914: function (A, e, r) {
			'use strict'
			r.r(e)
			r(1)
			var t = r(4),
				a = (r(935), r(2))
			e.default = function Footer() {
				return Object(a.jsxs)(t.l, {
					fixed: 'bottom',
					className: 'font-small pt-3 footer',
					children: [
						Object(a.jsx)(t.g, {
							fluid: !0,
							className: 'text-center',
							children: Object(a.jsx)('h5', {
								className: 'title',
								children: 'Proyecto software - Risk multiplataforma',
							}),
						}),
						Object(a.jsx)('div', {
							className: 'footer-copyright text-center py-2',
							children: Object(a.jsxs)(t.g, {
								fluid: !0,
								children: [
									'© ',
									new Date().getFullYear(),
									' Copyright:',
									' ',
									Object(a.jsxs)('a', {
										href: 'https://github.com/UNIZAR-30226-2021-01',
										children: [' ', 'Grupo 1: Grace Hopper', ' '],
									}),
								],
							}),
						}),
					],
				})
			}
		},
		92: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'obtenerCentro', function () {
					return a
				}),
				r.d(e, 'obtenerIdUbicacion', function () {
					return n
				}),
				r.d(e, 'obtenerNombreUbicacion', function () {
					return c
				}),
				r.d(e, 'destinosMovimientos', function () {
					return o
				})
			var t = r(311),
				a = function obtenerCentro(A) {
					for (
						var e = new t.a(A.path), r = { x: 0, y: 0 }, a = 0;
						a < e.getTotalLength();
						a++
					)
						(r.x = r.x + e.getPointAtLength(a).x),
							(r.y = r.y + e.getPointAtLength(a).y)
					return (
						(r.x = r.x / e.getTotalLength()),
						(r.y = r.y / e.getTotalLength()),
						r
					)
				},
				n = function obtenerIdUbicacion(A) {
					return A.target.attributes.id.value
				},
				c = function obtenerNombreUbicacion(A) {
					return A.target.attributes.name.value
				},
				o = function destinosMovimientos(A, e, r) {
					for (
						var t = [A],
							a = [],
							n = function _loop() {
								var A = r[t.pop()]
								a.push(parseInt(A.id)),
									A.conexiones.forEach(function (r) {
										a.includes(r) ||
											t.includes(r) ||
											(e[r].jugador === e[parseInt(A.id)].jugador && t.push(r))
									})
							};
						0 !== t.length;

					)
						n()
					return a
				}
		},
		935: function (A, e, r) {},
		937: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Footer',
				description:
					'Pie de página de la aplicación, muestra el copyright, el\nnombre del grupo y un enlace a el github de la organización.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		938: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'Head', function () {
					return n
				})
			r(1)
			var t = r(229),
				a = r(2),
				n = function Head() {
					return Object(a.jsx)(t.b, {
						children: Object(a.jsxs)(t.a, {
							children: [
								Object(a.jsx)('meta', { charSet: 'UTF-8' }),
								Object(a.jsx)('meta', {
									httpEquiv: 'X-UA-Compatible',
									content: 'IE=edge',
								}),
								Object(a.jsx)('meta', {
									name: 'viewport',
									content: 'width=device-width, initial-scale=1.0',
								}),
								Object(a.jsx)('title', { children: 'Risk' }),
								Object(a.jsx)('meta', {
									name: 'keywords',
									content: 'HTML,CSS,JavaScript,Risk',
								}),
								Object(a.jsx)('meta', {
									name: 'description',
									content: 'Juego risk online multiplataforma',
								}),
							],
						}),
					})
				}
			e.default = n
		},
		939: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Head',
				description:
					'Contiene lo correspondiente a la cabecera html de la aplicación, incluye\nel título de la aplicación y otros metadatos.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		940: function (A, e, r) {},
		941: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Header',
				description:
					'Header contiene el encabezado de la aplicación y permite consultar\nlas reglas.\nSi se tiene la sesión iniciada permite visitar la tienda, consultar tus\nriskos, actualizar tu perfil y cerrar sesión\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		942: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'MenuOpts', function () {
					return a
				})
			r(1), r(943)
			var t = r(2),
				a = function MenuOpts() {
					return Object(t.jsxs)('div', {
						id: 'optbar',
						children: [
							Object(t.jsx)('div', {
								id: 'opc-ajustes',
								className: 'optbar-item',
								children: Object(t.jsx)('img', {
									src: 'https://img.icons8.com/color/452/avatar.png',
									alt: 'avatar',
								}),
							}),
							Object(t.jsx)('div', {
								id: 'opc-notificaciones',
								className: 'optbar-item',
								children: Object(t.jsx)('img', {
									src: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png',
									alt: 'Icono notificaciones',
								}),
							}),
							Object(t.jsx)('div', {
								id: 'opc-amigos',
								className: 'optbar-item',
								children: Object(t.jsx)('img', {
									src: 'https://cdn0.iconfinder.com/data/icons/facebook-ui-glyph/48/Sed-02-512.png',
									alt: 'Icono amigos',
								}),
							}),
						],
					})
				}
			e.default = a
		},
		943: function (A, e, r) {},
		944: function (A, e, r) {
			A.exports = {
				doclets: { deprecated: 'No usado tras la migración a bootstrap' },
				displayName: 'MenuOpts',
				description: 'Opciones del usuario para la cabecera\n',
				methods: [],
				tags: {
					deprecated: [
						{
							title: 'deprecated',
							description: 'No usado tras la migración a bootstrap',
						},
					],
				},
				props: [],
				examples: null,
			}
		},
		945: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'MenuPrincipal', function () {
					return o
				})
			r(1), r(946)
			var t = r(185),
				a = r(189),
				n = r(4),
				c = r(2),
				o = function MenuPrincipal() {
					return Object(c.jsx)(n.g, {
						children: Object(c.jsxs)(n.D, {
							children: [
								Object(c.jsx)(n.e, {
									md: '6',
									children: Object(c.jsx)(t.default, {}),
								}),
								Object(c.jsx)(n.e, {
									md: '6',
									children: Object(c.jsx)(a.default, {}),
								}),
							],
						}),
					})
				}
			e.default = o
		},
		946: function (A, e, r) {},
		948: function (A, e, r) {},
		951: function (A, e, r) {},
		952: function (A, e, r) {},
		953: function (A, e, r) {},
		954: function (A, e, r) {},
		955: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'MenuPrincipal',
				description:
					'Menú principal de la aplicación, muestra el menú de partidas\ny la ventana de amigos y notificaciones.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		956: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'TabAmigosNotificaciones',
				description:
					'Tabla en la que el usuario podrá consultar tanto la lista de sus\namigos como las notificaciones que haya recibido.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		957: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'FormCrearSala',
				description:
					'Formulario de creación de sala, contiene un campo para el nombre y\r\notro para el tiempo de turno.\n',
				methods: [],
				props: [
					{
						type: { name: 'func' },
						required: !1,
						description: '',
						tags: {
							param: [
								{
									title: 'param',
									description: null,
									type: { type: 'NameExpression', name: 'Datos_formulario' },
									name: 'formData',
								},
							],
						},
						name: 'enviarSolicitud',
					},
				],
				tags: {},
				examples: null,
			}
		},
		958: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'InvitarAmigo',
				description:
					'Componente que muestra un botón para enviar una invitación de partida\r\npor el websocket al amigo correspondiente.\n',
				methods: [],
				props: [
					{
						type: {
							name: 'shape',
							value: { id: { name: 'number', required: !1 } },
						},
						required: !1,
						description:
							'Datos del amigo, se necesita el id para poder invitarlo',
						tags: {},
						name: 'amigo',
					},
					{
						type: { name: 'any' },
						required: !1,
						description: 'Websocket',
						tags: {},
						name: 'ws',
					},
				],
				tags: {},
				examples: null,
			}
		},
		959: function (A, e, r) {},
		960: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Jugador',
				description:
					'Representación de un jugador para la lista de jugadores en\nuna partida.\n',
				methods: [],
				props: [
					{
						type: {
							name: 'shape',
							value: {
								icono: { name: 'number', required: !1 },
								aspecto: { name: 'number', required: !1 },
								nombre: { name: 'string', required: !1 },
							},
						},
						required: !1,
						description: '',
						tags: {},
						name: 'datos',
					},
				],
				tags: {},
				examples: null,
			}
		},
		961: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'ListaJugadoresPartida',
				description: 'Muestra la lista de jugadores en una partida\n',
				methods: [],
				props: [
					{
						type: { name: 'arrayOf', value: { name: 'any' } },
						required: !1,
						description: 'Lista de jugadores de la partida',
						tags: {},
						name: 'usuarios',
					},
				],
				tags: {},
				examples: null,
			}
		},
		962: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'Sala', function () {
					return m
				})
			var t = r(10),
				a = r(6),
				n = r.n(a),
				c = r(9),
				o = r(8),
				s = r(1),
				i = r(19),
				g = r(4),
				O = r(99),
				d = r(200),
				u = r(18),
				D = r(12),
				l = r(15),
				w = r(199),
				C = r(16),
				B = r(203),
				E = r(202),
				p = r(68),
				Q = r(23),
				h = (r(289), r(2)),
				j = {
					CreandoFormulario: 'Creando formulario',
					EsperandoRespuestaFormulario:
						'Esperando respuesta creación formulario',
					EsperandoInicio: 'Esperando inicio de partida',
				}
			function sleep(A) {
				return new Promise(function (e) {
					return setTimeout(e, A)
				})
			}
			var m = function Sala() {
				var A = Object(s.useContext)(D.default),
					e = Object(i.d)(),
					r = Object(i.e)().id,
					a = Object(s.useRef)(j.CreandoFormulario),
					m = Object(s.useRef)(void 0),
					x = Object(s.useRef)(void 0),
					I = Object(s.useRef)(!1),
					M = Object(s.useState)('3'),
					H = Object(o.a)(M, 2),
					f = H[0],
					b = H[1],
					v = Object(s.useState)(!1),
					N = Object(o.a)(v, 2),
					F = N[0],
					z = N[1],
					G = Object(s.useState)(!1),
					Y = Object(o.a)(G, 2),
					P = Y[0],
					U = Y[1],
					y = Object(s.useState)(''),
					K = Object(o.a)(y, 2),
					T = K[0],
					Z = K[1],
					V = Object(s.useState)({
						tiempoTurno: 0,
						nombrePartida: '',
						idPartida: 0,
						jugadores: [],
					}),
					S = Object(o.a)(V, 2),
					L = S[0],
					q = S[1],
					R = Object(s.useState)([]),
					X = Object(o.a)(R, 2),
					k = X[0],
					W = X[1]
				Object(s.useEffect)(function () {
					var A
					'undefined' === r
						? ((x.current = 'crearSala'),
						  (A = setInterval(
								Object(c.a)(
									n.a.mark(function _callee() {
										return n.a.wrap(function _callee$(A) {
											for (;;)
												switch ((A.prev = A.next)) {
													case 0:
														J()
													case 1:
													case 'end':
														return A.stop()
												}
										}, _callee)
									})
								),
								Q.default.REFRESH_TIME
						  )),
						  J(),
						  U(!0),
						  b('1'),
						  (a.current = j.CreandoFormulario))
						: ((x.current = 'aceptarSala'),
						  U(!1),
						  b('2'),
						  (a.current = j.EsperandoInicio),
						  _()),
						console.log(x.current),
						console.log('id: ', r)
					var e = setInterval(function () {
						I.current && Object(p.ping)(m.current)
					}, Q.default.TIEMPO_PING)
					return function () {
						console.log(m.current, 'Desmontando ws'),
							'crearSala' === x.current && clearInterval(A),
							clearInterval(e),
							m.current &&
								m.current.readyState !== WebSocket.CLOSED &&
								m.current.close()
					}
				}, [])
				var J = (function () {
						var e = Object(c.a)(
							n.a.mark(function _callee2() {
								var e, r
								return n.a.wrap(function _callee2$(t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (
													(e = Object(l.obtenerCredenciales)(A)),
													(t.next = 3),
													Object(u.obtenerAmigos)(e)
												)
											case 3:
												;(r = t.sent), W(r.amigos)
											case 5:
											case 'end':
												return t.stop()
										}
								}, _callee2)
							})
						)
						return function fetchAmigos() {
							return e.apply(this, arguments)
						}
					})(),
					_ = function connect() {
						;(m.current = new WebSocket(
							''.concat(Q.default.BASER_WS_URL).concat(x.current)
						)),
							(m.current.onopen = function () {
								if (
									(console.log(m.current.readyState, 'Conectado'),
									z(!1),
									'undefined' !== r)
								) {
									var A = parseInt(r)
									eA(A)
								}
							}),
							(m.current.onclose = function () {
								z(!0), console.log('Socket cerrado.')
							}),
							(m.current.onerror = function (A) {
								console.error(
									'Socket encountered error: ',
									A.message,
									'Closing socket'
								),
									m.current.close()
							}),
							(m.current.onmessage = function (A) {
								var e = JSON.parse(A.data)
								if ((Z(''), 'e' === e._tipoMensaje))
									Z(e.err),
										console.log(e, 'err'),
										a.current === j.EsperandoRespustaFormulario && b('1')
								else if ('d' === e._tipoMensaje)
									a.current === j.EsperandoRespuestaFormulario &&
										((a.current = j.EsperandoInicio), b('2')),
										delete e._tipoMensaje,
										q(e)
								else if ('p' === e._tipoMensaje) {
									if (a.current !== j.EsperandoInicio)
										throw 'No se debe dar este caso.'
									$(e.idPartida)
								}
							})
					},
					$ = function entrarPartida(A) {
						var r = '/partida/'.concat(A)
						e.push(r)
					},
					AA = (function () {
						var e = Object(c.a)(
							n.a.mark(function _callee3(e) {
								var r
								return n.a.wrap(function _callee3$(n) {
									for (;;)
										switch ((n.prev = n.next)) {
											case 0:
												_(), (r = 0)
											case 2:
												if (Object(p.socketAbierto)(m.current) || !(r < 100)) {
													n.next = 8
													break
												}
												return (n.next = 5), sleep(100)
											case 5:
												r++, (n.next = 2)
												break
											case 8:
												r >= 100
													? (console.log('Reintentos excedidos'), z(!0))
													: (q(
															Object(t.a)(
																Object(t.a)({}, L),
																{},
																{
																	tiempoTurno: e.tiempoTurno,
																	nombreSala: e.nombreSala,
																}
															)
													  ),
													  (a.current = j.EsperandoRespuestaFormulario),
													  console.log(a, 'plz'),
													  Object(p.crearSala)(A, m.current, e),
													  (I.current = !0))
											case 9:
											case 'end':
												return n.stop()
										}
								}, _callee3)
							})
						)
						return function crearSalaLocal(A) {
							return e.apply(this, arguments)
						}
					})(),
					eA = function aceptarSalaLocal(e) {
						Object(p.socketAbierto)(m.current)
							? Object(p.aceptarSala)(A, m.current, e)
							: console.log(m.current.readyState, 'Estado del socket')
					}
				return Object(h.jsxs)(g.g, {
					children: [
						'2' === f && Object(h.jsx)(C.ErroresServer, { serverErrors: T }),
						Object(h.jsxs)(g.q, {
							isOpen: F,
							toggle: function toggle() {
								z(!1)
							},
							children: [
								Object(h.jsx)(g.r, {
									className: 'd-flex justify-content-between',
									children: Object(h.jsx)(C.ErroresServer, { serverErrors: T }),
								}),
								Object(h.jsx)(g.s, {
									children: Object(h.jsx)(g.d, {
										onClick: function onClick() {
											e.push('/')
										},
										children: 'Volver al menú principal',
									}),
								}),
							],
						}),
						Object(h.jsxs)(g.E, {
							activeItem: f,
							children: [
								Object(h.jsx)(g.F, {
									tabId: '1',
									children: Object(h.jsx)(w.FormCrearSala, {
										enviarSolicitud: AA,
									}),
								}),
								Object(h.jsxs)(g.F, {
									tabId: '2',
									children: [
										Object(h.jsx)(B.default, { datos: L }),
										Object(h.jsxs)(g.D, {
											children: [
												Object(h.jsxs)(g.e, {
													className: 'p-1 mt-1',
													children: [
														Object(h.jsx)('h2', {
															className: 'text-center',
															children: 'Jugadores',
														}),
														Object(h.jsx)(E.default, { usuarios: L.jugadores }),
													],
												}),
												P &&
													Object(h.jsxs)(g.e, {
														className: 'p-1 mt-1',
														children: [
															Object(h.jsx)('h2', {
																className: 'text-center',
																children: 'Amigos',
															}),
															Object(h.jsx)(O.default, {
																usuarios: k,
																elemento: Object(h.jsx)(d.default, {
																	ws: m.current,
																}),
															}),
														],
													}),
											],
										}),
										P &&
											Object(h.jsx)(g.D, {
												className: 'd-flex justify-content-center',
												children: Object(h.jsx)(g.d, {
													onClick: function comenzarPartida() {
														;(a.current = j.EsperandoInicio),
															m.current.send(
																JSON.stringify({ tipo: 'Iniciar' })
															)
													},
													className: 'mt-1',
													children: 'Comenzar partida',
												}),
											}),
									],
								}),
								Object(h.jsx)(g.F, {
									tabId: '3',
									children: Object(h.jsx)('p', { children: ' Cargando ' }),
								}),
							],
						}),
					],
				})
			}
			e.default = m
		},
		963: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Sala',
				description:
					'Lógica y vista de una sala, gestiona la creación de la sala y\nla vista de esta hasta que comienza la partida.\nContiene un estado que indica si se está creando o si se está dentro\nde esta.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		964: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'SalaEncabezado',
				description:
					'Encabezado de una sala de partida, muestra el nombre de la sala, el tiempo de\r\nturno y el número de jugadores actuales\n',
				methods: [],
				props: [
					{
						type: {
							name: 'shape',
							value: {
								nombrePartida: { name: 'string', required: !1 },
								tiempoTurno: { name: 'number', required: !1 },
								jugadores: {
									name: 'arrayOf',
									value: { name: 'any' },
									required: !1,
								},
							},
						},
						required: !1,
						description:
							'Nombre de la partida\r\nTiempo de turno en minutos\r\nLista de jugadores para su longitud',
						tags: {},
						name: 'datos',
					},
				],
				tags: {},
				examples: null,
			}
		},
		965: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Amigo',
				description:
					'Representación de un amigo en la lista de amigos, muestra a su derecha el\ncomponente pasado como parámetro.\n',
				methods: [],
				props: [
					{
						type: {
							name: 'shape',
							value: {
								icono: { name: 'number', required: !1 },
								nombre: { name: 'string', required: !1 },
							},
						},
						required: !1,
						description: '',
						tags: {},
						name: 'datos',
					},
					{
						type: { name: 'element' },
						required: !1,
						description: '',
						tags: {},
						name: 'elemento',
					},
				],
				tags: {},
				examples: null,
			}
		},
		966: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'AnyadirAmigo',
				description:
					'Implementa un pop-up para añadir un amigo, este pop-up contiene\nun formulario donde insertar el nombre del amigo.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		967: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'EliminarAmigo',
				description:
					'Botón que se utilizará en la lista de amigos junto al componente\n"Amigo" y que permitirá la eliminación del mismo haciendo uso\nde la API del servidor de juego\n',
				methods: [],
				props: [
					{
						type: {
							name: 'shape',
							value: {
								nombre: { name: 'string', required: !1 },
								id: { name: 'number', required: !1 },
							},
						},
						required: !1,
						description: 'Datos del amigo a eliminar',
						tags: {},
						name: 'amigo',
					},
				],
				tags: {},
				examples: null,
			}
		},
		968: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'FormAnyadirAmigo',
				description:
					'Formulario para añadir un amigo mediante su nombre de usuario.\n',
				methods: [],
				props: [
					{
						type: { name: 'func' },
						required: !1,
						description: 'Función para enviar la solicitud',
						tags: {
							param: [
								{
									title: 'param',
									description: null,
									type: { type: 'NameExpression', name: 'datos_formulario' },
									name: 'formData',
								},
							],
						},
						name: 'enviarSolicitud',
					},
				],
				tags: {},
				examples: null,
			}
		},
		969: function (A, e, r) {
			A.exports = {
				doclets: {
					param:
						'{lista_de_usuarios} usuarios Amigos del usuario de la aplicación',
				},
				displayName: 'ListaAmigos',
				description:
					'Muestra la lista de amigos recibida como parámetro y da la opción de\nañadir un amigo.\n',
				methods: [],
				props: [
					{
						type: { name: 'element' },
						required: !1,
						description: '',
						tags: {},
						name: 'elemento',
					},
					{
						type: { name: 'bool' },
						required: !1,
						description: '',
						defaultValue: { value: 'true', computed: !1 },
						tags: {},
						name: 'mostrarAnyadir',
					},
					{
						type: {
							name: 'arrayOf',
							value: {
								name: 'shape',
								value: { id: { name: 'number', required: !1 } },
							},
						},
						required: !1,
						description: '',
						tags: {},
						name: 'usuarios',
					},
				],
				tags: {
					param: [
						{
							title: 'param',
							description: 'Amigos del usuario de la aplicación',
							type: { type: 'NameExpression', name: 'lista_de_usuarios' },
							name: 'usuarios',
						},
					],
				},
				examples: null,
			}
		},
		970: function (A, e, r) {
			A.exports = {
				doclets: { param: '{lista_de_notificaciones} notificaciones' },
				displayName: 'ListaNotificaciones',
				description:
					'Muestra la lista de notificaciones recibida como parámetro.\n',
				methods: [],
				props: [
					{
						type: {
							name: 'arrayOf',
							value: {
								name: 'shape',
								value: { idEnvio: { name: 'number', required: !1 } },
							},
						},
						required: !1,
						description:
							'Notificaciones del usuario de la aplicación recibidas como JSON a\ntravés de la API del servidor de juego.',
						tags: {},
						name: 'notificaciones',
					},
				],
				tags: {
					param: [
						{
							title: 'param',
							description: null,
							type: { type: 'NameExpression', name: 'lista_de_notificaciones' },
							name: 'notificaciones',
						},
					],
				},
				examples: null,
			}
		},
		971: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'NotificacionAmistad',
				description:
					'Representación de una notificación de petición de amistad en la\nlista de notificaciones.\n',
				methods: [],
				props: [
					{
						type: {
							name: 'shape',
							value: {
								infoExtra: { name: 'string', required: !1 },
								idEnvio: { name: 'number', required: !1 },
							},
						},
						required: !1,
						description:
							'Datos con una cadena de información y el id\nde la sala a la que unirse.',
						tags: {},
						name: 'datos',
					},
				],
				tags: {},
				examples: null,
			}
		},
		972: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'NotificacionSala',
				description:
					'Representación de una notificación de invitación a partida\nen la lista de notificaciones.\n',
				methods: [],
				props: [
					{
						type: {
							name: 'shape',
							value: { idEnvio: { name: 'number', required: !1 } },
						},
						required: !1,
						description: '',
						tags: {},
						name: 'datos',
					},
				],
				tags: {},
				examples: null,
			}
		},
		973: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'NotificacionTurno',
				description:
					'Representación de una notificación de invitación a partida\nen la lista de notificaciones.\n',
				methods: [],
				props: [
					{
						type: {
							name: 'shape',
							value: {
								infoExtra: { name: 'string', required: !1 },
								idEnvio: { name: 'number', required: !1 },
							},
						},
						required: !1,
						description: '',
						tags: {},
						name: 'datos',
					},
				],
				tags: {},
				examples: null,
			}
		},
		974: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'ListaPartidas',
				description:
					'Muestra la lista de partidas recibida como parámetro\ny un botón para crear sala.\n',
				methods: [],
				props: [
					{
						type: {
							name: 'arrayOf',
							value: {
								name: 'shape',
								value: { id: { name: 'number', required: !1 } },
							},
						},
						required: !1,
						description: 'Lista de partidas a mostrar',
						tags: {},
						name: 'partidas',
					},
				],
				tags: {},
				examples: null,
			}
		},
		975: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'MenuSalas',
				description:
					'Muestra el menú de salas de la aplicación y la lista\nde partidas.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		976: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'PartidaMini',
				description:
					'Representación de una partida en la lista de partidas,\ndando la opción de unirse.\n',
				methods: [],
				props: [
					{
						type: {
							name: 'shape',
							value: {
								id: { name: 'number', required: !1 },
								nombre: { name: 'string', required: !1 },
								nombreTurnoActual: { name: 'string', required: !1 },
							},
						},
						required: !1,
						description:
							'Id de la partida, nombre de la partida y nombre\ndel jugador del turno actual.',
						tags: {},
						name: 'datosPartida',
					},
				],
				tags: {},
				examples: null,
			}
		},
		977: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Temporizador',
				description: '',
				methods: [],
				props: [],
				examples: null,
			}
		},
		978: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Aspecto',
				description: '',
				methods: [],
				props: [],
				examples: null,
			}
		},
		979: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Cargando',
				description: 'Símbolo de cargando girando.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		98: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'calcularSegundosRestantes', function () {
					return t
				})
			var t = function calcularSegundosRestantes(A, e) {
				var r = 60 * e,
					t = new Date(A),
					a = (new Date().getTime() - t.getTime()) / 1e3
				return Math.max(r - a, 0)
			}
		},
		980: function (A, e, r) {},
		981: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'FasesPartida',
				description: '',
				methods: [],
				props: [],
				examples: null,
			}
		},
		982: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'JugadorPartida',
				description: '',
				methods: [],
				props: [],
				examples: null,
			}
		},
		983: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Linea',
				description: '',
				methods: [],
				props: [],
				examples: null,
			}
		},
		984: function (A, e, r) {},
		985: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'ListaJugadores',
				description: '',
				methods: [],
				props: [],
				examples: null,
			}
		},
		986: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'ModalFinPartida',
				description:
					'Modal de fin de partida, enseña los riskos obtenidos si eres\r\nel ganador de la partida y siempre una cita de Sun Tzu.\n',
				methods: [],
				props: [
					{
						type: { name: 'string' },
						required: !1,
						description: 'Nombre del ganador.',
						defaultValue: { value: "''", computed: !1 },
						tags: {},
						name: 'ganador',
					},
					{
						type: { name: 'bool' },
						required: !1,
						description: 'Determina si está abierto o no el modal.',
						tags: {},
						name: 'isOpen',
					},
					{
						type: { name: 'number' },
						required: !1,
						description: 'Riskos obtenidos por el ganador.',
						defaultValue: { value: '0', computed: !1 },
						tags: {},
						name: 'riskos',
					},
				],
				tags: {},
				examples: null,
			}
		},
		987: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'ModalFormNumeroTropas',
				description:
					'Modal que representa el número de tropas a enviar a un territorio,\r\nya sea de un refuerzo, ataque o movimiento.\n',
				methods: [],
				props: [
					{
						type: { name: 'string' },
						required: !1,
						description: '',
						tags: {},
						name: 'estado',
					},
					{
						type: { name: 'bool' },
						required: !1,
						description: '',
						tags: {},
						name: 'isOpen',
					},
					{
						type: { name: 'arrayOf', value: { name: 'shape', value: {} } },
						required: !1,
						description: '',
						tags: {},
						name: 'locations',
					},
					{
						type: { name: 'number' },
						required: !1,
						description: '',
						tags: {},
						name: 'max',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: '',
						tags: {},
						name: 'onSubmit',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: '',
						tags: {},
						name: 'toggle',
					},
				],
				tags: {},
				examples: null,
			}
		},
		988: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'ModalReconectando',
				description:
					'Modal que indica que te has desconectado y has de recargar.\r\nUsado cuando hay un error grave o se ha caído la conexión.\n',
				methods: [],
				props: [
					{
						type: { name: 'string' },
						required: !1,
						description: 'Mensaje de error ha mostrar',
						tags: {},
						name: 'error',
					},
					{
						type: { name: 'bool' },
						required: !1,
						description: 'Determina si el modal está abierto o no.',
						tags: {},
						name: 'isOpen',
					},
				],
				tags: {},
				examples: null,
			}
		},
		989: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'NumTropas',
				description: '',
				methods: [],
				props: [],
				examples: null,
			}
		},
		99: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'ListaAmigos', function () {
					return i
				})
			var t = r(10),
				a = r(144),
				n = (r(1), r(190)),
				c = r(191),
				o = r(4),
				s = (r(952), r(2)),
				i = function ListaAmigos(A) {
					var e = A.usuarios,
						r = A.elemento,
						i = A.mostrarAnyadir,
						g = void 0 === i || i,
						O = Object(a.a)(A, ['usuarios', 'elemento', 'mostrarAnyadir'])
					return Object(s.jsxs)(o.g, {
						className: 'mt-3 fondo-lista-amigos',
						children: [
							Object(s.jsx)(o.o, {
								className: 'lista-amigos',
								children: e.map(function (A) {
									return Object(s.jsx)(
										o.p,
										{
											children: Object(s.jsx)(
												n.default,
												Object(t.a)({ datos: A, elemento: r }, O)
											),
										},
										A.id.toString()
									)
								}),
							}),
							g && Object(s.jsx)(c.default, {}),
						],
					})
				}
			e.default = i
		},
		990: function (A, e, r) {},
		991: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'PanelDados',
				description: '',
				methods: [],
				props: [],
				examples: null,
			}
		},
		992: function (A, e, r) {},
		993: function (A, e, r) {},
		994: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Partida',
				description:
					'Implementa una partida de Risk, muestra los jugadores que están en ella\r\ny el turno del actual, el estado dentro del turno actual, si se\r\nestá reforzando, atacando o moviendo.\r\nRespecto a la información mostrada de la última jugada, si es un ataque\r\nse mostrarán los resultados de las tiradas de los dados y los\r\nterritorios afectados.\r\nEn el mapa se mostrará la información de quién es cada territorio,\r\nmediante colores en cada territorio, y el número de tropas en cada uno\r\nde estos. Los territorios afectados por la última jugada tienen su color\r\nalterado y aquellos por la jugada actual también pero de otra manera.\n',
				methods: [],
				tags: {},
				props: [],
				examples: null,
			}
		},
		995: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'PartidaEstados',
				methods: [],
				props: [],
				examples: null,
			}
		},
		996: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'SVGMap',
				description: '',
				methods: [],
				props: [
					{
						type: {
							name: 'shape',
							value: {
								viewBox: { name: 'string', required: !0 },
								locations: {
									name: 'arrayOf',
									value: {
										name: 'shape',
										value: {
											path: { name: 'string', required: !0 },
											id: { name: 'string', required: !0 },
											name: { name: 'string', required: !1 },
										},
									},
									required: !0,
								},
								label: { name: 'string', required: !1 },
							},
						},
						required: !0,
						description: '',
						tags: {},
						name: 'map',
					},
					{
						type: { name: 'node' },
						required: !1,
						description: '',
						tags: {},
						name: 'childrenAfter',
					},
					{
						type: { name: 'node' },
						required: !1,
						description: '',
						tags: {},
						name: 'childrenBefore',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: '',
						defaultValue: { value: "'svg-map'", computed: !1 },
						tags: {},
						name: 'className',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: '',
						tags: {},
						name: 'isLocationSelected',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: '',
						tags: {},
						name: 'locationAriaLabel',
					},
					{
						type: {
							name: 'union',
							value: [{ name: 'string' }, { name: 'func' }],
						},
						required: !1,
						description: '',
						defaultValue: { value: "'svg-map__location'", computed: !1 },
						tags: {},
						name: 'locationClassName',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: '',
						defaultValue: { value: "'none'", computed: !1 },
						tags: {},
						name: 'locationRole',
					},
					{
						type: {
							name: 'union',
							value: [{ name: 'string' }, { name: 'func' }],
						},
						required: !1,
						description: '',
						defaultValue: { value: "'0'", computed: !1 },
						tags: {},
						name: 'locationTabIndex',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: '',
						tags: {},
						name: 'onLocationBlur',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: '',
						tags: {},
						name: 'onLocationClick',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: '',
						tags: {},
						name: 'onLocationFocus',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: '',
						tags: {},
						name: 'onLocationKeyDown',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: '',
						tags: {},
						name: 'onLocationMouseMove',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: '',
						tags: {},
						name: 'onLocationMouseOut',
					},
					{
						type: { name: 'func' },
						required: !1,
						description: '',
						tags: {},
						name: 'onLocationMouseOver',
					},
					{
						type: { name: 'string' },
						required: !1,
						description: '',
						defaultValue: { value: "'none'", computed: !1 },
						tags: {},
						name: 'role',
					},
				],
				examples: null,
			}
		},
		997: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'SVGTerritorio',
				description: '',
				methods: [],
				props: [],
				examples: null,
			}
		},
		998: function (A, e, r) {
			A.exports = {
				doclets: {},
				displayName: 'Temporizador',
				description:
					'Muestra el tiempo restante dados el tiempo de inicio del turno\r\ny el tiempo del turno.\n',
				methods: [],
				props: [
					{
						type: { name: 'string' },
						required: !1,
						description:
							'Instante de tiempo en el que se inició el turno en ISO 8601.',
						tags: {},
						name: 'tiempoInicio',
					},
					{
						type: { name: 'number' },
						required: !1,
						description: 'Duración del turno.',
						tags: {},
						name: 'tiempoTurno',
					},
				],
				tags: {},
				examples: null,
			}
		},
		999: function (A, e, r) {
			'use strict'
			r.r(e),
				r.d(e, 'Reglas', function () {
					return n
				})
			r(1)
			var t = r(4),
				a = (r(1e3), r(2)),
				n = function Reglas() {
					return Object(a.jsxs)(t.g, {
						className: 'container-reglas',
						children: [
							Object(a.jsx)(t.D, {
								children: Object(a.jsx)('h1', { children: 'Reglas pixelRISK' }),
							}),
							Object(a.jsx)('h3', {
								className: 'font-weight-bold mb-12 p-12',
								children: Object(a.jsx)('strong', {
									children: 'Introducción:',
								}),
							}),
							Object(a.jsx)('p', {
								className: 'text-left',
								children:
									'En este juego participan entre 3 y 6 jugadores en un mapa global con el objetivo de conquistar el mundo entero usando tropas para atacar y defender territorios.',
							}),
							Object(a.jsx)('p', {
								children:
									'Cada jugador tiene su turno, el cual está separado en fases:',
							}),
							Object(a.jsx)('h2', {
								children: Object(a.jsx)('strong', { children: 'Fase 1: ' }),
							}),
							Object(a.jsx)('p', {
								children:
									'Obtienes un numero de tropas nuevas dependiendo de los territorios que tengas conquistados. Estas tropas se deben repartir como refuerzos en territorios en los que ya tengas tropas.',
							}),
							Object(a.jsx)('h2', {
								children: Object(a.jsx)('strong', { children: 'Fase 2: ' }),
							}),
							Object(a.jsx)('p', {
								children:
									'Ataca desde un territorio tuyo con un número específico de tropas a un territorio enemigo tantas veces como quieras. No puedes atacar desde un territorio que sólo tenga una tropa.',
							}),
							Object(a.jsx)('h2', {
								children: Object(a.jsx)('strong', { children: 'Fase 3: ' }),
							}),
							Object(a.jsx)('p', {
								children:
									'Una única vez, mueve un número cualquiera de tropas desde un territorio controlado por tí a otro territorio de tu propiedad.',
							}),
						],
					})
				}
			e.default = n
		},
	},
	[[314, 1, 2]],
])
