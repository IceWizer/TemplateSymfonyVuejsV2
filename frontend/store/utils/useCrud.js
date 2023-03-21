import crud from "./crud";
import {apiRequest} from "../axios";

const init = (modelName) =>
{
    const { actions, getters, mutations, name, state } = crud(modelName);

    actions.fetchItems = ({ commit }, param) => {
        return new apiRequest(
            `${modelName}`,
            "get",
            (response) => {
                commit("setItems", response.data);
            },
            param
        )
    }

    actions.fetchItem = ({ commit }, param) => {
        return new apiRequest(
            `${modelName}/${param.id}`,
            "get",
            (response) => {
                commit("setItem", response.data);
            },
            param
        )
    }

    actions.createItem = ({ commit }, param) => {
        return new apiRequest(
            `${modelName}`,
            "post",
            (response) => {
                commit("setItem", response.data);
            },
            param
        )
    }

    actions.updateItem = ({ commit }, param) => {
        return new apiRequest(
            `${modelName}/${param.id}`,
            "put",
            (response) => {
                commit("setItem", response.data);
            },
            param
        )
    }

    actions.deleteItem = ({ commit }, param) => {
        return new apiRequest(
            `${modelName}/${param.id}`,
            "delete",
            (response) => {
                commit("setItem", response.data);
            },
            param
        )
    }

    return {
        actions,
        getters,
        mutations,
        name,
        state,
    }
}
