// const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')

async function getGoals(req, res) {
  const goals = await Goal.find()

  res.status(200).json(goals)
}

async function setGoal(req, res) {
  const goal = await Goal.create({
    text: req.body.text,
  })

  res.status(200).json(goal)
}

async function updateGoal(req, res) {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedGoal)
}

async function deleteGoal(req, res) {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  await goal.remove()
  res.status(200).json({ id: req.params.id })
}

module.exports = { getGoals, setGoal, updateGoal, deleteGoal }
