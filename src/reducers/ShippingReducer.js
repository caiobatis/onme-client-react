const INITAL_STATE = {
  coins: [
    {
      label: 'USD',
      value: 1
    },
    {
      label: 'EUR',
      value: 2
    },
    {
      label: 'MXN',
      value: 3
    }
  ],
  loading: false,
  reasons: [
    {
      label: 'Motivo A',
      value: 1
    },
    {
      label: 'Motivo B',
      value: 2
    },
    {
      label: 'Motivo C',
      value: 3
    },
    {
      label: 'Motivo D',
      value: 4
    }
  ]
}

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}



