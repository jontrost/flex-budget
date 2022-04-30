import { gql } from "apollo-angular";

export const GET_EXPENSE_BY_ID_QUERY = gql`
    query Query($_id: ID!) {
        expense(_id: $_id) {
            _id
            cost
            date
            name
        }
    }
`;
