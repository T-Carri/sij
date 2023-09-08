import mongoose from "mongoose";



const stSchema = new mongoose.Schema({
    region:{
        type: String, 
        required: [true, 'La region es requerida'],
           },
    folio:{
        type: String,
        
        unique: true
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
        type:String, 
        required: [true, 'La fecha correspondiente al ST es necesaria']

    },
    presupuestado:{
        type:Boolean,
    },

    estado:{
        type: String,
        required: [true, 'No hay un estado asignado']
    },  
    ppto:{
    type: String
       },
    peticioncancelacion:{
      type: Boolean
         }, 
     finalizado:{
        type:Boolean
     },    
    
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'

    }]
})

const ST = mongoose.models.ST || mongoose.model("ST", stSchema);

export default ST






