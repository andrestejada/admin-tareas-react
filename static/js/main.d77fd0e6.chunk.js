(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{42:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(16),o=a.n(n),s=(a(42),a(13)),i=a(2),l=a(6),u=a(15),b=Object(r.createContext)(),j=Object(r.createContext)(),p=a(0),d=function(e){var t=Object(r.useContext)(b),a=t.alerta,c=t.mostrarAlerta,n=Object(r.useContext)(j),o=n.autenticado,d=n.mensaje,m=n.iniciarSesion;Object(r.useEffect)((function(){o&&e.history.push("/proyectos"),d&&c(d.msg,d.categoria)}),[o,d,e.history]);var O=Object(r.useState)({email:"",password:""}),f=Object(l.a)(O,2),h=f[0],x=f[1],y=h.email,v=h.password,g=function(e){x(Object(i.a)(Object(i.a)({},h),{},Object(s.a)({},e.target.name,e.target.value)))};return Object(p.jsxs)("div",{className:"form-usuario",children:[a?Object(p.jsx)("div",{className:"alerta ".concat(a.categoria),children:a.msg}):null,Object(p.jsxs)("div",{className:"contenedor-form sombra-drark",children:[Object(p.jsx)("h1",{children:"Iniciar Secci\xf3n"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==v.trim()?m({email:y,password:v}):c("Todos los campos son obligatorios","alerta-error")},children:[Object(p.jsxs)("div",{className:"campo-form",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Tu Email",onChange:g,value:y})]}),Object(p.jsxs)("div",{className:"campo-form",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Tu Password",onChange:g,value:v})]}),Object(p.jsx)("div",{className:"campo-form",children:Object(p.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Iniciar Secci\xf3n"})})]}),Object(p.jsx)(u.b,{to:"/nuevacuenta",className:"enlace-cuenta",children:"Crear una cuenta"})]})]})},m=function(e){var t=Object(r.useContext)(b),a=t.alerta,c=t.mostrarAlerta,n=Object(r.useContext)(j),o=n.registartUsuarios,d=n.autenticado,m=n.mensaje;Object(r.useEffect)((function(){d&&e.history.push("/proyectos"),m&&c(m.msg,m.categoria)}),[d,m,e.history]);var O=Object(r.useState)({nombre:"",email:"",password:"",confirmar:""}),f=Object(l.a)(O,2),h=f[0],x=f[1],y=h.nombre,v=h.email,g=h.password,N=h.confirmar,R=function(e){x(Object(i.a)(Object(i.a)({},h),{},Object(s.a)({},e.target.name,e.target.value)))};return Object(p.jsxs)("div",{className:"form-usuario",children:[a?Object(p.jsx)("div",{className:"alerta ".concat(a.categoria),children:a.msg}):null,Object(p.jsxs)("div",{className:"contenedor-form sombra-drark",children:[Object(p.jsx)("h1",{children:"Reg\xedstrate"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==v.trim()&&""!==g.trim()&&""!==N.trim()?g<6?c("El password es de minimo 6 caracteres","alerta-error"):g===N?o({nombre:y,email:v,password:g}):c("Los passwords no son iguales","alerta-error"):c("Todos los campos son obligatorios","alerta-error")},children:[Object(p.jsxs)("div",{className:"campo-form",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Nombre"}),Object(p.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Tu Nombre",onChange:R,value:y})]}),Object(p.jsxs)("div",{className:"campo-form",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Tu Email",onChange:R,value:v})]}),Object(p.jsxs)("div",{className:"campo-form",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Tu Password",onChange:R,value:g})]}),Object(p.jsxs)("div",{className:"campo-form",children:[Object(p.jsx)("label",{htmlFor:"confirmar",children:"Confirmar Password"}),Object(p.jsx)("input",{type:"password",id:"confirmar",name:"confirmar",placeholder:"Confirmar Password",onChange:R,value:N})]}),Object(p.jsx)("div",{className:"campo-form",children:Object(p.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Registrarse"})})]}),Object(p.jsx)(u.b,{to:"/admin-tareas-react",className:"enlace-cuenta",children:"Regresar a Iniciar Sesi\xf3n "})]})]})},O=Object(r.createContext)(),f=function(){var e=Object(r.useContext)(O),t=e.formulario,a=e.errorformulario,c=e.mostrarFormulario,n=e.agregarProyecto,o=e.mostrarError,u=Object(r.useState)({nombre:""}),b=Object(l.a)(u,2),j=b[0],d=b[1],m=j.nombre;return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)("button",{className:"btn btn-block btn-primario",type:"button",onClick:function(){c()},children:"Nuevo Proyecto"}),t?Object(p.jsxs)("form",{className:"formulario-nuevo-proyecto",onSubmit:function(e){e.preventDefault(),""!==m?(n(j),d({nombre:""})):o()},children:[Object(p.jsx)("input",{type:"text",name:"nombre",placeholder:"Nombre Proyecto",className:"input-text",onChange:function(e){d(Object(i.a)(Object(i.a)({},j),{},Object(s.a)({},e.target.name,e.target.value)))},value:m}),Object(p.jsx)("input",{type:"submit",className:"btn btn-block btn-primario",value:"Agregar Proyecto"})]}):null,a?Object(p.jsx)("p",{className:"mensaje error",children:"El Nombre del proyecto es obligatorio"}):null]})},h=Object(r.createContext)(),x=function(e){var t=e.proyecto,a=Object(r.useContext)(O).proyectoActual,c=Object(r.useContext)(h).obtenerTareas;return Object(p.jsx)("li",{children:Object(p.jsx)("button",{className:"btn btn-blank",type:"button",onClick:function(){return e=t._id,a(e),void c(e);var e},children:t.nombre})})},y=function(){var e=Object(r.useContext)(O),t=e.proyectos,a=e.obtenerProyectos,c=e.mensaje,n=Object(r.useContext)(b),o=n.mostrarAlerta,s=n.alerta;return Object(r.useEffect)((function(){c&&o(c.msg,c.categoria),a()}),[c]),0===t.length?Object(p.jsx)("p",{children:"No hay proyectos, Empieza creando Uno"}):Object(p.jsxs)("ul",{className:"listado-proyectos",children:[s?Object(p.jsx)("div",{className:"alerta ".concat(s.categoria),children:s.msg}):null,t.map((function(e){return Object(p.jsx)(x,{proyecto:e},e._id)}))]})},v=function(){return Object(p.jsxs)("aside",{children:[Object(p.jsxs)("h1",{children:["MERN ",Object(p.jsx)("span",{children:"Task"})," "]}),Object(p.jsx)(f,{}),Object(p.jsxs)("div",{className:"proyectos",children:[Object(p.jsx)("h2",{children:"Tus Proyectos"}),Object(p.jsx)(y,{})]})]})},g=function(){var e=Object(r.useContext)(j),t=e.usuario,a=e.usuarioAutenticado,c=e.cerrarSesion;return Object(r.useEffect)((function(){a()}),[]),Object(p.jsxs)("header",{className:"app-header",children:[t?Object(p.jsxs)("p",{className:"nombre-usuario",children:["Hola ",Object(p.jsx)("span",{children:t.nombre})," "]}):null,Object(p.jsx)("nav",{className:"nav-principal",children:Object(p.jsx)("button",{className:"btn btn-blank cerrar-sesion",onClick:function(){return c()},children:"Cerrar Sesi\xf3n"})})]})},N=function(){var e=Object(r.useContext)(O).proyecto,t=Object(r.useContext)(h),a=t.agregarTarea,c=t.errortarea,n=t.validarTarea,o=t.obtenerTareas,u=t.tareaseleccionada,b=t.actualizarTarea,j=t.limpiarTarea;Object(r.useEffect)((function(){x(null!==u?u:{nombre:""})}),[u]);var d=Object(r.useState)({nombre:""}),m=Object(l.a)(d,2),f=m[0],x=m[1],y=f.nombre;if(!e)return null;var v=Object(l.a)(e,1)[0];return Object(p.jsxs)("div",{className:"formulario",children:[Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()?(null===u?(f.proyecto=v._id,a(f)):(b(f),j()),o(v.id),x({nombre:""})):n()},children:[Object(p.jsx)("div",{className:"contenedor-input",children:Object(p.jsx)("input",{type:"text",className:"input-text",placeholder:"Nombre Tarea",name:"nombre",value:y,onChange:function(e){x(Object(i.a)(Object(i.a)({},f),{},Object(s.a)({},e.target.name,e.target.value)))}})}),Object(p.jsx)("div",{className:"contenedor-input",children:Object(p.jsx)("input",{type:"submit",className:"btn btn-block btn-primario btn-submit",value:u?"Editar Tarea":"Agregar Tarea"})})]}),c?Object(p.jsx)("p",{className:"error mensaje",children:"El nombre de la tarea es obligatorio"}):null]})},R=function(e){var t=e.tarea,a=Object(r.useContext)(O).proyecto,c=Object(r.useContext)(h),n=c.eliminarTarea,o=c.obtenerTareas,s=c.actualizarTarea,i=c.guardarTareaActual,u=Object(l.a)(a,1)[0],b=function(e){e.estado?e.estado=!1:e.estado=!0,s(e)};return Object(p.jsxs)("li",{className:"tarea sombra",children:[Object(p.jsx)("p",{children:t.nombre}),Object(p.jsx)("div",{className:"estado",children:t.estado?Object(p.jsx)("button",{className:"completo",type:"button",onClick:function(){return b(t)},children:"Completo"}):Object(p.jsx)("button",{className:"incompleto",type:"button",onClick:function(){return b(t)},children:"Incompleto"})}),Object(p.jsxs)("div",{className:"acciones",children:[Object(p.jsx)("button",{type:"button",className:"btn btn-primario",onClick:function(){return function(e){i(e)}(t)},children:"Editar"}),Object(p.jsx)("button",{type:"button",className:"btn btn-secundario",onClick:function(){return e=t._id,n(e,u._id),void o(u.id);var e},children:"Eliminar"})]})]})},T=a(71),C=a(70),E=function(){var e=Object(r.useContext)(O),t=e.proyecto,a=e.eliminarProyecto,c=Object(r.useContext)(h).tareasproyecto;if(!t)return Object(p.jsx)("h2",{children:"Seleccione Un Proyecto"});var n=Object(l.a)(t,1)[0];return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsxs)("h2",{children:["Proyecto: ",n.nombre," "]}),Object(p.jsxs)("ul",{className:"listado-tareas",children:[0===c.length?Object(p.jsx)("li",{className:"tarea",children:"No hay tareas"}):Object(p.jsx)(T.a,{children:c.map((function(e){return Object(p.jsx)(C.a,{timeout:200,classNames:"tarea",children:Object(p.jsx)(R,{tarea:e})},e._id)}))})," "]}),Object(p.jsx)("button",{type:"button",className:"btn btn-eliminar",onClick:function(){a(n._id)},children:"Eliminar Proyecto \xd7"})]})},A=function(){var e=Object(r.useContext)(j).usuarioAutenticado;return Object(r.useEffect)((function(){e()}),[]),Object(p.jsxs)("div",{className:"contenedor-app",children:[Object(p.jsx)(v,{}),Object(p.jsxs)("div",{className:"seccion-principal",children:[Object(p.jsx)(g,{}),Object(p.jsxs)("main",{children:[Object(p.jsx)(N,{}),Object(p.jsx)("div",{className:"contenedor-tareas",children:Object(p.jsx)(E,{})})]})]})]})},k=a(5),w=a(4),_=a.n(w),P=a(11),S=a(20),I="FORMULARIO_PROYECTO",L="OBTENER_PROYECTOS",F="AGREGAR_PROYECTO",U="VALIDAR_FORMULARIO",M="PROYECTO_ACTUAL",G="ELIMINAR_PROYECTO",D="PROYECTO_ERROR",Y="TAREA_PROYECTO",z="AGREGAR_TAREA",B="VALIDAR_TAREA",H="ELIMINAR_TAREA",J="TAREA_ACTUAL",V="ACTUALIZAR_TAREA",X="LIMPIAR_TAREA",Z="MOSTRAR_ALERTA",q="ELIMINAR_ALERTA",K="REGISTRO_EXITOSO",Q="REGISTRO_ERROR",W="OBTENER_USUARIO",$="LOGIN_EXITOSO",ee="LOGIN_ERROR",te="CERRAR_SESION",ae=function(e,t){switch(t.type){case I:return Object(i.a)(Object(i.a)({},e),{},{formulario:!0});case L:return Object(i.a)(Object(i.a)({},e),{},{proyectos:t.payload});case F:return Object(i.a)(Object(i.a)({},e),{},{proyectos:[].concat(Object(S.a)(e.proyectos),[t.payload]),formulario:!1,errorformulario:!1});case U:return Object(i.a)(Object(i.a)({},e),{},{errorformulario:!0});case M:return Object(i.a)(Object(i.a)({},e),{},{proyecto:e.proyectos.filter((function(e){return e._id===t.payload}))});case G:return Object(i.a)(Object(i.a)({},e),{},{proyectos:e.proyectos.filter((function(e){return e._id!==t.payload})),proyecto:null});case D:return Object(i.a)(Object(i.a)({},e),{},{mensaje:t.payload});default:return e}},re=a(35),ce=a.n(re).a.create({baseURL:"https://git.heroku.com/pacific-cliffs-09655.git"}),ne=function(e){var t=Object(r.useReducer)(ae,{proyectos:[],formulario:!1,errorformulario:!1,proyecto:null,mensaje:null}),a=Object(l.a)(t,2),c=a[0],n=a[1],o=function(){var e=Object(P.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.get("/api/proyectos");case 3:t=e.sent,n({type:L,payload:t.data.proyectos}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n({type:D,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(P.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.post("/api/proyectos",t);case 3:a=e.sent,n({type:F,payload:a.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n({type:D,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(P.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.delete("api/proyectos/".concat(t));case 3:n({type:G,payload:t}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),n({type:D,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(O.Provider,{value:{formulario:c.formulario,proyectos:c.proyectos,errorformulario:c.errorformulario,proyecto:c.proyecto,mensaje:c.mensaje,mostrarFormulario:function(){n({type:I})},obtenerProyectos:o,agregarProyecto:s,mostrarError:function(){n({type:U})},proyectoActual:function(e){n({type:M,payload:e})},eliminarProyecto:i},children:e.children})},oe=function(e,t){switch(t.type){case Y:return Object(i.a)(Object(i.a)({},e),{},{tareasproyecto:t.payload});case z:return Object(i.a)(Object(i.a)({},e),{},{tareasproyecto:[t.payload].concat(Object(S.a)(e.tareasproyecto)),errortarea:!1});case B:return Object(i.a)(Object(i.a)({},e),{},{errortarea:!0});case H:return Object(i.a)(Object(i.a)({},e),{},{tareasproyecto:e.tareasproyecto.filter((function(e){return e._id!==t.payload}))});case V:return Object(i.a)(Object(i.a)({},e),{},{tareasproyecto:e.tareasproyecto.map((function(e){return e._id===t.payload._id?t.payload:e}))});case J:return Object(i.a)(Object(i.a)({},e),{},{tareaseleccionada:t.payload});case X:return Object(i.a)(Object(i.a)({},e),{},{tareaseleccionada:null});default:return e}},se=function(e){var t=Object(r.useReducer)(oe,{tareasproyecto:[],errortarea:!1,tareaseleccionada:null}),a=Object(l.a)(t,2),c=a[0],n=a[1],o=function(){var e=Object(P.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.get("/api/tareas",{params:{proyecto:t}});case 3:a=e.sent,n({type:Y,payload:a.data.tareas}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(P.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.post("/api/tareas",t);case 3:e.sent,n({type:z,payload:t}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(P.a)(_.a.mark((function e(t,a){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.delete("api/tareas/".concat(t),{params:{proyecto:a}});case 3:n({type:H,payload:t}),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(P.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.put("/api/tareas/".concat(t._id),t);case 3:a=e.sent,console.log(a),n({type:V,payload:a.data.tarea}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(h.Provider,{value:{tareasproyecto:c.tareasproyecto,errortarea:c.errortarea,tareaseleccionada:c.tareaseleccionada,obtenerTareas:o,agregarTarea:s,validarTarea:function(){n({type:B})},eliminarTarea:i,guardarTareaActual:function(e){n({type:J,payload:e})},actualizarTarea:u,limpiarTarea:function(){n({type:X})}},children:e.children})},ie=function(e,t){switch(t.type){case Z:return{alerta:t.payload};case q:return{alert:null};default:return e}},le=function(e){var t=Object(r.useReducer)(ie,{alerta:null}),a=Object(l.a)(t,2),c=a[0],n=a[1];return Object(p.jsx)(b.Provider,{value:{alerta:c.alerta,mostrarAlerta:function(e,t){n({type:Z,payload:{msg:e,categoria:t}}),setTimeout((function(){n({type:q})}),3e3)}},children:e.children})},ue=function(e,t){switch(t.type){case K:case $:return localStorage.setItem("token",t.payload.token),Object(i.a)(Object(i.a)({},e),{},{autenticado:!0,mensaje:null,cargando:!0});case Q:case ee:case te:return localStorage.removeItem("token"),Object(i.a)(Object(i.a)({},e),{},{token:null,mensaje:t.payload,usuario:null,autenticado:null,cargando:!1});case W:return Object(i.a)(Object(i.a)({},e),{},{usuario:t.payload,autenticado:!0,cargando:!0});default:return e}},be=function(e){e?ce.defaults.headers.common["x-auth-token"]=e:delete ce.defaults.headers.common["x-auth-token"]},je=function(e){var t={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null,cargando:!0},a=Object(r.useReducer)(ue,t),c=Object(l.a)(a,2),n=c[0],o=c[1],s=function(){var e=Object(P.a)(_.a.mark((function e(t){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.post("/api/usuarios",t);case 3:a=e.sent,o({type:K,payload:a.data}),i(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},o({type:Q,payload:r});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(P.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem("token"))&&be(t),e.prev=2,e.next=5,ce.get("/api/auth");case 5:a=e.sent,o({type:W,payload:a.data.usuario}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),o({type:ee});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(P.a)(_.a.mark((function e(t){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.post("/api/auth",t);case 3:a=e.sent,o({type:$,payload:a.data}),i(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},o({type:ee,payload:r});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(j.Provider,{value:{token:n.token,autenticado:n.autenticado,usuario:n.usuario,mensaje:n.mensaje,cargando:n.cargando,registartUsuarios:s,iniciarSesion:u,usuarioAutenticado:i,cerrarSesion:function(){o({type:te})}},children:e.children})},pe=a(36),de=function(e){var t=e.component,a=Object(pe.a)(e,["component"]),c=Object(r.useContext)(j),n=c.autenticado,o=c.cargando,s=c.usuarioAutenticado;return Object(r.useEffect)((function(){s()}),[]),Object(p.jsx)(k.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){return n||o?Object(p.jsx)(t,Object(i.a)({},e)):Object(p.jsx)(k.a,{to:"/admin-tareas-react"})}}))},me=localStorage.getItem("token");me&&be(me);var Oe=function(){return Object(p.jsx)(ne,{children:Object(p.jsx)(se,{children:Object(p.jsx)(le,{children:Object(p.jsx)(je,{children:Object(p.jsx)(u.a,{children:Object(p.jsxs)(k.d,{children:[Object(p.jsx)(k.b,{exact:!0,path:"/admin-tareas-react",component:d}),Object(p.jsx)(k.b,{exact:!0,path:"/nuevacuenta",component:m}),Object(p.jsx)(de,{exact:!0,path:"/proyectos",component:A})]})})})})})})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),r(e),c(e),n(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Oe,{})}),document.getElementById("root")),fe()}},[[68,1,2]]]);
//# sourceMappingURL=main.d77fd0e6.chunk.js.map