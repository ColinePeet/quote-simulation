import { createStore } from 'vuex'
import axios from 'axios'
import covers from '@/utils/mocks/covers.mock.json'
import advice from '@/utils/mocks/advice.mock.json'

export default createStore({
  state: {
    quote: null,
    selected_covers: [],
    deductibleFormula: advice.adviced_forumula.deductibleFormula,
    coverageCeilingFormula: advice.adviced_forumula.coverageCeilingFormula
  },
  getters: {
    covers(state) {
      if (state.quote) {
        covers.map(cover => {
          cover.price = state.quote.grossPremiums[cover.key]
          if (advice.adviced_forumula.covers.includes(cover.key)) {
            cover.selected = true
            state.selected_covers.push(cover.key)
          }
        })
        return covers
      }
    },
    totalPrice(state) {
      if (state.quote) {
        let total = 0
        state.selected_covers.forEach(cover => {
          total += state.quote.grossPremiums[cover]
        })
        return  Math.round(total * 10) / 10
      }
    },
  },
  actions: {
    async fetchQuote({ commit }, payload) {
      try {
        const config = {
          method: 'POST',
          url: 'https://staging-gtw.seraphin.be/quotes/professional-liability',
          headers: {
            'X-Api-Key': 'fABF1NGkfn5fpHuJHrbvG3niQX6A1CO53ftF9ASD',
            'Content-Type': 'application/json'
          },
          data: payload
        }

        const response = await axios(config)
        console.log(response)
        if (response.data) {
          // console.log(response.data)
          commit('SET_QUOTE', response.data.data)
        }
        // console.log(response)


      } catch (error) {
        console.log(error)
      }

    },
  },
  mutations: {
    SET_QUOTE(state, data) {
      state.quote = data
    },
    SET_SELECTED_COVERS(state, cover) {
      if (state.selected_covers.includes(cover)) {
        const index = state.selected_covers.findIndex(e => e === cover)
        state.selected_covers.splice(index, 1)
      } else {
        console.log('add', cover)
        state.selected_covers.push(cover)
      }
    },
    SET_FORMULA(state, formula) {
      state[formula.name] = formula.key
    },
    RESET_STATE(state) {
      state.quote = null
      state.selected_covers = []
    }
  },
},
)
