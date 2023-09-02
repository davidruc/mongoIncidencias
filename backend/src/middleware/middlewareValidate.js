import {validationResult} from "express-validator";

export const postValidateTrainer =  async(req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    let { nombre, clave, email, email_trabajo, telefono,telefono_fijo, contacto_empresa, telefono_empresarial,  cuenta_bancaria, rol } = req.body 
    let data = { "nombre": nombre, "clave": clave, "email_personal": email, "email_corporativo": email_trabajo, "telefono_movil": telefono, "telefono_residencia": telefono_fijo , "telefono_empresa":  contacto_empresa, "telefono_movil_empresarial": telefono_empresarial, "cuenta_bancaria": cuenta_bancaria,"rol": rol } 
    for (const key in data) {
        if(data[key] === undefined) delete data[key];
    }
    req.body = data
    next()
}

export const postValidateIncidencia =  async(req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({error: errors.array()});
    let { trainer, categoria_incidencia, tipo, fecha, area, equipo, color, codigo,  descripcion_incidencia } = req.body 
    let data = { "trainerId": trainer, "categoria": categoria_incidencia,  "tipo_incidencia": tipo, "fecha_reporte":fecha, "area_incidencia": area, "equipo_averiado":equipo, "color_equipo":color, "codigo_equipo":codigo , "descripcion": descripcion_incidencia} ;
    for (const key in data) {
        if(data[key] === undefined) delete data[key];
    }
    req.body = data
    next()
}