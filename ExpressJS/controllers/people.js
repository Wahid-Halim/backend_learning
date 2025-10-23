// data
let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name)
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a input value" });
  res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide the input value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => {
    if (person.id === Number(id)) {
      return person;
    }
  });

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `Can't find this id ${id}` });
  }

  const updatedPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: [updatedPeople] });
};

const deletePerson = (req, res) => {
  const person = people.find((person) => {
    if (person.id === Number(req.params.id)) {
      return person;
    }
  });

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `Can't find this id ${req.params.id}` });
  }

  const newPeople = people.filter((person) => {
    if (person.id !== Number(req.params.id)) {
      return person;
    }
  });

  res.status(200).json({ success: true, data: [newPeople] });
};

module.exports = {
  getPeople,
  createPersonPostman,
  createPerson,
  updatePerson,
  deletePerson,
};
