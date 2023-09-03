import mongoose from "mongoose";



const stSchema = new mongoose.Schema({
    folio:{
        type: String,
        required: [true, 'El folio es requerido'],
        unique: true
          },
    region:{
        type: String, 
        required: [true, 'La region es requerida'],
           },
    
    tienda:{
        type: String,
        required: [true, 'El nombre de la tienda es requerido']
            },
    trabajo:{
        type: String, 
        required: [true, 'Los datos del trabajo son requeridos']
            },
    fecha:{
        type:Number, 
        required: [true, 'La fecha correspondiente al ST es necesaria']

    },
    estado:{
        type: String,
        required: [true, 'No hay un estado asignado']
    },   
    
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'

    }]
})

const ST = mongoose.models.ST || mongoose.model("ST", stSchema);

export default Comment;




