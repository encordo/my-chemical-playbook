import { Schema, model } from "mongoose";

const chemicalProductSchema = new Schema({
    name: {
        type: String,
        required: [true, "El producto debe tener nombre."],
        trim: true,
        maxlength: [100, "El nombre no puede tener más de 100 caracteres."]
    },
    formula: {
        type: String,
        required: true,
        trim: true
    },
    cas: {
        type: String,
        required: true,
        trim: true,
    },
    ce: {
        type: String,
        required: true,
        trim: true
    },
    molecularWeight: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value > 0,
            message: 'El peso molecular debe ser mayor que cero'

        }
    },
    quantity: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value > 0,
            message: 'La cantidad debe ser mayor que cero'
        }
    }
}
,{ timestamps: true });

const instrumentSchema = new Schema({
    name: {
        type: String,
        required: [true, "El producto debe tener nombre."],
        trim: true,
        maxlength: [100, "El nombre no puede tener más de 100 caracteres."]
    },
    quantity:{
        type: Number,
        required: true,
        validate: {
            validator: (value) => value > 0,
            message: 'La cantidad debe ser mayor que cero'
        }
    }
},
{ timestamps: true }
);

const experimentSchema = new Schema({
    title: {
        type: String,
        required: [true, "El título del experimento es obligatorio."],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "El experimento requiere una breve descripción."],
        trim: true
    },
    instructions: {
        type: String,
        required: [true, "El experimento necesita tener instrucciones."]
    },
    chemical_products: {
        type: [chemicalProductSchema],
        default: []
    },
    instruments: {
        type: [instrumentSchema],
        default: []
    }
},{ timestamps: true });

export const ExperimentModel = model("Experiment", experimentSchema);