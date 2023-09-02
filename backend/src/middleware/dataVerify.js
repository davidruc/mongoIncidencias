import {check} from 'express-validator';

let trainer = {
    nombre: "nombre",
    clave: "clave",
    email_personal: "email",
    email_corporativo: "email_trabajo",
    telefono_movil: "telefono",
    telefono_residencia: "telefono_fijo",
    telefono_empresa: "contacto_empresa",
    telefono_movil_empresarial: "telefono_empresarial",
    cuenta_bancaria: "cuenta_bancaria",
    rol: "rol"
};

export const trainersPostDtoV1 = [
   
    check(`${trainer.nombre}`)
    .notEmpty().withMessage(`El ${trainer.nombre} es obligatorio.`)
    .isString().withMessage(`El ${trainer.nombre} debe ser un string.`)
    .matches(/^[a-zA-Z]+$/).withMessage(`El ${trainer.nombre} solo recibe letras.`),

    check(`${trainer.clave}`)
    .notEmpty().withMessage(`El ${trainer.clave} es obligatiorio`)
    .isString().withMessage(`El ${trainer.clave} debe ser un string.`),

    check(`${trainer.email_personal}`)
    .notEmpty().withMessage(`El ${trainer.email_personal} es obligatiorio`)
    .isString().withMessage(`El ${trainer.email_personal} debe ser un string.`),

    check(`${trainer.email_corporativo}`)
    .isString().optional().withMessage(`El ${trainer.email_corporativo} debe ser un string.`),

    check(`${trainer.telefono_movil}`)
    .notEmpty().withMessage(`El ${trainer.telefono_movil} es obligatiorio`)
    .isString().withMessage(`El ${trainer.telefono_movil} debe ser un string.`),    

    check(`${trainer.telefono_residencia}`)
    .isString().optional().withMessage(`El ${trainer.telefono_residencia} debe ser un string.`),

    check(`${trainer.telefono_empresa}`)
    .isString().optional().withMessage(`El ${trainer.telefono_empresa} debe ser un string.`),

    check(`${trainer.telefono_movil_empresarial}`)
    .isString().optional().withMessage(`El ${trainer.telefono_movil_empresarial} debe ser un string.`),

    check(`${trainer.cuenta_bancaria}`)
    .isInt().optional().withMessage(`El ${trainer.cuenta_bancaria} debe ser un numero entero.`),

    check(`${trainer.rol}`)
    .notEmpty().withMessage(`El ${trainer.rol} es obligatiorio`)
    .isString().withMessage(`El ${trainer.rol} debe ser un string.`),
];

let incidencia = {
    trainerId: "trainer",
    categoria: "categoria_incidencia",
    tipo_incidencia: "tipo",
    fecha_reporte: "fecha",
    area_incidencia: "area",
    equipo_averiado: "equipo",
    color_equipo: "color",
    codigo_equipo:"codigo",
    descripcion: "descripcion_incidencia",
};

export const incidenciasPostDtoV1 = [
    check(`${incidencia.trainerId}`)
    .notEmpty().withMessage(`El ${incidencia.trainerId} es obligatorio.`)
    .isNumeric().withMessage(`El ${incidencia.trainerId} debe ser el numero del id de un trainer.`),

    check(`${incidencia.categoria}`)
    .notEmpty().withMessage(`El ${incidencia.categoria} es obligatiorio`)
    .isString().withMessage(`El ${incidencia.categoria} debe ser un string.`),

    check(`${incidencia.tipo_incidencia}`)
    .notEmpty().withMessage(`El ${incidencia.tipo_incidencia} es obligatiorio`)
    .isString().withMessage(`El ${incidencia.tipo_incidencia} debe ser un string.`),    

    check(`${incidencia.fecha_reporte}`)
    .notEmpty().withMessage(`El ${incidencia.fecha_reporte} es obligatiorio`)
    .isString().withMessage(`El ${incidencia.fecha_reporte} el valor ingresado es un string con el formato AAAA-MM-DD.`),
    
    check(`${incidencia.area_incidencia}`)
    .notEmpty().withMessage(`El ${incidencia.area_incidencia} es obligatiorio`)
    .isString().withMessage(`El ${incidencia.area_incidencia} debe ser un string.`),
    
    check(`${incidencia.equipo_averiado}`)
    .notEmpty().withMessage(`El ${incidencia.equipo_averiado} es obligatiorio`)
    .isString().withMessage(`El ${incidencia.equipo_averiado} debe ser un string.`),
    
    check(`${incidencia.color_equipo}`)
    .isString().optional().withMessage(`El ${incidencia.color_equipo} debe ser un string.`),

    check(`${incidencia.codigo_equipo}`)
    .notEmpty().withMessage(`El ${incidencia.codigo_equipo} es obligatiorio`)
    .isString().withMessage(`El ${incidencia.codigo_equipo} debe ser un string.`),

    check(`${incidencia.descripcion}`)
    .notEmpty().withMessage(`El ${incidencia.descripcion} es obligatiorio`)
    .isString().withMessage(`El ${incidencia.descripcion} debe ser un string.`),
];