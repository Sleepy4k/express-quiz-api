import db from '../models';
const { quiz, category, level } = db;

// GET /quizzes
export const index = (req, res, next) => {
  quiz
    .findAll({
      include: [
        { model: category, attributes: ['name'] },
        { model: level, attributes: ['name'] },
      ],
    })
    .then((quizzes) => {
      res.status(202).json({ status: 'success', message: 'Quizzes fetched successfully', data: quizzes });
    })
    .catch((error) => {
      res.status(500).json({ status: 'error', message: 'Internal server error', data: error });
    });
};

// POST /quizzes/store
export const store = (req, res, next) => {
  const { question, answer } = req.body;

  quiz
    .create({ question, answer })
    .then((quiz) => {
      res.status(201).json({ status: 'success', message: 'Quiz created successfully', data: quiz });
    })
    .catch((error) => {
      res.status(500).json({ status: 'error', message: 'Internal server error', data: error });
    });
};

// GET /quizzes/:id
export const show = (req, res, next) => {
  const id = req.params.id;

  quiz
    .findByPk(id, { rejectOnEmpty: true })
    .then((quiz) => {
      res.status(206).json({ status: 'success', message: 'Quiz fetched successfully', data: quiz });
    })
    .catch((error) => {
      res.status(500).json({ status: 'error', message: 'Internal server error', data: error });
    });
};

// PUT /quizzes/:id
export const update = (req, res, next) => {
  const id = req.params.id;
  const { question, answer } = req.body;

  quiz
    .findByPk(id, { rejectOnEmpty: true })
    .then((quiz) => {
      quiz.question = question;
      quiz.answer = answer;
      return quiz.save();
    })
    .then((quiz) => {
      res.status(202).json({ status: 'success', message: 'Quiz updated successfully', data: quiz });
    })
    .catch((error) => {
      res.status(500).json({ status: 'error', message: 'Internal server error', data: error });
    });
};

// DELETE /quizzes/:id
export const destroy = (req, res, next) => {
  const id = req.params.id;

  quiz
    .findByPk(id, { rejectOnEmpty: true })
    .then((quiz) => {
      return quiz.destroy();
    })
    .then(() => {
      res.status(202).json({ status: 'success', message: 'Quiz deleted successfully', data: null });
    })
    .catch((error) => {
      res.status(500).json({ status: 'error', message: 'Internal server error', data: error });
    });
};

// GET /quizzes/category/:id
export const categoryId = (req, res, next) => {
  const id = req.params.id;

  quiz
    .findAll({ where: { categoryId: id } })
    .then((quizzes) => {
      res.status(202).json({ status: 'success', message: 'Quizzes fetched successfully', data: quizzes });
    })
    .catch((error) => {
      res.status(500).json({ status: 'error', message: 'Internal server error', data: error });
    });
};

// GET /quizzes/level/:id
export const levelId = (req, res, next) => {
  const id = req.params.id;

  quiz
    .findAll({ where: { levelId: id } })
    .then((quizzes) => {
      res.status(202).json({ status: 'success', message: 'Quizzes fetched successfully', data: quizzes });
    })
    .catch((error) => {
      res.status(500).json({ status: 'error', message: 'Internal server error', data: error });
    });
};
