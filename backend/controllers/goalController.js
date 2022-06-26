// const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')
const User = require('../model/userModel')

async function getGoals(req, res) {
  const goals = await Goal.find({ user: req.user.id })

  res.status(200).json(goals)
}

async function setGoal(req, res) {
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(goal)
}

async function updateGoal(req, res) {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('user not found')
  }

  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('user not authorized')
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

  if (!user) {
    res.status(401)
    throw new Error('user not found')
  }

  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('user not authorized')
  }

  await goal.remove()
  res.status(200).json({ id: req.params.id })
}

module.exports = { getGoals, setGoal, updateGoal, deleteGoal }
