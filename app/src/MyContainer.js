import MyComponent from './MyComponent'
import { drizzleConnect } from 'drizzle-react'
import { fetchJoke } from './reducers'

const mapStateToProps = state => ({
  accounts: state.accounts,
  SimpleStorage: state.contracts.SimpleStorage,
  TutorialToken: state.contracts.TutorialToken,
  drizzleStatus: state.drizzleStatus
})

const mapDispatchToProps = dispatch => ({
  fetchJoke: () => fetchJoke(dispatch),
  fetchTodo: () => dispatch({type: 'LOOKUP_TODO'})
})

const MyContainer = drizzleConnect(
  MyComponent,
  mapStateToProps,
  mapDispatchToProps
)

export default MyContainer
