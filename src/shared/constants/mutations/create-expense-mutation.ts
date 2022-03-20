import { gql } from "apollo-angular";

export const CREATE_EXPENSE_MUTATION = gql`
    mutation CreateExpense($cost: Float!, $date: String!, $name: String!) {
        createExpense(cost: $cost, date: $date, name: $name) {
            cost
            date
            name
        }
    }
`;