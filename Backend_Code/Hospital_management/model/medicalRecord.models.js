import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    prescriptions: [{
        medication: String,
        dosage: String,
        frequency: String
    }],
    tests: [{
        name: String,
        date: Date,
        result: String
    }],
    procedures: [{
        name: String,
        date: Date
    }],
    notes: {
        type: String,
        default: ""
    },
    // You can add more fields as needed
}, { timestamps: true });

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);
