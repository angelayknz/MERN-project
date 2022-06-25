const asyncHandler = require('express-async-handler')

async function getGoals(req, res) {
  res.status(200).json({ msg: 'get goals' })
}

async function setGoal(req, res) {
  res.status(200).json({ msg: 'set goal' })
}

async function updateGoal(req, res) {
  res.status(200).json({ msg: `update goal ${req.params.id}` })
}

async function deleteGoal(req, res) {
  res.status(200).json({ msg: `delete goal ${req.params.id}` })
}

module.exports = { getGoals, setGoal, updateGoal, deleteGoal }
