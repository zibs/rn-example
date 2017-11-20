import Immutable from 'seamless-immutable';

export const quizApiResponse = {
  response_code: 0,
  results: [
    {
      category: 'General Knowledge',
      type: 'boolean',
      difficulty: 'hard',
      question: 'This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.',
      correct_answer: 'True',
      incorrect_answers: ['False']
    },
    {
      category: 'Science & Nature',
      type: 'boolean',
      difficulty: 'hard',
      question:
        'It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.',
      correct_answer: 'True',
      incorrect_answers: ['False']
    },
    {
      category: 'Entertainment: Video Games',
      type: 'boolean',
      difficulty: 'hard',
      question:
        'In &quot;Metal Gear Solid 2&quot;, you will see through the eyes of Psycho Mantis if you go first person during his boss fight.',
      correct_answer: 'True',
      incorrect_answers: ['False']
    },
    {
      category: 'Science & Nature',
      type: 'boolean',
      difficulty: 'hard',
      question: 'Scientists can grow teeth from urine.',
      correct_answer: 'True',
      incorrect_answers: ['False']
    },
    {
      category: 'Entertainment: Video Games',
      type: 'boolean',
      difficulty: 'hard',
      question:
        'TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy',
      correct_answer: 'False',
      incorrect_answers: ['True']
    },
    {
      category: 'General Knowledge',
      type: 'boolean',
      difficulty: 'hard',
      question: 'Pluto is a planet.',
      correct_answer: 'False',
      incorrect_answers: ['True']
    },
    {
      category: 'Entertainment: Japanese Anime & Manga',
      type: 'boolean',
      difficulty: 'hard',
      question:
        'Throughout the entirety of &quot;Dragon Ball Z&quot;, Goku only kills two characters: a miniboss named Yakon and Kid Buu.',
      correct_answer: 'True',
      incorrect_answers: ['False']
    },
    {
      category: 'General Knowledge',
      type: 'boolean',
      difficulty: 'hard',
      question: 'In Scandinavian languages, the letter &Aring; means river.',
      correct_answer: 'True',
      incorrect_answers: ['False']
    },
    {
      category: 'Entertainment: Japanese Anime & Manga',
      type: 'boolean',
      difficulty: 'hard',
      question: 'Druid is a mage class in &quot;Log Horizon&quot;.',
      correct_answer: 'False',
      incorrect_answers: ['True']
    },
    {
      category: 'Entertainment: Japanese Anime & Manga',
      type: 'boolean',
      difficulty: 'hard',
      question: 'In the &quot;To Love-Ru&quot; series, Peke is considered a female robot.',
      correct_answer: 'True',
      incorrect_answers: ['False']
    }
  ]
};

export const finishedQuizQuestions = [
  {
    category: 'General Knowledge',
    type: 'boolean',
    difficulty: 'hard',
    question: 'This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
    answered: true
  },
  {
    category: 'Science & Nature',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
    answered: true
  },
  {
    category: 'Entertainment: Video Games',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'In &quot;Metal Gear Solid 2&quot;, you will see through the eyes of Psycho Mantis if you go first person during his boss fight.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
    answered: true
  },
  {
    category: 'Science & Nature',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Scientists can grow teeth from urine.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
    answered: true
  },
  {
    category: 'Entertainment: Video Games',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy',
    correct_answer: 'False',
    incorrect_answers: ['True'],
    answered: false
  },
  {
    category: 'General Knowledge',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Pluto is a planet.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
    answered: false
  },
  {
    category: 'Entertainment: Japanese Anime & Manga',
    type: 'boolean',
    difficulty: 'hard',
    question:
      'Throughout the entirety of &quot;Dragon Ball Z&quot;, Goku only kills two characters: a miniboss named Yakon and Kid Buu.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
    answered: false
  },
  {
    category: 'General Knowledge',
    type: 'boolean',
    difficulty: 'hard',
    question: 'In Scandinavian languages, the letter &Aring; means river.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
    answered: false
  },
  {
    category: 'Entertainment: Japanese Anime & Manga',
    type: 'boolean',
    difficulty: 'hard',
    question: 'Druid is a mage class in &quot;Log Horizon&quot;.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
    answered: false
  },
  {
    category: 'Entertainment: Japanese Anime & Manga',
    type: 'boolean',
    difficulty: 'hard',
    question: 'In the &quot;To Love-Ru&quot; series, Peke is considered a female robot.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
    answered: true
  }
];

export const finishQuizState = Immutable({
  fetching: null,
  questions: finishedQuizQuestions,
  currentQuestionIndex: 9,
  error: null
});

export const singleQuestion = {
  category: 'General Knowledge',
  type: 'boolean',
  difficulty: 'hard',
  question: 'This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.',
  correct_answer: 'True',
  incorrect_answers: ['False'],
  answered: true
};
