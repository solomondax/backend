const NotesModel = require("../models/notes.model");

let notesControllerCreate = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNotes = await NotesModel.create({
      title,
      description,
    });

    res.status(201).json({
      message: "Note Created Successfully",
      data: newNotes,
    });
  } catch (error) {
    console.log(error);
  }
};
let notesControllerGetAll = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNotes = await NotesModel.find();

    res.status(200).json({
      message: "data fetched Successfully",
      data: newNotes,
    });
  } catch (error) {
    console.log(error);
  }
};
let notesControllerSingle = async (req, res) => {
  try {
    let noteId = req.params.id;

    let newNotes = await NotesModel.findById(noteId);

    res.status(200).json({
      message: "Single note fetched succesfully",
      data: newNotes,
    });
  } catch (error) {
    console.log(error);
  }
};
let notesControllerUpdate = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    let newNotes = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });

    res.status(200).json({
      message: "Single note updated succesfully",
      data: newNotes,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
    console.log(error);
  }
};
let notesControllerDelete = async (req, res) => {
  try {
    let noteId = req.params.id;
    // let body = req.body

    let newNotes = await NotesModel.findByIdAndDelete(noteId);

    res.status(200).json({
      message: "Single note updated succesfully",
      data: newNotes,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
    console.log(error);
  }
};
let notesControllerPatch = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    let newNotes = await NotesModel.findByIdAndUpdate(noteId, body,{new:true});

    res.status(200).json({
      message: "patch  note updated succesfully",
      data: newNotes,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
    console.log(error);
  }
};

module.exports = {
  notesControllerCreate,
  notesControllerGetAll,
  notesControllerSingle,
  notesControllerUpdate,
  notesControllerDelete,
  notesControllerPatch,
};
