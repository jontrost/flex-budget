import { gql } from "apollo-angular";

export const GET_EXPENSE_BY_ID_QUERY = gql`
    query Query($id: ID!) {
        expense(_id: $id) {
            _id
            cost
            date
            name
        }
    }
`;
