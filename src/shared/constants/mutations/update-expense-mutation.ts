import { gql } from "apollo-angular";

export const UPDATE_EXPENSE_MUTATION = gql`
    mutation Mutation($id: ID!, $cost: Float, $date: String, $name: String) {
        updateExpense(_id: $id, cost: $cost, date: $date, name: $name) {
            _id
            cost
            date
            name
        }
    }
`;
