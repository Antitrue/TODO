const data = [
  {
    description: 'Completed task',
    createdAt: new Date(2024, 7, 2),
    className: 'completed',
    id: 123,
    done: true,
    timeInSec: 789,
  },
  {
    description: 'Editing task',
    createdAt: new Date(2024, 7, 3),
    className: 'editing',
    edit: true,
    id: 456,
    done: false,
    timeInSec: 895,
  },
  {
    description: 'Active task',
    createdAt: new Date(2024, 7, 4, 12, 10, 0),
    className: null,
    id: 789,
    done: false,
    timeInSec: 674,
  },
]

export default data
