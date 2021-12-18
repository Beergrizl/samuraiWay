import {addPostActionCreator, deletePost, profileReducer} from "./profile-reducer";

let state = {
    likesCount: [
        {id: 1, message: 'Wats up man?', count: 12},
        {id: 2, message: 'How are ya doing', count: 19}],
    profile: null,
    status: ''
}

it('length of posts should be increment', () => {
    //1 test data
    let action = addPostActionCreator('hello')

    //2.action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.likesCount.length).toBe(3)

})
it('message should be equal action message', () => {
    //1 test data
    let action = addPostActionCreator('hello')

    //2.action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.likesCount[2].message).toBe('hello')
})
it('after deleting length should be decrement', () => {
    //1 test data
    let action = deletePost(1)

    //2.action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.likesCount.length).toBe(1)
})
