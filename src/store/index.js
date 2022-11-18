import { createStore } from 'vuex'
import axios from 'axios'
import covers from '@/utils/mocks/covers.mock.json'
import advice from '@/utils/mocks/advice.mock.json'

export default createStore({
  state: {
    quote: null,
    selected_covers: [],
    deductibleFormula: advice.adviced_forumula.deductibleFormula, // set formula from the advice
    coverageCeilingFormula: advice.adviced_forumula.coverageCeilingFormula // set formula from the advice
  },
  getters: {
    covers(state) {
      if (state.quote) {
        covers.map(cover => { // map into the covers array (mock)
          cover.price = state.quote.grossPremiums[cover.key] // set corresponding price to the cover
          if (advice.adviced_forumula.covers.includes(cover.key)) { // if the cover is includes in the covers adviced
            cover.selected = true // set the cover at selected true
            state.selected_covers.push(cover.key)  // push the cover key in the list of selected covers
          }
        })
        return covers
      }
    },
    totalPrice(state) {
      if (state.quote) {
        let total = 0
        state.selected_covers.forEach(cover => { // iterate over each selected cover
          total += state.quote.grossPremiums[cover] // add cover price to the total
        })
        return Math.round(total * 10) / 10
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

        if (response.data) {
          commit('SET_QUOTE', response.data.data) // mutation with response data
        }
        return response

      } catch (error) {
        return { error: true }
      }

    },
  },
  mutations: {
    SET_QUOTE(state, data) {
      state.quote = data
    },
    SET_SELECTED_COVERS(state, cover) {
      if (state.selected_covers.includes(cover)) { // if cover is already in the list of covers selected
        const index = state.selected_covers.findIndex(e => e === cover)
        state.selected_covers.splice(index, 1) // remove this cover
      } else { // else
        state.selected_covers.push(cover) // add cover to the list
      }
    },
    SET_FORMULA(state, formula) {
      state[formula.name] = formula.key // set the formula key (small, medium, large) to the formula name (deductibleFormula | coverageCeilingFormula)
    },
    RESET_STATE(state) {
      state.quote = null
      state.selected_covers = []
    }
  },
},
)
