import * as APIUtil from '../util/recipe_util';

export const RECEIVE_FILTERED_RECIPES = 'RECEIVE_FILTERED_RECIPES';
export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const RECEIVE_RECIPE_ERRORS = 'RECEIVE_RECIPE_ERRORS';
export const RESET_RECIPE_ERRORS = 'RESET_RECIPE_ERRORS';
export const START_LOADING_RECIPES = 'START_LOADING_RECIPES';


export const startLoadingRecipes = () => ({
  type: START_LOADING_RECIPES,
});

const receiveFilteredRecipes = (payload, { term }) => ({
  type: RECEIVE_FILTERED_RECIPES,
  payload,
  term,
});

const receiveAllRecipes = payload => ({
  type: RECEIVE_ALL_RECIPES,
  payload,
});

export const receiveRecipe = payload => ({
  type: RECEIVE_RECIPE,
  payload,
});

const receiveRecipeErrors = errors => ({
  type: RECEIVE_RECIPE_ERRORS,
  errors,
});

const resetRecipeErrors = () => ({
  type: RESET_RECIPE_ERRORS,
});

export const requestAllRecipes = () => (dispatch) => {
  dispatch(startLoadingRecipes());
  return APIUtil.fetchRecipes()
    .then(
      allFetchedPayloads => dispatch(receiveAllRecipes(allFetchedPayloads)),
      err => dispatch(receiveRecipeErrors(err.responseJSON)),
    );
};

export const requestFilteredRecipes = search => (dispatch) => {
  dispatch(startLoadingRecipes());
  return APIUtil.fetchRecipes(search)
    .then(filteredRecipes => dispatch(receiveFilteredRecipes(filteredRecipes, { term: search })));
};

export const requestRecipe = id => (dispatch) => {
  dispatch(startLoadingRecipes());
  return APIUtil.fetchRecipe(id)
    .then((fetchedPayload) => {
      dispatch(receiveRecipe(fetchedPayload));
      return fetchedPayload.recipe;
    });
};

export const createRecipe = recipe => dispatch => (
  APIUtil.createRecipe(recipe)
    .then(
      (newRecipe) => {
        dispatch(receiveRecipe(newRecipe));
        return newRecipe;
      },
      err => dispatch(receiveRecipeErrors(err.responseJSON)),
    )
);

export const updateRecipe = (recipe, id) => dispatch => (
  APIUtil.updateRecipe(recipe, id)
    .then(
      updatedRecipe => dispatch(receiveRecipe(updatedRecipe)),
      err => dispatch(receiveRecipeErrors(err.responseJSON)),
    )
);

export const clearRecipeErrors = () => dispatch => (
  dispatch(resetRecipeErrors())
);
