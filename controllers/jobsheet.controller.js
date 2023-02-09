/**
 * Module dependencies.
 */
const db = require("../models");
const { quiz } = db;

/**
 * Submit an answer to a question.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
exports.one = async (req, res, next) => {
  const { quizId, answer } = req.body;

  try {
    await quiz
      .findOne({ where: { id: quizId } })
      .then((quiz) => {
        if (quiz.answer === answer) {
          res.status(200).json({
            status: "success",
            message: "Answer is correct",
            data: quiz || {},
          });
        } else {
          res.status(200).json({
            status: "success",
            message: "Answer is incorrect",
            data: quiz || {},
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: "Internal server error",
          data: error.message || {},
        });
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error.message || {},
    });
  }
};

/**
 * Send answers to many questions.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
exports.many = async (req, res, next) => {
  const { quizId, answer } = req.body;

  try {
    let correct = 0;
    let incorrect = 0;

    for (let i = 0; i < quizId.length; i++) {
      await quiz
        .findOne({
          limit: 1,
          where: { id: quizId[i] },
        })
        .then((quiz) => {
          if (quiz.answer === answer[i]) {
            correct++;
          } else {
            incorrect++;
          }
        })
        .catch((error) => {
          res.status(500).json({
            status: "error",
            message: "Internal server error",
            data: error.message || {},
          });
        });
    }

    res.status(200).json({
      status: "success",
      message:
        correct > incorrect ? "Answer is correct" : "Answer is incorrect",
      data: { correct, incorrect },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error.message || {},
    });
  }
};
